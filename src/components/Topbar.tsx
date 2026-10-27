import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reference } from "../content/reference";
import { curriculumSections, curriculumLessons, courseUrl } from "../content/curriculum";
import { actions, useStore } from "../lib/store";

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d");
}

export default function Topbar() {
  const state = useStore();
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const blurTimer = useRef<number>();

  const results = useMemo(() => {
    const query = norm(q.trim());
    if (query.length < 2) return [];
    const searchable = [
      ...curriculumSections.map((item) => ({
        ...item, num: curriculumLessons.find((lesson) => lesson.id === item.id)?.number ?? "",
        partTitle: "Lộ trình C++ cơ bản", url: courseUrl(item.id), priority: 1,
      })),
      ...reference.sections.map((s) => ({ ...s, partTitle: `Thư viện · ${s.partTitle}`, url: `/lesson/${s.id}`, priority: 0 })),
    ];
    return searchable
      .map((s) => {
        const hay = norm(s.title + " " + s.body);
        const inTitle = norm(s.title).includes(query);
        const hit = hay.includes(query);
        return hit ? { s, score: (inTitle ? 4 : 1) + s.priority } : null;
      })
      .filter((x): x is NonNullable<typeof x> => !!x)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((x) => x.s);
  }, [q]);

  const go = (url: string) => {
    setQ("");
    setFocused(false);
    navigate(url);
  };

  return (
    <header className="topbar">
      <div className="topbar-inner">
      <div className="search">
        <span className="search-ico">⌕</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            blurTimer.current = window.setTimeout(() => setFocused(false), 150);
          }}
          placeholder="Tìm bài học, khái niệm, thuật ngữ…"
          aria-label="Tìm kiếm"
        />
        {focused && q.trim().length >= 2 && (
          <div
            className="search-results"
            onMouseDown={() => window.clearTimeout(blurTimer.current)}
          >
            {results.length === 0 ? (
              <div className="search-empty">Không tìm thấy kết quả cho “{q}”.</div>
            ) : (
              results.map((s) => (
                <button type="button" key={s.id} className="search-result" onClick={() => go(s.url)}>
                  <div className="sr-title">
                    {s.num ? `${s.num}. ` : ""}
                    {s.title}
                  </div>
                  <div className="sr-part">{s.partTitle}</div>
                </button>
              ))
            )}
          </div>
        )}
      </div>

      <div className="topbar-stats">
        <span className="pill streak" title="Chuỗi ngày học liên tiếp">
          <span className="ico">🔥</span>
          {state.streak.count} ngày
        </span>
        <span className="pill xp" title="Điểm kinh nghiệm">
          <span className="ico">✦</span>
          {state.xp} XP
        </span>
        <button
          className="icon-btn"
          title="Đổi giao diện sáng/tối"
          onClick={() => actions.setTheme(state.theme === "dark" ? "light" : "dark")}
        >
          {state.theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
      </div>
    </header>
  );
}
