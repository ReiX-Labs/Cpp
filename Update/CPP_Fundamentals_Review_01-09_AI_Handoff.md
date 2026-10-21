---
title: "Sổ tay ôn tập C++ Fundamentals — Bài 01 đến Bài 09"
language: vi-VN
standard: C++17
ide: Visual Studio 2022
updated: 2026-10-21
scope: "Chỉ những nội dung đã được giảng trong lộ trình hiện tại; không đi sâu bài 10 trở đi"
learning_status: "Đã được chấm bài thực hành 01–08 và 06.5; đã học lý thuyết Bài 09, người học báo hoàn thành code nhưng chưa gửi để chấm"
---

# SỔ TAY C++ FUNDAMENTALS — BÀI 01 → BÀI 09

> **Mục tiêu:** Ôn cú pháp C++ từ nền tảng đến `struct`, `enum class`, reference và **pointer cơ bản** để chuẩn bị học C++ trong Unreal Engine. Tài liệu đồng thời là **handoff cho AI gia sư**: AI khác có thể biết chính xác đã học gì, ôn tập đúng mức, và cập nhật những bài tiếp theo khi được yêu cầu.
>
> **Phạm vi:** Nội dung thực sự đã được giảng trong cuộc học C++. **Không** bao gồm bài 10 (heap, `new`, `delete`, smart pointers) hoặc bài 11–12 (class, constructor/destructor, kế thừa) dù các chủ đề ấy đã được nhắc đến như kế hoạch tương lai.

## 0. Cách sử dụng sổ tay

- **Ôn nhanh 10 phút:** Đọc phần **Tra cứu cú pháp nhanh** (mục 1), sau đó làm 3–5 câu trong **Bộ câu hỏi tự kiểm tra** (mục 15).
- **Ôn theo chủ đề:** Dùng mục lục để xem định nghĩa → cú pháp → ví dụ → lỗi dễ mắc.
- **Ôn chủ động:** Che phần giải thích, đoán kết quả một đoạn code, chạy thử trong Visual Studio 2022, rồi đối chiếu.
- **Nhờ AI dạy lại:** Gửi toàn bộ file này và dùng prompt ở **mục 17**. Khi học kiến thức mới, yêu cầu AI **bổ sung phiên bản cập nhật**, không viết đè lịch sử đã học.
- **Mức độ xác nhận:** Các bài 01–08 (bao gồm 06.5) đã được xem/chấm. Bài 09 **đã học lý thuyết và có bài tập**, người học nói đã code xong nhưng **chưa gửi mã nguồn để kiểm tra**.

### Mục lục

1. Tra cứu cú pháp nhanh
2. Môi trường và cấu trúc chương trình (Bài 01)
3. Biến, kiểu dữ liệu, `const`, `constexpr`, `auto`, ép kiểu (Bài 01–02)
4. Toán tử số học, gán, so sánh, logic, bitwise (Bài 03)
5. `if`, `else`, `switch`, toán tử ba ngôi và scope (Bài 04)
6. `for`, `while`, `do-while`, `break`, `continue` (Bài 05)
7. Hàm, tham số, `return`, prototype, overload (Bài 06)
8. Tách `.h` và `.cpp`, compiler/linker (Bài 06.5)
9. C-style arrays, `std::array`, `std::vector`, `std::string` (Bài 07)
10. `struct`, `enum class`, references (Bài 08)
11. Pointers cơ bản (Bài 09)
12. Chương trình ôn tập tích hợp ba file
13. Lỗi thường gặp và nguyên tắc viết code
14. Tóm tắt mini-project và tiến độ
15. Bộ câu hỏi tự kiểm tra + đáp án
16. Kế hoạch ôn tập theo vòng lặp
17. Prompt bàn giao cho AI gia sư
18. Phần để cập nhật sau (chưa học)

---

# 1. TRA CỨU CÚ PHÁP NHANH

## 1.1. Cấu trúc, khai báo, nhập/xuất

| Cú pháp | Ý nghĩa / khi dùng |
|---|---|
| `#include <iostream>` | Dùng khai báo nhập/xuất chuẩn như `std::cout`, `std::cin`. |
| `#include <string>` | Dùng `std::string`. |
| `#include <array>` | Dùng `std::array`. |
| `#include <vector>` | Dùng `std::vector`. |
| `#include "Arena.h"` | Đưa nội dung khai báo từ header của dự án vào translation unit hiện tại. |
| `#pragma once` | Tránh nội dung một header được include lặp trong cùng translation unit. |
| `int main() { ... }` | Hàm bắt đầu của chương trình console C++. |
| `// ghi chú` | Comment một dòng. |
| `/* ghi chú */` | Comment nhiều dòng. |
| `;` | Kết thúc đa số câu lệnh. |
| `{ ... }` | Khối lệnh; thường tạo phạm vi (scope). |
| `std::cout << value;` | Xuất ra console. |
| `std::cin >> variable;` | Nhập dữ liệu vào biến. |
| `std::cout << "\n";` | Xuống dòng. |
| `std::boolalpha` | Xuất `bool` thành `true`/`false` (thay vì `1`/`0`); cài đặt này lưu trên luồng xuất. |
| `std::getline(std::cin, name);` | Đọc cả một dòng văn bản, kể cả dấu cách. |
| `return 0;` | Kết thúc `main` thành công. |

## 1.2. Biến, kiểu, toán tử

| Cú pháp | Ý nghĩa / khi dùng |
|---|---|
| `int hp = 100;` | Số nguyên. |
| `float speed = 5.5f;` | Số thực `float`; hậu tố `f` phân biệt với literal `double`. |
| `double score = 1.25;` | Số thực `double`. |
| `char rank = 'A';` | Một ký tự (nháy đơn). |
| `bool alive = true;` | Giá trị đúng/sai. |
| `std::string name = "Mage";` | Chuỗi (nháy kép). |
| `const int maxHP = 100;` | Không được thay đổi giá trị thông qua biến sau khởi tạo. |
| `constexpr int maxRound = 5;` | Biến hằng phải có giá trị xác định được khi biên dịch. |
| `auto total = hp + 10;` | Compiler suy luận kiểu ở thời điểm biên dịch. |
| `static_cast<float>(hp)` | Ép kiểu tường minh sang `float`. |
| `+ - * / %` | Cộng, trừ, nhân, chia, dư ( `%` cho số nguyên). |
| `+= -= *= /= %=` | Phép toán kết hợp gán. |
| `== != < <= > >=` | So sánh; trả về `bool`. |
| `&& \|\| !` | AND, OR, NOT logic. |
| `++i`, `i++`, `--i`, `i--` | Tăng/giảm 1; tiền tố và hậu tố khác khi giá trị biểu thức được dùng. |
| `& \| ^ ~ << >>` | Bitwise AND/OR/XOR/NOT/dịch trái/dịch phải. |
| `? :` | Toán tử ba ngôi: chọn một trong hai biểu thức. |

