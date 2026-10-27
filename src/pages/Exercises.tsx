import { useState } from "react";
import { Link } from "react-router-dom";
import { exerciseGroups, totalExercises } from "../content/exercises";
import { reference } from "../content/reference";
import { curriculumAnchorUrl } from "../content/curriculum";
import { actions, useStore } from "../lib/store";
import Markdown, { headingSlug } from "../components/Markdown";

export default function Exercises() {
  const state = useStore();
  const parts = reference.parts.filter((part) => !part.isAppendix);
  const [partId, setPartId] = useState(parts[0]?.id ?? "");
  const part = parts.find((item) => item.id === partId) ?? parts[0];
  const doneCount = exerciseGroups.reduce((sum, group) => sum + group.items.filter((item) => state.exercises[item.id]?.done).length, 0);
  const pct = totalExercises ? doneCount / totalExercises : 0;
  return <div className="fade">
    <h1 style={{ fontSize: 28, margin: "0 0 4px" }}>Bài tập thực hành</h1>
    <p className="muted" style={{ marginTop: 0 }}>Học lý thuyết → tự viết code → chạy ca bình thường và ca biên → đối chiếu kết quả.</p>
    <section className="card pad" style={{ marginBottom: 22 }}>
      <h2 style={{ marginTop: 0 }}>Thực hành theo bài đang học</h2>
      <div className="unified-resource-controls"><label htmlFor="practice-stage">Chặng học</label><select id="practice-stage" value={part?.id ?? ""} onChange={(event) => setPartId(event.target.value)}>{parts.map((item, index) => <option key={item.id} value={item.id}>{index + 1}. {item.title.replace(/^PH.+?[—–-]\s*/i, "")}</option>)}</select></div>
      <div className="unified-practice-list">{part?.sections.map((lesson) => {
        const heading = [...lesson.body.matchAll(/^###\s+(.*(?:thực hành|tự kiểm tra|tự luyện).*)$/gim)].at(-1)?.[1];
        const url = `/lesson/${lesson.id}` + (heading ? `?anchor=${encodeURIComponent(headingSlug(heading.replace(/`/g, "")))}` : "");
        return <Link key={lesson.id} to={url}>{lesson.num}. {lesson.title} →</Link>;
      })}</div>
    </section>
    <section className="card pad" style={{ marginBottom: 22 }}>
      <h2 style={{ marginTop: 0 }}>Bài tổng hợp</h2>
      <p className="muted">Chọn bài sau khi đã học các chủ đề liên quan. Tự viết trước khi xem mã đối chiếu.</p>
      <div className="unified-course-tools">
        <Link className="btn" to={curriculumAnchorUrl("healing") ?? "/lesson/6"}>Pointer-Based Healing</Link>
        <Link className="btn" to={curriculumAnchorUrl("arena") ?? "/lesson/12"}>Arena · ôn tập nhiều file</Link>
        <Link className="btn" to={curriculumAnchorUrl("cpp-17-2") ?? "/lesson/45"}>Arena Combat · tổng kết C++</Link>
        <Link className="btn" to="/reference?tab=g">Mini Arena Shooter · dự án game</Link>
      </div>
    </section>
    <div className="card pad" style={{ marginBottom: 22 }}>
      <div className="row spread" style={{ marginBottom: 8 }}><b>Bài tự luyện có lưu kết quả</b><span className="muted">{doneCount}/{totalExercises} · {Math.round(pct * 100)}%</span></div>
      <div className={"bar" + (pct === 1 ? " success" : "")}><span style={{ width: `${pct * 100}%` }} /></div>
    </div>
    {exerciseGroups.map((group) => {
      const groupDone = group.items.filter((item) => state.exercises[item.id]?.done).length;
      return <section key={group.id} className="card pad" style={{ marginBottom: 18 }}>
        <div className="row spread" style={{ marginBottom: 14 }}><h3 style={{ margin: 0 }}>{group.title.replace(/^Phần\s+[IVXLC–-]+\s*[—–-]\s*/i, "")}</h3><span className="chip">{groupDone}/{group.items.length}</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{group.items.map((item) => {
          const exercise = state.exercises[item.id];
          const done = !!exercise?.done;
          return <div key={item.id} className={"ex-item" + (done ? " done" : "")}>
            <label className="ex-check"><input type="checkbox" aria-label={`Đánh dấu hoàn thành ${item.text.replace(/[*`]/g, "").slice(0, 70)}`} checked={done} onChange={() => actions.toggleExercise(item.id)} /><span className="ex-box">{done ? "✓" : ""}</span></label>
            <div className="ex-body"><div className="ex-text"><Markdown resolveAnchor={curriculumAnchorUrl}>{item.text}</Markdown>{item.advanced && <span className="chip adv">★ nâng cao</span>}</div><input className="ex-link-input" aria-label={`Link bài nộp ${item.id}`} placeholder="Dán link PR / commit của bạn…" value={exercise?.link ?? ""} onChange={(event) => actions.setExerciseLink(item.id, event.target.value)} /></div>
          </div>;
        })}</div>
      </section>;
    })}
    <p className="muted center" style={{ fontSize: 12.5 }}>Kết quả và link bài nộp được lưu trên trình duyệt này.</p>
  </div>;
}
