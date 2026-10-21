import type { Reference } from "./parse";
import type { HandoffChapter } from "./handoffParser";

/** Find real Markdown headings without interpreting preprocessor lines in code. */
function headings(body: string, level: number) {
  const lines = body.split("\n");
  const found: { title: string; start: number }[] = [];
  let fenced = false;
  lines.forEach((line, start) => {
    if (/^\s*```/.test(line)) fenced = !fenced;
    if (fenced) return;
    const match = line.match(new RegExp(`^#{${level}} (.+)$`));
    if (match) found.push({ title: match[1], start });
  });
  return { lines, found };
}

function asLessonBody(body: string): string {
  let fenced = false;
  return body.split("\n").map((line) => {
    if (/^\s*```/.test(line)) fenced = !fenced;
    // Handoff subsections become in-lesson headings, without chapter numbering.
    return fenced ? line : line.replace(/^## \d+\.\d+\.\s+/, "### ");
  }).join("\n").trim().replace(/\n---\s*$/, "");
}

export const integratedLessonIds = ["0", "2", "3", "4", "5", "6", "12", "20", "22", "49"];

/** Merge source theory into existing lesson bodies; keep route/progress IDs stable. */
export function integrateHandoff(reference: Reference, chapters: HandoffChapter[]): Reference {
  const chapter = (number: number) => {
    const found = chapters.find((item) => item.number === number);
    if (!found) throw new Error(`Missing handoff chapter ${number}`);
    return asLessonBody(found.body);
  };
  const topic = (key: string) => {
    const number = Number(key.split(".")[0]);
    const source = chapters.find((item) => item.number === number);
    if (!source) throw new Error(`Missing handoff chapter ${number}`);
    const { lines, found } = headings(source.body, 2);
    const index = found.findIndex((item) => item.title.startsWith(`${key}. `));
    if (index < 0) throw new Error(`Missing handoff topic ${key}`);
    return asLessonBody(lines.slice(found[index].start, found[index + 1]?.start).join("\n"));
  };
  const replace = (id: string, title: string, content: string) => {
    const section = reference.byId[id];
    const { lines, found } = headings(section.body, 3);
    const index = found.findIndex((item) => item.title === title);
    if (index < 0) throw new Error(`Missing original heading ${id}: ${title}`);
    section.body = [lines.slice(0, found[index].start).join("\n"), content,
      lines.slice(found[index + 1]?.start ?? lines.length).join("\n")].filter(Boolean).join("\n\n");
  };
  const append = (id: string, content: string) => {
    reference.byId[id].body = reference.byId[id].body.trim().replace(/\n---\s*$/, "") + "\n\n" + content;
  };
  const prepend = (id: string, content: string) => {
    reference.byId[id].body = content + "\n\n" + reference.byId[id].body;
  };

  replace("0", "Đường 1 — Chương trình C++ thuần đầu tiên", "### Chương trình console đầu tiên\n\n" + chapter(2));
  replace("2", "Header & Source — vì sao tách đôi", topic("8.1"));
  append("2", topic("8.2"));

  replace("3", "Khai báo biến", topic("3.1"));
  replace("3", "`auto` — để compiler tự suy kiểu", topic("3.2") + "\n\n" + topic("3.3"));
  replace("3", "Toán tử", chapter(4));
  // The handoff's treatment replaces the shorter equivalent flow-control examples.
  reference.byId["4"].body = chapter(5) + "\n\n" + chapter(6)
    + "\n\n### Duyệt container theo phần tử\n\n"
    + "Dùng range-based for khi cần duyệt từng phần tử. `const auto&` đọc mà không sao chép; "
    + "`auto&` cho phép sửa phần tử gốc. Ví dụ đầy đủ nằm trong mục 20 về containers.\n\n"
    + "```cpp\nfor (const auto& item : inventory)\n{\n    std::cout << item << \"\\n\";\n}\n```";

  replace("5", "Khai báo & định nghĩa", topic("7.1") + "\n\n" + topic("7.2"));
  replace("5", "Truyền tham số: by value vs by reference vs by const-reference", topic("10.2")
    + "\n\nVới kiểu nhỏ như `int`, `float`, `bool`, thường truyền theo giá trị. Với đối tượng lớn chỉ đọc, dùng `const T&`; cần sửa gốc, dùng `T&`. Pointer phù hợp khi cho phép không có đối tượng (`nullptr`).");
  replace("5", "Function Overloading — cùng tên, khác tham số", topic("7.3"));
  append("5", topic("7.4"));

  replace("6", "Pointer (con trỏ) — biến lưu **địa chỉ** của biến khác", topic("11.1"));
  replace("6", "Reference (tham chiếu) — **bí danh** (alias) cho biến đã có", topic("11.2"));
  replace("6", "`nullptr` và bug kinh điển", topic("11.3") + "\n\n" + topic("11.4"));
  reference.byId["6"].body = reference.byId["6"].body
    .replace("const int* p1;", "int x = 42;\nconst int* p1 = nullptr;")
    .replace("const int* const p3;", "const int* const p3 = &x;");
  append("6", topic("11.5") + "\n\n### Ví dụ hoàn chỉnh: Arena ba file\n\n" + chapter(12));

  prepend("12", topic("10.1") + "\n\n### Từ struct đến class\n\n"
    + "Phần struct ở trên thuộc bài 08. Nội dung class dưới đây là tài liệu mở rộng; bài 11–12 trong lộ trình handoff vẫn chờ cập nhật.");
  prepend("20", topic("9.1") + "\n\n" + topic("9.2") + "\n\n### Các container STL khác và ví dụ mở rộng");
  // Keep the existing advanced constexpr function example after the beginner theory.
  const constants = reference.byId["22"];
  constants.body = constants.body.replace("### constexpr — tính toán LÚC BIÊN DỊCH", topic("3.2")
    + "\n\n### Hàm constexpr — mở rộng\n\nHàm constexpr không bắt buộc mọi lời gọi đều chạy lúc biên dịch.");
  prepend("49", topic("9.3"));

  for (const id of integratedLessonIds) {
    const section = reference.byId[id];
    section.minutes = Math.max(1, Math.round(section.body.trim().split(/\s+/).length / 180));
    section.codeBlocks = Math.floor((section.body.match(/^```/gm)?.length ?? 0) / 2);
  }
  return reference;
}
