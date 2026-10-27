import { exerciseGroups, exerciseIntro, totalExercises } from "../content/exercises";
import { actions, useStore } from "../lib/store";
import Markdown from "../components/Markdown";
import { Link, useSearchParams } from "react-router-dom";
import { curriculumGroups, curriculumUnits, courseUrl } from "../content/curriculum";

export default function Exercises() {
  const state = useStore();
  const [params, setParams] = useSearchParams();
  const library = params.get("scope") === "library";

  const doneCount = exerciseGroups.reduce(
    (n, g) => n + g.items.filter((it) => state.exercises[it.id]?.done).length,
    0,
  );
  const pct = totalExercises ? doneCount / totalExercises : 0;

  return (
    <div className="fade">
      <h1 style={{ fontSize: 28, letterSpacing: "-0.02em", margin: "0 0 4px" }}>
        Bài tập thực hành 🛠️
      </h1>
      <p className="muted" style={{ marginTop: 0, marginBottom: 18 }}>
        Học lý thuyết → tự viết code → chạy ca bình thường và ca biên → đối chiếu kết quả.
      </p>
      <div className="tabs" aria-label="Phạm vi bài tập">
        <button className={"tab" + (!library ? " active" : "")} onClick={() => setParams({})}>Theo khóa C++ cơ bản</button>
        <button className={"tab" + (library ? " active" : "")} onClick={() => setParams({ scope: "library" })}>Thư viện và bài mở rộng</button>
      </div>
      {!library ? <>
        <p className="muted">Mỗi bài có mục tự kiểm tra, yêu cầu tự viết và tiêu chí đạt. Mở bài tương ứng để làm theo đúng kiến thức đã học.</p>
        {curriculumGroups.map((group) => <section key={group} className="card pad" style={{ marginBottom: 18 }}>
          <h2 style={{ marginTop: 0 }}>{group}</h2>
          {curriculumUnits.filter((lesson) => lesson.group === group).map((lesson) => <Link className="course-resource-link" key={lesson.id} to={courseUrl(lesson.id)}>
            Bài {lesson.number} · {lesson.title} →
          </Link>)}
        </section>)}
        <Link className="btn" to={courseUrl("healing")}>Pointer-Based Healing</Link>{" "}
        <Link className="btn" to={courseUrl("cpp-17-2")}>Bài tổng kết Arena Combat</Link>
      </> : <>
      <p className="muted">{exerciseIntro} Các bài trong thư viện có cả nội dung nâng cao và Unreal. Kết quả và link bài nộp trước đây vẫn nằm tại đây.</p>

      <div className="card pad" style={{ marginBottom: 22 }}>
        <div className="row spread" style={{ marginBottom: 8 }}>
          <b>Tiến độ bài tập thư viện</b>
          <span className="muted">
            {doneCount}/{totalExercises} · {Math.round(pct * 100)}%
          </span>
        </div>
        <div className={"bar" + (pct === 1 ? " success" : "")}>
          <span style={{ width: `${pct * 100}%` }} />
        </div>
      </div>

      {exerciseGroups.map((g) => {
        const groupDone = g.items.filter((it) => state.exercises[it.id]?.done).length;
        return (
          <section key={g.id} className="card pad" style={{ marginBottom: 18 }}>
            <div className="row spread" style={{ marginBottom: 14 }}>
              <h3 style={{ margin: 0 }}>{g.title}</h3>
              <span className="chip">
                {groupDone}/{g.items.length}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {g.items.map((it) => {
                const ex = state.exercises[it.id];
                const done = !!ex?.done;
                return (
                  <div key={it.id} className={"ex-item" + (done ? " done" : "")}>
                    <label className="ex-check">
                      <input
                        type="checkbox"
                        checked={done}
                        onChange={() => actions.toggleExercise(it.id)}
                      />
                      <span className="ex-box">{done ? "✓" : ""}</span>
                    </label>
                    <div className="ex-body">
                      <div className="ex-text">
                        <Markdown>{it.text}</Markdown>
                        {it.advanced && <span className="chip adv">★ nâng cao</span>}
                      </div>
                      <input
                        className="ex-link-input"
                        placeholder="🔗 Dán link PR / commit của bạn (lưu cục bộ)…"
                        value={ex?.link ?? ""}
                        onChange={(e) => actions.setExerciseLink(it.id, e.target.value)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      <p className="muted center" style={{ fontSize: 12.5, marginTop: 8 }}>
        Đánh dấu hoàn thành mỗi bài để nhận +20 XP. Link nộp bài được lưu ngay trên trình duyệt này.
      </p>
      </>}
    </div>
  );
}
