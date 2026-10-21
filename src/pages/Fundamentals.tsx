import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Markdown from "../components/Markdown";
import { fundamentalsLessons, handoffChapter, studyResources } from "../content/handoff";
import { reference } from "../content/reference";

export default function Fundamentals() {
  const [params, setParams] = useSearchParams();
  const items = [...fundamentalsLessons, ...studyResources];
  const selected = items.find((item) => item.id === params.get("topic")) ?? items[0];
  const lesson = fundamentalsLessons.find((item) => item.id === selected.id);
  const chapter = handoffChapter(selected.chapter);
  // Render the source's answer disclosure as an accessible React details element.
  // No raw HTML execution is needed for imported markdown.
  const answer = chapter.body.match(/<details>\s*<summary>(.*?)<\/summary>([\s\S]*?)<\/details>/);
  const body = chapter.body.replace(/<details>[\s\S]*?<\/details>/g, "");
  const index = items.findIndex((item) => item.id === selected.id);
  useEffect(() => { window.scrollTo({ top: 0 }); }, [selected.id]);

  return (
    <div className="page fade" style={{ padding: 0 }}>
      <h1>Ôn nền tảng · Bài 01–09</h1>
      <p className="muted">Theo sổ tay ngày 21/10/2026 · C++17 · Có bài bổ sung 06.5.</p>
      <div className="card pad" style={{ marginBottom: 20 }}>
        <p style={{ marginTop: 0 }}>Bài 01–08 và 06.5 đã được chấm theo handoff. Bài 09 đã học lý thuyết;
          người học báo đã code xong, chưa gửi để chấm.</p>
        <p>Bài 10, 11, 12: <strong>chờ tài liệu cập nhật</strong>.</p>
        <Link className="btn sm" to="/reference?tab=syntax">Tra cứu câu lệnh →</Link>
      </div>
      <div className="fundamentals-layout">
        <nav className="card pad fundamentals-nav" aria-label="Bài ôn nền tảng">
          {items.map((item) => (
            <button key={item.id} className={"btn block sm" + (selected.id === item.id ? " primary" : "")}
              aria-current={selected.id === item.id ? "page" : undefined}
              onClick={() => { setParams({ topic: item.id }); window.scrollTo({ top: 0 }); }}>
              {"related" in item ? `Bài ${item.id} · ` : ""}{item.title}
            </button>
          ))}
        </nav>
        <article className="card pad" key={selected.id}>
          <h2 style={{ marginTop: 0 }}>{lesson ? `Bài ${lesson.id} · ` : ""}{selected.title}</h2>
          {selected.id === "02" && <p className="muted">Nội dung biến và kiểu dữ liệu được học xuyên suốt bài 01–02.</p>}
          <Markdown>{body}</Markdown>
          {answer && <details className="handoff-answers"><summary>{answer[1]}</summary><Markdown>{answer[2]}</Markdown></details>}
          {lesson && <aside className="handoff-related">
            <h3>Kiến thức tương ứng trong tài liệu tổng hợp</h3>
            <p className="muted">Số mục của tài liệu tổng hợp khác số bài trong lộ trình này; có thể chứa kiến thức nâng cao.</p>
            {lesson.related.map((id) => <Link className="chip" key={id} to={`/lesson/${id}`}>
              Mục {id} · {reference.byId[id].title}
            </Link>)}
          </aside>}
          <nav className="lesson-footer" aria-label="Chuyển bài ôn">
            {index > 0 ? <Link to={`/fundamentals?topic=${items[index - 1].id}`}>← {items[index - 1].title}</Link> : <span />}
            {index < items.length - 1 && <Link to={`/fundamentals?topic=${items[index + 1].id}`}>{items[index + 1].title} →</Link>}
          </nav>
        </article>
      </div>
    </div>
  );
}
