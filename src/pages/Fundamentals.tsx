import { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Markdown, { headingSlug } from "../components/Markdown";
import { curriculumAnchorUrl, curriculumLessons, curriculumRange, curriculumResources, curriculumSections, courseProgressId, courseUrl, resolveCourseId } from "../content/curriculum";
import { reference } from "../content/reference";
import { actions, useStore } from "../lib/store";

export default function Fundamentals() {
  const state = useStore();
  const { id } = useParams();
  const [params] = useSearchParams();
  const selectedId = resolveCourseId(id ?? params.get("topic"));
  const selected = curriculumSections.find((item) => item.id === selectedId)!;
  const lesson = curriculumLessons.find((item) => item.id === selectedId);
  const progressId = courseProgressId(selectedId);
  const done = !!state.progress[progressId]?.read;
  const index = curriculumLessons.findIndex((item) => item.id === selectedId);
  const anchor = params.get("anchor");
  const toc = [...selected.body.matchAll(/^###\s+(.+)$/gm)].map((match) => ({ title: match[1].replace(/`/g, ""), id: headingSlug(match[1].replace(/`/g, "")) }));

  useEffect(() => {
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: 0 });
  }, [selectedId, anchor]);

  return <div className="lesson fade course-page" key={selectedId}>
    <article className="lesson-main" id={selectedId}>
      <div className="breadcrumb"><Link to="/">Lộ trình C++ · 01–{curriculumRange}</Link>
        {lesson && <span> / {lesson.id === "cpp-00" ? "Chuẩn bị" : `Bài ${lesson.number}`}</span>}
      </div>
      <h1 className="lesson-title">{lesson && lesson.id !== "cpp-00" ? `Bài ${lesson.number} — ` : ""}{selected.title}</h1>
      <div className="lesson-meta"><span>C++17 · Visual Studio 2022</span>
        {done && <span style={{ color: "var(--success)" }}>✓ Đã đánh dấu học</span>}
      </div>
      <Markdown resolveAnchor={curriculumAnchorUrl}>{selected.body}</Markdown>
      {lesson && <>
        <div className="card pad course-completion">
          <h3>Kiểm tra trước khi chuyển bài</h3>
          <p>Tự giải thích ví dụ và hoàn thành phần tự viết ở trên. Đánh dấu này ghi nhận việc bạn đã học trên website, không thay cho chấm bài thực hành.</p>
          <button className="btn primary" disabled={done} onClick={() => actions.markSectionRead(progressId)}>
            {done ? "✓ Đã đánh dấu học" : "✓ Đánh dấu đã học (+15 XP)"}
          </button>
        </div>
        <nav className="lesson-footer" aria-label="Chuyển bài trong lộ trình">
          {index > 0 ? <Link className="lesson-nav" to={courseUrl(curriculumLessons[index - 1].id)}>
            <span className="ln-dir">← Bài trước</span><span className="ln-title">{curriculumLessons[index - 1].title}</span>
          </Link> : <span />}
          {index < curriculumLessons.length - 1 && <Link className="lesson-nav next" to={courseUrl(curriculumLessons[index + 1].id)}>
            <span className="ln-dir">Bài tiếp theo →</span><span className="ln-title">{curriculumLessons[index + 1].title}</span>
          </Link>}
        </nav>
        <details className="card pad course-related"><summary>Tham khảo thêm trong thư viện</summary>
          <p className="muted">Số mục thư viện độc lập với số bài; một số mục mở rộng ngoài phạm vi bài này.</p>
          {lesson.related.filter((related) => reference.byId[related]).map((related) => <Link className="chip" key={related} to={`/lesson/${related}`}>Mục {related} · {reference.byId[related].title}</Link>)}
        </details>
      </>}
    </article>
    <aside className="rail">
      <div className="rail-card"><h4>Trong bài này</h4><nav className="toc">
        {toc.map((item, i) => <a key={`${item.id}-${i}`} href={`#${item.id}`} onClick={(event) => { event.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>{item.title}</a>)}
      </nav></div>
      <div className="rail-card"><h4>Tra cứu và ôn tập</h4>
        <Link className="btn block sm" to="/reference?tab=syntax">Câu lệnh → Ý nghĩa</Link>
        <Link className="btn block sm" to="/review">Ôn các bài đã học</Link>
        {curriculumResources.map((item) => <Link className="course-resource-link" key={item.id} to={courseUrl(item.id)}>{item.title}</Link>)}
      </div>
    </aside>
  </div>;
}