## 1.3. Điều khiển luồng, cấu trúc dữ liệu và truy cập

| Cú pháp | Ý nghĩa / khi dùng |
|---|---|
| `if (condition) { ... }` | Chạy khối nếu đúng. |
| `else if (...) { ... } else { ... }` | Phân nhánh điều kiện. |
| `switch (x) { case 1: ...; break; default: ...; }` | Chọn nhánh theo giá trị số nguyên/enum. |
| `for (int i = 0; i < 3; ++i) { ... }` | Vòng lặp với biến đếm. |
| `while (condition) { ... }` | Kiểm tra điều kiện trước mỗi lần lặp. |
| `do { ... } while (condition);` | Thực hiện ít nhất 1 lần; nhớ `;` cuối. |
| `break;` | Thoát vòng lặp hoặc `switch` gần nhất. |
| `continue;` | Bỏ phần còn lại của lượt lặp hiện tại. |
| `int Add(int a, int b) { return a + b; }` | Định nghĩa hàm có giá trị trả về. |
| `void Print() { ... }` | Hàm không trả về giá trị. |
| `int Add(int a, int b);` | Function declaration/prototype. |
| `int arr[3] = {1, 2, 3};` | Mảng C-style cố định. |
| `std::array<int, 3> a{1, 2, 3};` | Mảng cố định kiểu C++ hiện đại. |
| `std::vector<int> v{1, 2};` | Container thay đổi số phần tử. |
| `v.push_back(3);` | Thêm phần tử vào cuối vector. |
| `v.pop_back();` | Xóa phần tử cuối; chỉ gọi khi không rỗng. |
| `v.size()`, `v.empty()`, `v.clear()` | Lấy số phần tử, kiểm tra rỗng, xóa hết. |
| `v[i]`, `v.at(i)` | Truy cập theo chỉ số; `.at()` kiểm tra phạm vi. |
| `for (const auto& x : v) { ... }` | Duyệt các phần tử, không sao chép, không sửa. |
| `struct Player { int hp; };` | Tạo kiểu dữ liệu gộp các thành viên. |
| `enum class State { Idle, Dead };` | Kiểu liệt kê có phạm vi tên. |
| `player.hp` | Truy cập thành viên đối tượng. |
| `Player& p` | Tham chiếu có thể sửa đối tượng. |
| `const Player& p` | Tham chiếu chỉ đọc qua `p`. |
| `int* ptr = &hp;` | Con trỏ lưu địa chỉ của `hp`. |
| `*ptr` | Dereference: truy cập đối tượng được trỏ tới. |
| `nullptr` | Giá trị con trỏ rỗng. |
| `ptr->hp` | Truy cập thành viên đối tượng qua con trỏ. |

---

# 2. MÔI TRƯỜNG VÀ CẤU TRÚC CHƯƠNG TRÌNH — BÀI 01

**Môi trường học:** Visual Studio 2022, project **Console App (C++)**, C++17 trở lên. Nếu thiếu template C++, cài workload **Desktop development with C++**.

- **Ctrl + F5:** Chạy không gắn debugger.
- **Ctrl + Shift + B:** Build solution.
- **Ctrl + Alt + L:** Mở Solution Explorer.
- `main()` là điểm bắt đầu chuẩn trong chương trình console thông thường.
- C++ phân biệt hoa/thường: `Health` khác `health`; `main` khác `Main`.

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, World!\n";
    return 0;
}
```

**Cần nhớ:** `::` là toán tử phạm vi; `std::` dùng truy cập tên trong namespace `std`. `<<` và `>>` được dùng với luồng xuất/nhập; trong ngữ cảnh số nguyên chúng còn có ý nghĩa dịch bit.

**Thư viện và build (đã giới thiệu ngoài lộ trình):** Visual Studio là IDE; compiler (ví dụ MSVC) biên dịch; linker liên kết; CMake tạo cấu hình hệ thống build chứ không phải compiler. Unreal Engine thường dùng **Unreal Build Tool (UBT)** cho project game, không bắt buộc học CMake trước khi bắt đầu Unreal C++.

---

# 3. BIẾN, HẰNG, `auto`, ÉP KIỂU — BÀI 01–02

## 3.1. Các kiểu đã học

```cpp
int health = 100;
float speed = 5.5f;
double accuracy = 0.95;
char rank = 'A';
bool isAlive = true;
std::string playerName = "Knight";
```

- `int`: số nguyên; `float`, `double`: số thực; `char`: một ký tự; `bool`: true/false; `std::string`: chuỗi.
- Khởi tạo trước khi đọc: `int hp = 0;` an toàn hơn `int hp;` nếu có khả năng đọc trước khi gán.
- `std::cin >> name` dừng ở khoảng trắng; `std::getline(std::cin, name)` đọc cả dòng. Nếu trước đó đọc bằng `>>`, lưu ý ký tự xuống dòng còn lại.
- `std::cin` có thể thất bại với kiểu nhập không hợp lệ; xử lý chi tiết đã được nhắc sơ bộ và sẽ luyện thêm theo yêu cầu.

## 3.2. `const` so với `constexpr`

```cpp
const int maxHP = 200;
constexpr int maxRounds = 5;

int userHP = 100;              // Giả sử giá trị được nhập lúc chạy
const int initialHP = userHP; // Hợp lệ
// constexpr int x = userHP;   // Không hợp lệ: userHP không là constant expression
```

- `const`: qua tên biến này không được sửa sau khi khởi tạo; giá trị có thể đến từ runtime.
- `constexpr`: yêu cầu giá trị khởi tạo có thể xác định ở compile-time.
- **Ngoại lệ dễ nhầm:** `const int n = 3;` cũng có thể là constant expression cho kích thước `std::array` trong trường hợp này.
- `constexpr` **không** mặc định nhanh hơn `const`; compiler có thể tối ưu cả hai.

## 3.3. `auto` và ép kiểu

```cpp
auto a = 10;     // int
auto b = 2.5f;   // float
auto c = 2.5;    // double

int hp = 75;
int maxHP = 200;
float wrong = hp / maxHP;                         // 0.0f: đã chia nguyên
float right = static_cast<float>(hp) / maxHP;     // 0.375f
```

- `auto` được compiler suy luận **khi biên dịch**, không phải kiểu động và không tự tiêu tốn runtime vì "đoán kiểu".
- Nên ưu tiên `static_cast<T>(value)` thay vì ép kiểu C-style `(T)value` trong ví dụ cơ bản.
- Đừng quên thứ tự: `float result = a / b` vẫn chia nguyên nếu **cả a và b đều là int**.

---

# 4. TOÁN TỬ — BÀI 03

## 4.1. Số học và gán

```cpp
int a = 10, b = 3;
int sum = a + b;       // 13
int sub = a - b;       // 7
int mul = a * b;       // 30
int div = a / b;       // 3, chia nguyên
int rem = a % b;       // 1, phép chia lấy dư

