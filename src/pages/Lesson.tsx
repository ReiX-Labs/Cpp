import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { reference } from "../content/reference";
import { quizFor } from "../data/quizzes";
import { challengesFor } from "../data/challenges";
import { cards as allCards } from "../data/cards";
import { actions, useStore } from "../lib/store";
import Markdown, { headingSlug } from "../components/Markdown";
import Quiz from "../components/Quiz";
import ChallengePanel from "../components/ChallengePanel";
import { curriculumLessons, courseUrl } from "../content/curriculum";

interface Toc {
  text: string;
  slug: string;
  level: number;
}

function buildToc(body: string): Toc[] {
  const out: Toc[] = [];
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^(#{3,4})\s+(.*)$/);
    if (m) {
      const text = m[2].trim();
      out.push({ text, slug: headingSlug(text), level: m[1].length });
    }
  }
  return out;
}

function scrollTo(slug: string) {
  const el = document.getElementById(slug);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Lesson() {
  const { id } = useParams();
  const state = useStore();
  const [tab, setTab] = useState<"learn" | "practice">("learn");
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set());

  const section = id ? reference.byId[id] : undefined;

  const toc = useMemo(() => (section ? buildToc(section.body) : []), [section]);
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

  const progress = state.progress[section.id];
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
          {progress?.read && <span style={{ color: "var(--success)" }}>· ✓ Đã học</span>}
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
            <Markdown>{section.body}</Markdown>

            {curriculumLessons.some((item) => item.related.includes(section.id)) && (
              <aside className="card pad" style={{ marginBottom: 20 }}>
                <strong>Học chủ đề này theo lộ trình</strong>
                <div className="handoff-related">
                  {curriculumLessons.filter((item) => item.related.includes(section.id)).map((item) => (
                    <Link className="chip" key={item.id} to={courseUrl(item.id)}>{item.number === "00" ? "Chuẩn bị" : `Bài ${item.number}`} · {item.title}</Link>
                  ))}
                </div>
              </aside>
            )}
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
                  Bạn có thể bổ sung câu hỏi trong <code>src/data/quizzes.ts</code>,{" "}
                  <code>src/data/challenges.ts</code> hoặc thẻ ôn tập trong{" "}
                  <code>src/data/cards.ts</code>. Trong lúc đó, hãy sang phần ôn tập hàng ngày!
                </p>
                <Link to="/review" className="btn primary mt">
                  ↻ Ôn tập hàng ngày
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
                        if (score >= 0.7) actions.markSectionRead(section.id);
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
          {progress?.read ? (
            <div className="chip" style={{ color: "var(--success)", marginBottom: 12 }}>
              ✓ Đã hoàn thành
            </div>
          ) : (
            <button
              className="btn primary block sm"
              style={{ marginBottom: 12 }}
              onClick={() => actions.markSectionRead(section.id)}
            >
              ✓ Đánh dấu đã học (+15 XP)
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

        {toc.length > 0 && (
          <div className="rail-card">
            <h4>Trong bài này</h4>
            <nav className="toc">
              {toc.map((t) => (
                <a
                  key={t.slug}
                  className={t.level === 4 ? "h3" : ""}
                  onClick={() => scrollTo(t.slug)}
                >
                  {t.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
