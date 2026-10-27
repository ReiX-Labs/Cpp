// Hands-on practice: "predict the output" puzzles and open coding challenges.
// No backend/compiler is required — challenges are self-checked, with a reference
// solution you reveal on demand, plus a one-click "open in Compiler Explorer" link
// so you can actually run/experiment with the code.

export interface Challenge {
  id: string;
  sectionId: string;
  type: "predict" | "code";
  title: string;
  prompt: string;
  /** code shown to the user (the puzzle, or starter for a coding task) */
  code: string;
  /** for `predict`: the exact expected stdout */
  expected?: string;
  /** for `code`: a reference solution revealed on demand */
  solution?: string;
  hints?: string[];
}

export const challenges: Record<string, Challenge[]> = {
  "6": [
    {
      id: "ch6-1",
      sectionId: "6",
      type: "predict",
      title: "Con trỏ thay đổi giá trị",
      prompt: "Chương trình in ra gì?",
      code: `#include <iostream>
int main() {
    int a = 10, b = 20;
    int* p = &a;
    *p = 15;
    p = &b;
    *p = 25;
    std::cout << a << " " << b;
}`,
      expected: "15 25",
      hints: ["`p` trỏ tới a trước, rồi được trỏ lại sang b.", "Mỗi `*p = ...` ghi vào biến mà p đang trỏ."],
    },
  ],
  "5": [
    {
      id: "ch5-1",
      sectionId: "5",
      type: "predict",
      title: "Truyền tham chiếu",
      prompt: "Chương trình in ra gì?",
      code: `#include <iostream>
void addFive(int& n) { n += 5; }
int main() {
    int x = 10;
    addFive(x);
    std::cout << x;
}`,
      expected: "15",
      hints: ["`int&` là tham chiếu → sửa trực tiếp biến gốc x."],
    },
  ],
  "10": [
    {
      id: "ch10-1",
      sectionId: "10",
      type: "code",
      title: "Chuyển raw pointer sang smart pointer",
      prompt:
        "Đoạn code dưới rò rỉ bộ nhớ nếu `mightThrow()` ném exception. Viết lại dùng unique_ptr để quản lý lifetime. Giả sử world.add(Enemy*) chỉ mượn con trỏ trong lời gọi, không lưu lại hoặc nhận ownership.",
      code: `void spawn() {
    Enemy* e = new Enemy();
    mightThrow();        // nếu ném -> rò rỉ e!
    world.add(e);
    delete e;
}`,
      solution: `void spawn() {
    auto e = std::make_unique<Enemy>();
    mightThrow();               // exception -> e tự giải phóng
    world.add(e.get());         // mượn trong lời gọi; e vẫn là owner
}`,
      hints: ["Dùng `std::make_unique` và include <memory>.", "`.get()` cung cấp pointer mượn; không gọi delete cho pointer đó.", "Nếu world cần giữ object lâu hơn spawn, API phải nhận quyền sở hữu bằng unique_ptr; đó là hợp đồng khác."],
    },
  ],
  "14": [
    {
      id: "ch14-1",
      sectionId: "14",
      type: "predict",
      title: "Thứ tự gọi constructor",
      prompt: "Chương trình in ra gì?",
      code: `#include <iostream>
struct A { A() { std::cout << "A"; } };
struct B : A { B() { std::cout << "B"; } };
int main() { B b; }`,
      expected: "AB",
      hints: ["Constructor của base chạy TRƯỚC constructor của derived."],
    },
  ],
  "15": [
    {
      id: "ch15-1",
      sectionId: "15",
      type: "predict",
      title: "Đa hình runtime",
      prompt: "Chương trình in ra gì?",
      code: `#include <iostream>
struct Shape {
    virtual ~Shape() = default;
    virtual void name() { std::cout << "Shape "; }
};
struct Circle : Shape { void name() override { std::cout << "Circle "; } };
int main() {
    Shape* s = new Circle();
    s->name();
    delete s;
}`,
      expected: "Circle ",
      hints: ["`name()` là virtual → dynamic dispatch.", "Con trỏ base trỏ tới Circle → gọi override của Circle.", "Virtual destructor làm delete qua Shape* hợp lệ. Nếu bỏ nó, chương trình có UB trong C++17 và không thể chấm một output cố định."],
    },
  ],
  "20": [
    {
      id: "ch20-1",
      sectionId: "20",
      type: "predict",
      title: "vector và range-based for",
      prompt: "Chương trình in ra gì?",
      code: `#include <iostream>
#include <vector>
int main() {
    std::vector<int> v{1, 2, 3};
    v.push_back(4);
    int sum = 0;
    for (int x : v) sum += x;
    std::cout << v.size() << " " << sum;
}`,
      expected: "4 10",
      hints: ["push_back thêm phần tử thứ 4.", "Tổng 1+2+3+4."],
    },
  ],
  "18": [
    {
      id: "ch18-1",
      sectionId: "18",
      type: "predict",
      title: "Lambda capture by value",
      prompt: "Chương trình in ra gì?",
      code: `#include <iostream>
int main() {
    int base = 100;
    auto add = [base](int x) { return base + x; };
    base = 0;             // đổi sau khi đã capture
    std::cout << add(5);
}`,
      expected: "105",
      hints: ["`[base]` capture BY VALUE → chụp giá trị 100 tại lúc tạo lambda.", "Đổi base sau đó không ảnh hưởng bản đã copy."],
    },
  ],
  "21": [
    {
      id: "ch21-1",
      sectionId: "21",
      type: "code",
      title: "Sắp xếp giảm dần bằng STL",
      prompt:
        "Cho `std::vector<int> v`. Hãy sắp xếp `v` theo thứ tự GIẢM DẦN chỉ bằng một lời gọi `std::sort` với lambda.",
      code: `std::vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};
// sắp xếp giảm dần ...`,
      solution: `std::sort(v.begin(), v.end(),
          [](int a, int b) { return a > b; });`,
      hints: ["Comparator trả về `a > b` cho thứ tự giảm dần.", "Đừng quên `#include <algorithm>`."],
    },
  ],
  "46": [
    {
      id: "ch46-1",
      sectionId: "46",
      type: "predict",
      title: "Narrowing khi ép kiểu",
      prompt: "Chương trình in ra gì?",
      code: `#include <iostream>
int main() {
    int   j = 3.7f;      // narrowing: cắt phần thập phân
    float f = 5;         // 5 -> 5.0
    std::cout << j << " " << f;
}`,
      expected: "3 5",
      hints: ["`int j = 3.7f` cắt phần thập phân → 3.", "`std::cout` in float 5.0 là \"5\"."],
    },
  ],
  "48": [
    {
      id: "ch48-1",
      sectionId: "48",
      type: "code",
      title: "Overload operator+ cho Vec2",
      prompt: "Viết `operator+` (free function) để `a + b` cộng từng thành phần của Vec2.",
      code: `struct Vec2 { float x, y; };
// viết operator+ ở đây ...
// mong muốn: Vec2 c = a + b;`,
      solution: `Vec2 operator+(const Vec2& a, const Vec2& b) {
    return { a.x + b.x, a.y + b.y };
}`,
      hints: ["Nhận 2 tham số const&, trả về Vec2 mới.", "Toán tử đối xứng nên viết dạng free function."],
    },
  ],
  "25": [
    {
      id: "ch25-1",
      sectionId: "25",
      type: "code",
      title: "Viết khung game loop",
      prompt:
        "Viết một game loop tối thiểu chạy khi `running == true`, gọi ProcessInput, Update(dt) và Render mỗi frame.",
      code: `bool running = true;
float dt = 0.016f;
// game loop ...`,
      solution: `while (running) {
    ProcessInput();
    Update(dt);
    Render();
}`,
      hints: ["Thứ tự: Input → Update → Render.", "Update nhận deltaTime để độc lập framerate."],
    },
  ],
};

export function challengesFor(sectionId: string): Challenge[] {
  return challenges[sectionId] ?? [];
}

/** Base Compiler Explorer editor. The UI copies the snippet to the clipboard
 *  and opens this so you can paste + run it reliably (no fragile URL encoding). */
export const COMPILER_EXPLORER_URL = "https://godbolt.org/";