a += 5;  // tương đương a = a + 5
a -= 2;  // tương đương a = a - 2
a *= 2;  // tương đương a = a * 2
a /= 3;  // tương đương a = a / 3
a %= 4;  // tương đương a = a % 4
```

> Không chia số nguyên cho 0. `%` sử dụng với kiểu số nguyên (với số thực sẽ là phép toán khác, chưa học).

## 4.2. So sánh và logic

```cpp
int hp = 50;
bool alive = hp > 0;               // true
bool full = hp == 100;             // false
bool canFight = alive && hp >= 30; // AND
bool any = alive || full;          // OR
bool dead = !alive;                // NOT
```

- `=` là **gán**, `==` là **so sánh bằng**.
- `!=`, `<`, `<=`, `>`, `>=` lần lượt là khác, nhỏ, nhỏ hoặc bằng, lớn, lớn hoặc bằng.
- `&&` đánh giá vế phải **chỉ khi cần** (vế trái đúng); `||` đánh giá vế phải **chỉ khi cần** (vế trái sai). Đây là **short-circuit**.
- So sánh kết quả tính số thực bằng `==` có thể gặp sai số biểu diễn.

## 4.3. Tiền tố và hậu tố

```cpp
int x = 5;
int a = ++x; // x=6, a=6

int y = 5;
int b = y++; // b=5, y=6
```

- `++i` tăng trước rồi dùng giá trị mới; `i++` cung cấp giá trị cũ cho biểu thức rồi tăng.
- Khi đứng một mình với số nguyên cơ bản, `++i;` và `i++;` đều tăng biến lên 1.
- Tránh biểu thức khó đoán/chứa các lần chỉnh sửa cùng một biến, ví dụ `i++ + ++i`.

## 4.4. Bitwise — mức cơ bản đã học

```cpp
unsigned int a = 5; // nhị phân ...0101
unsigned int b = 3; // nhị phân ...0011

a & b;   // AND = 1
a | b;   // OR  = 7
a ^ b;   // XOR = 6
~a;      // NOT đảo các bit của kiểu số nguyên không dấu
(a << 1); // dịch trái 1 bit
(a >> 1); // dịch phải 1 bit
```

| Ký hiệu | Ý nghĩa |
|---|---|
| `&` | AND từng bit |
| `\|` | OR từng bit |
| `^` | XOR từng bit, **không phải lũy thừa** |
| `~` | Đảo từng bit |
| `<<`, `>>` | Dịch bit trái/phải |
| `&=`, `\|=`, `^=`, `<<=`, `>>=` | Bitwise kết hợp gán |

Ứng dụng đã giới thiệu: **bitmask/flags** (lưu trạng thái nhảy, chạy, bắn).

```cpp
constexpr unsigned int CanJump = 1u << 0;
constexpr unsigned int CanShoot = 1u << 1;
unsigned int abilities = 0;
abilities |= CanJump;                 // bật cờ
abilities |= CanShoot;                // bật cờ
bool canJump = (abilities & CanJump) != 0; // kiểm tra
abilities &= ~CanShoot;               // tắt cờ
abilities ^= CanJump;                 // đảo cờ
```

**Không thay thế toán tử số học thông thường bằng bitwise chỉ để "nhanh hơn"**. Compiler hiện đại thường tối ưu được nhiều phép tính đơn giản; ưu tiên đúng nghĩa và dễ đọc. Ví dụ `x * 2` rõ ràng hơn `x << 1`, đồng thời tránh các vấn đề ngữ nghĩa dịch bit ở nhiều kiểu/giá trị.

## 4.5. Thứ tự ưu tiên (bản tóm tắt)

Từ ưu tiên cao xuống thấp: `()` → `++/--` (tùy dạng) và toán tử một ngôi → `* / %` → `+ -` → `<< >>` → quan hệ `< <= > >=` → bằng `== !=` → bitwise `&`, `^`, `|` → logic `&&`, `||` → gán.

**Quy tắc thực hành:** Dùng ngoặc để tránh biểu thức mơ hồ: `isAlive && (coins >= 30)`.

---

# 5. ĐIỀU KIỆN VÀ SCOPE — BÀI 04

## 5.1. `if` / `else if` / `else`

```cpp
if (health <= 0)
{
    std::cout << "Dead\n";
}
else if (health <= 50)
{
    std::cout << "Critical\n";
}
else
{
    std::cout << "Alive\n";
}
```

- Chuỗi `if/else if/else` chọn **nhánh đúng đầu tiên**.
- Hai lệnh `if` độc lập có thể cùng chạy nếu cả hai điều kiện đều đúng.
- Có thể dùng nested `if`; dùng `&&` nếu gộp điều kiện giúp dễ đọc.

## 5.2. `switch` / `case` / `break` / `default`

```cpp
int potionType = 2;
switch (potionType)
{
    case 0:
        break;
    case 1:
        health += 25;
        break;
    case 2:
        health += 60;
        break;
    default:
        std::cout << "Unknown potion\n";
        break;
}
```

- `switch` dùng được với biểu thức kiểu số nguyên/`enum` thích hợp, không trực tiếp dùng `std::string` hoặc `float`.
- Thiếu `break` có thể **fallthrough** sang `case` tiếp theo; C++17 có `[[fallthrough]];` khi cố ý.
- `default` xử lý các giá trị không thuộc `case` nào.

## 5.3. Toán tử ba ngôi và scope

```cpp
std::string status = (health > 0) ? "Alive" : "Dead";

if (health > 0)
{
    int damage = 20;  // Chỉ có phạm vi trong khối này
    health -= damage;
}
// Không thể dùng biến damage tại đây.
```

- `condition ? whenTrue : whenFalse` phù hợp với lựa chọn giá trị đơn giản.
- Biến cục bộ trong `{}` không truy cập được từ ngoài phạm vi đó.

---

# 6. VÒNG LẶP — BÀI 05

## 6.1. `for`: thường dùng khi biết giới hạn lượt

```cpp
for (int round = 1; round <= 5; ++round)
{
    std::cout << "Round " << round << "\n";
}
```

Các phần trong `for (khởi tạo; điều kiện; cập nhật)` lần lượt: khởi tạo một lần → kiểm tra điều kiện → chạy thân → cập nhật → kiểm tra lại.

## 6.2. `while`: kiểm tra trước

```cpp
int hp = 50;
while (hp < 100)
{
    hp += 10;
}
```

Nếu điều kiện sai ngay lần đầu, thân không chạy. Phải đảm bảo có khả năng kết thúc, tránh vòng vô hạn ngoài ý muốn.

## 6.3. `do-while`: chạy ít nhất một lần

```cpp
int choice = 0;
do
{
    std::cout << "1. Play; 0. Exit: ";
    std::cin >> choice;
} while (choice != 0); // Nhớ dấu ;
```

## 6.4. `break` và `continue`

```cpp
for (int i = 1; i <= 5; ++i)
{
    if (i == 3) continue; // Bỏ qua in số 3
    if (i == 5) break;    // Thoát trước khi in số 5
    std::cout << i << " ";
}
// In: 1 2 4
```

- `break` kết thúc vòng lặp gần nhất (`switch` cũng có `break`).
- `continue` kết thúc lượt lặp hiện tại, không phải cả vòng lặp.
- Trong `for`, `continue` vẫn chuyển sang bước cập nhật biến đếm.
- Nếu lồng nhiều vòng lặp, `break` chỉ thoát vòng gần nhất.

---

# 7. FUNCTIONS — BÀI 06

## 7.1. Định nghĩa hàm, gọi hàm, `void`, `return`

```cpp
int Add(int a, int b)    // Hàm trả về int, hai tham số int
{
    return a + b;
}

