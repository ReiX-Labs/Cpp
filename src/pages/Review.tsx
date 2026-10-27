import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getCard } from "../data/cards";
import { courseCardLessons, eligibleReviewCardIds, type ReviewScope } from "../content/courseReview";
import { courseUrl } from "../content/curriculum";
import { actions, useStore } from "../lib/store";
import { newCard, previewInterval, startOfDay, type Grade } from "../lib/srs";
import Markdown from "../components/Markdown";
import ProgressRing from "../components/ProgressRing";

const SESSION_CAP = 40;

const GRADES: { g: Grade; label: string; cls: string }[] = [
  { g: "again", label: "Chưa nhớ", cls: "again" },
  { g: "hard", label: "Khó", cls: "hard" },
  { g: "good", label: "Nhớ", cls: "good" },
  { g: "easy", label: "Dễ", cls: "easy" },
];

export default function Review() {
  const [params, setParams] = useSearchParams();
  const state = useStore();
  const requested = params.get("scope");
  const scope: ReviewScope = requested === "course" || requested === "library" ? requested : "learned";
  const eligibleIds = eligibleReviewCardIds(scope, state.progress);
  return <div className="review-page">
    <div className="card pad review-scope">
      <label htmlFor="review-scope">Phạm vi ôn tập</label>
      <select id="review-scope" value={scope} onChange={(event) => setParams({ scope: event.target.value })}>
        <option value="learned">Các bài đã đánh dấu học</option>
        <option value="course">Toàn bộ lộ trình C++ cơ bản</option>
        <option value="library">Toàn bộ thư viện, gồm mở rộng</option>
      </select>
      <p className="muted">{scope === "learned"
        ? "Ôn các khái niệm từ những bài bạn đã đánh dấu trong lộ trình. Bạn có thể chọn toàn khóa để ôn kiến thức đã học trước đây."
        : scope === "course" ? "Ôn các khái niệm nền tảng trong khóa học. Mỗi bài còn có câu tự kiểm tra và phần tự viết để luyện sâu hơn."
        : "Thư viện có cả kiến thức mở rộng ngoài khóa cơ bản. Lịch ôn và kết quả trước đây của từng thẻ được giữ nguyên."}</p>
    </div>
    <ReviewSession key={scope} scope={scope} eligibleIds={eligibleIds} />
  </div>;
}

