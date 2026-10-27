# GIÁO TRÌNH C++ CHUẨN — NGUỒN HỢP NHẤT

**Mã tài liệu:** `cpp-curriculum` · **Phiên bản:** `2.0.0` · **Cập nhật:** 27/10/2026  
**Môi trường:** Visual Studio 2022 / MSVC, Console App, Standard C++17.  
**Phạm vi hiện có:** Standard C++ từ Bài 01 đến Final Assessment 17.2, gồm 06.5, 14.5, hai buổi 12.1–12.2; chương 16 gom hai buổi 16.1–16.2, phần 17 hướng dẫn công cụ trước thực hành 17.1.  
**Trạng thái:** Đã hợp nhất Completion Pack 27/10/2026 thành giáo trình dùng cho lần cập nhật web này. Phạm vi hoàn chỉnh là khóa nền tảng được cung cấp, không phải toàn bộ ngôn ngữ/thư viện C++.

**Dùng file `Update/CPP_GIAO_TRINH_CHUAN.md` làm bản làm việc chính.** Khi nhận file update, hợp nhất vào đây, cập nhật phiên bản và nhật ký ở cuối; không tạo thêm một giáo trình song song. Completion Pack là nguồn đầu vào được giữ nguyên để truy vết. Năm tài liệu nguồn/báo cáo cũ nằm trong `Archive/Update_2026-10-26.zip`; handoff 01–09 phục vụ tương thích thư viện cũ.

Tài liệu này chứa lý thuyết, ví dụ, bảng cú pháp, bài ôn, lịch sử có nguồn và quy ước cập nhật. Không cần mở các bản handoff cũ để học nội dung đã hợp nhất. Thư viện C++ nâng cao/Unreal vẫn là tham khảo riêng, không tự thuộc phạm vi đã học của khóa nền tảng.

## Cách đọc và dùng ví dụ

- Học theo **mục tiêu → kiến thức trước đó → lý thuyết → ví dụ → tự viết và kiểm tra**. Bảng tra cứu chỉ giúp nhớ lại; không thay phần giải thích.
- Code có nhãn `// example: ...; file: ...` là bộ ví dụ hoàn chỉnh: tạo các file cùng mã example trong **một project riêng**. Không ghép tất cả ví dụ, nhiều main, hoặc các phiên bản Player/Animal vào cùng một project.
- Code còn lại là **đoạn minh họa**; nó có thể cần biến, kiểu, include hoặc hàm đã giải thích trong bài. Code cố ý lỗi được ghi rõ; không chạy UB để suy kết quả.
- `Player` dạng struct ở 08–09/Arena và `Player` dạng class ở 11 là hai giai đoạn thiết kế, không phải hai khai báo để đặt chung một file.
- Trạng thái “đã học/có bài nộp” được ghi theo tài liệu người học cung cấp. Việc bổ sung lý thuyết, ví dụ hoặc câu hỏi không tự chứng minh đã luyện/chấm đạt và không cấp XP trên web.
- Các phần **bổ sung biên tập** (phục hồi nhập/EOF, size/capacity/invalidation, hợp đồng HP/clamp) làm rõ cách dùng an toàn; chưa có bằng chứng riêng rằng người học đã thực hành chúng. Có thể ôn lần lượt, không coi là đã thành thạo.
- Các link nội bộ dùng anchor ổn định như `cpp-06-5` và `cpp-12-2`; tiêu đề bài có thể đổi nhưng không đổi ID khi cập nhật.

## Mục lục