void ShowHP(int hp)      // Hàm không trả về giá trị
{
    std::cout << hp << "\n";
}

int result = Add(10, 20); // Gọi hàm với 2 đối số
```

- **Parameter**: biến trong khai báo/định nghĩa hàm (`a`, `b`).
- **Argument**: giá trị thực tế truyền khi gọi (`10`, `20`).
- Hàm `void` có thể dùng `return;` để thoát sớm; không `return` giá trị.
- Truyền kiểu `int` theo giá trị tạo bản sao; thay đổi trong hàm không làm thay đổi biến gốc.

## 7.2. Declaration / definition

```cpp
int CalculateDamage(int attack, int defense); // Khai báo (prototype)

int main()
{
    return CalculateDamage(10, 3);
}

int CalculateDamage(int attack, int defense)  // Định nghĩa
{
    return attack - defense;
}
```

Hàm phải có khai báo được thấy trước khi gọi (trong tình huống thông thường). Có thể khai báo trên `main()` và định nghĩa dưới `main()` hoặc tách header/source.

## 7.3. Function overloading

```cpp
int Add(int a, int b) { return a + b; }
float Add(float a, float b) { return a + b; }
```

Cùng tên hàm nhưng danh sách tham số khác nhau có thể hợp lệ. **Không overload chỉ bằng kiểu trả về**.

## 7.4. Tách trách nhiệm của hàm

- `ApplyDamage(...)`: chỉ xử lý sát thương và trả về/cập nhật HP.
- `IsAlive(...)`: trả về `bool` dựa trên HP.
- `PrintResult(...)`: chỉ hiển thị kết quả.
- Tránh làm hàm tính toán bắt buộc in console; sau này kết quả có thể dùng cho UI trong Unreal Engine.

---

# 8. HEADER / SOURCE / BUILD — BÀI 06.5

## 8.1. Tổ chức 3 file

```text
TrainingArena/
├── Main.cpp     # entry point và điều phối chương trình
├── Arena.h      # khai báo cấu trúc và hàm dùng chung
└── Arena.cpp    # định nghĩa/triển khai các hàm
```

**Arena.h**

```cpp
#pragma once

int ApplyDamage(int health, int damage);
bool IsAlive(int health);
```

**Arena.cpp**

```cpp
#include "Arena.h"

int ApplyDamage(int health, int damage)
{
    if (damage < 0) return health;
    health -= damage;
    if (health < 0) health = 0;
    return health;
}

bool IsAlive(int health)
{
    return health > 0;
}
```

**Main.cpp**

```cpp
#include <iostream>
#include "Arena.h"

int main()
{
    int hp = ApplyDamage(100, 25);
    std::cout << std::boolalpha << IsAlive(hp) << "\n";
    return 0;
}
```

## 8.2. Nguyên lý biên dịch và lỗi cơ bản

1. **Preprocessor** xử lý các `#include` và chỉ thị tiền xử lý.
2. **Compiler** biên dịch từng translation unit (thường từ từng `.cpp` đã preprocess) thành object file, ví dụ `.obj` ở Windows.
3. **Linker** liên kết object files/thư viện thành `.exe`.

- Header giúp chia sẻ **khai báo**, không thay thế việc thêm `.cpp` vào build.
- Mỗi `.cpp` phải tự include những header mà nó trực tiếp cần; `Main.cpp` include `<iostream>` không tự làm `<iostream>` xuất hiện trong `Arena.cpp`.
- Không `#include` trực tiếp `.cpp` vào `Main.cpp`.
- `#pragma once` ngăn include lặp trong cùng translation unit, **không** bảo đảm chống mọi lỗi định nghĩa trùng ở nhiều `.cpp`.

| Thông báo phổ biến (MSVC) | Ý nghĩa thường gặp |
|---|---|
| `C3861` | Tên hàm không được nhận diện, có thể thiếu khai báo/include. |
| `LNK2019` | Linker không tìm thấy định nghĩa cần thiết; có thể quên thêm `.cpp` vào build hoặc sai chữ ký. |
| `LNK2005` | Một symbol được định nghĩa nhiều lần. |
| `C2084` | Hàm có định nghĩa lặp trong cùng đơn vị biên dịch. |

**Visual Studio 2022:** Chuột phải **Header Files** → **Add → New Item → Header File (.h)**; tương tự **Source Files** → **C++ File (.cpp)**. Hai mục `Header Files`/`Source Files` có thể chỉ là *filters* trong Solution Explorer, không phải thư mục vật lý trên ổ đĩa.

---

# 9. ARRAYS, VECTOR, STRING — BÀI 07

## 9.1. C-style array và `std::array`

```cpp
int hpRaw[3] = {100, 80, 60};
std::array<int, 3> hp{100, 80, 60};

std::cout << hp[0];         // 100: chỉ số bắt đầu từ 0
std::cout << hp.size();    // 3
```

- Chỉ số hợp lệ cho 3 phần tử: `0`, `1`, `2`. Truy cập `hp[3]` không hợp lệ.
- `std::array<int, 3> a{1, 2, 3};` là cú pháp hợp lệ trong C++17; dạng `{{1, 2, 3}}` cũng hợp lệ. **Không bắt buộc luôn dùng hai cặp ngoặc nhọn.**
- Với `std::array` có thể dùng `.at(index)` để kiểm tra giới hạn (truy cập sai sẽ ném ngoại lệ).

## 9.2. `std::vector`

```cpp
std::vector<int> inventory{10, 20};
inventory.push_back(30);   // 3 phần tử
inventory.pop_back();      // về 2 phần tử
bool empty = inventory.empty();
auto count = inventory.size();
// inventory.clear();       // xóa hết
```