function ReviewSession({ scope, eligibleIds }: { scope: ReviewScope; eligibleIds: string[] }) {
  const state = useStore();

  // Build the initial due queue ONCE (snapshot), so grading doesn't reshuffle.
  const initialDue = useMemo(() => {
    const today = startOfDay();
    const srs = state.srs;
    return eligibleIds.filter((id) => !srs[id] || srs[id].due <= today).slice(0, SESSION_CAP);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [queue, setQueue] = useState<string[]>(initialDue);
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const startXp = useRef(state.xp);

  const currentId = queue[pos];
  const card = currentId ? getCard(currentId) : undefined;
  const finished = pos >= queue.length;

  const grade = (g: Grade) => {
    if (!currentId) return;
    actions.gradeCard(currentId, g);
    setReviewed((r) => r + 1);
    if (g === "again") {
      // re-show later in this same session
      setQueue((q) => [...q, currentId]);
    }
    setPos((p) => p + 1);
    setFlipped(false);
  };

  const learnMore = () => {
    const today = startOfDay();
    const more = eligibleIds
      .filter((id) => !queue.includes(id))
      .filter((id) => {
        const c = state.srs[id];
        return !c || c.due <= today || !c.introduced;
      })
      .slice(0, 10);
    if (more.length) {
      setQueue((q) => [...q, ...more]);
    }
  };

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished) return;
      if (!flipped && (e.code === "Space" || e.code === "Enter")) {
        e.preventDefault();
        setFlipped(true);
      } else if (flipped) {
        if (e.key === "1") grade("again");
        else if (e.key === "2") grade("hard");
        else if (e.key === "3") grade("good");
        else if (e.key === "4") grade("easy");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipped, finished, currentId]);

  if (initialDue.length === 0 && reviewed === 0) {
    return (
      <div className="review-wrap fade">
        <div className="empty card pad">
          <div className="emoji">✅</div>
          <h3>{eligibleIds.length ? "Đã ôn hết thẻ đến hạn trong phạm vi này" : "Chưa có bài nào trong phạm vi ôn"}</h3>
          <p className="muted">
            {eligibleIds.length ? "Quay lại khi thẻ đến hạn, hoặc chọn phạm vi khác ở phía trên."
              : "Học và đánh dấu một bài trong lộ trình, hoặc chọn toàn bộ khóa cơ bản nếu bạn đã học những chủ đề này trước đây."}
          </p>
          <div className="row center" style={{ justifyContent: "center", marginTop: 8 }}>
            <Link to={courseUrl("cpp-00")} className="btn primary">
              Mở lộ trình học
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (finished || !card) {
    const gained = state.xp - startXp.current;
    return (
      <div className="review-wrap fade">
        <div className="result card pad">
          <ProgressRing value={1} size={130} label={String(reviewed)} sub="thẻ đã ôn" color="var(--success)" />
          <h3>Hoàn thành buổi ôn! 🎉</h3>
          <p>
            Bạn vừa ôn {reviewed} thẻ và kiếm được <b>+{gained} XP</b>. Chuỗi ngày:{" "}
            <b>{state.streak.count} 🔥</b>
          </p>
          <div className="row center" style={{ justifyContent: "center" }}>
            <button className="btn primary" onClick={learnMore}>
              Ôn thêm 10 thẻ
            </button>
            <Link to="/" className="btn">
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const prevState = state.srs[currentId] ?? newCard();
  const remaining = queue.length - pos;

  return (
    <div className="review-wrap fade">
      <div className="review-top">
        <Link to="/" className="btn ghost sm">
          ← Thoát
        </Link>
        <div className="review-count">Còn lại: {remaining} thẻ · Đã ôn: {reviewed}</div>
      </div>
      <div className="bar" style={{ marginBottom: 20 }}>
        <span style={{ width: `${(pos / queue.length) * 100}%` }} />
      </div>

      <div className="flashcard" onClick={() => !flipped && setFlipped(true)} key={currentId + pos}>
        {card.tag && <span className="chip fc-tag">{card.tag}</span>}
        <div className="fc-face">
          <div className="fc-front">{card.front}</div>
          {flipped && (
            <div className="fade">
              <hr className="fc-divider" />
              <div className="fc-back">
                <Markdown>{card.back}</Markdown>
                {card.code && <Markdown>{"```cpp\n" + card.code + "\n```"}</Markdown>}
              </div>
            </div>
          )}
        </div>
        {!flipped && <div className="fc-hint">Bấm (hoặc Space) để xem đáp án</div>}
      </div>

      {flipped ? (
        <div className="grade-row fade">
          {GRADES.map(({ g, label, cls }) => (
            <button key={g} className={"grade-btn " + cls} onClick={() => grade(g)}>
              <span className="g-label">{label}</span>
              <span className="g-when">{previewInterval(prevState, g)}</span>
            </button>
          ))}
        </div>
      ) : (
        <button className="btn primary block lg mt" onClick={() => setFlipped(true)}>
          Xem đáp án
        </button>
      )}
      <p className="center muted" style={{ fontSize: 12, marginTop: 14 }}>
        Phím tắt: <b>Space</b> lật thẻ · <b>1-4</b> chấm điểm
      </p>
      <p className="center"><Link to={scope !== "library" && courseCardLessons[currentId] ? courseUrl(courseCardLessons[currentId]) : `/lesson/${card.sectionId}`}>Đọc lại phần giải thích →</Link></p>
    </div>
  );
}
