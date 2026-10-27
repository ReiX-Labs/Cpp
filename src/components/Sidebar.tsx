import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { reference } from "../content/reference";
import { lessonProgressStatus } from "../content/curriculum";
import { eligibleReviewCardIds } from "../content/courseReview";
import { useStore } from "../lib/store";
import { startOfDay } from "../lib/srs";
import "./UnifiedCourse.css";

export default function Sidebar() {
  const state = useStore();
  const location = useLocation();
  const activeId = location.pathname.match(/^\/lesson\/([^/]+)/)?.[1];
  const activePartId = reference.byId[activeId ?? ""]?.partId;
  const parts = reference.parts.filter((part) => !part.isAppendix);
  const [open, setOpen] = useState<Set<string>>(() => new Set([activePartId ?? parts[0]?.id]));
  useEffect(() => {
    if (activePartId) setOpen((previous) => new Set(previous).add(activePartId));
  }, [activePartId]);
  const today = startOfDay();
  const due = eligibleReviewCardIds("learned", state.progress).filter((id) => !state.srs[id] || state.srs[id].due <= today).length;
  const totalRead = reference.lessonSections.filter((lesson) => lessonProgressStatus(lesson.id, state.progress).read).length;
  const toggle = (id: string) => setOpen((previous) => {
    const next = new Set(previous);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  return <aside className="sidebar">
    <div className="brand">
      <div className="logo reix-mark" role="img" aria-label="ReiX Labs" />
      <div><div className="brand-name">C++ Dojo</div><div className="brand-sub">C++ · Game Development · Unreal</div></div>
    </div>
    <nav className="nav" aria-label="Điều hướng chính">
      <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><span className="nav-ico">◈</span> Chương trình học</NavLink>
      <NavLink to="/review" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><span className="nav-ico">↻</span> Ôn tập hàng ngày {due > 0 && <span className="badge">{due}</span>}</NavLink>
      <NavLink to="/exercises" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><span className="nav-ico">🛠️</span> Bài tập thực hành</NavLink>
      <NavLink to="/reference" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><span className="nav-ico">⌕</span> Tra cứu kiến thức</NavLink>
    </nav>
    <div className="nav-title">Mục lục chương trình</div>
    <nav className="tree unified-tree" aria-label="Các chặng và bài học">
      {parts.map((part) => {
        const isOpen = open.has(part.id);
        const read = part.sections.filter((lesson) => lessonProgressStatus(lesson.id, state.progress).read).length;
        return <div className="part" key={part.id}>
          <button className={"part-head unified-part-head" + (isOpen ? " open" : "")} aria-expanded={isOpen} onClick={() => toggle(part.id)}>
            <span className="chev">▶</span>
            <span className="unified-part-copy"><span className="part-label">{part.label}</span><span className="part-title">{part.title.replace(/^PH.+?[—–-]\s*/i, "")}</span></span>
            <span className="part-progress">{read}/{part.sections.length}</span>
          </button>
          {isOpen && <div className="section-list">{part.sections.map((lesson) => {
            const status = lessonProgressStatus(lesson.id, state.progress);
            return <NavLink key={lesson.id} to={`/lesson/${lesson.id}`} title={status.needsUpdate ? "Đã học trước đây · Có nội dung cần cập nhật" : lesson.title} className={({ isActive }) => "section-link" + (isActive ? " active" : "") + (status.read ? " done" : "")}>
              <span className="section-num">{lesson.num}</span><span className="unified-lesson-name">{lesson.title}</span>
              <span className={status.needsUpdate ? "update-dot" : "tick"} aria-label={status.read ? "Đã học" : status.needsUpdate ? "Có phần cập nhật" : undefined}>{status.read ? "✓" : status.needsUpdate ? "•" : ""}</span>
            </NavLink>;
          })}</div>}
        </div>;
      })}
    </nav>
    <div className="unified-sidebar-progress">
      <div className="row spread"><span>Tiến độ chương trình</span><span>{totalRead}/{reference.lessonSections.length}</span></div>
      <div className="bar success"><span style={{ width: `${reference.lessonSections.length ? totalRead / reference.lessonSections.length * 100 : 0}%` }} /></div>
    </div>
  </aside>;
}