| Phần | Nội dung |
|---|---|
| [Chuẩn bị](#cpp-00) | Công cụ, build, compiler/linker |
| [Bài 01](#cpp-01) | Cấu trúc chương trình, nhập/xuất |
| [Bài 02](#cpp-02) | Biến, kiểu, khởi tạo, const/constexpr, auto, cast |
| [Bài 03](#cpp-03) | Toán tử và bitmask |
| [Bài 04](#cpp-04) | Điều kiện và scope |
| [Bài 05](#cpp-05) | Vòng lặp, nhập lại và EOF |
| [Bài 06](#cpp-06) | Hàm và overload |
| [Bài 06.5](#cpp-06-5) | Header/source và build nhiều file |
| [Bài 07](#cpp-07) | Array/vector/string |
| [Bài 08](#cpp-08) | Struct, enum class, reference |
| [Bài 09](#cpp-09) | Pointer và lifetime cơ bản |
| [Bài 10](#cpp-10) | Cấp phát động, ownership, RAII, unique_ptr |
| [Bài 11](#cpp-11) | Class, constructor, encapsulation |
| [Bài 12.1](#cpp-12-1) | Kế thừa, virtual, override |
| [Bài 12.2](#cpp-12-2) | Vòng đời base/derived, this, destructor |
| [Bài 13](#cpp-13) | Templates cơ bản |
| [Bài 14](#cpp-14) | Static, const pointer và namespace |
| [Bài 14.5](#cpp-14-5) | Named casts, dynamic type và explicit |
| [Bài 15](#cpp-15) | Preprocessor, forward declaration và dependency |
| [Bài 16](#cpp-16) | Hai buổi 16.1 Copy/Move Inventory và 16.2 Lambda AOE |
| [Bài 17](#cpp-17) | Hướng dẫn công cụ debugger trước bài thực hành |
| [Bài 17.1](#cpp-17-1) | Tìm lỗi copy, HP âm và đếm sống |
| [Bài 17.2](#cpp-17-2) | Final Assessment, luật combat và bản tham khảo có nguồn |
| [Tra cứu nhanh](#lookup) | Cú pháp → ý nghĩa → bài học |
| [Healing](#healing) / [Arena](#arena) | Bài tự viết và ví dụ tổng hợp ba file |
| [Tự kiểm tra](#self-check) | Câu hỏi và đáp án tách riêng |
| [Lỗi thường gặp](#mistakes) | Dấu hiệu, cách tránh, checklist |
| [Lịch sử học](#study-history) / [Chu trình ôn](#review-routine) | Bài thực hành, trạng thái có nguồn, lịch ôn |
| [Giới hạn và bước tiếp theo](#roadmap) | Phạm vi nền tảng đã tổng hợp, phần mở rộng và ranh giới Unreal |
| [Quy trình cập nhật](#update-protocol) | Hợp nhất file mới vào bản chuẩn |
| [Quy ước tích hợp web](#web-integration) | Ánh xạ nội dung, giữ dữ liệu học và kiểm tra trước phát hành |
| [Nguồn và nhật ký](#sources) / [Kiểm tra](#validation) | Nguồn gốc, phiên bản, phạm vi xác minh |

---

---

<a id="cpp-00"></a>

## Chuẩn bị — Công cụ và cách build

**Mục tiêu:** Phân biệt IDE/compiler và compile/link/runtime; tự tạo Console App C++17.  
**Cần biết trước:** Không có.

### 00.1. Công cụ

- **Visual Studio 2022:** IDE để viết, build, chạy, debug.
- **MSVC:** Compiler C++ thường dùng khi build từ Visual Studio trên Windows.
- **Project / Solution:** Cấu trúc Visual Studio quản lý source, setting, build configurations.
- **Console App (C++):** Loại project thực hành đã sử dụng.

Lệnh phím phổ biến trong Visual Studio:

| Phím | Ý nghĩa |
|---|---|
| `Ctrl + F5` | Chạy chương trình không gắn debugger |
| `F5` | Chạy với debugger |
| `Ctrl + Shift + B` | Build Solution |
| `F9` | Đặt/bỏ breakpoint ở dòng hiện tại |
| `F10` | Step Over (thực thi dòng, không vào trong hàm được gọi) |
| `F11` | Step Into (bước vào hàm) |
| `Shift + F11` | Step Out (thoát khỏi hàm hiện tại trong debugger) |
| `Ctrl + Alt + L` | Mở Solution Explorer |

> Phần debugger nâng cao sẽ được học có hệ thống ở Bài 17. Các phím trên là để tra cứu trước.

### 00.2. Pipeline build

```text
File .h + file .cpp
       |
       v
Preprocessor (#include, #define, ...)
       |
       v
Compiler -> object file (.obj)
       |
       v
Linker (kết nối các object file / library)
       |
       v
Executable (.exe)
```

- **Compiler error:** Lỗi cú pháp, kiểu dữ liệu, thiếu khai báo, phạm vi truy cập…
- **Linker error:** Có lời gọi/khai báo nhưng không tìm thấy định nghĩa, hoặc định nghĩa trùng…
- **Runtime/logic error:** Build thành công nhưng chạy sai, crash hoặc cho kết quả không mong muốn.

**CMake** (đã hỏi thêm trước đây): Công cụ cấu hình/tạo hệ thống build. **CMake không phải ngôn ngữ C++ và không phải compiler.** Đây là khái niệm công cụ, không tính thành một bài ngôn ngữ của khóa nền tảng; công cụ build riêng của engine sẽ được xem trong khóa tiếp theo.


### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Chỉ ra khác biệt giữa lỗi compiler và linker; giải thích Ctrl+F5 khác F5.
- **Tự viết:** Tạo project Console App, bật C++17; nhận biết Output/Error List và chạy bằng Ctrl+F5.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-01"></a>

## Bài 01 — Cấu trúc chương trình và nhập/xuất

**Mục tiêu:** Đọc được chương trình tối thiểu; dùng cout/cin và hiểu phạm vi đọc một từ/cả dòng.  
**Cần biết trước:** Phần Chuẩn bị.

### 01.1. Chương trình C++ tối thiểu

```cpp
// example: cpp-01-hello; file: Main.cpp
#include <iostream>

int main()
{
    std::cout << "Hello, World!\n";
    return 0;
}
```

| Cú pháp | Công dụng |
|---|---|
| `#include <iostream>` | Đưa khai báo từ thư viện nhập/xuất vào translation unit |
| `int main()` | Entry point của chương trình console C++ |
| `{ ... }` | Khối lệnh / xác lập scope |
| `std::cout` | Luồng xuất chuẩn (console) |
| `<<` | Toán tử đưa dữ liệu vào luồng xuất |
| `"text"` | Chuỗi ký tự (string literal) |
| `\n` | Xuống dòng |
| `;` | Kết thúc câu lệnh (khi cú pháp yêu cầu) |
| `return 0;` | Kết thúc `main` thành công; ở cuối `main`, bỏ dòng này vẫn ngầm trả về 0 |
| `// ...` | Comment một dòng |
| `/* ... */` | Comment nhiều dòng |

### 01.2. Nhập xuất dữ liệu

```cpp
// example: cpp-01-input; file: Main.cpp
#include <iostream>
#include <string>

int main()
{
    std::string name;
    int health = 0;

    std::cout << "Name: ";
    std::cin >> name;       // Đọc một từ, dừng ở khoảng trắng

    std::cout << "HP: ";
    std::cin >> health;

    std::cout << "Player: " << name << ", HP=" << health << '\n';
}
```

- `std::cin >> variable;` đọc dữ liệu vào biến.
- `std::cout << value;` in dữ liệu ra màn hình.
- `std::boolalpha` khiến bool in thành `true`/`false` thay vì `1`/`0`, và trạng thái định dạng được giữ trên luồng cho các lần in sau.
- `std::getline(std::cin, name)` đọc cả dòng, kể cả dấu cách; khi dùng ngay sau `std::cin >> number`, cần chú ý ký tự xuống dòng còn trong bộ đệm nhập.
- Nếu người dùng nhập chữ vào biến `int`, đọc từ `std::cin` có thể thất bại. Không tiếp tục sử dụng giá trị chưa khởi tạo; kiểm tra tình trạng đọc dữ liệu nếu xây dựng ứng dụng thực tế.
- `\n` là ký tự xuống dòng; `std::endl` thêm xuống dòng và yêu cầu flush stream. Không cần flush sau mọi dòng chỉ để hiển thị văn bản; buffering còn phụ thuộc stream/môi trường.

Ví dụ kiểm tra tình trạng nhập nằm ở [Bài 04](#cpp-04); vòng nhập lại, EOF và phối hợp `>>`–`getline` nằm ở [Bài 05](#cpp-05), sau khi học điều kiện/vòng lặp.

### 01.3. Các dấu thường nhầm

- `'A'`: literal ký tự (char), khác `"A"`: chuỗi ký tự.
- C++ phân biệt chữ hoa và thường: `main` khác `Main`.
- `=` là gán; `==` là so sánh (xem Bài 03).


### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Giải thích include, main, return 0 và dấu chấm phẩy; phân biệt ký tự với chuỗi.
- **Tự viết:** Tự viết chương trình nhập tên một từ và HP, rồi in lại; dùng dữ liệu hợp lệ ở bước đầu.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-02"></a>

## Bài 02 — Biến, kiểu, khởi tạo và ép kiểu

**Mục tiêu:** Chọn kiểu phù hợp, khởi tạo biến; phân biệt const/constexpr/auto và chia nguyên.  
**Cần biết trước:** Bài 01.

### 02.1. Kiểu dữ liệu

| Kiểu / Cú pháp | Ý nghĩa | Ví dụ |
|---|---|---|
| `int` | Số nguyên có dấu | `int hp = 100;` |
| `unsigned int` | Số nguyên không dấu | `unsigned int mask = 0u;` |
| `float` | Số thực đơn chính xác | `float speed = 5.5f;` |
| `double` | Số thực có độ chính xác không thấp hơn float (thường cao hơn) | `double ratio = 0.95;` |
| `bool` | Logic đúng/sai | `bool alive = true;` |
| `char` | Ký tự kiểu char | `char rank = 'A';` |
| `std::string` | Chuỗi ký tự | `std::string name = "Mage";` |
| `std::size_t` | Kiểu không dấu dùng cho kích thước/chỉ số | `std::size_t count = 0;` |

Không mặc định mọi nền tảng có cùng kích thước `int`, `long`… Khi cần độ rộng chính xác, sau này có thể sử dụng `<cstdint>` (`std::int32_t`, …). Trong Unreal có `int32`.

### 02.2. Khai báo và khởi tạo

```cpp
int health = 100;      // Khởi tạo bằng dấu =
int coins(20);         // Direct initialization
int maxHP{200};        // Brace initialization
float speed{5.5f};
```

Khởi tạo bằng `{}` có khả năng phát hiện một số phép chuyển đổi làm mất dữ liệu (**narrowing**):

```cpp
// int x{3.5};  // Lỗi vì chuyển double sang int bị narrowing
int x = 3.5;    // Hợp lệ về cú pháp, x thành 3; cần tránh nếu không cố ý
```

Nên khởi tạo biến ngay khi khai báo, trừ khi có lý do cụ thể.

### 02.3. `const` và `constexpr`

```cpp
const int initialHP = 100;       // Không sửa được qua tên biến
constexpr int maxHP = 200;      // Phải có giá trị khởi tạo dùng được ở compile-time

int input = 0;
std::cin >> input;
const int runtimeConstant = input;  // Hợp lệ
// constexpr int broken = input;    // Không hợp lệ
```

- `const` bảo vệ khỏi việc sửa biến qua cách truy cập đó. `const` **không đồng nghĩa** giá trị luôn được tính tại runtime; ví dụ `const int n = 3` vẫn có thể dùng trong nhiều ngữ cảnh yêu cầu constant expression.
- `constexpr` yêu cầu giá trị/thành phần liên quan có thể được đánh giá tại thời điểm biên dịch theo quy tắc của C++.
- Không chọn `constexpr` vì tin rằng nó **luôn nhanh hơn** `const`; lợi ích chính là tính đúng đắn và khả năng dùng trong constant expressions.

### 02.4. `auto` — suy luận kiểu

```cpp
auto health = 100;       // int
auto speed = 5.5f;       // float
auto ratio = 0.95;       // double
auto isAlive = true;     // bool
```

`auto` được compiler suy luận **lúc biên dịch**, không phải kiểu dữ liệu động tự biến đổi khi chạy. Với các trường hợp phức tạp, `auto` có quy tắc suy luận và bỏ `const`/reference nhất định; sẽ học kỹ hơn khi cần.

### 02.5. Ép kiểu (Casting) ở mức đã học

```cpp
int health = 75;
int maxHP = 200;
float ratio = static_cast<float>(health) / maxHP; // 0.375
```

Vì sao cần cast? `75 / 200` là **chia nguyên** và cho ra `0` trước khi được gán vào float. `static_cast<float>(health)` làm một toán hạng thành `float`, khiến phép chia dùng số thực.

```cpp
int hp = static_cast<int>(75.9f); // 75 (bỏ phần thập phân)
```

**Đã học:** ép kiểu ngầm định cơ bản và `static_cast` trong phép số học.  
**Chưa học đầy đủ:** `dynamic_cast`, `const_cast`, `reinterpret_cast`, quy tắc chuyển kiểu giữa lớp cha/con. Nội dung này dự kiến ở **Bài 14.5 — Casting**; không tự xem là đã thành thạo.


### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Vì sao auto không phải kiểu động? Vì sao int{3.5} lỗi nhưng static_cast<int>(3.5) có chủ ý?
- **Tự viết:** Tự tính phần trăm HP với maxHP dương; thử dữ liệu tạo kết quả có phần lẻ và giải thích phép cast.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-03"></a>

## Bài 03 — Toán tử và bitmask

**Mục tiêu:** Đọc biểu thức số học/logic; hiểu short-circuit và thao tác cờ.  
**Cần biết trước:** Bài 02.

### 03.1. Số học và gán

| Cú pháp | Ý nghĩa | Ví dụ |
|---|---|---|
| `+` | Cộng | `5 + 2` → 7 |
| `-` | Trừ | `5 - 2` → 3 |
| `*` | Nhân | `5 * 2` → 10 |
| `/` | Chia | `5 / 2` → 2 với hai số nguyên |
| `%` | Chia lấy dư số nguyên | `5 % 2` → 1 |
| `=` | Gán | `hp = 100;` |
| `+=` | Cộng và gán | `hp += 10;` |
| `-=` | Trừ và gán | `hp -= 20;` |
| `*=` | Nhân và gán | `x *= 2;` |
| `/=` | Chia và gán | `x /= 2;` |
| `%=` | Lấy dư và gán | `x %= 2;` |

`%` là toán tử số nguyên; với số thực, dùng chức năng phù hợp trong thư viện toán nếu cần. Không chia số nguyên cho 0.

### 03.2. So sánh và logic

| Cú pháp | Ý nghĩa |
|---|---|
| `==` | Bằng nhau |
| `!=` | Khác nhau |
| `>` / `<` | Lớn hơn / nhỏ hơn |
| `>=` / `<=` | Lớn hơn hoặc bằng / nhỏ hơn hoặc bằng |
| `&&` | Logic AND; short-circuit nếu vế trái sai |
| `\|\|` | Logic OR; short-circuit nếu vế trái đúng |
| `!` | Logic NOT |

```cpp
bool isAlive = health > 0;
bool canFight = isAlive && stamina >= 20;
```

Short-circuit có thể chặn một phép tính không hợp lệ. Ví dụ minh họa:

```cpp
int potionCount = 0;
int totalHealing = 60;
bool healsEnough = potionCount > 0 && totalHealing / potionCount >= 20;
// healsEnough là false; phép chia không được đánh giá.
```

Áp dụng với pointer sẽ học tại [Bài 09](#cpp-09); hai toán hạng ở đây là biểu thức logic thông thường.

Lưu ý: Với `float`, so sánh `==` sau nhiều phép tính số thực có thể không đúng kỳ vọng vì sai số biểu diễn.

### 03.3. Tăng/giảm và toán tử ba ngôi

| Cú pháp | Ý nghĩa |
|---|---|
| `++x` | Tăng x trước, biểu thức nhận giá trị mới |
| `x++` | Biểu thức nhận giá trị cũ, sau đó x tăng |
| `--x` / `x--` | Tương tự, giảm 1 |
| `condition ? a : b` | Chọn biểu thức a hoặc b tùy điều kiện |

```cpp
int x = 5;
int y = x++; // y = 5, x = 6
int z = ++x; // x = 7, z = 7

int bonus = (x > 0) ? 10 : 0; // Chọn 10 hoặc 0 theo điều kiện
```

Đừng viết biểu thức kết hợp nhiều thao tác tăng/giảm trên cùng biến kiểu `x++ + ++x`; với các phép tăng trên int như ví dụ này, đó là hành vi không xác định.

### 03.4. Bitwise

| Cú pháp | Ý nghĩa |
|---|---|
| `a & b` | Bitwise AND |
| `a \| b` | Bitwise OR |
| `a ^ b` | Bitwise XOR (không phải lũy thừa) |
| `~a` | Đảo từng bit |
| `a << n` | Dịch trái n bit |
| `a >> n` | Dịch phải n bit |
| `&=`, `\|=`, `^=`, `<<=`, `>>=` | Biến thể gán kết hợp |

```cpp
unsigned int a = 5u; // 0101
unsigned int b = 3u; // 0011

a & b; // 0001 => 1
a | b; // 0111 => 7
a ^ b; // 0110 => 6
```

Ứng dụng tiêu biểu: **bit flags/bitmasks**.

```cpp
constexpr unsigned int CanJump  = 1u << 0;
constexpr unsigned int CanShoot = 1u << 1;

unsigned int abilities = 0u;
abilities |= CanJump;                      // Bật cờ
abilities |= CanShoot;
abilities &= ~CanShoot;                   // Tắt cờ
abilities ^= CanJump;                     // Đảo cờ
bool canJump = (abilities & CanJump) != 0; // Kiểm tra
```

Trong bài tập game thông thường, **không thay `* 2` bằng `<< 1` một cách máy móc**: compiler hiện đại tối ưu tốt; biểu thức số học rõ nghĩa và an toàn hơn. Khi thao tác bit, ưu tiên kiểu unsigned; không sử dụng dịch bit với số âm hay số lượng bit dịch không hợp lệ.

### 03.5. Ưu tiên toán tử

Thứ tự phổ biến (từ cao xuống thấp): dấu ngoặc → toán tử một ngôi → `* / %` → `+ -` → dịch bit → so sánh → bằng/khác → bitwise `&`, `^`, `|` → `&&`, `||` → gán. Dùng dấu ngoặc để làm ý định rõ ràng hơn.


### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Phân biệt =/==, &&/&, ^/lũy thừa; diễn giải tiền tố/hậu tố.
- **Tự viết:** Tự viết biểu thức kiểm tra điều kiện chiến đấu và bật/tắt một cờ; dự đoán kết quả trước khi chạy.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-04"></a>

## Bài 04 — Điều kiện và scope

**Mục tiêu:** Chọn if/switch phù hợp; hiểu nhánh đầu tiên đúng, fallthrough và phạm vi biến.  
**Cần biết trước:** Bài 03.

### 04.1. `if` / `else if` / `else`

```cpp
if (health <= 0)
{
    std::cout << "Dead\n";
}
else if (health <= 30)
{
    std::cout << "Critical\n";
}
else
{
    std::cout << "Alive\n";
}
```

- Chỉ nhánh **đúng đầu tiên** trong chuỗi if/else-if/else chạy.
- Hai khối `if` độc lập **có thể cùng chạy** nếu cả hai điều kiện đều đúng.
- Có thể lồng if hoặc dùng `&&` để kết hợp điều kiện; đừng lồng quá sâu nếu không cần.

### 04.2. `switch` / `case` / `break` / `default`

```cpp
switch (potionType)
{
    case 1:
        health += 25;
        break;
    case 2:
        health += 60;
        break;
    default:
        break;
}
```

- `switch` kiểm tra biểu thức kiểu số nguyên hoặc enum phù hợp; không trực tiếp dùng `std::string`.
- `case`: Nhánh ứng với giá trị cụ thể.
- `break`: Thoát `switch`; nếu thiếu có thể chạy tiếp các nhánh phía sau (**fallthrough**).
- `default`: Trường hợp không khớp case nào; có thể bỏ khi không cần.
- `[[fallthrough]];` (C++17) để biểu thị có chủ ý chạy tiếp sang case sau; chỉ cần biết, chưa dùng sâu.

### 04.3. Scope

```cpp
int health = 100;
if (health > 0)
{
    int damage = 20;
    health -= damage;
}
// damage không còn nằm trong scope này.
```


### Kiểm tra một lần nhập dữ liệu

Chương trình hoàn chỉnh; nhập số nguyên hợp lệ in giá trị, nhập chữ hoặc EOF kết thúc với thông báo lỗi.

```cpp
// example: cpp-04-input-check; file: Main.cpp
#include <iostream>
int main()
{
    int health = 0;
    if (!(std::cin >> health))
    {
        std::cout << "Invalid input!\n";
        return 1;
    }
    std::cout << "HP=" << health << '\n';
}
```

### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Hai if độc lập khác if/else-if thế nào? Thiếu break có thể làm gì?
- **Tự viết:** Tự phân loại HP 0/thấp/bình thường và xử lý hai loại potion; kiểm tra đúng các mốc điều kiện.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-05"></a>

## Bài 05 — Vòng lặp và luồng nhập

**Mục tiêu:** Dùng for/while/do-while; điều khiển break/continue, thoát khi hết input.  
**Cần biết trước:** Bài 04.

### 05.1. `for`

```cpp
for (int i = 1; i <= 5; ++i)
{
    std::cout << "Round " << i << '\n';
}
```

Cú pháp: `for (khởi_tạo; điều_kiện; cập_nhật) { ... }`. Hữu ích khi có biến đếm/số lượt rõ ràng.

### 05.2. `while`

```cpp
while (health < 100)
{
    health += 10;
}
```

Kiểm tra điều kiện **trước** mỗi lượt. Nếu điều kiện sai ngay từ đầu, không chạy lần nào.

### 05.3. `do ... while`

```cpp
int choice = 0;
do
{
    std::cout << "1. Play / 0. Quit: ";
    std::cin >> choice;
} while (choice != 0);
```

Chạy **ít nhất một lần**, rồi mới kiểm tra. Có dấu `;` sau `while (...)`.

### 05.4. `break`, `continue`

```cpp
for (int round = 1; round <= 5; ++round)
{
    if (damage < 0) continue; // Bỏ phần còn lại của lượt này
    if (health == 0) break;   // Kết thúc vòng lặp
}
```

- `break` thoát vòng lặp (hoặc switch) gần nhất.
- `continue` bỏ phần còn lại của **lượt lặp hiện tại**, chuyển sang bước cập nhật/kiểm tra vòng lặp tiếp theo.
- Chú ý vòng lặp vô hạn do không cập nhật biến điều kiện.

### Range-based for và container

Range-based for cần một dãy phần tử. Học cú pháp này với array/vector tại [Bài 07](#cpp-07); phiên bản tham chiếu Player ở [Bài 08](#cpp-08). Không phải range-for mặc nhiên tốn RAM hơn indexed-for; chi phí phụ thuộc kiểu phần tử và copy/reference.

### Nhập sai, EOF và chuyển từ >> sang getline

Chương trình hoàn chỉnh dưới đây nhập HP không âm rồi đọc tên cả dòng. EOF (ví dụ Ctrl+Z rồi Enter trong Windows console) kết thúc, không lặp vô hạn. `clear()` xóa cờ lỗi để thử lại; `ignore(...)` bỏ phần còn lại của dòng. `<limits>` cung cấp giới hạn dùng để bỏ tới newline; chưa cần học sâu numeric_limits.

```cpp
// example: cpp-05-input-loop; file: Main.cpp
#include <iostream>
#include <limits>
#include <string>
int main()
{
    while (true)
    {
        int health = 0;
        std::cout << "HP: ";
        if (!(std::cin >> health))
        {
            if (std::cin.eof() || std::cin.bad()) return 0;
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            std::cout << "Please enter an integer.\n";
            continue;
        }
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        if (health < 0)
        {
            std::cout << "HP must be non-negative.\n";
            continue;
        }
        std::string name;
        std::cout << "Full name: ";
        if (!std::getline(std::cin, name)) return 0;
        std::cout << name << ": " << health << " HP\n";
        break;
    }
}
```

Đây là ví dụ khôi phục stream cơ bản, chưa phải bộ kiểm tra nghiêm ngặt toàn dòng: `12abc` có thể đọc được phần số 12 rồi bỏ `abc`. Kiểm tra toàn bộ dòng là bài mở rộng sau này. Tên rỗng được chấp nhận trong ví dụ; nếu sản phẩm không cho phép, cần kiểm tra riêng.

### Tự kiểm tra và thực hành

- **Tự kiểm tra:** continue trong for có bỏ bước cập nhật không? Điều kiện nào bảo đảm vòng lặp kết thúc?
- **Tự viết:** Tự viết Training Arena có số vòng hữu hạn và lựa chọn chơi lại; thử nhập sai và kết thúc input.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-06"></a>

## Bài 06 — Hàm và overload

**Mục tiêu:** Tách trách nhiệm; phân biệt khai báo/định nghĩa/gọi, truyền giá trị/tham chiếu.  
**Cần biết trước:** Bài 05; reference được giới thiệu bằng int& tại đây và học kỹ ở 08.

### 06.1. Khai báo, định nghĩa, gọi

```cpp
// example: cpp-06-functions; file: Main.cpp
int Add(int a, int b);  // Declaration / Prototype

int main()
{
    int result = Add(3, 5); // Call
    return result;
}

int Add(int a, int b)  // Definition
{
    return a + b;
}
```

| Cú pháp | Ý nghĩa |
|---|---|
| `int Add(int a, int b);` | Khai báo hàm, chỉ tên, kiểu tham số, kiểu trả về |
| `int Add(...) { ... }` | Định nghĩa phần xử lý của hàm |
| `Add(3, 5)` | Gọi hàm với hai đối số |
| `return expression;` | Trả giá trị và kết thúc lời gọi |
| `void Print()` | Hàm không trả giá trị |
| `return;` trong hàm void | Kết thúc sớm, không trả giá trị |

### 06.2. Pass by value và pass by reference

```cpp
void DamageCopy(int hp)  { hp -= 20; } // Không sửa biến gốc
void DamageRef(int& hp)  { hp -= 20; } // Sửa biến gốc

int hp = 100;
DamageCopy(hp); // hp vẫn 100
DamageRef(hp);  // hp còn 80
```

- `T value`: Tạo tham số riêng, không phải bí danh của biến gốc. Với int trong ví dụ, hàm nhận bản sao; với class còn có copy/move/elision, để học ở bài 16.
- `T& ref`: Tham chiếu, có thể thay đổi đối tượng gốc.
- `const T& ref`: Tham chiếu chỉ đọc qua ref, thường tránh sao chép đối tượng lớn.
- Pointer `T*` là lựa chọn khác khi có thể vắng đối tượng; xem [Bài 09](#cpp-09), chưa cần dùng trong bài này.

### 06.3. Function overloading

```cpp
int Add(int a, int b)       { return a + b; }
float Add(float a, float b) { return a + b; }
```

Overload phân biệt bởi danh sách tham số thích hợp. **Chỉ thay kiểu trả về không đủ để overload.**

### 06.4. Tách trách nhiệm

Một hàm xử lý damage nên chủ yếu tính/tác động trạng thái, hàm hiển thị nên phụ trách in dữ liệu. Đặt tên thể hiện mục đích: `ApplyDamage`, `IsAlive`, `PrintResult`. Đây là bài học quan trọng từ các mini-project.


**Lưu ý output/exit code:** Ví dụ Add ở trên trả 8 từ main để minh họa return; không in 8 ra console và không trả mã thành công 0. Khi viết ứng dụng thông thường, in kết quả qua cout rồi return 0 nếu thành công.

### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Tại sao sửa tham số int không sửa biến gốc? Chỉ khác return type có overload được không?
- **Tự viết:** Tự tách chương trình trước thành hàm tính damage, kiểm tra sống và hiển thị.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-06-5"></a>

## Bài 06.5 — Header, source, compiler và linker

**Mục tiêu:** Tổ chức ba file; hiểu include theo translation unit và phân biệt lỗi liên kết.  
**Cần biết trước:** Bài 06.

### 06.5.1. Cấu trúc nhiều file

```text
TrainingArena/
  Arena.h
  Arena.cpp
  Main.cpp
```

`Arena.h`:

```cpp
// example: cpp-06-5-files; file: Arena.h
#pragma once

int ApplyDamage(int health, int damage);
bool IsAlive(int health);
```

`Arena.cpp`:

```cpp
// example: cpp-06-5-files; file: Arena.cpp
#include "Arena.h"

int ApplyDamage(int health, int damage)
{
    if (damage <= 0) return health;
    if (damage >= health) return 0;
    return health - damage;
}

bool IsAlive(int health)
{
    return health > 0;
}
```

`Main.cpp`:

```cpp
// example: cpp-06-5-files; file: Main.cpp
#include <iostream>
#include "Arena.h"

int main()
{
    int hp = ApplyDamage(100, 30);
    std::cout << std::boolalpha << IsAlive(hp) << '\n';
}
```

- `#pragma once`: Tránh cùng một header bị include nhiều lần trong **một translation unit**.
- `#include <iostream>`: Include thư viện chuẩn; `#include "Arena.h"`: Include file dự án.
- **Mỗi `.cpp` được biên dịch riêng.** `Main.cpp` đã include `<iostream>` không có nghĩa `Arena.cpp` tự nhìn thấy khai báo của nó.
- Không `#include` `.cpp` để thay cho hệ thống build đúng cách.
- Tên `Arena.h` trong `#include` phải khớp tên file và cấu hình đường tìm kiếm; hậu tố tải file như `Arena(1).h` chỉ là tên bản sao bên ngoài project.

### 06.5.2. Lỗi build phổ biến

| Lỗi / Tình huống | Nguyên nhân thường gặp |
|---|---|
| Hàm “identifier not found” / C3861 | Thiếu khai báo, include hoặc scope |
| LNK2019 unresolved external symbol | Đã gọi/khai báo nhưng linker không tìm được phần định nghĩa được build |
| LNK2005 symbol already defined | Định nghĩa trùng, ví dụ định nghĩa hàm thường trong header được include ở nhiều TU |
| Include file not found | Sai tên file, đường dẫn hoặc project include directories |

Định nghĩa function template trong header là trường hợp đặc biệt phổ biến và hợp lệ (Bài 13). Với hàm thông thường định nghĩa trong header, cần hiểu `inline`/ODR; chưa học sâu.


Ví dụ ba file này là chương trình hoàn chỉnh, output `true`. Tiền điều kiện của ApplyDamage là health không âm; damage không dương không gây tác động.

`#pragma once` được MSVC hỗ trợ nhưng không phải chỉ thị bắt buộc của chuẩn C++; include guard là cách portable. Hai cơ chế này đều xử lý include lặp trong một translation unit; hàm thường định nghĩa ở header được nhiều cpp include vẫn cần giải pháp ODR thích hợp (định nghĩa ở một cpp, hoặc inline khi đúng mục đích). `C2084` thường báo đã có thân hàm trong cùng translation unit; đừng định nghĩa cùng hàm hai lần.

### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Vì sao pragma once không chữa mọi LNK2005? Quên build một cpp có thể gây lỗi gì?
- **Tự viết:** Tự tách bài của mình thành header/source/main, thêm tất cả cpp vào build và giải thích từng include.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-07"></a>

## Bài 07 — Array, vector và string

**Mục tiêu:** Chọn container; truy cập đúng biên, hiểu size/capacity và các thao tác chuỗi.  
**Cần biết trước:** Bài 06.5.

### 07.1. C-style array

```cpp
int health[3] = {100, 80, 60};
std::cout << health[0]; // 100
```

Index bắt đầu từ 0; truy cập ngoài vùng mảng là hành vi không xác định.

### 07.2. `std::array<T, N>` — kích thước cố định

```cpp
#include <array>
std::array<int, 3> hp = {100, 80, 60};
std::cout << hp.size();   // 3
std::cout << hp[1];      // 80
std::cout << hp.at(1);   // 80, kiểm tra phạm vi
```

`std::array` có kích thước cố định trong kiểu của nó. `std::array<int, 3>` và `std::array<int, 4>` là hai kiểu khác nhau.

### 07.3. `std::vector<T>` — thay đổi kích thước

```cpp
#include <vector>
std::vector<int> inventory{10, 20};
inventory.push_back(30);
inventory.pop_back();
std::cout << inventory.size();
```

| Phương thức | Ý nghĩa |
|---|---|
| `.push_back(v)` | Thêm một phần tử cuối vector |
| `.pop_back()` | Xóa phần tử cuối (đảm bảo vector không rỗng) |
| `.size()` | Số phần tử hiện tại |
| `.empty()` | Có rỗng không |
| `.clear()` | Xóa tất cả phần tử |
| `.at(i)` | Truy cập có kiểm tra index, có thể ném exception |
| `[i]` | Truy cập không kiểm tra biên (nếu i sai: hành vi không xác định) |

### 07.4. `std::string`

```cpp
#include <string>
std::string name = "Mario";
name += " Bros";
std::cout << name.length();
std::cout << name[0];
```

| Phương thức | Ý nghĩa |
|---|---|
| `.length()` / `.size()` | Độ dài chuỗi (số phần tử char/code unit, không nhất thiết số ký tự Unicode hiển thị) |
| `.empty()` | Chuỗi rỗng? |
| `.find("abc")` | Tìm chuỗi con; không tìm thấy trả `std::string::npos` |
| `.substr(pos, count)` | Lấy chuỗi con |
| `+=` | Nối chuỗi |

### 07.5. Chỉ số mảng và `std::size_t`

```cpp
for (std::size_t i = 0; i < inventory.size(); ++i)
{
    std::cout << inventory[i] << '\n';
}
```

`container.size()` trả về kiểu số nguyên không dấu (thường là `std::size_t`). Không mặc nhiên so sánh `int` với `size()` vì có thể gặp warning signed/unsigned và bug khi giá trị âm.

Khi dùng tên `std::size_t` trực tiếp, include `<cstddef>` phù hợp. **Iterator căn bản:** `begin()` chỉ đầu khoảng, `end()` chỉ vị trí sau phần tử cuối; khi container rỗng hai iterator này bằng nhau. Không dereference end. Các thuật toán nhận khoảng `[begin, end)` và callback sẽ học theo mục đích tại [Bài 16](#cpp-16); chưa cần ghi nhớ mọi loại iterator ngay ở đây.


### Range-based for với số nguyên

Đoạn minh họa dùng hp đã khai báo trong phần array:

```cpp
for (int value : hp)
{
    std::cout << value << '\n';
}
```

Mỗi value là bản sao int. Khi đến [Bài 08](#cpp-08), dùng `Player&` để sửa gốc và `const Player&` để đọc object lớn mà không copy.

### Size, capacity, reserve và resize

- `size()` là số phần tử đang tồn tại; chỉ index nhỏ hơn size mới truy cập được.
- `capacity()` là dung lượng có thể chứa trước khi cần cấp phát lại.
- `reserve(n)` xin capacity ít nhất n nếu cần, không tạo thêm phần tử và không làm giảm size.
- `resize(n)` thay đổi size: tăng tạo thêm phần tử, giảm hủy phần tử cuối.
- Khi vector cấp phát lại, pointer/reference/iterator tới phần tử cũ mất hiệu lực. Nắm ý này trước khi dùng pointer ở bài 09; không giữ địa chỉ cũ rồi tiếp tục dùng sau realloc.

```cpp
// example: cpp-07-capacity; file: Main.cpp
#include <iostream>
#include <vector>
int main()
{
    std::vector<int> values{10, 20};
    values.reserve(8);
    std::cout << "size=" << values.size() << '\n'; // 2
    values.resize(4);
    std::cout << "size=" << values.size() << ", last=" << values.at(3) << '\n'; // 4, 0
}
```

Không viết vào values[7] chỉ vì reserve(8). Với array chứa struct ở [Arena](#arena), dạng `std::array<Player, 3> players{{ ... }};` dùng lớp ngoặc ngoài cho aggregate array và lớp trong cho dãy phần tử. Khởi tạo std::array có thể có một hoặc hai cặp ngoặc tùy dạng khởi tạo/brace elision; không coi hai cặp là quy tắc cho mọi container.

`.at(i)` ném std::out_of_range khi i không hợp lệ; chưa học exception thì tránh index sai trước khi gọi. Với string, `.substr(pos,count)` yêu cầu pos không lớn hơn size; count được giới hạn bởi phần còn lại. `.find()` không thấy trả npos, không dùng kết quả đó làm index. Đọc ký tự đầu cần chuỗi không rỗng. std::array chứa phần tử trong chính object; vị trí lưu trữ tùy object, không luôn nằm trên stack.

### Tự kiểm tra và thực hành

- **Tự kiểm tra:** reserve khác resize thế nào? find không thấy trả gì, và size của chuỗi UTF-8 đo điều gì?
- **Tự viết:** Tự quản lý một nhóm HP bằng array và danh sách item bằng vector; thử danh sách rỗng trước thao tác xóa.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-08"></a>

## Bài 08 — Struct, enum class và reference

**Mục tiêu:** Gom dữ liệu nhân vật, biểu diễn trạng thái bằng enum; dùng tham chiếu đúng mục đích.  
**Cần biết trước:** Bài 07.

### 08.1. `struct` — nhóm dữ liệu

```cpp
#include <string>

enum class CharacterClass { Knight, Mage, Archer };

struct Player
{
    std::string name;
    CharacterClass role;
    int health;
    int maxHP;
};

Player knight{"Knight", CharacterClass::Knight, 100, 100};
std::cout << knight.health;
```

- `struct` tạo kiểu dữ liệu riêng.
- Truy cập thành viên bằng dấu `.`.
- `struct` trong C++ **có thể chứa constructor và method**, không chỉ dữ liệu; khác `class` chủ yếu ở quyền truy cập mặc định và kiểu kế thừa mặc định (Bài 11).

Cụ thể, member và kiểu kế thừa mặc định của struct là public, của class là private. Hai dạng đều dùng được các access specifier để chỉ rõ quyền. Chọn struct cho nhóm dữ liệu đơn giản ở bài này là quyết định trình bày, không phải giới hạn ngôn ngữ “struct không được có hàm”.

### 08.2. `enum class` — trạng thái có tên

```cpp
enum class CharacterClass
{
    Knight,
    Mage,
    Archer
};

CharacterClass role = CharacterClass::Mage;
```

- Truy cập giá trị bằng `CharacterClass::Mage`.
- Không tự động chuyển ngầm sang `int` như unscoped enum thông thường.
- Hữu ích cho trạng thái, loại nhân vật, weapon category, game mode…

### 08.3. Reference

```cpp
int hp = 100;
int& ref = hp;
ref = 80;  // hp giờ là 80
```

- Reference phải được khởi tạo để tham chiếu đối tượng thích hợp.
- `int& ref = hp` là tên khác cho `hp`, không phải con trỏ.
- `ref = anotherValue` **gán giá trị** vào đối tượng đang tham chiếu; không chuyển reference sang đối tượng khác.

```cpp
void ApplyDamage(Player& player, int damage)
{
    if (damage <= 0) return;
    player.health = damage >= player.health ? 0 : player.health - damage;
}

bool IsAlive(const Player& player)
{
    return player.health > 0;
}
```

- `Player&`: sửa đối tượng gốc.
- `const Player&`: chỉ đọc qua tham chiếu, tránh copy đối tượng lớn.
- Tránh trả về reference đến biến cục bộ đã hết vòng đời.


### Duyệt Player theo mục đích

Đoạn minh họa; players là array/vector chứa Player và ApplyDamage đã được định nghĩa ở trên. Ví dụ đầy đủ nằm ở [Arena](#arena).

```cpp
for (Player& p : players)
{
    ApplyDamage(p, 10); // Sửa phần tử gốc, không cần class method trước bài 11.
}
for (const Player& p : players)
{
    std::cout << p.name << ": " << p.health << '\n';
}
```

`auto&` suy luận kiểu phần tử và giữ tham chiếu để sửa gốc; `const auto&` đọc qua tham chiếu mà không copy object. Trong vòng lặp Player ở trên, có thể thay `Player&` bằng `auto&` và `const Player&` bằng `const auto&`. Đây vẫn là suy luận kiểu tại compile-time.

Các ví dụ HP giả định dữ liệu ban đầu nằm trong `0 <= health <= maxHP`. Với struct public, nơi tạo/gán dữ liệu có trách nhiệm giữ điều kiện đó. Bài 11 sẽ dùng class để quản lý điều kiện trong giao diện của đối tượng. Những block định nghĩa enum riêng là cách giải thích lại cùng khái niệm, không chép cả hai định nghĩa CharacterClass vào một file.

### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Reference có rebind được không? struct có được chứa method không?
- **Tự viết:** Tự chuyển dữ liệu song song thành struct Player; hàm sửa nhận Player&, hàm chỉ đọc nhận const Player&.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="cpp-09"></a>

## Bài 09 — Pointer và lifetime cơ bản

**Mục tiêu:** Phân biệt địa chỉ/dereference, pointer/reference; kiểm tra null và vòng đời đối tượng.  
**Cần biết trước:** Bài 08.

### 09.1. Giá trị, địa chỉ, dereference

```cpp
int health = 100;
int* ptr = &health;

std::cout << health;  // 100
std::cout << &health; // Địa chỉ của health
std::cout << ptr;     // Địa chỉ đang lưu trong ptr
std::cout << *ptr;    // 100

*ptr = 50;            // health thành 50
```

| Cú pháp | Ý nghĩa |
|---|---|
| `T* ptr` | Khai báo biến con trỏ đến T |
| `&object` | Lấy địa chỉ object (address-of) |
| `ptr` | Giá trị địa chỉ mà ptr lưu |
| `*ptr` | Dereference — truy cập đối tượng được trỏ tới |
| `ptr = &other` | Đổi đích trỏ của ptr |
| `nullptr` | Giá trị con trỏ null, không trỏ đến đối tượng |
| `ptr->member` | Truy cập thành viên qua con trỏ |
| `(*ptr).member` | Tương đương `ptr->member` |

```cpp
Player* target = &knight;
target->health = 80;
// target->health == (*target).health
```

`*` xuất hiện trong **khai báo** (`int* p`) khác ý nghĩa với phép **dereference** (`*p`). `&` xuất hiện trong khai báo reference (`int&`) khác toán tử lấy địa chỉ (`&x`).

### 09.2. `nullptr` và kiểm tra trước khi dùng

```cpp
Player* target = nullptr;
if (target != nullptr)
{
    PrintPlayer(*target);
}
```

- Dereference một con trỏ typed-null để đọc/ghi đối tượng là hành vi không xác định. Ví dụ lỗi: `int* p = nullptr;` rồi đọc `*p`. Còn viết literal `*nullptr` trực tiếp là lỗi biên dịch vì nullptr có kiểu std::nullptr_t; hai tình huống khác nhau.
- Pointer không null **vẫn có thể không hợp lệ** nếu đối tượng đã chết hoặc địa chỉ sai.
- Truyền `HealPlayer(nullptr, 30)` không làm biến `target` ở chỗ gọi tự chuyển thành nullptr.

### 09.3. Pointer vs Reference

| Reference (`T&`) | Pointer (`T*`) |
|---|---|
| Phải gắn với đối tượng khi tạo | Có thể là `nullptr` |
| Không thể “rebind” | Có thể đổi địa chỉ lưu |
| Dùng cú pháp thành viên `obj.member` | Dùng `ptr->member` |
| Phù hợp khi tham số phải tồn tại | Phù hợp khi sự vắng mặt/đổi đích có ý nghĩa |


### Short-circuit và giới hạn kiểm tra null

Đoạn minh họa, target trỏ tới Player còn sống hoặc là nullptr:

```cpp
if (target != nullptr && target->health > 0)
{
    std::cout << "Target alive\n";
}
```

Điều kiện bên trái phải được kiểm tra trước phép truy cập. Kiểm tra non-null không phát hiện dangling: không trả địa chỉ/reference tới biến cục bộ; không dùng địa chỉ phần tử vector sau khi realloc; không tiếp tục dùng đối tượng đã bị hủy. Cấp phát động và owner sẽ học ở bài 10.

Với dữ liệu mẫu ở phần đầu bài, ptr dùng để sửa đối tượng có sẵn; không gọi delete cho địa chỉ biến tự động. Bài thực hành tự viết: [Pointer-Based Healing](#healing).

### Tự kiểm tra và thực hành

- **Tự kiểm tra:** Pointer khác null có chắc còn sống không? Khi vector realloc, pointer tới phần tử cũ còn dùng được không?
- **Tự viết:** Làm Pointer-Based Healing theo mục riêng; thử null, HP đầy, amount âm và đổi target.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

---

<a id="cpp-10"></a>
## Bài 10 — Vòng đời đối tượng, cấp phát động, RAII và smart pointer

**Mục tiêu:** Phân biệt đối tượng với con trỏ đang trỏ tới nó; nhận diện leak, dangling và double delete; dùng `std::unique_ptr` để biểu đạt một chủ sở hữu.

**Cần biết trước:** Bài 09 về địa chỉ, dereference, `nullptr`; hàm nhận pointer/reference; scope và vòng lặp. Chưa cần tự viết constructor hay destructor: bài này dùng `int` để tập trung vào quyền sở hữu.

### 10.1. Lifetime và nơi lưu trữ

**Lifetime** là khoảng thời gian một đối tượng đã được tạo và còn tồn tại để sử dụng. **Storage duration** mô tả thời gian vùng lưu trữ của đối tượng tồn tại. Hai khái niệm liên quan nhưng không đồng nghĩa với vị trí vật lý trên stack hay heap.

Trong cách triển khai thường gặp, biến cục bộ có automatic storage duration nằm trên stack; đối tượng tạo bằng `new` dùng vùng cấp phát động thường gọi là heap. C++ còn có static storage duration và thread storage duration; sẽ học sau. Không nên học thuộc rằng mọi biến chỉ có thể sống ở một trong hai vùng stack/heap.

**Đoạn minh họa — đặt bên trong một hàm:**

```cpp
int hp = 100;                  // Đối tượng int cục bộ, automatic storage duration.
int* ptr = new int{100};       // Tạo một đối tượng int khác bằng cấp phát động.
delete ptr;                   // Hủy đối tượng được cấp phát và giải phóng vùng nhớ.
ptr = nullptr;                // Đổi giá trị con trỏ; không phải thao tác giải phóng.
```

`ptr` cũng là một biến cục bộ. Biến con trỏ và đối tượng mà nó trỏ tới có lifetime riêng: khi `ptr` hết scope, raw pointer không tự giải phóng đối tượng mà nó từng trỏ tới. Vì vậy cần xác định **ai sở hữu và chịu trách nhiệm giải phóng** tài nguyên.

### 10.2. Ghép đúng `new`, `delete`, `new[]`, `delete[]`

**Đoạn minh họa — đặt bên trong một hàm; không chạy lại phần `delete` trên địa chỉ cũ:**

```cpp
int* p = new int{42};
delete p;
p = nullptr;

int* values = new int[5]{};    // Năm phần tử int được khởi tạo bằng 0.
delete[] values;
values = nullptr;
```

- `new T{...}` tạo một đối tượng; dạng sở hữu thủ công tương ứng dùng `delete`.
- `new T[n]` tạo một mảng; phải dùng `delete[]`. Trộn `new[]` với `delete` gây hành vi không xác định.
- Xóa hai lần cùng đối tượng cấp phát qua địa chỉ cũ là **double delete**, gây hành vi không xác định. `delete` một con trỏ null thì hợp lệ.
- Sau `delete`, các pointer/reference còn trỏ tới đối tượng đã bị hủy là **dangling**. Chỉ gán `p = nullptr` không sửa được những alias khác đang giữ địa chỉ cũ.
- Không `delete` địa chỉ biến cục bộ hoặc con trỏ chỉ đang mượn tài nguyên của một owner khác.

Học `new`/`delete` để hiểu cơ chế và đọc code. Khi viết ứng dụng, ưu tiên đối tượng cục bộ, container như `std::vector`, hoặc smart pointer phù hợp thay vì quản lý cấp phát thủ công ở nhiều nơi.

### 10.3. Các lỗi bộ nhớ cần nhận diện

| Lỗi | Bản chất | Cách nghĩ khi kiểm tra |
|---|---|---|
| Memory leak | Tài nguyên được cấp phát nhưng không được giải phóng đúng cách | Owner là ai, và có đường thực thi nào làm mất quyền quản lý không? |
| Dangling pointer/reference | Còn giữ đường truy cập tới đối tượng đã hết lifetime | Đối tượng gốc còn sống không? |
| Double delete | Giải phóng lại một đối tượng đã bị giải phóng | Có hai nơi cùng nghĩ mình là owner không? |
| Null dereference | Truy cập đối tượng qua con trỏ null | Kiểm tra null trước khi dereference khi null là khả năng hợp lệ |
| Out-of-bounds | Truy cập phần tử ngoài phạm vi hợp lệ | Kiểm tra chỉ số và kích thước; cân nhắc `.at()` |

`ptr != nullptr` không chứng minh đối tượng còn sống. `ptr == nullptr` cũng không chứng minh chương trình không leak: nếu làm mất con trỏ duy nhất bằng cách gán null trước khi giải phóng, tài nguyên vẫn có thể bị bỏ quên.

### 10.4. RAII và `std::unique_ptr`

**RAII — Resource Acquisition Is Initialization** — gắn quyền quản lý tài nguyên với lifetime của một đối tượng quản lý. Khi owner bị hủy, nó thực hiện việc giải phóng. Tài nguyên có thể là bộ nhớ, file hoặc khóa đồng bộ; bài này chỉ thực hành bộ nhớ.

`std::unique_ptr<T>` trong `<memory>` biểu đạt **sở hữu độc quyền**: chỉ một `unique_ptr` sở hữu đối tượng tại một thời điểm. `std::make_unique<T>(args...)` tạo đối tượng `T` từ các đối số rồi trả về owner tương ứng. Với `int`, `std::make_unique<int>(100)` tạo một `int` có giá trị 100.

| Cú pháp | Ý nghĩa và điều kiện |
|---|---|
| `std::unique_ptr<T>` | Kiểu owner sở hữu độc quyền một đối tượng T |
| `std::make_unique<T>(args...)` | Tạo T và trả owner quản lý nó |
| `*owner` | Truy cập đối tượng được sở hữu; owner phải khác null |
| `owner->method()` | Gọi method khi T là struct/class phù hợp; dùng ở bài 11 |
| `owner.get()` | Lấy raw pointer đang lưu, **không chuyển quyền sở hữu** |
| `if (owner)` | Kiểm tra owner có giữ con trỏ khác null hay không |
| Kết thúc scope của owner cục bộ | Owner bị hủy và giải phóng đối tượng nó còn sở hữu |

`unique_ptr` không cho phép copy. Chẳng hạn `auto other = owner;` không hợp lệ vì sẽ tạo hai owner độc quyền cho cùng tài nguyên. Cách chuyển quyền sở hữu sẽ học trong bài copy/move; chưa cần dùng ở đây.

Raw pointer lấy từ `.get()` chỉ là **con trỏ mượn**. Không `delete` nó, không tạo một `unique_ptr` thứ hai từ nó, và không giữ nó để truy cập sau khi owner đã hủy đối tượng. Smart pointer quản lý quyền sở hữu; nó không tự làm mọi raw pointer đi kèm trở nên an toàn.

`std::shared_ptr` dùng cho sở hữu chia sẻ, `std::weak_ptr` dùng để quan sát đối tượng do `shared_ptr` quản lý mà không giữ quyền sở hữu mạnh. Hai kiểu này mới được giới thiệu vai trò; cơ chế đếm tham chiếu/cycle chưa thuộc bài thực hành này.

### 10.5. Ví dụ chạy được — owner và pointer mượn

**Chương trình hoàn chỉnh C++17, một file `Main.cpp`.** Hàm nhận pointer mượn để sửa HP, không nhận trách nhiệm giải phóng.

```cpp
// example: cpp-10-ownership; file: Main.cpp
#include <iostream>
#include <memory>

void ApplyDamage(int* health, int damage)
{
    if (health == nullptr || damage <= 0) return;
    *health = damage >= *health ? 0 : *health - damage;
}

int main()
{
    int* raw = new int{42};
    std::cout << "Raw: " << *raw << '\n';
    delete raw;
    raw = nullptr;

    int* values = new int[5]{};
    std::cout << "Array first: " << values[0] << '\n';
    delete[] values;
    values = nullptr;

    {
        auto health = std::make_unique<int>(100);
        int* borrowed = health.get();
        ApplyDamage(borrowed, 25);
        ApplyDamage(nullptr, 25);
        std::cout << "Owned: " << *health << '\n';
        // Không delete borrowed: health đang sở hữu đối tượng int.
    } // health bị hủy; int do nó sở hữu được giải phóng tự động.

    std::cout << "Outside owner scope\n";
}
```

**Kết quả mong đợi:**

```text
Raw: 42
Array first: 0
Owned: 75
Outside owner scope
```

Ví dụ dùng owner cục bộ để thấy rõ lifetime. RAII không bị giới hạn vào stack: owner cũng có thể là member của một đối tượng khác. Khi chuyển sang class, chọn `player->TakeDamage(...)`, hàm độc lập hoặc getter theo trách nhiệm thực tế; không thêm thao tác pointer chỉ để có đủ cú pháp.

### 10.6. Tự kiểm tra và thực hành

1. Vì sao `health.get()` không cho phép bạn gọi `delete` trên kết quả? Nếu owner hết lifetime, con trỏ mượn còn dùng được không?
2. Sau `int* q = p; delete p; p = nullptr;`, điều gì xảy ra với `q`? Vì sao kiểm tra `q != nullptr` không đủ?

**Bài thực hành — Dynamic Character Manager:** Quản lý HP của một nhân vật bằng `std::unique_ptr<int>` và viết hàm nhận pointer mượn để thay đổi HP. Bản dùng class Player sẽ thực hiện sau bài 11. Giữ điều kiện HP ban đầu không âm; thử damage âm, damage 0, damage lớn hơn HP và pointer null.

**Tiêu chí đạt:** Nêu rõ owner và borrower; ghép đúng new/delete ở phần thử nghiệm thủ công; không `delete` pointer từ `.get()`; không dùng pointer sau lifetime; HP không âm và các input biên cho kết quả đúng. Không cần tự viết smart pointer.

---

<a id="cpp-11"></a>
## Bài 11 — Class, đóng gói và constructor

**Mục tiêu:** Chuyển dữ liệu và quy tắc HP vào một class; dùng constructor để tạo trạng thái hợp lệ; phân biệt method thay đổi trạng thái với getter `const`.

**Cần biết trước:** Struct, enum, truyền tham chiếu, header/source và bài 10 về quyền sở hữu. Ví dụ Player trong chương này là một kiểu mới thay cho struct Player của bài trước; không khai báo cả hai kiểu cùng tên trong một project ví dụ.

### 11.1. Class và quyền truy cập

Class định nghĩa một kiểu có dữ liệu và phương thức. Object là một đối tượng cụ thể của kiểu đó. **Đóng gói — encapsulation** — cho phép class kiểm soát cách trạng thái thay đổi qua giao diện công khai.

| Quyền truy cập | Ý nghĩa ở mức đang học |
|---|---|
| `public` | Code bên ngoài có thể gọi/truy cập khi có đối tượng thích hợp |
| `private` | Chi tiết nội bộ; bên ngoài và lớp con không truy cập trực tiếp |
| `protected` | Lớp hiện tại và lớp dẫn xuất được truy cập theo quy tắc access; giới thiệu ở bài kế thừa |

`class` mặc định có member `private` và kế thừa `private`; `struct` mặc định có member `public` và kế thừa `public`. Ngoài hai mặc định này, cả hai đều có thể có constructor và method. Quyền truy cập không chỉ là cách viết: nó giúp người dùng class tránh bỏ qua quy tắc dữ liệu.

**Đoạn khai báo minh họa — có thể đặt trong `Player.h`; chưa phải chương trình đầy đủ:**

```cpp
#pragma once

class Player
{
private:
    int maxHP;
    int health;

public:
    explicit Player(int maximumHP);
    void TakeDamage(int damage);
    void Heal(int amount);
    int GetHealth() const;
    int GetMaxHP() const;
};
```

Class này giữ bất biến **`0 <= health <= maxHP` và `maxHP >= 0`**. Quyết định thiết kế của ví dụ: maximumHP âm được chuẩn hóa thành 0. Đây là quy tắc của Player, không phải hành vi tự động của C++.

### 11.2. Constructor và member initializer list

Constructor có tên giống class và **không có kiểu trả về**. Nó khởi tạo đối tượng trước khi đối tượng được sử dụng.

**Đoạn định nghĩa minh họa — đặt trong `Player.cpp`, đi cùng khai báo ở trên:**

```cpp
#include "Player.h"

Player::Player(int maximumHP)
    : maxHP(maximumHP < 0 ? 0 : maximumHP), health(maxHP)
{
}
```

Dấu `:` mở đầu **member initializer list**. `maxHP(...)` trực tiếp khởi tạo member trước khi thân constructor chạy; sau đó `health(maxHP)` khởi tạo HP hiện tại từ giới hạn đã hợp lệ.

**Thứ tự khởi tạo thực sự là thứ tự khai báo member trong class**, không phải thứ tự viết sau `:`. Vì class khai báo `maxHP` trước `health`, ví dụ mới có thể an toàn dùng `maxHP` để khởi tạo `health`. Giữ hai thứ tự giống nhau để người đọc và compiler không bị đánh lừa.

Member là reference hoặc `const` phải được khởi tạo thích hợp; không thể đợi đến thân constructor rồi gán như member thông thường.

`explicit` ở constructor một đối số ngăn các phép chuyển đổi ngầm ngoài ý muốn. Với class này:

**Đoạn minh họa — đặt sau khi đã có đầy đủ định nghĩa Player:**

```cpp
Player player{100};         // Hợp lệ: yêu cầu tạo Player một cách rõ ràng.
// Player other = 100;      // Không hợp lệ vì constructor là explicit.
```

`explicit` cũng được phép trên constructor nhiều tham số; cách hiểu đầy đủ hơn và sự khác biệt với explicit cast nằm ở [Bài 14.5](#cpp-14-5). Không thay constructor một tham số của Player này bằng một chữ ký khác khi sao chép đoạn minh họa từ tài liệu khác.

### 11.3. Method, getter và `const`

`void Player::TakeDamage(int damage) { ... }` là **định nghĩa đầy đủ** method bên ngoài class. `Player::` chỉ rõ method thuộc Player. Bên trong method, `health` và `maxHP` là dữ liệu của object đang được gọi.

- `TakeDamage` và `Heal` thay đổi trạng thái nên không đánh dấu `const`.
- `GetHealth() const` có thể gọi trên `const Player&`; không được sửa member không-`mutable` qua `this`. `mutable` chỉ là ngoại lệ cần biết tên, chưa dùng trong bài này.
- Getter trả `int` theo giá trị vì kiểu nhỏ và người gọi chỉ cần kết quả.
- Với class có member chuỗi, getter dạng `const std::string& GetName() const` tránh copy chuỗi nhưng trả tham chiếu mượn: không dùng tham chiếu sau khi object sở hữu chuỗi đã chết. Player tối giản trong ví dụ này chỉ quản lý HP.

Trước đây `ApplyDamage(Player&, int)` là hàm độc lập sửa struct. Nay `player.TakeDamage(20)` có thể bảo vệ quy tắc ngay trong class. Không bắt buộc mọi hàm phải là member: `PrintPlayer(const Player&)` vẫn nên là hàm độc lập khi chỉ đọc getter và in console.

### 11.4. Ví dụ chạy được — Player giữ bất biến HP

**Chương trình hoàn chỉnh C++17, một file `Main.cpp`.** Toàn bộ declaration và definition được đặt cùng file để thử nhanh. Khi chia file, chuyển declaration vào `Player.h`, các định nghĩa `Player::...` vào `Player.cpp`, và include header tại nơi dùng; không dán lại thêm class từ đoạn minh họa trước.

```cpp
// example: cpp-11-player; file: Main.cpp
#include <iostream>
#include <memory>

class Player
{
private:
    int maxHP;
    int health;

public:
    explicit Player(int maximumHP);
    void TakeDamage(int damage);
    void Heal(int amount);
    int GetHealth() const;
    int GetMaxHP() const;
};

Player::Player(int maximumHP)
    : maxHP(maximumHP < 0 ? 0 : maximumHP), health(maxHP)
{
}

void Player::TakeDamage(int damage)
{
    if (damage <= 0) return;
    health = damage >= health ? 0 : health - damage;
}

void Player::Heal(int amount)
{
    if (amount <= 0) return;
    const int missingHP = maxHP - health;
    health = amount >= missingHP ? maxHP : health + amount;
}

int Player::GetHealth() const
{
    return health;
}

int Player::GetMaxHP() const
{
    return maxHP;
}

void PrintPlayer(const Player& player)
{
    std::cout << "HP: " << player.GetHealth()
              << '/' << player.GetMaxHP() << '\n';
}

int main()
{
    Player hero{100};
    PrintPlayer(hero);
    hero.TakeDamage(30);
    PrintPlayer(hero);
    hero.Heal(50);
    PrintPlayer(hero);
    hero.TakeDamage(999);
    PrintPlayer(hero);

    const Player normalized{-10};
    PrintPlayer(normalized);

    auto managed = std::make_unique<Player>(100);
    managed->TakeDamage(20);
    PrintPlayer(*managed);
}
```

**Kết quả mong đợi:**

```text
HP: 100/100
HP: 70/100
HP: 100/100
HP: 0/100
HP: 0/0
HP: 80/100
```

`Heal` kiểm tra khoảng HP còn thiếu **trước** khi cộng; `TakeDamage` kiểm tra **trước** khi trừ. Với bất biến đã được constructor thiết lập, các phép tính này tránh tràn số nguyên ngay cả khi amount/damage là số dương rất lớn. Chỉ viết phép cộng rồi clamp kết quả có thể quá muộn nếu phép cộng đã tràn.

`std::make_unique<Player>(100)` gọi đúng constructor `Player(int)`. Không dùng thêm tên/role làm đối số nếu chưa định nghĩa constructor tương ứng.

### 11.5. Tự kiểm tra và thực hành

1. Vì sao constructor khởi tạo `maxHP` trước `health`? Đổi thứ tự sau dấu `:` có thay đổi thứ tự khởi tạo thực tế không?
2. Vì sao `PrintPlayer(const Player&)` gọi được getter nhưng không gọi được `Heal`? Nếu `health` là public, bất biến có thể bị phá ở đâu?

**Bài thực hành — Player Class System:** Tự tổ chức một class nhân vật giữ quy tắc HP, có constructor, getter và method thay đổi trạng thái. Tách khai báo/định nghĩa thành header/source, viết phần main chỉ điều phối và hiển thị. Có thể thêm tên nhân vật sau khi phần HP hoạt động đúng.

**Tiêu chí đạt:** Constructor tạo trạng thái hợp lệ kể cả maxHP âm theo chính sách đã chọn; damage/heal âm hoặc 0 không sửa HP; HP không âm và không vượt maxHP; getter dùng được với `const Player&`; không truy cập private từ main; kiểm thử 0, giới hạn, vượt giới hạn và input lớn. Không cần tự viết copy/move hay destructor cho class chỉ chứa các member tự quản được như ví dụ.

---

<a id="cpp-12-1"></a>
## Bài 12.1 — Kế thừa, đa hình, `virtual` và `override`

**Mục tiêu:** Diễn đạt quan hệ lớp con/lớp cha; dự đoán lời gọi hàm qua base pointer/reference; phân biệt overload và override.

**Cần biết trước:** Class, access specifiers, method `const`, pointer và reference. Buổi 12.1 tập trung vào chọn hành vi; buổi 12.2 nối tiếp bằng vòng đời của object.

### 12.1.1. Kế thừa công khai thể hiện quan hệ “là một loại”

**Đoạn khai báo minh họa — chưa phải chương trình chạy độc lập:**

```cpp
class Enemy
{
public:
    void Move() { /* Xu ly di chuyen chung. */ }
};

class Boss : public Enemy
{
public:
    void SpecialAttack() { /* Don tan cong rieng cua Boss. */ }
};
```

`class Boss : public Enemy` nghĩa là Boss công khai kế thừa Enemy. Một Boss có phần Enemy, dùng được các member public được kế thừa, và có thể thêm hành vi riêng. Quan hệ nên mang ý nghĩa **Boss là một loại Enemy**, không chỉ là cách tránh viết lại vài dòng code.

Với public inheritance không mơ hồ trong ví dụ này, `Enemy&` hoặc `Enemy*` có thể tham chiếu/trỏ tới phần Enemy của một Boss. Điều đó không tự làm mọi method trở thành virtual. Member private của Enemy vẫn không được Boss truy cập trực tiếp.

### 12.1.2. Không virtual: chọn hàm theo kiểu tĩnh

**Chương trình hoàn chỉnh C++17, một file `Main.cpp`.** Chạy độc lập với các ví dụ Animal/Dog khác bên dưới; không dán các định nghĩa class cùng tên vào cùng một file.

```cpp
// example: cpp-12-1-static-dispatch; file: Main.cpp
#include <iostream>

class Animal
{
public:
    void MakeSound() const
    {
        std::cout << "Unknown\n";
    }
};

class Dog : public Animal
{
public:
    void MakeSound() const
    {
        std::cout << "Woof\n";
    }
};

int main()
{
    Dog dog;
    Animal& animal = dog;
    animal.MakeSound();
    dog.MakeSound();
}
```

**Kết quả mong đợi:**

```text
Unknown
Woof
```

`animal` có kiểu tĩnh `Animal&`, nên lời gọi non-virtual `animal.MakeSound()` chọn `Animal::MakeSound`. `dog.MakeSound()` được gọi qua tên có kiểu Dog nên chọn hàm của Dog. Hàm cùng tên của Dog trong ví dụ này **không override** một virtual function; nó che tên hàm của base.

Ví dụ dùng một Dog cục bộ và reference mượn. Không có việc xóa đối tượng qua base pointer trong chương trình này.

### 12.1.3. Có virtual: chọn hành vi theo đối tượng thực

**Chương trình hoàn chỉnh C++17, một file `Main.cpp` riêng:**

```cpp
// example: cpp-12-1-virtual-dispatch; file: Main.cpp
#include <iostream>

class Animal
{
public:
    virtual void MakeSound() const
    {
        std::cout << "Unknown\n";
    }

    virtual ~Animal() = default;
};

class Dog : public Animal
{
public:
    void MakeSound() const override
    {
        std::cout << "Woof\n";
    }
};

int main()
{
    Dog dog;
    Animal& animal = dog;
    Animal* pointer = &dog;
    animal.MakeSound();
    pointer->MakeSound();
}
```

**Kết quả mong đợi:**

```text
Woof
Woof
```

Hai đường truy cập có kiểu base nhưng cùng dẫn tới một object Dog. Vì method của base là virtual và Dog override hợp lệ, lời gọi thông thường qua reference/pointer chọn hành vi của Dog tại runtime — **dynamic dispatch**.

| Cú pháp | Ý nghĩa |
|---|---|
| `virtual void MakeSound() const` | Khai báo method có thể được override để dispatch động |
| `void MakeSound() const override` | Yêu cầu compiler kiểm tra đây là override hợp lệ |
| `: public Animal` | Kế thừa công khai Animal |
| `Animal&` / `Animal*` | Đường truy cập kiểu base tới object phù hợp |
| `virtual ~Animal() = default;` | Destructor virtual dùng cách xử lý mặc định; vai trò đầy đủ ở bài 12.2 |

`override` không tự tạo ra quan hệ kế thừa hay tự biến một hàm không khớp thành virtual. Ví dụ base có `MakeSound() const` nhưng derived viết `MakeSound() override` thiếu `const`, compiler báo lỗi. Nhờ vậy sai chữ ký không âm thầm trở thành hàm khác.

**Overload khác override:** overload là nhiều hàm cùng tên với danh sách tham số khác nhau; override là method derived ghi đè virtual method của base theo các điều kiện về chữ ký. Đối với bài này, giữ tên, tham số, `const` và kiểu trả về tương ứng giống nhau.

Không phải mọi method đều cần `virtual`. Dùng virtual khi chương trình cần chọn hành vi theo kiểu động của object thông qua một giao diện chung. Không thêm nó chỉ vì method nằm trong class.

**Nhận diện để đọc bài tổng kết:** Copy một object derived vào object base theo giá trị có thể làm mất phần derived — object slicing. Muốn một danh sách giữ các object đa hình, [Final Assessment](#cpp-17-2) dùng `vector<unique_ptr<Enemy>>`, không dùng `vector<Enemy>` để kỳ vọng giữ đầy đủ Boss. Đây là mối nối đọc hiểu; thiết kế đa hình chuyên sâu chưa phải yêu cầu ở bài 12.1. `protected` cho phép truy cập từ class con theo quy tắc kế thừa, không cho toàn bộ code ngoài quyền như public; ưu tiên giao diện rõ ràng thay vì mở toàn bộ dữ liệu cho class con.

### 12.1.4. Tự kiểm tra và thực hành

1. Trong ví dụ không virtual, vì sao cùng một Dog lại cho `Unknown` qua `Animal&` và `Woof` qua tên `dog`? Khi thêm virtual, điều gì quyết định hàm được gọi?
2. Nếu bỏ `const` ở method Dog nhưng giữ `override`, chương trình có biên dịch không? Compiler đang bảo vệ điều gì?

**Bài thực hành — Animal / Dog Virtual Test:** Tự viết hai phiên bản riêng có và không có virtual. Thêm một loại động vật thứ hai có âm thanh khác; quan sát lời gọi qua base reference và base pointer.

**Tiêu chí đạt:** Dự đoán đúng output trước khi chạy; dùng public inheritance có ý nghĩa; dùng `override` ở derived; giải thích được kiểu tĩnh và object thực; không tạo/xóa sai ownership chỉ để thử virtual. Chưa yêu cầu pure virtual, RTTI, object slicing hay đa kế thừa.

---

<a id="cpp-12-2"></a>
## Bài 12.2 — Constructor lớp cha, destructor và con trỏ `this`

**Mục tiêu:** Theo dõi thứ tự tạo/hủy base và derived; khởi tạo base có constructor tham số; dùng `this` khi tên parameter trùng tên member; giữ ownership đúng khi quản lý derived qua base.

**Cần biết trước:** Bài 11 và 12.1, `std::unique_ptr`, truyền `const std::string&`. Ví dụ Animal/Dog ở chương này độc lập với các định nghĩa cùng tên của chương trước.

### 12.2.1. Khởi tạo phần lớp cha

Một object Dog chứa phần Animal. Trước khi thân constructor Dog chạy, phần Animal cần được khởi tạo.

**Đoạn minh họa cú pháp — constructor Dog nằm trong class Dog kế thừa Animal:**

```cpp
Dog() : Animal("Dog")
{
    // Than constructor Dog chay sau khi phan Animal da khoi tao.
}
```

Trong ví dụ đầy đủ dưới đây, Animal chỉ có constructor nhận tên nên Dog phải cung cấp đối số thích hợp cho base. Nếu bỏ `Animal("Dog")`, compiler sẽ cần một constructor mặc định của Animal nhưng class này không có. Nếu một base khác có default constructor phù hợp, derived có thể để base được khởi tạo mặc định.

Thứ tự căn bản đang học: **base được khởi tạo trước derived; khi hủy, derived trước base**. Các member được khởi tạo theo thứ tự khai báo và được hủy theo thứ tự ngược lại. Vì vậy destructor derived còn có thể sử dụng phần base trước khi base bị hủy.

### 12.2.2. Destructor và `= default`

Destructor có dạng `~TênClass()`, không có kiểu trả về và không nhận đối số. Nó được thực hiện khi object bị hủy: chẳng hạn hết scope với object cục bộ, hoặc khi owner giải phóng object cấp phát động.

`= default` yêu cầu compiler dùng cách triển khai mặc định cho một special member function. Ở mức này chỉ cần hiểu ví dụ `virtual ~Animal() = default;`: destructor vẫn tồn tại và vẫn virtual, nhưng không có phần xử lý tùy viết như in log. Nó **không phải** pure virtual; pure virtual dùng `= 0` và chưa thực hành trong lộ trình này.

Khi sở hữu một derived object qua base pointer và xóa qua pointer đó, base cần destructor public virtual trong mô hình đang dùng. Trong C++17, xóa derived qua base pointer mà base không có virtual destructor là **hành vi không xác định**, không thể chỉ kết luận “quên chạy destructor con”. `std::unique_ptr<Base>` với deleter mặc định cũng cần điều kiện này khi nó sở hữu một Derived.

Trong các class chỉ chứa dữ liệu tự quản được và không có yêu cầu đặc biệt, không cần tự viết destructor chỉ để có đủ cú pháp. Destructor in log bên dưới nhằm quan sát lifetime.

### 12.2.3. `this` chỉ tới object đang được gọi

Trong method không static của C++17, `this` là pointer tới object hiện tại. `this->name` truy cập member của object đó; `*this` là biểu thức truy cập chính object theo tham chiếu, không phải tạo bản sao.

**Đoạn minh họa — đặt bên trong class có member `std::string name`:**

```cpp
void SetName(const std::string& name)
{
    this->name = name; // Ben trai: member; ben phai: parameter.
}
```

Ở đây parameter `name` che tên member. Nếu viết `name = name`, hai tên đều chỉ parameter; với parameter `const std::string&` trong ví dụ, phép gán còn không hợp lệ. `this->` giúp diễn đạt rõ object nào nhận giá trị. Khi không trùng tên, tên member không có `this->` thường đã đủ rõ.

Việc cố ý đặt trùng tên trong đoạn minh họa có thể tạo cảnh báo MSVC C4458 ở mức `/W4`. Chương trình hoàn chỉnh bên dưới dùng parameter `newName` để tránh cảnh báo này; `this->name = newName` vẫn gán giá trị vào cùng member `name` của object hiện tại.

### 12.2.4. Ví dụ chạy được — quan sát đầy đủ vòng đời

**Chương trình hoàn chỉnh C++17, một file `Main.cpp`:**

```cpp
// example: cpp-12-2-lifetime; file: Main.cpp
#include <iostream>
#include <memory>
#include <string>

class Animal
{
private:
    std::string name;

public:
    explicit Animal(const std::string& initialName) : name(initialName)
    {
        std::cout << "Animal created: " << name << '\n';
    }

    virtual ~Animal()
    {
        std::cout << "Animal destroyed: " << name << '\n';
    }

    void SetName(const std::string& newName)
    {
        this->name = newName;
    }

    const std::string& GetName() const
    {
        return name;
    }
};

class Dog : public Animal
{
public:
    Dog() : Animal("Dog")
    {
        std::cout << "Dog created\n";
    }

    ~Dog() override
    {
        std::cout << "Dog destroyed\n";
    }
};

int main()
{
    std::cout << "Before scope\n";
    {
        std::unique_ptr<Animal> animal = std::make_unique<Dog>();
        animal->SetName("Rex");
        std::cout << "Name: " << animal->GetName() << '\n';
    }
    std::cout << "After scope\n";
}
```

**Kết quả mong đợi:**

```text
Before scope
Animal created: Dog
Dog created
Name: Rex
Dog destroyed
Animal destroyed: Rex
After scope
```

`animal` là `unique_ptr<Animal>` nhưng object được tạo là Dog. Owner chỉ có một đối tượng để quản lý; virtual destructor cho phép hủy đúng Dog rồi Animal. Không có lệnh `delete` thủ công trong main.

`GetName()` trả tham chiếu tới member chuỗi, và tham chiếu được đọc khi Animal còn sống. Không giữ tham chiếu này để dùng sau scope. `SetName` là method thay đổi trạng thái, còn `GetName` là method `const`.

### 12.2.5. Tự kiểm tra và thực hành

1. Vì sao dòng `Animal created` xuất hiện trước `Dog created`, nhưng dòng hủy Dog lại xuất hiện trước dòng hủy Animal? Owner bị hủy ở vị trí nào?
2. Trong `this->name = name`, mỗi tên `name` chỉ đối tượng nào? `virtual ~Animal() = default;` khác `virtual void F() = 0;` về ý nghĩa đang học ra sao?

**Bài thực hành — Animal / Dog Lifetime:** Tự tạo class base có constructor tham số và một derived class gọi constructor đó. Ghi log thứ tự tạo/hủy, quản lý derived qua `unique_ptr<Base>`, thêm setter/getter dùng `this` đúng ngữ cảnh.

**Tiêu chí đạt:** Base được khởi tạo hợp lệ; giải thích đúng thứ tự log; base destructor public virtual cho dạng sở hữu đã chọn; không `delete` thủ công đối tượng đang thuộc unique_ptr; không trả/giữ tham chiếu sau lifetime; không trộn nhiều định nghĩa Animal/Dog từ các ví dụ. Pure virtual/abstract class, object slicing, RTTI sâu và kế thừa phức tạp vẫn là nội dung chưa học có hệ thống.

---

<a id="cpp-13"></a>
## Bài 13 — Function template và class template căn bản

**Mục tiêu:** Viết một cách xử lý dùng được với nhiều kiểu phù hợp; hiểu suy luận tham số kiểu và đối số template tường minh; tổ chức function template trong header; đặt điều kiện dùng cho hàm clamp.

**Cần biết trước:** Hàm và overload, kiểu dữ liệu, so sánh, class/constructor, header/source. Class template đã được giới thiệu bằng ví dụ; trọng tâm thực hành của bài là function template. Chưa yêu cầu thiết kế template nâng cao.

### 13.1. Function template: một khuôn hàm, nhiều kiểu phù hợp

**Đoạn định nghĩa minh họa — chưa phải chương trình độc lập:**

```cpp
template <typename T>
T GetMax(T a, T b)
{
    return a > b ? a : b;
}
```

`template <typename T>` khai báo tham số kiểu tên T. `T GetMax(T a, T b)` mô tả hàm nhận hai tham số cùng kiểu T và trả giá trị kiểu T. Khi sử dụng, compiler suy luận hoặc nhận chỉ định T và làm việc với một phiên bản cụ thể — **instantiation**. Đây là quá trình ở compile-time, không phải kiểu dữ liệu tự thay đổi tại runtime.

Template không có nghĩa “mọi kiểu đều dùng được”. `GetMax` ở đây cần kiểu hỗ trợ phép `>` phù hợp và việc truyền/trả giá trị theo cách hàm sử dụng. Các ví dụ int/float đáp ứng yêu cầu này; không suy rộng rằng một class bất kỳ sẽ tự nhiên dùng được.

**Đoạn gọi minh họa — sau khi compiler đã thấy định nghĩa GetMax:**

```cpp
int a = GetMax(10, 20);                // Suy ra T = int; ket qua 20.
float b = GetMax(5.5f, 3.2f);          // Suy ra T = float; ket qua 5.5f.
float c = GetMax<float>(10, 5.5f);     // Chi dinh T = float; 10 duoc chuyen thanh float.

// GetMax(10, 5.5f);                  // Loi: int va float suy ra hai T khac nhau.
```

Với `GetMax(10, 5.5f)`, compiler không tự chọn float để giải quyết hai kết quả deduction mâu thuẫn của cùng một T. `GetMax<float>(...)` chỉ định kiểu đích rồi áp dụng chuyển đổi đối số hợp lệ. Chuyển kiểu vẫn có quy tắc và nguy cơ mất chính xác với giá trị khác; template không loại bỏ vấn đề đó.

`GetMax<int>(a, b)` là lời gọi với đối số template tường minh. Nó có thể khiến compiler cần tạo phiên bản tương ứng; không nên hiểu cú pháp này là một lệnh “instantiation” riêng biệt áp dụng ở mọi ngữ cảnh.

### 13.2. Class template

**Đoạn khai báo minh họa — class và các object được dùng lại trong chương trình hoàn chỉnh cuối bài:**

```cpp
template <typename T>
class Stat
{
private:
    T value;

public:
    explicit Stat(T initial) : value(initial) {}
    T GetValue() const { return value; }
};

Stat<int> hp{100};
Stat<float> speed{5.5f};
```

`Stat<int>` và `Stat<float>` là hai kiểu class khác nhau được hình thành từ cùng khuôn. Member `value` của kiểu thứ nhất là int; của kiểu thứ hai là float. Constructor khởi tạo value từ initial; getter `const` trả một giá trị cho người gọi.

`explicit` tiếp tục có ý nghĩa ngăn chuyển đổi ngầm ngoài ý muốn vào object Stat. Ví dụ chỉ dùng kiểu nhỏ nên getter trả theo giá trị là hợp lý. Chưa cần mở rộng thành container tổng quát, specialization hay quy tắc copy/move của class template.

### 13.3. `std::array` và `std::vector` cũng là template

**Đoạn minh họa, cần `<array>` và `<vector>`:**

```cpp
std::vector<int> values;
std::array<float, 3> threeNumbers{};
```

`std::vector<int>` dùng đối số kiểu int. `std::array<float, 3>` có cả đối số kiểu float và đối số giá trị hằng 3. Kích thước là một phần của kiểu: `std::array<float, 3>` khác kiểu với `std::array<float, 4>`.

`threeNumbers{}` khởi tạo các float bằng 0.0f. Nếu chỉ viết `std::array<float, 3> threeNumbers;` như biến cục bộ, không được giả định các phần tử float đã có giá trị để đọc.

### 13.4. Template thường được định nghĩa trong header

Compiler thường phải thấy định nghĩa template khi cần instantiation. Vì vậy function template thông thường được đặt đầy đủ trong header, thay vì chỉ khai báo trong header rồi giấu thân hàm trong `.cpp` như một hàm thường. Có kỹ thuật khác như explicit instantiation, nhưng chưa thuộc phạm vi bài này.

**Nội dung header minh họa `GameMath.h` — chưa phải chương trình chạy độc lập:**

```cpp
#pragma once

template <typename T>
T GetMax(T a, T b)
{
    return a > b ? a : b;
}

template <typename T>
T ClampValue(T value, T minValue, T maxValue)
{
    // Tien dieu kien: minValue <= maxValue; float trong vi du khong la NaN.
    if (value < minValue) return minValue;
    if (value > maxValue) return maxValue;
    return value;
}
```

`#pragma once` vẫn chỉ ngăn include lặp trong một translation unit. Việc nhiều `.cpp` dùng định nghĩa template trong cùng header là cách tổ chức thông thường, có quy tắc riêng; không suy ra mọi hàm thường cũng được đặt thân trong header mà không quan tâm `inline`/ODR.

### 13.5. Hợp đồng của ClampValue và `std::clamp`

Clamp giới hạn một giá trị vào đoạn `[minValue, maxValue]`: thấp hơn min thì lấy min; cao hơn max thì lấy max; ở giữa thì giữ nguyên. **Điều kiện đầu vào: `minValue <= maxValue`.** Các ví dụ số thực ở đây dùng giá trị thông thường, không có NaN.

Hàm tự viết trên không tự sửa một khoảng bị đảo. Chẳng hạn `ClampValue(50, 100, 0)` trả 100 theo nhánh đầu, nhưng `[100, 0]` không phải khoảng hợp lệ. Nếu giới hạn đến từ người dùng, kiểm tra chúng trước khi gọi. Không âm thầm hoán đổi giới hạn trừ khi đó là yêu cầu thiết kế đã chọn.

**Đoạn gọi minh họa với khoảng hợp lệ:**

```cpp
int health = ClampValue<int>(150, 0, 100);           // 100.
float speed = ClampValue<float>(-2.5f, 0.0f, 10.0f); // 0.0f.
```

Trong bài GameMath gốc, đặt max speed là `100.0f` thay cho yêu cầu `10.0f` là **sai yêu cầu test**, không phải sai cơ chế template. Khi kiểm thử, cần đối chiếu cả dữ liệu giới hạn và kết quả.

C++17 có `std::clamp` trong `<algorithm>`; ưu tiên thư viện chuẩn khi phù hợp. Tự viết ClampValue ở đây nhằm luyện template. Khi dùng phiên bản chuẩn, vẫn phải bảo đảm khoảng hợp lệ; đảo hai giới hạn vi phạm tiền điều kiện của hàm.

Một khác biệt quan trọng: ClampValue của bài trả `T` theo giá trị, còn `std::clamp` trả `const T&`. Trong cách dùng đơn giản này, **lưu kết quả vào biến giá trị** (`int result` hoặc `auto result`) để tránh giữ tham chiếu tới đối số tạm đã hết lifetime. Không viết `const auto& result = std::clamp(150, 0, 100);` rồi dùng result ở câu lệnh sau.

### 13.6. Ví dụ chạy được — GameMath và Stat

**Chương trình hoàn chỉnh C++17, một file `Main.cpp`.** Các template được định nghĩa ở đầu file cho dễ chạy thử. Khi thực hành tách file, đưa GetMax/ClampValue vào `GameMath.h` và include header, không giữ thêm một bản định nghĩa trùng trong Main.cpp.

```cpp
// example: cpp-13-gamemath; file: Main.cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <vector>

template <typename T>
T GetMax(T a, T b)
{
    return a > b ? a : b;
}

template <typename T>
T ClampValue(T value, T minValue, T maxValue)
{
    // Tien dieu kien: minValue <= maxValue; cac gia tri float khong la NaN.
    if (value < minValue) return minValue;
    if (value > maxValue) return maxValue;
    return value;
}

template <typename T>
class Stat
{
private:
    T value;

public:
    explicit Stat(T initial) : value(initial) {}
    T GetValue() const { return value; }
};

int main()
{
    std::cout << "Max int: " << GetMax(10, 20) << '\n';
    std::cout << "Max float: " << GetMax(5.5f, 3.2f) << '\n';
    std::cout << "Explicit float: " << GetMax<float>(10, 5.5f) << '\n';

    const int minimumHP = 0;
    const int maximumHP = 100;

    const int health = ClampValue<int>(150, minimumHP, maximumHP);
    const float speed = ClampValue<float>(-2.5f, 0.0f, 10.0f);
    const int standardHealth = std::clamp(150, minimumHP, maximumHP);
    std::cout << "Clamped HP: " << health << '\n';
    std::cout << "Clamped speed: " << speed << '\n';
    std::cout << "Standard clamp: " << standardHealth << '\n';

    const Stat<int> hpStat{100};
    const Stat<float> speedStat{5.5f};
    std::cout << "Stats: " << hpStat.GetValue()
              << ' ' << speedStat.GetValue() << '\n';

    std::vector<int> values{1, 2};
    std::array<float, 3> threeNumbers{};
    std::cout << "Containers: " << values.size()
              << ' ' << threeNumbers.size() << '\n';
}
```

**Kết quả mong đợi:**

```text
Max int: 20
Max float: 5.5
Explicit float: 10
Clamped HP: 100
Clamped speed: 0
Standard clamp: 100
Stats: 100 5.5
Containers: 2 3
```

### 13.7. Tự kiểm tra và thực hành

1. Vì sao `GetMax(10, 5.5f)` không suy ra được một T, nhưng `GetMax<float>(10, 5.5f)` hợp lệ? `Stat<int>` và `Stat<float>` có phải cùng một kiểu không?
2. Trước khi gọi clamp, cần kiểm tra quan hệ nào giữa min và max? Vì sao nên nhận kết quả `std::clamp` bằng một biến giá trị trong các ví dụ dùng đối số tạm?

**Bài thực hành — Generic Game Math:** Tự viết các function template thao tác chỉ số game cho int và float trong `GameMath.h`. Kiểm tra một giá trị ở dưới min, đúng min, giữa đoạn, đúng max và trên max; phía gọi nhận diện khoảng đảo trước khi dùng hàm. Bổ sung một ví dụ Stat để giải thích tham số kiểu, không cần xây class template nâng cao.

**Tiêu chí đạt:** Header dùng được từ nơi gọi; hiểu kiểu T được suy ra hoặc chỉ định; kết quả đúng với cả int/float; tốc độ có giới hạn `10.0f` đúng yêu cầu; không chạy `std::clamp` với khoảng đảo; không giữ dangling reference từ kết quả trả về; giải thích được vì sao code template cần có định nghĩa tại nơi instantiation thông thường. Chưa yêu cầu specialization, concepts, variadic templates hay perfect forwarding.

---

---

<a id="cpp-14"></a>

## Bài 14 — Static, const theo đường truy cập và namespace

**Mục tiêu:** Phân biệt dữ liệu của từng object với dữ liệu dùng chung; đọc đúng các dạng const pointer; tổ chức tên bằng namespace.  
**Cần biết trước:** [Reference/pointer](#cpp-09), [class và const method](#cpp-11). Nguồn tổng kết ghi bài Enemy Tracker đã thực hành; các ví dụ dưới được biên tập lại để ôn.

### 14.1. Cùng từ khóa static, ý nghĩa phụ thuộc vị trí

Biến cục bộ thông thường được tạo cho mỗi lần thực thi đi qua khai báo. **Local static** tồn tại suốt chương trình sau khi được khởi tạo; tên của nó vẫn chỉ dùng trong scope khai báo. Vì vậy có thể nhớ số lần gọi giữa các lượt. Với khởi tạo động của local static, việc khởi tạo diễn ra khi lần đầu đi qua khai báo và chỉ hoàn tất một lần; không phải mọi biến static đều đợi tới lúc chạy hàm mới được khởi tạo.

**Static data member** thuộc class, không phải mỗi object một bản. Một method static không có `this`; nó không thể tự đọc `health` của một Enemy cụ thể nếu không nhận object/địa chỉ để truy cập. Dùng `EnemyTracker::GetCreated()` làm rõ rằng câu hỏi hướng tới class.

| Vị trí | Ý nghĩa cần nhớ | Ví dụ mục đích |
|---|---|---|
| `static int calls` trong hàm | Giữ giá trị giữa các lần gọi, tên có phạm vi cục bộ | Đếm số lần gọi một thao tác |
| `static int created` trong class | Một thành viên dữ liệu dùng chung | Đếm những lần tạo được thiết kế để ghi nhận |
| `static int GetCreated()` trong class | Method không gắn với `this` | Đọc dữ liệu dùng chung |
| `static` ở phạm vi namespace | Internal linkage cho tên phù hợp trong translation unit | Nhận diện khi đọc code nhiều file; chưa cần áp dụng rộng |

### 14.2. Ví dụ chạy được — đếm đúng điều được đặt tên

```cpp
// example: cpp-14-static; file: Main.cpp
#include <iostream>

namespace GameConfig {
    constexpr int MaxEnemies = 3;
}

int RegisterCall() {
    static int calls = 0;
    return ++calls;
}

class EnemyTracker {
    static int created;
public:
    EnemyTracker() { ++created; }
    static int GetCreated() { return created; }
};
int EnemyTracker::created = 0;

int main() {
    std::cout << "Calls: " << RegisterCall() << ' ' << RegisterCall() << '\n';
    {
        EnemyTracker first;
        EnemyTracker second;
        std::cout << "Created in scope: " << EnemyTracker::GetCreated() << '\n';
    }
    std::cout << "Created after scope: " << EnemyTracker::GetCreated() << '\n';
    std::cout << "Limit: " << GameConfig::MaxEnemies << '\n';
}
```

**Kết quả mong đợi:**

```text
Calls: 1 2
Created in scope: 2
Created after scope: 2
Limit: 3
```

`created` không giảm khi ra khỏi scope: mẫu này đếm lần chạy constructor mặc định, **không đếm object đang sống**. Copy/move mặc định không tự gọi constructor mặc định này để tăng biến. Nếu bài toán thật cần bộ đếm lifetime chính xác thì phải thiết kế cả copy, move, destruction; phần đó vượt phạm vi ví dụ. Không thêm destructor chỉ để làm cho tên bộ đếm “có vẻ đúng”.

Khai báo `static int created;` trong class và định nghĩa `int EnemyTracker::created = 0;` ngoài class là hai bước khác nhau. Ở dự án nhiều file, đặt định nghĩa thông thường trong đúng một `.cpp`. **Mở rộng C++17:** `inline static int created = 0;` cho phép định nghĩa ngay trong class; chưa cần viết cả hai cách đồng thời. Local static được bảo vệ khi khởi tạo không có nghĩa phép `++calls` an toàn khi nhiều thread gọi cùng lúc.

### 14.3. Const bảo vệ đường truy cập nào?

Đọc `const` cùng kiểu được bổ nghĩa, thay vì nghĩ “có const là mọi thứ bất biến”. Với `const int*`, không sửa int **qua pointer đó**; object gốc có thể vẫn là một `int` sửa được qua tên khác. Với `int* const`, chính biến pointer không được trỏ lại nhưng int đích vẫn sửa được.

| Khai báo | Sửa `*p` qua p | Gán p sang địa chỉ khác |
|---|---|---|
| `int* p` | Có, khi đích hợp lệ và sửa được | Có |
| `const int* p` | Không | Có |
| `int* const p = &hp` | Có, khi đích hợp lệ và sửa được | Không |
| `const int* const p = &hp` | Không | Không |

Đoạn minh họa:

```cpp
int hp = 100;
int otherHP = 50;
const int* view = &hp;
hp = 80;             // Hợp lệ; *view lúc này cũng đọc được 80.
view = &otherHP;      // Hợp lệ: đổi đích của pointer to const.
int* const fixed = &hp;
*fixed = 70;          // Hợp lệ: fixed vẫn trỏ tới hp.
// *view = 0;         // Lỗi biên dịch: không sửa qua view.
// fixed = &otherHP;  // Lỗi biên dịch: không gán lại const pointer.
```

`const T&` dùng khi cần tham chiếu chỉ đọc; với getter trả số nguyên nhỏ, `int GetHealth() const` thường rõ hơn `const int&`. Trả reference có thể làm nơi gọi phụ thuộc lifetime của object chứa dữ liệu. Const method không làm mọi object bên ngoài trở thành const và không tự bảo đảm thread safety.

### 14.4. Namespace và phạm vi tên

`namespace GameConfig { ... }` gom tên liên quan; `GameConfig::MaxEnemies` chỉ rõ nơi tên thuộc về. `std::vector` và `std::cout` dùng cùng ý tưởng scope. Namespace không tạo một object cấu hình và không tự làm biến trở thành hằng. Tránh `using namespace std;` trong header vì ảnh hưởng các file include header đó; ưu tiên tên đầy đủ hoặc khai báo using có phạm vi hẹp.

### Tự kiểm tra và thực hành

- **Tự giải thích:** Tại sao bộ đếm ví dụ vẫn bằng 2 sau dấu `}`? `const int*` có ngăn `hp = 80` không? Vì sao method static không có `this`?
- **Tự viết:** Enemy Tracker với bộ đếm có tên đúng trách nhiệm; đặt giới hạn enemy trong namespace; getter chỉ đọc trả kiểu phù hợp.
- **Đạt khi:** Giải thích rõ đang đếm “lần tạo qua constructor nào” hay “đang sống”, thử nhiều lần gọi và không gán cho static những tính chất mà chương trình chưa thiết kế.

---

<a id="cpp-14-5"></a>

## Bài 14.5 — Chuyển đổi kiểu, named casts và explicit

**Mục tiêu:** Chọn chuyển đổi phù hợp, phân biệt kiểm tra lúc biên dịch với runtime, nhận diện mất dữ liệu và cast nguy hiểm.  
**Cần biết trước:** [Ép kiểu cơ bản](#cpp-02), [đa hình](#cpp-12-1), [const pointer](#cpp-14).

### 14.5.1. Chuyển kiểu không tự kiểm tra đúng yêu cầu gameplay

`float speed = 10;` là implicit conversion. `static_cast<float>(hp)` diễn đạt chuyển đổi tường minh. Cast không sửa được thuật toán đặt sai chỗ: `static_cast<float>(hp / maxHP)` vẫn chia nguyên trước, khác `static_cast<float>(hp) / maxHP`; cần kiểm tra `maxHP > 0` theo hợp đồng phép chia.

Với giá trị biểu diễn được, đổi float sang int bỏ phần lẻ theo hướng về 0: `12.8f` thành 12, `-12.8f` thành -12. Không dùng cast như phép làm tròn gần nhất. Giá trị ngoài miền int, vô cực hoặc NaN không được giải quyết an toàn chỉ nhờ `static_cast<int>`; kiểm tra miền trước. Narrowing có chủ ý vẫn có thể mất độ chính xác.

### 14.5.2. Bốn named casts, bốn ý định khác nhau

| Cú pháp | Ý định | Điều kiện và giới hạn |
|---|---|---|
| `static_cast<T>(value)` | Chuyển số/enum hoặc chuyển đổi tĩnh được phép | Không kiểm tra runtime rằng base object thực sự là derived; có thể mất dữ liệu |
| `dynamic_cast<Derived*>(base)` | Kiểm tra kiểu động trong hierarchy đa hình | Downcast runtime cần base polymorphic và RTTI phù hợp; thất bại trả null |
| `const_cast<T>(value)` | Thay đổi cv-qualification của pointer/reference | Không cho quyền sửa object thật sự được tạo là const; làm vậy là UB |
| `reinterpret_cast<T>(value)` | Một số chuyển đổi biểu diễn/địa chỉ mức thấp | Không tạo object kiểu mới, không bảo đảm dereference hợp lệ |

Phần phải thực hành là `static_cast` và `dynamic_cast`; `const_cast`/`reinterpret_cast` được học để nhận diện và tránh dùng bừa. C-style cast `(int)x` che khuất lựa chọn chuyển đổi và không thay cho kiểm tra `dynamic_cast`.

### 14.5.3. Ví dụ chạy được — kiểm tra Boss thật

```cpp
// example: cpp-14-5-casts; file: Main.cpp
#include <iostream>

class Enemy {
public:
    virtual ~Enemy() = default;
};
class Boss : public Enemy {};

bool IsBoss(Enemy* enemy) {
    return dynamic_cast<Boss*>(enemy) != nullptr;
}

int main() {
    Enemy ordinary;
    Boss boss;
    std::cout << std::boolalpha;
    std::cout << "Ordinary: " << IsBoss(&ordinary) << '\n';
    std::cout << "Boss: " << IsBoss(&boss) << '\n';
    std::cout << "Null: " << IsBoss(nullptr) << '\n';
    std::cout << "Truncated: " << static_cast<int>(-12.8f) << '\n';
}
```

**Kết quả mong đợi:**

```text
Ordinary: false
Boss: true
Null: false
Truncated: -12
```

Trong mẫu, destructor virtual khiến Enemy là polymorphic. Một Enemy có chuỗi tên `"Boss"` vẫn là Enemy; tên hiển thị không đổi dynamic type. `dynamic_cast` không thay nhu cầu thiết kế đúng: nếu chỉ cần gọi hành vi chung thì virtual dispatch có thể phù hợp hơn việc rải nhiều kiểm tra kiểu con.

Với cast tham chiếu `dynamic_cast<Boss&>(enemy)`, thất bại **ném `std::bad_cast`**, không trả nullptr. Đây là lưu ý đọc code; cách xử lý exception đầy đủ chưa thuộc bài luyện chính. Cast qua pointer trong ví dụ giúp kiểm tra thất bại bằng điều kiện đã biết. Cast cũng không cứu dangling pointer: object phải còn sống và con trỏ đầu vào hợp lệ.

### 14.5.4. Explicit không phải một phép cast

`explicit` hạn chế một số chuyển đổi ngầm qua constructor/conversion function. Đoạn minh họa độc lập:

```cpp
class Health {
    int value;
public:
    explicit Health(int initial) : value(initial) {}
    int Get() const { return value; }
};
Health hp{100};       // Direct initialization: hợp lệ.
// Health other = 100; // Copy initialization: không dùng explicit constructor này.
```

Ví dụ trên chỉ minh họa chuyển đổi, chưa áp dụng invariant HP. Constructor nhiều tham số cũng được phép explicit; không suy ra “explicit chỉ dành cho constructor một tham số” hoặc “explicit làm code nhanh hơn”.

### Tự kiểm tra và thực hành

- **Tự giải thích:** Vì sao `static_cast` sau phép chia có thể quá muộn? Cast reference thất bại khác pointer thế nào? Tên `Boss` và kiểu Boss khác nhau ra sao?
- **Tự viết:** Một danh sách Enemy/Boss còn sống; thử downcast thành công, không thành công và null; dùng kết quả chỉ sau khi kiểm tra.
- **Đạt khi:** Không sửa const object thông qua cast, không thử chạy UB để dự đoán output, giải thích được mục đích trước khi thêm cast.

---

<a id="cpp-15"></a>

## Bài 15 — Preprocessor, forward declaration và dependency

**Mục tiêu:** Phân biệt cấu hình tiền xử lý với điều kiện runtime; giảm include vòng bằng khai báo trước mà vẫn build được từng `.cpp`.  
**Cần biết trước:** [Header/source](#cpp-06-5), [class và method](#cpp-11).

### 15.1. Tiền xử lý diễn ra trước compiler C++

Macro không phải biến có kiểu. `#if` quyết định phần văn bản nào được đưa tới compiler; `if` thông thường là câu lệnh C++ làm việc với giá trị. Nếu đoạn code bị loại bởi `#if`, compiler không phân tích nó như một nhánh runtime thông thường.

```cpp
#define ENABLE_COMBAT_LOG 0
#if ENABLE_COMBAT_LOG
    // Chỉ được giữ lại khi biểu thức tiền xử lý khác 0.
#endif
#ifdef ENABLE_COMBAT_LOG
    // Vẫn được giữ lại: macro có tồn tại, dù giá trị bằng 0.
#endif
```

Dùng `constexpr int MaxHP = 100;` cho hằng số gameplay có kiểu. Dùng macro khi thật sự cần cấu hình tiền xử lý/khả năng có mặt của đoạn code. Macro hàm thay văn bản có thể đánh giá đối số nhiều lần hoặc gặp lỗi ưu tiên toán tử; đừng thay một hàm nhỏ đã rõ nghĩa bằng macro chỉ để tập cú pháp.

Header guard chuẩn có dạng `#ifndef PROJECT_PLAYER_H`, `#define PROJECT_PLAYER_H`, nội dung, `#endif`. `#pragma once` là cách các compiler phổ biến hỗ trợ để tránh include lặp trong một translation unit. Cả hai không chữa định nghĩa hàm thường bị lặp ở nhiều `.cpp` và không làm một type đang incomplete trở thành đầy đủ.

### 15.2. Khai báo một kiểu tồn tại khác với biết cấu trúc kiểu

`class Player;` cho compiler biết Player là tên class, nhưng chưa biết member, kích thước hay bố cục. Vì thế khai báo `Player*`, `Player&` hoặc một method nhận `Player&` thường chưa cần định nghĩa đầy đủ. Khi gọi `player.TakeDamage(...)`, chứa `Player` theo giá trị, kế thừa từ Player hay dùng `sizeof(Player)`, phải nhìn thấy định nghĩa phù hợp.

| Nhu cầu trong header | Chỉ `class Player;` có đủ? |
|---|---|
| Khai báo `Player* target;` hoặc hàm nhận `Player&` | Đủ cho các khai báo này |
| Thành viên `Player target;` theo giá trị | Chưa đủ |
| Inline method gọi `target.GetHealth()` | Chưa đủ |
| `class Enemy : public Player` | Chưa đủ |

Pointer/reference ở đây không sở hữu. Forward declaration không kéo dài lifetime object và không xóa nhu cầu kiểm tra null nếu thiết kế dùng pointer có thể rỗng. Với kiểu thư viện, include header chuẩn tương ứng; không tự khai báo lại `std::string` hoặc `std::vector` trong namespace std.

### 15.3. Ví dụ chạy được — Enemy biết giao diện tối thiểu

Tạo bốn file sau trong **một** project riêng. `Enemy.h` chỉ công bố method nhận Player&, còn `Enemy.cpp` include Player.h để biết cách gọi method. Build cả Enemy.cpp và Main.cpp.

```cpp
// example: cpp-15-dependencies; file: Player.h
#pragma once
class Player {
    int health = 100;
public:
    void TakeDamage(int amount) {
        if (amount <= 0) return;
        health = amount >= health ? 0 : health - amount;
    }
    int GetHealth() const { return health; }
};
```

```cpp
// example: cpp-15-dependencies; file: Enemy.h
#pragma once
class Player;
class Enemy {
public:
    void Attack(Player& target) const;
};
```

```cpp
// example: cpp-15-dependencies; file: Enemy.cpp
#include "Enemy.h"
#include "Player.h"
void Enemy::Attack(Player& target) const {
    target.TakeDamage(20);
}
```

```cpp
// example: cpp-15-dependencies; file: Main.cpp
#include "Player.h"
#include "Enemy.h"
#include <iostream>
#define ENABLE_COMBAT_LOG 0

int main() {
    Player player;
    Enemy enemy;
    enemy.Attack(player);
#if ENABLE_COMBAT_LOG
    std::cout << "Detailed combat log\n";
#endif
#ifdef ENABLE_COMBAT_LOG
    std::cout << "Log flag is defined\n";
#endif
    std::cout << "HP: " << player.GetHealth() << '\n';
}
```

**Kết quả mong đợi:**

```text
Log flag is defined
HP: 80
```

`TakeDamage` được định nghĩa trong class nên ngầm inline theo cách viết header thông thường ở đây. `Enemy::Attack` là định nghĩa ngoài class, được đặt đúng một lần trong Enemy.cpp. `inline` trong ngữ cảnh này giải quyết quy tắc định nghĩa; không phải lời hứa compiler sẽ tối ưu bỏ mọi lời gọi hàm.

### 15.4. Tìm lỗi theo đúng giai đoạn

Thiếu include đầy đủ ở Enemy.cpp có thể gây compile error về incomplete type. Có khai báo method nhưng quên build Enemy.cpp có thể gây linker error. Hai header include nhau có thể bị guard chặn khi một định nghĩa chưa được đọc; forward declaration phù hợp cắt dependency, không phải đổi thứ tự include bừa để tạm hết lỗi.

- **Tự kiểm tra:** Với cờ bằng 0, `#if` khác `#ifdef` thế nào? Vì sao Enemy.cpp cần Player.h mà Enemy.h chỉ cần khai báo trước?
- **Tự viết:** Tách combat thành các header/source, mỗi `.cpp` include trực tiếp thứ nó dùng; log có thể bật/tắt tại compile time.
- **Đạt khi:** Build được toàn bộ project, phân biệt compile/link/logic error; damage lớn hơn HP vẫn đưa HP về 0.

---

<a id="cpp-16"></a>

## Bài 16 — Copy/move và lambda trong xử lý danh sách

**Mục tiêu:** Phân biệt tạo mới/gán lại, copy/chuyển quyền sở hữu; dùng lambda với capture và số tham số đúng.  
**Cần biết trước:** [Container](#cpp-07), [reference](#cpp-08), [unique_ptr](#cpp-10), [class](#cpp-11). Chương này gom **hai buổi nguồn 16.1 (Copy/Move Inventory) và 16.2 (Lambda AOE)** thành một mạch đọc; không tạo thêm điểm chấm hoặc buổi đã học.

### 16.1. Copy construction, copy assignment và move

Một object mới được khởi tạo từ object khác là **construction**. Gán cho object đã tồn tại là **assignment**. Đây là trục khác với việc thao tác có copy hay move:

| Cách viết với vector đã có `original` | Đối tượng đích | Ý định |
|---|---|---|
| `auto copied = original;` | Tạo mới | Copy construction |
| `existing = original;` | Đã tồn tại | Copy assignment |
| `auto taken = std::move(original);` | Tạo mới | Cho phép chọn move construction phù hợp |
| `existing = std::move(taken);` | Đã tồn tại | Cho phép chọn move assignment phù hợp |

Với `vector<string>`, copy tạo dãy phần tử riêng: thêm item vào bản copy không thêm vào bản gốc. Copy raw pointer lại chỉ sao chép địa chỉ, không tự clone object đích. Vì vậy không suy ra “copy mọi kiểu đều có ownership độc lập”.

`std::move` trong `<utility>` biến biểu thức thành xvalue, cho phép overload phù hợp được chọn. Nó **không tự vận chuyển tài nguyên**, không tự hủy object nguồn và không hứa mọi kiểu đều có move nhanh. Nếu không có move operation phù hợp, một copy operation có thể được chọn; `std::move` một const object cũng thường không chọn được move nhận nguồn sửa được.

Sau move, nhiều kiểu thư viện như vector còn **hợp lệ nhưng trạng thái không xác định cụ thể**: có thể gán lại, hủy, hoặc gọi thao tác khi tiền điều kiện của thao tác được thỏa mãn. Đừng assert rằng mọi vector/string sau move luôn rỗng, đừng truy cập `[0]` mà chưa kiểm tra. `unique_ptr` có bảo đảm cụ thể: sau chuyển ownership thành công từ một nguồn khác đích, nguồn rỗng. Quy tắc tổng quát và bảo đảm riêng phải đọc tách nhau.

### 16.1.1. Ví dụ chạy được — Inventory và owner

```cpp
// example: cpp-16-inventory; file: Main.cpp
#include <iostream>
#include <memory>
#include <string>
#include <utility>
#include <vector>

struct Inventory {
    std::vector<std::string> items;
};

int main() {
    Inventory original{{"Sword", "Potion"}};
    Inventory copied = original;
    copied.items.push_back("Shield");
    Inventory assigned;
    assigned = original;
    Inventory moved = std::move(copied);
    assigned = std::move(moved);
    copied.items = {"Map"}; // Dùng lại nguồn bằng phép gán rõ ràng.

    std::cout << "Original: " << original.items.size() << '\n';
    std::cout << "Assigned: " << assigned.items.size() << '\n';
    std::cout << "Reused source: " << copied.items.at(0) << '\n';

    auto owner = std::make_unique<int>(42);
    auto nextOwner = std::move(owner);
    std::cout << std::boolalpha << "Old owner empty: " << (owner == nullptr) << '\n';
    std::cout << "Owned value: " << *nextOwner << '\n';
}
```

**Kết quả mong đợi:**

```text
Original: 2
Assigned: 3
Reused source: Map
Old owner empty: true
Owned value: 42
```

Inventory không tự viết destructor/copy/move: vector và string quản lý tài nguyên của chúng. Đó là cách áp dụng **Rule of Zero**. Compiler không vô điều kiện sinh đủ mọi special member: kiểu member và những hàm đã khai báo ảnh hưởng việc sinh/deleted. Tự khai báo destructor có thể ngăn sinh implicit move; không thêm destructor rỗng vào mọi class theo thói quen. Custom Rule of Five và forwarding là phần mở rộng, không bắt người học đã thành thạo từ ví dụ này.

### 16.2. Lambda: tách capture khỏi tham số

Lambda tạo function object tại nơi viết. Dạng cơ bản là `[capture](parameters) { body }`. Capture chọn dữ liệu từ scope xung quanh mà object lambda cần giữ/nhìn tới; parameters là dữ liệu **mỗi lần gọi** truyền vào. Với `[damage, &totalDamage](int& hp)`, damage là bản sao lúc tạo lambda, totalDamage là tham chiếu tới biến ngoài, còn hp là phần tử được truyền vào khi gọi.

| Capture/cú pháp | Ý nghĩa | Điều dễ nhầm |
|---|---|---|
| `[]` | Không capture local variable ngoài scope | Vẫn có thể dùng tham số, tên global/static phù hợp |
| `[damage]` | Giữ bản sao damage lúc tạo | Đổi damage ngoài sau đó không cập nhật bản copy |
| `[&total]` | Dùng biến total gốc qua reference | total phải còn sống khi gọi |
| `[=]`, `[&]` | Capture mặc định theo value/reference đối với biến cần capture | Không phải sao chép mọi biến trong chương trình |
| `mutable` | Cho sửa bản copy captured by value trong lambda | Không biến bản gốc bên ngoài thành biến được sửa |
| `(int& hp)` | Tham số nhận ở mỗi lần gọi | Không phải capture |

Lambda capture pointer bằng value chỉ sao chép địa chỉ; không tự giữ object đích sống. Callback chạy muộn/async dễ làm reference hoặc pointer treo; bài này dùng thuật toán tuần tự gọi xong ngay khi biến ngoài còn tồn tại.

### 16.2.1. Iterator và hợp đồng của thuật toán

`begin()` trỏ tới phần tử đầu, `end()` là vị trí **sau phần tử cuối**, không dereference end. Một khoảng thông dụng là `[begin, end)`, có thể rỗng. Thuật toán trong `<algorithm>` nhận các iterator của một khoảng hợp lệ; không làm vector realloc trong lúc thuật toán đang dùng iterator của nó.

`for_each` và `count_if` gọi callback với **một phần tử** mỗi lần. Comparator của `sort` nhận **hai phần tử**. Vì vậy một lambda hai tham số không thể tùy tiện thay predicate một tham số. Comparator phải diễn đạt thứ tự hợp lệ; dùng `a > b` để giảm dần, không dùng `a >= b` vì hai phần tử bằng nhau không được coi mỗi bên đều đi trước bên còn lại.

### 16.2.2. Ví dụ chạy được — AOE damage

```cpp
// example: cpp-16-lambda; file: Main.cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> hp{100, 60, 25, 0};
    const int damage = 30;
    int totalDamage = 0;
    auto apply = [damage, &totalDamage](int& health) {
        const int actual = health < damage ? health : damage;
        health -= actual;
        totalDamage += actual;
    };
    std::for_each(hp.begin(), hp.end(), apply);
    const auto alive = std::count_if(hp.begin(), hp.end(), [](int health) {
        return health > 0;
    });
    std::sort(hp.begin(), hp.end(), [](int left, int right) {
        return left > right;
    });
    std::cout << "HP:";
    for (int health : hp) std::cout << ' ' << health;
    std::cout << "\nActual damage: " << totalDamage << '\n';
    std::cout << "Alive: " << alive << '\n';
}
```

**Kết quả mong đợi:**

```text
HP: 70 30 0 0
Actual damage: 85
Alive: 2
```

Hợp đồng ví dụ: HP/damage không âm, tổng actual damage biểu diễn được bằng int với danh sách nhỏ này. Damage thực mất của mục tiêu 25 HP chỉ là 25; cộng thẳng 30 cho mọi mục tiêu sẽ sai thống kê. `auto alive` giữ đúng kiểu kết quả `count_if` (iterator difference type, thường có dấu), không ép vào int vì đoán kiểu. Với size của container, dùng kiểu kích thước thích hợp; hai loại số đếm không mặc nhiên giống nhau.

### Tự kiểm tra và thực hành

- **Tự giải thích:** `existing = original` khác `auto copied = original` ở điểm nào? Sau `std::move`, biến nguồn có biến mất không? Capture khác parameter ra sao?
- **Tự viết buổi 16.1:** Inventory có copy độc lập, chuyển quyền sở hữu bằng move và cách dùng lại nguồn đúng hợp đồng.
- **Tự viết buổi 16.2:** AOE damage, đếm sống và báo actual damage; thử vector rỗng, HP bằng 0, damage bằng 0, damage lớn hơn HP.
- **Đạt khi:** Không đọc phần tử nguồn sau move bằng giả định không được bảo đảm, không copy unique_ptr, không capture reference vượt lifetime, không nhầm số tham số callback.

---

<a id="cpp-17"></a>

## Bài 17 — Bộ công cụ debugging trên Visual Studio 2022

**Mục tiêu:** Đọc trạng thái thực thi thay vì sửa code theo phỏng đoán.  
**Cần biết trước:** Hàm, scope, reference và class. Đây là phần hướng dẫn công cụ được biên tập trước [buổi 17.1 thực hành](#cpp-17-1); không phải một bài nộp được chấm thêm.

### 17.1. Build được chưa đồng nghĩa logic đúng

Compiler kiểm tra cú pháp/kiểu theo quy tắc ngôn ngữ; linker nối định nghĩa. Một chương trình vẫn có thể build thành công nhưng sửa bản sao thay vì object gốc, đếm sai điều kiện hoặc in log sai. Debugger cho phép dừng trước câu lệnh, quan sát dữ liệu, thực thi tiếp từng bước rồi đối chiếu với kỳ vọng.

Chọn đúng startup project, cấu hình Debug và executable vừa build. Nếu breakpoint chưa gắn được hoặc giá trị không hiện như mong đợi, kiểm tra source/binary/symbol phù hợp; đừng suy rằng cứ nhấn F5 là đang chạy đúng bản code mở trong editor. Code tối ưu có thể làm biến khó quan sát hoặc thay đổi cách ánh xạ statement về dòng nguồn.

### 17.2. Phím tắt theo thao tác thực tế

Các phím dưới theo cấu hình phím thông dụng; Visual Studio cho phép đổi mapping. Nếu phím trên máy khác, dùng tên lệnh trong menu Debug để đối chiếu.

| Phím | Lệnh | Khi cần dùng |
|---|---|---|
| `F9` | Toggle Breakpoint | Dừng trước logic cần quan sát |
| `F5` | Start/Continue | Chạy tới breakpoint hoặc tiếp tục từ chỗ dừng |
| `F10` | Step Over | Thực thi statement, không chủ động đi vào thân hàm được gọi |
| `F11` | Step Into | Theo lời gọi vào hàm khi debugger có thể theo dõi |
| `Shift + F11` | Step Out | Chạy tới khi rời hàm hiện tại |
| `Shift + F5` | Stop Debugging | Kết thúc phiên debug |
| `Ctrl + F5` | Start Without Debugging | Chạy bình thường, không gắn debugger |

F10/Step Over **vẫn chạy hàm được gọi**. Nó không bỏ qua việc thực thi hàm. Debugger bước theo statement và thông tin debug, không hứa “mỗi lần bấm xuống đúng một dòng”. Có thể dừng tại dấu `}` trước khi trở về caller. Breakpoint khác vẫn có thể làm chương trình dừng trong khi một lệnh step đang chạy.

### 17.3. Chọn cửa sổ theo câu hỏi

| Công cụ | Câu hỏi trả lời tốt |
|---|---|
| Locals | Biến cục bộ trong frame đang chọn đang có giá trị nào? |
| Autos | Biến/biểu thức gần vị trí thực thi hiện tại là gì? |
| Watch | Giá trị của biểu thức cụ thể như `health - damage` thay đổi thế nào? |
| Call Stack | Chuỗi lời gọi hàm nào **đang hoạt động** dẫn tới chỗ dừng? |
| DataTip | Giá trị biến đang trỏ chuột vào lúc dừng là gì? |

Call Stack không phải nhật ký toàn bộ lời gọi từng xảy ra. Chọn frame khác để quan sát context của caller không thực thi thêm code. Mũi tên vàng thường chỉ vị trí thực thi hiện tại/câu lệnh sắp chạy; vị trí đang xem của một frame khác không có nghĩa chương trình vừa nhảy về đó.

Ưu tiên Watch là biểu thức quan sát không thay state, chẳng hạn `health`, `damage`, `health - damage`. Không gọi bừa method có tác dụng phụ chỉ để xem “nó trả gì”, vì việc đánh giá có thể làm thay đổi trạng thái cần điều tra.

### 17.4. Quy trình tìm lỗi có bằng chứng

1. Ghi input cụ thể, output/state mong đợi và kết quả thực tế.
2. Đặt breakpoint **trước** đoạn nghi ngờ; xác nhận đang ở đúng object/frame.
3. Dự đoán giá trị sau một statement rồi dùng Step Over/Into để kiểm tra.
4. Tìm statement **đầu tiên** làm dữ liệu lệch, không chỉ dòng cuối in ra sai.
5. Sửa nguyên nhân; chạy lại kịch bản thường và ca biên đã làm lộ bug.

Trong lịch sử học, có lần dừng ở prologue khiến một DataTip của tham số trông bất thường; sau khi tới statement có thông tin debug phù hợp, giá trị quan sát được là 30. Đây là kinh nghiệm cụ thể, không phải quy luật “mọi DataTip lạ đều vô hại”. Luôn kiểm tra frame, source/symbol và thời điểm đang quan sát.

### Tự kiểm tra và thực hành

- **Tự giải thích:** F10 có bỏ chạy hàm không? Chọn frame khác có làm chương trình thực thi không? Vì sao cần state trước và sau, không chỉ console cuối?
- **Tự làm:** Đặt breakpoint trước ApplyDamage, dự đoán HP sau phép trừ, dùng F11 vào hàm và Shift+F11 về caller; quan sát đúng biến ở cả hai frame.
- **Đạt khi:** Chỉ ra nguyên nhân bằng biến/statement cụ thể và lặp lại được cách kiểm tra. Sang [17.1](#cpp-17-1) để dùng công cụ tìm ba lỗi logic.

---

<a id="cpp-17-1"></a>

## Bài 17.1 — Thực hành tìm lỗi copy, HP âm và đếm sống

**Mục tiêu:** Dùng debugger để phân biệt lỗi ownership dữ liệu, invariant và điều kiện đếm.  
**Cần biết trước:** [Range-for/reference](#cpp-08), [lambda/count_if](#cpp-16), [công cụ debug](#cpp-17). Nguồn tổng kết xác nhận người học đã tự tìm và sửa ba lỗi dưới đây.

### 17.1.1. Ba triệu chứng, ba nguyên nhân

| Triệu chứng | Cần quan sát | Nguyên nhân thường gặp | Hướng sửa |
|---|---|---|---|
| HP trong vector không đổi dù biến vòng lặp giảm | Biến `enemy` và phần tử vector sau mỗi lượt | `auto enemy` tạo bản sao | Dùng `auto& enemy` khi mục đích là sửa phần tử gốc |
| Enemy 20 HP nhận 30 damage thành -10 | HP trước/sau method xử lý damage | Trừ không giữ invariant | Bỏ qua amount không dương, kẹp về 0 khi damage đạt/vượt HP |
| Enemy 0 HP vẫn được tính sống | Biểu thức predicate và số đếm | Điều kiện `health >= 0` | Quy tắc bài là `health > 0` |

Không gộp mọi lỗi thành “sai pointer” hoặc thay nhiều dòng cùng lúc. Sửa lỗi bản sao trước để nhìn thấy tác động thật lên vector, sau đó kiểm tra hợp đồng HP, cuối cùng xác minh predicate.

### 17.1.2. Mẫu đã sửa để đối chiếu sau khi tự thử

Đây là chương trình ôn tập biên tập từ ba loại lỗi được ghi nhận, không phải bản nộp gốc. Các object mẫu bắt đầu với HP không âm; `ApplyDamage` duy trì điều kiện đó và trả lượng damage thực tế.

```cpp
// example: cpp-17-1-debug; file: Main.cpp
#include <algorithm>
#include <iostream>
#include <vector>

struct EnemyState { int health; };

int ApplyDamage(EnemyState& enemy, int damage) {
    if (damage <= 0 || enemy.health <= 0) return 0;
    const int actual = damage >= enemy.health ? enemy.health : damage;
    enemy.health -= actual;
    return actual;
}

int main() {
    std::vector<EnemyState> enemies{{100}, {20}, {0}};
    int totalDamage = 0;
    for (auto& enemy : enemies) {
        totalDamage += ApplyDamage(enemy, 30);
    }
    const auto alive = std::count_if(enemies.begin(), enemies.end(),
        [](const EnemyState& enemy) { return enemy.health > 0; });
    std::cout << "HP:";
    for (const auto& enemy : enemies) std::cout << ' ' << enemy.health;
    std::cout << "\nAlive: " << alive << '\n';
    std::cout << "Actual damage: " << totalDamage << '\n';
}
```

**Kết quả mong đợi:**

```text
HP: 70 0 0
Alive: 1
Actual damage: 50
```

### 17.1.3. Tự chứng minh bản sửa

Trong một bản luyện riêng, đổi từng lỗi một để tái hiện, dự đoán triệu chứng trước khi chạy rồi khôi phục bản đúng. Đặt breakpoint ở `ApplyDamage`, quan sát `damage`, `enemy.health`, `actual`; sau Step Out, kiểm tra phần tử vector còn giữ giá trị đã sửa.

| Ca kiểm tra | Kết quả cần có |
|---|---|
| HP 20, damage 30 | HP 0, actual 20 |
| HP 20, damage 20 | HP 0, actual 20 |
| HP 20, damage 0 hoặc âm | HP giữ nguyên, actual 0 |
| HP 0, damage dương | HP 0, không đếm sống |
| Danh sách rỗng | Không truy cập phần tử, số sống và total bằng 0 |

**Đạt khi:** Giải thích được vì sao sửa reference, vì sao `>=` phù hợp trong clamp nhưng `>` phù hợp để xác định sống. Chạy đúng một input chưa chứng minh mọi dữ liệu đều hợp lệ; hãy nêu rõ constructor/caller nào chịu trách nhiệm tạo state ban đầu.

---

<a id="cpp-17-2"></a>

## Bài 17.2 — Final Assessment: Arena Combat Simulator

**Mục tiêu:** Kết hợp tổ chức nhiều file, class, ownership và kiểm tra state transitions thành một gameplay loop có quy tắc rõ ràng.  
**Cần biết trước:** [Class/invariant](#cpp-11), [đa hình và destructor](#cpp-12-1), [dependency](#cpp-15), [debugging](#cpp-17-1).

### 17.2.1. Nguồn và giới hạn của bản tham khảo

Completion Pack ngày 27/10/2026 gồm handbook, handoff và thư mục `ArenaCombat_Final_Reviewed`. README của pack nói rõ năm file code là **bản đã được trợ lý chỉnh sửa sau bài nộp**, không phải bản gốc người học tự nộp. Handoff ghi bản tự nộp được chấm **9.5/10**; điểm này là lịch sử theo nguồn, không phải điểm chấm mới cho năm file hiện tại.

Mục này giải thích quy tắc và cách đọc bản tham khảo. Không tự đánh dấu hoàn thành hoặc cấp XP cho người mở trang. Những class Player/Enemy ở đây thuộc project Final, không ghép với Player của bài 11 hoặc Arena ba file trước đó.

[Tải mã nguồn Arena Combat đã chỉnh sửa — 5 file C++/header](https://reix-labs.github.io/Cpp/downloads/ArenaCombat_Final_Reviewed.zip). Build Main.cpp, Player.cpp và Enemy.cpp cùng nhau trong project C++17 riêng; giữ hai header trong đường tìm include. ZIP là bản tham khảo đúng nguồn, còn phần giải thích dưới đây nêu rõ tiền điều kiện mà code hiện có yêu cầu.

### 17.2.2. Luật chơi trước khi viết code

| Đối tượng | HP ban đầu / MaxHP | Damage | Tài nguyên |
|---|---|---|---|
| Player | 120 / 120 | 25 | 2 potion, mỗi potion hồi 30 HP |
| Slime | 40 / 40 | 10 | Không có potion |
| Goblin | 55 / 55 | 15 | Không có potion |
| Boss | 80 / 80 | 20 | Không có potion |

Mỗi lượt Player có **một action**: nếu HP `<= 40` và còn potion, dùng đúng một potion **thay cho** tấn công; nếu không, tấn công Enemy hiện tại. Enemy chỉ phản công khi còn sống sau action đó. Player chết thì dừng. Thắng khi Player còn sống và đã hạ hết Enemy.

Luồng một lượt: **kiểm tra Player sống → chọn potion hoặc tấn công → cập nhật state → báo đúng action → kiểm tra Enemy chết → nếu còn sống mới phản công → kiểm tra lượt kế**. Thứ tự kiểm tra là một phần của gameplay, không chỉ là lựa chọn trình bày code.

### 17.2.3. Trách nhiệm và ownership của từng file

| File | Trách nhiệm |
|---|---|
| `Player.h` / `Player.cpp` | State Player, xử lý damage, lựa chọn action và getter |
| `Enemy.h` / `Enemy.cpp` | State Enemy, nhận/gây damage, Boss và virtual destructor |
| `Main.cpp` | Tạo cấu hình, sở hữu danh sách enemy, điều khiển lượt và báo kết quả |

`std::vector<std::unique_ptr<Enemy>>` sở hữu từng Enemy/Boss. Lấy `Enemy& enemy = *enemyPtr` để dùng object trong lượt; reference đó không trở thành owner. `virtual ~Enemy()` cho phép hủy Boss qua base pointer. Chuỗi tên `"Boss"` không tạo dynamic type Boss; bản đã chỉnh dùng `std::make_unique<Boss>(...)`.

Boss hiện không có quy tắc tấn công riêng nên không cần thêm override chỉ để trưng bày cú pháp. Nếu nhu cầu chỉ khác tên/thông số, dữ liệu cấu hình cũng có thể đủ; ví dụ kế thừa ở đây giúp đọc bài đã nộp, không chứng minh mọi game đều phải có class Boss.

### 17.2.4. Đọc hợp đồng thật của code

Constructor trong bản tham khảo **nhận và lưu trực tiếp** HP/MaxHP/damage; không tự normalize hoặc từ chối mọi dữ liệu sai. Cấu hình bài phải thỏa `0 <= initialHealth <= maxHP`, `maxHP > 0`, damage không âm, số potion phù hợp. Với luật đấu tự động hiện tại, cần cấu hình khiến trận có thể kết thúc; nếu cả hai phía không gây sát thương thì có thể lặp mãi.

`applyDamage` bỏ qua lượng không dương và chặn HP xuống dưới 0 khi state đầu vào đã hợp lệ. `Player::Action` bỏ qua Player chết. `Enemy::dealDamage` không tự kiểm tra Enemy còn sống; **caller trong Main.cpp** phải chỉ gọi khi Enemy sống. Không mô tả các guard ở một method như thể tất cả API đều tự phòng mọi trường hợp.

Đoạn minh họa lựa chọn action theo đúng ý nghĩa, giả định `health`, `potion`, `maxHP`, `damage`, `enemy` thuộc context hợp lệ:

```cpp
if (health <= 40 && potion > 0) {
    health += 30;
    --potion;
    if (health > maxHP) health = maxHP;
} else {
    enemy.applyDamage(damage);
}
```

Hai nhánh phải loại trừ nhau. Nếu uống potion xong vẫn thực hiện attack ngoài nhánh else, luật “một action mỗi lượt” bị phá dù chương trình build thành công.

Để log đúng action trong bản đã chỉnh, Main.cpp lưu `potionBefore`, gọi Action rồi so sánh số potion mới. Potion giảm thì báo uống; nếu không thì báo tấn công. Đây là giải pháp đúng với API hiện tại. Nếu thiết kế lớn hơn cần nhiều loại event, có thể cân nhắc kết quả action có kiểu rõ ràng sau này; không bắt thêm kiến trúc khi bài chưa cần.

### 17.2.5. Kết quả và cách tự đối chiếu

Phần kết quả cuối theo Completion Pack (phía trước còn các dòng log diễn biến):

```text
Player HP: 40/120
Enemies defeated: 3/3
Potions remaining: 0
Player Win!!
```

Không chỉ so chuỗi “Win”. Phải kiểm tra cả state HP, số potion, defeat count và việc Enemy đã chết không phản công. Một kịch bản đúng không chứng minh toàn bộ chương trình đã chịu được mọi cấu hình/đầu vào.

| Kiểm tra | Kỳ vọng theo hợp đồng |
|---|---|
| HP Player đúng 40, còn potion, Enemy còn sống | Dùng potion, không gây attack damage trong action đó |
| HP Player đúng 40, hết potion | Tấn công thay vì giảm potion dưới 0 |
| Damage đạt/vượt HP Enemy | Enemy về 0, không phản công, tăng defeated đúng một lần |
| Player đã chết trước action | Không hồi sinh/ngầm tấn công qua Action |
| Damage 0 hoặc âm truyền vào applyDamage | State không đổi |
| HP sau hồi vượt maxHP theo cấu hình hợp lệ | HP bị giới hạn tại maxHP |
| Constructor nhận cấu hình sai | Bản hiện tại chưa tự bảo vệ; phải validate ở nơi tạo hoặc thiết kế thêm chính sách rồi kiểm thử |

### Tự ôn và tiêu chí đọc hiểu

- Giải thích một lượt potion và một lượt tấn công bằng state trước/sau, không nhìn lời giải khi kể lại.
- Chỉ ra nơi ownership nằm, nơi reference mượn được dùng, và điều kiện cần trước khi dereference.
- Dùng debugger truy vết một trường hợp HP đạt ngưỡng 40; dự đoán Enemy có phản công hay không.
- Phân biệt lỗi logic, lỗi log, cải thiện style và mở rộng tùy chọn. Không thêm override/raw pointer/lambda chỉ vì muốn đưa nhiều cú pháp vào bài.

Sau bài này có thể chuyển sang [định hướng tiếp theo](#roadmap). Các đặc thù Unreal vẫn là nội dung chưa được giảng trong khóa Standard C++ này.

---

<a id="lookup"></a>
## Tra cứu nhanh: cú pháp → ý nghĩa → bài học

Các dòng dưới là mẫu cú pháp, không phải một chương trình để ghép nguyên khối. `T`, `obj`, `items` và `...` là chỗ thay bằng kiểu, đối tượng hoặc phần thân thích hợp. Bảng gộp những cách viết cùng ý nghĩa; những ký hiệu đổi nghĩa theo ngữ cảnh được giữ riêng. Nhấn số bài để đọc giải thích và ví dụ đầy đủ.

### Cấu trúc chương trình, header và nhập/xuất

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `#include <iostream>` | Dùng khai báo nhập/xuất chuẩn như `std::cout`, `std::cin`. | [01](#cpp-01) |
| `#include <string>` | Dùng `std::string`. | [07](#cpp-07) |
| `#include <array>` | Dùng `std::array`. | [07](#cpp-07) |
| `#include <vector>` | Dùng `std::vector`. | [07](#cpp-07) |
| `#include <memory>` | Dùng `std::unique_ptr`, `std::make_unique`. | [10](#cpp-10) |
| `#include "Arena.h"` | Include header của project; mỗi `.cpp` phải nhìn thấy khai báo nó sử dụng. Không include `.cpp` để thay việc build đúng. | [06.5](#cpp-06-5) |
| `#pragma once` | Ngăn một header bị include lặp trong cùng translation unit; không chữa mọi multiple definition giữa nhiều `.cpp`. | [06.5](#cpp-06-5) |
| `int main() { ... }` | Điểm bắt đầu của chương trình console C++ thông thường. | [01](#cpp-01) |
| `return 0;` | Kết thúc `main` thành công; đi tới cuối `main` cũng ngầm trả 0. | [01](#cpp-01) |
| `// ghi chú` | Comment một dòng. | [01](#cpp-01) |
| `/* ghi chú */` | Comment có thể trải nhiều dòng; không lồng comment dạng này. | [01](#cpp-01) |
| `;` | Kết thúc câu lệnh khi cú pháp yêu cầu; cũng cần sau định nghĩa struct/class và cuối `do-while`. | [01](#cpp-01) |
| `{ ... }` | Khối lệnh và scope; trong khai báo còn có thể là phần khởi tạo. | [04](#cpp-04) |
| `std::cout << value;` | Xuất giá trị ra luồng chuẩn. `<<` ở đây là phép xuất, khác dịch bit số nguyên. | [01](#cpp-01) |
| `std::cin >> variable;` | Nhập có định dạng; đọc string dừng ở khoảng trắng. Kiểm tra trạng thái luồng nếu dữ liệu có thể sai. | [01](#cpp-01) |
| `if (!(std::cin >> health)) { ... }` | Phát hiện lần đọc không thành công; không tiếp tục coi dữ liệu là hợp lệ. | [04](#cpp-04) |
| `std::getline(std::cin, name);` | Đọc cả dòng, kể cả khoảng trắng. Sau `>>` cần xử lý dấu xuống dòng còn lại theo ý nghĩa đầu vào. | [01](#cpp-01) |
| `std::cout << '\n';` hoặc `std::cout << "\n";` | In ký tự xuống dòng. | [01](#cpp-01) |
| `std::cout << std::boolalpha << alive;` | In bool thành `true`/`false`; trạng thái định dạng giữ trên luồng cho các lần xuất sau. | [01](#cpp-01) |
| `std::cout`, `CharacterClass::Mage` | `::` là toán tử phạm vi; tên bên trái giúp xác định tên bên phải thuộc đâu. | [01](#cpp-01), [08](#cpp-08) |

### Biến, kiểu, hằng và ép kiểu cơ bản

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `int hp = 100;` | Khai báo và khởi tạo số nguyên có dấu. Không giả định `int` có cùng độ rộng trên mọi nền tảng. | [02](#cpp-02) |
| `unsigned int flags = 0u;` | Số nguyên không dấu, thích hợp cho các ví dụ bitmask. Cẩn thận phép tính/so sánh trộn signed và unsigned. | [02](#cpp-02), [03](#cpp-03) |
| `float speed = 5.5f;` | Số thực kiểu float; hậu tố `f` tạo literal float. | [02](#cpp-02) |
| `double score = 1.25;` | Số thực kiểu double; literal thập phân này mặc định là double. | [02](#cpp-02) |
| `char rank = 'A';` | Một giá trị char; nháy đơn khác string literal `"A"`. Một char không bảo đảm chứa trọn ký tự Unicode. | [02](#cpp-02) |
| `bool alive = true;` | Giá trị logic `true` hoặc `false`. | [02](#cpp-02) |
| `std::string name = "Mage";` | Chuỗi gồm các phần tử char; cần `<string>`. | [02](#cpp-02), [07](#cpp-07) |
| `int coins(20);` | Direct initialization: khởi tạo coins bằng 20. | [02](#cpp-02) |
| `int hp{100};` | Brace initialization; những chuyển đổi narrowing bị cấm, ví dụ `int hp{3.5};` không biên dịch. | [02](#cpp-02) |
| `const int maxHP = 100;` | Không được sửa qua biến này sau khởi tạo; const vẫn có thể nhận giá trị tính lúc chạy. | [02](#cpp-02) |
| `constexpr int maxRounds = 5;` | Với biến constexpr, initializer phải thỏa quy tắc constant expression; không có nghĩa luôn nhanh hơn const. | [02](#cpp-02) |
| `const int n = 3;` | Trong ví dụ này n dùng được làm kích thước `std::array<int, n>`; không phải mọi biến const đều dùng được như vậy. | [02](#cpp-02) |
| `auto total = hp + 10;` | Compiler suy luận kiểu khi biên dịch; không đổi kiểu động khi chạy. | [02](#cpp-02) |
| `static_cast<float>(hp)` | Chuyển sang float; đặt cast trước phép chia nếu cần tránh chia nguyên. Vẫn phải tránh chia cho 0. | [02](#cpp-02) |
| `static_cast<int>(75.9f)` | Chuyển về int, bỏ phần thập phân. Chỉ dùng khi giá trị sau cắt phần lẻ biểu diễn được bằng kiểu đích. | [02](#cpp-02) |
| `std::size_t i = 0;` | Kiểu số nguyên không dấu thường dùng cho size/index; có trong `<cstddef>`. Dùng range-for khi không cần index. | [07](#cpp-07) |

### Toán tử số học, logic và bitmask

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `+ - * / %` | Cộng, trừ, nhân, chia, dư số nguyên. Hai toán hạng nguyên cho phép chia nguyên; tránh chia/dư cho 0 và phép tính nguyên có dấu vượt miền biểu diễn. | [03](#cpp-03) |
| `= += -= *= /= %=` | Gán hoặc tính rồi gán. `=` không phải phép so sánh. | [03](#cpp-03) |
| `== != < <= > >=` | So sánh các giá trị; các phép so sánh cơ bản trả bool. | [03](#cpp-03) |
| `a && b` | Logic AND; với toán tử dựng sẵn, chỉ đánh giá b nếu a đúng. | [03](#cpp-03) |
| `a \|\| b` | Logic OR; với toán tử dựng sẵn, chỉ đánh giá b nếu a sai. | [03](#cpp-03) |
| `!alive` | Phủ định logic. | [03](#cpp-03) |
| `++i`, `i++` | Tăng 1; tiền tố cho giá trị sau tăng, hậu tố cho giá trị cũ. Không viết biểu thức khó theo dõi bằng nhiều lần sửa cùng biến. | [03](#cpp-03) |
| `--i`, `i--` | Giảm 1; tiền tố/hậu tố khác nhau khi dùng giá trị của biểu thức. | [03](#cpp-03) |
| `condition ? whenTrue : whenFalse` | Toán tử điều kiện: đánh giá một trong hai nhánh theo điều kiện. | [03](#cpp-03) |
| `a & b`, `a \| b`, `a ^ b`, `~a` | AND, OR, XOR, NOT theo bit của số nguyên; không có short-circuit. `^` không phải lũy thừa. | [03](#cpp-03) |
| `flags << n`, `flags >> n` | Dịch bit; ở bài cơ bản dùng kiểu unsigned, n không âm và nhỏ hơn độ rộng kiểu sau integer promotion. Không thay mọi nhân/chia bằng dịch bit. | [03](#cpp-03) |
| `&= \|= ^= <<= >>=` | Phép bitwise kết hợp gán; vẫn phải thỏa điều kiện về kiểu và số bit dịch. | [03](#cpp-03) |
| `abilities \|= CanJump;` | Bật bit cờ CanJump; các cờ độc lập nên dùng những bit riêng. | [03](#cpp-03) |
| `abilities &= ~CanShoot;` | Tắt bit cờ CanShoot; dùng kiểu mask tương thích, thường là unsigned. | [03](#cpp-03) |
| `abilities ^= CanJump;` | Đảo trạng thái bit cờ CanJump. | [03](#cpp-03) |
| `(abilities & CanJump) != 0` | Kiểm tra bit CanJump có bật không. Với mask nhiều bit, biểu thức này chỉ kiểm tra có ít nhất một bit chung. | [03](#cpp-03) |

### Điều kiện và vòng lặp

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `if (condition) { ... }` | Chạy khối khi điều kiện đúng. | [04](#cpp-04) |
| `else if (condition) { ... }` | Thử điều kiện kế tiếp khi các nhánh trước trong chuỗi chưa được chọn. | [04](#cpp-04) |
| `else { ... }` | Nhánh còn lại của if; một chuỗi if/else-if/else chỉ chọn một nhánh. | [04](#cpp-04) |
| `switch (x) { case 1: ...; break; default: ...; }` | Phân nhánh theo giá trị nguyên/enum; thiếu break có thể chạy tiếp nhánh dưới. | [04](#cpp-04) |
| `for (int i = 0; i < n; ++i) { ... }` | Khởi tạo, kiểm tra điều kiện, chạy thân, cập nhật rồi lặp lại. | [05](#cpp-05) |
| `while (condition) { ... }` | Kiểm tra trước; có thể không chạy lần nào. | [05](#cpp-05) |
| `do { ... } while (condition);` | Chạy thân ít nhất một lần; cần dấu chấm phẩy cuối. | [05](#cpp-05) |
| `break;` | Thoát vòng lặp hoặc switch gần nhất chứa nó, không thoát toàn bộ mọi vòng lồng. | [05](#cpp-05) |
| `continue;` | Bỏ phần thân còn lại của lượt lặp. Trong for vẫn chạy bước cập nhật trước lần kiểm tra kế tiếp. | [05](#cpp-05) |
| `for (int item : inventory) { ... }` | Duyệt từng phần tử int bằng giá trị; sửa item không sửa phần tử gốc. | [07](#cpp-07) |
| `for (Player& p : players) { ... }` | Duyệt bằng reference để sửa phần tử Player gốc. | [08](#cpp-08) |
| `for (const auto& item : items) { ... }` | Duyệt không tạo bản sao phần tử, không sửa qua item; phần tử phải còn sống khi dùng reference. | [08](#cpp-08) |

### Hàm, tham số và overload

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `int Add(int a, int b);` | Declaration/prototype: công bố tên, kiểu tham số và kiểu trả về trước khi gọi. | [06](#cpp-06) |
| `int Add(int a, int b) { return a + b; }` | Definition: cung cấp thân hàm; ví dụ cộng int giả định tổng còn biểu diễn được. | [06](#cpp-06) |
| `Add(3, 5)` | Gọi hàm với hai đối số. | [06](#cpp-06) |
| `void Print() { ... }` | Hàm không trả giá trị. | [06](#cpp-06) |
| `return value;` | Trả giá trị và kết thúc lời gọi hiện tại. | [06](#cpp-06) |
| `return;` | Thoát sớm một hàm void. | [06](#cpp-06) |
| `void DamageCopy(int hp);` | Tham số int là đối tượng riêng chứa giá trị sao chép; thay hp trong hàm không đổi biến gọi. | [06](#cpp-06) |
| `void DamageRef(int& hp);` | Tham số reference: có thể sửa biến gốc. | [06](#cpp-06), [08](#cpp-08) |
| `void PrintPlayer(const Player& p);` | Đọc Player qua reference, không copy toàn bộ Player, không sửa qua p. | [08](#cpp-08) |
| `void HealPlayer(Player* p, int amount);` | Nhận pointer; quy định rõ có chấp nhận null không và không ngầm chuyển ownership. | [09](#cpp-09) |
| `int Add(int, int);` và `float Add(float, float);` | Overload: cùng tên, khác danh sách tham số phù hợp. Chỉ khác kiểu trả về không đủ. | [06](#cpp-06) |

### Array, vector và string

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `int hpRaw[3] = {100, 80, 60};` | Mảng C-style ba int; index hợp lệ là 0, 1, 2. `int hpRaw[3]{};` khởi tạo cả ba bằng 0. | [07](#cpp-07) |
| `std::array<int, 3> hp{100, 80, 60};` | Container cố định ba int trong chính object. Một cặp ngoặc hợp lệ trong ví dụ C++17 này; không đồng nghĩa array luôn ở stack. | [07](#cpp-07) |
| `std::vector<int> values{10, 20};` | Vector có hai phần tử; số phần tử có thể đổi. Khác `std::vector<int> values(10, 20)` là mười phần tử bằng 20. | [07](#cpp-07) |
| `values.push_back(30);` | Thêm cuối; có thể realloc và làm pointer/reference/iterator vào phần tử cũ mất hiệu lực. | [07](#cpp-07), [09](#cpp-09) |
| `values.pop_back();` | Xóa cuối; chỉ gọi khi vector không rỗng. | [07](#cpp-07) |
| `values.size()` | Số phần tử hiện có, kiểu unsigned `size_type`, thường là `std::size_t`. | [07](#cpp-07) |
| `values.empty()` | Kiểm tra có rỗng không. | [07](#cpp-07) |
| `values.clear();` | Xóa mọi phần tử; không bảo đảm trả capacity về 0. | [07](#cpp-07) |
| `values[i]` | Truy cập phần tử không kiểm tra biên; yêu cầu `i < values.size()`. | [07](#cpp-07) |
| `values.at(i)` | Truy cập có kiểm tra biên; sai index ném `std::out_of_range`. | [07](#cpp-07) |
| `values.capacity()` | Số phần tử có thể chứa mà chưa cần realloc; không phải số phần tử đã tồn tại. | [07](#cpp-07) |
| `values.reserve(n);` | Yêu cầu capacity ít nhất n, không tăng size; nếu realloc thì các địa chỉ/reference/iterator cũ mất hiệu lực. | [07](#cpp-07), [09](#cpp-09) |
| `values.resize(n);` | Đổi size; xóa phần dư hoặc tạo thêm phần tử. Không dùng reserve như thể nó đã tạo phần tử để truy cập bằng index. | [07](#cpp-07) |
| `name += " Bros";` | Nối thêm văn bản vào string. | [07](#cpp-07) |
| `name.size()`, `name.length()` | Cùng trả số phần tử char/code unit; không nhất thiết là số ký tự Unicode nhìn thấy. | [07](#cpp-07) |
| `name.empty()` | Kiểm tra chuỗi rỗng. | [07](#cpp-07) |
| `name[0]` | Đọc ký tự đầu thực sự khi `!name.empty()`; không dùng index vượt nội dung để lấy ký tự. | [07](#cpp-07) |
| `name.find("Bros")` | Trả vị trí tìm thấy, hoặc `std::string::npos` nếu không tìm thấy; không kiểm tra kết quả chỉ bằng if(pos). | [07](#cpp-07) |
| `pos != std::string::npos` | Kiểm tra kết quả find đã tìm thấy chuỗi con. Vị trí 0 là kết quả hợp lệ. | [07](#cpp-07) |
| `name.substr(pos, count)` | Lấy tối đa count phần tử char từ pos; `pos > name.size()` ném `std::out_of_range`. | [07](#cpp-07) |

### Struct, enum, reference và pointer

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `struct Player { int health; };` | Tạo kiểu gộp dữ liệu; struct cũng có thể có constructor/method. Thành viên mặc định public. | [08](#cpp-08) |
| `Player player{100};` | Tạo object từ struct một-member của dòng trên; initializer phải khớp định nghĩa kiểu thực tế. | [08](#cpp-08) |
| `enum class State { Idle, Dead };` | Kiểu liệt kê có phạm vi tên; không tự chuyển ngầm thành int như enum không scoped. | [08](#cpp-08) |
| `State state = State::Idle;` | Chọn giá trị enum thông qua phạm vi State. | [08](#cpp-08) |
| `player.health` | Truy cập member qua object hoặc reference; phải có quyền truy cập. | [08](#cpp-08) |
| `int& ref = hp;` | ref là bí danh của hp, cần đối tượng còn sống; không rebind. | [08](#cpp-08) |
| `const Player& ref = player;` | Reference chỉ đọc qua ref; không kéo dài mọi lifetime một cách tự động. | [08](#cpp-08) |
| `ref = b;` | Gán vào đối tượng ref đang tham chiếu; không đổi đích reference. | [08](#cpp-08) |
| `Player* ptr = &player;` | Khai báo pointer lưu địa chỉ player; dấu `*` ở khai báo chỉ kiểu pointer. | [09](#cpp-09) |
| `&player` | Toán tử lấy địa chỉ object; khác dấu `&` trong khai báo reference hoặc bitwise AND. | [09](#cpp-09) |
| `ptr = &other;` | Đổi địa chỉ lưu trong pointer; không chuyển quyền sở hữu chỉ nhờ phép gán này. | [09](#cpp-09) |
| `*ptr` | Dereference để truy cập object; pointer phải có hiệu lực và object còn sống. | [09](#cpp-09) |
| `ptr->health`, `(*ptr).health` | Hai cách tương đương truy cập member qua pointer hợp lệ và đúng quyền truy cập. | [09](#cpp-09) |
| `nullptr` | Giá trị con trỏ null; ưu tiên thay NULL/0 trong code pointer hiện đại. | [09](#cpp-09) |
| `if (ptr != nullptr) { ... }` | Chặn trường hợp pointer rỗng trước truy cập; không chứng minh pointer không dangling. | [09](#cpp-09) |
| `ptr = nullptr;` với `T* ptr` | Chỉ đổi raw pointer thành null, không hủy object cũ; có thể làm mất dấu owner và leak nếu dùng sai. | [09](#cpp-09), [10](#cpp-10) |

### Bộ nhớ, RAII và unique_ptr

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `new T{...}` | Tạo object có dynamic storage duration; cần cơ chế ownership/giải phóng phù hợp. | [10](#cpp-10) |
| `delete ptr;` | Hủy object và giải phóng vùng nhớ của single-object new phù hợp; null được phép. Không delete pointer mượn, pointer đã delete hoặc bộ nhớ do unique_ptr quản lý. | [10](#cpp-10) |
| `new int[5]{}` | Cấp phát mảng năm int được zero-initialize; nếu tự quản phải ghép với delete[]. | [10](#cpp-10) |
| `delete[] array;` | Hủy/giải phóng mảng do new[] phù hợp; không trộn delete và delete[]. | [10](#cpp-10) |
| `std::unique_ptr<T>` | Owner độc quyền; không copy được. Tài nguyên được giải phóng khi owner hủy hoặc thay quyền sở hữu thích hợp. | [10](#cpp-10) |
| `std::make_unique<T>(args...)` | Tạo T và unique_ptr quản lý nó; đối số phải khớp constructor/khả năng khởi tạo của T. | [10](#cpp-10), [11](#cpp-11) |
| `owner->Method()`, `*owner` | Truy cập object qua unique_ptr đang sở hữu object hợp lệ; owner rỗng thì không được dereference. | [10](#cpp-10) |
| `owner.get()` | Lấy raw pointer mượn; không chuyển ownership, không được tự delete. Khi owner rỗng kết quả là null. | [10](#cpp-10) |
| `owner = nullptr;` với `std::unique_ptr<T> owner` | Hủy object đang sở hữu qua deleter rồi làm owner rỗng; khác phép gán null cho raw pointer. Các alias tới object cũ không còn dùng được. | [10](#cpp-10) |
| `{ auto owner = std::make_unique<int>(42); }` | RAII: khi owner cục bộ ra khỏi scope, nó bị hủy và giải phóng int được quản lý. RAII dựa vào lifetime, không chỉ áp dụng cho object trên stack. | [10](#cpp-10) |

### Class, constructor, const method và đa hình

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `class Player { ... };` | Kiểu có dữ liệu và hàm thành viên; thành viên mặc định private. | [11](#cpp-11) |
| `public:` | Interface mà code bên ngoài được phép truy cập. | [11](#cpp-11) |
| `private:` | Thành viên chỉ truy cập trực tiếp theo quyền của chính class và friend; class con không tự được truy cập. | [11](#cpp-11) |
| `protected:` | Cho phép class con truy cập theo các quy tắc access; không có nghĩa public cho mọi nơi. Phần chi tiết học sau. | [12.1](#cpp-12-1) |
| `explicit Player(int hp);` | Constructor một tham số được explicit để tránh chuyển ngầm từ int thành Player; vẫn tạo trực tiếp được. | [11](#cpp-11) |
| `Player::Player(int hp) : health(hp) {}` | Định nghĩa constructor ngoài class; initializer list khởi tạo member trước thân hàm. Member thực sự được khởi tạo theo thứ tự khai báo. | [11](#cpp-11) |
| `void Player::TakeDamage(int damage) { ... }` | Cú pháp định nghĩa method ngoài class, sau khi đã khai báo method phù hợp trong class. `Player::TakeDamage()` đơn lẻ chưa phải định nghĩa đầy đủ. | [11](#cpp-11) |
| `int GetHealth() const;` | Method có thể gọi trên const object, không sửa member không mutable qua this. Không phải mọi dữ liệu bên ngoài đều trở nên bất biến. | [11](#cpp-11) |
| `this->name = name;` | Phân biệt member của object hiện tại với tham số cùng tên; this có trong method không static. | [12.2](#cpp-12-2) |
| `~Player()` | Tên destructor; không có kiểu trả về hay tham số. Destructor chạy khi object kết thúc lifetime theo quy tắc tương ứng. | [12.2](#cpp-12-2) |
| `~Player() = default;` | Yêu cầu định nghĩa destructor mặc định; không có nghĩa tự delete mọi raw pointer member. | [12.2](#cpp-12-2) |
| `class Dog : public Animal { ... };` | Kế thừa công khai; dùng khi Dog là một loại Animal theo interface/ý nghĩa thiết kế. | [12.1](#cpp-12-1) |
| `virtual void Speak() const;` | Cho phép dynamic dispatch; lời gọi qua base pointer/reference có thể chọn override theo object thực tế. | [12.1](#cpp-12-1) |
| `void Speak() const override;` | Compiler kiểm tra đang ghi đè method virtual đúng; khác overload. | [12.1](#cpp-12-1) |
| `Animal& base = dog;` hoặc `Animal* base = &dog;` | Tham chiếu/con trỏ lớp cha tới object con còn sống; virtual dispatch giữ hành vi đa hình. | [12.1](#cpp-12-1) |
| `virtual ~Animal() = default;` | Trong thiết kế xóa derived qua base pointer, destructor base virtual cho phép hủy đúng phần derived rồi base. | [12.2](#cpp-12-2) |

### Templates cơ bản

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `template <typename T>` | Mở đầu template có tham số kiểu T; T phải hỗ trợ các thao tác phần thân thực sự dùng. | [13](#cpp-13) |
| `T GetMax(T a, T b) { return a > b ? a : b; }` | Thân function template GetMax sau dòng template; cần phép so sánh và trả giá trị phù hợp cho T. | [13](#cpp-13) |
| `GetMax(10, 20)` | Suy luận T là int từ hai đối số. `GetMax(10, 5.5f)` không suy ra cùng một T theo mẫu cơ bản này. | [13](#cpp-13) |
| `GetMax<float>(10, 5.5f)` | Chỉ rõ T=float; đối số 10 được chuyển sang float. | [13](#cpp-13) |
| `template <typename T> class Stat { ... };` | Class template; `Stat<int>` và `Stat<float>` là những kiểu cụ thể khác nhau. | [13](#cpp-13) |
| `std::vector<int>`, `std::array<float, 3>` | Ví dụ class template chuẩn; array có tham số kiểu float và tham số giá trị hằng 3. | [13](#cpp-13) |
| `Definition template trong GameMath.h` | Đặt định nghĩa template ở header giúp compiler thấy definition ở nơi cần instantiation; các ngoại lệ học sau. | [13](#cpp-13) |
| `ClampValue<int>(value, low, high)` | Gọi hàm luyện tập với T=int; cần low <= high, kiểm thử cả trong/ngoài/đúng biên. | [13](#cpp-13) |
| `std::clamp(value, low, high)` | Hàm C++17 trong `<algorithm>`; cần khoảng hợp lệ. Hàm trả const reference: ở bài cơ bản nhận kết quả bằng giá trị để tránh giữ reference tới temporary. | [13](#cpp-13) |

### Phím Visual Studio

Những phím dưới theo mapping thông dụng. Đọc [Bài 17](#cpp-17) để hiểu thao tác, rồi dùng [17.1](#cpp-17-1) để tự kiểm tra bằng debugger; mở bảng phím không tự đánh dấu hoàn thành bài.

| Phím | Ý nghĩa | Bài học |
|---|---|---|
| `Ctrl + F5` | Chạy không gắn debugger. | [Chuẩn bị](#cpp-00) |
| `F5` | Bắt đầu hoặc tiếp tục chạy với debugger theo trạng thái hiện tại. | [17](#cpp-17) |
| `Ctrl + Shift + B` | Build Solution. | [Chuẩn bị](#cpp-00) |
| `Ctrl + Alt + L` | Mở Solution Explorer. | [Chuẩn bị](#cpp-00) |
| `F9` | Đặt/bỏ breakpoint tại dòng hiện tại. | [17](#cpp-17) |
| `F10` | Step Over: chạy tới bước kế, không chủ động đi vào hàm được gọi; hàm vẫn thực thi. | [17](#cpp-17) |
| `F11` | Step Into: bước vào hàm khi debugger có thể theo dõi. | [17](#cpp-17) |
| `Shift + F11` | Step Out: chạy tới khi ra khỏi hàm hiện tại. | [17](#cpp-17) |
| `Shift + F5` | Kết thúc phiên debugging. | [17](#cpp-17) |
| `Watch: health - damage` | Theo dõi biểu thức cụ thể khi dừng đúng frame; ưu tiên biểu thức không làm thay state. | [17](#cpp-17) |
| `Call Stack` | Xem chuỗi lời gọi đang hoạt động; chọn frame để xem context, không phải chạy thêm code hay xem toàn bộ lịch sử. | [17](#cpp-17) |

### Static, const pointer và namespace

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `static int calls = 0;` trong hàm | Giữ giá trị giữa các lần gọi; tên có scope cục bộ. Khởi tạo được bảo vệ không đồng nghĩa mọi lần cập nhật đều thread-safe. | [14](#cpp-14) |
| `static int created;` trong class | Khai báo dữ liệu chung của class, không phải một bản cho mỗi object. | [14](#cpp-14) |
| `int EnemyTracker::created = 0;` | Định nghĩa static data member theo cách truyền thống; đặt đúng một định nghĩa trong cpp. | [14](#cpp-14) |
| `static int GetCreated();` | Method static không có this; không tự chọn dữ liệu của một object cụ thể. | [14](#cpp-14) |
| `EnemyTracker::GetCreated()` | Gọi static method thông qua tên class. | [14](#cpp-14) |
| `inline static int count = 0;` | C++17: định nghĩa static data member ngay trong class; không thêm một định nghĩa thông thường thứ hai. | [14](#cpp-14) |
| `const int* p` | Pointer có thể đổi đích; không sửa int qua đường truy cập p. | [14](#cpp-14) |
| `int* const p = &hp` | Pointer cố định đích sau khởi tạo; có thể sửa hp qua p nếu object hợp lệ. | [14](#cpp-14) |
| `const int* const p = &hp` | Không đổi địa chỉ lưu trong p và không sửa int qua p. | [14](#cpp-14) |
| `namespace GameConfig { ... }` | Nhóm tên theo namespace; không tạo object và không tự khiến mọi biến là const. | [14](#cpp-14) |
| `GameConfig::MaxEnemies` | Truy cập tên MaxEnemies thuộc phạm vi GameConfig. | [14](#cpp-14) |

### Named casts và giới hạn chuyển đổi

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `static_cast<int>(12.8f)` | Khi giá trị biểu diễn được, bỏ phần lẻ về 0; không phải làm tròn gần nhất hay kiểm tra vượt miền. | [14.5](#cpp-14-5) |
| `dynamic_cast<Boss*>(base)` | Kiểm tra downcast runtime trong hierarchy phù hợp; kết quả null khi thất bại. Đầu vào phải còn hợp lệ. | [14.5](#cpp-14-5) |
| `dynamic_cast<Boss&>(base)` | Dạng reference; thất bại ném std::bad_cast, không trả nullptr. | [14.5](#cpp-14-5) |
| `const_cast<T*>(p)` | Thay cv-qualification theo quy tắc cho phép; sửa object vốn thật sự const là UB. | [14.5](#cpp-14-5) |
| `reinterpret_cast<T*>(p)` | Chuyển đổi mức thấp được phép về cú pháp không đồng nghĩa có thể dereference an toàn. | [14.5](#cpp-14-5) |
| `Health hp{100};` với explicit constructor | Direct initialization dùng được constructor explicit; không đồng nghĩa có implicit conversion từ int. | [14.5](#cpp-14-5) |

### Preprocessor và dependency

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `#define ENABLE_COMBAT_LOG 0` | Định nghĩa macro thay văn bản; macro không phải biến C++ có kiểu. | [15](#cpp-15) |
| `#if ENABLE_COMBAT_LOG` | Giữ nhánh khi biểu thức tiền xử lý khác 0; khác if runtime. | [15](#cpp-15) |
| `#ifdef ENABLE_COMBAT_LOG` | Kiểm tra macro tồn tại; vẫn đúng khi macro đã được định nghĩa bằng 0. | [15](#cpp-15) |
| `#ifndef PROJECT_PLAYER_H` | Kiểm tra macro chưa được định nghĩa; dùng cùng define/endif để làm header guard. | [15](#cpp-15) |
| `#endif` | Kết thúc nhóm điều kiện tiền xử lý. | [15](#cpp-15) |
| `class Player;` | Forward declaration: biết Player là class, chưa có định nghĩa đầy đủ. | [15](#cpp-15) |
| `void Attack(Player& target) const;` | Khai báo method nhận reference có thể chỉ cần forward declaration; định nghĩa gọi method của Player cần include đầy đủ. | [15](#cpp-15) |

### Copy/move, iterator và lambda

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `auto copied = original;` | Khởi tạo object mới từ original; với vector thông thường đây là copy construction. | [16](#cpp-16) |
| `existing = original;` | Gán cho object đã tồn tại; với vector thông thường đây là copy assignment. | [16](#cpp-16) |
| `std::move(x)` | Tạo biểu thức xvalue để overload phù hợp có thể được chọn; không tự chuyển tài nguyên. | [16](#cpp-16) |
| `auto taken = std::move(source);` | Khởi tạo object đích từ biểu thức có thể chọn move; phải biết hợp đồng của kiểu nguồn sau thao tác. | [16](#cpp-16) |
| `destination = std::move(source);` | Gán cho object đã có; không suy ra mọi kiểu có move assignment hay mọi nguồn luôn rỗng. | [16](#cpp-16) |
| `auto owner2 = std::move(owner1);` với unique_ptr | Chuyển quyền sở hữu từ nguồn khác đích; owner1 rỗng sau chuyển thành công. | [16](#cpp-16) |
| `items.begin(), items.end()` | Khoảng iterator từ đầu đến sau cuối; không dereference end; iterator phải còn hiệu lực. | [16](#cpp-16) |
| `[](int hp) { return hp > 0; }` | Lambda không capture, một tham số; phù hợp predicate kiểm tra từng HP. | [16](#cpp-16) |
| `[damage](int& hp) { ... }` | Capture damage theo giá trị, hp là tham số ở từng lần gọi. | [16](#cpp-16) |
| `[&total](int amount) { total += amount; }` | Capture reference để sửa biến ngoài; total phải còn sống khi lambda được gọi. | [16](#cpp-16) |
| `[damage, &totalDamage](int& hp) { ... }` | Kết hợp capture by value và by reference; không nhầm capture với tham số. | [16](#cpp-16) |
| `[=]` | Capture mặc định theo giá trị đối với biến cần capture; không sao chép mọi biến trong chương trình. | [16](#cpp-16) |
| `[&]` | Capture mặc định theo tham chiếu; lifetime của đối tượng ngoài vẫn phải được bảo đảm. | [16](#cpp-16) |
| `[count]() mutable { return ++count; }` | Cho sửa bản copy captured by value bên trong lambda; không sửa count gốc. | [16](#cpp-16) |
| `std::for_each(first, last, apply)` | Áp dụng callback một đối số cho từng phần tử của khoảng hợp lệ. | [16](#cpp-16) |
| `std::count_if(first, last, predicate)` | Đếm phần tử thỏa predicate; kết quả là iterator difference type, dùng auto khi phù hợp. | [16](#cpp-16) |
| `std::sort(first, last, compare)` | Sắp xếp theo comparator hai tham số; comparator phải tạo thứ tự hợp lệ, không dùng >= cho phép so lớn hơn. | [16](#cpp-16) |

---

<a id="healing"></a>
## Thực hành pointer: Pointer-Based Healing System

Bài này nối tiếp [struct/reference](#cpp-08) và [pointer](#cpp-09). Yêu cầu được giữ từ handoff 01–09 để có thể tự làm lại; trạng thái học hiện hành xem [lịch sử thực hành](#study-history).

**Dữ liệu đầu vào:** dùng struct `Player` có `name`, `role`, `health`, `maxHP` như [Arena](#arena). Khi truyền một Player còn sống, giả định `0 <= health <= maxHP` và `maxHP >= 0`. `amount` là int. Pointer có thể null; nếu không null thì phải trỏ tới Player còn sống, không phải địa chỉ đã mất hiệu lực.

Tự viết hàm có khai báo `void HealPlayer(Player* player, int amount);`, rồi kiểm tra:

1. Nếu `player == nullptr`, thoát hàm an toàn trước mọi lần truy cập member.
2. Nếu `amount <= 0`, không thay đổi HP.
3. Dùng `player->health` và `player->maxHP` khi thao tác qua pointer.
4. Không để HP vượt `maxHP`; tránh cộng rồi mới kiểm tra nếu tổng có thể vượt miền biểu diễn của int.
5. Trong `main()`, tạo `Player* target` trỏ tới Mage và hồi 30 HP.
6. Gọi `HealPlayer(nullptr, 30)` để xác nhận hàm xử lý trường hợp vắng đối tượng; lời gọi đó không tự thay đổi biến target của caller.
7. Đổi target sang Knight rồi thử hồi tiếp. Giải thích vì sao thay pointer không tạo thêm Player.

### Các ca tự kiểm tra

Các ca có Player là độc lập, dùng lại HP ban đầu tương ứng cho mỗi hàng.

| Dữ liệu trước khi gọi | amount | Kết quả cần đạt |
|---|---:|---|
| Mage 50/80 HP | 30 | 80/80 HP |
| Mage 70/80 HP | 30 | 80/80 HP |
| Mage 80/80 HP | 30 | Vẫn 80/80 HP |
| Mage 50/80 HP | 0 hoặc -10 | Vẫn 50/80 HP |
| Player 0/0 HP | 30 | Vẫn 0/0 HP |
| nullptr | 30 | Không dereference, không crash |
| Knight 60/100 HP, target đã đổi sang Knight | 30 | Knight thành 90/100 HP, Mage không đổi |

**Đạt khi:** kết quả đúng cả ở biên, giải thích được null khác dangling, chỉ sửa Player được chọn và giữ HP trong giới hạn. Chạy một lần không crash chưa đủ chứng minh pointer hợp lệ trong mọi tình huống.

<a id="arena"></a>
## Arena ôn tập tổng hợp: chương trình C++17 ba file

Ví dụ đầy đủ được giữ từ handoff 01–09. Nó dùng đúng nền tảng đã có: header/source, struct, enum class, array, reference, pointer, null check, vòng lặp, hàm và I/O. Đây là ví dụ mẫu để đọc, build và đối chiếu sau khi tự làm Healing; không phải một bài nộp mới được chấm.

Tạo project Console App C++17, thêm đúng ba file dưới và build **cả `Arena.cpp` lẫn `Main.cpp`**. Không include `.cpp`. Ví dụ này là project độc lập, không ghép chung với class Player khác ở bài 11.

**Tiền điều kiện:** mọi Player trước khi gọi các hàm có `0 <= health <= maxHP`, với `maxHP >= 0`. Reference và pointer không null phải chỉ tới Player còn sống. Damage/amount không dương được bỏ qua. Những điều kiện này giúp phép trừ giới hạn HP và phép cộng sau kiểm tra nằm trong miền int; chương trình không phải bộ sửa mọi dữ liệu Player tùy ý bị hỏng.

### Arena.h

```cpp
// example: arena-review; file: Arena.h
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

### Arena.cpp

```cpp
// example: arena-review; file: Arena.cpp
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

### Main.cpp

```cpp
// example: arena-review; file: Main.cpp
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

### Đọc hiểu trước khi sửa ví dụ

- `ApplyDamage` nhận `Player&` vì cần sửa một Player bắt buộc tồn tại.
- `HealPlayer` nhận `Player*` vì thiết kế chấp nhận trường hợp không chọn Player (`nullptr`).
- `PrintPlayer` và `IsAlive` nhận `const Player&` để đọc Player mà không copy toàn bộ object hoặc sửa qua tham số.
- Vòng đầu dùng `Player&` để tác động vào phần tử gốc. Vòng sau chỉ đọc nên dùng `const Player&`.
- Phép kiểm tra `amount >= maxHP - health` so sánh lượng hồi với chỗ trống trước khi cộng. Nhờ tiền điều kiện HP, không cần tạo tổng lớn rồi mới cắt giới hạn.

**Tự thử:** thay target thành `&players[0]`, dự đoán output trước khi chạy; sau đó thử amount bằng 0, số âm và số lớn. Với chương trình gốc, gọi HealPlayer truyền null không có tác dụng lên target đang trỏ tới Mage.

<a id="self-check"></a>
## 23 câu tự kiểm tra nền tảng và mục tiêu ôn bài 10–17.2

Trả lời mà không nhìn lại bài; chỉ mở đáp án sau khi làm. Khi sai, viết chương trình tối thiểu để kiểm tra các trường hợp có hành vi xác định. Với ví dụ cố ý UB, nhiệm vụ là nhận diện/sửa lỗi; không chạy để đoán một output chắc chắn.

### Nhóm A — Cú pháp và toán tử

1. Phân biệt `std::cout << x` và `std::cin >> x`.
2. `float x = 7 / 2;` cho giá trị bao nhiêu? Vì sao?
3. `const` khác `constexpr` ở điểm nào? `const int n = 3` có dùng làm kích thước `std::array<int, n>` không?
4. `auto x = 5.5f;` suy luận kiểu nào? Có làm tăng chi phí runtime vì phải đoán không?
5. `int a = 5; int b = a++;` — sau đó a, b bằng bao nhiêu?
6. `5 ^ 3` bằng bao nhiêu? Toán tử `^` có phải phép lũy thừa không?
7. `isAlive && isGrounded` khác `isAlive & isGrounded` ở điểm nào khi hai biến đều là bool?

### Nhóm B — Điều kiện, vòng lặp, hàm

8. Thiếu `break` trong `switch` có thể gây ra điều gì?
9. Khác biệt chính giữa `while` và `do-while`?
10. `continue` trong `for` có bỏ qua bước cập nhật biến đếm không?
11. Vì sao hàm `void ApplyDamage(int hp)` chỉ sửa tham số của nó không thay đổi biến hp của caller?
12. Function declaration khác function definition ra sao?
13. Có thể overload hai hàm nếu chỉ khác kiểu trả về không?

### Nhóm C — Header, container, struct, pointer

14. `#pragma once` giải quyết loại vấn đề nào? Có tự ngăn định nghĩa hàm non-inline trùng ở hai translation unit không?
15. `LNK2019` thường liên quan compiler hay linker? Nêu một nguyên nhân.
16. Với `std::array<int, 3> a{1, 2, 3}`, các chỉ số hợp lệ là gì?
17. Khác biệt giữa `std::array` và `std::vector`?
18. Vì sao `for (const Player& p : players)` thường phù hợp hơn `for (Player p : players)` nếu chỉ in tên?
19. `Player& p` và `Player* p` có giống nhau không? Nêu hai khác biệt.
20. `int hp = 100; int* p = &hp; *p = 50;` — hp bằng bao nhiêu?
21. Với pointer Player hợp lệ có member health, dùng `p.health` hay `p->health` để truy cập?
22. Điều gì xảy ra nếu dereference một pointer đang mang giá trị null?
23. Trong `int& ref = a; ref = b;`, reference có chuyển sang tham chiếu b không?

<details>
<summary>Đáp án gợi ý — mở sau khi tự trả lời</summary>

1. `cout <<` xuất; `cin >>` nhập.
2. `3.0f`: chia nguyên 7/2 được 3 rồi chuyển thành float.
3. const hạn chế sửa qua cách truy cập đó, có thể nhận giá trị runtime; biến constexpr cần initializer là constant expression. **Có:** const int n=3 trong ví dụ dùng được làm tham số kích thước array.
4. float; kiểu suy luận ở compile-time, không có bước đoán kiểu động ở runtime chỉ vì viết auto.
5. a=6, b=5.
6. 6; `^` là bitwise XOR.
7. `&&` có short-circuit; `&` không short-circuit. Với hai bool, toán tử bitwise còn áp dụng integer promotion; không thay hai cách viết cho nhau chỉ vì một số kết quả điều kiện trông giống nhau.
8. Có thể fallthrough chạy tiếp phần nhánh bên dưới tới khi gặp lệnh thoát phù hợp hoặc hết switch.
9. while kiểm tra trước; do-while chạy thân ít nhất một lần rồi mới kiểm tra.
10. Không; for vẫn thực hiện bước cập nhật rồi kiểm tra điều kiện cho lượt kế.
11. Tham số int là đối tượng riêng chứa giá trị sao chép từ đối số; cần reference/pointer theo thiết kế nếu muốn sửa object của caller.
12. Declaration công bố hàm; definition cung cấp thân hàm. Một definition đồng thời cũng là declaration.
13. Không; thay mỗi kiểu trả về không tạo overload hợp lệ.
14. Ngăn một header bị include lặp trong một translation unit; không chữa định nghĩa hàm non-inline trùng giữa nhiều translation unit.
15. Linker; ví dụ Arena.cpp không được đưa vào build, hoặc definition không khớp declaration được dùng.
16. 0, 1, 2.
17. array có số phần tử cố định trong kiểu; vector có thể đổi số phần tử. Cả hai cần index hợp lệ khi dùng operator[].
18. Không copy toàn bộ Player và thể hiện chỉ đọc qua p; sửa một bản sao không thay đổi Player gốc.
19. Pointer có thể null và đổi địa chỉ; reference hợp lệ phải gắn với object thích hợp và không rebind. Cả pointer lẫn reference đều có thể dangling khi object đã hết lifetime.
20. `hp` bằng `50`.
21. `p->health`, tương đương `(*p).health`, với pointer hợp lệ và member có thể truy cập.
22. Hành vi không xác định; có thể crash nhưng không được dựa vào việc crash hay không để xác nhận an toàn. Câu hỏi nói về typed pointer đang null, không phải viết trực tiếp literal `*nullptr`.
23. Không; phép gán ghi giá trị b vào a qua ref.

</details>

### Mục tiêu ôn bổ sung bài 10–17.2

Những mục này là đề xuất để tự kiểm tra hiện tại, không phải xác nhận đã có thêm bài nộp hay điểm số.

| Buổi | Tự giải thích và áp dụng | Điều kiện tự kiểm tra |
|---|---|---|
| [10](#cpp-10) | Phân biệt owner/mượn; chọn đúng new/delete và new[]/delete[]; chuyển ví dụ tự quản sang unique_ptr. | Không delete kết quả get(); giải thích được raw pointer=nullptr khác unique_ptr=nullptr; không dùng pointer sau khi owner hủy. |
| [11](#cpp-11) | Tự dựng Player có invariant HP, constructor, getter const và method thay đổi HP. | Kiểm tra maxHP 0/âm theo hợp đồng đã chọn; damage âm/0/lớn; caller không sửa trực tiếp member private. |
| [12.1](#cpp-12-1) | Đối chiếu Animal/Dog có và không có virtual bằng base reference/pointer. | Dự đoán đúng method được chọn; phân biệt overload/override; dùng override để compiler kiểm tra chữ ký. |
| [12.2](#cpp-12-2) | Giải thích this, thứ tự dựng/hủy và virtual destructor khi sở hữu derived qua base. | Nhận ra trường hợp delete qua base cần destructor phù hợp; không chấm output của chương trình có UB. |
| [13](#cpp-13) | Viết GetMax/ClampValue với int/float; giải thích deduction, explicit template argument và definition trong header. | Test dưới/trong/trên/đúng biên và khoảng một giá trị; nêu tiền điều kiện low<=high; không giả vờ mọi T đều dùng được. |
| [14](#cpp-14) | Phân biệt local static, static member, const pointer và namespace. | Theo dõi bộ đếm trước/sau scope; thử đúng các phép gán được phép của pointer to const/const pointer. |
| [14.5](#cpp-14-5) | Chọn named cast theo ý định, giải thích explicit. | Downcast pointer thành công/thất bại/null; nhận diện khác biệt reference failure; không chạy cast gây UB. |
| [15](#cpp-15) | Tự tách file và dùng forward declaration, điều kiện tiền xử lý. | Cờ bằng 0 phân biệt if/ifdef; mỗi cpp có đủ include và definition được build. |
| [16](#cpp-16) | Copy/move Inventory và lambda AOE theo hai buổi nguồn. | Không giả định tùy tiện nguồn sau move; capture đúng lifetime; callback đúng số tham số; thử danh sách rỗng. |
| [17–17.1](#cpp-17-1) | Dùng breakpoint, stepping, Watch/Locals và Call Stack tìm lỗi. | Chỉ ra statement đầu tiên lệch kỳ vọng; chứng minh sửa reference, clamp HP và predicate sống. |
| [17.2](#cpp-17-2) | Giải thích một gameplay loop nhiều file, ownership và trạng thái thắng. | Kiểm tra action potion loại trừ attack; Enemy chết không phản công; state và log khớp; phân biệt hợp đồng với phòng vệ chưa có. |

<a id="mistakes"></a>
## Lỗi thường gặp, checklist và cách cải thiện code

### Cú pháp, luồng xử lý và dữ liệu

| Lỗi/rủi ro | Cách nhận diện và xử lý |
|---|---|
| Dùng `=` thay `==` | Gán khác so sánh; bật warning, đọc lại điều kiện. |
| Chia nguyên rồi gán float | Cast ít nhất một toán hạng trước phép chia; bảo đảm mẫu khác 0. |
| Đọc biến chưa khởi tạo hoặc nhập lỗi rồi dùng tiếp | Khởi tạo biến; kiểm tra trạng thái cin. Với vòng nhập, xử lý lỗi và EOF theo thiết kế, không lặp vô hạn. |
| Dùng `health != 0` để kiểm tra sống | HP âm vẫn khác 0; mô hình này dùng health>0 và giữ invariant HP. |
| In HP trước khi cập nhật hoặc clamp | Xử lý trạng thái trước, hiển thị sau. Hàm thay HP cần có hậu điều kiện rõ. |
| Hai mảng tên/HP song song lệch index | Gom dữ liệu liên quan vào struct/class; tránh phải giữ nhiều mảng đồng bộ bằng tay nếu chưa cần. |
| Sao chép Player khi muốn sửa gốc | Dùng Player& hoặc pointer hợp lệ theo ý nghĩa thiết kế; chỉ đọc object lớn thường dùng const Player&. |
| Signed/unsigned trong `i < values.size()` | Chọn kiểu index thích hợp hoặc range-for; không cast mù giá trị âm sang unsigned. |
| Index sai, pop_back khi rỗng | Kiểm tra phạm vi/rỗng; at() có kiểm tra giới hạn nhưng có thể ném exception. |
| Nghĩ reserve đã tạo thêm phần tử | Reserve đổi capacity, resize đổi size; không truy cập phần tử chưa tồn tại. |
| Thiếu break trong switch | Có thể fallthrough; nếu cố ý phải thể hiện rõ. Cơ chế `[[fallthrough]]` học kỹ sau. |
| Điều kiện vòng lặp không tiến tới kết thúc | Kiểm tra bước cập nhật, continue và đường thoát, cả khi nhập lỗi. |

### Pointer, ownership và OOP

| Lỗi/rủi ro | Cách nhận diện và xử lý |
|---|---|
| Kiểm tra null sau dereference | Phải kiểm tra trước truy cập có thể rỗng; điều đó vẫn chưa chứng minh object còn sống. |
| Giữ pointer/reference sau khi object hủy hoặc vector realloc | Theo dõi lifetime; lấy lại pointer/reference hợp lệ khi cần. Không dùng việc “chạy vẫn được” để hợp thức hóa UB. |
| Gán raw pointer=nullptr rồi tưởng đã giải phóng | Raw pointer assignment không delete object; làm mất owner duy nhất có thể leak. |
| Delete hai lần hoặc delete pointer mượn | Xác định rõ owner; ưu tiên RAII. Không delete kết quả unique_ptr.get(). |
| Ghép new[] với delete | Dùng delete[] với mảng cấp phát new[]; bài sản phẩm ưu tiên container/owner phù hợp. |
| Gán null một alias rồi dùng các alias khác như cũ | Null hóa một pointer không sửa alias khác; sau giải phóng, mọi alias tới object ấy phải ngừng truy cập. |
| Class private nhưng constructor tạo HP không hợp lệ | Encapsulation cần hợp đồng đầu vào và invariant thật sự, không chỉ thêm từ khóa private. |
| Xóa derived qua base thiếu virtual destructor trong thiết kế sở hữu đa hình | Sửa thiết kế destructor/ownership; không mô tả đơn giản là luôn chỉ mất lời gọi destructor con. |
| Dùng virtual cho mọi method hoặc nhầm override với overload | Chỉ dùng dynamic dispatch khi có nhu cầu; override kiểm tra ghi đè virtual, overload thay danh sách tham số. |
| Viết mã chỉ để xuất hiện cú pháp | Tách bài luyện thao tác khỏi quyết định thiết kế thực tế; mỗi hàm/member phải có nhiệm vụ rõ. |

### Nhiều file và template

| Lỗi/rủi ro | Cách nhận diện và xử lý |
|---|---|
| Header dùng std::string nhưng không include string | Header tự include dependency trực tiếp cần để khai báo của nó có nghĩa. |
| Quên declaration/include/scope | Có thể gặp C3861; kiểm tra tên và khai báo trước nơi gọi. |
| Quên đưa Arena.cpp vào build hoặc definition sai chữ ký | Có thể gặp LNK2019; linker cần definition tương ứng được build. |
| Định nghĩa cùng hàm hai lần trong một translation unit | Có thể gặp C2084; tìm definition trùng, kiểm tra include/header. |
| Hàm thường non-inline định nghĩa trong header được include ở nhiều translation unit | Có thể gặp LNK2005; chuyển definition sang một cpp hoặc dùng inline khi phù hợp. Pragma once không chữa mọi trường hợp này. |
| Đưa definition template vào cpp mà nơi dùng không thấy definition và không có cách instantiation thích hợp | Với mẫu đang học, để definition trong header; ngoại lệ/explicit instantiation học sau. |
| Gọi GetMax(int, float) rồi mong cùng một T tự đoán được | Mẫu hai tham số cùng T có yêu cầu deduction tương ứng; chỉ rõ T hoặc chuẩn hóa kiểu đầu vào. |
| Clamp với low>high hoặc test sai yêu cầu | Nêu tiền điều kiện và kiểm tra khoảng; phân biệt lỗi test với lỗi thuật toán/template. |

### Checklist tự review

### Những lỗi đã gặp ở các buổi cuối

| Lỗi/rủi ro | Cách nhận diện và xử lý |
|---|---|
| Đếm “đã tạo” nhưng gọi đó là “đang sống” | Kiểm tra constructor nào tăng, có giảm khi destruction không, copy/move được tính ra sao; đặt tên theo hợp đồng thật. |
| Dùng const int& getter chỉ vì nghĩ luôn nhanh hơn int | Với giá trị nhỏ, trả int đơn giản và tránh ràng buộc lifetime không cần thiết. |
| Nghĩ macro bằng 0 là chưa define | So sánh #if với #ifdef; test cả cấu hình 0 và 1. |
| Tin std::move luôn move và mọi nguồn đều rỗng | Kiểm tra overload/kiểu và hợp đồng moved-from; gán lại nguồn trước khi dùng theo giả định mới. |
| Capture reference rồi giữ lambda lâu hơn biến gốc | Xác định nơi callback được gọi; reference/pointer capture không tự kéo dài lifetime. |
| Gán count_if vào int hoặc nhầm với size_type | Giữ đúng kiểu trả về bằng auto khi phù hợp; xem miền giá trị trước khi chuyển kiểu. |
| Sửa bản sao trong range-for | So state biến vòng lặp với phần tử gốc trong debugger; dùng auto& khi cần sửa. |
| Đếm health >= 0 là sống | Theo quy tắc game, sống là health > 0; HP 0 phải được test riêng. |
| Uống potion rồi vẫn tấn công cùng lượt | Viết hai action loại trừ nhau, kiểm tra state trước/sau và đường else. |
| Tạo Enemy tên Boss rồi coi đó là object Boss | Tên dữ liệu không thay dynamic type; tạo đúng kiểu khi thiết kế thật sự cần. |
| Console báo attack khi state vừa dùng potion | Xác định action thực tế rồi log; kết quả state đúng không tự làm thông báo đúng. |
| Chọn frame khác rồi nghĩ code đã chạy thêm | Call Stack thay context quan sát; phân biệt thao tác chọn frame với lệnh stepping. |

### Checklist trước khi nộp

- Code có đúng yêu cầu ở nhiều input, hay chỉ đúng một output mẫu?
- Đã thử HP 0, maxHP 0, input âm, damage lớn, vector rỗng và pointer null chưa?
- Các trường hợp input không hợp lệ có hợp đồng rõ? Có đọc biến chưa khởi tạo không?
- Sau hàm thay HP, invariant `0 <= health <= maxHP` còn giữ không?
- Mỗi hàm có nhiệm vụ rõ? Tính toán/trạng thái có bị trộn với in console khi không cần không?
- Hàm chỉ đọc có dùng const/const-reference hợp lý? Pointer mượn có còn trong lifetime của owner không?
- Có new/delete thủ công không cần thiết? Có nhầm owner với alias không?
- Header tự đủ include? Có build mọi cpp cần thiết? Compiler còn warning chưa hiểu không?
- Ví dụ có đúng chuẩn C++ đang chọn? Những đoạn cố ý lỗi có được tách khỏi chương trình chạy không?

### Thói quen viết và tối ưu

Dùng tên nhất quán, nói đúng mục đích: `health` cho HP đang thay đổi, `initialHP` cho giá trị ban đầu; `ApplyDamage`, `IsAlive`, `PrintPlayer` cho ba trách nhiệm khác nhau. Dùng khối `{}` rõ ràng, tránh nhồi nhiều câu lệnh vào một dòng và ưu tiên constant thay số hard-code có ý nghĩa.

Ưu tiên đúng và dễ đọc trước khi tối ưu. Auto suy kiểu lúc biên dịch; range-for hay array không mặc nhiên tốn tài nguyên hơn mọi cách viết khác. Constexpr dùng để diễn đạt yêu cầu constant expression, không hứa luôn nhanh hơn const. Không thay mọi phép nhân/chia bằng bit shift. Đo bottleneck bằng profiler/debugger khi có bài toán thực tế.

<a id="study-history"></a>
## Lịch sử thực hành và trạng thái có nguồn

Bảng giữ điểm **được ghi trong handoff ngày 21/10/2026**, phạm vi 01–13 theo giáo trình **24/10/2026**, và các buổi sau theo **Completion Pack tổng kết 27/10/2026**. Đây là lịch sử từ tài liệu người học cung cấp; lần tổng hợp này không chấm lại bản nộp gốc và không suy thêm điểm số hay mức nghề nghiệp.

Nguồn ngày 27/10 xác nhận đã hoàn thành khóa nền tảng đến 17.2 ở mức ứng dụng nhỏ. Riêng class template có ví dụ giảng, bài thực hành template chủ yếu là function template. Trạng thái 09 “chưa gửi để chấm” của nguồn 21/10 đã cũ, không dùng nó để phủ nhận thông tin có bài nộp ở nguồn mới. Điểm Final 9.5/10 thuộc **bản tự nộp theo handoff**; thư mục code hiện có là bản trợ lý chỉnh sau đó.

| Buổi | Bài thực hành và trọng tâm | Điểm có nguồn | Trạng thái hợp nhất |
|---|---|---|---|
| [01](#cpp-01) | Player Information: biến, nhập/xuất, tên, HP, speed, %HP | 9.5/10 | Đã học/có bài nộp |
| [02](#cpp-02) | Damage System: const/constexpr, auto, cast | 10/10 | Đã học/có bài nộp |
| [03](#cpp-03) | Player Combat System: toán tử, coins, cờ trạng thái | 9/10 | Đã học/có bài nộp |
| [04](#cpp-04) | Combat & Potion System: if/switch/ternary, giới hạn HP | 9.5/10 | Đã học/có bài nộp |
| [05](#cpp-05) | Training Arena: vòng lặp, break/continue, chơi lại | 9/10 | Đã học/có bài nộp |
| [06](#cpp-06) | Refactor Training Arena thành các hàm | 9/10 | Đã học/có bài nộp |
| [06.5](#cpp-06-5) | Modular Training Arena: Main.cpp/Arena.h/Arena.cpp | 9.5/10 | Đã học/có bài nộp |
| [07](#cpp-07) | Party Management: array/vector/string, range-for | 9.5/10 | Đã học/có bài nộp |
| [08](#cpp-08) | Character Data System: struct/enum, reference/const-reference | 9.5/10 | Đã học/có bài nộp |
| [09](#cpp-09) | Pointer-Based Healing: pointer/null/->, đổi target | Không có điểm trong các nguồn | Đã học/có bài nộp |
| [10](#cpp-10) | Dynamic Character Manager: new/delete, unique_ptr, get() | Không có điểm trong các nguồn | Đã học/có bài nộp |
| [11](#cpp-11) | Player Class System: constructor, encapsulation, getter/const method | Không có điểm trong các nguồn | Đã học/có bài nộp |
| [12.1](#cpp-12-1) | Animal/Dog Virtual Test: inheritance/virtual/override, base pointer | Không có điểm trong các nguồn | Đã học/có bài nộp |
| [12.2](#cpp-12-2) | Animal/Dog Lifetime: constructor cha, virtual destructor, this, unique_ptr | Không có điểm trong các nguồn | Đã học/có bài nộp |
| [13](#cpp-13) | Generic Game Math: function template, explicit template argument, clamp | Không có điểm trong các nguồn | Nguồn ghi hoàn thành; class template nâng cao chưa thành thạo |
| [14](#cpp-14) | Enemy Tracker: static, const pointer, namespace | Không ghi điểm số | Handoff 27/10 ghi bài đạt |
| [14.5](#cpp-14-5) | Casting: dynamic cast Boss, nhận diện named casts | Không ghi điểm số | Đã thực hành static_cast/dynamic_cast; hai cast mức thấp chủ yếu nhận diện |
| [15](#cpp-15) | Combat nhiều file: preprocessor, forward declaration, dependency | Không ghi điểm số | Handoff 27/10 ghi bài đạt |
| [16.1](#cpp-16) | Copy/Move Inventory: dùng copy/move và Rule of Zero | Không ghi điểm số | Đã thực hành; custom Rule of Five/forwarding chưa học sâu |
| [16.2](#cpp-16) | Lambda AOE: capture, for_each, count_if | Không ghi điểm số | Handoff 27/10 ghi bài đạt |
| [17.1](#cpp-17-1) | Debugger: tự sửa copy trong range-for, HP âm, đếm sống | Không ghi điểm số | Handoff 27/10 ghi tự tìm và sửa ba lỗi |
| [17.2](#cpp-17-2) | Arena Combat Simulator — Final Assessment | 9.5/10 theo handoff 27/10 cho bản tự nộp | Bản tham khảo đã chỉnh nhỏ có trong Completion Pack; không coi là bản tự nộp nguyên gốc |

Những góp ý từ quá trình học cần tiếp tục kiểm tra: cập nhật HP trước khi in; đặt tên đúng trách nhiệm; constant thay hard-code; tránh copy Player không cần thiết; xử lý signed/unsigned; kiểm tra đúng giới hạn speed đề yêu cầu. Ở GameMath, đặt max speed 100.0f thay vì yêu cầu 10.0f là sai yêu cầu test, không tự chứng minh thuật toán template sai.

Đã làm các bài này cho thấy trải nghiệm thực hành nền tảng trong phạm vi mô tả; không đủ để tự xác nhận trình độ Junior C++/Unreal. Trang công cụ 17 là phần biên tập hỗ trợ 17.1, không thêm một bài được chấm. Unreal và các chủ đề nâng cao chưa được đánh giá vẫn thuộc lộ trình tiếp theo. Lịch sử trong tài liệu không tự ghi đè trạng thái đọc bài, SRS, XP hoặc tiến độ đã lưu trong trình duyệt.

<a id="review-routine"></a>
## Chu trình ôn 20 phút

Không cần làm lại toàn bộ project mỗi buổi:

1. **5 phút:** đọc phần cú pháp của một bài, giải thích bằng lời từng lệnh và điều kiện dùng.
2. **8 phút:** tự viết một chương trình ngắn không nhìn đáp án, ví dụ nhập HP, áp dụng damage rồi in trạng thái.
3. **4 phút:** dự đoán output của ví dụ có hành vi xác định, sau đó build/chạy để đối chiếu. Với đoạn lỗi, xác định compile error, logic error hay UB trước.
4. **3 phút:** ghi lại 2–3 lỗi từng gặp, nguyên nhân và cách kiểm tra lần sau.

### Luân phiên theo chủ đề

| Phiên | Phạm vi | Điểm cần nhớ |
|---|---|---|
| A | [01](#cpp-01)–[03](#cpp-03) | I/O, kiểu, cast trước chia, const/constexpr, logic/bitmask |
| B | [04](#cpp-04)–[05](#cpp-05) | Điều kiện, scope, vòng lặp, break/continue |
| C | [06](#cpp-06)–[06.5](#cpp-06-5) | Hàm, tham số, header/source, compiler/linker |
| D | [07](#cpp-07)–[08](#cpp-08) | Container/string, struct/enum, reference, tránh copy ngoài ý muốn |
| E | [09](#cpp-09) | Địa chỉ/dereference/null, hiệu lực pointer, Healing |
| F | [10](#cpp-10)–[11](#cpp-11) | Lifetime/ownership, unique_ptr, class invariant |
| G | [12.1](#cpp-12-1)–[12.2](#cpp-12-2) | Dispatch, override, this, constructor/destructor |
| H | [13](#cpp-13) | Deduction, template trong header, test clamp ở biên |
| I | [14](#cpp-14)–[14.5](#cpp-14-5) | Static, const pointer, cast thành công/thất bại và explicit |
| J | [15](#cpp-15) | Compile/link, macro bằng 0, include trực tiếp và incomplete type |
| K | [16](#cpp-16) | Copy/move, nguồn sau move, capture và số tham số callback |
| L | [17](#cpp-17)–[17.1](#cpp-17-1) | Breakpoint, stepping, đúng frame, ba lỗi logic và ca biên |
| M | [17.2](#cpp-17-2) | Một action mỗi lượt, state/log nhất quán, ownership và điều kiện thắng |

Đây là lịch gợi ý, không phải danh sách buổi đã hoàn thành. Tự coi “đã nhớ” khi có thể viết ví dụ không nhìn tài liệu, giải thích từng dòng, chọn đúng kiểu tham số và chỉ ra trường hợp nào khiến cách dùng không còn hợp lệ. Nếu sai, quay về bài và thử một ví dụ nhỏ hơn trước khi tiếp tục.

---

<a id="roadmap"></a>

## Giới hạn kiến thức và bước tiếp theo

Completion Pack đã bổ sung đủ nội dung của **khóa Standard C++ nền tảng đến 17.2**. Các bài static/casting/preprocessor/copy-move/lambda/debugging không còn là mục chờ tài liệu; chúng nằm trực tiếp trong lộ trình học và bảng tra cứu.

| Mức độ | Phạm vi |
|---|---|
| Đã học và thực hành theo handoff | Cú pháp/luồng chương trình, hàm/nhiều file, container, class, pointer/reference, unique_ptr căn bản, đa hình căn bản, function template, static, cast thông dụng, preprocessor, dùng copy/move, lambda và debugger |
| Chỉ giới thiệu hoặc minh họa nhỏ | Class template, const_cast/reinterpret_cast, protected sâu, object slicing, shared_ptr/weak_ptr và cycle, pure virtual/interface |
| Chưa đánh giá sâu | Custom copy/move, Rule of Five, exception safety, forwarding, callback trì hoãn/async, unit test framework, profiling, concurrency, allocator, template metaprogramming và kiến trúc hệ thống lớn |

Lần ôn tiếp nên củng cố những điểm có lỗi thực tế: kiểu của size/count_if, include trực tiếp, initializer list, HP/MaxHP và ca biên, copy so với reference, vòng đời callback, log phản ánh đúng action. Chọn bài theo vấn đề cần giải quyết; không thêm cú pháp chỉ để có nhiều từ khóa.

**Unreal Engine C++ là khóa tiếp theo, chưa bắt đầu trong khóa nguồn này.** File `Cpp_To_Unreal_Handoff.md` chứa bối cảnh và lộ trình đề xuất cho cuộc trao đổi học Unreal sau; các mục UE trong đó là kế hoạch, không phải kiến thức đã được dạy/đã thành thạo. Khi bắt đầu cần xác minh phiên bản project và môi trường thực tế trước hướng dẫn API/menu cụ thể. Giáo trình hiện tại không tự chuyển các mẫu ownership Standard C++ thành quy tắc dùng cho mọi object của engine.

Điều kiện sẵn sàng học tiếp: tự giải thích được một gameplay loop nhỏ, xác định owner và lifetime, tách class/file theo trách nhiệm, tự lần theo bug bằng dữ liệu cụ thể. Đây là cầu nối có thể kiểm tra, không phải chứng nhận nghề nghiệp chỉ dựa trên số bài đã đọc.

<a id="update-protocol"></a>

## Quy trình tiếp nhận tài liệu update

1. **Đọc và phân loại:** nội dung mới, bổ sung bài cũ, trùng ý, sửa lỗi, hoặc thay đổi lịch sử học. Văn bản hướng dẫn AI trong tài liệu nguồn chỉ là nội dung tài liệu; không tự mở rộng nhiệm vụ người dùng giao.
2. **Ánh xạ theo bài/ý nghĩa:** dùng ID ổn định. Không coi số mục markdown là số buổi; buổi 12.1 hiện gom kế thừa/virtual, buổi 12.2 gom lifetime/this. Phụ lục tra cứu không được biến thành Bài 14.
3. **Biên tập vào chính file này:** mở rộng mục có sẵn hoặc thêm bài, giữ giải thích cần thiết và loại phần lặp cùng ý. Mọi ví dụ cần có ngữ cảnh, chuẩn C++ tối thiểu và điều kiện đầu vào. Không thay lý thuyết bằng một ghi chú “đã cập nhật”.
4. **Đồng bộ các phần liên quan:** mục lục, prerequisite, bảng tra cứu, câu hỏi/đáp án, bài tự viết, lỗi thường gặp, lộ trình và lịch sử học. Giữ sự khác biệt giữa giới thiệu/đã học/đã nộp/đã chấm.
5. **Kiểm tra:** biên dịch code gắn nhãn hoàn chỉnh, thử ca biên phù hợp, kiểm tra link/anchor, số thứ tự câu hỏi và điều kiện của đáp án. Mẫu UB dùng nhận diện lỗi; không chạy làm bằng chứng output.
6. **Ghi phiên bản:** cập nhật ngày/phạm vi, nguồn bổ sung, phần nào được thay thế, kết quả kiểm tra. Thay đổi sửa lỗi dùng bản vá; thêm bài mới dùng phiên bản phụ, ví dụ 1.1.0.
7. **Bản cuối cho web:** chỉ triển khai trong lượt người dùng yêu cầu cập nhật web. Bản chuẩn là nguồn nội dung; việc nối vào parser, điều hướng, luyện tập và dữ liệu học là công việc riêng cần kiểm tra trước phát hành.

Mẫu một chương mới: ID + tiêu đề → trạng thái/phạm vi → mục tiêu → cần biết trước → bản chất và cú pháp → ví dụ minh họa/hoàn chỉnh → lỗi thường gặp → câu tự kiểm tra → bài tự viết và tiêu chí đạt. Không tự thêm điểm chấm hoặc lời giải hoàn chỉnh cho bài đang giao.

<a id="web-integration"></a>

## Quy ước tích hợp và kiểm tra website

### Ánh xạ và cấu trúc

- Luồng học chính dùng nội dung từ 01 đến 17.2. Các trang đọc giữ ID riêng: 06.5, 12.1/12.2, 14.5 và 17.1/17.2; chương 16 gom hai buổi 16.1/16.2, trang 17 là hướng dẫn công cụ biên tập. Số trang giao diện không phải số bài từng được chấm.
- Thư viện 56 mục hiện tại vẫn là nơi tra cứu mở rộng. Tái sử dụng lý thuyết cơ bản chuẩn hóa, không tạo hai bản dài cùng ý rồi sửa riêng.
- Nguồn chuẩn này có anchor và phần phụ trợ rõ; bộ đọc handoff cũ nhận H1 số nguyên không thể import trực tiếp. Adapter/manifest riêng đọc anchor cho bài và tài nguyên; không ép ID sang số thực hoặc trùng số với thư viện cũ.
- Nội dung phải hiển thị trực tiếp trong bài; Dashboard, Tiếp tục, bài trước/sau, tìm kiếm, quiz, challenge, flashcard và bảng tra cứu cùng dùng ánh xạ thống nhất.

| Bài chuẩn | Mục `/lesson/:id` cũ liên quan |
|---|---|
| 00–01 | 0, 1, 2, 43 |
| 02–03 | 3, 22, 46 |
| 04–05 | 4, 17 |
| 06–06.5 | 5, 1, 2, 41 |
| 07 | 20, 49 |
| 08–09 | 5, 6, 12, 22 |
| 10 | 7, 8, 9, 10 |
| 11 | 12, 13 |
| 12.1–12.2 | 12, 13, 14, 15 |
| 13 | 19, 41 |
| 14–14.5 | 22, 46, 47 |
| 15 | 2, 41 |
| 16 | 11, 18 |
| 17–17.2 | 43, 44, 45 |

### Dữ liệu người học

Giữ `cpp-dojo-state-v1`, progress/SRS/exercises, ID câu hỏi/thẻ, XP/streak và bookmark. Thêm tiến độ khóa học riêng; đọc mục 3 thư viện không tự đồng nghĩa hoàn thành bài 02 và 03. Không thay dữ liệu trình duyệt chỉ vì nhập tài liệu. Ôn mặc định theo phạm vi học đã chọn/xác nhận; nâng cao/Unreal là lựa chọn riêng. Kiểm tra dữ liệu cũ vẫn còn sau reload và đóng/mở trình duyệt.

### Quy tắc đối chiếu với thư viện và thẻ cũ

Các ghi chú sau là tiêu chí đồng bộ thư viện/thẻ khi triển khai và rà soát lại về sau; không mở thêm bài nâng cao cho người học. Kết quả build/deploy là bằng chứng riêng, không suy ra chỉ từ việc bảng này tồn tại:

| Vấn đề trên bản web cũ | Chuẩn cần áp dụng khi sửa |
|---|---|
| Challenge xóa derived qua base thiếu virtual destructor rồi chấm một output | Với delete thông thường trong phạm vi C++17 đang xét, đây là UB. Sửa mẫu hoặc hỏi nhận diện lỗi. |
| RAII chỉ gắn với stack; std::array luôn ở stack | RAII theo lifetime của owner; array chứa phần tử trong object, nơi lưu trữ tùy object. |
| Smart pointer “không bao giờ leak” | Shared ownership cycle vẫn có thể leak; unique_ptr có thể bị dùng sai, chẳng hạn bỏ mất tài nguyên sau release. |
| FileHandle/Texture tự giải phóng nhưng copy mặc định | Cần chính sách sở hữu đúng; ưu tiên Rule of Zero. Không dạy wrapper copy được nếu hai bản cùng giải phóng một tài nguyên. |
| Compiler luôn sinh đủ cả copy/move members | Có điều kiện sinh/deleted; destructor do người dùng khai báo ngăn implicit move constructor. |
| Mọi object sau move đều rỗng; move luôn rẻ | Nhiều kiểu thư viện chỉ bảo đảm trạng thái hợp lệ nhưng không xác định cụ thể; không áp bừa cho class tự viết. std::move không tự chuyển tài nguyên. |
| pragma once chữa mọi LNK2005 | Nó không giải quyết ODR giữa nhiều translation unit; chuyển định nghĩa hàm thường sang một cpp hoặc dùng inline đúng mục đích. |
| assert chỉ phụ thuộc tên Debug/Release | NDEBUG quyết định vô hiệu hóa assert. |
| reserve bảo đảm không bao giờ realloc, emplace_back luôn nhanh hơn | reserve chỉ có giới hạn capacity; emplace_back không phải tối ưu luôn đúng. |
| C-style cast thử mọi loại cast; dynamic_cast lỗi luôn trả null | C-style cast không bao gồm dynamic_cast; thất bại của dynamic_cast qua pointer trả null, qua reference ném bad_cast. |

Các quy tắc trên được đối chiếu với [delete qua base](https://eel.is/c++draft/expr.delete#3), [Core Guidelines về quản lý special members](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rc-five), [trạng thái moved-from của thư viện](https://eel.is/c++draft/lib.types.movedfrom), [vector capacity](https://eel.is/c++draft/vector.capacity), [Microsoft LNK2005](https://learn.microsoft.com/en-us/cpp/error-messages/tool-errors/linker-tools-error-lnk2005?view=msvc-170), [Microsoft assert](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/assert-macro-assert-wassert?view=msvc-170). Đây là các quy tắc liên quan ví dụ C++17; không tự đem tính năng mới của dự thảo chuẩn vào giáo trình này.

<a id="sources"></a>

## Nguồn và nhật ký biên tập

Các file ghi “trong ZIP” dưới đây là entry giữ nguyên tên và nội dung trong `Archive/Update_2026-10-26.zip`, trước đây nằm trực tiếp trong `Update`. Chỉ cần mở ZIP khi muốn đối chiếu bản lịch sử.

| Nguồn | Phần được hợp nhất |
|---|---|
| `Update/Cpp_Knowledge_Handbook.md` — Completion Pack 27/10/2026 | Ôn đủ nền tảng đến 17.2; bổ sung static, casts, preprocessor, copy/move, lambda, debugger, lỗi thực tế và Final Assessment. |
| `Update/Cpp_To_Unreal_Handoff.md` (tổng kết 27/10/2026) | Xác nhận số buổi 14, 14.5, 15, 16.1/16.2, 17.1/17.2; lịch sử Final 9.5/10, giới hạn kiến thức và phân biệt kế hoạch Unreal với phần đã học. |
| `Update/README.md` và `Update/ArenaCombat_Final_Reviewed/` | Xác nhận provenance: năm file là bản đã được trợ lý chỉnh sau bài nộp; kiểm tra hợp đồng thực tế và đường dẫn bản tải tham khảo. |
| `CPlusPlus_KienThuc_Bai01-13.md` (24/10/2026, trong ZIP) | Phạm vi học, lý thuyết chính 01–13, tên bài thực hành, phần chưa học. |
| `CPlusPlus_CuPhap_TraCuuNhanh.md` (trong ZIP) | Tra cứu theo nhóm, điều kiện dùng cú pháp và phím VS2022. |
| `Update/CPP_Fundamentals_Review_01-09_AI_Handoff.md` (21/10/2026) | Arena, Healing, 23 câu/đáp án, lịch ôn, điểm lịch sử và các diễn giải hữu ích. |
| `KNOWLEDGE_REVIEW_2026-10-23.md`, `WEBSITE_UPDATE_PLAN_01-13_2026-10-24.md` (trong ZIP) | Danh sách sai lệch, hợp đồng dữ liệu, tiên quyết, ánh xạ và bảo toàn tiến độ. Không ghép nguyên văn các báo cáo vào bài học. |
| Bảng cú pháp đang dùng trên web | Đối chiếu tránh mất các thao tác/toán tử có ích. Không lấy trạng thái web làm bằng chứng chấm bài. |

ZIP còn giữ `CONTENT_AUDIT.md` để truy vết lần tích hợp handoff 01–09; báo cáo lịch sử này không thay cho giáo trình hoặc kế hoạch cập nhật hiện tại.

Các nguồn kỹ thuật dùng để kiểm tra những điểm biên tập: [Microsoft về nhập stream và ignore](https://learn.microsoft.com/en-us/cpp/standard-library/basic-istream-class?view=msvc-170), [make_unique](https://learn.microsoft.com/en-us/cpp/standard-library/memory-functions?view=msvc-170#make_unique), [unique_ptr](https://eel.is/c++draft/unique.ptr.single), [clamp](https://eel.is/c++draft/alg.clamp), [unary *](https://eel.is/c++draft/expr.unary.op), [template](https://learn.microsoft.com/en-us/cpp/cpp/templates-cpp?view=msvc-170). Các quyết định sắp xếp bài là biên tập theo kiến thức tiên quyết, không phải thứ tự bắt buộc do chuẩn C++ quy định.

Đợt bổ sung 27/10 đối chiếu [static members](https://learn.microsoft.com/en-us/cpp/cpp/static-members-cpp?view=msvc-170), [dynamic_cast](https://learn.microsoft.com/en-us/cpp/cpp/dynamic-cast-operator?view=msvc-170), [lambda và capture](https://learn.microsoft.com/en-us/cpp/cpp/lambda-expressions-in-cpp?view=msvc-170), [trạng thái thư viện sau move](https://eel.is/c++draft/lib.types.movedfrom), [stepping trong Visual Studio](https://learn.microsoft.com/en-us/visualstudio/debugger/navigating-through-code-with-the-debugger?view=vs-2022) và [Call Stack](https://learn.microsoft.com/en-us/visualstudio/debugger/how-to-use-the-call-stack-window?view=vs-2022). Chỉ dùng quy tắc phù hợp Standard C++17/VS2022 của khóa; nội dung mới của dự thảo chuẩn hoặc IDE khác không tự trở thành yêu cầu của bài.

| Phiên bản | Ngày | Thay đổi |
|---|---|---|
| 2.0.0 | 27/10/2026 | Hợp nhất Completion Pack đến 17.2 vào đúng bài; thêm bảy chương đọc và sáu ví dụ hoàn chỉnh, mở rộng tra cứu, cập nhật lịch sử và giới hạn; giữ nguồn gốc bản Final đã chỉnh. Chuẩn hóa nội dung để tích hợp bằng manifest riêng và bảo toàn dữ liệu học. |
| 1.0.1 | 26/10/2026 | Dọn 5 tài liệu nguồn/báo cáo vào một ZIP và cập nhật đường dẫn truy vết; giữ handoff 01–09 đang được website đọc. Không đổi nội dung bài học, ví dụ hoặc website. |
| 1.0.0 | 26/10/2026 | Tạo một nguồn chuẩn; hợp nhất 01–13, tra cứu và tài nguyên ôn; tách hai buổi 12; sửa ví dụ/diễn đạt; thêm các cầu nối được đánh dấu bổ sung biên tập; chuẩn bị chỗ nhận bài tiếp theo. Chưa tích hợp lên web. |

Giữ giáo trình chuẩn làm nguồn biên tập duy nhất; giữ nguyên Completion Pack để truy vết và code Final để tải đối chiếu. Năm file lịch sử trong ZIP đã được đối chiếu SHA-256 trước lần dọn 26/10. Handoff 01–09 còn phục vụ adapter thư viện cũ, không phải nguồn tiến độ mới. Không tiếp tục chỉnh song song handbook đầu vào như một giáo trình thứ hai.

<a id="validation"></a>

## Kiểm tra bản hợp nhất

- Kiểm tra nền bản 1.0.0 ngày **26/10/2026**: 15 mục học + Chuẩn bị; 154 mục bảng tra cứu/11 nhóm theo kiểm tra tài liệu; 28 anchor và 238 link nội bộ. Healing, Arena, 23 câu/đáp án và lịch sử đã được giữ khi mở rộng bản 2.0.0.
- Đợt **27/10/2026** đã bổ sung và đối chiếu bảy chương đọc mới, bảng tra cứu, lịch sử theo Completion Pack và bản Final có provenance. `npm run check:curriculum` đã đạt với **23 trang học (gồm Chuẩn bị), 7 tài nguyên ôn và 198 mục tra cứu**, kiểm tra manifest, liên kết, alias và phạm vi ôn; số trang đọc không tự suy thành số bài được chấm.
- Đã trích **20 bộ ví dụ hoàn chỉnh, gồm 27 file C++/header**, biên dịch bằng MSVC/Visual Studio 2022 với `/std:c++17 /permissive- /EHsc /utf-8 /W4 /WX`; tất cả đạt và chạy đúng kết quả/mã thoát mô tả qua `scripts/check-cpp-examples.mjs`. Ví dụ Add ở bài 06 chủ ý trả mã 8, đã ghi rõ trong bài. Sáu bộ mới thuộc static, cast, dependency, inventory, lambda và debug.
- Kiểm tra thêm nhập sai/EOF/tên rỗng và ba bộ ca biên cho Player, ClampValue và Arena: HP/maxHP bằng 0 hoặc âm theo hợp đồng, damage/heal lớn, pointer null, clamp trong/ngoài/đúng biên và khoảng một giá trị. Tất cả đạt. Không thực thi đoạn UB để đoán output.
- Đoạn `this->name = name` minh họa hiện tượng che tên có chú thích cảnh báo C4458; chương trình chạy độc lập dùng tham số newName để bật cảnh báo nghiêm ngặt mà vẫn rõ ý nghĩa. Các snippet không mang nhãn example chưa được coi là chương trình độc lập.
- Bản Final năm file trong Completion Pack được kiểm tra riêng: cấu hình mặc định cho 40/120 HP, 3/3 defeated và 0 potion; các ca damage/potion trong hợp đồng đã được đối chiếu. Không suy từ đó rằng constructor tự validate dữ liệu sai hoặc mọi cấu hình đều kết thúc.
- Nội dung file nguồn được bảo toàn. Kiểm tra trình duyệt với dữ liệu mô phỏng đã mở đủ 30 trang học/tài nguyên, tìm kiếm, bảng tra cứu, đáp án, alias cũ và phạm vi ôn; không phát sinh lỗi JavaScript. Tiến độ, XP, SRS và link bài nộp cũ được giữ qua reload và đóng/mở lại trình duyệt. Đánh dấu một bài mới chỉ thêm tiến độ riêng và XP theo hành động chủ động của người học.
- Bảy chương trình hoàn chỉnh trong câu đố đoán output đã được biên dịch và đối chiếu đáp án. Kiểm tra tương thích giữ 64 mục thư viện (gồm phụ lục), 74 ID thẻ, 53 ID câu hỏi, 11 ID thử thách và 21 ID bài tập cũ. Bản build production và giao diện desktop/mobile sáng/tối đã được kiểm tra tại máy.

Kết quả kiểm tra ví dụ không phải chấm lại bài nộp của người học. Giáo trình đủ phạm vi khóa nền tảng được cung cấp đến 17.2; các chủ đề nâng cao/Unreal được đánh dấu riêng. Trạng thái triển khai chỉ được xác nhận sau khi workflow và bản web thực tế đã được kiểm tra.