| Phương thức | Ý nghĩa |
|---|---|
| `.push_back(x)` | Thêm `x` vào cuối. |
| `.pop_back()` | Bỏ phần tử cuối, chỉ khi vector không rỗng. |
| `.size()` | Số phần tử, kiểu trả về unsigned (`size_type`, thường là `std::size_t`). |
| `.empty()` | Có rỗng hay không. |
| `.clear()` | Xóa toàn bộ phần tử. |
| `[i]` | Truy cập không kiểm tra phạm vi. |
| `.at(i)` | Truy cập có kiểm tra phạm vi. |

Duyệt theo index:

```cpp
for (std::size_t i = 0; i < inventory.size(); ++i)
{
    std::cout << inventory[i] << "\n";
}
```

Duyệt theo phần tử:

```cpp
for (int item : inventory)           // Mỗi lần lấy bản sao int
{
    std::cout << item << "\n";
}
```

> `for (int i = 0; i < inventory.size(); ++i)` có thể báo cảnh báo so sánh **signed/unsigned**. Với ví dụ container này, dùng `std::size_t` cho biến index là phù hợp. `range-based for` không mặc định tốn thêm bộ nhớ đáng kể; hiệu năng phụ thuộc kiểu duyệt (giá trị/reference), dữ liệu và compiler.

## 9.3. `std::string`

```cpp
std::string name = "Mario";
name += " Bros";         // nối chuỗi
name.size();             // số phần tử ký tự theo đơn vị char
name.length();           // tương tự size()
name.empty();            // kiểm tra rỗng
name[0];                 // ký tự đầu 'M'
name.find("Bros");      // tìm vị trí chuỗi con
name.substr(0, 5);      // lấy "Mario"
```

`std::cin >> name` thường chỉ đọc một từ; `std::getline(std::cin, name)` đọc cả dòng. Cần xử lý dấu xuống dòng còn trong buffer nếu dùng `getline` ngay sau phép nhập `>>`.

---

# 10. `struct`, `enum class`, REFERENCE — BÀI 08

## 10.1. Struct gom dữ liệu nhân vật

```cpp
#include <string>

enum class CharacterClass
{
    Knight,
    Mage,
    Archer
};

struct Player
{
    std::string name;
    CharacterClass role;
    int health;
    int maxHP;
};

Player mage{"Mage", CharacterClass::Mage, 80, 80};
std::cout << mage.health;   // dùng . truy cập thành viên
```

- `struct` tạo kiểu mới có các thành viên; `Player` chứa nhiều thông tin liên quan, tránh phải đồng bộ mảng tên và HP riêng.
- `enum class` tạo một kiểu liệt kê có phạm vi: `CharacterClass::Mage`, phù hợp cho trạng thái/loại đối tượng game.
- `switch (player.role)` có thể dùng với enum; mỗi nhánh `case CharacterClass::...`.

## 10.2. Pass by Value / Reference / Const Reference

```cpp
void DamageCopy(Player player, int damage)
{
    player.health -= damage;  // Sửa bản sao, không sửa gốc
}

void ApplyDamage(Player& player, int damage)
{
    if (damage < 0) return;
    player.health -= damage;
    if (player.health < 0) player.health = 0;
}

bool IsAlive(const Player& player)
{
    return player.health > 0;
}
```

| Dạng tham số | Hành vi |
|---|---|
| `Player player` | Tạo bản sao đối tượng; thay đổi không ảnh hưởng gốc. |
| `Player& player` | Tham chiếu tới gốc; được phép thay đổi đối tượng. |
| `const Player& player` | Tham chiếu gốc nhưng không sửa qua tên này; tránh copy khi chỉ đọc. |

- Reference `int& ref = hp;` là tên tham chiếu tới đối tượng đã tồn tại.
- Reference bình thường phải được khởi tạo và không thể "trỏ lại" đến đối tượng khác.
- `ref = anotherValue;` **gán vào đối tượng được tham chiếu**, không đổi đối tượng tham chiếu.
- Với range-based for:

```cpp
for (Player& p : players)           // dùng khi muốn sửa từng Player
{
    ApplyDamage(p, 10);
}

for (const Player& p : players)     // dùng khi chỉ đọc
{
    std::cout << p.name << "\n";
}
```

> Khi `players` là container chứa nhiều `Player`, `for (Player p : players)` tạo bản sao mỗi lần lặp. Cách này có thể tốn chi phí hơn `Player&`/`const Player&` và thay đổi trên bản sao sẽ không làm thay đổi phần tử gốc.

---

# 11. POINTERS CƠ BẢN — BÀI 09

**Trạng thái:** Đã giảng lý thuyết và giao bài. Người học nói hoàn thành code bài 09 nhưng **chưa nộp để chấm**, vì muốn tạo tài liệu ôn trước.

## 11.1. Biến, địa chỉ và dereference

```cpp
int health = 100;
int* ptr = &health;

std::cout << health << "\n";   // giá trị: 100
std::cout << &health << "\n";  // địa chỉ của health
std::cout << ptr << "\n";      // địa chỉ mà ptr đang lưu
std::cout << *ptr << "\n";     // 100: đọc giá trị tại địa chỉ đó

*ptr = 50;                      // thay đổi health thành 50
```

- `int* ptr`: **khai báo** biến con trỏ tới `int`.
- `&health`: toán tử **address-of**, lấy địa chỉ của biến.
- `ptr`: giá trị con trỏ (thường là địa chỉ đối tượng được trỏ).
- `*ptr`: toán tử **dereference**, truy cập đối tượng con trỏ trỏ tới.
- Dấu `*` có nghĩa khác nhau tùy vị trí: trong **khai báo kiểu** và trong **biểu thức dereference**.
- Dấu `&` có nghĩa khác nhau trong **khai báo reference** (`int& ref`) và **lấy địa chỉ** (`&health`).

## 11.2. Pointer so với Reference

```cpp
int a = 10;
int b = 20;

int& ref = a;      // ref tham chiếu a
ref = b;           // a trở thành 20; ref VẪN tham chiếu a

int* ptr = &a;     // ptr trỏ tới a
ptr = &b;          // nay ptr trỏ tới b
```

- Pointer có thể đổi địa chỉ đang trỏ tới; reference đã khởi tạo không đổi đối tượng được tham chiếu.
- Pointer có thể là `nullptr`; reference hợp lệ thông thường phải tham chiếu một đối tượng.
- Truyền pointer không có nghĩa chương trình tự cấp phát bộ nhớ.

## 11.3. `nullptr` và kiểm tra an toàn

```cpp
int* ptr = nullptr;

if (ptr != nullptr)
{
    std::cout << *ptr << "\n";
}
```

- **Không dereference `nullptr`**: hành vi không xác định, có thể crash.
- Con trỏ có thể không còn hợp lệ nếu đối tượng bị hủy; khái niệm này mới chỉ được giới thiệu sơ bộ, sẽ học kỹ ở bài sau.
- Con trỏ chưa khởi tạo có thể chứa giá trị không xác định. Nên khởi tạo `nullptr` hoặc một địa chỉ đối tượng hợp lệ.

