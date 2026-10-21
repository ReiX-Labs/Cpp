import raw from "../../Update/CPP_Fundamentals_Review_01-09_AI_Handoff.md?raw";
import { parseHandoff, parseSyntaxTable } from "./handoffParser";

export const handoffChapters = parseHandoff(raw);
export function handoffChapter(number: number) {
  const chapter = handoffChapters.find((item) => item.number === number);
  if (!chapter) throw new Error(`Missing handoff chapter ${number}`);
  return chapter;
}

// Stable lesson IDs are independent of chapter numbering in a future handoff.
// Add 10–12 only after the corresponding teaching material is supplied.
export const fundamentalsLessons = [
  { id: "01", title: "Môi trường, nhập / xuất", chapter: 2, related: ["0", "1"] },
  { id: "02", title: "Biến, hằng, auto và ép kiểu", chapter: 3, related: ["3", "22", "46"] },
  { id: "03", title: "Toán tử và bitmask", chapter: 4, related: ["3"] },
  { id: "04", title: "Điều kiện và scope", chapter: 5, related: ["4"] },
  { id: "05", title: "Vòng lặp", chapter: 6, related: ["4", "17"] },
  { id: "06", title: "Hàm và overload", chapter: 7, related: ["5"] },
  { id: "06.5", title: "Header, source và build", chapter: 8, related: ["1", "2", "41"] },
  { id: "07", title: "Array, vector, string", chapter: 9, related: ["20", "49"] },
  { id: "08", title: "Struct, enum class, reference", chapter: 10, related: ["5", "6", "12", "22"] },
  { id: "09", title: "Pointer cơ bản", chapter: 11, related: ["6"] },
];

export const studyResources = [
  { id: "integrated", title: "Ví dụ 3 file", chapter: 12 },
  { id: "mistakes", title: "Lỗi thường gặp", chapter: 13 },
  { id: "status", title: "Tiến độ đã ghi nhận", chapter: 14 },
  { id: "questions", title: "23 câu tự kiểm tra", chapter: 15 },
  { id: "schedule", title: "Cách ôn 20 phút", chapter: 16 },
];

export const syntaxEntries = [
  ...parseSyntaxTable(handoffChapter(1).body),
  // Additional expressions explicitly taught in chapters 4, 9 and 11.
  ...[
    ["abilities |= CanJump;", "Bật cờ CanJump.", "Toán tử và cờ"],
    ["abilities &= ~CanShoot;", "Tắt cờ CanShoot.", "Toán tử và cờ"],
    ["abilities ^= CanJump;", "Đảo trạng thái cờ CanJump.", "Toán tử và cờ"],
    ["(abilities & CanJump) != 0", "Kiểm tra cờ CanJump có bật không.", "Toán tử và cờ"],
    ['name += " Bros";', "Nối thêm văn bản vào chuỗi.", "Chuỗi"],
    ["name.size(), name.length()", "Số phần tử char; không nhất thiết là số ký tự tiếng Việt hiển thị.", "Chuỗi"],
    ["name.empty()", "Kiểm tra chuỗi có rỗng không.", "Chuỗi"],
    ["name[0]", "Truy cập ký tự đầu; chỉ dùng để đọc ký tự đầu khi chuỗi không rỗng.", "Chuỗi"],
    ['name.find("Bros")', "Tìm vị trí chuỗi con; trả về std::string::npos nếu không tìm thấy.", "Chuỗi"],
    ["name.substr(0, 5)", "Lấy chuỗi con từ vị trí 0, tối đa 5 phần tử char.", "Chuỗi"],
    ["for (Player& p : players)", "Duyệt bằng tham chiếu để sửa phần tử gốc.", "Reference và pointer"],
    ["ref = b;", "Gán giá trị b vào đối tượng ref đang tham chiếu; không đổi đối tượng tham chiếu.", "Reference và pointer"],
    ["ptr = &b;", "Đổi con trỏ sang địa chỉ của b.", "Reference và pointer"],
    ["if (ptr != nullptr)", "Kiểm tra không rỗng trước khi truy cập; không chứng minh đối tượng còn sống.", "Reference và pointer"],
  ].map(([syntax, meaning, group]) => ({ syntax, meaning, group })),
];
