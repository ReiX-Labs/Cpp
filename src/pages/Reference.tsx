import { useSearchParams } from "react-router-dom";
import { reference } from "../content/reference";
import { actions, useStore } from "../lib/store";
import Markdown from "../components/Markdown";
import SyntaxLookup from "../components/SyntaxLookup";

export default function Reference() {
  const state = useStore();
  const [params, setParams] = useSearchParams();
  const appendix = reference.appendix ?? reference.parts.at(-1);
  const sections = appendix?.sections ?? [];

  const requested = params.get("tab");
  const active =
    (requested && (requested === "syntax" || requested === "settings" || sections.some((s) => s.id === requested))
      ? requested
      : null) ??
    "syntax";
  const select = (id: string) => {
    setParams({ tab: id }, { replace: true });
  };

  const current = sections.find((s) => s.id === active);

  return (
    <div className="page narrow fade" style={{ padding: 0 }}>
      <h1 style={{ fontSize: 28, letterSpacing: "-0.02em", margin: "0 0 4px" }}>
        Tra cứu &amp; Cheat sheet
      </h1>
      <p className="muted" style={{ marginTop: 0, marginBottom: 22 }}>
        Tra nhanh cú pháp, bảng đối chiếu, thuật ngữ — và tùy chỉnh trải nghiệm học.
      </p>

      <div className="tabs" style={{ flexWrap: "wrap" }}>
        <button className={"tab" + (active === "syntax" ? " active" : "")} onClick={() => select("syntax")}>
          Câu lệnh · Bài 01–09
        </button>
        {sections.map((s) => (
          <button
            key={s.id}
            className={"tab" + (active === s.id ? " active" : "")}
            onClick={() => select(s.id)}
          >
            {s.num ? `${s.num}. ` : ""}
            {s.title}
          </button>
        ))}
        <button
          className={"tab" + (active === "settings" ? " active" : "")}
          onClick={() => select("settings")}
        >
          ⚙ Cài đặt
        </button>
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
          <Markdown>{current.body}</Markdown>
        </div>
      ) : null}
    </div>
  );
}