## 11.4. `->` khi con trỏ trỏ đến `struct`

```cpp
Player knight{"Knight", CharacterClass::Knight, 100, 100};
Player* target = &knight;

std::cout << target->health;   // tương đương (*target).health
std::cout << knight.health;    // truy cập trực tiếp bằng dấu .
```

- `.` dùng với đối tượng; `->` dùng với con trỏ tới đối tượng.
- `(*target).health` cần ngoặc vì thứ tự ưu tiên; viết `target->health` dễ đọc hơn.

## 11.5. Bài tập đã giao (chưa được chấm)

Chuyển bài Party Management thành **Pointer-Based Healing System**:

```cpp
void HealPlayer(Player* player, int amount);
```

Yêu cầu đã giao:
1. Nếu `player == nullptr`, thoát hàm an toàn.
2. Nếu `amount <= 0`, không hồi máu.
3. Dùng `player->health` và `player->maxHP`.
4. Không để HP vượt `maxHP`.
5. Trong `main()`, tạo `Player* target` trỏ đến Mage và hồi 30 HP.
6. Thử `HealPlayer(nullptr, 30)` để đảm bảo không crash.
7. Đổi `target` sang Knight và thử hồi máu.

**Không xác nhận hoàn thành bài 09 cho đến khi xem code người học.**

---

# 12. CHƯƠNG TRÌNH ÔN TẬP TÍCH HỢP (ĐÚNG PHẠM VI ĐÃ HỌC)

Ví dụ nhỏ sau đây chỉ dùng các chủ đề đã giảng: header/source, `struct`, `enum class`, `std::array`, reference, pointer, kiểm tra `nullptr`, vòng lặp, hàm, toán tử, I/O. Có thể chép vào một project Console App với **3 file** và build bằng C++17.

**Arena.h**

```cpp
#pragma once
#include <string>

enum class CharacterClass
{
    Knight,
    Mage,
    Archer
};

struct Player
{
    std::string name;
    CharacterClass role;
    int health;
    int maxHP;
};

void ApplyDamage(Player& player, int damage);
void HealPlayer(Player* player, int amount);
bool IsAlive(const Player& player);
void PrintPlayer(const Player& player);
```

**Arena.cpp**

```cpp
#include "Arena.h"
#include <iostream>

void ApplyDamage(Player& player, int damage)
{
    if (damage <= 0) return;
    player.health -= damage;
    if (player.health < 0) player.health = 0;
}

void HealPlayer(Player* player, int amount)
{
    if (player == nullptr || amount <= 0) return;
    // Giả định HP ban đầu nằm trong [0, maxHP], maxHP không âm.
    // Kiểm tra trước khi cộng để tránh vượt giới hạn HP.
    if (amount >= player->maxHP - player->health)
    {
        player->health = player->maxHP;
    }
    else
    {
        player->health += amount;
    }
}

bool IsAlive(const Player& player)
{
    return player.health > 0;
}

void PrintPlayer(const Player& player)
{
    std::cout << player.name << ": "
              << player.health << "/" << player.maxHP << " HP\n";
}
```

**Main.cpp**

```cpp
#include <array>
#include <iostream>
#include "Arena.h"

int main()
{
    std::array<Player, 3> players{{
        {"Knight", CharacterClass::Knight, 100, 100},
        {"Mage", CharacterClass::Mage, 80, 80},
        {"Archer", CharacterClass::Archer, 60, 60}
    }};

    for (Player& player : players)
    {
        ApplyDamage(player, 20);
    }

    Player* target = &players[1];
    HealPlayer(target, 10);       // Hồi 10 HP cho Mage
    HealPlayer(nullptr, 30);     // Không crash

    int aliveCount = 0;
    for (const Player& player : players)
    {
        PrintPlayer(player);
        if (IsAlive(player)) ++aliveCount;
    }

    std::cout << "Survivors: " << aliveCount << "\n";
    return 0;
}
```

Kết quả mong đợi:

```text
Knight: 80/100 HP
Mage: 70/80 HP
Archer: 40/60 HP
Survivors: 3
```

**Bài tự kiểm tra:** Giải thích tại sao `ApplyDamage` nhận `Player&`, `HealPlayer` nhận `Player*`, và `PrintPlayer` nhận `const Player&`. Có thể thay đổi `target = &players[0]` rồi dự đoán kết quả trước khi chạy.

---

# 13. LỖI THƯỜNG GẶP VÀ NGUYÊN TẮC VIẾT CODE

| Lỗi / rủi ro | Cách nhận diện và sửa |
|---|---|
| Nhầm `=` và `==` | `=` gán, `==` so sánh. |
| Chia nguyên rồi gán `float` | Ép ít nhất một toán hạng trước khi chia: `static_cast<float>(a) / b`. |
| Dùng biến chưa khởi tạo | Khởi tạo: `int hp = 0;`; kiểm tra `std::cin` nếu cần. |
| `health != 0` coi HP âm là sống | Kiểm tra `health > 0` cho trạng thái sống. |
| In HP trước khi giới hạn về 0 | Cập nhật/sửa dữ liệu trước, sau đó hiển thị. |
| Kiểm tra `nullptr` sau khi `*ptr` | Kiểm tra pointer trước mọi lần dereference có thể rỗng. |
| `ptr->hp` trong khi `ptr == nullptr` | Không được truy cập thành viên khi pointer không hợp lệ. |
| Tạo bản sao `Player` khi muốn sửa gốc | Dùng `Player&` thay vì `Player` trong hàm / range-based for. |
| `for (int i=0; i<v.size(); ++i)` warning | Cân nhắc `std::size_t i = 0` hoặc range-based for. |
| Dùng `[]` với chỉ số sai | Truy cập ngoài phạm vi là lỗi; `.at()` kiểm tra giới hạn. |
| Thiếu `break` trong `switch` | Các nhánh dưới có thể chạy tiếp. |
| Lặp nhưng không thay đổi điều kiện | Có thể thành vòng vô hạn. |
| Hàm vừa tính toán vừa in console khi không cần | Tách tính toán và hiển thị để dễ tái sử dụng. |
| Header thiếu `<string>` dù khai báo `std::string` | Header nên tự include những dependency mà nó trực tiếp dùng. |
| Quên thêm `Arena.cpp` vào build | Có thể bị linker báo không tìm thấy định nghĩa (`LNK2019`). |
| Định nghĩa cùng hàm không-inline trong nhiều `.cpp` | Có thể bị lỗi multiple definition / `LNK2005`. |
| Lạm dụng bitwise để "tối ưu" | Ưu tiên đúng ý nghĩa, dễ đọc; tối ưu sau khi đo đạc. |
| Sợ `auto` tốn runtime do "đoán kiểu" | Kiểu được suy luận tại compile-time; không phải cơ chế runtime. |

**Style đã được khuyến nghị:**

