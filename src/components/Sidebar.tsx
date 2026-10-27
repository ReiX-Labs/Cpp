import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { reference } from "../content/reference";
import { useStore } from "../lib/store";
import { startOfDay } from "../lib/srs";
import { curriculumLessons, curriculumUnits, curriculumRange, courseProgressId, courseUrl } from "../content/curriculum";
import { eligibleReviewCardIds } from "../content/courseReview";

function countDue(srs: Record<string, { due: number }>, eligibleIds: string[]): number {
  const today = startOfDay();
  return eligibleIds.filter((id) => {
    const c = srs[id];
    return !c || c.due <= today;
  }).length;
}

export default function Sidebar() {
  const state = useStore();
  const { id: activeId } = useParams();
  const location = useLocation();

  const activePartId = useMemo(
    () => reference.byId[activeId ?? ""]?.partId,
    [activeId],
  );

  const [open, setOpen] = useState<Set<string>>(
    () => new Set(activePartId ? [activePartId] : [reference.parts[0]?.id]),
  );

  useEffect(() => {
    if (activePartId) {
      setOpen((prev) => (prev.has(activePartId) ? prev : new Set(prev).add(activePartId)));
    }
  }, [activePartId]);

  const due = countDue(state.srs, eligibleReviewCardIds("learned", state.progress));
  const lessons = curriculumUnits;
  const totalSections = lessons.length;
  const totalRead = lessons.filter((s) => state.progress[courseProgressId(s.id)]?.read).length;

  const toggle = (pid: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(pid) ? next.delete(pid) : next.add(pid);
      return next;
    });

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo reix-mark" role="img" aria-label="ReiX Labs"></div>
        <div>
          <div className="brand-name">C++ Dojo</div>
          <div className="brand-sub">Game Dev · học &amp; luyện tập</div>
        </div>
      </div>

      <nav className="nav">
        <NavLink to={courseUrl("cpp-00")} className={"nav-link" + (location.pathname.startsWith("/course/") || location.pathname === "/fundamentals" ? " active" : "")}>
          <span className="nav-ico">📖</span> Học C++ · 01–{curriculumRange}
        </NavLink>
        <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          <span className="nav-ico">◈</span> Tổng quan
        </NavLink>
        <NavLink to="/review" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          <span className="nav-ico">↻</span> Ôn tập hàng ngày
          {due > 0 && <span className="badge">{due}</span>}
        </NavLink>
        <NavLink
          to="/exercises"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          <span className="nav-ico">🛠️</span> Bài tập thực hành
        </NavLink>
        <NavLink
          to="/reference"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          <span className="nav-ico">☰</span> Tra cứu &amp; Cheat sheet
        </NavLink>
      </nav>

      <div className="nav-title">Lộ trình theo bài</div>
      <div className="section-list course-tree">
        {curriculumLessons.map((lesson) => {
          const done = state.progress[courseProgressId(lesson.id)]?.read;
          return <NavLink key={lesson.id} to={courseUrl(lesson.id)} className={({ isActive }) => "section-link" + (isActive ? " active" : "") + (done ? " done" : "")}>
            <span className="section-num">{lesson.number}</span><span className="course-tree-title">{lesson.title}</span><span className="tick">{done ? "✓" : ""}</span>
          </NavLink>;
        })}
      </div>
      <details className="library-tree" open={location.pathname.startsWith("/lesson/") || undefined}>
      <summary className="nav-title">Thư viện tham khảo · {reference.lessonSections.length} mục</summary>
      <div className="tree">
        {reference.parts
          .filter((p) => !p.isAppendix)
          .map((part) => {
          const isOpen = open.has(part.id);
          const readInPart = part.sections.filter((s) => state.progress[s.id]?.read).length;
          return (
            <div className="part" key={part.id}>
              <div
                className={"part-head" + (isOpen ? " open" : "")}
                onClick={() => toggle(part.id)}
              >
                <span className="chev">▶</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="part-label">{part.label}</div>
                  <div className="part-title">{part.title.replace(/^PH.+?[—–-]\s*/i, "")}</div>
                </div>
                <span className="part-progress">
                  {readInPart}/{part.sections.length}
                </span>
              </div>
              {isOpen && (
                <div className="section-list">
                  {part.sections.map((s) => {
                    const done = state.progress[s.id]?.read;
                    const isActive =
                      location.pathname === `/lesson/${s.id}`;
                    return (
                      <NavLink
                        key={s.id}
                        to={`/lesson/${s.id}`}
                        className={
                          "section-link" +
                          (isActive ? " active" : "") +
                          (done ? " done" : "")
                        }
                      >
                        <span className="section-num">{s.num || "•"}</span>
                        <span
                          style={{
                            flex: 1,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {s.title}
                        </span>
                        <span className="tick">{done ? "✓" : ""}</span>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      </details>

      <div style={{ marginTop: "auto", padding: "8px 8px 0" }}>
        <div className="row spread" style={{ fontSize: 12, color: "var(--text-faint)", marginBottom: 6 }}>
          <span>Tiến độ lộ trình</span>
          <span>
            {totalRead}/{totalSections}
          </span>
        </div>
        <div className="bar success">
          <span style={{ width: `${(totalRead / totalSections) * 100}%` }} />
        </div>
      </div>
    </aside>
  );
}
