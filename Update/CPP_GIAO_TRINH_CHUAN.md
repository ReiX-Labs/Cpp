# GIÁO TRÌNH C++ CHO GAME VÀ UNREAL — NGUỒN HỢP NHẤT

**Mã tài liệu:** `cpp-curriculum` · **Phiên bản:** `3.0.0` · **Cập nhật:** 28/10/2026

**Một chương trình học:** nền tảng C++ → ownership/OOP → C++ hiện đại và STL → kỹ thuật kiểm chứng → lập trình game → Unreal Engine C++. Nội dung mới được biên tập vào đúng chủ đề của chương trình website; không có khóa bổ sung độc lập.

**Nguồn làm việc duy nhất:** `Update/CPP_GIAO_TRINH_CHUAN.md`. Các handbook/handoff và bản website trước hợp nhất giữ để truy vết, không chỉnh song song hoặc import thành một lớp nội dung thứ hai.

**Chuẩn ví dụ:** C++17 / Visual Studio 2022 cho chương trình console. Ví dụ Unreal yêu cầu project engine phù hợp; API/menu cần kiểm tra theo phiên bản đang sử dụng. Nội dung có trong tài liệu không tự chứng minh người học đã làm hoặc đã được chấm.

## Cách học và dùng ví dụ

1. Đọc mục tiêu và kiến thức tiên quyết đầu bài; học lý thuyết rồi tự dự đoán ví dụ trước khi chạy.
2. Tự viết bài thực hành, thử ca bình thường/ca biên và giải thích kết quả trước khi đánh dấu đã học.
3. Code có nhãn `// example: ...; file: ...` là bộ ví dụ hoàn chỉnh. Các file cùng mã example thuộc một project; không ghép các main hoặc các phiên bản Player/Animal khác nhau.
4. Code còn lại là đoạn minh họa cần ngữ cảnh. Mẫu cố ý UB dùng nhận diện lỗi; không chạy để suy ra output.
5. Tra cứu theo chủ đề/đối tượng/thao tác khi quên cú pháp, rồi trở về đúng đoạn lý thuyết khi cần hiểu lại.

## Mục lục theo lộ trình

### Nền tảng và dữ liệu