- Dùng tên biến nhất quán, ví dụ `camelCase`: `startHP`, `maxRounds`, `collectedCoins`.
- Tránh đặt tên đánh lừa: `initialHP` không nên là biến liên tục thay đổi trong trận đấu nếu có thể gọi `health`.
- Dùng `{}` cho khối `if`, `for`, `while` để dễ đọc và giảm lỗi khi bổ sung dòng.
- Tránh đặt nhiều câu lệnh trên cùng một dòng khi không cần thiết.
- Chọn tên hàm nói đúng nhiệm vụ: `ApplyDamage`, `IsAlive`, `PrintPlayer`.
- Khi chỉ đọc đối tượng tương đối lớn, ưu tiên `const T&`; khi cần sửa gốc, dùng `T&` (hoặc pointer khi ý nghĩa cho phép rỗng/đổi đối tượng).

---

# 14. MINI-PROJECT ĐÃ HỌC VÀ TIẾN ĐỘ

| Bài | Đề bài / nội dung chính | Trạng thái trong cuộc học |
|---|---|---|
| 01 | Player Information: nhập tên, HP, speed, phần trăm HP | Đã chấm (9.5/10) |
| 02 | Damage System: `constexpr`, `auto`, ép kiểu | Đã chấm (10/10) |
| 03 | Player Combat System: toán tử, coins, cờ trạng thái | Đã chấm (9/10) |
| 04 | Combat & Potion System: `if`, `switch`, `?:` | Đã chấm (9.5/10) |
| 05 | Training Arena 5 lượt: vòng lặp, `break`, `continue`, chơi lại | Đã chấm (9/10) |
| 06 | Refactor Training Arena thành các hàm | Đã chấm (9/10) |
| 06.5 | Chia `Main.cpp`, `Arena.h`, `Arena.cpp` | Đã chấm (9.5/10) |
| 07 | Party Management: `array`, `vector`, `string` | Đã chấm (9.5/10) |
| 08 | Character Data System: `struct`, `enum class`, `Player&`, `const Player&` | Đã chấm (9.5/10) |
| 09 | Pointer-Based Healing System: `Player*`, `nullptr`, `->` | Đã học/giao bài; người học báo code xong, **chưa gửi để chấm** |

**Nhận định tiến độ:** Đã nắm và thực hành phần lớn cú pháp nền tảng. Những điểm giáo viên từng nhắc cải thiện gồm: thứ tự xử lý HP trước khi in, đặt tên và tổ chức hàm, sử dụng constant thay vì hard-code, không copy `Player` khi chỉ cần tham chiếu, và signed/unsigned trong vòng `for`.

---

# 15. BỘ CÂU HỎI TỰ KIỂM TRA

> **Cách học:** Trả lời mà không nhìn lại tài liệu; chỉ kiểm tra đáp án sau khi hoàn thành. Nếu sai, viết chương trình console tối thiểu để kiểm chứng.

### Nhóm A — Cú pháp và toán tử

1. Phân biệt `std::cout << x` và `std::cin >> x`.
2. `float x = 7 / 2;` cho giá trị bao nhiêu? Vì sao?
3. `const` khác `constexpr` ở điểm nào? `const int n = 3` có dùng làm kích thước `std::array<int, n>` không?
4. `auto x = 5.5f;` suy luận kiểu nào? Có làm tăng chi phí runtime vì phải đoán không?
5. `int a = 5; int b = a++;` — sau đó `a`, `b` bằng bao nhiêu?
6. `5 ^ 3` trong C++ bằng bao nhiêu? Toán tử `^` có phải phép lũy thừa không?
7. `isAlive && isGrounded` khác `isAlive & isGrounded` ở điểm nào?

### Nhóm B — Điều kiện, vòng lặp, hàm

8. Thiếu `break` trong `switch` có thể gây ra điều gì?
9. Khác biệt chính giữa `while` và `do-while`?
10. `continue` trong `for` có bỏ qua bước cập nhật biến đếm không?
11. Vì sao `void ApplyDamage(int hp)` không thay đổi biến `hp` ở `main` nếu truyền theo giá trị?
12. Function declaration khác function definition ra sao?
13. Có thể overload hai hàm nếu chỉ khác kiểu trả về không?

### Nhóm C — Header / Containers / Struct / Pointer

14. `#pragma once` giải quyết loại vấn đề nào? Có ngăn lỗi định nghĩa trùng ở hai `.cpp` không?
15. `LNK2019` thường liên quan compiler hay linker? Nêu một nguyên nhân.
16. Với `std::array<int, 3> a{1,2,3}`, các chỉ số hợp lệ là gì?
17. Khác biệt giữa `std::array` và `std::vector`?
18. Vì sao `for (const Player& p : players)` thường tốt hơn `for (Player p : players)` nếu chỉ in tên?
19. `Player& p` và `Player* p` có giống nhau không? Nêu hai khác biệt.
20. `int hp = 100; int* p = &hp; *p = 50;` — `hp` bằng bao nhiêu?
21. Với `Player* p`, cú pháp lấy HP là `p.hp` hay `p->health`?
22. Điều gì xảy ra nếu dereference con trỏ `nullptr`?
23. Trong `int& ref = a; ref = b;`, reference có chuyển sang tham chiếu `b` không?

<details>
<summary>Đáp án gợi ý — chỉ mở sau khi làm</summary>

1. `cout <<` xuất; `cin >>` nhập.
2. `3.0f` (chia nguyên `7/2 = 3`, rồi chuyển thành float).
3. `const` ngăn sửa qua biến và có thể nhận giá trị runtime; `constexpr` yêu cầu compile-time; **có**, `const int n = 3` là constant expression phù hợp.
4. `float`; `auto` suy luận lúc biên dịch, không mặc định tạo overhead runtime.
5. `a=6`, `b=5`.
6. `6`; `^` là XOR.
7. `&&` logic có short-circuit; `&` bitwise (kể cả khi dùng trên bool thì không short-circuit).
8. Fallthrough chạy tiếp case kế dưới.
9. `while` kiểm tra trước; `do-while` chạy ít nhất một lần.
10. Không; `for` vẫn qua bước update.
11. Hàm nhận bản sao tham số `int`.
12. Declaration công bố chữ ký; definition chứa thân hàm.
13. Không.
14. Tránh include cùng header lặp trong một translation unit; không ngăn toàn bộ multiple definitions ở nhiều `.cpp`.
15. Linker; ví dụ quên đưa `Arena.cpp` vào project/build.
16. `0, 1, 2`.
17. `std::array` có kích thước cố định; `std::vector` thay đổi số phần tử.
18. `const Player&` không sao chép toàn bộ `Player`, thể hiện chỉ đọc.
19. Pointer có thể `nullptr` và đổi đối tượng được trỏ; reference hợp lệ thông thường không null và không rebind.
20. `50`.
21. `p->health` (với pointer hợp lệ).
22. Hành vi không xác định, có thể crash.
23. Không; phép gán thay đổi giá trị đối tượng `a`.

