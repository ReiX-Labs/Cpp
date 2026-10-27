import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { curriculumAnchorUrl } from "../content/curriculum";
import { lookupCategories, lookupTopics, normalizeLookup, searchSyntaxCatalog, syntaxCatalog, type LookupEntry } from "../content/syntaxCatalog";
import Markdown from "./Markdown";
import "./SyntaxLookup.css";

const commonQueries = ["&", "*", "const", "xóa cuối vector", "đổi số phần tử", "F10"];

function Entry({ entry }: { entry: LookupEntry }) {
  const topic = lookupTopics.find(item => item.id === entry.topic)!;
  const links = entry.links.map(link => ({ ...link, to: curriculumAnchorUrl(link.anchor) })).filter(link => link.to);
  return <article className="lookup-entry" data-syntax={entry.syntax}>
    <div className="lookup-entry-heading">
      <h4>{entry.title}</h4><span className="lookup-context">{topic.title} · {entry.action}</span>
    </div>
    <div className="lookup-entry-body">
      <div className="lookup-example"><span className="lookup-label">Mẫu sử dụng</span><pre><code>{entry.example}</code></pre></div>
      <div className="lookup-explanation"><Markdown resolveAnchor={curriculumAnchorUrl}>{entry.meaning}</Markdown>
        {entry.pitfall && <p className="lookup-caution"><strong>Lưu ý: </strong>{entry.pitfall}</p>}
        <div className="lookup-links">{links.map(link => <Link key={link.anchor} to={link.to!}>Đọc giải thích · {link.label} →</Link>)}</div>
      </div>
    </div>
  </article>;
}

