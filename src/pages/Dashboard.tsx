import { Link } from "react-router-dom";
import { reference } from "../content/reference";
import { lessonProgressStatus, curriculumAnchorUrl } from "../content/curriculum";
import { eligibleReviewCardIds } from "../content/courseReview";
import { useStore } from "../lib/store";
import { startOfDay, dayKey } from "../lib/srs";
import ProgressRing from "../components/ProgressRing";
import LevelBar from "../components/LevelBar";
import Achievements from "../components/Achievements";
import ActivityHeatmap from "../components/ActivityHeatmap";

function greeting(): string {
  const h = new Date().getHours();
  return h < 12 ? "Chào buổi sáng" : h < 18 ? "Chào buổi chiều" : "Chào buổi tối";
}

export default function Dashboard() {
  const state = useStore();
  const lessons = reference.lessonSections;
  const parts = reference.parts.filter((part) => !part.isAppendix);
  const readCount = lessons.filter((lesson) => lessonProgressStatus(lesson.id, state.progress).read).length;
  const updates = lessons.filter((lesson) => lessonProgressStatus(lesson.id, state.progress).needsUpdate);
  const nextLesson = lessons.find((lesson) => !lessonProgressStatus(lesson.id, state.progress).read) ?? lessons[0];
  const today = startOfDay();
  const dueCount = eligibleReviewCardIds("learned", state.progress).filter((id) => !state.srs[id] || state.srs[id].due <= today).length;
  const reviewsToday = state.activityByDay[dayKey()]?.reviews ?? 0;
  const goalPct = Math.min(1, reviewsToday / state.dailyGoal);
  const resources = [
    { icon: "⌕", title: "Tra cứu theo chủ đề", desc: "Cú pháp, thao tác, ví dụ và lỗi dễ nhầm", to: "/reference?tab=syntax" },
    { icon: "💡", title: "Tự kiểm tra kiến thức", desc: "Giải thích trước, mở đáp án sau", to: curriculumAnchorUrl("self-check") ?? "/review" },
    { icon: "🛠️", title: "Thực hành và dự án", desc: "Tự viết, chạy ca biên và lưu bài nộp", to: "/exercises" },
  ];
  return <div className="page narrow fade" style={{ padding: 0 }}>
    <section className="hero">
      <div className="hero-glow" />
      <h1>{greeting()} 👋 Cùng tiếp tục học C++</h1>
      <p>Một chương trình từ nền tảng đến lập trình game và Unreal. Học lý thuyết, giải thích ví dụ, tự viết code rồi kiểm tra trước khi chuyển bài.</p>
      <div className="hero-actions">
        {nextLesson && <Link to={`/lesson/${nextLesson.id}`} className="btn primary lg">{readCount || updates.length ? "Tiếp tục học" : "Bắt đầu học"} →</Link>}
        <Link to="/review" className="btn lg">↻ Ôn tập hôm nay{dueCount > 0 ? ` (${dueCount})` : ""}</Link>
      </div>
    </section>
    {updates.length > 0 && <aside className="card unified-progress-notice">
      <strong>{updates.length} bài đã học có phần cần cập nhật</strong>
      <p className="muted">Lịch sử và XP được giữ nguyên. Đọc phần bổ sung và xác nhận trong từng bài để cập nhật tiến độ.</p>
      <Link to={`/lesson/${updates[0].id}`}>Mở bài cần cập nhật đầu tiên →</Link>
    </aside>}
    <div style={{ marginBottom: 20 }}><LevelBar xp={state.xp} /></div>
    <div className="stat-grid" style={{ marginBottom: 24 }}>
      <div className="stat"><div className="stat-ico" style={{ background: "var(--warning-soft)" }}>🔥</div><div><div className="stat-val">{state.streak.count}</div><div className="stat-label">Chuỗi ngày liên tiếp</div></div></div>
      <div className="stat"><div className="stat-ico" style={{ background: "var(--accent-soft)" }}>✦</div><div><div className="stat-val">{state.xp}</div><div className="stat-label">Tổng điểm XP</div></div></div>
      <div className="stat"><div className="stat-ico" style={{ background: "var(--success-soft)" }}>📘</div><div><div className="stat-val">{readCount}<span style={{ fontSize: 15, color: "var(--text-faint)" }}>/{lessons.length}</span></div><div className="stat-label">Bài đã học bản hiện tại</div></div></div>
      <div className="stat"><div className="stat-ico" style={{ background: "var(--danger-soft)" }}>↻</div><div><div className="stat-val">{dueCount}</div><div className="stat-label">Thẻ cần ôn hôm nay</div></div></div>
    </div>
    <div className="grid course-dashboard-grid">
      <section>
        <h2 className="section-title">Chương trình học</h2>
        <div className="part-cards">
          {parts.map((part, index) => {
            const read = part.sections.filter((lesson) => lessonProgressStatus(lesson.id, state.progress).read).length;
            const pct = part.sections.length ? read / part.sections.length : 0;
            const first = part.sections.find((lesson) => !lessonProgressStatus(lesson.id, state.progress).read) ?? part.sections[0];
            return <article key={part.id} className="card part-card unified-stage">
              <div className="pc-label">Chặng {index + 1} · {part.sections.length} bài</div>
              <h3 className="pc-title">{part.title.replace(/^PH.+?[—–-]\s*/i, "")}</h3>
              <div className="pc-meta"><span>{read}/{part.sections.length} bài đã học</span><span>{Math.round(pct * 100)}%</span></div>
              <div className={"bar" + (pct === 1 ? " success" : "")}><span style={{ width: `${pct * 100}%` }} /></div>
              <div className="unified-stage-lessons">{part.sections.map((lesson) => {
                const status = lessonProgressStatus(lesson.id, state.progress);
                return <Link key={lesson.id} to={`/lesson/${lesson.id}`}><span className="lesson-number">{lesson.num}</span><span>{lesson.title}</span><span className="lesson-state">{status.read ? "✓" : status.needsUpdate ? "Cập nhật" : ""}</span></Link>;
              })}</div>
              {first && <Link className="btn sm" to={`/lesson/${first.id}`}>{pct === 1 ? "Ôn lại chặng" : "Học tiếp chặng này"} →</Link>}
            </article>;
          })}
        </div>
        <p className="muted course-progress-note">Tiến độ ghi nhận các bài bạn chủ động đánh dấu trên website. <Link to={curriculumAnchorUrl("study-history") ?? "/reference"}>Lịch sử thực hành từ tài liệu</Link> được giữ để đối chiếu.</p>
      </section>
      <aside className="card pad" style={{ position: "sticky", top: 84 }}>
        <h2 className="section-title" style={{ marginBottom: 18 }}>Mục tiêu hôm nay</h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><ProgressRing value={goalPct} size={132} label={`${reviewsToday}/${state.dailyGoal}`} sub="lượt ôn" color={goalPct >= 1 ? "var(--success)" : "var(--accent)"} /></div>
        <p className="center muted" style={{ fontSize: 13.5 }}>{goalPct >= 1 ? "Bạn đã hoàn thành mục tiêu ôn tập hôm nay." : `Ôn thêm ${state.dailyGoal - reviewsToday} thẻ để đạt mục tiêu.`}</p>
        <Link to="/review" className="btn primary block">Vào ôn tập</Link>
      </aside>
    </div>
    <section style={{ marginTop: 30 }}><h2 className="section-title">Thực hành và tra cứu</h2><div className="part-cards">{resources.map((resource) => <Link key={resource.to} to={resource.to} className="card part-card"><div style={{ fontSize: 24, marginBottom: 8 }}>{resource.icon}</div><div className="pc-title">{resource.title}</div><div className="pc-meta"><span>{resource.desc}</span><span>→</span></div></Link>)}</div></section>
    <div style={{ marginTop: 30 }}><Achievements /></div>
    <div style={{ marginTop: 30 }}><ActivityHeatmap /></div>
  </div>;
}