</details>

---

# 16. CHU TRÌNH ÔN TẬP GỢI Ý

**Một lượt ôn 20 phút** (không cần làm lại toàn bộ project):

1. **5 phút:** Đọc mục cú pháp của một bài và giải thích bằng lời từng lệnh.
2. **8 phút:** Tự viết một chương trình không nhìn đáp án (ví dụ nhập HP, xử lý damage, in trạng thái).
3. **4 phút:** Đoán output của đoạn code, sau đó chạy VS2022 kiểm chứng.
4. **3 phút:** Viết lại ngắn gọn 2–3 lỗi từng gặp và cách tránh.

**Lịch ôn theo chủ đề (đề xuất, không phải tiến độ đã hoàn thành):**

- Phiên A: Bài 01–03 — nhập/xuất, kiểu dữ liệu, ép kiểu, toán tử.
- Phiên B: Bài 04–05 — điều kiện, vòng lặp và flow control.
- Phiên C: Bài 06–06.5 — hàm, header/source, compiler/linker.
- Phiên D: Bài 07–08 — `array`, `vector`, `string`, `struct`, `enum`, reference.
- Phiên E: Bài 09 — pointer, `nullptr`, dereference và `->`.

**Điều kiện tự đánh giá "đã nhớ":** Không nhìn tài liệu mà viết được ví dụ, đọc hiểu từng dòng và giải thích được *vì sao* chọn kiểu tham số/kiểu dữ liệu đó.

---

# 17. AI HANDOFF — HƯỚNG DẪN CHO AI GIA SƯ TIẾP THEO

## 17.1. Hồ sơ học tập có thể bàn giao

- **Người học:** Đang ôn C++ vì quên cú pháp; mục tiêu sử dụng C++ trong **Unreal Engine**, hướng đến khả năng làm việc ở mức Junior.
- **IDE:** Visual Studio 2022, Console App C++, chuẩn C++17 trở lên.
- **Phong cách học mong muốn:** Dạy theo từng bài; giải thích ý nghĩa cú pháp; gắn với ví dụ game; cho bài thực hành; người học gửi `.cpp` / `.h` để chấm; chỉ chuyển bài khi đã hiểu. Không giảng tràn sang nâng cao khi chưa được yêu cầu.
- **Kiến thức đã giảng:** Bài 01–09 và bổ sung 06.5 như mô tả trong sổ tay. Phạm vi pointer mới gồm `&`, `*`, `int*`, `nullptr`, `->`, so sánh pointer/reference.
- **Tiến độ xác minh:** Bài 01–08 và 06.5 đã được chấm. Bài 09 mới có **thông báo người học viết xong**, chưa có mã để chấm.
- **Mục tiêu lộ trình đã thống nhất:** Sau nền tảng đến con trỏ/class, chuyển sang Unreal C++ và bổ sung phần C++ nâng cao theo yêu cầu thực tế; không cần học hết C++ nâng cao trước khi bắt đầu Unreal.
- **Cần tránh:** Tuyên bố người học đã thành thạo class, dynamic allocation, smart pointers, templates nâng cao hoặc Unreal API; các phần ấy chưa học trong lộ trình này.

## 17.2. Prompt mẫu gửi AI kèm file Markdown

> Bạn là AI gia sư C++ của tôi. Hãy đọc file Markdown đính kèm như **nguồn sự thật về kiến thức đã học**. Tôi dùng Visual Studio 2022, học lại C++ từ căn bản để sau đó viết gameplay trong Unreal Engine. Hãy:
>
> 1. Chỉ sử dụng kiến thức **đã học** trong file khi ra bài ôn (trừ khi tôi yêu cầu giải thích nội dung mới).
> 2. Hỏi từng câu hoặc cho từng mini-project gắn với game; đợi tôi trả lời/gửi code rồi mới đánh giá, không tự đưa toàn bộ lời giải ngay.
> 3. Khi chấm bài, phân biệt lỗi biên dịch, lỗi logic, trường hợp biên, chất lượng code và các tối ưu chỉ mang tính gợi ý. Nếu có thể, biên dịch với C++17 và bật cảnh báo compiler.
> 4. Nhắc lại **cú pháp chính xác, ý nghĩa, vì sao dùng**, kèm ví dụ ngắn. Nếu tôi mắc lỗi cũ, tham chiếu đúng mục trong sổ tay.
> 5. Cập nhật trạng thái bài học **chỉ sau khi tôi gửi code hoặc xác nhận đã học**. Không tự đánh dấu Bài 09 là đã chấm.
> 6. Nếu tôi yêu cầu "cập nhật sổ tay", hãy bổ sung phần mới có phiên bản/ngày cập nhật, **giữ các phần cũ**, tránh mở rộng ngoài yêu cầu.

## 17.3. Quy tắc cập nhật tài liệu

Khi có bài mới, AI nên:

1. Sửa `updated`, `scope`, `learning_status` ở đầu file.
2. Thêm bài mới vào mục lục.
3. Tạo phần mới theo khung **Khái niệm → Cú pháp và ý nghĩa → Ví dụ chạy được → Lỗi thường gặp → Bài tập → Tự kiểm tra**.
4. Cập nhật **Tra cứu cú pháp nhanh** và bảng tiến độ, đánh dấu rõ **đã học lý thuyết / đã giao bài / đã chấm code**.
5. Không thay đổi nhận xét/điểm các bài cũ nếu không có thông tin mới.
6. Không giới thiệu trước nội dung tương lai như thể người học đã học.

---

# 18. CHƯA HỌC — CHỈ DÙNG ĐỂ THEO DÕI TIẾN ĐỘ

**Không đưa vào bài ôn hiện tại, trừ khi người học yêu cầu bắt đầu bài tiếp theo:**

- **Bài 10:** Vòng đời đối tượng, stack/heap, cấp phát động `new`/`delete`, lỗi quản lý bộ nhớ, smart pointers (mới chỉ nhắc tên; chưa được giảng).
- **Bài 11:** `class`, access specifiers, object, constructor, destructor, đóng gói.
- **Bài 12:** `this`, kế thừa và một số nội dung OOP căn bản.
- **Giai đoạn Unreal C++:** `AActor`, `UObject`, `UCLASS`, `UPROPERTY`, `UFUNCTION`, vòng đời Actor, kết hợp Blueprint/C++; chỉ là mục tiêu tương lai.
- **Nâng cao theo nhu cầu:** template nâng cao, multithreading, performance profiling và những chủ đề khác khi dự án đòi hỏi.

---

*Tài liệu tổng hợp vào ngày 21/10/2026 từ các bài đã dạy và mã thực hành đã nộp trong cuộc học. Nếu muốn ôn kiến thức, ưu tiên dùng sổ tay này trước khi mở rộng phạm vi.*
