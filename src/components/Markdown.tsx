import { memo, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Link } from "react-router-dom";
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

interface Props {
  children: string;
  resolveAnchor?: (anchor: string) => string | undefined;
}

/** Renders markdown with GFM tables, C++ syntax highlighting and anchored headings. */
function MarkdownBase({ children, resolveAnchor }: Props) {
  // Support only the two trusted document structures we need. Arbitrary raw HTML
  // remains disabled, while answer disclosures and explicit anchors stay usable.
  const chunks = splitMarkdownStructures(children);
  if (chunks.some((chunk) => chunk.type !== "text")) return <>{chunks.map((chunk, index) => {
    if (chunk.type === "anchor") return <span key={index} id={chunk.id} className="content-anchor" />;
    if (chunk.type === "details") return <details className="handoff-answers" key={index}>
      <summary>{chunk.summary}</summary><MarkdownBase resolveAnchor={resolveAnchor}>{chunk.body}</MarkdownBase>
    </details>;
    return <MarkdownBase key={index} resolveAnchor={resolveAnchor}>{chunk.body}</MarkdownBase>;
  })}</>;
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
        components={{
          table: ({ children }) => <div className="markdown-table-wrap" tabIndex={0}><table>{children}</table></div>,
          h1: ({ children }) => <Heading level={2}>{children}</Heading>,
          h2: ({ children }) => <Heading level={2}>{children}</Heading>,
          h3: ({ children }) => <Heading level={3}>{children}</Heading>,
          h4: ({ children }) => <Heading level={4}>{children}</Heading>,
          a: ({ href, children }) => {
            // In-page anchors: scroll manually so they don't clash with HashRouter.
            if (href?.startsWith("#")) {
              const destination = resolveAnchor?.(href.slice(1));
              if (destination) return <Link to={destination}>{children}</Link>;
              return (
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(href.slice(1));
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
