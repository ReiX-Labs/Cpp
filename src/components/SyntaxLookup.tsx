import { useState } from "react";
import { Link } from "react-router-dom";
import { curriculumSyntaxEntries as syntaxEntries, curriculumAnchorUrl, curriculumRange, courseUrl } from "../content/curriculum";
import { normalizeSearch } from "../content/handoffParser";
import Markdown from "./Markdown";

export default function SyntaxLookup() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("");
  const groups = [...new Set(syntaxEntries.map((entry) => entry.group))];
  const needle = normalizeSearch(query.trim());
  const matches = syntaxEntries.filter((entry) => (!group || entry.group === group)
    && normalizeSearch(`${entry.syntax} ${entry.meaning} ${entry.group}`).includes(needle));
  return (
    <section className="card pad">
      <h2 style={{ marginTop: 0 }}>Câu lệnh → Ý nghĩa</h2>
      <p className="muted">Cú pháp bài 01–{curriculumRange}. Tìm bằng câu lệnh hoặc ý nghĩa, có hoặc không dấu.
        Các tên như hp, player, v là biến ví dụ.</p>
      <div className="syntax-filters">
        <label>Tìm câu lệnh / ý nghĩa
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ví dụ: nullptr, ||, hồi máu, chuỗi…" />
        </label>
        <label>Nhóm kiến thức
          <select value={group} onChange={(event) => setGroup(event.target.value)}>
            <option value="">Tất cả nhóm</option>
            {groups.map((name) => <option key={name}>{name}</option>)}
          </select>
        </label>
        <button className="btn sm" onClick={() => { setQuery(""); setGroup(""); }}>Xóa bộ lọc</button>
      </div>
      <p role="status" className="muted">{matches.length} / {syntaxEntries.length} mục</p>
      {matches.length ? <div className="syntax-table-wrap" tabIndex={0} role="region" aria-label="Bảng câu lệnh và ý nghĩa">
        <table className="syntax-table">
          <thead><tr><th scope="col">Câu lệnh / cú pháp</th><th scope="col">Ý nghĩa / khi dùng</th><th scope="col">Bài giải thích</th></tr></thead>
          <tbody>{matches.map((entry) => <tr key={`${entry.group}-${entry.syntax}`}>
            <td><code>{entry.syntax}</code><small className="syntax-group">{entry.group}</small></td>
            <td><Markdown resolveAnchor={curriculumAnchorUrl}>{entry.meaning}</Markdown></td>
            <td>{entry.links.map((link) => <Link className="syntax-lesson" key={link.anchor} to={curriculumAnchorUrl(link.anchor) ?? courseUrl("cpp-00")}>{link.label} →</Link>)}</td>
          </tr>)}</tbody>
        </table>
      </div> : <p>Không tìm thấy. Thử từ khóa khác hoặc xóa bộ lọc.</p>}
      <p><Link to={courseUrl("cpp-00")}>Mở lộ trình và ví dụ đầy đủ →</Link></p>
    </section>
  );
}