- [Cài đặt môi trường C++17](#lesson-0)
- [Chương trình đầu tiên, nhập/xuất và mô hình biên dịch](#lesson-1)
- [Biến, kiểu dữ liệu và toán tử](#lesson-3)
- [Điều kiện, vòng lặp và kiểm tra đầu vào](#lesson-4)
- [Hàm, tham số và overload](#lesson-5)
- [Array, vector và lựa chọn container](#lesson-20)
- [Chuỗi, string_view và chuyển đổi chuỗi](#lesson-49)
- [Pointer, reference và const theo đường truy cập](#lesson-6)
- [Struct, class và đóng gói](#lesson-12)

### Vòng đời, sở hữu và OOP

- [Constructor, destructor, this và Rule of 0/3/5](#lesson-13)
- [Lifetime và các kiểu thời gian lưu trữ](#lesson-7)
- [Cấp phát động và lỗi quản lý tài nguyên](#lesson-8)
- [RAII và trách nhiệm sở hữu](#lesson-9)
- [Smart pointer và quyền sở hữu](#lesson-10)
- [Kế thừa, đa hình và override](#lesson-14)
- [Hàm virtual, abstract class và interface](#lesson-15)
- [Composition và thiết kế trách nhiệm](#lesson-16)

### C++ hiện đại và thư viện chuẩn

- [Suy luận kiểu và duyệt dữ liệu](#lesson-17)
- [Const correctness, constexpr và enum class](#lesson-22)
- [Namespace, static và linkage](#lesson-47)
- [Chuyển kiểu và lựa chọn cast](#lesson-46)
- [Templates và generic programming](#lesson-19)
- [Copy, move và value category](#lesson-11)
- [Lambda, capture và callback](#lesson-18)
- [Iterator và thuật toán STL](#lesson-21)
- [Xử lý lỗi và kết quả có thể thiếu](#lesson-23)
- [Operator overloading](#lesson-48)

### Tổ chức chương trình và kiểm chứng

- [Header, source và build nhiều file](#lesson-2)
- [Preprocessor, forward declaration và dependency](#lesson-41)
- [Quy ước tên và phong cách code](#lesson-42)
- [Debugging bằng bằng chứng](#lesson-43)
- [Undefined behavior và các bẫy thường gặp](#lesson-44)
- [Tự review và Final Assessment](#lesson-45)
- [Unit testing và automation](#lesson-55)
- [Multithreading và đồng bộ](#lesson-50)

### Lập trình game

- [C++ trong phát triển game](#lesson-24)
- [Game loop và thời gian](#lesson-25)
- [Data-oriented design và ECS](#lesson-26)
- [Đo hiệu năng, cache và tối ưu](#lesson-27)
- [Toán học cho game](#lesson-28)
- [Design patterns trong gameplay](#lesson-29)

### Unreal Engine C++

- [Bắt đầu Unreal Engine C++](#lesson-30)
- [UObject, reflection và macros](#lesson-31)
- [Garbage collection và vòng đời UObject](#lesson-32)
- [Actor, component và lifecycle](#lesson-33)
- [Gameplay Framework](#lesson-34)
- [Container và chuỗi Unreal](#lesson-35)
- [Pointer và object handle trong Unreal](#lesson-36)
- [Delegate và sự kiện](#lesson-37)
- [Kết nối C++ và Blueprint](#lesson-38)
- [Data-driven design](#lesson-39)
- [Gameplay Ability System: tổng quan](#lesson-40)
- [Unreal Interfaces](#lesson-51)
- [Enhanced Input](#lesson-52)
- [Timer, collision và tiện ích gameplay](#lesson-53)
- [Multiplayer và replication: tổng quan](#lesson-54)

### Tra cứu, bài tập và tài nguyên ôn

- [Tra cứu theo chủ đề](#lookup) · [Bài tập theo phần](#appendix-f) · [Capstone Mini Arena Shooter](#appendix-g)
- [Pointer-Based Healing](#healing) · [Arena ba file](#arena) · [Tự kiểm tra](#self-check)
- [Lỗi thường gặp](#mistakes) · [Lịch sử học](#study-history) · [Chu trình ôn](#review-routine)
- [Bảng STL/Unreal](#appendix-b) · [Thuật ngữ](#appendix-c) · [Nguồn học](#appendix-d) · [Lỗi build/runtime](#appendix-e)
- [Lộ trình theo vai trò](#appendix-h) · [Phạm vi và bước tiếp theo](#roadmap) · [Quy trình cập nhật](#update-protocol)
- [Quy ước web](#web-integration) · [Nguồn và nhật ký](#sources) · [Kiểm tra](#validation)


<a id="lesson-0"></a>

## Cài đặt môi trường C++17

<a id="cpp-00"></a>

**Mục tiêu:** Tạo Console App, chọn chuẩn C++17 và phân biệt build với chạy.  
**Cần biết trước:** Không có.

<a id="topic-cpp-00-00-1-cong-cu"></a>

### Công cụ

- **Visual Studio 2022:** IDE để viết, build, chạy, debug.
- **MSVC:** Compiler C++ thường dùng khi build từ Visual Studio trên Windows.
- **Project / Solution:** Cấu trúc Visual Studio quản lý source, setting, build configurations.
- **Console App (C++):** Loại project thực hành đã sử dụng.

### Tạo project đầu tiên

1. Trong Visual Studio Installer, cài workload **Desktop development with C++**, MSVC và Windows SDK phù hợp project.
2. Mở Visual Studio → Create a new project → **Console App (C++)**, đặt tên HelloGameDev.
3. Chọn chuẩn **C++17**, dùng chương trình tối thiểu ở [Nhập/xuất](#lesson-1), build rồi chạy bằng Ctrl+F5.
4. Đặt breakpoint tại main, chạy F5 và xác nhận debugger dừng đúng dòng.

Có thể dùng [Compiler Explorer](https://godbolt.org) để thử đoạn C++ trong trình duyệt; bật phần thực thi khi muốn xem output. CMake nằm ở [build nhiều file](#lesson-2). Git/Git LFS phục vụ quản lý phiên bản; làm theo quy ước repository đang dùng. Rider hoặc VS Code là lựa chọn IDE khác, nhưng ví dụ thao tác ở đây theo Visual Studio 2022.

Unreal Engine và workload Game development with C++ thuộc [chặng Unreal](#lesson-30), chưa phải điều kiện để hoàn thành chương trình console đầu tiên.

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

> Khi cần lần theo lỗi, mở [Debugging](#lesson-43) để học breakpoint, stepping và Call Stack theo tình huống.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo project rỗng, build một chương trình in tên nhân vật, rồi đặt breakpoint tại main.

**Tự kiểm tra:** Chỉ ra nơi xem thông báo build và giải thích F5 khác Ctrl+F5.

<a id="topic-cpp-00-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Chỉ ra khác biệt giữa lỗi compiler và linker; giải thích Ctrl+F5 khác F5.
- **Tự viết:** Tạo project Console App, bật C++17; nhận biết Output/Error List và chạy bằng Ctrl+F5.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="lesson-1"></a>

## Chương trình đầu tiên, nhập/xuất và mô hình biên dịch

<a id="cpp-01"></a>

**Mục tiêu:** Đọc cấu trúc một chương trình console và theo dấu dữ liệu từ nhập tới xuất.  
**Cần biết trước:** [Môi trường](#lesson-0).

### C++ là gì
C++ là ngôn ngữ **compiled**, **statically-typed**, **multi-paradigm** (procedural, OOP, generic, functional). Triết lý cốt lõi:

- **Zero-overhead abstraction:** mục tiêu thiết kế là không bắt chương trình trả chi phí cho tính năng không dùng và cho phép abstraction hiệu quả. Chi phí thực tế vẫn tùy kiểu, thuật toán và compiler; cần đo trước khi kết luận tối ưu.
- **Quản lý tài nguyên:** C++ cho phép kiểm soát lifetime và ownership. Ưu tiên giá trị, container và RAII; khả năng kiểm soát không tự làm chương trình nhanh hoặc an toàn.
- **Direct hardware access:** Truy cập con trỏ, bit, memory layout — quan trọng cho engine/game.



<a id="topic-cpp-00-00-2-pipeline-build"></a>

### Pipeline build

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

**CMake:** Công cụ cấu hình/tạo hệ thống build. **CMake không phải ngôn ngữ C++ và không phải compiler.** Thực hành CMake nằm trong [Build nhiều file](#lesson-2); UnrealBuildTool được trình bày trong [Unreal Engine C++](#lesson-30).

<a id="topic-cpp-01-01-1-chuong-trinh-c-toi-thieu"></a>

### Chương trình C++ tối thiểu

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

<a id="topic-cpp-01-01-2-nhap-xuat-du-lieu"></a>

### Nhập xuất dữ liệu

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

Ví dụ kiểm tra tình trạng nhập nằm ở [Điều kiện](#cpp-04); vòng nhập lại, EOF và phối hợp `>>`–`getline` nằm ở [Vòng lặp](#cpp-05), sau khi học điều kiện/vòng lặp.

<a id="topic-cpp-01-01-3-cac-dau-thuong-nham"></a>

### Các dấu thường nhầm

- `'A'`: literal ký tự (char), khác `"A"`: chuỗi ký tự.
- C++ phân biệt chữ hoa và thường: `main` khác `Main`.
- `=` là gán; `==` là so sánh (xem [Toán tử](#cpp-03)).

### Translation unit và bước link

Sau tiền xử lý, mỗi file nguồn cùng nội dung được include tạo thành một translation unit. Compiler xử lý từng translation unit; linker kết nối object file và thư viện. Vì vậy một khai báo nhìn thấy lúc compile chưa chứng minh định nghĩa tương ứng đã được link. Xem [project nhiều file](#lesson-2) để thực hành.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Viết chương trình đọc tên và HP nhân vật; in thông báo theo định dạng tự chọn.

**Tự kiểm tra:** Phân biệt lỗi compiler, linker và lỗi logic bằng ví dụ của chính bạn.

<a id="topic-cpp-01-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Giải thích include, main, return 0 và dấu chấm phẩy; phân biệt ký tự với chuỗi.
- **Tự viết:** Tự viết chương trình nhập tên một từ và HP, rồi in lại; dùng dữ liệu hợp lệ ở bước đầu.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="lesson-3"></a>

## Biến, kiểu dữ liệu và toán tử

<a id="cpp-02"></a>
<a id="cpp-03"></a>

**Mục tiêu:** Chọn kiểu, khởi tạo giá trị và tính biểu thức theo đúng ý nghĩa gameplay.  
**Cần biết trước:** [Nhập/xuất](#lesson-1).

<a id="topic-cpp-02-02-1-kieu-du-lieu"></a>

### Kiểu dữ liệu

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

Không mặc định mọi nền tảng có cùng kích thước `int`, `long`… Trên cấu hình Windows/MSVC thông dụng, bool/char thường 1 byte, int/float 4 byte và double 8 byte; đây không phải bảng kích thước bắt buộc cho mọi nền tảng. `sizeof(char)` luôn bằng 1 đơn vị byte của C++. Khi cần độ rộng chính xác, dùng `<cstdint>` như `std::int32_t` nếu kiểu đó được nền tảng cung cấp. Trong Unreal có `int32`. Chọn float/double theo miền giá trị và độ chính xác cần thiết; không mặc định double luôn chậm hơn.

<a id="topic-cpp-02-02-2-khai-bao-va-khoi-tao"></a>

### Khai báo và khởi tạo

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

### Cầu nối tới suy luận kiểu và hằng số

`auto hp = 100;` suy ra int tại compile-time; nó không biến thành kiểu động. `const int maxHP = 100;` cấm sửa qua tên maxHP. Khi cần constant expression, dùng constexpr với initializer phù hợp. Phần so sánh đầy đủ nằm tại [Suy luận kiểu](#lesson-17) và [Const/constexpr](#lesson-22).

Khi tính tỉ lệ, hai toán hạng int thực hiện chia nguyên: `75 / 200` bằng 0. `static_cast<float>(75) / 200` giữ phần lẻ. Các kiểu cast và giới hạn chuyển đổi được giải thích ở [Chuyển kiểu](#lesson-46).

<a id="topic-cpp-03-03-1-so-hoc-va-gan"></a>

### Số học và gán

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

<a id="topic-cpp-03-03-2-so-sanh-va-logic"></a>

### So sánh và logic

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

Áp dụng với pointer sẽ học tại [Pointer/reference](#cpp-09); hai toán hạng ở đây là biểu thức logic thông thường.

Lưu ý: Với `float`, so sánh `==` sau nhiều phép tính số thực có thể không đúng kỳ vọng vì sai số biểu diễn.

<a id="topic-cpp-03-03-3-tang-giam-va-toan-tu-ba-ngoi"></a>

### Tăng/giảm và toán tử ba ngôi

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

<a id="topic-cpp-03-03-4-bitwise"></a>

### Bitwise

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

<a id="topic-cpp-03-03-5-uu-tien-toan-tu"></a>

### Ưu tiên toán tử

Thứ tự phổ biến (từ cao xuống thấp): dấu ngoặc → toán tử một ngôi → `* / %` → `+ -` → dịch bit → so sánh → bằng/khác → bitwise `&`, `^`, `|` → `&&`, `||` → gán. Dùng dấu ngoặc để làm ý định rõ ràng hơn.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tính damage sau giáp, phần dư chia lượt và cờ trạng thái bằng bitmask.

**Tự kiểm tra:** Giải thích kết quả chia nguyên, short-circuit và vì sao cần ngoặc ở biểu thức bitmask.

<a id="topic-cpp-02-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Vì sao auto không phải kiểu động? Vì sao int{3.5} lỗi nhưng static_cast<int>(3.5) có chủ ý?
- **Tự viết:** Tự tính phần trăm HP với maxHP dương; thử dữ liệu tạo kết quả có phần lẻ và giải thích phép cast.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

<a id="topic-cpp-03-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Phân biệt =/==, &&/&, ^/lũy thừa; diễn giải tiền tố/hậu tố.
- **Tự viết:** Tự viết biểu thức kiểm tra điều kiện chiến đấu và bật/tắt một cờ; dự đoán kết quả trước khi chạy.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="lesson-4"></a>

## Điều kiện, vòng lặp và kiểm tra đầu vào

<a id="cpp-04"></a>
<a id="cpp-05"></a>

**Mục tiêu:** Điều khiển luồng chạy, xác định scope và phục hồi nhập sai mà không lặp vô hạn khi EOF.  
**Cần biết trước:** [Biến và toán tử](#lesson-3).

<a id="topic-cpp-04-04-1-if-else-if-else"></a>

### `if` / `else if` / `else`

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

<a id="topic-cpp-04-04-2-switch-case-break-default"></a>

### `switch` / `case` / `break` / `default`

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

<a id="topic-cpp-04-04-3-scope"></a>

### Scope

```cpp
int health = 100;
if (health > 0)
{
    int damage = 20;
    health -= damage;
}
// damage không còn nằm trong scope này.
```

<a id="topic-cpp-04-kiem-tra-mot-lan-nhap-du-lieu"></a>

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

<a id="topic-cpp-05-05-1-for"></a>

### `for`

```cpp
for (int i = 1; i <= 5; ++i)
{
    std::cout << "Round " << i << '\n';
}
```

Cú pháp: `for (khởi_tạo; điều_kiện; cập_nhật) { ... }`. Hữu ích khi có biến đếm/số lượt rõ ràng.

<a id="topic-cpp-05-05-2-while"></a>

### `while`

```cpp
while (health < 100)
{
    health += 10;
}
```

Kiểm tra điều kiện **trước** mỗi lượt. Nếu điều kiện sai ngay từ đầu, không chạy lần nào.

<a id="topic-cpp-05-05-3-do-while"></a>

### `do ... while`

```cpp
int choice = 0;
do
{
    std::cout << "1. Play / 0. Quit: ";
    std::cin >> choice;
} while (choice != 0);
```

Chạy **ít nhất một lần**, rồi mới kiểm tra. Có dấu `;` sau `while (...)`.

<a id="topic-cpp-05-05-4-break-continue"></a>

### `break`, `continue`

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

<a id="topic-cpp-05-nhap-sai-eof-va-chuyen-tu-sang-getline"></a>

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

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Viết menu lặp cho đến khi chọn thoát; kiểm tra số âm, dữ liệu sai và hết luồng nhập.

**Tự kiểm tra:** Dự đoán số lần lặp và nêu khác biệt break, continue, return.

<a id="topic-cpp-04-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Hai if độc lập khác if/else-if thế nào? Thiếu break có thể làm gì?
- **Tự viết:** Tự phân loại HP 0/thấp/bình thường và xử lý hai loại potion; kiểm tra đúng các mốc điều kiện.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

<a id="topic-cpp-05-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** continue trong for có bỏ bước cập nhật không? Điều kiện nào bảo đảm vòng lặp kết thúc?
- **Tự viết:** Tự viết Training Arena có số vòng hữu hạn và lựa chọn chơi lại; thử nhập sai và kết thúc input.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="lesson-5"></a>

## Hàm, tham số và overload

<a id="cpp-06"></a>

**Mục tiêu:** Tách hành vi thành hàm, chọn cách truyền dữ liệu theo ý định đọc/sửa.  
**Cần biết trước:** [Điều kiện và vòng lặp](#lesson-4); phần reference được giải thích bằng ví dụ ngay trong bài.

<a id="topic-cpp-06-06-1-khai-bao-dinh-nghia-goi"></a>

### Khai báo, định nghĩa, gọi

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

<a id="topic-cpp-06-06-2-pass-by-value-va-pass-by-reference"></a>

### Pass by value và pass by reference

```cpp
void DamageCopy(int hp)  { hp -= 20; } // Không sửa biến gốc
void DamageRef(int& hp)  { hp -= 20; } // Sửa biến gốc

int hp = 100;
DamageCopy(hp); // hp vẫn 100
DamageRef(hp);  // hp còn 80
```

- `T value`: Tạo tham số riêng, không phải bí danh của biến gốc. Với int trong ví dụ, hàm nhận bản sao; với class còn có [copy/move và elision](#lesson-11).
- `T& ref`: Tham chiếu, có thể thay đổi đối tượng gốc.
- `const T& ref`: Tham chiếu chỉ đọc qua ref, thường tránh sao chép đối tượng lớn.
- Pointer `T*` là lựa chọn khác khi có thể vắng đối tượng; xem [Pointer/reference](#cpp-09), chưa cần dùng trong bài này.

<a id="topic-cpp-06-06-3-function-overloading"></a>

### Function overloading

```cpp
int Add(int a, int b)       { return a + b; }
float Add(float a, float b) { return a + b; }
```

Overload phân biệt bởi danh sách tham số thích hợp. **Chỉ thay kiểu trả về không đủ để overload.**

<a id="topic-cpp-06-06-4-tach-trach-nhiem"></a>

### Tách trách nhiệm

Một hàm xử lý damage nên chủ yếu tính/tác động trạng thái, hàm hiển thị nên phụ trách in dữ liệu. Đặt tên thể hiện mục đích: `ApplyDamage`, `IsAlive`, `PrintResult`. Đây là bài học quan trọng từ các mini-project.


**Lưu ý output/exit code:** Ví dụ Add ở trên trả 8 từ main để minh họa return; không in 8 ra console và không trả mã thành công 0. Khi viết ứng dụng thông thường, in kết quả qua cout rồi return 0 nếu thành công.

### Default arguments
```cpp
void SpawnEnemy(int level, float hp = 100.0f, bool isBoss = false);
SpawnEnemy(5);                 // dùng hp=100, isBoss=false
SpawnEnemy(5, 200.0f);         // dùng isBoss=false
SpawnEnemy(5, 500.0f, true);   // truyền đủ
```

### `inline` & ý nghĩa thực tế
`inline` không bắt compiler chèn thân hàm tại nơi gọi; compiler có thể tối ưu cả hàm không có từ khóa này. Trong header, nó cho phép một hàm có external linkage được định nghĩa trong nhiều translation unit **nếu các định nghĩa đáp ứng ODR** (cùng chuỗi token và các điều kiện về tên được tra cứu). Đây vẫn là một thực thể hàm; `inline` không hợp thức hóa các định nghĩa khác nhau.

```cpp
inline int Square(int x) { return x * x; }   // hợp lệ đặt trong .h
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tách kiểm tra HP, tính damage và in trạng thái thành các hàm; tự chọn tham số value/const reference/reference.

**Tự kiểm tra:** Chỉ ra declaration, definition, call và giải thích tại sao đổi return type chưa đủ tạo overload.

<a id="topic-cpp-06-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Tại sao sửa tham số int không sửa biến gốc? Chỉ khác return type có overload được không?
- **Tự viết:** Tự tách chương trình trước thành hàm tính damage, kiểm tra sống và hiển thị.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="lesson-20"></a>

## Array, vector và lựa chọn container

<a id="cpp-07"></a>

**Mục tiêu:** Dùng container cơ bản đúng giới hạn; phân biệt size/capacity và chọn cấu trúc theo thao tác.  
**Cần biết trước:** [Hàm](#lesson-5); với container của struct, quay lại sau [Class](#lesson-12).

<a id="topic-cpp-07-07-1-c-style-array"></a>

### C-style array

```cpp
int health[3] = {100, 80, 60};
std::cout << health[0]; // 100
```

Index bắt đầu từ 0; truy cập ngoài vùng mảng là hành vi không xác định.

<a id="topic-cpp-07-07-2-std-array-t-n-kich-thuoc-co-dinh"></a>

### `std::array<T, N>` — kích thước cố định

```cpp
#include <array>
std::array<int, 3> hp = {100, 80, 60};
std::cout << hp.size();   // 3
std::cout << hp[1];      // 80
std::cout << hp.at(1);   // 80, kiểm tra phạm vi
```

`std::array` có kích thước cố định trong kiểu của nó. `std::array<int, 3>` và `std::array<int, 4>` là hai kiểu khác nhau.

<a id="topic-cpp-07-07-3-std-vector-t-thay-doi-kich-thuoc"></a>

### `std::vector<T>` — thay đổi kích thước

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

<a id="topic-cpp-07-07-5-chi-so-mang-va-std-size-t"></a>

### Chỉ số mảng và `std::size_t`

```cpp
for (std::size_t i = 0; i < inventory.size(); ++i)
{
    std::cout << inventory[i] << '\n';
}
```

`container.size()` trả về kiểu số nguyên không dấu (thường là `std::size_t`). Không mặc nhiên so sánh `int` với `size()` vì có thể gặp warning signed/unsigned và bug khi giá trị âm.

Khi dùng tên `std::size_t` trực tiếp, include `<cstddef>` phù hợp. **Iterator căn bản:** `begin()` chỉ đầu khoảng, `end()` chỉ vị trí sau phần tử cuối; khi container rỗng hai iterator này bằng nhau. Không dereference end. Các thuật toán nhận khoảng `[begin, end)` và callback sẽ học theo mục đích tại [[Copy/move](#cpp-16)](#cpp-16); chưa cần ghi nhớ mọi loại iterator ngay ở đây.

<a id="topic-cpp-07-size-capacity-reserve-va-resize"></a>

### Size, capacity, reserve và resize

- `size()` là số phần tử đang tồn tại; chỉ index nhỏ hơn size mới truy cập được.
- `capacity()` là dung lượng có thể chứa trước khi cần cấp phát lại.
- `reserve(n)` xin capacity ít nhất n nếu cần, không tạo thêm phần tử và không làm giảm size.
- `resize(n)` thay đổi size: tăng tạo thêm phần tử, giảm hủy phần tử cuối.
- Khi vector cấp phát lại, pointer/reference/iterator tới phần tử cũ mất hiệu lực. Nắm ý này trước khi dùng pointer ở [Pointer/reference](#cpp-09); không giữ địa chỉ cũ rồi tiếp tục dùng sau realloc.

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

`.at(i)` ném std::out_of_range khi i không hợp lệ; chưa học exception thì tránh index sai trước khi gọi. `std::array` chứa phần tử trong chính object; vị trí lưu trữ tùy object, không luôn nằm trên stack. Các điều kiện của find/substr được giải thích trong [Chuỗi](#lesson-49).

### Đọc tiếp sau khi dùng vững array và vector

Phần đầu bài đủ cho lần học đầu. Bảng dưới là bản đồ lựa chọn để quay lại sau [struct/class](#lesson-12) và [iterator](#lesson-21); chưa cần ghi nhớ mọi container. O(1), O(log n), O(n) mô tả cách chi phí tăng theo số phần tử, không phải thời gian chạy chính xác. Thư viện chuẩn cung cấp hợp đồng và độ phức tạp; chọn theo thao tác rồi đo trên workload thực tế.

| Container | Cấu trúc | Truy cập | Thêm/Xóa | Dùng khi |
|---|---|---|---|---|
| `std::vector<T>` | mảng động liền kề | O(1) theo index | O(1) amortized cuối / O(n) giữa | Lựa chọn ban đầu khi cần danh sách động |
| `std::array<T,N>` | phần tử liền kề bên trong object | O(1) | không đổi size | size cố định, biết lúc compile |
| `std::deque<T>` | hàng đợi 2 đầu | O(1) | O(1) hai đầu | thêm/xóa cả 2 đầu |
| `std::list<T>` | doubly linked list | O(n) | O(1) cho một phần tử khi đã có iterator | cần iterator ổn định/chèn xóa; đo chi phí duyệt |
| `std::map<K,V>` | cây cân bằng (sorted) | O(log n) | O(log n) | cần thứ tự theo key |
| `std::unordered_map<K,V>` | hash table | O(1) trung bình | O(1) trung bình | tra cứu nhanh theo key |
| `std::set<T>` | tập hợp có thứ tự | O(log n) | O(log n) | phần tử duy nhất, có thứ tự |
| `std::unordered_set<T>` | hash set | O(1) tb | O(1) tb | phần tử duy nhất, tra nhanh |

```cpp
#include <string>
#include <unordered_map>

// Tra cứu theo key bằng hash map trong C++17:
std::unordered_map<std::string, int> inventory;
inventory["potion"] = 5;           // thêm/sửa
inventory["sword"]  = 1;
if (inventory.find("potion") != inventory.end()) // C++17; contains là C++20
    inventory["potion"]--;
```

> **Lời khuyên hiệu năng cho game:** `std::vector` thường là lựa chọn phù hợp khi cần duyệt tuần tự vì dữ liệu **liền kề trong bộ nhớ** → thân thiện cache (xem [Đo hiệu năng, cache và tối ưu](#lesson-27)). `std::list`/`std::map` (node rời rạc) thường chậm vì cache miss, dù big-O đẹp.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo danh sách HP, thêm/xóa và duyệt; so sánh reserve với resize bằng size/capacity quan sát được.

**Tự kiểm tra:** Kiểm tra container rỗng, index cuối, thay đổi capacity và không dùng iterator/reference đã mất hiệu lực.

<a id="topic-cpp-07-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** reserve khác resize thế nào? Với hash map ở phần đọc tiếp, find không thấy trả gì? Câu hỏi về size chuỗi UTF-8 nằm trong [Chuỗi](#lesson-49).
- **Tự viết:** Tự quản lý một nhóm HP bằng array và danh sách item bằng vector; thử danh sách rỗng trước thao tác xóa.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="lesson-49"></a>

## Chuỗi, string_view và chuyển đổi chuỗi

**Mục tiêu:** Xử lý tên/tin nhắn bằng string, hiểu lifetime khi dùng view và ranh giới chuỗi Unreal.  
**Cần biết trước:** [Nhập/xuất](#lesson-1), [container](#lesson-20); phần FString dùng lại ở chặng Unreal.

<a id="topic-cpp-07-07-4-std-string"></a>

### `std::string`

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

### Tìm, cắt và chuyển đổi chuỗi

Đọc ký tự đầu cần chuỗi không rỗng. `find()` không thấy trả npos; không dùng npos làm index. `substr(pos,count)` yêu cầu pos không lớn hơn size; count được giới hạn bởi phần còn lại. Ví dụ dùng name từ phần trên:

```cpp
auto pos = name.find("Bros");
if (pos != std::string::npos) {
    std::string sub = name.substr(pos);
}
const char* c = name.c_str(); // pointer mượn; lifetime theo chuỗi, không tự delete

// Số ↔ chuỗi:
std::string s = std::to_string(42);
int hp = std::stoi("100");                  // ⚠️ ném exception nếu chuỗi không hợp lệ
```

`std::stoi` còn có thể báo ngoài miền biểu diễn; nếu chỉ muốn chấp nhận toàn bộ chuỗi là số, kiểm tra vị trí kết thúc phép chuyển đổi. Các chuỗi UTF-8 có thể dùng nhiều phần tử char cho một ký tự hiển thị, nên size không tự là số ký tự người dùng nhìn thấy.

### Mở rộng C++20: định dạng chuỗi

Phần này cần compiler/thư viện hỗ trợ `<format>` và bật C++20; không thêm vào project ví dụ C++17 bên trên. Khi format phần trăm HP, kiểm tra mẫu số theo hợp đồng gameplay.

```cpp
#include <format>
#include <string>
int hp = 75;
int maxHp = 100; // hợp đồng ví dụ: maxHp > 0
std::string msg = std::format("HP: {}/{} ({:.1f}%)", hp, maxHp, 100.f * hp / maxHp);
```

### Đọc tiếp: string_view và lifetime

Học phần này sau [pointer/reference và lifetime](#lesson-6). `std::string_view` trong C++17 là một view không sở hữu dữ liệu.
```cpp
#include <string_view>
void PrintTag(std::string_view tag);   // nhận được cả std::string lẫn literal — KHÔNG copy
PrintTag("Boss");                      // không tạo std::string tạm
// ⚠️ string_view KHÔNG sở hữu dữ liệu — đừng lưu lại lâu hơn chuỗi gốc (dangling!)
```

### Đọc tiếp ở chặng Unreal: std::string ↔ FString

Phần này dùng lại khi đã học [chuỗi/container Unreal](#lesson-35); không cần cài engine để làm bài string cơ bản.
```cpp
std::string Std = "hello";
FString UStr = UTF8_TO_TCHAR(Std.c_str());          // std → FString

FString F = TEXT("Xin chào");
std::string Back = TCHAR_TO_UTF8(*F);               // FString → std (copy vào std::string NGAY)

// 💥 BẪY: macro tạo object chuyển đổi TẠM — con trỏ này dangling ngay sau dấu chấm phẩy:
// const char* Bad = TCHAR_TO_UTF8(*F);   // ĐỪNG lưu con trỏ; hãy copy vào std::string như trên
```

### Chọn loại chuỗi trong Unreal
| Cần gì | Dùng |
|---|---|
| Chuỗi build/sửa/nối/format | `FString` |
| Định danh so sánh nhiều lần (tag, socket, tên asset) | `FName` (hash sẵn, không phân biệt hoa/thường) |
| Chữ hiển thị cho người chơi (cần dịch) | `FText` |

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Đọc tên có khoảng trắng, nối nhãn nhân vật và tìm từ khóa; thử trường hợp không tìm thấy.

**Tự kiểm tra:** Phân biệt chuỗi sở hữu dữ liệu với string_view mượn dữ liệu.

---

<a id="lesson-6"></a>

## Pointer, reference và const theo đường truy cập

<a id="cpp-09"></a>

**Mục tiêu:** Phân biệt giá trị, bí danh, địa chỉ; nhận diện null và dangling trước khi dùng.  
**Cần biết trước:** [Biến](#lesson-3), [hàm](#lesson-5), [container](#lesson-20).

<a id="topic-cpp-08-08-3-reference"></a>

### Reference

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

<a id="topic-cpp-09-09-1-gia-tri-dia-chi-dereference"></a>

### Giá trị, địa chỉ, dereference

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

<a id="topic-cpp-09-09-2-nullptr-va-kiem-tra-truoc-khi-dung"></a>

### `nullptr` và kiểm tra trước khi dùng

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

<a id="topic-cpp-09-09-3-pointer-vs-reference"></a>

### Pointer vs Reference

| Reference (`T&`) | Pointer (`T*`) |
|---|---|
| Phải gắn với đối tượng khi tạo | Có thể là `nullptr` |
| Không thể “rebind” | Có thể đổi địa chỉ lưu |
| Dùng cú pháp thành viên `obj.member` | Dùng `ptr->member` |
| Phù hợp khi tham số phải tồn tại | Phù hợp khi sự vắng mặt/đổi đích có ý nghĩa |

<a id="topic-cpp-09-short-circuit-va-gioi-han-kiem-tra-null"></a>

### Short-circuit và giới hạn kiểm tra null

Đoạn minh họa, target trỏ tới Player còn sống hoặc là nullptr:

```cpp
if (target != nullptr && target->health > 0)
{
    std::cout << "Target alive\n";
}
```

Điều kiện bên trái phải được kiểm tra trước phép truy cập. Kiểm tra non-null không phát hiện dangling: không trả địa chỉ/reference tới biến cục bộ; không dùng địa chỉ phần tử vector sau khi realloc; không tiếp tục dùng đối tượng đã bị hủy. Tiếp tục ở [cấp phát động](#lesson-8), [RAII](#lesson-9) và [smart pointer](#lesson-10).

Với dữ liệu mẫu ở phần đầu bài, ptr dùng để sửa đối tượng có sẵn; không gọi delete cho địa chỉ biến tự động. Bài thực hành tự viết: [Pointer-Based Healing](#healing).

<a id="topic-cpp-14-14-3-const-bao-ve-duong-truy-cap-nao"></a>

### Const bảo vệ đường truy cập nào?

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

### Dangling Pointer — con trỏ "treo" (cực nguy hiểm)
```cpp
int* GetBadPointer() {
    int local = 42;
    return &local;      // 💥 local bị hủy khi hàm kết thúc → con trỏ trỏ vào rác
}
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Làm [Pointer-Based Healing](#healing): tìm nhân vật theo tên, trả pointer hoặc nullptr và sửa đúng đối tượng.

**Tự kiểm tra:** Giải thích vì sao non-null chưa chứng minh object còn sống; đọc đúng ba vị trí const với pointer.

<a id="topic-cpp-09-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Pointer khác null có chắc còn sống không? Khi vector realloc, pointer tới phần tử cũ còn dùng được không?
- **Tự viết:** Làm Pointer-Based Healing theo mục riêng; thử null, HP đầy, amount âm và đổi target.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="lesson-12"></a>

## Struct, class và đóng gói

<a id="cpp-08"></a>
<a id="cpp-11"></a>

**Mục tiêu:** Nhóm dữ liệu thành object, xác định quyền truy cập và giữ bất biến của trạng thái nhân vật.  
**Cần biết trước:** [Hàm](#lesson-5), [pointer/reference](#lesson-6).

<a id="topic-cpp-08-08-1-struct-nhom-du-lieu"></a>

### `struct` — nhóm dữ liệu

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
- `struct` trong C++ **có thể chứa constructor và method**, không chỉ dữ liệu; khác `class` chủ yếu ở quyền truy cập mặc định và kiểu kế thừa mặc định ([Class](#cpp-11)).

Cụ thể, member và kiểu kế thừa mặc định của struct là public, của class là private. Hai dạng đều dùng được các access specifier để chỉ rõ quyền. Chọn struct cho nhóm dữ liệu đơn giản ở bài này là quyết định trình bày, không phải giới hạn ngôn ngữ “struct không được có hàm”.

<a id="topic-cpp-11-11-1-class-va-quyen-truy-cap"></a>

### Class và quyền truy cập

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

<a id="topic-cpp-11-11-3-method-getter-va-const"></a>

### Method, getter và `const`

`void Player::TakeDamage(int damage) { ... }` là **định nghĩa đầy đủ** method bên ngoài class. `Player::` chỉ rõ method thuộc Player. Bên trong method, `health` và `maxHP` là dữ liệu của object đang được gọi.

- `TakeDamage` và `Heal` thay đổi trạng thái nên không đánh dấu `const`.
- `GetHealth() const` có thể gọi trên `const Player&`; không được sửa member không-`mutable` qua `this`. `mutable` chỉ là ngoại lệ cần biết tên, chưa dùng trong bài này.
- Getter trả `int` theo giá trị vì kiểu nhỏ và người gọi chỉ cần kết quả.
- Với class có member chuỗi, getter dạng `const std::string& GetName() const` tránh copy chuỗi nhưng trả tham chiếu mượn: không dùng tham chiếu sau khi object sở hữu chuỗi đã chết. Player tối giản trong ví dụ này chỉ quản lý HP.

Trước đây `ApplyDamage(Player&, int)` là hàm độc lập sửa struct. Nay `player.TakeDamage(20)` có thể bảo vệ quy tắc ngay trong class. Không bắt buộc mọi hàm phải là member: `PrintPlayer(const Player&)` vẫn nên là hàm độc lập khi chỉ đọc getter và in console.

<a id="topic-cpp-11-11-4-vi-du-chay-duoc-player-giu-bat-bien-hp"></a>

### Ví dụ chạy được — Player giữ bất biến HP

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

### Struct và class: mặc định truy cập

`struct` và `class` có cùng các khả năng ngôn ngữ; khác mặc định truy cập member và mặc định kiểu kế thừa: struct dùng public, class dùng private. Thường dùng struct cho nhóm dữ liệu đơn giản, class khi cần giao diện bảo vệ bất biến; struct không tự đồng nghĩa POD.

`public` là giao diện bên ngoài; `private` dành cho class và friend; `protected` cho class, friend và ngữ cảnh derived được phép. Ví dụ Player phía trên giữ dữ liệu private để mọi thay đổi HP đi qua hợp đồng chung.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tự viết Player với HP/MaxHP hợp lệ; thử damage/heal ở biên trước khi so với ví dụ.

**Tự kiểm tra:** Chỉ ra chỗ bảo vệ bất biến và phân biệt const method với tính bất biến của mọi object liên quan.

<a id="topic-cpp-08-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Reference có rebind được không? struct có được chứa method không?
- **Tự viết:** Tự chuyển dữ liệu song song thành struct Player; hàm sửa nhận Player&, hàm chỉ đọc nhận const Player&.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

<a id="topic-cpp-11-11-5-tu-kiem-tra-va-thuc-hanh"></a>

1. Vì sao constructor khởi tạo `maxHP` trước `health`? Đổi thứ tự sau dấu `:` có thay đổi thứ tự khởi tạo thực tế không?
2. Vì sao `PrintPlayer(const Player&)` gọi được getter nhưng không gọi được `Heal`? Nếu `health` là public, bất biến có thể bị phá ở đâu?

**Bài thực hành — Player Class System:** Tự tổ chức một class nhân vật giữ quy tắc HP, có constructor, getter và method thay đổi trạng thái. Tách khai báo/định nghĩa thành header/source, viết phần main chỉ điều phối và hiển thị. Có thể thêm tên nhân vật sau khi phần HP hoạt động đúng.

**Tiêu chí đạt:** Constructor tạo trạng thái hợp lệ kể cả maxHP âm theo chính sách đã chọn; damage/heal âm hoặc 0 không sửa HP; HP không âm và không vượt maxHP; getter dùng được với `const Player&`; không truy cập private từ main; kiểm thử 0, giới hạn, vượt giới hạn và input lớn. Không cần tự viết copy/move hay destructor cho class chỉ chứa các member tự quản được như ví dụ.

---

<a id="lesson-13"></a>

## Constructor, destructor, this và Rule of 0/3/5

<a id="cpp-12-2"></a>

**Mục tiêu:** Theo dõi khởi tạo/hủy và lựa chọn chính sách copy/move an toàn cho class.  
**Cần biết trước:** [Class](#lesson-12). Phần lifetime base/derived có ví dụ hoàn chỉnh ở [Kế thừa và đa hình](#lesson-14), sau khi đã học smart pointer.

<a id="topic-cpp-11-11-2-constructor-va-member-initializer-list"></a>

### Constructor và member initializer list

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

`explicit` cũng được phép trên constructor nhiều tham số; cách hiểu đầy đủ hơn và sự khác biệt với explicit cast nằm ở [Chuyển kiểu](#cpp-14-5). Không thay constructor một tham số của Player này bằng một chữ ký khác khi sao chép đoạn minh họa từ tài liệu khác.


<a id="topic-cpp-12-2-12-2-2-destructor-va-default"></a>

### Destructor và `= default`

Destructor có dạng `~TênClass()`, không có kiểu trả về và không nhận đối số. Nó được thực hiện khi object bị hủy: chẳng hạn hết scope với object cục bộ, hoặc khi owner giải phóng object cấp phát động.

`= default` yêu cầu compiler dùng cách triển khai mặc định cho một special member function. Ở mức này chỉ cần hiểu ví dụ `virtual ~Animal() = default;`: destructor vẫn tồn tại và vẫn virtual, nhưng không có phần xử lý tùy viết như in log. Nó **không phải** pure virtual; pure virtual dùng `= 0` và chưa thực hành trong lộ trình này.

Khi sở hữu một derived object qua base pointer và xóa qua pointer đó, base cần destructor public virtual trong mô hình đang dùng. Trong C++17, xóa derived qua base pointer mà base không có virtual destructor là **hành vi không xác định**, không thể chỉ kết luận “quên chạy destructor con”. `std::unique_ptr<Base>` với deleter mặc định cũng cần điều kiện này khi nó sở hữu một Derived.

Trong các class chỉ chứa dữ liệu tự quản được và không có yêu cầu đặc biệt, không cần tự viết destructor chỉ để có đủ cú pháp. Destructor in log bên dưới nhằm quan sát lifetime.

<a id="topic-cpp-12-2-12-2-3-this-chi-toi-object-dang-duoc-goi"></a>

### `this` chỉ tới object đang được gọi

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


### Chính sách tài nguyên: Rule of 0/3/5

Ở lần đọc đầu, nắm nguyên tắc không copy mặc định một raw resource sở hữu và ưu tiên member tự quản lý. Quay lại các điều kiện copy/move sau [Smart pointer](#lesson-10) và [Copy/move](#lesson-11).
Compiler chỉ khai báo/sinh các special member **khi đủ điều kiện**, và một hàm mặc định có thể bị `deleted` vì member/base không hỗ trợ thao tác đó. Ví dụ, destructor do người dùng khai báo (kể cả `= default`) ngăn tự khai báo move constructor/assignment; member `unique_ptr` khiến copy mặc định không dùng được. Các quy tắc 0/3/5 là hướng dẫn thiết kế, không phải lời hứa compiler luôn sinh đủ năm hàm:

- **Rule of 0:** Tốt nhất — *không* quản lý raw resource, để smart pointer/STL lo → không cần viết hàm nào. **Ưu tiên cái này.**
- **Rule of 3:** Nếu cần tự quản lý destructor/copy constructor/copy assignment, xem xét cả ba; có thể cấm copy bằng `= delete`.
- **Rule of 5:** Xem xét thêm move constructor và move assignment; lựa chọn `= default`, `= delete` hoặc triển khai đúng chính sách sở hữu.

```cpp
// Rule of 0 — class lý tưởng, không cần viết special member nào:
class Inventory {
    std::vector<Item> items;            // STL tự lo copy/move/destroy
    std::unique_ptr<Weapon> weapon;     // smart pointer tự lo
};   // không copy được vì weapon; move được khi các member hỗ trợ
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Ghi log constructor/destructor của object có member; dự đoán thứ tự trước khi chạy.

**Tự kiểm tra:** Giải thích vì sao owner raw resource không được copy mặc định và khi nào ưu tiên Rule of Zero.

---

<a id="lesson-7"></a>

## Lifetime và các kiểu thời gian lưu trữ

<a id="cpp-10"></a>

**Mục tiêu:** Tách lifetime của object khỏi nơi lưu trữ vật lý và xác định lúc reference/pointer hết hợp lệ.  
**Cần biết trước:** [Pointer](#lesson-6), [constructor/destructor](#lesson-13).

<a id="topic-cpp-10-10-1-lifetime-va-noi-luu-tru"></a>

### Lifetime và nơi lưu trữ

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

### Stack/heap là mô hình triển khai

Stack và heap là cách mô tả triển khai thường gặp, không phải toàn bộ mô hình C++. C++ phân biệt storage duration **automatic, static, thread và dynamic**; chuẩn không quy định mọi biến local phải nằm trên stack vật lý.

| | **Stack** | **Heap** (Free Store) |
|---|---|---|
| Mô hình thường gặp | Object local có automatic storage | Object có dynamic storage, thường qua allocator/`new` |
| Chi phí/giới hạn | Phụ thuộc nền tảng và tối ưu của compiler | Cấp phát có chi phí; giới hạn phụ thuộc hệ thống/allocator |
| Vòng đời | Object automatic local thường bị hủy khi rời scope | Cần owner giải phóng đúng lúc, ưu tiên RAII |
| Khi nào dùng | Giá trị có lifetime phù hợp scope | Khi cần lifetime/kích thước động; ưu tiên container/smart pointer |

```cpp
void Example() {
    int x = 5;                  // automatic storage
    Player p;                   // automatic object; hủy khi rời scope

    Player* heapPlayer = new Player();   // HEAP — sống tới khi delete
    delete heapPlayer;          // PHẢI tự giải phóng, nếu không → memory leak
}   // <-- tại đây x và p tự động bị hủy
```

> **Ưu tiên:** dùng giá trị và owner RAII có lifetime rõ ràng. Một `std::vector` local có thể quản lý vùng phần tử động; một `std::array` chứa phần tử ngay trong object, nên nơi lưu trữ phụ thuộc object chứa nó. Automatic storage không tự bảo vệ khỏi dangling pointer hoặc truy cập ngoài biên.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Vẽ timeline cho biến local, static local và object được tạo động; đánh dấu owner.

**Tự kiểm tra:** Giải thích vì sao vector local có thể quản lý vùng phần tử động và array không luôn nằm trên stack.


---

<a id="lesson-8"></a>

## Cấp phát động và lỗi quản lý tài nguyên

**Mục tiêu:** Nhận diện hợp đồng new/delete để đọc code cũ và hiểu lỗi tài nguyên.  
**Cần biết trước:** [Lifetime](#lesson-7).

<a id="topic-cpp-10-10-2-ghep-dung-new-delete-new-delete"></a>

### Ghép đúng `new`, `delete`, `new[]`, `delete[]`

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

<a id="topic-cpp-10-10-3-cac-loi-bo-nho-can-nhan-dien"></a>

### Các lỗi bộ nhớ cần nhận diện

| Lỗi | Bản chất | Cách nghĩ khi kiểm tra |
|---|---|---|
| Memory leak | Tài nguyên được cấp phát nhưng không được giải phóng đúng cách | Owner là ai, và có đường thực thi nào làm mất quyền quản lý không? |
| Dangling pointer/reference | Còn giữ đường truy cập tới đối tượng đã hết lifetime | Đối tượng gốc còn sống không? |
| Double delete | Giải phóng lại một đối tượng đã bị giải phóng | Có hai nơi cùng nghĩ mình là owner không? |
| Null dereference | Truy cập đối tượng qua con trỏ null | Kiểm tra null trước khi dereference khi null là khả năng hợp lệ |
| Out-of-bounds | Truy cập phần tử ngoài phạm vi hợp lệ | Kiểm tra chỉ số và kích thước; cân nhắc `.at()` |

`ptr != nullptr` không chứng minh đối tượng còn sống. `ptr == nullptr` cũng không chứng minh chương trình không leak: nếu làm mất con trỏ duy nhất bằng cách gán null trước khi giải phóng, tài nguyên vẫn có thể bị bỏ quên.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Phân loại các đoạn minh họa thành leak, use-after-free, double delete hoặc ghép sai new/delete. Không chạy đoạn UB để đoán kết quả.

**Tự kiểm tra:** Chọn phương án thay bằng container/owner RAII cho từng tình huống.

---

<a id="lesson-9"></a>

## RAII và trách nhiệm sở hữu

**Mục tiêu:** Gắn tài nguyên với lifetime của owner để giải phóng đúng một lần.  
**Cần biết trước:** [Destructor](#lesson-13), [cấp phát động](#lesson-8).

<a id="topic-cpp-10-10-4-raii-va-std-unique-ptr"></a>

### RAII và `std::unique_ptr`

**RAII — Resource Acquisition Is Initialization** — gắn quyền quản lý tài nguyên với lifetime của một đối tượng quản lý. Khi owner bị hủy, nó thực hiện việc giải phóng. Tài nguyên có thể là bộ nhớ, file hoặc khóa đồng bộ; bài này chỉ thực hành bộ nhớ.

Công cụ áp dụng cho bộ nhớ là [smart pointer](#lesson-10). Trước hết, theo dõi cùng nguyên tắc sở hữu qua ví dụ file dưới đây.

### Owner cho tài nguyên ngoài bộ nhớ

Owner không bắt buộc nằm trên stack. Với owner automatic local đã khởi tạo hoàn chỉnh, destructor cũng dọn tài nguyên khi return sớm hoặc stack unwinding do exception. Ví dụ dưới cấm copy/move để không có hai wrapper cùng đóng một file.

```cpp
#include <cstdio>

class FileHandle {
    std::FILE* file;
public:
    explicit FileHandle(const char* path) { // ACQUIRE trong constructor
        file = std::fopen(path, "r");
    }
    ~FileHandle() {                          // RELEASE trong destructor
        if (file) std::fclose(file);
    }
    bool IsOpen() const { return file != nullptr; }

    // Wrapper toi gian: cam copy/move de khong co hai owner cung dong file.
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;
    FileHandle(FileHandle&&) = delete;
    FileHandle& operator=(FileHandle&&) = delete;
};

void ReadConfig() {
    FileHandle config("config.txt");   // mở file
    if (!config.IsOpen()) return;      // xử lý mở file thất bại
    // ... dùng file ...
}   // <-- file TỰ ĐỘNG được đóng ở đây, dù return sớm hay throw exception
```

Không để wrapper sở hữu raw resource dùng copy mặc định: sao chép `FILE*` sẽ khiến hai destructor cùng đóng một file. Trong code thực tế, ưu tiên owner có sẵn như `std::ifstream` hoặc smart pointer thay vì tự viết wrapper.

Smart pointer áp dụng RAII cho tài nguyên mà nó sở hữu.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Mô tả owner của file và bộ nhớ trong một hàm có return sớm; giải thích ai dọn tài nguyên.

**Tự kiểm tra:** Phân biệt owner và observer; chỉ ra rủi ro copy một wrapper chứa raw handle.

---

<a id="lesson-10"></a>

## Smart pointer và quyền sở hữu

**Mục tiêu:** Chọn unique_ptr, shared_ptr, weak_ptr hoặc pointer mượn theo trách nhiệm lifetime.  
**Cần biết trước:** [RAII](#lesson-9).

### Unique ownership: tạo, truy cập và mượn

`std::unique_ptr<T>` trong `<memory>` biểu đạt **sở hữu độc quyền**: chỉ một `unique_ptr` sở hữu đối tượng tại một thời điểm. `std::make_unique<T>(args...)` tạo đối tượng `T` từ các đối số rồi trả về owner tương ứng. Với `int`, `std::make_unique<int>(100)` tạo một `int` có giá trị 100.

| Cú pháp | Ý nghĩa và điều kiện |
|---|---|
| `std::unique_ptr<T>` | Kiểu owner sở hữu độc quyền một đối tượng T |
| `std::make_unique<T>(args...)` | Tạo T và trả owner quản lý nó |
| `*owner` | Truy cập đối tượng được sở hữu; owner phải khác null |
| `owner->method()` | Gọi method khi T là struct/class phù hợp; dùng ở [Class](#cpp-11) |
| `owner.get()` | Lấy raw pointer đang lưu, **không chuyển quyền sở hữu** |
| `if (owner)` | Kiểm tra owner có giữ con trỏ khác null hay không |
| Kết thúc scope của owner cục bộ | Owner bị hủy và giải phóng đối tượng nó còn sở hữu |

`unique_ptr` không cho phép copy. Chẳng hạn `auto other = owner;` không hợp lệ vì sẽ tạo hai owner độc quyền cho cùng tài nguyên. Cách chuyển quyền sở hữu sẽ học trong bài copy/move; chưa cần dùng ở đây.

Raw pointer lấy từ `.get()` chỉ là **con trỏ mượn**. Không `delete` nó, không tạo một `unique_ptr` thứ hai từ nó, và không giữ nó để truy cập sau khi owner đã hủy đối tượng. Smart pointer quản lý quyền sở hữu; nó không tự làm mọi raw pointer đi kèm trở nên an toàn.

`std::shared_ptr` dùng cho sở hữu chia sẻ, `std::weak_ptr` dùng để quan sát đối tượng do `shared_ptr` quản lý mà không giữ quyền sở hữu mạnh. Phần tiếp theo giải thích shared ownership, weak observer và vòng tham chiếu.

<a id="topic-cpp-10-10-5-vi-du-chay-duoc-owner-va-pointer-muon"></a>

### Ví dụ chạy được — owner và pointer mượn

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

### `std::shared_ptr` — sở hữu CHIA SẺ (reference counting)
```cpp
std::shared_ptr<Texture> tex = std::make_shared<Texture>("hero.png");
std::shared_ptr<Texture> tex2 = tex;   // OK — cả hai cùng sở hữu, đếm = 2
// Object chỉ bị hủy khi shared_ptr CUỐI CÙNG biến mất (đếm về 0)
```

### `std::weak_ptr` — quan sát nhưng KHÔNG sở hữu (phá vỡ vòng tham chiếu)
```cpp
std::shared_ptr<Player> player = std::make_shared<Player>();
std::weak_ptr<Player> observer = player;     // không tăng đếm

if (auto locked = observer.lock()) {         // thử "nâng cấp" thành shared
    locked->DoSomething();                   // an toàn — object còn sống
} else {
    // object đã bị hủy rồi
}
```

> **Vì sao cần `weak_ptr`:** nếu A `shared_ptr` giữ B, và B `shared_ptr` giữ A → đếm không bao giờ về 0 → **leak vòng (circular reference)**. Cho một chiều thành `weak_ptr` để phá vòng.

### Bảng chọn smart pointer
| Tình huống | Dùng |
|---|---|
| Một chủ sở hữu rõ ràng | `unique_ptr` ✅ (mặc định) |
| Nhiều nơi cùng sở hữu | `shared_ptr` |
| Tham chiếu ngược / cache / observer | `weak_ptr` |
| Chỉ "mượn" tạm, không sở hữu | con trỏ thường `T*` (raw, non-owning) |

### Giới hạn bảo vệ của smart pointer

Smart pointer giảm lỗi quản lý ownership, không bảo đảm mọi chương trình không leak. Vòng shared_ptr có thể giữ tài nguyên mãi; làm mất raw pointer nhận từ unique_ptr::release() cũng có thể leak. `get()` chỉ mượn, còn `release()` bỏ quyền sở hữu và trả pointer để bên nhận chịu trách nhiệm. Ưu tiên chuyển unique_ptr thay vì release khi có thể.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Chuyển một owner Enemy sang unique_ptr; thử chuyển ownership và quan sát pointer nguồn.

**Tự kiểm tra:** Vẽ vòng shared ownership và chọn cạnh weak để phá vòng; kiểm tra kết quả lock trước khi dùng.


<a id="topic-cpp-10-10-6-tu-kiem-tra-va-thuc-hanh"></a>

1. Vì sao `health.get()` không cho phép bạn gọi `delete` trên kết quả? Nếu owner hết lifetime, con trỏ mượn còn dùng được không?
2. Sau `int* q = p; delete p; p = nullptr;`, điều gì xảy ra với `q`? Vì sao kiểm tra `q != nullptr` không đủ?

**Bài thực hành — Dynamic Character Manager:** Quản lý HP của một nhân vật bằng `std::unique_ptr<int>` và viết hàm nhận pointer mượn để thay đổi HP. Sau đó áp dụng vào [class Player](#lesson-12). Giữ điều kiện HP ban đầu không âm; thử damage âm, damage 0, damage lớn hơn HP và pointer null.

**Tiêu chí đạt:** Nêu rõ owner và borrower; ghép đúng new/delete ở phần thử nghiệm thủ công; không `delete` pointer từ `.get()`; không dùng pointer sau lifetime; HP không âm và các input biên cho kết quả đúng. Không cần tự viết smart pointer.

---

<a id="lesson-14"></a>

## Kế thừa, đa hình và override

<a id="cpp-12-1"></a>

**Mục tiêu:** Phân biệt dispatch theo kiểu tĩnh/động và dùng kế thừa đúng quan hệ is-a.  
**Cần biết trước:** [Class](#lesson-12), [lifetime](#lesson-7), [smart pointer](#lesson-10).

<a id="topic-cpp-12-1-12-1-1-ke-thua-cong-khai-the-hien-quan-he-la-mot-loai"></a>

### Kế thừa công khai thể hiện quan hệ “là một loại”

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

<a id="topic-cpp-12-1-12-1-2-khong-virtual-chon-ham-theo-kieu-tinh"></a>

### Không virtual: chọn hàm theo kiểu tĩnh

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

<a id="topic-cpp-12-1-12-1-3-co-virtual-chon-hanh-vi-theo-doi-tuong-thuc"></a>

### Có virtual: chọn hành vi theo đối tượng thực

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
| `virtual ~Animal() = default;` | Destructor virtual dùng cách xử lý mặc định; vai trò đầy đủ ở [Constructor/destructor](#cpp-12-2) |

`override` không tự tạo ra quan hệ kế thừa hay tự biến một hàm không khớp thành virtual. Ví dụ base có `MakeSound() const` nhưng derived viết `MakeSound() override` thiếu `const`, compiler báo lỗi. Nhờ vậy sai chữ ký không âm thầm trở thành hàm khác.

**Overload khác override:** overload là nhiều hàm cùng tên với danh sách tham số khác nhau; override là method derived ghi đè virtual method của base theo các điều kiện về chữ ký. Đối với bài này, giữ tên, tham số, `const` và kiểu trả về tương ứng giống nhau.

Không phải mọi method đều cần `virtual`. Dùng virtual khi chương trình cần chọn hành vi theo kiểu động của object thông qua một giao diện chung. Không thêm nó chỉ vì method nằm trong class.

**Object slicing:** Copy một object derived vào object base theo giá trị có thể làm mất phần derived. Muốn một danh sách giữ các object đa hình, [Final Assessment](#cpp-17-2) dùng `vector<unique_ptr<Enemy>>`, không dùng `vector<Enemy>` để kỳ vọng giữ đầy đủ Boss. `protected` cho phép truy cập từ class con theo quy tắc kế thừa, không cho toàn bộ code ngoài quyền như public; ưu tiên giao diện rõ ràng thay vì mở toàn bộ dữ liệu cho class con.

### Polymorphism (đa hình) — cùng interface, hành vi khác nhau
Đây là sức mạnh thật sự của OOP, cho phép xử lý nhiều loại object qua 1 con trỏ chung:

```cpp
class Shape {
public:
    virtual float Area() const { return 0.0f; }   // virtual = cho phép override
    virtual ~Shape() = default;                    // hỗ trợ hủy qua Shape*
};

class Circle : public Shape {
    float radius;
public:
    Circle(float r) : radius(r) {}
    float Area() const override { return 3.14159f * radius * radius; }  // override
};

class Square : public Shape {
    float side;
public:
    Square(float s) : side(s) {}
    float Area() const override { return side * side; }
};

// Xử lý đa hình:
std::vector<std::unique_ptr<Shape>> shapes;
shapes.push_back(std::make_unique<Circle>(5.0f));
shapes.push_back(std::make_unique<Square>(3.0f));

for (const auto& shape : shapes) {
    std::cout << shape->Area();   // gọi ĐÚNG hàm theo kiểu thực — đa hình!
}
```

> **`virtual` & `override` quan trọng vì sao:** với lời gọi không ghi rõ tên lớp qua `Shape*`, hàm không virtual được chọn theo kiểu tĩnh; hàm virtual chọn override theo kiểu động. **vtable** là cách triển khai phổ biến, không phải cấu trúc mà chuẩn C++ bắt buộc. Thêm `override` ở lớp con để compiler kiểm tra bạn override đúng.

### Cảnh báo: Virtual Destructor
```cpp
Shape* s = new Circle(5.0f);
delete s;   // Hợp lệ vì ~Shape() virtual.
            // Nếu bỏ virtual: delete derived qua base như ở đây là UB trong C++17.
```

Không được dự đoán "chỉ destructor base chạy" cho chương trình UB. Base cho phép hủy đa hình nên có destructor public virtual; nếu thiết kế cấm hủy qua base, một lựa chọn là destructor protected non-virtual. Xem [quy tắc delete qua base](https://eel.is/c++draft/expr.delete#3); ví dụ này dùng delete thông thường trong C++17.

<a id="topic-cpp-12-2-12-2-1-khoi-tao-phan-lop-cha"></a>

### Khởi tạo phần lớp cha

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

<a id="topic-cpp-12-2-12-2-4-vi-du-chay-duoc-quan-sat-day-du-vong-doi"></a>

### Ví dụ chạy được — quan sát đầy đủ vòng đời

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

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo hai loại enemy có hành vi Attack khác nhau; gọi qua interface chung và dự đoán hàm được gọi.

**Tự kiểm tra:** Giải thích override và điều kiện hủy derived qua base trong phạm vi C++17.

<a id="topic-cpp-12-1-12-1-4-tu-kiem-tra-va-thuc-hanh"></a>

1. Trong ví dụ không virtual, vì sao cùng một Dog lại cho `Unknown` qua `Animal&` và `Woof` qua tên `dog`? Khi thêm virtual, điều gì quyết định hàm được gọi?
2. Nếu bỏ `const` ở method Dog nhưng giữ `override`, chương trình có biên dịch không? Compiler đang bảo vệ điều gì?

**Bài thực hành — Animal / Dog Virtual Test:** Tự viết hai phiên bản riêng có và không có virtual. Thêm một loại động vật thứ hai có âm thanh khác; quan sát lời gọi qua base reference và base pointer.

**Tiêu chí đạt:** Dự đoán đúng output trước khi chạy; dùng public inheritance có ý nghĩa; dùng `override` ở derived; giải thích được kiểu tĩnh và object thực; không tạo/xóa sai ownership chỉ để thử virtual. Chưa yêu cầu pure virtual, RTTI, object slicing hay đa kế thừa.

<a id="topic-cpp-12-2-12-2-5-tu-kiem-tra-va-thuc-hanh"></a>

1. Vì sao dòng `Animal created` xuất hiện trước `Dog created`, nhưng dòng hủy Dog lại xuất hiện trước dòng hủy Animal? Owner bị hủy ở vị trí nào?
2. Trong `this->name = name`, mỗi tên `name` chỉ đối tượng nào? `virtual ~Animal() = default;` khác `virtual void F() = 0;` về ý nghĩa đang học ra sao?

**Bài thực hành — Animal / Dog Lifetime:** Tự tạo class base có constructor tham số và một derived class gọi constructor đó. Ghi log thứ tự tạo/hủy, quản lý derived qua `unique_ptr<Base>`, thêm setter/getter dùng `this` đúng ngữ cảnh.

**Tiêu chí đạt:** Base được khởi tạo hợp lệ; giải thích đúng thứ tự log; base destructor public virtual cho dạng sở hữu đã chọn; không `delete` thủ công đối tượng đang thuộc unique_ptr; không trả/giữ tham chiếu sau lifetime; không trộn nhiều định nghĩa Animal/Dog từ các ví dụ. Tiếp tục học [abstract class/interface](#lesson-15) và [cast theo kiểu động](#lesson-46) ở đúng chương tương ứng.

---

<a id="lesson-15"></a>

## Hàm virtual, abstract class và interface

**Mục tiêu:** Thiết kế hợp đồng đa hình tối thiểu mà không tạo object của abstract class.  
**Cần biết trước:** [Kế thừa và đa hình](#lesson-14).

### Pure Virtual & Abstract Class (interface)
```cpp
class IDamageable {                      // tiền tố "I" = interface (quy ước)
public:
    virtual void TakeDamage(int amount) = 0;   // "= 0" → pure virtual
    virtual ~IDamageable() = default;
};
// Class còn pure virtual final overrider là abstract, không thể tạo object trực tiếp.

class Player : public IDamageable {
public:
    void TakeDamage(int amount) override { /* bắt buộc cài đặt */ }
};

// IDamageable d;          // ❌ LỖI — abstract class
auto d = std::make_unique<Player>();
IDamageable& target = *d;       // dùng interface, owner d quản lý lifetime
```

Pure virtual có thể có định nghĩa ở ngoài class; `= 0` không đồng nghĩa "không bao giờ có thân". Class còn final overrider pure virtual là abstract và không thể tạo object trực tiếp.

> Abstract class với toàn pure virtual = **interface** (giống `interface` trong C#/Java). Định nghĩa "hợp đồng" mà lớp con phải tuân theo.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Định nghĩa IDamageable và hai implementation; lựa chọn destructor theo cách sử dụng base.

**Tự kiểm tra:** Nhận diện class còn pure virtual final overrider và giải thích vì sao không thể tạo object trực tiếp.

---

<a id="lesson-16"></a>

## Composition và thiết kế trách nhiệm

**Mục tiêu:** Chọn has-a hay is-a theo quan hệ của mô hình, tránh cây kế thừa khó thay đổi.  
**Cần biết trước:** [Class](#lesson-12), [đa hình](#lesson-14).

Nguyên tắc thiết kế quan trọng: **ưu tiên ghép (has-a) hơn kế thừa sâu (is-a)**. Kế thừa nhiều tầng dễ thành "cây thừa kế" cứng nhắc, khó bảo trì.

```cpp
// ❌ Kế thừa sâu, cứng nhắc:
// Entity → Character → Humanoid → Player → ArmedPlayer → ...

// ✅ Composition — lắp ghép component:
class Player {
    HealthComponent     health;      // "có một" health
    MovementComponent   movement;    // "có một" movement
    InventoryComponent  inventory;   // "có một" inventory
public:
    void Update(float dt) {
        movement.Update(dt);
        health.Regenerate(dt);
    }
};
```

> Đây chính là triết lý nền tảng của **Component pattern** và **ECS** (Phần V), và là cách Unreal Engine tổ chức Actor (Actor + nhiều ActorComponent).

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tách Health, Movement và Inventory thành trách nhiệm độc lập của Player.

**Tự kiểm tra:** Nêu một thay đổi gameplay dễ thực hiện hơn bằng composition và giải thích trade-off.

---

<a id="lesson-17"></a>

## Suy luận kiểu và duyệt dữ liệu

**Mục tiêu:** Dùng auto, range-for và structured bindings mà vẫn biết copy hay reference.  
**Cần biết trước:** [Container](#lesson-20), [reference](#lesson-6), [struct](#lesson-12).

<a id="topic-cpp-02-02-4-auto-suy-luan-kieu"></a>

### `auto` — suy luận kiểu

```cpp
auto health = 100;       // int
auto speed = 5.5f;       // float
auto ratio = 0.95;       // double
auto isAlive = true;     // bool
```

`auto` được compiler suy luận **lúc biên dịch**, không phải kiểu dữ liệu động tự biến đổi khi chạy. Với các trường hợp phức tạp, `auto` có quy tắc suy luận và bỏ `const`/reference nhất định; sẽ học kỹ hơn khi cần.

<a id="topic-cpp-05-range-based-for-va-container"></a>

### Range-based for và container

Range-based for cần một dãy phần tử. Học cú pháp này với array/vector tại [Container](#cpp-07); phiên bản tham chiếu Player ở [Struct và class](#cpp-08). Không phải range-for mặc nhiên tốn RAM hơn indexed-for; chi phí phụ thuộc kiểu phần tử và copy/reference.

<a id="topic-cpp-07-range-based-for-voi-so-nguyen"></a>

### Range-based for với số nguyên

Đoạn minh họa dùng hp đã khai báo trong phần array:

```cpp
for (int value : hp)
{
    std::cout << value << '\n';
}
```

Mỗi value là bản sao int. Khi đến [Struct và class](#cpp-08), dùng `Player&` để sửa gốc và `const Player&` để đọc object lớn mà không copy.

<a id="topic-cpp-08-duyet-player-theo-muc-dich"></a>

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

Các ví dụ HP giả định dữ liệu ban đầu nằm trong `0 <= health <= maxHP`. Với struct public, nơi tạo/gán dữ liệu có trách nhiệm giữ điều kiện đó. [Class](#cpp-11) sẽ dùng class để quản lý điều kiện trong giao diện của đối tượng. Những block định nghĩa enum riêng là cách giải thích lại cùng khái niệm, không chép cả hai định nghĩa CharacterClass vào một file.

### Structured bindings trong C++17

Một pair/tuple hoặc struct phù hợp có thể được tách thành các tên bằng structured binding. Ví dụ dưới cần `<map>`, `<string>` và `<iostream>`.

```cpp
std::map<std::string, int> scores{{"Mage", 10}, {"Knight", 20}};
for (const auto& [name, score] : scores) {
    std::cout << name << ": " << score << "\n";
}
```

`const auto&` ở đây giữ ý định đọc mà không sao chép mỗi cặp; nếu dùng `auto [name, score]`, các tên được tạo từ một bản sao. Phần `nullptr` được giải thích tại [pointer và lifetime](#lesson-6).

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Duyệt một danh sách để đọc, sửa và sao chép; viết rõ auto, auto& hoặc const auto& phù hợp.

**Tự kiểm tra:** Dự đoán giá trị danh sách sau mỗi vòng lặp; phân biệt dữ liệu gốc với bản sao.

---

<a id="lesson-22"></a>

## Const correctness, constexpr và enum class

**Mục tiêu:** Diễn đạt ý định chỉ đọc, tính hằng và trạng thái có kiểu.  
**Cần biết trước:** [Biến](#lesson-3), [class](#lesson-12).

<a id="topic-cpp-02-02-3-const-va-constexpr"></a>

### `const` và `constexpr`

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

<a id="topic-cpp-08-08-2-enum-class-trang-thai-co-ten"></a>

### `enum class` — trạng thái có tên

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

### const correctness — đánh dấu cái gì không đổi
```cpp
class Player {
    int health = 100;
public:
    int  GetHealth() const { return health; }   // không sửa member thông thường qua this
    void SetHealth(int h)  { health = h; }       // non-const: được sửa
};

void Print(const Player& p) {   // const& → chỉ gọi được const method
    std::cout << p.GetHealth(); // OK
    // p.SetHealth(50);         // ❌ LỖI — p là const
}
```
> `const` không chỉ là an toàn — nó là *tài liệu sống* cho biết hàm/biến nào "đọc-thôi", giúp compiler tối ưu và bắt lỗi sớm.

Const method vẫn có thể sửa `mutable` member hoặc object khác được trỏ tới. `const` không tự đồng nghĩa hàm thuần hoặc an toàn đa luồng.

### constexpr — tính toán LÚC BIÊN DỊCH
```cpp
constexpr int MaxEnemies = 64;             // hằng số compile-time
constexpr int Factorial(int n) {           // có thể dùng trong constant expression
    return (n <= 1) ? 1 : n * Factorial(n - 1);
}
constexpr int f5 = Factorial(5);           // 120 được tính KHI BIÊN DỊCH, 0 chi phí runtime
int arr[MaxEnemies];                       // dùng được làm kích thước mảng tĩnh
```

Biến `constexpr` cần initializer là biểu thức hằng phù hợp. Hàm `constexpr` vẫn có thể chạy runtime; constant evaluation được yêu cầu ở ngữ cảnh như khởi tạo `f5`, không chỉ bởi từ khóa trên hàm. Ví dụ factorial dành cho số nhỏ không âm để tránh tràn `int`.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Dùng enum class cho trạng thái combat; viết API chỉ đọc và thử lời gọi không hợp lệ.

**Tự kiểm tra:** Giải thích vì sao hàm constexpr vẫn có thể chạy runtime và const không tự đồng nghĩa thread-safe.

---

<a id="lesson-47"></a>

## Namespace, static và linkage

<a id="cpp-14"></a>

**Mục tiêu:** Đọc ý nghĩa static theo vị trí và tổ chức tên qua nhiều file.  
**Cần biết trước:** [Class](#lesson-12), [lifetime](#lesson-7); xem [build nhiều file](#lesson-2) khi thực hành linkage.

<a id="topic-cpp-14-14-1-cung-tu-khoa-static-y-nghia-phu-thuoc-vi-tri"></a>

### Cùng từ khóa static, ý nghĩa phụ thuộc vị trí

Biến cục bộ thông thường được tạo cho mỗi lần thực thi đi qua khai báo. **Local static** tồn tại suốt chương trình sau khi được khởi tạo; tên của nó vẫn chỉ dùng trong scope khai báo. Vì vậy có thể nhớ số lần gọi giữa các lượt. Với khởi tạo động của local static, việc khởi tạo diễn ra khi lần đầu đi qua khai báo và chỉ hoàn tất một lần; không phải mọi biến static đều đợi tới lúc chạy hàm mới được khởi tạo.

**Static data member** thuộc class, không phải mỗi object một bản. Một method static không có `this`; nó không thể tự đọc `health` của một Enemy cụ thể nếu không nhận object/địa chỉ để truy cập. Dùng `EnemyTracker::GetCreated()` làm rõ rằng câu hỏi hướng tới class.

| Vị trí | Ý nghĩa cần nhớ | Ví dụ mục đích |
|---|---|---|
| `static int calls` trong hàm | Giữ giá trị giữa các lần gọi, tên có phạm vi cục bộ | Đếm số lần gọi một thao tác |
| `static int created` trong class | Một thành viên dữ liệu dùng chung | Đếm những lần tạo được thiết kế để ghi nhận |
| `static int GetCreated()` trong class | Method không gắn với `this` | Đọc dữ liệu dùng chung |
| `static` ở phạm vi namespace | Internal linkage cho tên phù hợp trong translation unit | Nhận diện khi đọc code nhiều file; chưa cần áp dụng rộng |

<a id="topic-cpp-14-14-2-vi-du-chay-duoc-dem-dung-dieu-duoc-dat-ten"></a>

### Ví dụ chạy được — đếm đúng điều được đặt tên

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

<a id="topic-cpp-14-14-4-namespace-va-pham-vi-ten"></a>

### Namespace và phạm vi tên

`namespace GameConfig { ... }` gom tên liên quan; `GameConfig::MaxEnemies` chỉ rõ nơi tên thuộc về. `std::vector` và `std::cout` dùng cùng ý tưởng scope. Namespace không tạo một object cấu hình và không tự làm biến trở thành hằng. Tránh `using namespace std;` trong header vì ảnh hưởng các file include header đó; ưu tiên tên đầy đủ hoặc khai báo using có phạm vi hẹp.

### Anonymous namespace — "private" cấp file
```cpp
// Weapon.cpp
namespace {                        // mọi thứ trong đây CHỈ thấy được trong file này (internal linkage)
    constexpr float kCritMultiplier = 2.0f;
    float RollCrit() { /* ... */ return kCritMultiplier; }
}
```
Tương đương `static` cho hàm/biến tự do, nhưng là cách viết C++ hiện đại khuyến nghị.

### Lưu ý riêng cho Unreal
> **UHT không hỗ trợ reflected type nằm trong namespace:** `UCLASS`, `USTRUCT`, `UENUM` phải ở global scope — đó là lý do UE dùng **prefix** (A/U/F/E) thay cho namespace. Code C++ thuần (không reflection) trong project vẫn dùng namespace bình thường; code engine mới của Epic cũng vậy (vd `UE::Tasks`, `UE::Math`).

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Viết bộ đếm số lần gọi và bộ đếm object đang sống; đặt tên để không nhầm hai ý nghĩa.

**Tự kiểm tra:** Phân biệt static local, static member, internal linkage và anonymous namespace.

<a id="topic-cpp-14-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự giải thích:** Tại sao bộ đếm ví dụ vẫn bằng 2 sau dấu `}`? `const int*` có ngăn `hp = 80` không? Vì sao method static không có `this`?
- **Tự viết:** Enemy Tracker với bộ đếm có tên đúng trách nhiệm; đặt giới hạn enemy trong namespace; getter chỉ đọc trả kiểu phù hợp.
- **Đạt khi:** Giải thích rõ đang đếm “lần tạo qua constructor nào” hay “đang sống”, thử nhiều lần gọi và không gán cho static những tính chất mà chương trình chưa thiết kế.

---

<a id="lesson-46"></a>

## Chuyển kiểu và lựa chọn cast

<a id="cpp-14-5"></a>

**Mục tiêu:** Chọn phép chuyển kiểu theo ý định, nhận diện narrowing và kiểm tra runtime phù hợp.  
**Cần biết trước:** [Kiểu dữ liệu](#lesson-3), [đa hình](#lesson-14).

<a id="topic-cpp-02-02-5-ep-kieu-casting-o-muc-da-hoc"></a>

### Chuyển kiểu trong phép số học

```cpp
int health = 75;
int maxHP = 200;
float ratio = static_cast<float>(health) / maxHP; // 0.375
```

Vì sao cần cast? `75 / 200` là **chia nguyên** và cho ra `0` trước khi được gán vào float. `static_cast<float>(health)` làm một toán hạng thành `float`, khiến phép chia dùng số thực.

```cpp
int hp = static_cast<int>(75.9f); // 75 (bỏ phần thập phân)
```

Phần số học ở trên là điểm bắt đầu. Tiếp theo, phân biệt các named cast theo ý định và giới hạn; dùng được một cú pháp không tự chứng minh đã hiểu mọi trường hợp chuyển kiểu.

<a id="topic-cpp-14-5-14-5-1-chuyen-kieu-khong-tu-kiem-tra-dung-yeu-cau-gameplay"></a>

### Chuyển kiểu không tự kiểm tra đúng yêu cầu gameplay

`float speed = 10;` là implicit conversion. `static_cast<float>(hp)` diễn đạt chuyển đổi tường minh. Cast không sửa được thuật toán đặt sai chỗ: `static_cast<float>(hp / maxHP)` vẫn chia nguyên trước, khác `static_cast<float>(hp) / maxHP`; cần kiểm tra `maxHP > 0` theo hợp đồng phép chia.

Với giá trị biểu diễn được, đổi float sang int bỏ phần lẻ theo hướng về 0: `12.8f` thành 12, `-12.8f` thành -12. Không dùng cast như phép làm tròn gần nhất. Giá trị ngoài miền int, vô cực hoặc NaN không được giải quyết an toàn chỉ nhờ `static_cast<int>`; kiểm tra miền trước. Narrowing có chủ ý vẫn có thể mất độ chính xác.

<a id="topic-cpp-14-5-14-5-2-bon-named-casts-bon-y-dinh-khac-nhau"></a>

### Bốn named casts, bốn ý định khác nhau

| Cú pháp | Ý định | Điều kiện và giới hạn |
|---|---|---|
| `static_cast<T>(value)` | Chuyển số/enum hoặc chuyển đổi tĩnh được phép | Không kiểm tra runtime rằng base object thực sự là derived; có thể mất dữ liệu |
| `dynamic_cast<Derived*>(base)` | Kiểm tra kiểu động trong hierarchy đa hình | Downcast runtime cần base polymorphic và RTTI phù hợp; thất bại trả null |
| `const_cast<T>(value)` | Thay đổi cv-qualification của pointer/reference | Không cho quyền sửa object thật sự được tạo là const; làm vậy là UB |
| `reinterpret_cast<T>(value)` | Một số chuyển đổi biểu diễn/địa chỉ mức thấp | Không tạo object kiểu mới, không bảo đảm dereference hợp lệ |

Phần phải thực hành là `static_cast` và `dynamic_cast`; `const_cast`/`reinterpret_cast` được học để nhận diện và tránh dùng bừa. C-style cast `(int)x` che khuất lựa chọn chuyển đổi và không thay cho kiểm tra `dynamic_cast`.

<a id="topic-cpp-14-5-14-5-3-vi-du-chay-duoc-kiem-tra-boss-that"></a>

### Ví dụ chạy được — kiểm tra Boss thật

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

<a id="topic-cpp-14-5-14-5-4-explicit-khong-phai-mot-phep-cast"></a>

### Explicit không phải một phép cast

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

### Trong Unreal: dùng `Cast<>()` — KHÔNG dùng dynamic_cast
UE build với **RTTI tắt** ở hầu hết module, và `UObject` đã có reflection ([UObject, reflection và macros](#lesson-31)) → dùng cast của engine:

```cpp
// Cast<T> — trả nullptr nếu sai kiểu (an toàn, dùng thường xuyên nhất):
if (AEnemy* Enemy = Cast<AEnemy>(OtherActor)) {
    Enemy->ApplyDamage(25.f);
}

// CastChecked<T> — khi bạn CHẮC CHẮN đúng kiểu; nếu sai → assert (crash sớm khi dev):
UEnhancedInputComponent* EIC = CastChecked<UEnhancedInputComponent>(PlayerInputComponent);
```

| | `Cast<T>` | `CastChecked<T>` |
|---|---|---|
| Khi sai kiểu | trả `nullptr` | assert (build dev) |
| Dùng khi | "có thể là" — cần kiểm tra rồi mới dùng | bất biến của hệ thống, chắc chắn đúng |

> `Cast<>` hoạt động nhờ reflection nên **chỉ dùng cho `UObject`**. Kiểu non-UObject (struct `F...` thường) → dùng cast chuẩn C++ như bình thường. Kiểm tra interface: `Implements<UMyInterface>()` ([Unreal Interfaces](#lesson-51)).

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Thử chuyển số thập phân sang int; kiểm tra downcast thành công/thất bại trên pointer đa hình.

**Tự kiểm tra:** Nêu khác biệt thất bại của dynamic_cast pointer/reference và vai trò explicit.

<a id="topic-cpp-14-5-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự giải thích:** Vì sao `static_cast` sau phép chia có thể quá muộn? Cast reference thất bại khác pointer thế nào? Tên `Boss` và kiểu Boss khác nhau ra sao?
- **Tự viết:** Một danh sách Enemy/Boss còn sống; thử downcast thành công, không thành công và null; dùng kết quả chỉ sau khi kiểm tra.
- **Đạt khi:** Không sửa const object thông qua cast, không thử chạy UB để dự đoán output, giải thích được mục đích trước khi thêm cast.

---

<a id="lesson-19"></a>

## Templates và generic programming

<a id="cpp-13"></a>

**Mục tiêu:** Viết khuôn cho các kiểu đáp ứng hợp đồng phép toán; giữ định nghĩa nhìn thấy khi cần instantiate.  
**Cần biết trước:** [Hàm](#lesson-5), [class](#lesson-12); xem [header/source](#lesson-2) cho ví dụ nhiều file.

<a id="topic-cpp-13-13-1-function-template-mot-khuon-ham-nhieu-kieu-phu-hop"></a>

### Function template: một khuôn hàm, nhiều kiểu phù hợp

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

<a id="topic-cpp-13-13-2-class-template"></a>

### Class template

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

<a id="topic-cpp-13-13-3-std-array-va-std-vector-cung-la-template"></a>

### `std::array` và `std::vector` cũng là template

**Đoạn minh họa, cần `<array>` và `<vector>`:**

```cpp
std::vector<int> values;
std::array<float, 3> threeNumbers{};
```

`std::vector<int>` dùng đối số kiểu int. `std::array<float, 3>` có cả đối số kiểu float và đối số giá trị hằng 3. Kích thước là một phần của kiểu: `std::array<float, 3>` khác kiểu với `std::array<float, 4>`.

`threeNumbers{}` khởi tạo các float bằng 0.0f. Nếu chỉ viết `std::array<float, 3> threeNumbers;` như biến cục bộ, không được giả định các phần tử float đã có giá trị để đọc.

<a id="topic-cpp-13-13-4-template-thuong-duoc-dinh-nghia-trong-header"></a>

### Template thường được định nghĩa trong header

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

<a id="topic-cpp-13-13-5-hop-dong-cua-clampvalue-va-std-clamp"></a>

### Hợp đồng của ClampValue và `std::clamp`

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

<a id="topic-cpp-13-13-6-vi-du-chay-duoc-gamemath-va-stat"></a>

### Ví dụ chạy được — GameMath và Stat

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

### Template với nhiều tham số & giá trị
```cpp
template <typename T, int Size>
class FixedArray {
    T data[Size];              // mảng kích thước cố định lúc compile
public:
    T& operator[](int i) { return data[i]; }
    constexpr int Length() const { return Size; }
};

FixedArray<float, 16> matrix{}; // 16 float nằm trong object matrix
```

> **Lưu ý:** Template thường phải **viết toàn bộ trong header** (không tách `.cpp`) vì compiler cần thấy định nghĩa để sinh code khi gặp lời gọi.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tự viết ClampValue và một Stat<T>; kiểm tra khoảng thường, đúng biên và khoảng chỉ một giá trị.

**Tự kiểm tra:** Giải thích yêu cầu của T, tiền điều kiện của clamp và lý do template thường nằm trong header.

<a id="topic-cpp-13-13-7-tu-kiem-tra-va-thuc-hanh"></a>

1. Vì sao `GetMax(10, 5.5f)` không suy ra được một T, nhưng `GetMax<float>(10, 5.5f)` hợp lệ? `Stat<int>` và `Stat<float>` có phải cùng một kiểu không?
2. Trước khi gọi clamp, cần kiểm tra quan hệ nào giữa min và max? Vì sao nên nhận kết quả `std::clamp` bằng một biến giá trị trong các ví dụ dùng đối số tạm?

**Bài thực hành — Generic Game Math:** Tự viết các function template thao tác chỉ số game cho int và float trong `GameMath.h`. Kiểm tra một giá trị ở dưới min, đúng min, giữa đoạn, đúng max và trên max; phía gọi nhận diện khoảng đảo trước khi dùng hàm. Bổ sung một ví dụ Stat để giải thích tham số kiểu, không cần xây class template nâng cao.

**Tiêu chí đạt:** Header dùng được từ nơi gọi; hiểu kiểu T được suy ra hoặc chỉ định; kết quả đúng với cả int/float; tốc độ có giới hạn `10.0f` đúng yêu cầu; không chạy `std::clamp` với khoảng đảo; không giữ dangling reference từ kết quả trả về; giải thích được vì sao code template cần có định nghĩa tại nơi instantiation thông thường. Chưa yêu cầu specialization, concepts, variadic templates hay perfect forwarding.

---

<a id="lesson-11"></a>

## Copy, move và value category

<a id="cpp-16"></a>

**Mục tiêu:** Phân biệt sao chép, gán và chuyển tài nguyên; đọc đúng std::move và trạng thái sau move.  
**Cần biết trước:** [Container](#lesson-20), [special members](#lesson-13), [unique_ptr](#lesson-10).

<a id="topic-cpp-16-16-1-copy-construction-copy-assignment-va-move"></a>

### Copy construction, copy assignment và move

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

<a id="topic-cpp-16-16-1-1-vi-du-chay-duoc-inventory-va-owner"></a>

### Ví dụ chạy được — Inventory và owner

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

### Lvalue vs Rvalue
```cpp
int x = 10;        // biểu thức x là lvalue: định danh object x
                   // biểu thức 10 là prvalue; rvalue gồm prvalue và xvalue
```

### Vấn đề move giải quyết
```cpp
std::vector<int> CreateHugeVector() {
    std::vector<int> v(1'000'000);   // vector 1 triệu phần tử
    return v;                         // có thể NRVO; nếu không thì move vector
}
auto data = CreateHugeVector();       // không mặc định kết luận có một lần move
```

### `std::move` — tạo biểu thức xvalue, không tự di chuyển tài nguyên
```cpp
std::string a = "very long string...";
std::string b = std::move(a);    // chọn move constructor của std::string
// a còn hợp lệ; không giả định a rỗng hay giữ nguyên nội dung.
// Có thể gán lại, hủy, hoặc gọi thao tác có tiền điều kiện được thỏa mãn.
```

`std::move` chỉ chuyển loại biểu thức; nếu overload move không dùng được thì lời gọi có thể copy hoặc không biên dịch. Cam kết "valid but unspecified" áp dụng cho nhiều kiểu thư viện chuẩn, trừ khi kiểu đó có cam kết cụ thể khác; class tự viết phải tự định nghĩa và duy trì hợp đồng của nó. Xem [trạng thái moved-from của kiểu thư viện](https://eel.is/c++draft/lib.types.movedfrom).

### Move Constructor & Move Assignment (cho class tự định nghĩa)
```cpp
#include <cstddef>
#include <memory>

class Buffer {
    std::unique_ptr<int[]> data;
public:
    explicit Buffer(std::size_t count) : data(std::make_unique<int[]>(count)) {}
    Buffer(const Buffer&) = delete;
    Buffer& operator=(const Buffer&) = delete;
    Buffer(Buffer&&) noexcept = default;
    Buffer& operator=(Buffer&&) noexcept = default;
    // Destructor tu sinh huy data; unique_ptr giai phong mang dung cach.
};
```

Ví dụ liệt kê copy/move để làm rõ chính sách sở hữu. Với class chỉ có member tự quản lý như trên, thường có thể bỏ các khai báo copy/move và theo **Rule of Zero**; `unique_ptr` vẫn khiến class không copy được. Chỉ tự viết thao tác chuyển tài nguyên khi cần chính sách mà member hiện có chưa cung cấp.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Dự đoán kết quả copy Inventory, sửa bản sao và chuyển owner; chứng minh object nào sở hữu tài nguyên.

**Tự kiểm tra:** Không suy luận std::move tự chuyển dữ liệu hoặc mọi object nguồn đều rỗng.

<a id="topic-cpp-16-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự giải thích:** `existing = original` khác `auto copied = original` ở điểm nào? Sau `std::move`, biến nguồn có biến mất không? Capture khác parameter ra sao?
- **Tự viết buổi 16.1:** Inventory có copy độc lập, chuyển quyền sở hữu bằng move và cách dùng lại nguồn đúng hợp đồng.
- **Tự viết buổi 16.2:** AOE damage, đếm sống và báo actual damage; thử vector rỗng, HP bằng 0, damage bằng 0, damage lớn hơn HP.
- **Đạt khi:** Không đọc phần tử nguồn sau move bằng giả định không được bảo đảm, không copy unique_ptr, không capture reference vượt lifetime, không nhầm số tham số callback.

---

<a id="lesson-18"></a>

## Lambda, capture và callback

**Mục tiêu:** Tách capture khỏi tham số và chọn lifetime phù hợp cho callback.  
**Cần biết trước:** [Hàm](#lesson-5), [reference/lifetime](#lesson-6), [container](#lesson-20).

<a id="topic-cpp-16-16-2-lambda-tach-capture-khoi-tham-so"></a>

### Lambda: tách capture khỏi tham số

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

<a id="topic-cpp-16-16-2-2-vi-du-chay-duoc-aoe-damage"></a>

### Ví dụ chạy được — AOE damage

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

### Dùng lambda làm predicate

Ví dụ minh họa sau giả định `Enemy` có member `health`, `enemies` là `std::vector<Enemy>` và đã include `<algorithm>`. Predicate đọc bằng const reference; comparator phải thể hiện thứ tự chặt phù hợp.

```cpp
std::sort(enemies.begin(), enemies.end(),
    [](const Enemy& a, const Enemy& b) { return a.health > b.health; });
auto alive = std::count_if(enemies.begin(), enemies.end(),
    [](const Enemy& e) { return e.health > 0; });
```

Kiểu kết quả `count_if` là difference type của iterator; dùng `auto` tránh giả định luôn là int. Hợp đồng iterator và xóa phần tử được giải thích ở [thuật toán STL](#lesson-21).

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Viết AOE damage với lambda; thay tham số value thành reference và đối chiếu dữ liệu gốc.

**Tự kiểm tra:** Chỉ ra biến nào được capture, object nào được sửa và nguy cơ dangling khi callback chạy muộn.

---

<a id="lesson-21"></a>

## Iterator và thuật toán STL

**Mục tiêu:** Dùng khoảng begin/end hợp lệ để tìm, sắp xếp, lọc và biến đổi dữ liệu.  
**Cần biết trước:** [Container](#lesson-20), [lambda](#lesson-18).

<a id="topic-cpp-16-16-2-1-iterator-va-hop-dong-cua-thuat-toan"></a>

### Iterator và hợp đồng của thuật toán

`begin()` trỏ tới phần tử đầu, `end()` là vị trí **sau phần tử cuối**, không dereference end. Một khoảng thông dụng là `[begin, end)`, có thể rỗng. Thuật toán trong `<algorithm>` nhận các iterator của một khoảng hợp lệ; không làm vector realloc trong lúc thuật toán đang dùng iterator của nó.

`for_each` và `count_if` gọi callback với **một phần tử** mỗi lần. Comparator của `sort` nhận **hai phần tử**. Vì vậy một lambda hai tham số không thể tùy tiện thay predicate một tham số. Comparator phải diễn đạt thứ tự hợp lệ; dùng `a > b` để giảm dần, không dùng `a >= b` vì hai phần tử bằng nhau không được coi mỗi bên đều đi trước bên còn lại.

`<algorithm>` cung cấp hàng trăm thuật toán sẵn. Kết hợp với lambda → code biểu cảm, ít bug.

```cpp
#include <algorithm>
#include <numeric>

std::vector<int> v = {5, 2, 8, 1, 9, 3};

std::sort(v.begin(), v.end());                          // sắp tăng dần
std::reverse(v.begin(), v.end());                       // đảo ngược
auto it = std::find(v.begin(), v.end(), 8);             // tìm phần tử
int total = std::accumulate(v.begin(), v.end(), 0);     // tính tổng
int maxVal = *std::max_element(v.begin(), v.end());     // phần tử lớn nhất

// Xóa theo điều kiện (erase-remove idiom):
v.erase(std::remove_if(v.begin(), v.end(),
        [](int x) { return x < 3; }), v.end());         // xóa mọi phần tử < 3

// Biến đổi từng phần tử:
std::transform(v.begin(), v.end(), v.begin(),
        [](int x) { return x * 2; });                   // nhân đôi tất cả
```

### Iterator — "con trỏ tổng quát" để duyệt container
```cpp
std::vector<int> v = {1, 2, 3};
std::vector<int>::iterator it = v.begin();   // trỏ phần tử đầu
*it;            // 1 — dereference
++it;           // tiến tới phần tử kế
it == v.end();  // end() = "qua khỏi" phần tử cuối (sentinel), KHÔNG dereference
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Lọc enemy chết bằng erase-remove, đếm enemy sống và kiểm tra danh sách rỗng.

**Tự kiểm tra:** Phân biệt end với phần tử cuối; giải thích remove_if khác erase và yêu cầu comparator hợp lệ.

---

<a id="lesson-23"></a>

## Xử lý lỗi và kết quả có thể thiếu

**Mục tiêu:** Chọn exception, mã lỗi hoặc optional theo hợp đồng API và môi trường.  
**Cần biết trước:** [Hàm](#lesson-5), [RAII](#lesson-9).

C++ có 2 trường phái chính. Game/engine thường **hạn chế exception** vì lý do hiệu năng & xác định.

### Exceptions
```cpp
#include <stdexcept>

float Divide(float a, float b) {
    if (b == 0.0f)
        throw std::runtime_error("Division by zero");   // ném lỗi
    return a / b;
}

try {
    float r = Divide(10, 0);
} catch (const std::exception& e) {                      // bắt lỗi
    std::cerr << "Error: " << e.what();
}
```

### Vì sao game thường tránh exception
- Có thể gây **stall** không xác định (không phù hợp real-time 60fps).
- Tăng kích thước binary, đôi khi bị tắt hẳn (`-fno-exceptions`).
- **Unreal Engine mặc định tắt C++ exceptions.**

### Các lựa chọn thay thế (khuyến nghị cho game)
```cpp
// 1. Error code / bool trả về
bool TryLoadTexture(const std::string& path, Texture& outTex);

// 2. std::optional (C++17) — "có hoặc không có giá trị"
#include <optional>
std::optional<Player> FindPlayer(int id) {
    for (Player& p : players)
        if (p.id == id) return p;              // tìm thấy → trả về giá trị
    return std::nullopt;                       // không tìm thấy → optional "rỗng"
}
if (auto p = FindPlayer(5)) {                  // kiểm tra có giá trị
    p->DoSomething();
}

// 3. assert / check — bắt lỗi LẬP TRÌNH lúc dev (không cho dữ liệu xấu)
#include <cassert>
void SetIndex(int i) {
    assert(i >= 0 && i < size);   // bị vô hiệu hóa nếu NDEBUG được định nghĩa
}
// (Unreal dùng check() / ensure() thay cho assert — xem Phần VI)
```

`assert` phụ thuộc macro `NDEBUG`, không phụ thuộc trực tiếp tên cấu hình Debug/Release. Không đặt thao tác bắt buộc như `++i` vào biểu thức assert vì nó có thể không được đánh giá. Xem [Microsoft: assert](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/assert-macro-assert-wassert?view=msvc-170).

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Thiết kế tìm item có thể không thấy; quyết định trả pointer, optional hay báo lỗi và giải thích.

**Tự kiểm tra:** Kiểm tra đường lỗi mà không tiếp tục đọc giá trị không tồn tại.

---

<a id="lesson-48"></a>

## Operator overloading

**Mục tiêu:** Thiết kế toán tử có ý nghĩa tự nhiên và bảo toàn các bất biến của kiểu.  
**Cần biết trước:** [Class](#lesson-12), [const/reference](#lesson-22).

Cho phép kiểu tự định nghĩa dùng toán tử tự nhiên như kiểu built-in — chính là lý do bạn viết được `FVector A = B + C;`. Dùng cho **kiểu giá trị toán học** (vector, matrix, màu...); đừng overload gây bất ngờ (vd `+` mà lại thay đổi vế trái).

```cpp
struct Vec2 {
    float x = 0, y = 0;

    Vec2  operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }
    Vec2& operator+=(const Vec2& o) { x += o.x; y += o.y; return *this; }   // trả *this để nối chuỗi: a += b += c
    Vec2  operator*(float s) const { return {x * s, y * s}; }

    bool operator==(const Vec2& o) const = default;   // C++20 — compiler tự sinh so sánh từng member

    float& operator[](int i) { return (i == 0) ? x : y; }   // truy cập kiểu mảng: v[0], v[1]
};

Vec2 operator*(float s, const Vec2& v) { return v * s; }    // free function → cho phép viết 2.0f * v

// In ra stream (log/debug):
std::ostream& operator<<(std::ostream& os, const Vec2& v) {
    return os << "(" << v.x << ", " << v.y << ")";
}
```

> **Ghi nhớ:**
> - Toán tử đối xứng (`+`, `*`, `==`) cân nhắc viết dạng **free function** để 2 vế được đối xử như nhau.
> - `operator+` trả **giá trị mới** và là `const`; `operator+=` sửa chính mình và trả `*this`.
> - C++20: `= default` cho `==`; và `auto operator<=>(const Vec2&) const = default;` sinh luôn `<, <=, >, >=`.
> - Trong UE, `FVector`/`FRotator`/`FTransform`... đã overload đầy đủ — cứ dùng; chỉ tự viết cho struct của riêng bạn.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Viết phép cộng và so sánh cho Vector2; kiểm tra hai toán hạng không bị sửa ngoài ý định.

**Tự kiểm tra:** Giải thích khi nào hàm có tên dễ hiểu hơn operator overload.

---

<a id="lesson-2"></a>

## Header, source và build nhiều file

<a id="cpp-06-5"></a>

**Mục tiêu:** Tách declaration/definition và chẩn đoán lỗi theo compile/link trong project nhiều file.  
**Cần biết trước:** [Hàm](#lesson-5); có thể mở bài này ngay khi bắt đầu tách file.

<a id="topic-cpp-06-5-06-5-1-cau-truc-nhieu-file"></a>

### Cấu trúc nhiều file

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

<a id="topic-cpp-06-5-06-5-2-loi-build-pho-bien"></a>

### Lỗi build phổ biến

| Lỗi / Tình huống | Nguyên nhân thường gặp |
|---|---|
| Hàm “identifier not found” / C3861 | Thiếu khai báo, include hoặc scope |
| LNK2019 unresolved external symbol | Đã gọi/khai báo nhưng linker không tìm được phần định nghĩa được build |
| LNK2005 symbol already defined | Định nghĩa trùng, ví dụ định nghĩa hàm thường trong header được include ở nhiều TU |
| Include file not found | Sai tên file, đường dẫn hoặc project include directories |

Định nghĩa function template trong header là trường hợp đặc biệt phổ biến và hợp lệ ([Template](#cpp-13)). Với hàm thông thường định nghĩa trong header, cần hiểu `inline`/ODR; chưa học sâu.


Ví dụ ba file này là chương trình hoàn chỉnh, output `true`. Tiền điều kiện của ApplyDamage là health không âm; damage không dương không gây tác động.

`#pragma once` được MSVC hỗ trợ nhưng không phải chỉ thị bắt buộc của chuẩn C++; include guard là cách portable. Hai cơ chế này đều xử lý include lặp trong một translation unit; hàm thường định nghĩa ở header được nhiều cpp include vẫn cần giải pháp ODR thích hợp (định nghĩa ở một cpp, hoặc inline khi đúng mục đích). `C2084` thường báo đã có thân hàm trong cùng translation unit; đừng định nghĩa cùng hàm hai lần.

### Các thành phần
| Thành phần | Vai trò | Ví dụ |
|---|---|---|
| **Compiler** | Dịch code → object | MSVC (`cl`), GCC (`g++`), Clang (`clang++`) |
| **Linker** | Ghép object → executable | `link`, `ld` |
| **Build system** | Tự động hóa lệnh build | CMake, MSBuild, Make, UnrealBuildTool |
| **Debugger** | Dò bug runtime | Visual Studio Debugger, GDB, LLDB |

### Include Guard
Ngăn 1 header bị include 2 lần trong cùng translation unit (gây lỗi "redefinition"):

```cpp
// Cách 1 — hiện đại, gọn (mọi compiler lớn đều hỗ trợ):
#pragma once

// Cách 2 — truyền thống, chuẩn 100%:
#ifndef PLAYER_H
#define PLAYER_H
// ... nội dung header ...
#endif
```

### CMake — cấu hình project C++ thuần
```cmake
# CMakeLists.txt
cmake_minimum_required(VERSION 3.20)
project(MyGame LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)          # nền ví dụ của giáo trình: C++17
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(MyGame              # tạo executable tên MyGame
    src/main.cpp
    src/Player.cpp
)

target_include_directories(MyGame PRIVATE include)
# target_link_libraries(MyGame PRIVATE SDL2 glm)   # link thư viện ngoài
```

```bash
# Quy trình build với CMake:
cmake -B build          # cấu hình, sinh project vào thư mục build/
cmake --build build     # biên dịch
./build/MyGame          # chạy
```

> **Lưu ý cho UE:** Unreal **không** dùng CMake mà dùng **UnrealBuildTool (UBT)** với file `.Build.cs` (viết bằng C#). Sẽ nói ở Phần VI.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo Main.cpp, Player.h, Player.cpp; lần lượt thử thiếu definition, thiếu source trong build và định nghĩa trùng.

**Tự kiểm tra:** Phân biệt include guard với giải quyết ODR giữa nhiều translation unit.

<a id="topic-cpp-06-5-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự kiểm tra:** Vì sao pragma once không chữa mọi LNK2005? Quên build một cpp có thể gây lỗi gì?
- **Tự viết:** Tự tách bài của mình thành header/source/main, thêm tất cả cpp vào build và giải thích từng include.
- **Đạt khi:** Tự giải thích được từng dòng, chạy đúng ca bình thường và ít nhất một ca biên thuộc phạm vi bài; không chỉ chép lại ví dụ.

---

<a id="lesson-41"></a>

## Preprocessor, forward declaration và dependency

<a id="cpp-15"></a>

**Mục tiêu:** Giảm phụ thuộc đúng chỗ, biết khi nào phải có định nghĩa đầy đủ của kiểu.  
**Cần biết trước:** [Build nhiều file](#lesson-2), [pointer/reference](#lesson-6), [class](#lesson-12).

<a id="topic-cpp-15-15-1-tien-xu-ly-dien-ra-truoc-compiler-c"></a>

### Tiền xử lý diễn ra trước compiler C++

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

<a id="topic-cpp-15-15-2-khai-bao-mot-kieu-ton-tai-khac-voi-biet-cau-truc-kieu"></a>

### Khai báo một kiểu tồn tại khác với biết cấu trúc kiểu

`class Player;` cho compiler biết Player là tên class, nhưng chưa biết member, kích thước hay bố cục. Vì thế khai báo `Player*`, `Player&` hoặc một method nhận `Player&` thường chưa cần định nghĩa đầy đủ. Khi gọi `player.TakeDamage(...)`, chứa `Player` theo giá trị, kế thừa từ Player hay dùng `sizeof(Player)`, phải nhìn thấy định nghĩa phù hợp.

| Nhu cầu trong header | Chỉ `class Player;` có đủ? |
|---|---|
| Khai báo `Player* target;` hoặc hàm nhận `Player&` | Đủ cho các khai báo này |
| Thành viên `Player target;` theo giá trị | Chưa đủ |
| Inline method gọi `target.GetHealth()` | Chưa đủ |
| `class Enemy : public Player` | Chưa đủ |

Pointer/reference ở đây không sở hữu. Forward declaration không kéo dài lifetime object và không xóa nhu cầu kiểm tra null nếu thiết kế dùng pointer có thể rỗng. Với kiểu thư viện, include header chuẩn tương ứng; không tự khai báo lại `std::string` hoặc `std::vector` trong namespace std.

<a id="topic-cpp-15-15-3-vi-du-chay-duoc-enemy-biet-giao-dien-toi-thieu"></a>

### Ví dụ chạy được — Enemy biết giao diện tối thiểu

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

<a id="topic-cpp-15-15-4-tim-loi-theo-dung-giai-doan"></a>

### Tìm lỗi theo đúng giai đoạn

Thiếu include đầy đủ ở Enemy.cpp có thể gây compile error về incomplete type. Có khai báo method nhưng quên build Enemy.cpp có thể gây linker error. Hai header include nhau có thể bị guard chặn khi một định nghĩa chưa được đọc; forward declaration phù hợp cắt dependency, không phải đổi thứ tự include bừa để tạm hết lỗi.

- **Tự kiểm tra:** Với cờ bằng 0, `#if` khác `#ifdef` thế nào? Vì sao Enemy.cpp cần Player.h mà Enemy.h chỉ cần khai báo trước?
- **Tự viết:** Tách combat thành các header/source, mỗi `.cpp` include trực tiếp thứ nó dùng; log có thể bật/tắt tại compile time.
- **Đạt khi:** Build được toàn bộ project, phân biệt compile/link/logic error; damage lớn hơn HP vẫn đưa HP về 0.

### Kiểm soát dependency

Header chỉ include những gì giao diện thực sự cần; cpp include trực tiếp những định nghĩa nó sử dụng. Ví dụ Enemy ở trên là mẫu chuẩn của bài: khai báo trước khi đủ, include đầy đủ trước truy cập member. Không lặp lại cùng cơ chế bằng một class thứ hai; áp dụng nó vào bài tự viết.

### Trong Unreal
```cpp
// Trong .h — forward declare bằng class:
UPROPERTY()
TObjectPtr<class UStaticMeshComponent> Mesh;   // "class" inline = forward declaration nhanh (TObjectPtr vẫn dùng được với forward decl)

// Trong .cpp — include đầy đủ:
#include "Components/StaticMeshComponent.h"
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tách Enemy.h và Player.h bằng forward declaration; thêm include trực tiếp tại cpp cần truy cập member.

**Tự kiểm tra:** Chỉ ra chỗ pointer/reference chỉ cần khai báo và chỗ member by-value cần complete type.

---

<a id="lesson-42"></a>

## Quy ước tên và phong cách code

**Mục tiêu:** Dùng tên và cấu trúc hàm để thể hiện trách nhiệm, giảm việc đoán ý định.  
**Cần biết trước:** [Hàm](#lesson-5), [class](#lesson-12).

Nhất quán quan trọng hơn "đúng/sai". Dưới đây là quy ước phổ biến (UE-style):

```cpp
// Class:        PascalCase, có prefix trong UE (U/A/F/E/I)
class UInventoryComponent;

// Hàm:          PascalCase (UE) hoặc camelCase (nhiều codebase khác)
void EquipWeapon();

// Biến local:   camelCase
int enemyCount = 0;

// Biến member:  thường giống local; UE hay dùng PascalCase cho member
float Health;

// Hằng số:      ALL_CAPS hoặc kPascalCase
const int MAX_PLAYERS = 4;
constexpr float kGravity = 9.81f;

// Boolean:      tiền tố b (UE) hoặc is/has/can
bool bIsAlive;        // UE-style
bool isReady;         // phổ biến khác
```

### Nguyên tắc clean code
- Tên **diễn đạt ý định**, không cần comment: `CalculateFallDamage()` > `Calc()`.
- Hàm ngắn, làm **một việc** (Single Responsibility).
- Comment giải thích **vì sao** (why), không phải **cái gì** (what) — code đã nói "what".
- Tránh "magic number": dùng hằng số đặt tên.

```cpp
// ❌ Magic number, khó hiểu
if (state == 3) { /* ... */ }

// ✅ Rõ ràng
if (state == EAIState::Attacking) { /* ... */ }
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Refactor một hàm combat dài thành các bước có tên; giữ nguyên hành vi và kiểm tra lại.

**Tự kiểm tra:** Giải thích tên CountAlive khác CountCreated và tránh thay tên mà vẫn giữ ý nghĩa sai.

---

<a id="lesson-43"></a>

## Debugging bằng bằng chứng

<a id="cpp-17"></a>
<a id="cpp-17-1"></a>

**Mục tiêu:** Tìm nguyên nhân bằng breakpoint, biến, Call Stack và ca tái hiện nhỏ.  
**Cần biết trước:** [Luồng điều khiển](#lesson-4), [reference](#lesson-6), [class](#lesson-12).

<a id="topic-cpp-17-17-1-build-duoc-chua-dong-nghia-logic-dung"></a>

### Build được chưa đồng nghĩa logic đúng

Compiler kiểm tra cú pháp/kiểu theo quy tắc ngôn ngữ; linker nối định nghĩa. Một chương trình vẫn có thể build thành công nhưng sửa bản sao thay vì object gốc, đếm sai điều kiện hoặc in log sai. Debugger cho phép dừng trước câu lệnh, quan sát dữ liệu, thực thi tiếp từng bước rồi đối chiếu với kỳ vọng.

Chọn đúng startup project, cấu hình Debug và executable vừa build. Nếu breakpoint chưa gắn được hoặc giá trị không hiện như mong đợi, kiểm tra source/binary/symbol phù hợp; đừng suy rằng cứ nhấn F5 là đang chạy đúng bản code mở trong editor. Code tối ưu có thể làm biến khó quan sát hoặc thay đổi cách ánh xạ statement về dòng nguồn.

<a id="topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te"></a>

### Phím tắt theo thao tác thực tế

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

<a id="topic-cpp-17-17-3-chon-cua-so-theo-cau-hoi"></a>

### Chọn cửa sổ theo câu hỏi

| Công cụ | Câu hỏi trả lời tốt |
|---|---|
| Locals | Biến cục bộ trong frame đang chọn đang có giá trị nào? |
| Autos | Biến/biểu thức gần vị trí thực thi hiện tại là gì? |
| Watch | Giá trị của biểu thức cụ thể như `health - damage` thay đổi thế nào? |
| Call Stack | Chuỗi lời gọi hàm nào **đang hoạt động** dẫn tới chỗ dừng? |
| DataTip | Giá trị biến đang trỏ chuột vào lúc dừng là gì? |

Call Stack không phải nhật ký toàn bộ lời gọi từng xảy ra. Chọn frame khác để quan sát context của caller không thực thi thêm code. Mũi tên vàng thường chỉ vị trí thực thi hiện tại/câu lệnh sắp chạy; vị trí đang xem của một frame khác không có nghĩa chương trình vừa nhảy về đó.

Ưu tiên Watch là biểu thức quan sát không thay state, chẳng hạn `health`, `damage`, `health - damage`. Không gọi bừa method có tác dụng phụ chỉ để xem “nó trả gì”, vì việc đánh giá có thể làm thay đổi trạng thái cần điều tra.

<a id="topic-cpp-17-17-4-quy-trinh-tim-loi-co-bang-chung"></a>

### Quy trình tìm lỗi có bằng chứng

1. Ghi input cụ thể, output/state mong đợi và kết quả thực tế.
2. Đặt breakpoint **trước** đoạn nghi ngờ; xác nhận đang ở đúng object/frame.
3. Dự đoán giá trị sau một statement rồi dùng Step Over/Into để kiểm tra.
4. Tìm statement **đầu tiên** làm dữ liệu lệch, không chỉ dòng cuối in ra sai.
5. Sửa nguyên nhân; chạy lại kịch bản thường và ca biên đã làm lộ bug.

Trong lịch sử học, có lần dừng ở prologue khiến một DataTip của tham số trông bất thường; sau khi tới statement có thông tin debug phù hợp, giá trị quan sát được là 30. Đây là kinh nghiệm cụ thể, không phải quy luật “mọi DataTip lạ đều vô hại”. Luôn kiểm tra frame, source/symbol và thời điểm đang quan sát.

<a id="topic-cpp-17-1-17-1-1-ba-trieu-chung-ba-nguyen-nhan"></a>

### Ba triệu chứng, ba nguyên nhân

| Triệu chứng | Cần quan sát | Nguyên nhân thường gặp | Hướng sửa |
|---|---|---|---|
| HP trong vector không đổi dù biến vòng lặp giảm | Biến `enemy` và phần tử vector sau mỗi lượt | `auto enemy` tạo bản sao | Dùng `auto& enemy` khi mục đích là sửa phần tử gốc |
| Enemy 20 HP nhận 30 damage thành -10 | HP trước/sau method xử lý damage | Trừ không giữ invariant | Bỏ qua amount không dương, kẹp về 0 khi damage đạt/vượt HP |
| Enemy 0 HP vẫn được tính sống | Biểu thức predicate và số đếm | Điều kiện `health >= 0` | Quy tắc bài là `health > 0` |

Không gộp mọi lỗi thành “sai pointer” hoặc thay nhiều dòng cùng lúc. Sửa lỗi bản sao trước để nhìn thấy tác động thật lên vector, sau đó kiểm tra hợp đồng HP, cuối cùng xác minh predicate.

<a id="topic-cpp-17-1-17-1-2-mau-da-sua-de-doi-chieu-sau-khi-tu-thu"></a>

### Mẫu đã sửa để đối chiếu sau khi tự thử

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

<a id="topic-cpp-17-1-17-1-3-tu-chung-minh-ban-sua"></a>

### Tự chứng minh bản sửa

Trong một bản luyện riêng, đổi từng lỗi một để tái hiện, dự đoán triệu chứng trước khi chạy rồi khôi phục bản đúng. Đặt breakpoint ở `ApplyDamage`, quan sát `damage`, `enemy.health`, `actual`; sau Step Out, kiểm tra phần tử vector còn giữ giá trị đã sửa.

| Ca kiểm tra | Kết quả cần có |
|---|---|
| HP 20, damage 30 | HP 0, actual 20 |
| HP 20, damage 20 | HP 0, actual 20 |
| HP 20, damage 0 hoặc âm | HP giữ nguyên, actual 0 |
| HP 0, damage dương | HP 0, không đếm sống |
| Danh sách rỗng | Không truy cập phần tử, số sống và total bằng 0 |

**Đạt khi:** Giải thích được vì sao sửa reference, vì sao `>=` phù hợp trong clamp nhưng `>` phù hợp để xác định sống. Chạy đúng một input chưa chứng minh mọi dữ liệu đều hợp lệ; hãy nêu rõ constructor/caller nào chịu trách nhiệm tạo state ban đầu.

### Assertions trong Unreal
```cpp
check(Weapon != nullptr);          // crash NGAY nếu sai (lỗi nghiêm trọng, không thể tiếp tục)
ensure(Health >= 0);               // log + breakpoint nếu sai, nhưng VẪN chạy tiếp (cảnh báo)
verify(InitSystem());              // như check nhưng vẫn chạy biểu thức ở Release build

// Standard C++ tương đương:
assert(weapon != nullptr);         // hoạt động khi NDEBUG chưa được định nghĩa
```

### Sanitizers (Standard C++) — phát hiện lỗi bộ nhớ
```bash
g++ -fsanitize=address -g main.cpp    # AddressSanitizer: bắt use-after-free, leak, overflow
g++ -fsanitize=undefined -g main.cpp  # UBSan: bắt undefined behavior
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tái hiện lỗi HP không đổi, HP âm hoặc đếm sống sai; ghi giá trị trước/sau dòng gây lỗi.

**Tự kiểm tra:** Dự đoán trước khi Step Over/Into, xác định bản sao hay object gốc và chứng minh bản sửa bằng ca biên.

<a id="topic-cpp-17-tu-kiem-tra-va-thuc-hanh"></a>

- **Tự giải thích:** F10 có bỏ chạy hàm không? Chọn frame khác có làm chương trình thực thi không? Vì sao cần state trước và sau, không chỉ console cuối?
- **Tự làm:** Đặt breakpoint trước ApplyDamage, dự đoán HP sau phép trừ, dùng F11 vào hàm và Shift+F11 về caller; quan sát đúng biến ở cả hai frame.
- **Đạt khi:** Chỉ ra nguyên nhân bằng biến/statement cụ thể và lặp lại được cách kiểm tra. Sang [Thực hành debugging](#cpp-17-1) để dùng công cụ tìm ba lỗi logic.

---

<a id="lesson-44"></a>

## Undefined behavior và các bẫy thường gặp

**Mục tiêu:** Nhận diện chương trình không có kết quả được chuẩn bảo đảm và sửa nguyên nhân.  
**Cần biết trước:** [Lifetime](#lesson-7), [container](#lesson-20), [đa hình](#lesson-14).

**Undefined Behavior (UB)** = code mà chuẩn C++ không định nghĩa kết quả. Có thể chạy "đúng" trên máy bạn nhưng crash chỗ khác. **UB là nguồn bug nguy hiểm nhất.**

```cpp
// 1. Dùng biến chưa khởi tạo
int x;
std::cout << x;                    // 💥 UB — giá trị rác

// 2. Truy cập ngoài mảng (out-of-bounds)
int arr[5];
arr[10] = 1;                       // 💥 UB — ghi đè bộ nhớ lạ

// 3. Dereference con trỏ null/dangling
Player* p = nullptr;
p->health;                        // 💥 UB

// 4. Dùng object sau khi nó bị hủy (use-after-free / dangling reference)
int& GetRef() { int local = 5; return local; }   // 💥 trả tham chiếu tới biến đã chết

// 5. Integer overflow trên kiểu signed (INT_MAX cần #include <climits>)
int max = INT_MAX;
max + 1;                          // 💥 UB (signed overflow)

// 6. Quên break trong switch → fallthrough ngoài ý muốn
// 7. So sánh float bằng == (sai số dấu phẩy động)
if (0.1f + 0.2f == 0.3f) { }      // ❌ thường FALSE! Dùng so sánh có epsilon:
if (std::abs(a - b) < 0.0001f) { }// ✅
```

### Bẫy đặc thù Unreal
```cpp
// Quên UPROPERTY → UObject bị GC giữa chừng (mục 32)
// Quên Super:: trong override lifecycle → mất hành vi base
// Dùng con trỏ Actor mà không kiểm tra IsValid → crash khi actor đã destroy
if (IsValid(TargetActor)) { TargetActor->DoStuff(); }   // ✅ luôn check
// Sửa TArray trong khi đang range-for trên nó → invalid iterator → crash
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Review các đoạn ngoài biên, dùng sau hủy, biến chưa khởi tạo; mô tả hợp đồng bị vi phạm.

**Tự kiểm tra:** Không dùng việc chạy không crash làm chứng cứ an toàn.

---

<a id="lesson-45"></a>

## Tự review và Final Assessment

<a id="cpp-17-2"></a>

**Mục tiêu:** Kiểm tra một chương trình combat theo hợp đồng, trách nhiệm, ownership và bằng chứng chạy.  
**Cần biết trước:** [Class](#lesson-12), [smart pointer](#lesson-10), [đa hình](#lesson-14), [lambda](#lesson-18), [debugging](#lesson-43).

<a id="topic-cpp-17-2-17-2-1-nguon-va-gioi-han-cua-ban-tham-khao"></a>

### Nguồn và giới hạn của bản tham khảo

Completion Pack ngày 27/10/2026 gồm handbook, handoff và thư mục `ArenaCombat_Final_Reviewed`. README của pack nói rõ năm file code là **bản đã được trợ lý chỉnh sửa sau bài nộp**, không phải bản gốc người học tự nộp. Handoff ghi bản tự nộp được chấm **9.5/10**; điểm này là lịch sử theo nguồn, không phải điểm chấm mới cho năm file hiện tại.

Mục này giải thích quy tắc và cách đọc bản tham khảo. Không tự đánh dấu hoàn thành hoặc cấp XP cho người mở trang. Những class Player/Enemy ở đây thuộc project Final, không ghép với Player của [Class](#cpp-11) hoặc Arena ba file trước đó.

[Tải mã nguồn Arena Combat đã chỉnh sửa — 5 file C++/header](https://reix-labs.github.io/Cpp/downloads/ArenaCombat_Final_Reviewed.zip). Build Main.cpp, Player.cpp và Enemy.cpp cùng nhau trong project C++17 riêng; giữ hai header trong đường tìm include. ZIP là bản tham khảo đúng nguồn, còn phần giải thích dưới đây nêu rõ tiền điều kiện mà code hiện có yêu cầu.

<a id="topic-cpp-17-2-17-2-2-luat-choi-truoc-khi-viet-code"></a>

### Luật chơi trước khi viết code

| Đối tượng | HP ban đầu / MaxHP | Damage | Tài nguyên |
|---|---|---|---|
| Player | 120 / 120 | 25 | 2 potion, mỗi potion hồi 30 HP |
| Slime | 40 / 40 | 10 | Không có potion |
| Goblin | 55 / 55 | 15 | Không có potion |
| Boss | 80 / 80 | 20 | Không có potion |

Mỗi lượt Player có **một action**: nếu HP `<= 40` và còn potion, dùng đúng một potion **thay cho** tấn công; nếu không, tấn công Enemy hiện tại. Enemy chỉ phản công khi còn sống sau action đó. Player chết thì dừng. Thắng khi Player còn sống và đã hạ hết Enemy.

Luồng một lượt: **kiểm tra Player sống → chọn potion hoặc tấn công → cập nhật state → báo đúng action → kiểm tra Enemy chết → nếu còn sống mới phản công → kiểm tra lượt kế**. Thứ tự kiểm tra là một phần của gameplay, không chỉ là lựa chọn trình bày code.

<a id="topic-cpp-17-2-17-2-3-trach-nhiem-va-ownership-cua-tung-file"></a>

### Trách nhiệm và ownership của từng file

| File | Trách nhiệm |
|---|---|
| `Player.h` / `Player.cpp` | State Player, xử lý damage, lựa chọn action và getter |
| `Enemy.h` / `Enemy.cpp` | State Enemy, nhận/gây damage, Boss và virtual destructor |
| `Main.cpp` | Tạo cấu hình, sở hữu danh sách enemy, điều khiển lượt và báo kết quả |

`std::vector<std::unique_ptr<Enemy>>` sở hữu từng Enemy/Boss. Lấy `Enemy& enemy = *enemyPtr` để dùng object trong lượt; reference đó không trở thành owner. `virtual ~Enemy()` cho phép hủy Boss qua base pointer. Chuỗi tên `"Boss"` không tạo dynamic type Boss; bản đã chỉnh dùng `std::make_unique<Boss>(...)`.

Boss hiện không có quy tắc tấn công riêng nên không cần thêm override chỉ để trưng bày cú pháp. Nếu nhu cầu chỉ khác tên/thông số, dữ liệu cấu hình cũng có thể đủ; ví dụ kế thừa ở đây giúp đọc bài đã nộp, không chứng minh mọi game đều phải có class Boss.

<a id="topic-cpp-17-2-17-2-4-doc-hop-dong-that-cua-code"></a>

### Đọc hợp đồng thật của code

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

<a id="topic-cpp-17-2-17-2-5-ket-qua-va-cach-tu-doi-chieu"></a>

### Kết quả và cách tự đối chiếu

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

Bản tổng kết tra cứu nhanh khi viết/review code:

### Bộ nhớ & tài nguyên
- [ ] Ưu tiên giá trị/owner **RAII** có lifetime rõ ràng hơn `new`/`delete` trần.
- [ ] Áp dụng **RAII** cho mọi tài nguyên (file, mutex, memory...).
- [ ] `unique_ptr` mặc định; `shared_ptr` khi cần chia sẻ; `weak_ptr` phá vòng tham chiếu.
- [ ] (UE) Strong reference lâu dài tới UObject được GC theo dõi phù hợp, thường là UPROPERTY TObjectPtr; observer dùng weak reference và kiểm tra validity. Không new/delete UObject.
- [ ] (UE) Callback dynamic delegate dùng AddDynamic phải là UFUNCTION với chữ ký khớp; timer có overload bind native method riêng. Xem [delegate](#lesson-37) và [timer](#lesson-53).

### An toàn & đúng đắn
- [ ] Khởi tạo **mọi biến** ngay khi khai báo.
- [ ] Kiểm tra con trỏ **trước khi dereference** (`if (p)` / `IsValid(p)`).
- [ ] `const correctness`: đánh dấu `const` mọi thứ không đổi.
- [ ] Base cho phép hủy đa hình → destructor public **virtual**; nếu cấm, thiết kế access phù hợp.
- [ ] Dùng `override` cho mọi hàm override; `enum class` thay enum cũ.
- [ ] So sánh float bằng **epsilon**, không bằng `==`.

### Hiệu năng
- [ ] Truyền object lớn bằng **`const&`**, không by value.
- [ ] Cân nhắc `reserve()` khi biết lượng phần tử; chọn `emplace_back`/`push_back` theo đối số và đo khi tối ưu.
- [ ] Ưu tiên container **liền kề** (`vector`/`TArray`) cho hiệu năng (cache).
- [ ] **Đo bằng profiler** trước khi tối ưu — không đoán.
- [ ] (UE) Không đụng UObject/Actor ngoài **Game Thread** ([Multithreading và đồng bộ](#lesson-50)).

### Tổ chức & phong cách
- [ ] Tên rõ nghĩa; hàm ngắn, làm một việc.
- [ ] Forward declaration thay include khi đủ; tránh circular include.
- [ ] Nhất quán naming convention toàn dự án.
- [ ] Comment giải thích **why**, không phải **what**.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tự làm Arena Combat theo luật; chỉ mở bản đã chỉnh để đối chiếu sau khi hoàn thành.

**Tự kiểm tra:** Chứng minh HP/maxHP, damage, potion, casualty và điều kiện kết thúc; phân biệt bài tự nộp với code tham khảo đã chỉnh.

<a id="topic-cpp-17-2-tu-on-va-tieu-chi-doc-hieu"></a>

- Giải thích một lượt potion và một lượt tấn công bằng state trước/sau, không nhìn lời giải khi kể lại.
- Chỉ ra nơi ownership nằm, nơi reference mượn được dùng, và điều kiện cần trước khi dereference.
- Dùng debugger truy vết một trường hợp HP đạt ngưỡng 40; dự đoán Enemy có phản công hay không.
- Phân biệt lỗi logic, lỗi log, cải thiện style và mở rộng tùy chọn. Không thêm override/raw pointer/lambda chỉ vì muốn đưa nhiều cú pháp vào bài.

Sau bài này, tiếp tục [kiểm thử](#lesson-55), các chủ đề lập trình game và [chặng Unreal](#lesson-30) trong cùng chương trình. [Lịch sử học](#study-history) phân biệt phần có tài liệu với phần người học đã thực hành và được chấm.

---

<a id="lesson-55"></a>

## Unit testing và automation

**Mục tiêu:** Chuyển hợp đồng thành các ca kiểm tra lặp lại được và phân biệt assertion với framework kiểm thử.  
**Cần biết trước:** [Hàm](#lesson-5), [debugging](#lesson-43), [tự review](#lesson-45).

Code có test = dám refactor. Nguyên tắc thiết kế để test được: **tách logic thuần (tính damage, kiểm kho đồ...) ra khỏi engine** — chính là composition ([Composition và thiết kế trách nhiệm](#lesson-16)) và data-driven ([Data-driven design](#lesson-39)) đang giúp bạn.

### C++ thuần — GoogleTest (hoặc Catch2)
```cpp
#include <gtest/gtest.h>
#include "Math.h"

TEST(MathTest, LerpMidpoint) {
    EXPECT_FLOAT_EQ(Lerp(0.f, 10.f, 0.5f), 5.f);
}

TEST(HealthTest, DamageClampsAtZero) {
    Health h{10};
    h.TakeDamage(999);
    EXPECT_EQ(h.Get(), 0);
}
// CMake: FetchContent googletest + gtest_discover_tests → chạy toàn bộ bằng `ctest`
```

### Unreal — Automation Test (chạy: Tools → Session Frontend → Automation)
```cpp
#include "Misc/AutomationTest.h"

IMPLEMENT_SIMPLE_AUTOMATION_TEST(FHealthComponentTest,
    "TrainingGame.Components.Health",                       // đường dẫn hiện trong UI Automation
    EAutomationTestFlags::EditorContext | EAutomationTestFlags::ProductFilter)

bool FHealthComponentTest::RunTest(const FString& Parameters) {
    UHealthComponent* HC = NewObject<UHealthComponent>();
    HC->TakeDamage(30.f);
    TestEqual(TEXT("Máu giảm đúng"), HC->GetHealth(), 70.f);
    TestTrue(TEXT("Vẫn còn sống"), !HC->IsDead());
    return true;
}
// Chạy trong CI (command line):
// UnrealEditor-Cmd.exe <Project.uproject> -ExecCmds="Automation RunTests TrainingGame" -unattended -nullrhi
```

> Bắt đầu nhỏ: test các hàm **thuần logic** trước (không cần world). Mục tiêu của team không phải 100% coverage, mà là *mọi bug từng gây đau đều có một test chặn tái phát*.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Viết test cho damage/heal: thường, zero, biên và đầu vào ngoài hợp đồng đã chọn.

**Tự kiểm tra:** Một test phải có kết quả mong đợi độc lập và thất bại khi cố ý đưa bug vào.

---

<a id="lesson-50"></a>

## Multithreading và đồng bộ

**Mục tiêu:** Nhận diện data race và lựa chọn mutex/atomic theo dữ liệu chia sẻ.  
**Cần biết trước:** [Lifetime](#lesson-7), [RAII](#lesson-9), [lambda](#lesson-18).

CPU hiện đại nhiều core; engine đã tự chia việc (render, physics, audio...). Ở tầng gameplay, cần hiểu tối thiểu để **không tự bắn vào chân** và biết đẩy việc nặng ra khỏi frame.

### Data race — loại bug khó chịu nhất
```cpp
#include <thread>
int gold = 0;
void Loot() { for (int i = 0; i < 100000; ++i) ++gold; }   // ++ KHÔNG nguyên tử (đọc–cộng–ghi)

std::thread t1(Loot), t2(Loot);
t1.join(); t2.join();
// gold hiếm khi bằng 200000 — hai thread giẫm lên nhau → DATA RACE (undefined behavior!)
```

### Hai công cụ tối thiểu: mutex & atomic
```cpp
#include <mutex>
#include <atomic>

std::mutex m;
void LootSafe() {
    std::lock_guard<std::mutex> lock(m);   // RAII (mục 9): khóa khi vào scope, TỰ mở khóa khi ra
    ++gold;
}

std::atomic<int> score{0};                 // với biến đơn giản: atomic nhẹ hơn mutex
score.fetch_add(10);
```
> **Nguyên tắc vàng:** dữ liệu chia sẻ giữa các thread phải được bảo vệ (mutex/atomic) — hoặc tốt hơn: **đừng chia sẻ** (mỗi thread dữ liệu riêng, gộp kết quả sau). Ưu tiên **task system** có sẵn thay vì tự tạo `std::thread`.

### Mô hình thread của Unreal & quy tắc sống còn
| Thread | Việc |
|---|---|
| **Game Thread** | Toàn bộ gameplay: UObject/Actor, Blueprint, Tick |
| Render Thread / RHI Thread | Dựng hình, nói chuyện với GPU |
| Worker threads (Task Graph / UE::Tasks) | Việc nền: load asset, tính toán song song |

> 🚨 **Quy tắc số 1:** chỉ được đụng vào `UObject`/`AActor` (spawn, destroy, set property, gọi hầu hết API engine) trên **Game Thread**. Nghi ngờ thì kiểm tra bằng `IsInGameThread()`.

```cpp
#include "Async/Async.h"

// Đẩy việc nặng (KHÔNG đụng UObject) sang thread pool, xong quay về Game Thread cập nhật:
Async(EAsyncExecution::ThreadPool, [Data = MakeHeavyInput()]()
{
    FResult R = CrunchNumbers(Data);            // chạy nền — tuyệt đối không đụng UObject ở đây

    AsyncTask(ENamedThreads::GameThread, [R]()
    {
        // đã về Game Thread — an toàn để cập nhật actor/UI
        GEngine->AddOnScreenDebugMessage(-1, 3.f, FColor::Green, TEXT("Tính xong!"));
    });
});
```

- Mutex phía UE: `FCriticalSection` + `FScopeLock` (tương đương `std::mutex` + `lock_guard`).
- Thread chạy dài (network listener, worker chuyên dụng): kế thừa `FRunnable`.
- UE5 có hệ **UE::Tasks** hiện đại hơn Task Graph cũ — cùng tư tưởng: *giao task, đừng tự quản thread*.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Vẽ dữ liệu nào được chia sẻ giữa worker và game thread; xác định thao tác phải đồng bộ.

**Tự kiểm tra:** Giải thích atomic không tự bảo vệ mọi bất biến nhiều biến; với Unreal kiểm tra thread được phép dùng API.

---

<a id="lesson-24"></a>

## C++ trong phát triển game

**Mục tiêu:** Liên hệ kiểm soát tài nguyên, độ trễ và công cụ với yêu cầu của game.  
**Cần biết trước:** Các chặng nền tảng, ownership và C++ hiện đại.

1. **Hiệu năng:** Mục tiêu 60 fps cho khoảng 16,7 ms mỗi frame. Standard C++ không bắt buộc tracing GC; engine có thể bổ sung GC riêng, như UObject trong Unreal. Chi phí frame vẫn cần profiling, không được kết luận chỉ từ ngôn ngữ.
2. **Kiểm soát bộ nhớ (Memory control):** Tự quản layout, alignment, pooling → tránh giật do GC, tối ưu cache.
3. **Truy cập phần cứng & API thấp:** Trực tiếp với GPU API (DirectX, Vulkan), SIMD, console SDK.
4. **Hệ sinh thái engine:** Unreal, CryEngine, hầu hết engine AAA viết bằng C++; nhiều engine khác (Unity, Godot) có lõi C++.
5. **Tính xác định (Determinism):** Quan trọng cho physics, netcode, replay.

> **Đánh đổi:** C++ khó và nguy hiểm hơn C#/Python. Bạn đổi sự an toàn lấy hiệu năng & kiểm soát. Vì thế kỷ luật (RAII, smart pointer, const correctness) là bắt buộc.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Chọn một hệ thống gameplay và nêu phần cần C++, phần có thể dùng công cụ/script.

**Tự kiểm tra:** Lập luận theo yêu cầu cụ thể thay vì cho rằng ngôn ngữ tự bảo đảm hiệu năng.

---

<a id="lesson-25"></a>

## Game loop và thời gian

**Mục tiêu:** Tách update/render và dùng delta time hoặc bước cố định theo yêu cầu mô phỏng.  
**Cần biết trước:** [Luồng điều khiển](#lesson-4), [hàm](#lesson-5).

Trái tim của mọi game: vòng lặp chạy liên tục, mỗi vòng = 1 frame.

```cpp
// Mã giả — game loop cơ bản
void RunGame() {
    Initialize();                       // load asset, khởi tạo hệ thống

    while (isRunning) {
        float deltaTime = ComputeDeltaTime();   // thời gian trôi từ frame trước (giây)

        ProcessInput();                 // đọc bàn phím/chuột/gamepad
        Update(deltaTime);              // cập nhật logic game (AI, physics, gameplay)
        Render();                       // vẽ lên màn hình

        // (tùy chọn) giới hạn FPS / VSync
    }

    Shutdown();                         // giải phóng tài nguyên
}
```

### Delta Time — vì sao quan trọng
Để chuyển động **độc lập với FPS** (máy mạnh/yếu vẫn chạy như nhau):

```cpp
// ❌ SAI — tốc độ phụ thuộc FPS (máy nhanh thì nhân vật chạy nhanh hơn)
position.x += 5;

// ✅ ĐÚNG — nhân với deltaTime → 5 đơn vị MỖI GIÂY, bất kể FPS
position.x += speed * deltaTime;        // speed = đơn vị/giây
```

### Fixed Timestep (cho physics ổn định)
```cpp
// Mã giả — tách physics (bước cố định) khỏi render (bước biến thiên)
const float FIXED_DT = 1.0f / 60.0f;    // physics chạy đúng 60 lần/giây
float accumulator = 0.0f;

while (isRunning) {
    float frameTime = ComputeDeltaTime();
    accumulator += frameTime;

    while (accumulator >= FIXED_DT) {   // chạy physics theo bước cố định
        UpdatePhysics(FIXED_DT);
        accumulator -= FIXED_DT;
    }
    Render();                           // render chạy thoải mái theo FPS thực
}
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Mô phỏng chuyển động cùng vận tốc ở hai nhịp cập nhật; so quãng đường sau cùng thời gian.

**Tự kiểm tra:** Nêu tác động của frame dài và khác biệt fixed timestep với tốc độ render.

---

<a id="lesson-26"></a>

## Data-oriented design và ECS

**Mục tiêu:** Phân biệt tổ chức theo object với tổ chức theo dữ liệu/truy cập của hệ thống.  
**Cần biết trước:** [Composition](#lesson-16), [container](#lesson-20), [game loop](#lesson-25).

### Object-Oriented vs Data-Oriented
OOP gom **dữ liệu + hành vi** vào object. Data-Oriented Design (DOD) tách dữ liệu ra, tổ chức để **CPU cache** xử lý hiệu quả nhất.

```cpp
// ❌ OOP "Array of Structs" (AoS) — mỗi object có đủ thứ, rải rác bộ nhớ
struct Particle {
    Vector3 position;
    Vector3 velocity;
    Color   color;
    float   lifetime;
    // ... 20 field khác
};
std::vector<Particle> particles;   // khi chỉ update position, vẫn kéo cả color, lifetime vào cache → lãng phí

// ✅ DOD "Struct of Arrays" (SoA) — gom cùng loại dữ liệu liền nhau
struct ParticleSystem {
    std::vector<Vector3> positions;    // tất cả position liền kề
    std::vector<Vector3> velocities;   // tất cả velocity liền kề
    std::vector<float>   lifetimes;
};
// Update position chỉ đụng tới mảng positions & velocities → cache cực hiệu quả
for (size_t i = 0; i < positions.size(); ++i)
    positions[i] += velocities[i] * dt;
```

### ECS — Entity Component System
Kiến trúc hiện đại cho game quy mô lớn (Unity DOTS, nhiều engine custom). Ba khái niệm:

- **Entity:** chỉ là 1 ID (con số), không chứa dữ liệu.
- **Component:** dữ liệu thuần (PositionComponent, HealthComponent...), không hành vi.
- **System:** logic xử lý mọi entity có component phù hợp.

```cpp
// Mã giả — minh họa tư tưởng ECS
using Entity = uint32_t;

struct Position { float x, y; };
struct Velocity { float dx, dy; };

// System chỉ xử lý các entity CÓ CẢ Position và Velocity:
void MovementSystem(ComponentArray<Position>& pos,
                    ComponentArray<Velocity>& vel, float dt) {
    for (Entity e : EntitiesWith<Position, Velocity>()) {
        pos[e].x += vel[e].dx * dt;
        pos[e].y += vel[e].dy * dt;
    }
}
```

> ECS đem lại hiệu năng cao (cache-friendly) và linh hoạt (lắp ghép component tự do), nhưng phức tạp hơn OOP truyền thống. Cân nhắc theo quy mô dự án.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Mô hình hóa Position và Velocity của nhiều entity; xác định hệ thống cập nhật cả hai.

**Tự kiểm tra:** Giải thích trade-off về truy cập dữ liệu, định danh entity và độ phức tạp quản lý.

---

<a id="lesson-27"></a>

## Đo hiệu năng, cache và tối ưu

**Mục tiêu:** Tìm bottleneck bằng phép đo trước khi đổi cấu trúc hay thuật toán.  
**Cần biết trước:** [Container](#lesson-20), [game loop](#lesson-25), [DOD](#lesson-26).

### CPU Cache — yếu tố hiệu năng số 1 hiện nay
RAM rất chậm so với CPU. CPU có cache (L1/L2/L3) nhanh hơn RAM hàng trăm lần. **Dữ liệu liền kề + truy cập tuần tự** → cache hit → nhanh. Dữ liệu rải rác / truy cập ngẫu nhiên → cache miss → chậm.

```cpp
// ✅ NHANH — duyệt vector tuần tự, dữ liệu liền kề (cache-friendly)
for (auto& e : enemies) e.Update();

// ❌ CHẬM — truy cập ngẫu nhiên qua con trỏ rải rác bộ nhớ (cache-unfriendly)
for (Enemy* e : enemyPointers) e->Update();   // mỗi e ở 1 nơi khác nhau trên heap
```

> **Quy tắc ngón cái:** prefer `std::vector` of objects (liền kề) hơn `std::vector` of pointers (rời rạc) khi hiệu năng quan trọng.

### Nguyên tắc tối ưu
1. **Đo trước, tối ưu sau (Measure first):** Đừng đoán. Dùng profiler (Unreal Insights, Tracy, Visual Studio Profiler, perf).
2. **80/20:** 80% thời gian thường nằm ở 20% code (hotspot). Tối ưu đúng chỗ đó.
3. **Tránh "premature optimization":** Viết code rõ ràng trước; chỉ tối ưu khi profiler chỉ ra nút thắt.

### Một số kỹ thuật phổ biến
```cpp
// Reserve trước để tránh vector tái cấp phát nhiều lần:
std::vector<Enemy> enemies;
enemies.reserve(1000);              // capacity >= 1000, không đổi size
// Các lần thêm không realloc cho tới khi size mới vượt capacity hiện tại.

// emplace dựng phần tử từ đối số; không phải lúc nào cũng nhanh hơn push_back:
enemies.emplace_back(args...);

// Truyền const& thay vì by value cho object lớn (mục 5).
// Object Pool — tái sử dụng object thay vì new/delete liên tục (mục 29).
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Đo một workload lặp đủ lớn; ghi cấu hình, baseline và kết quả sau đúng một thay đổi.

**Tự kiểm tra:** Phân biệt độ phức tạp, locality và kết quả profiling thực tế.

---

<a id="lesson-28"></a>

## Toán học cho game

**Mục tiêu:** Diễn giải vector, dot/cross, phép biến đổi và quaternion theo không gian gameplay.  
**Cần biết trước:** [Kiểu số](#lesson-3), [hàm](#lesson-5).

Toán học là xương sống của đồ họa & physics. Thường dùng thư viện sẵn (**GLM** cho C++ thuần, hệ math tích hợp của Unreal: `FVector`, `FRotator`, `FQuat`...).

### Vector — vị trí, hướng, vận tốc
```cpp
struct Vector3 {
    float x, y, z;

    Vector3 operator+(const Vector3& o) const { return {x+o.x, y+o.y, z+o.z}; }
    Vector3 operator-(const Vector3& o) const { return {x-o.x, y-o.y, z-o.z}; }
    Vector3 operator*(float s)          const { return {x*s, y*s, z*s}; }

    float Length() const { return std::sqrt(x*x + y*y + z*z); }
    Vector3 Normalized() const { float l = Length(); return {x/l, y/l, z/l}; }
};

// Dot product — góc giữa 2 vector (>0: cùng hướng, 0: vuông góc, <0: ngược)
float Dot(const Vector3& a, const Vector3& b) {
    return a.x*b.x + a.y*b.y + a.z*b.z;
}

// Cross product — vector vuông góc với cả 2 (dùng tính pháp tuyến, hướng quay)
Vector3 Cross(const Vector3& a, const Vector3& b) {
    return { a.y*b.z - a.z*b.y,
             a.z*b.x - a.x*b.z,
             a.x*b.y - a.y*b.x };
}
```

### Các khái niệm cần biết
- **Matrix (ma trận):** Biểu diễn phép biến đổi (translation, rotation, scale). Nhân ma trận để gộp biến đổi. Quan trọng cho không gian model → world → view → projection.
- **Quaternion:** Biểu diễn xoay tránh **gimbal lock** (khóa trục) mà Euler angles gặp phải; nội suy xoay mượt (slerp). Dùng cho rotation trong hầu hết engine.
- **Lerp (linear interpolation):** Nội suy tuyến tính, dùng khắp nơi (animation, camera mượt).

```cpp
// Lerp — pha trộn giữa a và b theo t∈[0,1]
float Lerp(float a, float b, float t) { return a + (b - a) * t; }
// t=0 → a, t=1 → b, t=0.5 → trung điểm. Ví dụ: camera bám mượt:
camera.position.x = Lerp(camera.position.x, target.x, 0.1f);   // mỗi frame tiến 10% về target
// ⚠️ Cách "10%/frame" này phụ thuộc FPS — bản chuẩn độc lập FPS: Lerp(cam, target, 1 - std::exp(-k * dt));
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tính hướng từ enemy tới player và kiểm tra vector zero trước khi normalize.

**Tự kiểm tra:** Nêu khác biệt điểm/hướng, local/world và góc/quaternion trong thao tác đang làm.

---

<a id="lesson-29"></a>

## Design patterns trong gameplay

**Mục tiêu:** Chọn pattern cho trách nhiệm thật: tái sử dụng, sự kiện, trạng thái hay hoàn tác.  
**Cần biết trước:** [Composition](#lesson-16), [template](#lesson-19), [lambda](#lesson-18), [game loop](#lesson-25).

Pattern = giải pháp tái sử dụng cho vấn đề lặp lại. Dưới đây là các pattern *đặc biệt hữu ích cho game*.

### Singleton — một instance toàn cục (DÙNG THẬN TRỌNG)
```cpp
class GameManager {
public:
    static GameManager& Get() {        // truy cập toàn cục
        static GameManager instance;   // tạo 1 lần duy nhất (thread-safe từ C++11)
        return instance;
    }
    GameManager(const GameManager&) = delete;          // cấm copy
    void operator=(const GameManager&) = delete;
private:
    GameManager() = default;
};
// Dùng: GameManager::Get().StartLevel();
```
> ⚠️ Singleton dễ bị lạm dụng → tạo global state ẩn, khó test. Cân nhắc dependency injection thay thế khi có thể.

### Object Pool — tái sử dụng object (tối ưu chống GC/alloc)
```cpp
// Thay vì new/delete đạn liên tục (tốn & phân mảnh), tái dùng từ pool:
template <typename T>
class ObjectPool {
    std::vector<T>     pool;
    std::vector<bool>  inUse;
public:
    explicit ObjectPool(size_t count)            // PHẢI cấp sẵn 'count' object để tái dùng
        : pool(count), inUse(count, false) {}    // (nếu không, Acquire luôn trả nullptr)

    T* Acquire() {                          // lấy 1 object rảnh
        for (size_t i = 0; i < pool.size(); ++i)
            if (!inUse[i]) { inUse[i] = true; return &pool[i]; }
        return nullptr;                     // pool đầy
    }
    void Release(T* obj) {                   // trả về pool (không delete)
        size_t i = static_cast<size_t>(obj - pool.data());
        inUse[i] = false;
    }
};
// Dùng: ObjectPool<Bullet> bullets(256);  Bullet* b = bullets.Acquire();
// Cực hữu ích cho: bullets, particles, enemies — thứ tạo/hủy liên tục.
```

### Observer — phát/nhận sự kiện (event system)
```cpp
// Mã giả — đối tượng "phát" báo cho mọi "người nghe" khi có sự kiện
class EventSystem {
    std::vector<std::function<void(int)>> listeners;
public:
    void Subscribe(std::function<void(int)> cb) { listeners.push_back(cb); }
    void Notify(int data) {
        for (auto& cb : listeners) cb(data);   // gọi mọi listener
    }
};
// player.onDeath.Subscribe([](int){ ShowGameOver(); });
// (Unreal hiện thực hóa pattern này bằng Delegates — Phần VI.)
```

### State Machine — quản lý trạng thái (AI, animation, gameplay)
```cpp
enum class AIState { Idle, Patrol, Chase, Attack };

class Enemy {
    AIState state = AIState::Idle;
public:
    void Update(float dt) {
        switch (state) {
            case AIState::Idle:
                if (PlayerNearby()) state = AIState::Chase;   // chuyển trạng thái
                break;
            case AIState::Chase:
                MoveTowardPlayer(dt);
                if (InAttackRange()) state = AIState::Attack;
                if (!PlayerNearby())  state = AIState::Patrol;
                break;
            case AIState::Attack:
                PerformAttack();
                if (!InAttackRange()) state = AIState::Chase;
                break;
            // ...
        }
    }
};
```

### Command — đóng gói hành động (undo/redo, input remapping, replay)
```cpp
// Mã giả — mỗi hành động là 1 object, dễ ghi lại / hoàn tác / phát lại
class ICommand {
public:
    virtual void Execute() = 0;
    virtual void Undo()    = 0;
    virtual ~ICommand() = default;
};

class MoveCommand : public ICommand {
    Player& player; Vector3 delta;
public:
    MoveCommand(Player& p, Vector3 d) : player(p), delta(d) {}
    void Execute() override { player.position += delta; }
    void Undo()    override { player.position -= delta; }
};
// Lưu lịch sử command để undo, hoặc remap input → command.
```

### Component Pattern — (đã nói ở [Composition và thiết kế trách nhiệm](#lesson-16)) nền tảng của Unreal Actor & ECS.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Thiết kế state machine của enemy và vòng đời đăng ký/hủy listener; nêu lý do có hoặc không dùng pool.

**Tự kiểm tra:** Kiểm tra ownership, lifetime và đường trả object về pool; không thêm pattern chỉ để đủ tên.

---

<a id="lesson-30"></a>

## Bắt đầu Unreal Engine C++

**Mục tiêu:** Phân biệt Standard C++ với công cụ build, reflection và quy ước của project Unreal.  
**Cần biết trước:** Hoàn thành nền tảng C++, ownership/OOP và [tự review](#lesson-45); xác định phiên bản engine/project trước thao tác.

### Chuẩn bị project engine

Cài đúng phiên bản Unreal Engine mà project dùng qua Epic Games Launcher; có thể cài Engine Source để đọc code. Với Visual Studio 2022, bổ sung workload **Game development with C++** và các component engine/toolchain mà phiên bản đó yêu cầu. Làm theo tài liệu Git/Git LFS của repository và dùng .gitignore phù hợp Unreal. Sau khi build project, đặt breakpoint trong BeginPlay, chạy PIE và xác nhận debugger dừng. Cấu hình editor, compiler và SDK cụ thể phải khớp project, không tự nâng phiên bản chỉ để làm theo ví dụ.

### Project Unreal Engine C++ đầu tiên
1. Epic Launcher → Launch UE → **Games → Third Person → chọn C++** (không phải Blueprint) → đặt tên `TrainingGame`.
2. UE tự sinh solution và mở Visual Studio. Nếu cần tạo lại: chuột phải file `.uproject` → **Generate Visual Studio project files**.
3. Trong VS: chọn cấu hình **Development Editor | Win64** → **Build** → mở lại `.uproject` để vào editor.
4. Thêm class mới: trong editor → **Tools → New C++ Class** (đừng tự tạo file bằng tay khi mới bắt đầu — editor sẽ đặt file đúng chỗ và cập nhật project).

### Live Coding — biên dịch khi editor đang mở
- Phím tắt **Ctrl+Alt+F11** biên dịch thay đổi `.cpp` mà không cần đóng editor — rất nhanh khi iterate logic.
- ⚠️ **Giới hạn:** thay đổi *header* (thêm/xoá `UPROPERTY`, `UFUNCTION`, đổi layout class) không đáng tin với Live Coding → **đóng editor, build từ IDE** rồi mở lại. Cơ chế Hot Reload cũ không còn được khuyến nghị — coi *Live Coding cho .cpp* + *build từ IDE cho .h* là quy trình chuẩn.

### Cấu trúc thư mục project UE cần biết
```
TrainingGame/
├── TrainingGame.uproject       // mở editor; chuột phải để generate solution
├── Source/
│   └── TrainingGame/
│       ├── TrainingGame.Build.cs   // khai báo module phụ thuộc (mục 30)
│       └── *.h / *.cpp             // code của bạn nằm ở đây
├── Content/                    // asset (.uasset) — quản lý bằng Git LFS
├── Config/                     // *.ini cấu hình
└── Binaries/ Intermediate/ Saved/ DerivedDataCache/
                                // ⚠️ file sinh ra khi build — KHÔNG commit (xem Git guide)
```

| Khía cạnh | Standard C++ | Unreal C++ |
|---|---|---|
| Quản lý bộ nhớ | new/delete, smart pointer | **Garbage Collector** cho `UObject` |
| Container | `std::vector`, `std::map`... | `TArray`, `TMap`, `TSet`... |
| String | `std::string` | `FString`, `FName`, `FText` |
| Smart pointer | `unique_ptr`, `shared_ptr` | `TUniquePtr`, `TSharedPtr`, `TObjectPtr`, `TWeakObjectPtr` |
| Reflection | không có | **có** (UCLASS/UPROPERTY/UFUNCTION) |
| Exceptions | có | **mặc định tắt** |
| Assert | `assert` | `check()`, `ensure()`, `verify()` |
| Ép kiểu | `static_cast`, `dynamic_cast` | `Cast<>()` / `CastChecked<>()` — RTTI mặc định tắt ([Chuyển kiểu và lựa chọn cast](#lesson-46)) |
| Build | CMake/MSBuild | **UnrealBuildTool** (`.Build.cs`) |
| Naming | tùy team | quy ước nghiêm ngặt (prefix U/A/F/E/I) |

### Quy ước đặt tiền tố (prefix) — BẮT BUỘC trong UE
```cpp
class  UMyComponent;   // U — kế thừa từ UObject
class  AMyActor;       // A — kế thừa từ AActor (đặt được vào world)
struct FMyData;        // F — struct/class thường (không phải UObject)
enum class EWeaponType;// E — enum
class  IMyInterface;   // I — interface
template<> T...        // T — type template (TArray, TSubclassOf...)
```

### File Build cơ bản (`.Build.cs` — viết bằng C#)
```csharp
// MyGame.Build.cs
using UnrealBuildTool;

public class MyGame : ModuleRules {
    public MyGame(ReadOnlyTargetRules Target) : base(Target) {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        // Module phụ thuộc — phải khai báo để link được:
        PublicDependencyModuleNames.AddRange(new string[] {
            "Core", "CoreUObject", "Engine", "InputCore",
            "GameplayAbilities", "GameplayTags", "GameplayTasks"  // ví dụ cho GAS
        });
    }
}
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo hoặc mở project C++, build Editor target, xác định Source, Content và file Build.cs.

**Tự kiểm tra:** Phân biệt UBT/UHT/compiler và biết khi thay đổi nào cần build đầy đủ theo project.

---

<a id="lesson-31"></a>

## UObject, reflection và macros

**Mục tiêu:** Đọc vai trò UCLASS, UPROPERTY, UFUNCTION, USTRUCT và generated header.  
**Cần biết trước:** [Unreal cơ bản](#lesson-30), [class](#lesson-12).

### UObject — lớp gốc của hầu hết mọi thứ trong UE
`UObject` là base class cung cấp: garbage collection, reflection, serialization, networking, Blueprint integration. Hầu hết class gameplay kế thừa (gián tiếp) từ `UObject`.

### Reflection & Macros — "ma thuật" của UE
UE dùng **Unreal Header Tool (UHT)** quét các macro để sinh code reflection (cho Blueprint, serialization, GC, network...).

```cpp
// MyActor.h
#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MyActor.generated.h"          // BẮT BUỘC — include cuối, file UHT sinh ra

UCLASS()                                 // đánh dấu class cho reflection
class MYGAME_API AMyActor : public AActor {
    GENERATED_BODY()                     // BẮT BUỘC — chèn code UHT sinh

public:
    AMyActor();

    // UPROPERTY đưa property vào reflection; editor/Blueprint/replication tùy specifier và cấu hình
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Stats")
    float Health = 100.0f;

    UPROPERTY(VisibleAnywhere, Category = "Components")
    TObjectPtr<class UStaticMeshComponent> MeshComp;   // UE5 khuyến nghị TObjectPtr thay raw pointer (mục 36)

    // UFUNCTION — cho hàm: gọi được từ Blueprint, làm event/RPC...
    UFUNCTION(BlueprintCallable, Category = "Gameplay")
    void TakeDamage(float Amount);

protected:
    virtual void BeginPlay() override;   // được gọi khi actor vào game
public:
    virtual void Tick(float DeltaTime) override;  // gọi mỗi frame
};
```

### Các specifier UPROPERTY hay dùng
| Specifier | Ý nghĩa |
|---|---|
| `EditAnywhere` | Sửa được trong editor (cả class default lẫn instance) |
| `EditDefaultsOnly` | Chỉ sửa trên Blueprint/class default, không sửa từng instance |
| `VisibleAnywhere` | Xem được nhưng không sửa |
| `BlueprintReadWrite` | Blueprint đọc & ghi |
| `BlueprintReadOnly` | Blueprint chỉ đọc |
| `Category = "..."` | Nhóm trong Details panel |
| `meta = (ClampMin="0")` | Hỗ trợ giới hạn khi nhập trong editor; không thay validate runtime |

> **Reference và GC:** Một strong reference lâu dài từ UObject thường được khai báo bằng `UPROPERTY()` với `TObjectPtr<T>` để reflection/GC theo dõi. Khi chỉ quan sát, dùng weak reference và kiểm tra validity; không phải mọi pointer member đều phải giữ object sống. Raw pointer không được theo dõi không tự ngăn GC. Xem [GC và lifetime](#lesson-32), [các loại pointer Unreal](#lesson-36).

`UPROPERTY` tự nó không bật replication: cần specifier Replicated/ReplicatedUsing, đăng ký property và cấu hình Actor/component phù hợp. [Replication](#lesson-54) giải thích các bước đó.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Expose một property và hàm đơn giản; kiểm tra từ editor/Blueprint với kiểu được hỗ trợ.

**Tự kiểm tra:** Phân biệt macro reflection với cú pháp ngôn ngữ C++ và quyền sở hữu object.

---

<a id="lesson-32"></a>

## Garbage collection và vòng đời UObject

**Mục tiêu:** Chọn cách tạo/giữ UObject đúng cơ chế engine và nhận diện reference được GC theo dõi.  
**Cần biết trước:** [UObject/reflection](#lesson-31), [ownership](#lesson-9).

Standard C++ thường dùng giá trị và RAII để quản lý lifetime. Unreal bổ sung garbage collection cho UObject: hệ thống xác định object còn reachable từ root và các reference được engine theo dõi, rồi thu hồi theo cơ chế của engine. Một raw pointer C++ tồn tại không tự làm object reachable; Actor còn có lifecycle và Destroy riêng.

```cpp
UCLASS()
class AWeaponManager : public AActor {
    GENERATED_BODY()

    // Strong reflected reference; vẫn kiểm tra validity trước sử dụng theo lifecycle
    UPROPERTY()
    TObjectPtr<AWeapon> CurrentWeapon;

    // Raw pointer không được GC theo dõi; không dựa vào nó để giữ object sống
    AWeapon* DangerousWeapon = nullptr;
};
```

### Tạo UObject đúng cách (KHÔNG dùng new)
```cpp
// Tạo Actor trong world:
AWeapon* Weapon = GetWorld()->SpawnActor<AWeapon>(WeaponClass, Location, Rotation);

// Tạo Component:
MeshComp = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("MeshComp"));  // trong constructor

// Tạo UObject thường (không phải Actor/Component):
UMyObject* Obj = NewObject<UMyObject>(this);   // this là Outer; cần giữ reference phù hợp nếu dùng lâu dài
```

> **Ghi nhớ:** Không bao giờ `new`/`delete` một `UObject`. Dùng `NewObject`, `SpawnActor`, `CreateDefaultSubobject`, và để GC lo phần hủy.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Vẽ owner, outer và các reference của một UObject do gameplay tạo; kiểm tra chỗ reference có thể mất.

**Tự kiểm tra:** Không áp dụng delete/unique_ptr của Standard C++ cho UObject do engine quản lý.

---

<a id="lesson-33"></a>

## Actor, component và lifecycle

**Mục tiêu:** Tách đối tượng trong level khỏi thành phần chức năng và chọn hook lifecycle phù hợp.  
**Cần biết trước:** [Reflection](#lesson-31), [GC](#lesson-32), [composition](#lesson-16).

### Actor — bất cứ thứ gì đặt được vào level
`AActor` là object có thể tồn tại trong world (có transform: vị trí, xoay, scale). Ví dụ: nhân vật, đèn, camera, trigger volume.

### Component — khối chức năng gắn vào Actor (Composition!)
Actor là cái "khung", Component cung cấp hành vi cụ thể. Đây chính là **composition over inheritance** ([Composition và thiết kế trách nhiệm](#lesson-16)) ở quy mô engine.

```cpp
// MyCharacter.h
UCLASS()
class AMyCharacter : public ACharacter {
    GENERATED_BODY()

    UPROPERTY(VisibleAnywhere)
    TObjectPtr<class UCameraComponent> CameraComp;         // component camera

    UPROPERTY(VisibleAnywhere)
    TObjectPtr<class USpringArmComponent> SpringArm;       // "cần" giữ camera

    UPROPERTY(VisibleAnywhere)
    TObjectPtr<class UHealthComponent> HealthComp;         // component tùy biến của bạn

public:
    AMyCharacter();
};
```

```cpp
// MyCharacter.cpp — lắp component trong constructor
AMyCharacter::AMyCharacter() {
    PrimaryActorTick.bCanEverTick = true;          // bật Tick mỗi frame

    SpringArm = CreateDefaultSubobject<USpringArmComponent>(TEXT("SpringArm"));
    SpringArm->SetupAttachment(RootComponent);     // gắn vào root
    SpringArm->TargetArmLength = 300.0f;

    CameraComp = CreateDefaultSubobject<UCameraComponent>(TEXT("Camera"));
    CameraComp->SetupAttachment(SpringArm);        // camera gắn vào đầu spring arm

    HealthComp = CreateDefaultSubobject<UHealthComponent>(TEXT("Health"));
}
```

### Vòng đời Actor (Actor Lifecycle) — các hàm hay override
```cpp
AMyActor::AMyActor() { /* constructor — lắp component, đặt giá trị mặc định */ }

void AMyActor::BeginPlay() {                 // khi vào game / spawn — khởi tạo gameplay
    Super::BeginPlay();                      // LUÔN gọi Super để giữ hành vi lớp cha
}

void AMyActor::Tick(float DeltaTime) {       // mỗi frame — logic cập nhật liên tục
    Super::Tick(DeltaTime);
    // dùng DeltaTime cho chuyển động độc lập FPS (như mục 25)
}

void AMyActor::EndPlay(const EEndPlayReason::Type Reason) {  // khi rời game — dọn dẹp
    Super::EndPlay(Reason);
}
```

> **`Super::`** = gọi phiên bản của lớp cha. Trong UE gần như luôn phải gọi `Super::` ở các override lifecycle.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo Actor có component; ghi log constructor, BeginPlay, Tick, EndPlay trong một ca chơi nhỏ.

**Tự kiểm tra:** Phân biệt default subobject với Actor spawn trong world và kiểm tra kết quả spawn.

---

<a id="lesson-34"></a>

## Gameplay Framework

**Mục tiêu:** Đặt trách nhiệm vào GameMode, GameState, PlayerController, Pawn và PlayerState đúng ngữ cảnh.  
**Cần biết trước:** [Actor](#lesson-33).

UE cung cấp khung gameplay sẵn — hiểu vai trò từng lớp để biết đặt logic vào đâu:

| Lớp | Vai trò |
|---|---|
| `AGameModeBase` / `AGameMode` | Luật chơi, điều kiện thắng/thua (chỉ tồn tại trên **server**) |
| `AGameStateBase` | Trạng thái game chia sẻ cho mọi client (điểm số, thời gian...) |
| `APlayerController` | Đại diện 1 người chơi, nhận input, điều khiển Pawn |
| `APlayerState` | Trạng thái của 1 người chơi (tên, điểm, ping) |
| `APawn` / `ACharacter` | Thực thể điều khiển được; `ACharacter` thêm sẵn di chuyển 2 chân, capsule, mesh |
| `UGameInstance` | Tồn tại xuyên suốt phiên game (qua nhiều level) — lưu trạng thái lâu dài |

```cpp
// Mã giả — luồng điều khiển điển hình
// PlayerController nhận input → điều khiển Pawn (Character) → Pawn dùng các Component để hành động
// GameMode quyết định luật → GameState phát trạng thái → UI đọc GameState để hiển thị
```

> Nhận input người chơi trong UE5 dùng **Enhanced Input** (Input Action + Mapping Context) — xem **[Enhanced Input](#lesson-52)**.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Lập sơ đồ spawn/possess của một người chơi và nơi lưu luật, điểm, input.

**Tự kiểm tra:** Giải thích đối tượng nào có ở server/client và tránh đặt mọi logic vào Pawn.

---

<a id="lesson-35"></a>

## Container và chuỗi Unreal

**Mục tiêu:** Chọn TArray, TMap, TSet, FString, FName hoặc FText theo kiểu dữ liệu và thao tác.  
**Cần biết trước:** [STL container](#lesson-20), [Unreal cơ bản](#lesson-30).

UE có container riêng (tối ưu cho engine, hỗ trợ reflection/serialization). **Trong code UE, dùng container UE thay STL.**

| STL | Unreal | Ghi chú |
|---|---|---|
| `std::vector<T>` | `TArray<T>` | mảng động, dùng nhiều nhất |
| `std::map<K,V>` | `TMap<K,V>` | hash map (giống unordered_map hơn) |
| `std::set<T>` | `TSet<T>` | tập phần tử duy nhất |
| `std::string` | `FString` | chuỗi sửa được |
| (chuỗi định danh) | `FName` | chuỗi bất biến, hash sẵn, **không phân biệt hoa/thường** — so sánh cực nhanh (tên asset, tag) |
| (chuỗi hiển thị) | `FText` | chuỗi cho người dùng, hỗ trợ localization (đa ngôn ngữ) |

```cpp
// TArray — tương đương vector
TArray<AActor*> Enemies;
Enemies.Add(NewEnemy);                  // thêm (≈ push_back)
Enemies.Num();                          // số phần tử (≈ size)
Enemies[0];                             // truy cập index
Enemies.Remove(SomeEnemy);             // xóa theo giá trị
Enemies.RemoveAt(2);                    // xóa theo index
for (AActor* E : Enemies) { /* ... */ }// range-based for vẫn dùng được

// TMap — tương đương map
TMap<FString, int32> Scores;
Scores.Add(TEXT("Player1"), 100);
if (int32* Found = Scores.Find(TEXT("Player1")))   // trả con trỏ, null nếu không có
    (*Found)++;

// FString thao tác
FString Name = TEXT("Hero");           // TEXT() — bắt buộc cho string literal trong UE
FString Greeting = FString::Printf(TEXT("Hello %s, HP: %d"), *Name, 100);  // *Name → const TCHAR*
```

> **Kiểu số trong UE:** dùng `int32`, `int64`, `uint8`, `float`, `double` (UE typedef) thay vì `int`/`long` để đảm bảo cross-platform nhất quán.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo inventory TArray và bảng điểm TMap; kiểm tra key không tồn tại và container rỗng.

**Tự kiểm tra:** Phân biệt Find trả pointer với thao tác thêm phần tử và nêu mục đích của ba kiểu chuỗi.

---

<a id="lesson-36"></a>

## Pointer và object handle trong Unreal

**Mục tiêu:** Tách pointer UObject do GC quản lý khỏi smart pointer cho object C++ thường.  
**Cần biết trước:** [GC](#lesson-32), [smart pointer chuẩn](#lesson-10).

UE có 2 nhóm smart pointer cho 2 loại object khác nhau:

### Cho UObject (đã có GC quản lý)
```cpp
// TObjectPtr — thay cho raw pointer trong UPROPERTY (UE5 khuyến nghị)
UPROPERTY()
TObjectPtr<AWeapon> Weapon;            // Strong reference được GC theo dõi khi là UPROPERTY

// TWeakObjectPtr — không giữ object sống; trở nên invalid khi object không còn hợp lệ
UPROPERTY()
TWeakObjectPtr<AActor> TargetActor;
if (TargetActor.IsValid()) {           // kiểm tra còn sống không
    TargetActor->DoSomething();
}

// TSubclassOf — "con trỏ tới một CLASS" (không phải instance) — dùng để spawn
UPROPERTY(EditAnywhere)
TSubclassOf<AWeapon> WeaponClass;       // chọn class trong editor, rồi SpawnActor
```

### Cho object KHÔNG phải UObject (struct C++ thường)
```cpp
TSharedPtr<FMyData>  Data = MakeShared<FMyData>();   // ≈ std::shared_ptr
TWeakPtr<FMyData>    WeakData = Data;                 // ≈ std::weak_ptr
TUniquePtr<FMyData>  Unique = MakeUnique<FMyData>();  // ≈ std::unique_ptr
```

> **Quy tắc chọn:** Dùng reflected `TObjectPtr` cho strong reference lâu dài từ UObject; `TWeakObjectPtr` để quan sát mà không giữ object sống. `IsValid()`/`Get()` kiểm tra object còn dùng được theo semantics của kiểu. Với object C++ thường, chọn TSharedPtr/TUniquePtr/TWeakPtr theo ownership. Không quản lý UObject bằng smart pointer sở hữu dành cho object non-UObject.

### Soft reference và tải asset theo nhu cầu

`TSoftObjectPtr<T>` lưu tham chiếu tới asset/object theo đường dẫn và hỗ trợ quy trình tải khi cần. Nó không tự giữ object đã tải sống như một strong reference; phải kiểm tra trạng thái và quản lý lifetime phù hợp. Đừng gán vai trò tải asset theo nhu cầu cho mọi `TObjectPtr`.

Đối chiếu: [Object Pointers](https://dev.epicgames.com/documentation/en-us/unreal-engine/object-pointers-in-unreal-engine), [Unreal Object Handling](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-object-handling-in-unreal-engine).

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Chọn strong/weak/soft reference cho actor hiện tại, actor có thể bị hủy và asset tải theo nhu cầu.

**Tự kiểm tra:** Giải thích validity/lifetime của reference đang chọn thay vì chỉ kiểm tra khác null.

---

<a id="lesson-37"></a>

## Delegate và sự kiện

**Mục tiêu:** Kết nối nơi phát và nơi nhận với loại delegate, chữ ký và lifetime phù hợp.  
**Cần biết trước:** [Hàm](#lesson-5), [lambda](#lesson-18), [reflection](#lesson-31).

Delegate = hiện thực của **Observer pattern** trong UE — cơ chế "đăng ký callback & phát sự kiện", dùng để giảm coupling giữa các hệ thống.

```cpp
// 1. Khai báo delegate type (thường trong header)
// "Dynamic Multicast" = nhiều listener + dùng được trong Blueprint
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnHealthChanged, float, NewHealth);

UCLASS()
class UHealthComponent : public UActorComponent {
    GENERATED_BODY()
public:
    // 2. Khai báo biến delegate
    UPROPERTY(BlueprintAssignable, Category = "Events")
    FOnHealthChanged OnHealthChanged;

    void TakeDamage(float Amount) {
        Health -= Amount;
        OnHealthChanged.Broadcast(Health);   // 3. PHÁT sự kiện cho mọi listener
    }
private:
    float Health = 100.0f;
};
```

```cpp
// AMyHUD.h — hàm nghe BẮT BUỘC phải là UFUNCTION() thì AddDynamic mới hoạt động:
UFUNCTION()
void HandleHealthChanged(float NewHealth);

// AMyHUD.cpp
// 4. ĐĂNG KÝ nghe (ví dụ trong BeginPlay của UI hoặc Character)
HealthComp->OnHealthChanged.AddDynamic(this, &AMyHUD::HandleHealthChanged);

void AMyHUD::HandleHealthChanged(float NewHealth) {   // được gọi mỗi khi máu đổi
    UpdateHealthBar(NewHealth);
}
```
> ⚠️ **Bẫy hay gặp:** Với *dynamic* delegate (`AddDynamic`), hàm callback **bắt buộc** đánh dấu `UFUNCTION()` — quên là lỗi biên dịch. Còn delegate non-dynamic dùng `AddUObject(this, &Class::Func)`, `AddLambda(...)`, `AddRaw(...)` thì callback **không** cần `UFUNCTION()`. Khi đối tượng nghe bị hủy, nhớ gọi `RemoveDynamic`/`RemoveAll` (hoặc dùng `AddWeakLambda`/handle) để tránh gọi vào con trỏ chết.

### Các loại delegate
| Loại | Đặc điểm |
|---|---|
| `DECLARE_DELEGATE` | single-cast, C++ only |
| `DECLARE_MULTICAST_DELEGATE` | nhiều listener, C++ only |
| `DECLARE_DYNAMIC_DELEGATE` | dùng được trong Blueprint (serialize được), chậm hơn |
| `DECLARE_DYNAMIC_MULTICAST_DELEGATE` | Blueprint + nhiều listener (hay dùng nhất cho event) |

> Các event va chạm (`OnComponentBeginOverlap`, `OnComponentHit`...) chính là dynamic multicast delegate — cách bind & chữ ký chuẩn: xem **[Timer, collision và tiện ích gameplay](#lesson-53)**.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Phát sự kiện đổi HP cho HUD; kiểm tra receiver bị hủy hoặc đăng ký hai lần.

**Tự kiểm tra:** Phân biệt single/multicast và native/dynamic; giải thích yêu cầu UFUNCTION của callback dynamic.

---

<a id="lesson-38"></a>

## Kết nối C++ và Blueprint

**Mục tiêu:** Thiết kế API cho designer và phân biệt gọi hàm với implement sự kiện trong Blueprint.  
**Cần biết trước:** [Reflection](#lesson-31), [đa hình](#lesson-14).

Triết lý UE: **C++ cho hệ thống/hiệu năng, Blueprint cho lắp ghép/iterate nhanh.** Phối hợp tốt hai bên là kỹ năng cốt lõi.

```cpp
// Cho Blueprint GỌI hàm C++:
UFUNCTION(BlueprintCallable, Category = "Combat")
void Fire();

// Cho Blueprint ĐỌC/GHI biến C++:
UPROPERTY(EditAnywhere, BlueprintReadWrite)
float FireRate = 0.2f;

// Hàm cài đặt trong C++ nhưng cho Blueprint OVERRIDE / mở rộng:
UFUNCTION(BlueprintNativeEvent, Category = "AI")
void OnTargetSpotted(AActor* Target);
void OnTargetSpotted_Implementation(AActor* Target) {   // bản C++ mặc định
    // logic mặc định — Blueprint có thể override
}

// Hàm CHỈ cài trong Blueprint, C++ chỉ khai báo & gọi:
UFUNCTION(BlueprintImplementableEvent, Category = "FX")
void PlayHitEffect();   // không có thân C++ — designer làm trong Blueprint
```

### Expose enum/struct cho Blueprint
```cpp
UENUM(BlueprintType)                         // enum dùng được trong Blueprint
enum class EWeaponType : uint8 {             // PHẢI là uint8 để BP nhận
    Sword UMETA(DisplayName = "Sword"),
    Bow   UMETA(DisplayName = "Bow")
};

USTRUCT(BlueprintType)                        // struct dùng được trong Blueprint
struct FWeaponStats {
    GENERATED_BODY()
    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    float Damage = 10.0f;
    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    float Range = 100.0f;
};
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Expose một hành động và một sự kiện có thể override; kiểm tra trên Blueprint derived.

**Tự kiểm tra:** Giải thích BlueprintCallable, ImplementableEvent và NativeEvent theo hành vi muốn có.

---

<a id="lesson-39"></a>

## Data-driven design

**Mục tiêu:** Tách cấu hình khỏi logic bằng DataAsset/DataTable với schema rõ ràng.  
**Cần biết trước:** [Reflection](#lesson-31), [container](#lesson-35), [C++/Blueprint](#lesson-38).

Tách **dữ liệu** ra khỏi **code** → designer chỉnh được mà không cần compile, dễ cân bằng (balancing), dễ mở rộng. Đây là cách tiếp cận chuyên nghiệp cho nội dung game.

### Primary Data Asset — cấu hình từng "thứ" (vũ khí, skill, item...)
```cpp
// WeaponData.h
UCLASS(BlueprintType)
class UWeaponData : public UPrimaryDataAsset {
    GENERATED_BODY()
public:
    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Weapon")
    FName WeaponName;

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Weapon")
    float Damage = 10.0f;

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Weapon")
    TObjectPtr<UStaticMesh> Mesh;

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Weapon")
    TObjectPtr<USoundBase> FireSound;
};
// Designer tạo nhiều asset (DA_Sword, DA_Bow...) từ class này, điền số liệu trong editor.
```

### Data Table — bảng dữ liệu (như spreadsheet), import từ CSV/JSON
```cpp
// Định nghĩa 1 dòng của bảng:
USTRUCT(BlueprintType)
struct FEnemyRow : public FTableRowBase {     // kế thừa FTableRowBase
    GENERATED_BODY()
    UPROPERTY(EditAnywhere, BlueprintReadWrite) float Health;
    UPROPERTY(EditAnywhere, BlueprintReadWrite) float Speed;
    UPROPERTY(EditAnywhere, BlueprintReadWrite) int32 XPReward;
};

// Đọc trong C++:
if (const FEnemyRow* Row = EnemyTable->FindRow<FEnemyRow>(TEXT("Goblin"), TEXT("")))
{
    SpawnEnemyWith(Row->Health, Row->Speed);
}
```

> **Chọn cái nào:** DataAsset khi cấu hình phức tạp / cần tham chiếu asset (mesh, sound...); DataTable khi dữ liệu dạng bảng lớn — đặc biệt tiện khi import từ Excel/CSV để balancing.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Chuyển thông số vũ khí thành dữ liệu; thử thiếu asset/row và giá trị cấu hình ngoài hợp đồng.

**Tự kiểm tra:** Xác định ai đọc dữ liệu, lúc nào và cách báo lỗi khi không tìm thấy.

---

<a id="lesson-40"></a>

## Gameplay Ability System: tổng quan

**Mục tiêu:** Nhận diện AbilitySystemComponent, AttributeSet, Ability, Effect và Gameplay Tags.  
**Cần biết trước:** [Framework](#lesson-34), [delegate](#lesson-37), [data-driven](#lesson-39).

GAS là framework mạnh của UE cho hệ thống **ability, attribute, effect, cooldown** — phù hợp RPG, MOBA, action. Đây là kiến trúc nâng cao; phần này chỉ giới thiệu các thành phần cốt lõi.

### Các thành phần chính
| Thành phần | Vai trò |
|---|---|
| `UAbilitySystemComponent` (ASC) | "Bộ não" — gắn vào Actor, quản lý ability/attribute/effect |
| `UGameplayAbility` | Một kỹ năng (đòn đánh, skill, dash...) — logic kích hoạt |
| `UAttributeSet` | Tập thuộc tính (Health, Mana, Strength...) qua `FGameplayAttributeData` |
| `UGameplayEffect` (GE) | Thay đổi attribute (gây damage, buff, debuff, cooldown) — data-driven |
| `FGameplayTag` | Tag phân loại trạng thái/ability (Status.Stunned, Ability.Fireball) |

```cpp
// Mã giả — luồng GAS điển hình
// 1. Actor có ASC + AttributeSet (Health, Mana...)
// 2. Input → ASC->TryActivateAbilityByClass(UFireballAbility::StaticClass())
// 3. Ability chạy → áp UGameplayEffect lên target's ASC
// 4. GE sửa Health attribute của target → trigger callback → cập nhật UI
// 5. GameplayTags kiểm soát điều kiện (vd: không cast được khi có tag Status.Silenced)
```

```cpp
// Khai báo một AttributeSet đơn giản
UCLASS()
class UMyAttributeSet : public UAttributeSet {
    GENERATED_BODY()
public:
    UPROPERTY(BlueprintReadOnly, Category = "Attributes")
    FGameplayAttributeData Health;
    ATTRIBUTE_ACCESSORS(UMyAttributeSet, Health)   // sinh getter/setter tiện dụng

    UPROPERTY(BlueprintReadOnly, Category = "Attributes")
    FGameplayAttributeData MaxHealth;
    ATTRIBUTE_ACCESSORS(UMyAttributeSet, MaxHealth)
};
```
> ⚠️ **Lưu ý chính xác:** `ATTRIBUTE_ACCESSORS` **không phải** macro có sẵn của engine — nó là macro tiện ích bạn **tự định nghĩa** (gần như mọi project GAS đều copy từ sample ActionRPG của Epic), gói 4 macro engine thật. Đặt đoạn này ở đầu file `.h` của AttributeSet:
> ```cpp
> #define ATTRIBUTE_ACCESSORS(ClassName, PropertyName) \
>     GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ClassName, PropertyName) \
>     GAMEPLAYATTRIBUTE_VALUE_GETTER(PropertyName) \
>     GAMEPLAYATTRIBUTE_VALUE_SETTER(PropertyName) \
>     GAMEPLAYATTRIBUTE_VALUE_INITTER(PropertyName)
> ```
> Module phải link `"GameplayAbilities"` ([Bắt đầu Unreal Engine C++](#lesson-30)) và include `"AttributeSet.h"`, `"AbilitySystemComponent.h"`. Trong thực tế, attribute thường thêm `ReplicatedUsing = OnRep_Health` để hỗ trợ multiplayer.

> **Vì sao dùng GAS:** xử lý sẵn các bài toán khó của combat system (prediction cho multiplayer, stacking effect, cooldown, cost, replication). Đánh đổi: learning curve dốc, setup ban đầu nhiều. Phù hợp khi hệ thống ability đủ phức tạp để xứng đáng.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Vẽ luồng một skill gây damage và cooldown, chỉ rõ component nào chịu trách nhiệm.

**Tự kiểm tra:** Phân biệt bản đồ khái niệm với tích hợp GAS hoàn chỉnh; xác minh theo phiên bản project trước triển khai.

---

<a id="lesson-51"></a>

## Unreal Interfaces

**Mục tiêu:** Thiết kế giao tiếp theo khả năng giữa các class khác nhau trong C++/Blueprint.  
**Cần biết trước:** [Interface C++](#lesson-15), [reflection](#lesson-31), [C++/Blueprint](#lesson-38).

Interface thuần C++ ([Hàm virtual, abstract class và interface](#lesson-15)) không "nhìn thấy được" từ Blueprint và không dùng được reflection. UE giải quyết bằng **cặp class U/I**:

```cpp
// Interactable.h
#pragma once
#include "CoreMinimal.h"
#include "UObject/Interface.h"
#include "Interactable.generated.h"

UINTERFACE(MinimalAPI, Blueprintable)          // class "vỏ" cho reflection — KHÔNG thêm gì vào đây
class UInteractable : public UInterface {
    GENERATED_BODY()
};

class IInteractable {                          // class "ruột" — khai báo hàm ở đây
    GENERATED_BODY()
public:
    UFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category = "Interaction")
    void Interact(AActor* Instigator);         // BlueprintNativeEvent → cả C++ lẫn BP đều implement được
};
```

```cpp
// Chest.h — class thật implement interface
UCLASS()
class AChest : public AActor, public IInteractable {
    GENERATED_BODY()
public:
    virtual void Interact_Implementation(AActor* Instigator) override;   // bản cài đặt C++
};
```

```cpp
// Gọi interface ĐÚNG CÁCH — qua Execute_ (chạy được cả khi actor implement bằng Blueprint):
if (OtherActor && OtherActor->Implements<UInteractable>()) {
    IInteractable::Execute_Interact(OtherActor, this);
}
```

> ⚠️ **Bẫy kinh điển:** `Cast<IInteractable>(Actor)` chỉ thành công khi interface được implement bằng **C++**; actor implement bằng **Blueprint** sẽ trả `nullptr`. Vì vậy cặp chuẩn an toàn luôn là `Implements<UInterface>()` + `IInterface::Execute_Hàm(...)`.

**Khi nào dùng gì:** hệ thống nội bộ thuần C++ (không dính Blueprint) → interface C++ thường ([Hàm virtual, abstract class và interface](#lesson-15)) cho nhẹ. Cần designer implement/gọi từ Blueprint, hoặc cần hỏi "actor này có tương tác được không?" xuyên qua nhiều class không họ hàng → UINTERFACE.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Thiết kế Interactable cho door và item; gọi qua interface trong ngữ cảnh Blueprint hỗ trợ.

**Tự kiểm tra:** Giải thích cặp UInterface/IInterface và cách gọi Execute_ phù hợp trường hợp.

---

<a id="lesson-52"></a>

## Enhanced Input

**Mục tiêu:** Tách Input Action, Mapping Context và xử lý hành vi gameplay.  
**Cần biết trước:** [PlayerController/Pawn](#lesson-34), [C++/Blueprint](#lesson-38).

Hệ input cũ (`BindAxis`/`BindAction` cấu hình trong ini) đã **deprecated từ UE 5.1** — dự án mới dùng **Enhanced Input**: input trở thành *asset*, designer chỉnh không cần build lại code.

### 2 loại asset (tạo trong Content Browser → Input)
| Asset | Vai trò | Ví dụ |
|---|---|---|
| **Input Action (IA_)** | MỘT hành động trừu tượng + kiểu giá trị | `IA_Move` (Axis2D), `IA_Jump` (Digital/bool) |
| **Input Mapping Context (IMC_)** | Bảng map phím → action, kèm modifier/trigger | `IMC_Default`: WASD → IA_Move, Space → IA_Jump |

Nhớ thêm `"EnhancedInput"` vào `PublicDependencyModuleNames` trong `.Build.cs` ([Bắt đầu Unreal Engine C++](#lesson-30)).

```cpp
// MyCharacter.h
UPROPERTY(EditAnywhere, Category = "Input")
TObjectPtr<class UInputMappingContext> DefaultMappingContext;

UPROPERTY(EditAnywhere, Category = "Input")
TObjectPtr<class UInputAction> MoveAction;

UPROPERTY(EditAnywhere, Category = "Input")
TObjectPtr<class UInputAction> JumpAction;

void Move(const struct FInputActionValue& Value);
```

```cpp
// MyCharacter.cpp
#include "EnhancedInputComponent.h"
#include "EnhancedInputSubsystems.h"
#include "InputActionValue.h"

void AMyCharacter::BeginPlay() {
    Super::BeginPlay();
    // Kích hoạt bảng phím cho local player:
    if (APlayerController* PC = Cast<APlayerController>(GetController()))
        if (auto* Subsystem = ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(PC->GetLocalPlayer()))
            Subsystem->AddMappingContext(DefaultMappingContext, /*Priority=*/0);
}

void AMyCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent) {
    Super::SetupPlayerInputComponent(PlayerInputComponent);
    if (UEnhancedInputComponent* EIC = CastChecked<UEnhancedInputComponent>(PlayerInputComponent)) {
        EIC->BindAction(MoveAction, ETriggerEvent::Triggered, this, &AMyCharacter::Move);
        EIC->BindAction(JumpAction, ETriggerEvent::Started,   this, &ACharacter::Jump);
        EIC->BindAction(JumpAction, ETriggerEvent::Completed, this, &ACharacter::StopJumping);
    }
}

void AMyCharacter::Move(const FInputActionValue& Value) {
    const FVector2D Axis = Value.Get<FVector2D>();
    AddMovementInput(GetActorForwardVector(), Axis.Y);
    AddMovementInput(GetActorRightVector(),  Axis.X);
}
```

### ETriggerEvent hay dùng
| Event | Khi nào bắn |
|---|---|
| `Started` | khoảnh khắc bắt đầu nhấn (1 lần) |
| `Triggered` | mỗi frame khi trigger còn thỏa (đang giữ phím / axis ≠ 0) |
| `Completed` | khi nhả phím / kết thúc |

> Lợi thế lớn: **rebind phím, modifier (invert, dead-zone, swizzle), trigger (hold, tap, combo)** đều nằm trong asset — designer tự chỉnh, lập trình viên không phải sửa code.

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo một action di chuyển và một action tương tác; kiểm tra context thêm/bỏ và kiểu value.

**Tự kiểm tra:** Phân biệt Started, Triggered, Completed theo loại action và thiết lập trigger.

---

<a id="lesson-53"></a>

## Timer, collision và tiện ích gameplay

**Mục tiêu:** Chọn callback theo thời gian/sự kiện thay vì dồn mọi việc vào Tick.  
**Cần biết trước:** [Actor lifecycle](#lesson-33), [delegate](#lesson-37).

Những "viên gạch" dùng gần như mỗi ngày khi viết gameplay UE.

### FTimerManager — chạy hàm sau X giây / lặp lại
```cpp
FTimerHandle FireTimerHandle;   // giữ handle làm member để còn Clear

// Gọi Fire() mỗi 0.2 giây, bắt đầu ngay:
GetWorldTimerManager().SetTimer(FireTimerHandle, this, &AWeapon::Fire,
                                0.2f, /*bLoop=*/true, /*FirstDelay=*/0.f);

// Lambda + chạy 1 lần sau 3 giây:
GetWorldTimerManager().SetTimer(ExplodeHandle, [this]() { Explode(); }, 3.f, false);

GetWorldTimerManager().ClearTimer(FireTimerHandle);                      // hủy hẹn giờ
GetWorldTimerManager().SetTimerForNextTick(this, &AWeapon::LateInit);    // "chạy ở frame sau"
```
> Timer thuộc World → tự dừng khi actor bị destroy / đổi level, và **tôn trọng pause + time dilation** — ưu việt hơn tự cộng dồn thời gian trong Tick.

### Overlap & Hit events — chính là dynamic delegate của collision
```cpp
// Pickup.h — chữ ký hàm PHẢI KHỚP CHÍNH XÁC và PHẢI có UFUNCTION() (vì AddDynamic — mục 37):
UFUNCTION()
void OnOverlapBegin(UPrimitiveComponent* OverlappedComp, AActor* OtherActor,
                    UPrimitiveComponent* OtherComp, int32 OtherBodyIndex,
                    bool bFromSweep, const FHitResult& SweepResult);
```
```cpp
// Pickup.cpp — bind trong BeginPlay (hoặc constructor):
SphereComp->OnComponentBeginOverlap.AddDynamic(this, &APickup::OnOverlapBegin);

void APickup::OnOverlapBegin(UPrimitiveComponent*, AActor* OtherActor,
                             UPrimitiveComponent*, int32, bool, const FHitResult&) {
    if (AMyCharacter* Char = Cast<AMyCharacter>(OtherActor)) {   // lọc đúng đối tượng (mục 46)
        Char->AddHealth(25.f);
        Destroy();
    }
}
```
> Overlap "không chạy"? Checklist: component có bật **Generate Overlap Events**? Collision preset hai bên có Overlap với channel của nhau? Hàm callback có `UFUNCTION()` và **đúng chữ ký** không?

### Line Trace (raycast) — "bắn tia" kiểm tra trúng gì
```cpp
#include "DrawDebugHelpers.h"

FVector Start = Camera->GetComponentLocation();
FVector End   = Start + Camera->GetForwardVector() * 10000.f;

FCollisionQueryParams Params;
Params.AddIgnoredActor(this);                        // đừng tự bắn trúng mình

FHitResult Hit;
if (GetWorld()->LineTraceSingleByChannel(Hit, Start, End, ECC_Visibility, Params)) {
    if (AActor* HitActor = Hit.GetActor()) {
        UE_LOG(LogTemp, Log, TEXT("Trúng: %s tại %s"), *HitActor->GetName(), *Hit.ImpactPoint.ToString());
    }
}
DrawDebugLine(GetWorld(), Start, End, FColor::Green, false, 1.0f);   // vẽ tia ra màn hình để debug
```

### UGameplayStatics — "hộp đồ nghề" hàm tĩnh (`#include "Kismet/GameplayStatics.h"`)
```cpp
ACharacter* Player = UGameplayStatics::GetPlayerCharacter(this, 0);
UGameplayStatics::PlaySoundAtLocation(this, FireSound, GetActorLocation());
UGameplayStatics::ApplyDamage(Target, 25.f, GetController(), this, UDamageType::StaticClass());
UGameplayStatics::OpenLevel(this, FName("Arena"));
float Now = GetWorld()->GetTimeSeconds();            // "đồng hồ" thời gian của game
```

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Tạo timer hồi máu và overlap tương tác; hủy timer/đăng ký khi đối tượng không còn cần dùng.

**Tự kiểm tra:** Kiểm tra world, object và hit result hợp lệ trước khi truy cập dữ liệu.

---

<a id="lesson-54"></a>

## Multiplayer và replication: tổng quan

**Mục tiêu:** Phân biệt authority, ownership, property replication và RPC trong mô hình client/server.  
**Cần biết trước:** [Framework](#lesson-34), [Actor](#lesson-33), [reflection](#lesson-31).

UE theo mô hình **server-authoritative**: server là "sự thật", client hiển thị & dự đoán. Mục này chỉ đủ để *đọc-hiểu* code multiplayer; chi tiết nằm trong tài liệu chuyên đề của team.

```cpp
// 1) Bật replicate cho actor (trong constructor):
bReplicates = true;

// 2) Property replicate từ server → client:
UPROPERTY(ReplicatedUsing = OnRep_Health)   // OnRep_ được gọi TRÊN CLIENT khi giá trị mới tới nơi
float Health = 100.f;

UFUNCTION()
void OnRep_Health();                        // vd: cập nhật thanh máu trên UI

// 3) Đăng ký property (bắt buộc):  #include "Net/UnrealNetwork.h"
void AMyCharacter::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const {
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME(AMyCharacter, Health);
}
```

### RPC — gọi hàm "xuyên mạng"
| Specifier | Chạy ở đâu | Dùng cho |
|---|---|---|
| `UFUNCTION(Server, Reliable)` | trên server (client gọi) | client "xin" server làm gì đó (bắn, tương tác) |
| `UFUNCTION(Client, Reliable)` | trên client sở hữu | thông báo riêng cho 1 người chơi |
| `UFUNCTION(NetMulticast, Unreliable)` | server + mọi client | hiệu ứng cosmetic (tiếng nổ, particle) |

```cpp
UFUNCTION(Server, Reliable)
void ServerFire(FVector Target);

void AMyCharacter::ServerFire_Implementation(FVector Target) {   // thân RPC mang hậu tố _Implementation
    if (!HasAuthority()) return;   // phòng thủ: logic quyết định chỉ chạy nơi có quyền (server)
    /* trừ đạn, trace, gây damage... */
}
```

> **Nguyên tắc:** gameplay quan trọng (máu, đạn, điểm) do **server quyết**; client chỉ gửi *ý định* (RPC Server) và nhận *kết quả* (replicated property / OnRep). `Reliable` cho lệnh quan trọng, `Unreliable` cho hiệu ứng có thể rớt. Hệ prediction hoàn chỉnh cho ability: xem GAS ([Gameplay Ability System: tổng quan](#lesson-40)).

### Tự làm và tiêu chí hoàn thành

**Bài tự làm:** Vẽ đường input client → server quyết định → trạng thái truyền lại; phân loại dữ liệu và sự kiện.

**Tự kiểm tra:** Không tin dữ liệu client gửi; kiểm tra authority/ownership đúng object và xem đây là nền tảng trước bài mạng chuyên sâu.

---

<a id="appendix-a"></a>

## Cheat Sheet cú pháp

Cú pháp được tổ chức ở [Tra cứu theo chủ đề và thao tác](#lookup). Chọn đối tượng trước (vector, string, pointer, class hoặc Unreal), sau đó chọn việc muốn làm.

| Cần nhớ lại | Đi tới |
|---|---|
| `&`, `*`, `->` theo ngữ cảnh | [Pointer/reference](#lesson-6), [toán tử](#lesson-3) |
| `const` theo vị trí | [Const pointer](#lesson-6), [const correctness](#lesson-22) |
| `reserve` khác `resize` | [Container](#lesson-20) |
| `virtual`, `override`, `= 0` | [Đa hình](#lesson-14), [interface](#lesson-15) |
| Capture và tham số lambda | [Lambda](#lesson-18) |
| `static`, `namespace`, `inline` | [Static/linkage](#lesson-47), [hàm](#lesson-5) |

Bảng tra cứu giúp khôi phục ý nghĩa; mở bài được liên kết để xem hợp đồng, ví dụ và bài tự kiểm tra.

---

<a id="appendix-b"></a>

## STL vs UE — bảng đối chiếu nhanh

| Khái niệm | Standard C++ | Unreal Engine |
|---|---|---|
| Mảng động | `std::vector<T>` | `TArray<T>` |
| Hash map | `std::unordered_map<K,V>` | `TMap<K,V>` |
| Set | `std::unordered_set<T>` | `TSet<T>` |
| Chuỗi sửa được | `std::string` | `FString` |
| Chuỗi định danh | — | `FName` |
| Chuỗi hiển thị (i18n) | — | `FText` |
| unique ownership | `std::unique_ptr<T>` | `TUniquePtr<T>` |
| shared ownership | `std::shared_ptr<T>` | `TSharedPtr<T>` |
| weak ref | `std::weak_ptr<T>` | `TWeakPtr<T>` / `TWeakObjectPtr<T>` |
| UObject pointer | (n/a) | `TObjectPtr<T>` + `UPROPERTY()` |
| Optional | `std::optional<T>` | `TOptional<T>` |
| Function object | `std::function` | `TFunction` |
| Số nguyên | `int`, `int32_t` | `int32`, `int64`, `uint8` |
| Assert | `assert` | `check` / `ensure` / `verify` |
| Log | `std::cout` | `UE_LOG` |
| Tạo object | `new T()` / `make_unique` | `NewObject` / `SpawnActor` / `CreateDefaultSubobject` |

---

<a id="appendix-c"></a>

## Glossary (thuật ngữ)

- **Translation Unit:** Một file `.cpp` sau khi preprocess — đơn vị compiler dịch.
- **RAII:** Resource Acquisition Is Initialization — gắn vòng đời tài nguyên vào object.
- **UB (Undefined Behavior):** Hành vi không xác định theo chuẩn — nguồn bug nguy hiểm.
- **Lvalue / Rvalue:** Giá trị có tên/địa chỉ lâu dài (lvalue) vs giá trị tạm (rvalue).
- **Move Semantics:** Chuyển nhượng tài nguyên thay vì copy.
- **vtable:** Bảng hàm ảo, cơ chế cho dynamic dispatch (đa hình runtime).
- **POD (Plain Old Data):** Struct dữ liệu thuần, không có hành vi/constructor phức tạp.
- **Cache miss/hit:** CPU không/có tìm thấy dữ liệu trong cache — yếu tố hiệu năng lớn.
- **ECS:** Entity Component System — kiến trúc data-oriented cho game.
- **Reflection:** Khả năng chương trình "tự soi" cấu trúc của mình lúc runtime (UE có, C++ thuần không).
- **GC (Garbage Collection):** Tự động thu hồi bộ nhớ không dùng (UE dùng cho UObject).
- **ASC (AbilitySystemComponent):** Component trung tâm của GAS.
- **Delegate:** Hiện thực Observer pattern trong UE (đăng ký & phát callback).

---

<a id="appendix-d"></a>

## Tài nguyên học tập

**Sách:**
- *A Tour of C++* (Bjarne Stroustrup) — tổng quan Modern C++ nhanh, súc tích.
- *Effective Modern C++* (Scott Meyers) — best practices C++11/14, must-read.
- *Game Programming Patterns* (Robert Nystrom) — design patterns cho game, **đọc miễn phí online**, cực hay.
- *Game Engine Architecture* (Jason Gregory) — kiến trúc engine toàn diện.

**Online:**
- [cppreference.com](https://en.cppreference.com) — tài liệu chuẩn C++ chính xác nhất (bookmark ngay).
- [learncpp.com](https://www.learncpp.com) — tutorial C++ từ đầu, rất chi tiết & miễn phí.
- [Unreal Engine Documentation](https://dev.epicgames.com/documentation) — tài liệu UE chính thức.
- [Unreal C++ API Reference](https://dev.epicgames.com/documentation/en-us/unreal-engine/API) — tra cứu class/function UE.
- [Tom Looman's UE C++ resources](https://www.tomlooman.com) — hướng dẫn UE C++ thực chiến chất lượng cao.
- [Epic C++ Coding Standard](https://dev.epicgames.com/documentation/en-us/unreal-engine/epic-cplusplus-coding-standard-for-unreal-engine) — quy ước code chính thức của Epic; đọc trước khi viết code UE cho team.
- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines) — bộ guideline chuẩn mực của cộng đồng C++ (Stroustrup & Sutter chủ biên).
- [Compiler Explorer](https://godbolt.org) — chạy thử C++ online, xem assembly; tiện cho học & thí nghiệm nhanh.

**Lộ trình gợi ý cho người mới** *(bản chi tiết theo tuần & theo vai trò: Phụ lục H)*:
1. Nền tảng (Phần I–II): cú pháp, con trỏ, bộ nhớ, RAII, smart pointer.
2. OOP & Modern C++ (Phần III–IV): class, đa hình, STL, template, lambda.
3. Tư duy game (Phần V): game loop, patterns, cache, math.
4. Chuyên sâu engine (Phần VI): chọn Unreal và đi sâu, hoặc tự viết mini-engine với SDL/raylib.
5. Thực hành (Phần VII): áp dụng best practices vào dự án thật — học bằng cách làm.

---

<a id="appendix-e"></a>

## Bảng lỗi build & runtime thường gặp

Tra ngược từ thông báo lỗi. Mẹo số 1: luôn đọc **lỗi ĐẦU TIÊN** trong output — các lỗi phía sau thường chỉ là hệ quả dây chuyền.

| Thông báo (rút gọn) | Nguyên nhân thường gặp | Hướng xử lý |
|---|---|---|
| `C2065: 'X': undeclared identifier` | thiếu `#include`, sai chính tả, quên khai báo | include đúng header; kiểm tra scope/namespace |
| `C2143 / C2447: syntax error` | thiếu `;` — kinh điển nhất: **quên `;` sau `}` đóng class** | nhìn dòng NGAY TRÊN vị trí báo lỗi |
| `C4430: missing type specifier` | header được include phía trước bị lỗi / thiếu `;` → "lây" sang file này | sửa header bị include trước đó |
| `C2027: use of undefined type 'X'` | mới forward declare nhưng lại gọi hàm/truy cập member | `#include` đầy đủ trong `.cpp` ([Preprocessor, forward declaration và dependency](#lesson-41)) |
| `C2664: cannot convert argument` | sai kiểu tham số; thiếu `*`/`&`; (UE) quên `TEXT()` hoặc quên `*FString` | so lại chữ ký hàm; xem [Container và chuỗi Unreal](#lesson-35) |
| `LNK2019: unresolved external symbol` | khai báo nhưng chưa định nghĩa; `.cpp` chưa vào build; (UE) **thiếu module trong `.Build.cs`**; thiếu macro `MYGAME_API` khi dùng chéo module | viết định nghĩa; thêm module ([Bắt đầu Unreal Engine C++](#lesson-30)); thêm macro API |
| `LNK2005 / LNK1169: already defined` | nhiều định nghĩa external cùng symbol giữa các translation unit | giữ một định nghĩa trong `.cpp`, hoặc dùng `inline` đúng ODR; `#pragma once` chỉ ngăn include lặp trong một translation unit |
| `LNK1120: unresolved externals` | chỉ là dòng "tổng kết" của các LNK2019 phía trên | sửa từng LNK2019 |
| Runtime: `stack overflow` | đệ quy vô hạn; mảng khổng lồ trên stack | thêm điều kiện dừng; chuyển sang `std::vector`/heap ([Lifetime và các kiểu thời gian lưu trữ](#lesson-7)) |
| UE: `cannot open ... '.generated.h'` | class mới UHT chưa biết; `.generated.h` không phải include **cuối cùng** | Generate project files lại; kiểm tra thứ tự include ([UObject, reflection và macros](#lesson-31)) |
| UE: lỗi template khó hiểu tại `AddDynamic` | callback thiếu `UFUNCTION()` hoặc **sai chữ ký** | xem [Delegate và sự kiện](#lesson-37), [Timer, collision và tiện ích gameplay](#lesson-53) |
| UE: `Unrecognized type 'std::vector'` trong UPROPERTY | reflection không hỗ trợ kiểu STL | dùng `TArray`/`TMap`/`TSet` ([Container và chuỗi Unreal](#lesson-35)) |
| UE: crash khi PIE, call stack trỏ vào con trỏ | dereference `nullptr` / actor đã destroy; UObject bị GC vì quên UPROPERTY | `IsValid()` ([Undefined behavior và các bẫy thường gặp](#lesson-44)); UPROPERTY ([Garbage collection và vòng đời UObject](#lesson-32)) |
| UE: `Module 'X' could not be loaded` khi mở project | Binaries lỗi thời / không khớp phiên bản engine | đóng editor → build từ IDE; nặng hơn: xóa `Binaries/ Intermediate/` + Generate lại |
| UE: Live Coding báo thành công nhưng hành vi "ma" | thay đổi header/UPROPERTY qua Live Coding | đóng editor, build lại từ IDE ([Cài đặt môi trường C++17](#lesson-0)) |

> Build lỗi hàng loạt sau khi kéo code mới? Thử **Rebuild** module game; vẫn lỗi → xóa `Intermediate/` + Generate project files. Và luôn đọc lỗi **từ trên xuống**.

---

<a id="appendix-f"></a>

## Bài tập thực hành theo phần

Cách dùng: học xong mỗi phần → làm bài tập tương ứng → nộp qua **Pull Request** theo Git guide nội bộ để mentor review (đối chiếu checklist [Tự review và Final Assessment](#lesson-45)). Bài đánh dấu ★ là nâng cao, không bắt buộc.

### Phần I — Nền tảng
1. **HP Simulator (console):** nhập damage liên tục từ bàn phím, in trạng thái (`Healthy/Hurt/Dead`) qua hàm `void ApplyDamage(int& hp, int dmg)`. *Đạt khi:* dùng reference đúng, điều kiện rõ ràng, không có biến toàn cục.
2. **Wave Printer:** in danh sách quái theo wave bằng vòng lặp lồng nhau, dùng `continue`/`break` hợp lý. *Đạt khi:* giải thích được khi nào chọn `for` vs `while`.
3. **Pointer cơ bản:** viết `Enemy* FindWeakest(Enemy* arr, int count)` trả con trỏ tới quái yếu nhất (hoặc `nullptr` nếu mảng rỗng). *Đạt khi:* phía gọi kiểm tra null trước khi dùng.

### Phần II — Bộ nhớ
1. **ScopedTimer (RAII):** class đo thời gian bằng `<chrono>`: constructor lưu mốc, destructor in thời lượng. Dùng nó đo một vòng lặp nặng. *Đạt khi:* không có lệnh "stop" thủ công nào — RAII lo hết.
2. **Diệt new/delete:** nhận đoạn code có leak (mentor cung cấp) → refactor toàn bộ sang `unique_ptr`/`vector`. *Đạt khi:* chạy sạch dưới AddressSanitizer ([Debugging bằng bằng chứng](#lesson-43)).
3. ★ **MiniUniquePtr<T>:** tự cài unique_ptr tối giản (constructor, destructor, move, cấm copy). *Đạt khi:* giải thích được vì sao phải `delete` copy constructor.

### Phần III — OOP
1. **Shape đa hình:** interface `IShape` (pure virtual `Area()`), các lớp `Circle/Rect/Triangle`, tính tổng diện tích qua `vector<unique_ptr<IShape>>`. *Đạt khi:* có virtual destructor, mọi override có từ khóa `override`.
2. **Composition refactor:** chuyển cây kế thừa `Entity → Character → ArmedCharacter → ...` (code mẫu) thành `Character` + `WeaponComponent`/`HealthComponent`. *Đạt khi:* nêu được 2 lợi ích cụ thể sau refactor.

### Phần IV — Modern C++
1. **Inventory với STL:** `vector<Item>` + lambda: sort theo giá trị, lọc item hỏng (erase-remove), đếm theo loại (`count_if`), tính tổng trọng lượng (`accumulate`).
2. **Template `Clamp<T>`:** hoạt động với int/float, có test tại biên. ★ Thêm `static_assert` (hoặc concept) giới hạn kiểu số.
3. **State bằng enum class:** máy trạng thái cửa (`Closed/Open/Locked`) — cấm các chuyển trạng thái vô lý.

### Phần V — Game programming
1. **Console Game Loop:** vòng lặp có deltaTime thật (`<chrono>`), nhân vật "chạy" trên trục x với tốc độ không phụ thuộc tốc độ vòng lặp. *Đạt khi:* thay đổi sleep không làm đổi tốc độ di chuyển.
2. **Object Pool benchmark:** so `new/delete` 100k bullet vs dùng pool (đo bằng ScopedTimer của Phần II). *Đạt khi:* có số liệu + 2 câu kết luận.
3. ★ **AoS vs SoA:** update 1 triệu particle theo 2 cách, đo và giải thích kết quả bằng cache ([Đo hiệu năng, cache và tối ưu](#lesson-27)).

### Phần VI — Unreal C++
1. **Health Pickup:** actor có sphere overlap, hồi máu cho character rồi tự hủy ([Timer, collision và tiện ích gameplay](#lesson-53)). *Đạt khi:* callback là `UFUNCTION()`, có kiểm tra `Cast` trước khi dùng.
2. **HealthComponent tái sử dụng:** component + delegate `OnHealthChanged`/`OnDied` ([Delegate và sự kiện](#lesson-37)); gắn được cho cả Player lẫn quái. *Đạt khi:* HUD (hoặc `UE_LOG`) cập nhật qua delegate, không gọi trực tiếp.
3. **Enemy từ DataTable:** định nghĩa `FEnemyRow`, spawn wave đọc từ CSV import ([Data-driven design](#lesson-39)).
4. ★ **Interactable:** cửa + rương dùng chung một UINTERFACE ([Unreal Interfaces](#lesson-51)), gọi qua `Execute_`.

### Phần VII–VIII — Kỹ thuật
1. **Săn UB:** repo mẫu chứa 5 lỗi cài sẵn (dangling, out-of-bounds, quên UPROPERTY...) → tìm bằng sanitizer/debugger, sửa và mô tả từng lỗi trong PR.
2. **Enhanced Input:** thêm hành động `Dash` hoàn chỉnh (IA + IMC + bind + cooldown bằng timer — [Enhanced Input](#lesson-52), [Timer, collision và tiện ích gameplay](#lesson-53)).
3. **Test đầu tiên:** viết 3 automation test cho HealthComponent ([Unit testing và automation](#lesson-55)), chạy pass trong Session Frontend.

---

<a id="appendix-g"></a>

## Capstone Project — Mini Arena Shooter

Dự án "tốt nghiệp" khóa nội bộ: game bắn súng arena nhỏ (third-person hoặc top-down), làm cá nhân trong **1–2 tuần**, nộp qua repo riêng theo Git guide.

### Yêu cầu chức năng ↔ kiến thức áp dụng
| # | Yêu cầu | Mục liên quan |
|---|---|---|
| 1 | Character di chuyển/nhảy bằng **Enhanced Input** | [Enhanced Input](#lesson-52) |
| 2 | Vũ khí bắn bằng **LineTrace** (hoặc ★ projectile dùng **Object Pool**) | [Timer, collision và tiện ích gameplay](#lesson-53), [Design patterns trong gameplay](#lesson-29), [Đo hiệu năng, cache và tối ưu](#lesson-27) |
| 3 | **HealthComponent** dùng chung cho player & quái, phát **delegate** cập nhật HUD | [Actor, component và lifecycle](#lesson-33), [Delegate và sự kiện](#lesson-37) |
| 4 | Quái có **state machine** tối thiểu Idle → Chase → Attack | [Design patterns trong gameplay](#lesson-29) |
| 5 | Wave quái cấu hình bằng **DataTable** (CSV) + spawn theo **Timer** | [Data-driven design](#lesson-39), [Timer, collision và tiện ích gameplay](#lesson-53) |
| 6 | Ít nhất 1 vật thể **Interactable** (hồi máu/đạn) qua **UINTERFACE** | [Unreal Interfaces](#lesson-51) |
| 7 | **GameMode** xử lý thắng/thua; **GameState** giữ điểm/wave | [Gameplay Framework](#lesson-34) |
| 8 | Code sạch: naming, checklist, không warning mới, reference UObject được theo dõi đúng ownership | [Quy ước tên và phong cách code](#lesson-42), [Tự review và Final Assessment](#lesson-45), [Garbage collection và vòng đời UObject](#lesson-32) |
| 9 | ★ Tự chọn 1: replication cơ bản cho 2 người chơi (54) *hoặc* 1 ability bằng GAS (40) *hoặc* 3 automation test (55) | — |

### Sản phẩm nộp
- Repo với lịch sử commit sạch theo Git guide + **README** (cách chạy, mô tả kiến trúc ~10 dòng, ảnh/GIF).
- Video demo ≤ 2 phút.
- Buổi review 30 phút với mentor: demo + walkthrough code + trả lời câu hỏi.

### Rubric chấm (đạt: ≥ 70/100)
| Tiêu chí | Trọng số | Nhìn vào đâu |
|---|---|---|
| Chức năng chạy đúng | 40% | các yêu cầu 1–7 ở bảng trên hoạt động, không crash trong 5 phút chơi thử |
| Chất lượng code | 30% | checklist [Tự review và Final Assessment](#lesson-45), naming, không UB, không giữ raw reference có lifetime sai, dùng delegate thay coupling cứng |
| Kiến trúc & data-driven | 20% | component hóa hợp lý; số liệu nằm ở DataTable/DataAsset, không hard-code |
| Trình bày | 10% | README, video, trả lời trong buổi review |

---

<a id="appendix-h"></a>

## Lộ trình đào tạo & Onboarding Checklist

Các track dưới chọn trọng tâm trong cùng giáo trình; không tạo chương trình hoặc tiến độ riêng. Thời lượng là ước lượng theo thời gian thực hành, không phải hạn bắt buộc.

### Gameplay Programmer

| Chặng | Nội dung | Thực hành |
|---|---|---|
| Nền tảng | [Môi trường](#lesson-0), [biến](#lesson-3), [luồng điều khiển](#lesson-4), [hàm](#lesson-5), [container](#lesson-20), [pointer](#lesson-6) | Bài tập nền tảng; Healing |
| Thiết kế và ownership | [Class](#lesson-12), [lifetime](#lesson-7), [RAII](#lesson-9), [smart pointer](#lesson-10), [đa hình](#lesson-14) | Arena và bài tập ownership/OOP |
| C++ hiện đại | [Template](#lesson-19), [copy/move](#lesson-11), [lambda](#lesson-18), [thuật toán](#lesson-21), [cast](#lesson-46) | Inventory, AOE và bài tự làm theo chương |
| Kiểm chứng | [Build](#lesson-2), [dependency](#lesson-41), [debugging](#lesson-43), [Final Assessment](#lesson-45), [test](#lesson-55) | Arena Combat Console |
| Game và engine | [Game loop](#lesson-25), [DOD](#lesson-26), [profiling](#lesson-27), [Unreal](#lesson-30) và các bài kế tiếp | Bài tập engine và [Mini Arena Shooter](#appendix-g) |

Có thể dự kiến khoảng sáu tuần học đều, sau đó một đến hai tuần capstone; điều chỉnh theo các bài tự kiểm tra, không chỉ theo số trang đã mở.

### Technical Artist hoặc Designer chuyển sang code

Ưu tiên đọc-hiểu nền tảng, class, composition, game loop và API C++/Blueprint. Đi qua [Actor/component](#lesson-33), [reflection](#lesson-31), [Blueprint](#lesson-38), [dữ liệu](#lesson-39), [Enhanced Input](#lesson-52) và [timer/collision](#lesson-53). Capstone thu nhỏ: Pickup + HealthComponent + HUD + một Interactable. DOD, custom move và mạng có thể học sau khi nền tảng chắc; ước lượng khoảng bốn tuần cho phạm vi thu nhỏ.

### Engineer chuyển từ C#/Java/Python

Ưu tiên [lifetime](#lesson-7), [pointer/reference](#lesson-6), [RAII](#lesson-9), [copy/move](#lesson-11), [build/link](#lesson-2), [cast](#lesson-46) và [GC Unreal](#lesson-32). Tự làm bài kiểm tra để xác định chỗ đã vững rồi tham gia chặng game/engine; ước lượng ba đến bốn tuần tùy kinh nghiệm.

### Checklist bắt đầu dự án

- Build và chạy được Console App; khi tới chặng engine, build được project Unreal đúng phiên bản.
- Đọc [phong cách code](#lesson-42), [checklist review](#lesson-45) và tài liệu repository.
- Clone repository đúng quy ước, kiểm tra Git LFS/ignore khi có asset engine.
- Dùng breakpoint lần theo một luồng; gửi bài tự viết qua cơ chế review đang dùng.
- Thống nhất mốc kiểm tra với người hướng dẫn nếu có; việc mở tài liệu không thay thế thực hành.

Bài tập, tra cứu và mục lục đều dùng cùng ID chủ đề trong chương trình này.

---

<a id="lookup"></a>

## Tra cứu nhanh: cú pháp → ý nghĩa → bài học

Các dòng dưới là mẫu cú pháp, không phải một chương trình để ghép nguyên khối. `T`, `obj`, `items` và `...` là chỗ thay bằng kiểu, đối tượng hoặc phần thân thích hợp. Bảng gộp những cách viết cùng ý nghĩa; những ký hiệu đổi nghĩa theo ngữ cảnh được giữ riêng. Nhấn số bài để đọc giải thích và ví dụ đầy đủ.

### Cấu trúc chương trình, header và nhập/xuất

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `#include <iostream>` | Dùng khai báo nhập/xuất chuẩn như `std::cout`, `std::cin`. | [Cấu trúc nhiều file](#topic-cpp-06-5-06-5-1-cau-truc-nhieu-file) |
| `#include <string>` | Dùng `std::string`. | [Cấu trúc nhiều file](#topic-cpp-06-5-06-5-1-cau-truc-nhieu-file) |
| `#include <array>` | Dùng `std::array`. | [Cấu trúc nhiều file](#topic-cpp-06-5-06-5-1-cau-truc-nhieu-file) |
| `#include <vector>` | Dùng `std::vector`. | [Cấu trúc nhiều file](#topic-cpp-06-5-06-5-1-cau-truc-nhieu-file) |
| `#include <memory>` | Dùng `std::unique_ptr`, `std::make_unique`. | [Cấu trúc nhiều file](#topic-cpp-06-5-06-5-1-cau-truc-nhieu-file) |
| `#include "Arena.h"` | Include header của project; mỗi `.cpp` phải nhìn thấy khai báo nó sử dụng. Không include `.cpp` để thay việc build đúng. | [Cấu trúc nhiều file](#topic-cpp-06-5-06-5-1-cau-truc-nhieu-file) |
| `#pragma once` | Ngăn một header bị include lặp trong cùng translation unit; không chữa mọi multiple definition giữa nhiều `.cpp`. | [Cấu trúc nhiều file](#topic-cpp-06-5-06-5-1-cau-truc-nhieu-file) |
| `int main() { ... }` | Điểm bắt đầu của chương trình console C++ thông thường. | [Chương trình C++ tối thiểu](#topic-cpp-01-01-1-chuong-trinh-c-toi-thieu) |
| `return 0;` | Kết thúc `main` thành công; đi tới cuối `main` cũng ngầm trả 0. | [Chương trình C++ tối thiểu](#topic-cpp-01-01-1-chuong-trinh-c-toi-thieu) |
| `// ghi chú` | Comment một dòng. | [Chương trình C++ tối thiểu](#topic-cpp-01-01-1-chuong-trinh-c-toi-thieu) |
| `/* ghi chú */` | Comment có thể trải nhiều dòng; không lồng comment dạng này. | [Chương trình C++ tối thiểu](#topic-cpp-01-01-1-chuong-trinh-c-toi-thieu) |
| `;` | Kết thúc câu lệnh khi cú pháp yêu cầu; cũng cần sau định nghĩa struct/class và cuối `do-while`. | [Chương trình C++ tối thiểu](#topic-cpp-01-01-1-chuong-trinh-c-toi-thieu) |
| `{ ... }` | Khối lệnh và scope; trong khai báo còn có thể là phần khởi tạo. | [Chương trình C++ tối thiểu](#topic-cpp-01-01-1-chuong-trinh-c-toi-thieu) |
| `std::cout << value;` | Xuất giá trị ra luồng chuẩn. `<<` ở đây là phép xuất, khác dịch bit số nguyên. | [Nhập xuất dữ liệu](#topic-cpp-01-01-2-nhap-xuat-du-lieu) |
| `std::cin >> variable;` | Nhập có định dạng; đọc string dừng ở khoảng trắng. Kiểm tra trạng thái luồng nếu dữ liệu có thể sai. | [Nhập xuất dữ liệu](#topic-cpp-01-01-2-nhap-xuat-du-lieu) |
| `if (!(std::cin >> health)) { ... }` | Phát hiện lần đọc không thành công; không tiếp tục coi dữ liệu là hợp lệ. | [Nhập xuất dữ liệu](#topic-cpp-01-01-2-nhap-xuat-du-lieu) |
| `std::getline(std::cin, name);` | Đọc cả dòng, kể cả khoảng trắng. Sau `>>` cần xử lý dấu xuống dòng còn lại theo ý nghĩa đầu vào. | [Nhập sai, EOF và chuyển từ >> sang getline](#topic-cpp-05-nhap-sai-eof-va-chuyen-tu-sang-getline) |
| `std::cout << '\n';` hoặc `std::cout << "\n";` | In ký tự xuống dòng. | [Nhập xuất dữ liệu](#topic-cpp-01-01-2-nhap-xuat-du-lieu) |
| `std::cout << std::boolalpha << alive;` | In bool thành `true`/`false`; trạng thái định dạng giữ trên luồng cho các lần xuất sau. | [Nhập xuất dữ liệu](#topic-cpp-01-01-2-nhap-xuat-du-lieu) |
| `std::cout`, `CharacterClass::Mage` | `::` là toán tử phạm vi; tên bên trái giúp xác định tên bên phải thuộc đâu. | [enum class — trạng thái có tên](#topic-cpp-08-08-2-enum-class-trang-thai-co-ten) |

### Biến, kiểu, hằng và ép kiểu cơ bản

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `int hp = 100;` | Khai báo và khởi tạo số nguyên có dấu. Không giả định `int` có cùng độ rộng trên mọi nền tảng. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |
| `unsigned int flags = 0u;` | Số nguyên không dấu, thích hợp cho các ví dụ bitmask. Cẩn thận phép tính/so sánh trộn signed và unsigned. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |
| `float speed = 5.5f;` | Số thực kiểu float; hậu tố `f` tạo literal float. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |
| `double score = 1.25;` | Số thực kiểu double; literal thập phân này mặc định là double. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |
| `char rank = 'A';` | Một giá trị char; nháy đơn khác string literal `"A"`. Một char không bảo đảm chứa trọn ký tự Unicode. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |
| `bool alive = true;` | Giá trị logic `true` hoặc `false`. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |
| `std::string name = "Mage";` | Chuỗi gồm các phần tử char; cần `<string>`. | [std::string](#topic-cpp-07-07-4-std-string) |
| `int coins(20);` | Direct initialization: khởi tạo coins bằng 20. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |
| `int hp{100};` | Brace initialization; những chuyển đổi narrowing bị cấm, ví dụ `int hp{3.5};` không biên dịch. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |
| `const int maxHP = 100;` | Không được sửa qua biến này sau khởi tạo; const vẫn có thể nhận giá trị tính lúc chạy. | [const và constexpr](#topic-cpp-02-02-3-const-va-constexpr) |
| `constexpr int maxRounds = 5;` | Với biến constexpr, initializer phải thỏa quy tắc constant expression; không có nghĩa luôn nhanh hơn const. | [const và constexpr](#topic-cpp-02-02-3-const-va-constexpr) |
| `const int n = 3;` | Trong ví dụ này n dùng được làm kích thước `std::array<int, n>`; không phải mọi biến const đều dùng được như vậy. | [const và constexpr](#topic-cpp-02-02-3-const-va-constexpr) |
| `auto total = hp + 10;` | Compiler suy luận kiểu khi biên dịch; không đổi kiểu động khi chạy. | [auto — suy luận kiểu](#topic-cpp-02-02-4-auto-suy-luan-kieu) |
| `static_cast<float>(hp)` | Chuyển sang float; đặt cast trước phép chia nếu cần tránh chia nguyên. Vẫn phải tránh chia cho 0. | [Bốn named casts, bốn ý định khác nhau](#topic-cpp-14-5-14-5-2-bon-named-casts-bon-y-dinh-khac-nhau) |
| `static_cast<int>(75.9f)` | Chuyển về int, bỏ phần thập phân. Chỉ dùng khi giá trị sau cắt phần lẻ biểu diễn được bằng kiểu đích. | [Bốn named casts, bốn ý định khác nhau](#topic-cpp-14-5-14-5-2-bon-named-casts-bon-y-dinh-khac-nhau) |
| `std::size_t i = 0;` | Kiểu số nguyên không dấu thường dùng cho size/index; có trong `<cstddef>`. Dùng range-for khi không cần index. | [Khai báo và khởi tạo](#topic-cpp-02-02-2-khai-bao-va-khoi-tao) |

### Toán tử số học, logic và bitmask

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `+ - * / %` | Cộng, trừ, nhân, chia, dư số nguyên. Hai toán hạng nguyên cho phép chia nguyên; tránh chia/dư cho 0 và phép tính nguyên có dấu vượt miền biểu diễn. | [Số học và gán](#topic-cpp-03-03-1-so-hoc-va-gan) |
| `= += -= *= /= %=` | Gán hoặc tính rồi gán. `=` không phải phép so sánh. | [So sánh và logic](#topic-cpp-03-03-2-so-sanh-va-logic) |
| `== != < <= > >=` | So sánh các giá trị; các phép so sánh cơ bản trả bool. | [So sánh và logic](#topic-cpp-03-03-2-so-sanh-va-logic) |
| `a && b` | Logic AND; với toán tử dựng sẵn, chỉ đánh giá b nếu a đúng. | [Số học và gán](#topic-cpp-03-03-1-so-hoc-va-gan) |
| `a \|\| b` | Logic OR; với toán tử dựng sẵn, chỉ đánh giá b nếu a sai. | [Số học và gán](#topic-cpp-03-03-1-so-hoc-va-gan) |
| `!alive` | Phủ định logic. | [So sánh và logic](#topic-cpp-03-03-2-so-sanh-va-logic) |
| `++i`, `i++` | Tăng 1; tiền tố cho giá trị sau tăng, hậu tố cho giá trị cũ. Không viết biểu thức khó theo dõi bằng nhiều lần sửa cùng biến. | [Số học và gán](#topic-cpp-03-03-1-so-hoc-va-gan) |
| `--i`, `i--` | Giảm 1; tiền tố/hậu tố khác nhau khi dùng giá trị của biểu thức. | [Số học và gán](#topic-cpp-03-03-1-so-hoc-va-gan) |
| `condition ? whenTrue : whenFalse` | Toán tử điều kiện: đánh giá một trong hai nhánh theo điều kiện. | [Số học và gán](#topic-cpp-03-03-1-so-hoc-va-gan) |
| `a & b`, `a \| b`, `a ^ b`, `~a` | AND, OR, XOR, NOT theo bit của số nguyên; không có short-circuit. `^` không phải lũy thừa. | [Bitwise](#topic-cpp-03-03-4-bitwise) |
| `flags << n`, `flags >> n` | Dịch bit; ở bài cơ bản dùng kiểu unsigned, n không âm và nhỏ hơn độ rộng kiểu sau integer promotion. Không thay mọi nhân/chia bằng dịch bit. | [Bitwise](#topic-cpp-03-03-4-bitwise) |
| `&= \|= ^= <<= >>=` | Phép bitwise kết hợp gán; vẫn phải thỏa điều kiện về kiểu và số bit dịch. | [Bitwise](#topic-cpp-03-03-4-bitwise) |
| `abilities \|= CanJump;` | Bật bit cờ CanJump; các cờ độc lập nên dùng những bit riêng. | [Bitwise](#topic-cpp-03-03-4-bitwise) |
| `abilities &= ~CanShoot;` | Tắt bit cờ CanShoot; dùng kiểu mask tương thích, thường là unsigned. | [Bitwise](#topic-cpp-03-03-4-bitwise) |
| `abilities ^= CanJump;` | Đảo trạng thái bit cờ CanJump. | [Bitwise](#topic-cpp-03-03-4-bitwise) |
| `(abilities & CanJump) != 0` | Kiểm tra bit CanJump có bật không. Với mask nhiều bit, biểu thức này chỉ kiểm tra có ít nhất một bit chung. | [Bitwise](#topic-cpp-03-03-4-bitwise) |

### Điều kiện và vòng lặp

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `if (condition) { ... }` | Chạy khối khi điều kiện đúng. | [if / else if / else](#topic-cpp-04-04-1-if-else-if-else) |
| `else if (condition) { ... }` | Thử điều kiện kế tiếp khi các nhánh trước trong chuỗi chưa được chọn. | [if / else if / else](#topic-cpp-04-04-1-if-else-if-else) |
| `else { ... }` | Nhánh còn lại của if; một chuỗi if/else-if/else chỉ chọn một nhánh. | [if / else if / else](#topic-cpp-04-04-1-if-else-if-else) |
| `switch (x) { case 1: ...; break; default: ...; }` | Phân nhánh theo giá trị nguyên/enum; thiếu break có thể chạy tiếp nhánh dưới. | [switch / case / break / default](#topic-cpp-04-04-2-switch-case-break-default) |
| `for (int i = 0; i < n; ++i) { ... }` | Khởi tạo, kiểm tra điều kiện, chạy thân, cập nhật rồi lặp lại. | [for](#topic-cpp-05-05-1-for) |
| `while (condition) { ... }` | Kiểm tra trước; có thể không chạy lần nào. | [while](#topic-cpp-05-05-2-while) |
| `do { ... } while (condition);` | Chạy thân ít nhất một lần; cần dấu chấm phẩy cuối. | [do ... while](#topic-cpp-05-05-3-do-while) |
| `break;` | Thoát vòng lặp hoặc switch gần nhất chứa nó, không thoát toàn bộ mọi vòng lồng. | [break, continue](#topic-cpp-05-05-4-break-continue) |
| `continue;` | Bỏ phần thân còn lại của lượt lặp. Trong for vẫn chạy bước cập nhật trước lần kiểm tra kế tiếp. | [break, continue](#topic-cpp-05-05-4-break-continue) |
| `for (int item : inventory) { ... }` | Duyệt từng phần tử int bằng giá trị; sửa item không sửa phần tử gốc. | [Duyệt Player theo mục đích](#topic-cpp-08-duyet-player-theo-muc-dich) |
| `for (Player& p : players) { ... }` | Duyệt bằng reference để sửa phần tử Player gốc. | [Duyệt Player theo mục đích](#topic-cpp-08-duyet-player-theo-muc-dich) |
| `for (const auto& item : items) { ... }` | Duyệt không tạo bản sao phần tử, không sửa qua item; phần tử phải còn sống khi dùng reference. | [Duyệt Player theo mục đích](#topic-cpp-08-duyet-player-theo-muc-dich) |

### Hàm, tham số và overload

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `int Add(int a, int b);` | Declaration/prototype: công bố tên, kiểu tham số và kiểu trả về trước khi gọi. | [Khai báo, định nghĩa, gọi](#topic-cpp-06-06-1-khai-bao-dinh-nghia-goi) |
| `int Add(int a, int b) { return a + b; }` | Definition: cung cấp thân hàm; ví dụ cộng int giả định tổng còn biểu diễn được. | [Khai báo, định nghĩa, gọi](#topic-cpp-06-06-1-khai-bao-dinh-nghia-goi) |
| `Add(3, 5)` | Gọi hàm với hai đối số. | [Khai báo, định nghĩa, gọi](#topic-cpp-06-06-1-khai-bao-dinh-nghia-goi) |
| `void Print() { ... }` | Hàm không trả giá trị. | [Khai báo, định nghĩa, gọi](#topic-cpp-06-06-1-khai-bao-dinh-nghia-goi) |
| `return value;` | Trả giá trị và kết thúc lời gọi hiện tại. | [Khai báo, định nghĩa, gọi](#topic-cpp-06-06-1-khai-bao-dinh-nghia-goi) |
| `return;` | Thoát sớm một hàm void. | [Khai báo, định nghĩa, gọi](#topic-cpp-06-06-1-khai-bao-dinh-nghia-goi) |
| `void DamageCopy(int hp);` | Tham số int là đối tượng riêng chứa giá trị sao chép; thay hp trong hàm không đổi biến gọi. | [Pass by value và pass by reference](#topic-cpp-06-06-2-pass-by-value-va-pass-by-reference) |
| `void DamageRef(int& hp);` | Tham số reference: có thể sửa biến gốc. | [Pass by value và pass by reference](#topic-cpp-06-06-2-pass-by-value-va-pass-by-reference) |
| `void PrintPlayer(const Player& p);` | Đọc Player qua reference, không copy toàn bộ Player, không sửa qua p. | [Constructor và member initializer list](#topic-cpp-11-11-2-constructor-va-member-initializer-list) |
| `void HealPlayer(Player* p, int amount);` | Nhận pointer; quy định rõ có chấp nhận null không và không ngầm chuyển ownership. | [Constructor và member initializer list](#topic-cpp-11-11-2-constructor-va-member-initializer-list) |
| `int Add(int, int);` và `float Add(float, float);` | Overload: cùng tên, khác danh sách tham số phù hợp. Chỉ khác kiểu trả về không đủ. | [Khai báo, định nghĩa, gọi](#topic-cpp-06-06-1-khai-bao-dinh-nghia-goi) |

### Array, vector và string

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `int hpRaw[3] = {100, 80, 60};` | Mảng C-style ba int; index hợp lệ là 0, 1, 2. `int hpRaw[3]{};` khởi tạo cả ba bằng 0. | [C-style array](#topic-cpp-07-07-1-c-style-array) |
| `std::array<int, 3> hp{100, 80, 60};` | Container cố định ba int trong chính object. Một cặp ngoặc hợp lệ trong ví dụ C++17 này; không đồng nghĩa array luôn ở stack. | [std::array<T, N> — kích thước cố định](#topic-cpp-07-07-2-std-array-t-n-kich-thuoc-co-dinh) |
| `std::vector<int> values{10, 20};` | Vector có hai phần tử; số phần tử có thể đổi. Khác `std::vector<int> values(10, 20)` là mười phần tử bằng 20. | [std::vector<T> — thay đổi kích thước](#topic-cpp-07-07-3-std-vector-t-thay-doi-kich-thuoc) |
| `values.push_back(30);` | Thêm cuối; có thể realloc và làm pointer/reference/iterator vào phần tử cũ mất hiệu lực. | [std::vector<T> — thay đổi kích thước](#topic-cpp-07-07-3-std-vector-t-thay-doi-kich-thuoc) |
| `values.pop_back();` | Xóa cuối; chỉ gọi khi vector không rỗng. | [std::vector<T> — thay đổi kích thước](#topic-cpp-07-07-3-std-vector-t-thay-doi-kich-thuoc) |
| `values.size()` | Số phần tử hiện có, kiểu unsigned `size_type`, thường là `std::size_t`. | [Size, capacity, reserve và resize](#topic-cpp-07-size-capacity-reserve-va-resize) |
| `values.empty()` | Kiểm tra có rỗng không. | [std::vector<T> — thay đổi kích thước](#topic-cpp-07-07-3-std-vector-t-thay-doi-kich-thuoc) |
| `values.clear();` | Xóa mọi phần tử; không bảo đảm trả capacity về 0. | [std::vector<T> — thay đổi kích thước](#topic-cpp-07-07-3-std-vector-t-thay-doi-kich-thuoc) |
| `values[i]` | Truy cập phần tử không kiểm tra biên; yêu cầu `i < values.size()`. | [std::vector<T> — thay đổi kích thước](#topic-cpp-07-07-3-std-vector-t-thay-doi-kich-thuoc) |
| `values.at(i)` | Truy cập có kiểm tra biên; sai index ném `std::out_of_range`. | [std::vector<T> — thay đổi kích thước](#topic-cpp-07-07-3-std-vector-t-thay-doi-kich-thuoc) |
| `values.capacity()` | Số phần tử có thể chứa mà chưa cần realloc; không phải số phần tử đã tồn tại. | [Size, capacity, reserve và resize](#topic-cpp-07-size-capacity-reserve-va-resize) |
| `values.reserve(n);` | Yêu cầu capacity ít nhất n, không tăng size; nếu realloc thì các địa chỉ/reference/iterator cũ mất hiệu lực. | [Size, capacity, reserve và resize](#topic-cpp-07-size-capacity-reserve-va-resize) |
| `values.resize(n);` | Đổi size; xóa phần dư hoặc tạo thêm phần tử. Không dùng reserve như thể nó đã tạo phần tử để truy cập bằng index. | [Size, capacity, reserve và resize](#topic-cpp-07-size-capacity-reserve-va-resize) |
| `name += " Bros";` | Nối thêm văn bản vào string. | [std::string](#topic-cpp-07-07-4-std-string) |
| `name.size()`, `name.length()` | Cùng trả số phần tử char/code unit; không nhất thiết là số ký tự Unicode nhìn thấy. | [std::string](#topic-cpp-07-07-4-std-string) |
| `name.empty()` | Kiểm tra chuỗi rỗng. | [std::string](#topic-cpp-07-07-4-std-string) |
| `name[0]` | Đọc ký tự đầu thực sự khi `!name.empty()`; không dùng index vượt nội dung để lấy ký tự. | [std::string](#topic-cpp-07-07-4-std-string) |
| `name.find("Bros")` | Trả vị trí tìm thấy, hoặc `std::string::npos` nếu không tìm thấy; không kiểm tra kết quả chỉ bằng if(pos). | [std::string](#topic-cpp-07-07-4-std-string) |
| `pos != std::string::npos` | Kiểm tra kết quả find đã tìm thấy chuỗi con. Vị trí 0 là kết quả hợp lệ. | [std::string](#topic-cpp-07-07-4-std-string) |
| `name.substr(pos, count)` | Lấy tối đa count phần tử char từ pos; `pos > name.size()` ném `std::out_of_range`. | [std::string](#topic-cpp-07-07-4-std-string) |

### Struct, enum, reference và pointer

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `struct Player { int health; };` | Tạo kiểu gộp dữ liệu; struct cũng có thể có constructor/method. Thành viên mặc định public. | [Class và quyền truy cập](#topic-cpp-11-11-1-class-va-quyen-truy-cap) |
| `Player player{100};` | Tạo object từ struct một-member của dòng trên; initializer phải khớp định nghĩa kiểu thực tế. | [Class và quyền truy cập](#topic-cpp-11-11-1-class-va-quyen-truy-cap) |
| `enum class State { Idle, Dead };` | Kiểu liệt kê có phạm vi tên; không tự chuyển ngầm thành int như enum không scoped. | [enum class — trạng thái có tên](#topic-cpp-08-08-2-enum-class-trang-thai-co-ten) |
| `State state = State::Idle;` | Chọn giá trị enum thông qua phạm vi State. | [enum class — trạng thái có tên](#topic-cpp-08-08-2-enum-class-trang-thai-co-ten) |
| `player.health` | Truy cập member qua object hoặc reference; phải có quyền truy cập. | [Class và quyền truy cập](#topic-cpp-11-11-1-class-va-quyen-truy-cap) |
| `int& ref = hp;` | ref là bí danh của hp, cần đối tượng còn sống; không rebind. | [Reference](#topic-cpp-08-08-3-reference) |
| `const Player& ref = player;` | Reference chỉ đọc qua ref; không kéo dài mọi lifetime một cách tự động. | [const và constexpr](#topic-cpp-02-02-3-const-va-constexpr) |
| `ref = b;` | Gán vào đối tượng ref đang tham chiếu; không đổi đích reference. | [Reference](#topic-cpp-08-08-3-reference) |
| `Player* ptr = &player;` | Khai báo pointer lưu địa chỉ player; dấu `*` ở khai báo chỉ kiểu pointer. | [Giá trị, địa chỉ, dereference](#topic-cpp-09-09-1-gia-tri-dia-chi-dereference) |
| `&player` | Toán tử lấy địa chỉ object; khác dấu `&` trong khai báo reference hoặc bitwise AND. | [Giá trị, địa chỉ, dereference](#topic-cpp-09-09-1-gia-tri-dia-chi-dereference) |
| `ptr = &other;` | Đổi địa chỉ lưu trong pointer; không chuyển quyền sở hữu chỉ nhờ phép gán này. | [Giá trị, địa chỉ, dereference](#topic-cpp-09-09-1-gia-tri-dia-chi-dereference) |
| `*ptr` | Dereference để truy cập object; pointer phải có hiệu lực và object còn sống. | [Giá trị, địa chỉ, dereference](#topic-cpp-09-09-1-gia-tri-dia-chi-dereference) |
| `ptr->health`, `(*ptr).health` | Hai cách tương đương truy cập member qua pointer hợp lệ và đúng quyền truy cập. | [Giá trị, địa chỉ, dereference](#topic-cpp-09-09-1-gia-tri-dia-chi-dereference) |
| `nullptr` | Giá trị con trỏ null; ưu tiên thay NULL/0 trong code pointer hiện đại. | [nullptr và kiểm tra trước khi dùng](#topic-cpp-09-09-2-nullptr-va-kiem-tra-truoc-khi-dung) |
| `if (ptr != nullptr) { ... }` | Chặn trường hợp pointer rỗng trước truy cập; không chứng minh pointer không dangling. | [nullptr và kiểm tra trước khi dùng](#topic-cpp-09-09-2-nullptr-va-kiem-tra-truoc-khi-dung) |
| `ptr = nullptr;` với `T* ptr` | Chỉ đổi raw pointer thành null, không hủy object cũ; có thể làm mất dấu owner và leak nếu dùng sai. | [nullptr và kiểm tra trước khi dùng](#topic-cpp-09-09-2-nullptr-va-kiem-tra-truoc-khi-dung) |

### Bộ nhớ, RAII và unique_ptr

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `new T{...}` | Tạo object có dynamic storage duration; cần cơ chế ownership/giải phóng phù hợp. | [Ghép đúng new, delete, new[], delete[]](#topic-cpp-10-10-2-ghep-dung-new-delete-new-delete) |
| `delete ptr;` | Hủy object và giải phóng vùng nhớ của single-object new phù hợp; null được phép. Không delete pointer mượn, pointer đã delete hoặc bộ nhớ do unique_ptr quản lý. | [Ghép đúng new, delete, new[], delete[]](#topic-cpp-10-10-2-ghep-dung-new-delete-new-delete) |
| `new int[5]{}` | Cấp phát mảng năm int được zero-initialize; nếu tự quản phải ghép với delete[]. | [Ghép đúng new, delete, new[], delete[]](#topic-cpp-10-10-2-ghep-dung-new-delete-new-delete) |
| `delete[] array;` | Hủy/giải phóng mảng do new[] phù hợp; không trộn delete và delete[]. | [Ghép đúng new, delete, new[], delete[]](#topic-cpp-10-10-2-ghep-dung-new-delete-new-delete) |
| `std::unique_ptr<T>` | Owner độc quyền; không copy được. Tài nguyên được giải phóng khi owner hủy hoặc thay quyền sở hữu thích hợp. | [Ví dụ chạy được — owner và pointer mượn](#topic-cpp-10-10-5-vi-du-chay-duoc-owner-va-pointer-muon) |
| `std::make_unique<T>(args...)` | Tạo T và unique_ptr quản lý nó; đối số phải khớp constructor/khả năng khởi tạo của T. | [Ví dụ chạy được — owner và pointer mượn](#topic-cpp-10-10-5-vi-du-chay-duoc-owner-va-pointer-muon) |
| `owner->Method()`, `*owner` | Truy cập object qua unique_ptr đang sở hữu object hợp lệ; owner rỗng thì không được dereference. | [Ví dụ chạy được — owner và pointer mượn](#topic-cpp-10-10-5-vi-du-chay-duoc-owner-va-pointer-muon) |
| `owner.get()` | Lấy raw pointer mượn; không chuyển ownership, không được tự delete. Khi owner rỗng kết quả là null. | [Ví dụ chạy được — owner và pointer mượn](#topic-cpp-10-10-5-vi-du-chay-duoc-owner-va-pointer-muon) |
| `owner = nullptr;` với `std::unique_ptr<T> owner` | Hủy object đang sở hữu qua deleter rồi làm owner rỗng; khác phép gán null cho raw pointer. Các alias tới object cũ không còn dùng được. | [Ví dụ chạy được — owner và pointer mượn](#topic-cpp-10-10-5-vi-du-chay-duoc-owner-va-pointer-muon) |
| `{ auto owner = std::make_unique<int>(42); }` | RAII: khi owner cục bộ ra khỏi scope, nó bị hủy và giải phóng int được quản lý. RAII dựa vào lifetime, không chỉ áp dụng cho object trên stack. | [Ví dụ chạy được — owner và pointer mượn](#topic-cpp-10-10-5-vi-du-chay-duoc-owner-va-pointer-muon) |

### Class, constructor, const method và đa hình

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `class Player { ... };` | Kiểu có dữ liệu và hàm thành viên; thành viên mặc định private. | [Class và quyền truy cập](#topic-cpp-11-11-1-class-va-quyen-truy-cap) |
| `public:` | Interface mà code bên ngoài được phép truy cập. | [Class và quyền truy cập](#topic-cpp-11-11-1-class-va-quyen-truy-cap) |
| `private:` | Thành viên chỉ truy cập trực tiếp theo quyền của chính class và friend; class con không tự được truy cập. | [Class và quyền truy cập](#topic-cpp-11-11-1-class-va-quyen-truy-cap) |
| `protected:` | Cho phép class con truy cập theo các quy tắc access; không có nghĩa public cho mọi nơi. Phần chi tiết học sau. | [Có virtual: chọn hành vi theo đối tượng thực](#topic-cpp-12-1-12-1-3-co-virtual-chon-hanh-vi-theo-doi-tuong-thuc) |
| `explicit Player(int hp);` | Constructor một tham số được explicit để tránh chuyển ngầm từ int thành Player; vẫn tạo trực tiếp được. | [Constructor và member initializer list](#topic-cpp-11-11-2-constructor-va-member-initializer-list) |
| `Player::Player(int hp) : health(hp) {}` | Định nghĩa constructor ngoài class; initializer list khởi tạo member trước thân hàm. Member thực sự được khởi tạo theo thứ tự khai báo. | [Constructor và member initializer list](#topic-cpp-11-11-2-constructor-va-member-initializer-list) |
| `void Player::TakeDamage(int damage) { ... }` | Cú pháp định nghĩa method ngoài class, sau khi đã khai báo method phù hợp trong class. `Player::TakeDamage()` đơn lẻ chưa phải định nghĩa đầy đủ. | [Class và quyền truy cập](#topic-cpp-11-11-1-class-va-quyen-truy-cap) |
| `int GetHealth() const;` | Method có thể gọi trên const object, không sửa member không mutable qua this. Không phải mọi dữ liệu bên ngoài đều trở nên bất biến. | [Method, getter và const](#topic-cpp-11-11-3-method-getter-va-const) |
| `this->name = name;` | Phân biệt member của object hiện tại với tham số cùng tên; this có trong method không static. | [Class và quyền truy cập](#topic-cpp-11-11-1-class-va-quyen-truy-cap) |
| `~Player()` | Tên destructor; không có kiểu trả về hay tham số. Destructor chạy khi object kết thúc lifetime theo quy tắc tương ứng. | [Constructor và member initializer list](#topic-cpp-11-11-2-constructor-va-member-initializer-list) |
| `~Player() = default;` | Yêu cầu định nghĩa destructor mặc định; không có nghĩa tự delete mọi raw pointer member. | [Constructor và member initializer list](#topic-cpp-11-11-2-constructor-va-member-initializer-list) |
| `class Dog : public Animal { ... };` | Kế thừa công khai; dùng khi Dog là một loại Animal theo interface/ý nghĩa thiết kế. | [Có virtual: chọn hành vi theo đối tượng thực](#topic-cpp-12-1-12-1-3-co-virtual-chon-hanh-vi-theo-doi-tuong-thuc) |
| `virtual void Speak() const;` | Cho phép dynamic dispatch; lời gọi qua base pointer/reference có thể chọn override theo object thực tế. | [Có virtual: chọn hành vi theo đối tượng thực](#topic-cpp-12-1-12-1-3-co-virtual-chon-hanh-vi-theo-doi-tuong-thuc) |
| `void Speak() const override;` | Compiler kiểm tra đang ghi đè method virtual đúng; khác overload. | [Có virtual: chọn hành vi theo đối tượng thực](#topic-cpp-12-1-12-1-3-co-virtual-chon-hanh-vi-theo-doi-tuong-thuc) |
| `Animal& base = dog;` hoặc `Animal* base = &dog;` | Tham chiếu/con trỏ lớp cha tới object con còn sống; virtual dispatch giữ hành vi đa hình. | [Có virtual: chọn hành vi theo đối tượng thực](#topic-cpp-12-1-12-1-3-co-virtual-chon-hanh-vi-theo-doi-tuong-thuc) |
| `virtual ~Animal() = default;` | Trong thiết kế xóa derived qua base pointer, destructor base virtual cho phép hủy đúng phần derived rồi base. | [Destructor và = default](#topic-cpp-12-2-12-2-2-destructor-va-default) |

### Templates cơ bản

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `template <typename T>` | Mở đầu template có tham số kiểu T; T phải hỗ trợ các thao tác phần thân thực sự dùng. | [Function template: một khuôn hàm, nhiều kiểu phù hợp](#topic-cpp-13-13-1-function-template-mot-khuon-ham-nhieu-kieu-phu-hop) |
| `T GetMax(T a, T b) { return a > b ? a : b; }` | Thân function template GetMax sau dòng template; cần phép so sánh và trả giá trị phù hợp cho T. | [Function template: một khuôn hàm, nhiều kiểu phù hợp](#topic-cpp-13-13-1-function-template-mot-khuon-ham-nhieu-kieu-phu-hop) |
| `GetMax(10, 20)` | Suy luận T là int từ hai đối số. `GetMax(10, 5.5f)` không suy ra cùng một T theo mẫu cơ bản này. | [Function template: một khuôn hàm, nhiều kiểu phù hợp](#topic-cpp-13-13-1-function-template-mot-khuon-ham-nhieu-kieu-phu-hop) |
| `GetMax<float>(10, 5.5f)` | Chỉ rõ T=float; đối số 10 được chuyển sang float. | [Function template: một khuôn hàm, nhiều kiểu phù hợp](#topic-cpp-13-13-1-function-template-mot-khuon-ham-nhieu-kieu-phu-hop) |
| `template <typename T> class Stat { ... };` | Class template; `Stat<int>` và `Stat<float>` là những kiểu cụ thể khác nhau. | [Class template](#topic-cpp-13-13-2-class-template) |
| `std::vector<int>`, `std::array<float, 3>` | Ví dụ class template chuẩn; array có tham số kiểu float và tham số giá trị hằng 3. | [Function template: một khuôn hàm, nhiều kiểu phù hợp](#topic-cpp-13-13-1-function-template-mot-khuon-ham-nhieu-kieu-phu-hop) |
| `Definition template trong GameMath.h` | Đặt định nghĩa template ở header giúp compiler thấy definition ở nơi cần instantiation; các ngoại lệ học sau. | [Template thường được định nghĩa trong header](#topic-cpp-13-13-4-template-thuong-duoc-dinh-nghia-trong-header) |
| `ClampValue<int>(value, low, high)` | Gọi hàm luyện tập với T=int; cần low <= high, kiểm thử cả trong/ngoài/đúng biên. | [Function template: một khuôn hàm, nhiều kiểu phù hợp](#topic-cpp-13-13-1-function-template-mot-khuon-ham-nhieu-kieu-phu-hop) |
| `std::clamp(value, low, high)` | Hàm C++17 trong `<algorithm>`; cần khoảng hợp lệ. Hàm trả const reference: ở bài cơ bản nhận kết quả bằng giá trị để tránh giữ reference tới temporary. | [Hợp đồng của ClampValue và std::clamp](#topic-cpp-13-13-5-hop-dong-cua-clampvalue-va-std-clamp) |

### Phím Visual Studio

Những phím dưới theo mapping thông dụng. Đọc [Bài 17](#cpp-17) để hiểu thao tác, rồi dùng [17.1](#cpp-17-1) để tự kiểm tra bằng debugger; mở bảng phím không tự đánh dấu hoàn thành bài.

| Phím | Ý nghĩa | Bài học |
|---|---|---|
| `Ctrl + F5` | Chạy không gắn debugger. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `F5` | Bắt đầu hoặc tiếp tục chạy với debugger theo trạng thái hiện tại. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `Ctrl + Shift + B` | Build Solution. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `Ctrl + Alt + L` | Mở Solution Explorer. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `F9` | Đặt/bỏ breakpoint tại dòng hiện tại. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `F10` | Step Over: chạy tới bước kế, không chủ động đi vào hàm được gọi; hàm vẫn thực thi. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `F11` | Step Into: bước vào hàm khi debugger có thể theo dõi. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `Shift + F11` | Step Out: chạy tới khi ra khỏi hàm hiện tại. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `Shift + F5` | Kết thúc phiên debugging. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `Watch: health - damage` | Theo dõi biểu thức cụ thể khi dừng đúng frame; ưu tiên biểu thức không làm thay state. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |
| `Call Stack` | Xem chuỗi lời gọi đang hoạt động; chọn frame để xem context, không phải chạy thêm code hay xem toàn bộ lịch sử. | [Phím tắt theo thao tác thực tế](#topic-cpp-17-17-2-phim-tat-theo-thao-tac-thuc-te) |

### Static, const pointer và namespace

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `static int calls = 0;` trong hàm | Giữ giá trị giữa các lần gọi; tên có scope cục bộ. Khởi tạo được bảo vệ không đồng nghĩa mọi lần cập nhật đều thread-safe. | [Cùng từ khóa static, ý nghĩa phụ thuộc vị trí](#topic-cpp-14-14-1-cung-tu-khoa-static-y-nghia-phu-thuoc-vi-tri) |
| `static int created;` trong class | Khai báo dữ liệu chung của class, không phải một bản cho mỗi object. | [Cùng từ khóa static, ý nghĩa phụ thuộc vị trí](#topic-cpp-14-14-1-cung-tu-khoa-static-y-nghia-phu-thuoc-vi-tri) |
| `int EnemyTracker::created = 0;` | Định nghĩa static data member theo cách truyền thống; đặt đúng một định nghĩa trong cpp. | [Cùng từ khóa static, ý nghĩa phụ thuộc vị trí](#topic-cpp-14-14-1-cung-tu-khoa-static-y-nghia-phu-thuoc-vi-tri) |
| `static int GetCreated();` | Method static không có this; không tự chọn dữ liệu của một object cụ thể. | [Cùng từ khóa static, ý nghĩa phụ thuộc vị trí](#topic-cpp-14-14-1-cung-tu-khoa-static-y-nghia-phu-thuoc-vi-tri) |
| `EnemyTracker::GetCreated()` | Gọi static method thông qua tên class. | [Cùng từ khóa static, ý nghĩa phụ thuộc vị trí](#topic-cpp-14-14-1-cung-tu-khoa-static-y-nghia-phu-thuoc-vi-tri) |
| `inline static int count = 0;` | C++17: định nghĩa static data member ngay trong class; không thêm một định nghĩa thông thường thứ hai. | [Cùng từ khóa static, ý nghĩa phụ thuộc vị trí](#topic-cpp-14-14-1-cung-tu-khoa-static-y-nghia-phu-thuoc-vi-tri) |
| `const int* p` | Pointer có thể đổi đích; không sửa int qua đường truy cập p. | [Const bảo vệ đường truy cập nào?](#topic-cpp-14-14-3-const-bao-ve-duong-truy-cap-nao) |
| `int* const p = &hp` | Pointer cố định đích sau khởi tạo; có thể sửa hp qua p nếu object hợp lệ. | [Const bảo vệ đường truy cập nào?](#topic-cpp-14-14-3-const-bao-ve-duong-truy-cap-nao) |
| `const int* const p = &hp` | Không đổi địa chỉ lưu trong p và không sửa int qua p. | [Const bảo vệ đường truy cập nào?](#topic-cpp-14-14-3-const-bao-ve-duong-truy-cap-nao) |
| `namespace GameConfig { ... }` | Nhóm tên theo namespace; không tạo object và không tự khiến mọi biến là const. | [Namespace và phạm vi tên](#topic-cpp-14-14-4-namespace-va-pham-vi-ten) |
| `GameConfig::MaxEnemies` | Truy cập tên MaxEnemies thuộc phạm vi GameConfig. | [Cùng từ khóa static, ý nghĩa phụ thuộc vị trí](#topic-cpp-14-14-1-cung-tu-khoa-static-y-nghia-phu-thuoc-vi-tri) |

### Named casts và giới hạn chuyển đổi

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `static_cast<int>(12.8f)` | Khi giá trị biểu diễn được, bỏ phần lẻ về 0; không phải làm tròn gần nhất hay kiểm tra vượt miền. | [Bốn named casts, bốn ý định khác nhau](#topic-cpp-14-5-14-5-2-bon-named-casts-bon-y-dinh-khac-nhau) |
| `dynamic_cast<Boss*>(base)` | Kiểm tra downcast runtime trong hierarchy phù hợp; kết quả null khi thất bại. Đầu vào phải còn hợp lệ. | [Bốn named casts, bốn ý định khác nhau](#topic-cpp-14-5-14-5-2-bon-named-casts-bon-y-dinh-khac-nhau) |
| `dynamic_cast<Boss&>(base)` | Dạng reference; thất bại ném std::bad_cast, không trả nullptr. | [Bốn named casts, bốn ý định khác nhau](#topic-cpp-14-5-14-5-2-bon-named-casts-bon-y-dinh-khac-nhau) |
| `const_cast<T*>(p)` | Thay cv-qualification theo quy tắc cho phép; sửa object vốn thật sự const là UB. | [Bốn named casts, bốn ý định khác nhau](#topic-cpp-14-5-14-5-2-bon-named-casts-bon-y-dinh-khac-nhau) |
| `reinterpret_cast<T*>(p)` | Chuyển đổi mức thấp được phép về cú pháp không đồng nghĩa có thể dereference an toàn. | [Bốn named casts, bốn ý định khác nhau](#topic-cpp-14-5-14-5-2-bon-named-casts-bon-y-dinh-khac-nhau) |
| `Health hp{100};` với explicit constructor | Direct initialization dùng được constructor explicit; không đồng nghĩa có implicit conversion từ int. | [Explicit không phải một phép cast](#topic-cpp-14-5-14-5-4-explicit-khong-phai-mot-phep-cast) |

### Preprocessor và dependency

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `#define ENABLE_COMBAT_LOG 0` | Định nghĩa macro thay văn bản; macro không phải biến C++ có kiểu. | [Tiền xử lý diễn ra trước compiler C++](#topic-cpp-15-15-1-tien-xu-ly-dien-ra-truoc-compiler-c) |
| `#if ENABLE_COMBAT_LOG` | Giữ nhánh khi biểu thức tiền xử lý khác 0; khác if runtime. | [Tiền xử lý diễn ra trước compiler C++](#topic-cpp-15-15-1-tien-xu-ly-dien-ra-truoc-compiler-c) |
| `#ifdef ENABLE_COMBAT_LOG` | Kiểm tra macro tồn tại; vẫn đúng khi macro đã được định nghĩa bằng 0. | [Tiền xử lý diễn ra trước compiler C++](#topic-cpp-15-15-1-tien-xu-ly-dien-ra-truoc-compiler-c) |
| `#ifndef PROJECT_PLAYER_H` | Kiểm tra macro chưa được định nghĩa; dùng cùng define/endif để làm header guard. | [Tiền xử lý diễn ra trước compiler C++](#topic-cpp-15-15-1-tien-xu-ly-dien-ra-truoc-compiler-c) |
| `#endif` | Kết thúc nhóm điều kiện tiền xử lý. | [Tiền xử lý diễn ra trước compiler C++](#topic-cpp-15-15-1-tien-xu-ly-dien-ra-truoc-compiler-c) |
| `class Player;` | Forward declaration: biết Player là class, chưa có định nghĩa đầy đủ. | [Khai báo một kiểu tồn tại khác với biết cấu trúc kiểu](#topic-cpp-15-15-2-khai-bao-mot-kieu-ton-tai-khac-voi-biet-cau-truc-kieu) |
| `void Attack(Player& target) const;` | Khai báo method nhận reference có thể chỉ cần forward declaration; định nghĩa gọi method của Player cần include đầy đủ. | [Khai báo một kiểu tồn tại khác với biết cấu trúc kiểu](#topic-cpp-15-15-2-khai-bao-mot-kieu-ton-tai-khac-voi-biet-cau-truc-kieu) |

### Copy/move, iterator và lambda

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `auto copied = original;` | Khởi tạo object mới từ original; với vector thông thường đây là copy construction. | [auto — suy luận kiểu](#topic-cpp-02-02-4-auto-suy-luan-kieu) |
| `existing = original;` | Gán cho object đã tồn tại; với vector thông thường đây là copy assignment. | [Copy construction, copy assignment và move](#topic-cpp-16-16-1-copy-construction-copy-assignment-va-move) |
| `std::move(x)` | Tạo biểu thức xvalue để overload phù hợp có thể được chọn; không tự chuyển tài nguyên. | [Copy construction, copy assignment và move](#topic-cpp-16-16-1-copy-construction-copy-assignment-va-move) |
| `auto taken = std::move(source);` | Khởi tạo object đích từ biểu thức có thể chọn move; phải biết hợp đồng của kiểu nguồn sau thao tác. | [auto — suy luận kiểu](#topic-cpp-02-02-4-auto-suy-luan-kieu) |
| `destination = std::move(source);` | Gán cho object đã có; không suy ra mọi kiểu có move assignment hay mọi nguồn luôn rỗng. | [Copy construction, copy assignment và move](#topic-cpp-16-16-1-copy-construction-copy-assignment-va-move) |
| `auto owner2 = std::move(owner1);` với unique_ptr | Chuyển quyền sở hữu từ nguồn khác đích; owner1 rỗng sau chuyển thành công. | [auto — suy luận kiểu](#topic-cpp-02-02-4-auto-suy-luan-kieu) |
| `items.begin(), items.end()` | Khoảng iterator từ đầu đến sau cuối; không dereference end; iterator phải còn hiệu lực. | [Iterator và hợp đồng của thuật toán](#topic-cpp-16-16-2-1-iterator-va-hop-dong-cua-thuat-toan) |
| `[](int hp) { return hp > 0; }` | Lambda không capture, một tham số; phù hợp predicate kiểm tra từng HP. | [Lambda: tách capture khỏi tham số](#topic-cpp-16-16-2-lambda-tach-capture-khoi-tham-so) |
| `[damage](int& hp) { ... }` | Capture damage theo giá trị, hp là tham số ở từng lần gọi. | [Lambda: tách capture khỏi tham số](#topic-cpp-16-16-2-lambda-tach-capture-khoi-tham-so) |
| `[&total](int amount) { total += amount; }` | Capture reference để sửa biến ngoài; total phải còn sống khi lambda được gọi. | [Lambda: tách capture khỏi tham số](#topic-cpp-16-16-2-lambda-tach-capture-khoi-tham-so) |
| `[damage, &totalDamage](int& hp) { ... }` | Kết hợp capture by value và by reference; không nhầm capture với tham số. | [Lambda: tách capture khỏi tham số](#topic-cpp-16-16-2-lambda-tach-capture-khoi-tham-so) |
| `[=]` | Capture mặc định theo giá trị đối với biến cần capture; không sao chép mọi biến trong chương trình. | [Lambda: tách capture khỏi tham số](#topic-cpp-16-16-2-lambda-tach-capture-khoi-tham-so) |
| `[&]` | Capture mặc định theo tham chiếu; lifetime của đối tượng ngoài vẫn phải được bảo đảm. | [Lambda: tách capture khỏi tham số](#topic-cpp-16-16-2-lambda-tach-capture-khoi-tham-so) |
| `[count]() mutable { return ++count; }` | Cho sửa bản copy captured by value bên trong lambda; không sửa count gốc. | [Lambda: tách capture khỏi tham số](#topic-cpp-16-16-2-lambda-tach-capture-khoi-tham-so) |
| `std::for_each(first, last, apply)` | Áp dụng callback một đối số cho từng phần tử của khoảng hợp lệ. | [Iterator và hợp đồng của thuật toán](#topic-cpp-16-16-2-1-iterator-va-hop-dong-cua-thuat-toan) |
| `std::count_if(first, last, predicate)` | Đếm phần tử thỏa predicate; kết quả là iterator difference type, dùng auto khi phù hợp. | [Iterator và hợp đồng của thuật toán](#topic-cpp-16-16-2-1-iterator-va-hop-dong-cua-thuat-toan) |
| `std::sort(first, last, compare)` | Sắp xếp theo comparator hai tham số; comparator phải tạo thứ tự hợp lệ, không dùng >= cho phép so lớn hơn. | [Iterator và hợp đồng của thuật toán](#topic-cpp-16-16-2-1-iterator-va-hop-dong-cua-thuat-toan) |


### STL mở rộng

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `std::make_shared<T>(args...)` | Tạo object được quản lý bằng shared_ptr; tránh vòng sở hữu mạnh. | [Smart pointer](#lesson-10) |
| `observer.lock()` | Từ weak_ptr lấy shared_ptr nếu object còn tồn tại; kiểm tra kết quả trước khi dùng. | [Smart pointer](#lesson-10) |
| `inventory.find(key)` | Tìm key trong unordered_map; kết quả bằng end() nếu không có, không tự chèn phần tử. | [Container](#lesson-20) |
| `v.erase(std::remove_if(v.begin(), v.end(), predicate), v.end());` | Xóa phần tử thỏa điều kiện; remove_if sắp lại khoảng, erase mới giảm size. | [Thuật toán](#lesson-21) |
| `std::optional<T>` | Biểu diễn có hoặc không có giá trị; kiểm tra trước khi đọc. | [Xử lý lỗi](#lesson-23) |
| `std::nullopt` | Giá trị biểu diễn optional rỗng. | [Xử lý lỗi](#lesson-23) |
| `std::map<Key, Value> m;` | Tạo map với khóa có thứ tự theo comparator; mỗi khóa tương đương có tối đa một phần tử. | [Container](#lesson-20) |
| `m[key] = value;` | Gán value theo key; operator[] tạo phần tử nếu key chưa có. Dùng find nếu chỉ muốn kiểm tra tồn tại. | [Container](#lesson-20) |
| `m.find(key)` | Tìm key trong map; so sánh iterator với m.end() trước khi truy cập, không tự thêm phần tử. | [Container](#lesson-20) |

### Hợp đồng đa hình

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `virtual void Update() = 0;` | Khai báo hàm pure virtual. Lớp còn pure virtual final overrider là abstract; lớp con cụ thể cần triển khai hợp đồng. | [Abstract class](#lesson-15) |

### Unreal Engine

| Cú pháp | Ý nghĩa và điều kiện | Bài học |
|---|---|---|
| `UCLASS()` | Đánh dấu class tham gia reflection Unreal; cần cấu trúc header và GENERATED_BODY phù hợp. | [Reflection](#lesson-31) |
| `UPROPERTY(EditAnywhere, BlueprintReadWrite)` | Property có thể chỉnh trong editor và đọc/ghi từ Blueprint; kiểu phải được reflection hỗ trợ. Không tự bật replication. | [Reflection](#lesson-31) |
| `UFUNCTION(BlueprintCallable)` | Đưa hàm thành lời gọi được từ Blueprint theo quy tắc UHT. | [C++ và Blueprint](#lesson-38) |
| `Cast<AEnemy>(OtherActor)` | Kiểm tra/chuyển kiểu UObject; kiểm tra kết quả trước khi gọi hành vi riêng của Enemy. | [Casting](#lesson-46) |
| `Enemies.Add(NewEnemy)` | Thêm phần tử vào TArray; sửa container có thể ảnh hưởng địa chỉ và iterator đang giữ. | [Container Unreal](#lesson-35) |
| `Scores.Find(TEXT("Player1"))` | TMap trả pointer tới value, hoặc nullptr khi không có key. | [Container Unreal](#lesson-35) |
| `GetWorld()->SpawnActor<AWeapon>(WeaponClass, Location, Rotation)` | Tạo Actor trong world; cần World/class hợp lệ và kiểm tra kết quả. | [Actor và Component](#lesson-33) |
| `CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"))` | Tạo default subobject trong constructor của owning UObject. | [Actor và Component](#lesson-33) |
| `OnHealthChanged.AddDynamic(this, &AMyHUD::HandleHealthChanged)` | Đăng ký callback dynamic multicast delegate; callback phải là UFUNCTION có chữ ký khớp. | [Delegate](#lesson-37) |
| `GetWorldTimerManager().ClearTimer(FireTimerHandle)` | Hủy timer được handle này định danh. | [Timer](#lesson-53) |
| `UE_LOG(LogTemp, Warning, TEXT("Ready"))` | Ghi log theo category và mức độ trong Unreal. | [Debugging](#lesson-43) |
| `HasAuthority()` | Hỏi Actor hiện tại có authority hay không; dùng trong logic replication đúng ngữ cảnh. | [Replication](#lesson-54) |
| `DOREPLIFETIME(AMyCharacter, Health)` | Đăng ký property trong GetLifetimeReplicatedProps; cần thiết lập replication tương ứng. | [Replication](#lesson-54) |

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

---

<a id="arena"></a>

## Arena ôn tập tổng hợp: chương trình C++17 ba file

Ví dụ đầy đủ được giữ từ handoff 01–09. Nó dùng đúng nền tảng đã có: header/source, struct, enum class, array, reference, pointer, null check, vòng lặp, hàm và I/O. Đây là ví dụ mẫu để đọc, build và đối chiếu sau khi tự làm Healing; không phải một bài nộp mới được chấm.

Tạo project Console App C++17, thêm đúng ba file dưới và build **cả `Arena.cpp` lẫn `Main.cpp`**. Không include `.cpp`. Ví dụ này là project độc lập, không ghép chung với [class Player](#lesson-12) trong ví dụ đóng gói.

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

---

<a id="self-check"></a>

## Tự kiểm tra nền tảng, ownership, OOP và công cụ

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

### Mục tiêu ôn bổ sung [Lifetime và ownership](#cpp-10)–17.2

Những mục này là đề xuất để tự kiểm tra hiện tại, không phải xác nhận đã có thêm bài nộp hay điểm số.

| Buổi | Tự giải thích và áp dụng | Điều kiện tự kiểm tra |
|---|---|---|
| [Lifetime và ownership](#cpp-10) | Phân biệt owner/mượn; chọn đúng new/delete và new[]/delete[]; chuyển ví dụ tự quản sang unique_ptr. | Không delete kết quả get(); giải thích được raw pointer=nullptr khác unique_ptr=nullptr; không dùng pointer sau khi owner hủy. |
| [Class](#cpp-11) | Tự dựng Player có invariant HP, constructor, getter const và method thay đổi HP. | Kiểm tra maxHP 0/âm theo hợp đồng đã chọn; damage âm/0/lớn; caller không sửa trực tiếp member private. |
| [Đa hình](#cpp-12-1) | Đối chiếu Animal/Dog có và không có virtual bằng base reference/pointer. | Dự đoán đúng method được chọn; phân biệt overload/override; dùng override để compiler kiểm tra chữ ký. |
| [Constructor/destructor](#cpp-12-2) | Giải thích this, thứ tự dựng/hủy và virtual destructor khi sở hữu derived qua base. | Nhận ra trường hợp delete qua base cần destructor phù hợp; không chấm output của chương trình có UB. |
| [Template](#cpp-13) | Viết GetMax/ClampValue với int/float; giải thích deduction, explicit template argument và definition trong header. | Test dưới/trong/trên/đúng biên và khoảng một giá trị; nêu tiền điều kiện low<=high; không giả vờ mọi T đều dùng được. |
| [Static và namespace](#cpp-14) | Phân biệt local static, static member, const pointer và namespace. | Theo dõi bộ đếm trước/sau scope; thử đúng các phép gán được phép của pointer to const/const pointer. |
| [Chuyển kiểu](#cpp-14-5) | Chọn named cast theo ý định, giải thích explicit. | Downcast pointer thành công/thất bại/null; nhận diện khác biệt reference failure; không chạy cast gây UB. |
| [Dependency](#cpp-15) | Tự tách file và dùng forward declaration, điều kiện tiền xử lý. | Cờ bằng 0 phân biệt if/ifdef; mỗi cpp có đủ include và definition được build. |
| [Copy/move](#cpp-16) | Copy/move Inventory và lambda AOE theo hai buổi nguồn. | Không giả định tùy tiện nguồn sau move; capture đúng lifetime; callback đúng số tham số; thử danh sách rỗng. |
| [Thực hành debugging](#cpp-17-1) | Dùng breakpoint, stepping, Watch/Locals và Call Stack tìm lỗi. | Chỉ ra statement đầu tiên lệch kỳ vọng; chứng minh sửa reference, clamp HP và predicate sống. |
| [Final Assessment](#cpp-17-2) | Giải thích một gameplay loop nhiều file, ownership và trạng thái thắng. | Kiểm tra action potion loại trừ attack; Enemy chết không phản công; state và log khớp; phân biệt hợp đồng với phòng vệ chưa có. |

---

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

---

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

---

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
| A | [Nhập/xuất](#cpp-01)–[Toán tử](#cpp-03) | I/O, kiểu, cast trước chia, const/constexpr, logic/bitmask |
| B | [Điều kiện](#cpp-04)–[Vòng lặp](#cpp-05) | Điều kiện, scope, vòng lặp, break/continue |
| C | [Hàm](#cpp-06)–[Build nhiều file](#cpp-06-5) | Hàm, tham số, header/source, compiler/linker |
| D | [Container](#cpp-07)–[Struct và class](#cpp-08) | Container/string, struct/enum, reference, tránh copy ngoài ý muốn |
| E | [Pointer/reference](#cpp-09) | Địa chỉ/dereference/null, hiệu lực pointer, Healing |
| F | [Lifetime và ownership](#cpp-10)–[Class](#cpp-11) | Lifetime/ownership, unique_ptr, class invariant |
| G | [Đa hình](#cpp-12-1)–[Constructor/destructor](#cpp-12-2) | Dispatch, override, this, constructor/destructor |
| H | [Template](#cpp-13) | Deduction, template trong header, test clamp ở biên |
| I | [Static và namespace](#cpp-14)–[Chuyển kiểu](#cpp-14-5) | Static, const pointer, cast thành công/thất bại và explicit |
| J | [Dependency](#cpp-15) | Compile/link, macro bằng 0, include trực tiếp và incomplete type |
| K | [Copy/move](#cpp-16) | Copy/move, nguồn sau move, capture và số tham số callback |
| L | [Debugging](#cpp-17)–[Thực hành debugging](#cpp-17-1) | Breakpoint, stepping, đúng frame, ba lỗi logic và ca biên |
| M | [Final Assessment](#cpp-17-2) | Một action mỗi lượt, state/log nhất quán, ownership và điều kiện thắng |

Đây là lịch gợi ý, không phải danh sách buổi đã hoàn thành. Tự coi “đã nhớ” khi có thể viết ví dụ không nhìn tài liệu, giải thích từng dòng, chọn đúng kiểu tham số và chỉ ra trường hợp nào khiến cách dùng không còn hợp lệ. Nếu sai, quay về bài và thử một ví dụ nhỏ hơn trước khi tiếp tục.

---

<a id="roadmap"></a>

## Giới hạn kiến thức và bước tiếp theo

Giáo trình này hợp nhất kiến thức trên website và Completion Pack vào cùng một lộ trình: nền tảng → ownership/OOP → C++ hiện đại → kỹ thuật kiểm chứng → lập trình game → Unreal. Nội dung có trong giáo trình không tự đồng nghĩa người học đã thực hành hoặc thành thạo.

| Mức độ | Phạm vi |
|---|---|
| Đã học và thực hành theo handoff | Cú pháp/luồng chương trình, hàm/nhiều file, container, class, pointer/reference, unique_ptr căn bản, đa hình căn bản, function template, static, cast thông dụng, preprocessor, dùng copy/move, lambda và debugger |
| Chỉ giới thiệu hoặc minh họa nhỏ | Class template, const_cast/reinterpret_cast, protected sâu, object slicing, shared_ptr/weak_ptr và cycle, pure virtual/interface |
| Chưa đánh giá sâu | Custom copy/move, Rule of Five, exception safety, forwarding, callback trì hoãn/async, unit test framework, profiling, concurrency, allocator, template metaprogramming và kiến trúc hệ thống lớn |

Lần ôn tiếp nên củng cố những điểm có lỗi thực tế: kiểu của size/count_if, include trực tiếp, initializer list, HP/MaxHP và ca biên, copy so với reference, vòng đời callback, log phản ánh đúng action. Chọn bài theo vấn đề cần giải quyết; không thêm cú pháp chỉ để có nhiều từ khóa.



**Chặng Unreal nằm trong chương trình chung.** Handoff mới xác nhận đây là hướng học tiếp của người học; việc tài liệu website đã có nội dung UE không phải bằng chứng đã hoàn thành chặng đó. Trước khi làm ví dụ engine, xác minh phiên bản project, plugin và môi trường thực tế. Ownership Standard C++ và GC của UObject có quy tắc khác nhau.

Điều kiện đi tiếp: tự giải thích gameplay loop nhỏ, xác định owner/lifetime, chia class/file theo trách nhiệm và dùng debugger chứng minh nguyên nhân lỗi. Có thể quay lại mục tiên quyết ở đầu mỗi bài.

---

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

---

<a id="web-integration"></a>

## Quy ước tích hợp và kiểm tra website

### Một giáo trình và một hệ thống bài học

- Website đọc lý thuyết từ duy nhất file này. Các ID `lesson-0`…`lesson-55` giữ liên hệ với route và dữ liệu cũ; thứ tự học do manifest theo kiến thức tiên quyết quyết định.
- Anchor `cpp-*` giữ làm alias của tài liệu nguồn. Một buổi nguồn có thể đóng góp nhiều chủ đề; không tạo trang lý thuyết thứ hai cho buổi đó.
- Mục lục, tìm kiếm, bài tập, ôn tập và tra cứu cùng trỏ đến bài hợp nhất. Phụ lục cung cấp bài thực hành, thuật ngữ và đối chiếu, không chứa một chương trình học cạnh tranh.
- `Update/curriculum-coverage.json` ghi đối chiếu từng đề mục nguồn với đích. Nội dung nguồn trùng ý được thay bằng giải thích đầy đủ hơn; nội dung khác biệt được giữ tại chủ đề tương ứng.

### Dữ liệu người học

Giữ khóa `cpp-dojo-state-v1`, ID bài, SRS, kết quả quiz, XP/streak và link bài nộp. Lịch sử đã đọc được giữ; phần mới chưa được xác nhận phải hiện rõ. Không suy hoàn thành cả chương từ một buổi nguồn chỉ bao phủ một phần. Không cấp XP do nhập hoặc di chuyển tài liệu.

### Các cổng kiểm tra

Đối chiếu độ bao phủ; link/anchor; ví dụ chạy được và ca biên; bài tập/thẻ cũ; alias; tìm kiếm theo tình huống; tiến độ sau reload/đóng mở; desktop/mobile sáng tối. Kết quả build không thay cho kiểm tra nội dung và khả năng tra cứu. Không đánh giá lại bài nộp người học chỉ vì ví dụ biên tập chạy đúng.

---

<a id="sources"></a>

## Nguồn và nhật ký biên tập

Các file ghi “trong ZIP” dưới đây là entry giữ nguyên tên và nội dung trong `Archive/Update_2026-10-26.zip`, trước đây nằm trực tiếp trong `Update`. Chỉ cần mở ZIP khi muốn đối chiếu bản lịch sử.

| Nguồn | Phần được hợp nhất |
|---|---|
| `Cpp_Game_Dev_Reference.md` (bản trước hợp nhất) | Toàn bộ 56 chủ đề C++, game, Unreal và 8 phụ lục; khái niệm trùng được biên tập theo chủ đề, nội dung mở rộng được giữ trong cùng chương trình. |
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
| 3.0.0 | 28/10/2026 | Hợp nhất thực sự chương trình website với Completion Pack theo chủ đề; 56 ID bài được giữ, các buổi nguồn trở thành anchor nội bộ; một mục lục, một nguồn lý thuyết; tra cứu phân cấp theo thao tác. |
| 2.0.0 | 27/10/2026 | Hợp nhất Completion Pack đến 17.2 vào đúng bài; thêm bảy chương đọc và sáu ví dụ hoàn chỉnh, mở rộng tra cứu, cập nhật lịch sử và giới hạn; giữ nguồn gốc bản Final đã chỉnh. Chuẩn hóa nội dung để tích hợp bằng manifest riêng và bảo toàn dữ liệu học. |
| 1.0.1 | 26/10/2026 | Dọn 5 tài liệu nguồn/báo cáo vào một ZIP và cập nhật đường dẫn truy vết; giữ handoff 01–09 đang được website đọc. Không đổi nội dung bài học, ví dụ hoặc website. |
| 1.0.0 | 26/10/2026 | Tạo một nguồn chuẩn; hợp nhất 01–13, tra cứu và tài nguyên ôn; tách hai buổi 12; sửa ví dụ/diễn đạt; thêm các cầu nối được đánh dấu bổ sung biên tập; chuẩn bị chỗ nhận bài tiếp theo. Chưa tích hợp lên web. |

Giữ giáo trình chuẩn làm nguồn biên tập duy nhất; giữ nguyên Completion Pack để truy vết và code Final để tải đối chiếu. Năm file lịch sử trong ZIP đã được đối chiếu SHA-256 trước lần dọn 26/10. Handoff 01–09 giữ để truy vết; website không ghép thêm nội dung từ nguồn này lúc chạy. Không tiếp tục chỉnh song song handbook đầu vào như một giáo trình thứ hai.

---

<a id="validation"></a>

## Kiểm tra bản hợp nhất

Phiên bản 3.0.0 giữ nguyên 20 bộ ví dụ C++17 có nhãn (27 file) từ bản 2.0.0; các file trong cùng một example phải được build cùng nhau. Mẫu minh họa khác cần đọc ngữ cảnh và không được coi là project độc lập.

- Bảng đối chiếu `curriculum-coverage.json` ghi đủ 56 bài và 8 phụ lục nguồn, cùng từng đề mục H3 của Completion Pack đã biên tập.
- Câu hỏi, exercise và quiz dùng ID ổn định; lịch sử thực hành/điểm có nguồn không được sửa thành kết quả kiểm tra phần mềm.
- Kiểm tra tự động phải xác nhận link và ví dụ, giữ output liền với code, bảo toàn ID và tránh cấp tiến độ do nhập tài liệu.
- Kiểm tra trình duyệt phải xác nhận người học tìm được đúng kiến thức qua mục lục, tra cứu theo ý định và link bài giải thích.

Kết quả kiểm tra/deploy của lần phát hành hiện tại được báo cùng lần triển khai, không suy ra từ các ghi nhận lịch sử của phiên bản trước.
