import type { LessonReading, ReadingUnit } from "../content/lessonReading";
import { curriculumAnchorUrl } from "../content/curriculum";
import Markdown from "./Markdown";
import "./LessonReader.css";

const kindLabel: Record<ReadingUnit["kind"], string> = {
  concept: "Kiến thức", example: "Ví dụ áp dụng", practice: "Tự luyện",
};

export function ReadingOutline({ reading, activeIndex, onSelect }: {
  reading: LessonReading; activeIndex: number; onSelect: (index: number) => void;
}) {
  return <ol className="reading-outline">
    {reading.units.map((unit, index) => <li key={unit.id}>
      <button aria-current={index === activeIndex ? "step" : undefined} onClick={() => onSelect(index)}>
        <span className="reading-outline-number">{String(index + 1).padStart(2, "0")}</span>
        <span>{unit.title}<small>{kindLabel[unit.kind]}</small></span>
      </button>
    </li>)}
  </ol>;
}

export default function LessonReader({ reading, activeIndex, all, anchor, onSelect, onViewChange }: {
  reading: LessonReading; activeIndex: number; all: boolean; anchor: string | null;
  onSelect: (index: number) => void; onViewChange: (all: boolean) => void;
}) {
  const active = reading.units[activeIndex];
  const units = all ? reading.units : active ? [active] : [];
  const showIntro = all || activeIndex === 0 || (!!anchor && reading.introAnchors.includes(anchor));
  return <section className="lesson-reader" aria-label="Nội dung bài học">
    <div className="reading-toolbar" id="lesson-reading-start" tabIndex={-1}>
      <div className="reading-view" role="group" aria-label="Cách đọc bài">
        <button aria-pressed={!all} onClick={() => onViewChange(false)}>Đọc từng phần</button>
        <button aria-pressed={all} onClick={() => onViewChange(true)}>Xem toàn bài</button>
      </div>
      <span className="reading-position">{all ? `${reading.units.length} phần trong bài` : `Phần ${activeIndex + 1} / ${reading.units.length}`}</span>
    </div>

    <details className="reading-mobile-outline" key={`outline-${activeIndex}`}>
      <summary>Mục lục bài học <span>{reading.units.length} phần</span></summary>
      <ReadingOutline reading={reading} activeIndex={activeIndex} onSelect={onSelect} />
    </details>

    {reading.intro.trim() && <details className="reading-intro" key={`intro-${activeIndex}-${all}-${showIntro}`} open={showIntro}>
      <summary>Mục tiêu &amp; kiến thức cần có</summary>
      <Markdown resolveAnchor={curriculumAnchorUrl}>{reading.intro}</Markdown>
    </details>}

    <div className="reading-content">
      {units.map(unit => <article className={`reading-unit reading-${unit.kind}`} id={`reading-${unit.id}`} data-reading-anchors={unit.anchors.join(" ")} key={unit.id} tabIndex={-1}>
        <div className="reading-unit-meta">
          <span className={`reading-kind ${unit.kind}`}>{kindLabel[unit.kind]}</span>
          <span>Khoảng {unit.minutes} phút đọc</span>
        </div>
        <Markdown resolveAnchor={curriculumAnchorUrl} study>{unit.markdown}</Markdown>
      </article>)}
    </div>

    {!all && active && <nav className="reading-steps" aria-label="Chuyển phần trong bài">
      <button className="btn" disabled={activeIndex === 0} onClick={() => onSelect(activeIndex - 1)}>
        <span>← Phần trước</span>
        <small>{reading.units[activeIndex - 1]?.title ?? "Đầu bài học"}</small>
      </button>
      {activeIndex < reading.units.length - 1 ? <button className="btn primary" onClick={() => onSelect(activeIndex + 1)}>
        <span>Phần tiếp theo →</span><small>{reading.units[activeIndex + 1].title}</small>
      </button> : <div className="reading-end">Đã đến cuối nội dung.<br /><span>Tự kiểm tra trước khi đánh dấu đã học.</span></div>}
    </nav>}
  </section>;
}
