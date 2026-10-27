import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { reference } from "../content/reference";
import { actions, useStore } from "../lib/store";
import Markdown from "../components/Markdown";
import SyntaxLookup from "../components/SyntaxLookup";
import { curriculumResources, curriculumAnchorUrl } from "../content/curriculum";

export default function Reference() {
  const state = useStore();
  const [params, setParams] = useSearchParams();
  const appendix = reference.appendix ?? reference.parts.at(-1);
  const sections = appendix?.sections ?? [];
  const resources = curriculumResources.filter((resource) => !sections.some((section) => section.id === resource.id));

  const requested = params.get("tab");
  useEffect(() => {
    if (requested === "a") setParams({ tab: "syntax" }, { replace: true });
  }, [requested, setParams]);
  const active =
    (requested && (requested === "syntax" || requested === "settings" || sections.some((s) => s.id === requested) || resources.some((s) => s.id === requested))
      ? requested
      : null) ??
    "syntax";
  const select = (id: string) => {
    setParams({ tab: id }, { replace: true });
  };

  const current = sections.find((s) => s.id === active) ?? resources.find((s) => s.id === active);
  const anchor = params.get("anchor");
  useEffect(() => {
    if (anchor) {
      const frame = requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ block: "start" }));
      return () => cancelAnimationFrame(frame);
    }
  }, [active, anchor]);

  return (
    <div className="page narrow fade" style={{ padding: 0 }}>
      <h1 style={{ fontSize: 28, letterSpacing: "-0.02em", margin: "0 0 4px" }}>
        {active === "settings" ? "Cài đặt học tập" : active === "syntax" ? "Tra cứu kiến thức" : "Tra cứu và ôn tập"}
      </h1>
      <p className="muted" style={{ marginTop: 0, marginBottom: 22 }}>
        Tra theo chủ đề hoặc thao tác, rồi mở đúng phần giải thích trong chương trình học.
      </p>

      <div className="unified-resource-controls">
        <label htmlFor="reference-view">Nội dung</label>
        <select id="reference-view" value={active} onChange={(event) => select(event.target.value)}>
          <option value="syntax">Cú pháp và thao tác theo chủ đề</option>
          <optgroup label="Bảng đối chiếu và tài nguyên">{sections.filter((s) => !["a", "f"].includes(s.id) || s.id === active).map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}</optgroup>
          <optgroup label="Thực hành và tự ôn">{resources.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}</optgroup>
          <option value="settings">Cài đặt học tập</option>
        </select>
        <Link className="btn sm" to="/">Chương trình học</Link>
      </div>

      {active === "syntax" ? <SyntaxLookup /> : active === "settings" ? (
        <div className="card pad fade" style={{ maxWidth: 620 }}>
          <h3 style={{ marginTop: 0 }}>Cài đặt học tập</h3>

          <div style={{ marginBottom: 24 }}>
            <div className="row spread" style={{ marginBottom: 8 }}>
              <label style={{ fontWeight: 600 }}>Mục tiêu ôn tập mỗi ngày</label>
              <span className="chip">{state.dailyGoal} thẻ</span>
            </div>
            <input
              type="range"
              min={5}
              max={100}
              step={5}
              value={state.dailyGoal}
              onChange={(e) => actions.setDailyGoal(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent)" }}
            />
            <p className="muted" style={{ fontSize: 13, marginBottom: 0 }}>
              Số thẻ bạn muốn ôn mỗi ngày để giữ chuỗi 🔥.
            </p>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ fontWeight: 600, display: "block", marginBottom: 8 }}>Giao diện</label>
            <div className="row gap-sm">
              <button
                className={"btn sm" + (state.theme === "dark" ? " primary" : "")}
                onClick={() => actions.setTheme("dark")}
              >
                ☾ Tối
              </button>
              <button
                className={"btn sm" + (state.theme === "light" ? " primary" : "")}
                onClick={() => actions.setTheme("light")}
              >
                ☀ Sáng
              </button>
            </div>
          </div>

          <div>
            <label style={{ fontWeight: 600, display: "block", marginBottom: 8 }}>
              Dữ liệu học tập
            </label>
            <p className="muted" style={{ fontSize: 13, marginTop: 0 }}>
              Toàn bộ tiến độ được lưu trên trình duyệt này (localStorage). Xoá sẽ đưa mọi thứ về 0.
            </p>
            <button
              className="btn sm"
              style={{ borderColor: "var(--danger)", color: "var(--danger)" }}
              onClick={() => {
                if (confirm("Xoá toàn bộ tiến độ, XP, chuỗi ngày và lịch ôn tập?")) {
                  actions.resetAll();
                }
              }}
            >
              Xoá toàn bộ tiến độ
            </button>
          </div>
        </div>
      ) : current ? (
        <div className="card pad fade">
          <h2 style={{ marginTop: 0 }}>{current.title}</h2>
          <Markdown resolveAnchor={curriculumAnchorUrl}>{current.body}</Markdown>
        </div>
      ) : null}
    </div>
  );
}