function Comparison({ kind }: { kind: "vector" | "const" }) {
  const constRows = [
    ["const int value", "Không sửa value", "Giá trị có thể được tính lúc chạy."],
    ["const T& ref", "Không sửa object qua ref", "Object còn có thể đổi qua đường truy cập khác."],
    ["const int* p", "Không sửa *p qua p", "Có thể cho p trỏ sang int khác."],
    ["int* const p", "Không đổi địa chỉ trong p", "Có thể sửa *p nếu object hợp lệ."],
    ["const int* const p", "Cả địa chỉ và *p qua p", "Không làm mọi alias khác trở thành const."],
    ["GetHealth() const", "Member không mutable qua this", "Gọi được trên const object."],
  ];
  const vectorRows = [
    ["size() / capacity()", "Số phần tử / sức chứa", "Truy cập theo size, không theo capacity."],
    ["reserve(n) / resize(n)", "Dự trữ / đổi số phần tử", "reserve không tạo thêm phần tử."],
    ["operator[] / at(i)", "Không / có kiểm tra biên", "at ném ngoại lệ nếu chỉ số sai."],
    ["pop_back() / clear()", "Xóa cuối / xóa hết", "pop_back yêu cầu vector không rỗng."],
  ];
  return <details className="lookup-comparison" open>
    <summary>{kind === "const" ? "Đọc const: cái gì không được thay đổi?" : "Các cặp dễ nhầm trong vector"}</summary>
    <div className="lookup-comparison-scroll" tabIndex={0} role="region" aria-label="Bảng so sánh cú pháp">
      <table><thead><tr><th>Cú pháp</th><th>{kind === "const" ? "Giới hạn thay đổi" : "Khác nhau"}</th><th>Ghi nhớ</th></tr></thead>
        <tbody>{(kind === "const" ? constRows : vectorRows).map(row => <tr key={row[0]}><td><code>{row[0]}</code></td><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody>
      </table>
    </div>
  </details>;
}

export default function SyntaxLookup() {
  const [params, setParams] = useSearchParams();
  const [limit, setLimit] = useState(24);
  const query = params.get("q") ?? "";
  const topic = lookupTopics.find(item => item.id === params.get("topic"));
  const action = params.get("action") ?? "";
  const category = lookupCategories.find(item => item.id === topic?.category);
  const matches = useMemo(() => searchSyntaxCatalog(query, topic?.id), [query, topic?.id]);
  const actions = [...new Set(syntaxCatalog.filter(entry => entry.topic === topic?.id).map(entry => entry.action))];
  const filtered = action && actions.includes(action) ? matches.filter(entry => entry.action === action) : matches;
  const browsing = !!topic || !!query.trim();
  const querying = !!query.trim();
  const comparison = topic?.id === "const" || normalizeLookup(query) === "const" ? "const" : topic?.id === "vector" && !querying ? "vector" : undefined;
  const update = (values: Record<string, string>) => {
    const next = new URLSearchParams(params);
    next.set("tab", "syntax");
    for (const [key, value] of Object.entries(values)) value ? next.set(key, value) : next.delete(key);
    setLimit(24); setParams(next, { replace: true });
  };
  const selectTopic = (id: string) => update({ topic: id, action: "", q: "" });
  const search = (value: string) => update({ q: value, action: "" });
  const visible = querying ? filtered.slice(0, limit) : filtered;
  const blocks = querying ? [{ label: "Kết quả phù hợp", entries: visible }]
    : [...new Set(visible.map(entry => entry.action))].map(label => ({ label, entries: visible.filter(entry => entry.action === label) }));

  return <section className="lookup-browser card pad" aria-label="Tra cứu cú pháp theo chủ đề">
    <h2>Tra cứu theo việc cần làm</h2>
    <p className="muted">Chọn chủ đề hoặc tìm bằng cú pháp, tên API, hay ý định. Ví dụ: <code>std::vector::reserve</code> hoặc “dự trữ bộ nhớ”.</p>
    <div className="lookup-search-row">
      <label htmlFor="syntax-query">Tìm cú pháp hoặc thao tác
        <input id="syntax-query" type="search" value={query} onChange={event => search(event.target.value)} placeholder="Ví dụ: lấy địa chỉ, xóa cuối vector, const…" autoComplete="off" />
      </label>
      {browsing && <button className="btn sm" onClick={() => update({ topic: "", q: "", action: "" })}>Về các chủ đề</button>}
    </div>
    <div className="lookup-suggestions" aria-label="Tra cứu thường dùng"><span>Thường dùng:</span>{commonQueries.map(value => <button className="lookup-chip" key={value} onClick={() => update({ q: value, topic: "", action: "" })}>{value}</button>)}</div>

    {!browsing ? <div className="lookup-category-grid">{lookupCategories.map(item => {
      const topics = lookupTopics.filter(candidate => candidate.category === item.id && syntaxCatalog.some(entry => entry.topic === candidate.id));
      if (!topics.length) return null;
      return <section className="lookup-category" key={item.id}>
        <h3>{item.title}</h3><p>{item.description}</p>
        <ul>{topics.map(child => <li key={child.id}><button onClick={() => selectTopic(child.id)}><span>{child.title}</span><span aria-hidden="true">→</span></button></li>)}</ul>
      </section>;
    })}</div> : <>
      <nav className="lookup-breadcrumb" aria-label="Vị trí trong tra cứu">
        <button onClick={() => update({ topic: "", action: "" })}>Tất cả chủ đề</button>
        {topic && <><span>/ {category?.title} /</span><strong>{topic.title}</strong></>}
      </nav>
      {topic && <div className="lookup-actions" aria-label="Thao tác trong chủ đề">
        <button className={"lookup-chip" + (!action ? " selected" : "")} aria-pressed={!action} onClick={() => update({ action: "" })}>Mọi thao tác</button>
        {actions.map(item => <button key={item} className={"lookup-chip" + (action === item ? " selected" : "")} aria-pressed={action === item} onClick={() => update({ action: item })}>{item}</button>)}
      </div>}
      {comparison && <Comparison kind={comparison} />}
      <p className="lookup-result-count muted" role="status">{filtered.length} mục{querying ? ` cho “${query}”` : " trong chủ đề"}{topic && querying ? ` · ${topic.title}` : ""}.
        {querying && topic && <button onClick={() => update({ topic: "", action: "" })}>Tìm trong toàn bộ chương trình</button>}
      </p>
      {!filtered.length ? <div className="lookup-empty"><h3>Chưa tìm thấy mục phù hợp</h3><p>Thử tên API ngắn hơn hoặc mô tả thao tác: “xóa cuối vector”, “lấy địa chỉ”, “bước vào hàm”.</p></div>
        : blocks.map(block => <section className="lookup-result-group" key={block.label}><h3>{block.label}</h3>{block.entries.map(entry => <Entry key={entry.id} entry={entry} />)}</section>)}
      {querying && filtered.length > limit && <button className="btn lookup-more" onClick={() => setLimit(value => value + 24)}>Xem thêm {Math.min(24, filtered.length - limit)} mục ({filtered.length - limit} còn lại)</button>}
    </>}
    <p className="lookup-footnote">Các mẫu dùng tên biến minh họa; thay kiểu và tên theo chương trình của bạn. Mỗi mục dẫn về phần giải thích trong giáo trình chung.</p>
  </section>;
}
