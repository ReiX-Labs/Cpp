import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { reference } from "../content/reference";
import { quizFor } from "../data/quizzes";
import { challengesFor } from "../data/challenges";
import { cards as allCards } from "../data/cards";
import { actions, useStore } from "../lib/store";
import Markdown from "../components/Markdown";
import Quiz from "../components/Quiz";
import ChallengePanel from "../components/ChallengePanel";
import { lessonProgressStatus } from "../content/curriculum";

import { parseLessonReading } from "../content/lessonReading";
import LessonReader, { ReadingOutline } from "../components/LessonReader";

function scrollTo(slug: string) {
  const el = document.getElementById(slug);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Lesson() {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const state = useStore();
  const [tab, setTab] = useState<"learn" | "practice">(params.get("tab") === "practice" ? "practice" : "learn");
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set());

  const section = id ? reference.byId[id] : undefined;
  const anchor = params.get("anchor");
  const reading = useMemo(() => parseLessonReading(section?.body ?? ""), [section]);
  const all = params.get("view") === "all";
  const requestedPart = params.get("part");
  const partIndex = reading.units.findIndex(unit => unit.id === requestedPart);
  const anchorIndex = reading.units.findIndex(unit => anchor && unit.anchors.includes(anchor));
  const activeIndex = Math.max(0, partIndex >= 0 ? partIndex : anchorIndex);
  const selectPart = (index: number) => {
    const unit = reading.units[index];
    if (!unit) return;
    setTab("learn");
    const nextParams = new URLSearchParams(params);
    nextParams.delete("tab");
    nextParams.set("part", unit.id);
    nextParams.set("anchor", unit.anchors[0] ?? unit.id);
    setParams(nextParams);
    requestAnimationFrame(() => {
      const panel = document.getElementById(`reading-${unit.id}`);
      panel?.focus({ preventScroll: true });
      panel?.scrollIntoView({ block: "start" });
    });
  };
  const changeView = (showAll: boolean) => {
    const nextParams = new URLSearchParams(params);
    if (showAll) nextParams.set("view", "all");
    else nextParams.delete("view");
    setParams(nextParams);
    requestAnimationFrame(() => scrollTo("lesson-reading-start"));
  };
  useEffect(() => {
    setTab(params.get("tab") === "practice" ? "practice" : "learn");
    setRevealedCards(new Set());
  }, [id, params.get("tab")]);
  useEffect(() => {
    if (anchor && tab === "learn") {
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(anchor) ?? document.getElementById(`reading-${reading.units[activeIndex]?.id}`);
        if (target) {
          let parent = target.parentElement;
          while (parent) { if (parent instanceof HTMLDetailsElement) parent.open = true; parent = parent.parentElement; }
          target.scrollIntoView({ block: "start" });
        }
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [id, anchor, tab, activeIndex, reading]);

  const quiz = section ? quizFor(section.id) : [];
  const challenges = section ? challengesFor(section.id) : [];
  const sectionCards = useMemo(
    () => (section ? allCards.filter((c) => c.sectionId === section.id) : []),
    [section],
  );

  const lessons = reference.lessonSections;
  const flatIndex = section ? lessons.findIndex((s) => s.id === section.id) : -1;
  const prev = flatIndex > 0 ? lessons[flatIndex - 1] : undefined;
  const next =
    flatIndex >= 0 && flatIndex < lessons.length - 1 ? lessons[flatIndex + 1] : undefined;

  if (!section) return <Navigate to="/" replace />;
  if (reference.appendix?.sections.some((item) => item.id === section.id)) {
    return <Navigate to={`/reference?tab=${section.id === "a" ? "syntax" : section.id}${anchor ? `&anchor=${encodeURIComponent(anchor)}` : ""}`} replace />;
  }

  const progress = state.progress[section.id];
  const status = lessonProgressStatus(section.id, state.progress);
  const exerciseCount = quiz.length + challenges.length + sectionCards.length;

  const toggleCard = (cid: string) =>
    setRevealedCards((prev) => {
      const n = new Set(prev);
      n.has(cid) ? n.delete(cid) : n.add(cid);
      return n;
    });

  return (
    <div className="lesson fade" key={section.id}>
      <div className="lesson-main">
        <div className="breadcrumb">
          <span className="part-label">{section.partTitle}</span>
        </div>
        <h1 className="lesson-title">
          {section.num ? `${section.num}. ` : ""}
          {section.title}
        </h1>
        <div className="lesson-meta">
          <span>⏱ {section.minutes} phút đọc</span>
          {section.codeBlocks > 0 && <span>· {section.codeBlocks} ví dụ code</span>}
          {status.read && <span style={{ color: "var(--success)" }}>· ✓ Đã học bản hiện tại</span>}
          {status.needsUpdate && <span style={{ color: "var(--warning)" }}>· Có phần kiến thức cần cập nhật</span>}
          {progress?.quizBest != null && (
            <span>· Quiz tốt nhất: {Math.round(progress.quizBest * 100)}%</span>
          )}
        </div>

        <div className="tabs">
          <button
            className={"tab" + (tab === "learn" ? " active" : "")}
            onClick={() => setTab("learn")}
          >
            📖 Bài học
          </button>
          <button
            className={"tab" + (tab === "practice" ? " active" : "")}
            onClick={() => setTab("practice")}
          >
            🎯 Luyện tập
            {exerciseCount > 0 && <span className="badge">{exerciseCount}</span>}
          </button>
        </div>

        {tab === "learn" ? (
          <div className="fade">
            {status.needsUpdate && <aside className="card unified-progress-notice"><strong>Bài học đã được bổ sung</strong><p className="muted">Kết quả và XP trước đây vẫn được giữ. Đọc các phần mới rồi xác nhận đã học ở cuối bài.</p></aside>}
            <LessonReader reading={reading} activeIndex={activeIndex} all={all} anchor={anchor} onSelect={selectPart} onViewChange={changeView} />
            {(all || activeIndex === reading.units.length - 1) && <section className="card pad lesson-completion">
              <h3>Trước khi chuyển bài</h3>
              <p>Tự giải thích ví dụ và hoàn thành yêu cầu thực hành. Việc đánh dấu ghi nhận bạn đã học nội dung này; kết quả quiz và bài nộp được lưu riêng.</p>
              <button className="btn primary" disabled={status.read} onClick={() => actions.markSectionRead(section.id)}>
                {status.read ? "✓ Đã học bản hiện tại" : status.hasHistory ? "✓ Xác nhận đã học phần cập nhật" : "✓ Đánh dấu đã học (+15 XP)"}
              </button>
            </section>}
            <div className="lesson-footer">
              {prev ? (
                <Link className="lesson-nav" to={`/lesson/${prev.id}`}>
                  <span className="ln-dir">← Bài trước</span>
                  <span className="ln-title">
                    {prev.num ? `${prev.num}. ` : ""}
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link className="lesson-nav next" to={`/lesson/${next.id}`}>
                  <span className="ln-dir">Bài tiếp theo →</span>
                  <span className="ln-title">
                    {next.num ? `${next.num}. ` : ""}
                    {next.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        ) : (
          <div className="fade">
            {exerciseCount === 0 ? (
              <div className="empty card pad">
                <div className="emoji">🧩</div>
                <h3>Chưa có bài luyện tập cho mục này</h3>
                <p className="muted">
                  Làm yêu cầu tự viết và tự kiểm tra trong bài học, sau đó chọn bài thực hành cùng chủ đề.
                </p>
                <Link to="/exercises" className="btn primary mt">
                  Mở bài tập thực hành
                </Link>
              </div>
            ) : (
              <>
                {quiz.length > 0 && (
                  <div className="card pad" style={{ marginBottom: 20 }}>
                    <h3 style={{ marginTop: 0 }}>📝 Trắc nghiệm kiểm tra</h3>
                    <Quiz
                      questions={quiz}
                      onComplete={(score) => {
                        actions.recordQuiz(section.id, score);
                      }}
                    />
                  </div>
                )}

                {challenges.length > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <h3>💻 Thử thách code</h3>
                    {challenges.map((c) => (
                      <ChallengePanel
                        key={c.id}
                        challenge={c}
                        onSolved={() => actions.markPracticeDone(section.id)}
                      />
                    ))}
                  </div>
                )}

                {sectionCards.length > 0 && (
                  <div className="card pad">
                    <h3 style={{ marginTop: 0 }}>⚡ Tự kiểm tra nhanh</h3>
                    <p className="muted" style={{ fontSize: 13.5, marginTop: 0 }}>
                      Nhìn câu hỏi, tự trả lời trong đầu, rồi bấm để lật đáp án.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {sectionCards.map((c) => {
                        const open = revealedCards.has(c.id);
                        return (
                          <div
                            key={c.id}
                            className="card"
                            style={{ padding: 14, cursor: "pointer" }}
                            onClick={() => toggleCard(c.id)}
                          >
                            <div style={{ fontWeight: 600 }}>{c.front}</div>
                            {open ? (
                              <div style={{ marginTop: 8 }}>
                                <Markdown>{c.back}</Markdown>
                                {c.code && <Markdown>{"```cpp\n" + c.code + "\n```"}</Markdown>}
                              </div>
                            ) : (
                              <div className="muted" style={{ fontSize: 12.5, marginTop: 6 }}>
                                Bấm để xem đáp án ↓
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div className="rail">
        <div className="rail-card">
          <h4>Tiến độ bài này</h4>
          {status.read ? (
            <div className="chip" style={{ color: "var(--success)", marginBottom: 12 }}>
              ✓ Đã học bản hiện tại
            </div>
          ) : (
            <button
              className="btn primary block sm"
              style={{ marginBottom: 12 }}
              onClick={() => actions.markSectionRead(section.id)}
            >
              {status.hasHistory ? "✓ Xác nhận đã học phần cập nhật" : "✓ Đánh dấu đã học (+15 XP)"}
            </button>
          )}
          {exerciseCount > 0 && (
            <button
              className="btn block sm"
              onClick={() => {
                setTab("practice");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              🎯 Luyện tập ngay ({exerciseCount})
            </button>
          )}
        </div>

        {reading.units.length > 0 && <div className="rail-card reading-rail-outline">
          <h4>Trong bài này · {reading.units.length} phần</h4>
          <ReadingOutline reading={reading} activeIndex={activeIndex} onSelect={selectPart} />
        </div>}
        <div className="rail-card"><h4>Tra cứu và thực hành</h4>
          <Link className="btn block sm" to="/reference?tab=syntax">Tra cú pháp và thao tác</Link>
          <Link className="btn block sm" to="/review">Ôn các bài đã học</Link>
          <Link className="btn block sm" to="/exercises">Bài tập thực hành</Link>
        </div>
      </div>
    </div>
  );
}
