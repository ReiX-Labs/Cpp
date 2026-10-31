import { Children, isValidElement, memo, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Link, useLocation } from "react-router-dom";
import { splitMarkdownStructures } from "../content/markdownStructures";

/** Extract plain text from arbitrary react children (for heading ids). */
export function nodeText(children: ReactNode): string {
  if (children == null || children === false) return "";
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(nodeText).join("");
  if (typeof children === "object" && "props" in (children as any)) {
    return nodeText((children as any).props?.children);
  }
  return "";
}

/** Slug used for in-page heading anchors (kept consistent for the TOC). */
export function headingSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Heading({ level, children }: { level: 2 | 3 | 4; children: ReactNode }) {
  const id = headingSlug(nodeText(children));
  const Tag = (`h${level}` as unknown) as "h2";
  return <Tag id={id}>{children}</Tag>;
}

function revealAnchor(anchor: string) {
  const target = document.getElementById(anchor) ?? [...document.querySelectorAll<HTMLElement>("[data-reading-anchors]")]
    .find(element => element.dataset.readingAnchors?.split(" ").includes(anchor));
  if (!target) return;
  let parent = target.parentElement;
  while (parent) {
    if (parent instanceof HTMLDetailsElement) parent.open = true;
    parent = parent.parentElement;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface Props {
  children: string;
  resolveAnchor?: (anchor: string) => string | undefined;
  study?: boolean;
}

/** Renders markdown with GFM tables, C++ syntax highlighting and anchored headings. */
function MarkdownBase({ children, resolveAnchor, study = false }: Props) {
  const location = useLocation();
  // Support only the two trusted document structures we need. Arbitrary raw HTML
  // remains disabled, while answer disclosures and explicit anchors stay usable.
  const chunks = splitMarkdownStructures(children);
  if (chunks.some((chunk) => chunk.type !== "text")) return <>{chunks.map((chunk, index) => {
    if (chunk.type === "anchor") return <span key={index} id={chunk.id} className="content-anchor" />;
    if (chunk.type === "details") return <details className="handoff-answers" key={index}>
      <summary>{chunk.summary}</summary><MarkdownBase resolveAnchor={resolveAnchor} study={study}>{chunk.body}</MarkdownBase>
    </details>;
    return <MarkdownBase key={index} resolveAnchor={resolveAnchor} study={study}>{chunk.body}</MarkdownBase>;
  })}</>;
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
        components={{
          p: ({ children }) => <p className={study && /^(Bài tự làm|Tự kiểm tra|Tự viết|Đạt khi|Tiêu chí hoàn thành):/.test(nodeText(children)) ? "study-prompt" : undefined}>{children}</p>,
          pre: ({ children }) => {
            if (!study) return <pre>{children}</pre>;
            const code = nodeText(children);
            const lines = code.trimEnd().split("\n").length;
            const child = Children.toArray(children).find(item => isValidElement<{ className?: string }>(item));
            const language = isValidElement<{ className?: string }>(child) ? child.props.className?.match(/language-(\S+)/)?.[1] : undefined;
            const file = code.match(/^\/\/ example: [^;]+; file: (.+)/)?.[1];
            const label = file ?? (language === "cpp" ? "Code C++" : language === "text" ? "Kết quả / sơ đồ" : "Đoạn minh họa");
            return lines > 28 ? <details className="study-code"><summary>{label} · {lines} dòng — mở để đọc code</summary><pre>{children}</pre></details>
              : <div className="study-code"><div className="study-code-label">{label} · {lines} dòng</div><pre>{children}</pre></div>;
          },
          table: ({ children }) => <div className="markdown-table-wrap" tabIndex={0}><table>{children}</table></div>,
          h1: ({ children }) => <Heading level={2}>{children}</Heading>,
          h2: ({ children }) => <Heading level={2}>{children}</Heading>,
          h3: ({ children }) => <Heading level={3}>{children}</Heading>,
          h4: ({ children }) => <Heading level={4}>{children}</Heading>,
          a: ({ href, children }) => {
            // In-page anchors: scroll manually so they don't clash with HashRouter.
            if (href?.startsWith("#")) {
              const destination = resolveAnchor?.(href.slice(1));
              if (destination) return <Link to={destination} onClick={event => {
                if (destination === location.pathname + location.search && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
                  event.preventDefault();
                  revealAnchor(href.slice(1));
                }
              }}>{children}</Link>;
              return (
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    revealAnchor(href.slice(1));
                  }}
                >
                  {children}
                </a>
              );
            }
            return (
              <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {children}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

export const Markdown = memo(MarkdownBase);
export default Markdown;
