# C++ cho Game Development — Tài liệu Tham chiếu Toàn diện

> **Đối tượng:** Người mới tiếp cận C++, hoặc đã dùng nhưng chưa thành thạo.
> **Mục tiêu:** Hiểu C++ từ nền tảng đến chuyên sâu, áp dụng vào game (Standard C++ & Unreal Engine) và các dự án khác. Dùng như một bản *reference* tra cứu nhanh trong dự án.
> **Quy ước:** Giữ nguyên thuật ngữ tiếng Anh (term) để bạn quen với tài liệu/diễn đàn quốc tế. Code minh họa dùng `cpp` (C++ thật) hoặc mã giả (pseudo-code) khi cần làm rõ ý tưởng.
> **Phiên bản:** 2.0 — kèm cài đặt môi trường (mục 0), chủ đề bổ sung (Phần VIII, mục 46–55) và bộ đào tạo: bài tập, capstone, lộ trình, bảng lỗi (Phụ lục E–H). Sẵn sàng dùng làm nội dung website đào tạo nội bộ.

---

## 📑 Mục lục

### PHẦN I — NỀN TẢNG C++ (Foundations)
- [0. Cài đặt môi trường & chương trình đầu tiên](#0-cài-đặt-môi-trường--chương-trình-đầu-tiên)
- [1. Giới thiệu C++ & mô hình biên dịch](#1-giới-thiệu-c--mô-hình-biên-dịch)
- [2. Toolchain & Build System](#2-toolchain--build-system)
- [3. Cú pháp cơ bản: biến, kiểu dữ liệu, toán tử](#3-cú-pháp-cơ-bản-biến-kiểu-dữ-liệu-toán-tử)
- [4. Control Flow (luồng điều khiển)](#4-control-flow-luồng-điều-khiển)
- [5. Functions (hàm)](#5-functions-hàm)
- [6. Pointers & References (con trỏ & tham chiếu)](#6-pointers--references-con-trỏ--tham-chiếu)

### PHẦN II — BỘ NHỚ & QUẢN LÝ TÀI NGUYÊN (Memory & Resource Management)
- [7. Memory Model: Stack vs Heap](#7-memory-model-stack-vs-heap)
- [8. Dynamic Allocation (new / delete)](#8-dynamic-allocation-new--delete)
- [9. RAII — nguyên lý vàng của C++](#9-raii--nguyên-lý-vàng-của-c)
- [10. Smart Pointers (con trỏ thông minh)](#10-smart-pointers-con-trỏ-thông-minh)
- [11. Move Semantics & Rvalue References](#11-move-semantics--rvalue-references)

### PHẦN III — LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP)
- [12. Classes & Objects](#12-classes--objects)
- [13. Constructor/Destructor & Rule of 0/3/5](#13-constructordestructor--rule-of-035)
- [14. Inheritance & Polymorphism](#14-inheritance--polymorphism)
- [15. Virtual Functions & Abstract Classes](#15-virtual-functions--abstract-classes)
- [16. Composition over Inheritance](#16-composition-over-inheritance)

### PHẦN IV — C++ HIỆN ĐẠI (Modern C++ 11/14/17/20)
- [17. auto, nullptr, range-based for](#17-auto-nullptr-range-based-for)
- [18. Lambda Expressions](#18-lambda-expressions)
- [19. Templates & Generic Programming](#19-templates--generic-programming)
- [20. STL Containers](#20-stl-containers)
- [21. STL Algorithms & Iterators](#21-stl-algorithms--iterators)
- [22. const correctness, constexpr, enum class](#22-const-correctness-constexpr-enum-class)
- [23. Error Handling (xử lý lỗi)](#23-error-handling-xử-lý-lỗi)

### PHẦN V — C++ CHO GAME (tổng quát, engine-agnostic)
- [24. Vì sao C++ thống trị game dev](#24-vì-sao-c-thống-trị-game-dev)
- [25. Game Loop](#25-game-loop)
- [26. Data-Oriented Design & ECS](#26-data-oriented-design--ecs)
- [27. Performance: Cache, Profiling, Tối ưu](#27-performance-cache-profiling-tối-ưu)
- [28. Math cho game (Vector, Matrix, Quaternion)](#28-math-cho-game-vector-matrix-quaternion)
- [29. Design Patterns thường gặp trong game](#29-design-patterns-thường-gặp-trong-game)

### PHẦN VI — UNREAL ENGINE C++
- [30. UE C++ khác Standard C++ thế nào](#30-ue-c-khác-standard-c-thế-nào)
- [31. UObject, Reflection & Macros (UCLASS/UPROPERTY/UFUNCTION)](#31-uobject-reflection--macros)
- [32. Garbage Collection trong UE](#32-garbage-collection-trong-ue)
- [33. Actor & Component](#33-actor--component)
- [34. Gameplay Framework](#34-gameplay-framework)
- [35. UE Containers vs STL](#35-ue-containers-vs-stl)
- [36. UE Smart Pointers & Object Handles](#36-ue-smart-pointers--object-handles)
- [37. Delegates & Events](#37-delegates--events)
- [38. C++ ↔ Blueprint Interaction](#38-c--blueprint-interaction)
- [39. Data-Driven Design (DataAsset, DataTable)](#39-data-driven-design-dataasset-datatable)
- [40. Gameplay Ability System (GAS) — tổng quan](#40-gameplay-ability-system-gas--tổng-quan)

### PHẦN VII — KỸ THUẬT & THỰC HÀNH (Engineering Practices)
- [41. Tổ chức code: Header/Source, Forward Declaration](#41-tổ-chức-code-headersource-forward-declaration)
- [42. Naming Conventions & Code Style](#42-naming-conventions--code-style)
- [43. Debugging](#43-debugging)
- [44. Undefined Behavior & các bẫy phổ biến](#44-undefined-behavior--các-bẫy-phổ-biến)
- [45. Best Practices Checklist](#45-best-practices-checklist)

### PHẦN VIII — CHỦ ĐỀ BỔ SUNG (Supplementary Topics)
- [46. Casting & chuyển kiểu (C++ & Unreal)](#46-casting--chuyển-kiểu-c--unreal)
- [47. Namespaces, static & Linkage](#47-namespaces-static--linkage)
- [48. Operator Overloading](#48-operator-overloading)
- [49. Strings chuyên sâu (std::string & FString)](#49-strings-chuyên-sâu-stdstring--fstring)
- [50. Multithreading cơ bản cho game](#50-multithreading-cơ-bản-cho-game)
- [51. Unreal Interfaces (UINTERFACE)](#51-unreal-interfaces-uinterface)
- [52. Enhanced Input (UE5)](#52-enhanced-input-ue5)
- [53. Timers, Collision & tiện ích gameplay](#53-timers-collision--tiện-ích-gameplay)
- [54. Multiplayer & Replication — tổng quan](#54-multiplayer--replication--tổng-quan)
- [55. Unit Testing & Automation](#55-unit-testing--automation)

### PHỤ LỤC (Appendices)
- [A. Cheat Sheet cú pháp](#a-cheat-sheet-cú-pháp)
- [B. STL vs UE — bảng đối chiếu nhanh](#b-stl-vs-ue--bảng-đối-chiếu-nhanh)
- [C. Glossary (thuật ngữ)](#c-glossary-thuật-ngữ)
- [D. Tài nguyên học tập](#d-tài-nguyên-học-tập)
- [E. Bảng lỗi build & runtime thường gặp](#e-bảng-lỗi-build--runtime-thường-gặp)
- [F. Bài tập thực hành theo phần](#f-bài-tập-thực-hành-theo-phần)
- [G. Capstone Project — Mini Arena Shooter](#g-capstone-project--mini-arena-shooter)
- [H. Lộ trình đào tạo & Onboarding Checklist](#h-lộ-trình-đào-tạo--onboarding-checklist)

---

# PHẦN I — NỀN TẢNG C++

## 0. Cài đặt môi trường & chương trình đầu tiên

Mục tiêu: sau ~nửa ngày, máy của bạn build được cả C++ thuần lẫn project Unreal Engine.

### Bộ công cụ chuẩn của team
| Công cụ | Dùng cho | Ghi chú cài đặt |
|---|---|---|
| **Visual Studio 2022** (Community trở lên) | Compiler MSVC, debugger, IDE chính | Chọn workload **"Desktop development with C++"** và **"Game development with C++"** (kèm các component hỗ trợ Unreal Engine) |
| **Epic Games Launcher → Unreal Engine 5.x** | Engine | Cài đúng phiên bản team đang dùng (hỏi lead); tick thêm *Engine Source* nếu cần đọc code engine |
| **Git + Git LFS** | Quản lý phiên bản | Làm theo tài liệu Git nội bộ của team |
| (Tuỳ chọn) **JetBrains Rider** / **VS Code** | IDE thay thế | Rider rất mạnh cho UE; VS Code phù hợp C++ thuần + CMake |

> **Thử nhanh không cần cài gì:** [Compiler Explorer (godbolt.org)](https://godbolt.org) — dán code C++, thấy ngay kết quả & mã assembly. Rất tiện khi học Phần I–IV.

### Đường 1 — Chương trình C++ thuần đầu tiên
1. Visual Studio → *Create a new project* → **Console App (C++)** → đặt tên `HelloGameDev`.
2. Thay nội dung `main.cpp` bằng chương trình tối thiểu ở **mục 1**, nhấn **F5** (build + chạy kèm debugger).
3. (Khuyến nghị) Làm quen build bằng **CMake** theo mục 2 — đây là cách team build các tool C++ thuần.

### Đường 2 — Project Unreal Engine C++ đầu tiên
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

### Checklist "Ngày 0"
- [ ] VS 2022 với 2 workload C++ ở trên; build & chạy được Console App.
- [ ] UE 5.x mở được; tạo & build được project Third Person C++.
- [ ] Biết dùng breakpoint: đặt breakpoint trong `BeginPlay`, chạy PIE, thấy VS dừng đúng dòng.
- [ ] Clone repo team theo Git guide, `.gitignore` đúng chuẩn UE.

---

## 1. Giới thiệu C++ & mô hình biên dịch

### C++ là gì
C++ là ngôn ngữ **compiled**, **statically-typed**, **multi-paradigm** (procedural, OOP, generic, functional). Triết lý cốt lõi:

- **Zero-overhead abstraction:** "Bạn không trả giá cho thứ bạn không dùng." Abstraction (class, template...) được compiler dịch ra code gần như tối ưu bằng tay.
- **Manual memory control:** Bạn kiểm soát bộ nhớ (khác Java/C# có GC). Đây là lý do C++ nhanh, nhưng cũng là nguồn gốc của hầu hết bug.
- **Direct hardware access:** Truy cập con trỏ, bit, memory layout — quan trọng cho engine/game.

### Mô hình biên dịch (Compilation Model)
Hiểu pipeline này giúp bạn debug lỗi build (vốn rất hay gặp):

```
file.cpp ──[Preprocessor]──> file đã expand ──[Compiler]──> file.o (object)
                                                                  │
file2.cpp ──> ... ──> file2.o ──┐                                 │
                                ├──[Linker]──> executable (.exe) / library
thư viện .lib/.a ───────────────┘
```

1. **Preprocessor:** Xử lý `#include`, `#define`, `#ifdef`. Chỉ là thao tác *text* — chép-dán nội dung.
2. **Compiler:** Dịch từng `.cpp` (gọi là **translation unit**) thành object file (mã máy). Mỗi file dịch độc lập.
3. **Linker:** Ghép các object file + thư viện thành file thực thi cuối. Đây là nơi sinh ra lỗi *"unresolved external symbol"* (khai báo hàm nhưng quên định nghĩa).

> **Lỗi compiler vs lỗi linker — phân biệt nhanh:**
> - *"undeclared identifier", "syntax error"* → lỗi **compiler** (sai trong 1 file).
> - *"unresolved external symbol", "duplicate symbol"* → lỗi **linker** (vấn đề khi ghép nhiều file).

### Chương trình tối thiểu
```cpp
#include <iostream>   // include thư viện I/O chuẩn

int main()            // entry point — mọi chương trình bắt đầu ở đây
{
    std::cout << "Hello, Game Dev!" << std::endl;
    return 0;         // 0 = thoát thành công
}
```

---

## 2. Toolchain & Build System

### Các thành phần
| Thành phần | Vai trò | Ví dụ |
|---|---|---|
| **Compiler** | Dịch code → object | MSVC (`cl`), GCC (`g++`), Clang (`clang++`) |
| **Linker** | Ghép object → executable | `link`, `ld` |
| **Build system** | Tự động hóa lệnh build | CMake, MSBuild, Make, UnrealBuildTool |
| **Debugger** | Dò bug runtime | Visual Studio Debugger, GDB, LLDB |

### Header & Source — vì sao tách đôi
C++ tách **interface** (`.h`/`.hpp`) khỏi **implementation** (`.cpp`):

```cpp
// Player.h — KHAI BÁO (interface), được include nhiều nơi
#pragma once               // chống include trùng (xem mục dưới)

class Player {
public:
    void TakeDamage(int amount);   // chỉ khai báo, không có thân hàm
private:
    int health = 100;
};
```

```cpp
// Player.cpp — ĐỊNH NGHĨA (implementation), chỉ biên dịch 1 lần
#include "Player.h"

void Player::TakeDamage(int amount) {   // dấu :: = "thuộc về class Player"
    health -= amount;
}
```

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

### CMake — build system phổ biến nhất cho C++ thuần
```cmake
# CMakeLists.txt
cmake_minimum_required(VERSION 3.20)
project(MyGame LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)          # dùng C++20
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

---

## 3. Cú pháp cơ bản: biến, kiểu dữ liệu, toán tử

### Khai báo biến
```cpp
int   score   = 0;        // số nguyên
float speed   = 5.5f;     // số thực (chú ý hậu tố 'f')
double mass   = 70.0;     // số thực độ chính xác kép
bool  isAlive = true;     // luận lý: true/false
char  grade   = 'A';      // 1 ký tự
```

### Fundamental Types & kích thước
| Kiểu | Ý nghĩa | Kích thước điển hình | Lưu ý cho game |
|---|---|---|---|
| `bool` | true/false | 1 byte | — |
| `char` | ký tự / byte | 1 byte | dùng cho text, raw data |
| `int` | số nguyên | 4 byte | mặc định cho đếm, loop |
| `float` | thực 32-bit | 4 byte | **chuẩn cho game** (position, vận tốc) |
| `double` | thực 64-bit | 8 byte | chính xác cao nhưng chậm/tốn hơn |
| `int8_t`...`int64_t` | nguyên kích thước cố định | 1–8 byte | dùng khi cần kiểm soát chính xác bộ nhớ |

> **Fixed-width types** (`<cstdint>`): trong game/engine nên ưu tiên `int32_t`, `uint8_t`... thay vì `int`/`unsigned` để layout bộ nhớ rõ ràng và cross-platform ổn định.

### `auto` — để compiler tự suy kiểu
```cpp
auto health = 100;        // suy ra int
auto ratio  = 1.5f;       // suy ra float
auto name   = "Knight";   // suy ra const char*
```

### Toán tử
```cpp
// Số học:      +  -  *  /  %        (% là chia lấy dư, chỉ cho số nguyên)
// So sánh:     ==  !=  <  >  <=  >=  (trả về bool)
// Luận lý:     &&  ||  !             (and, or, not)
// Gán gộp:     +=  -=  *=  /=        (x += 5 ⇔ x = x + 5)
// Tăng/giảm:   ++  --                (++i tăng trước, i++ tăng sau)
// Bitwise:     &  |  ^  ~  <<  >>    (thao tác trên từng bit — dùng cho flags)
```

**Bitwise cho flags** (rất hay dùng trong game để gói nhiều trạng thái vào 1 số):
```cpp
const int FLAG_POISONED = 1 << 0;   // 0001
const int FLAG_BURNING  = 1 << 1;   // 0010
const int FLAG_FROZEN   = 1 << 2;   // 0100

int status = 0;
status |= FLAG_POISONED;             // bật cờ poisoned
status |= FLAG_BURNING;              // bật thêm burning  → 0011
bool isPoisoned = (status & FLAG_POISONED) != 0;   // kiểm tra cờ
status &= ~FLAG_BURNING;             // tắt cờ burning
```

---

## 4. Control Flow (luồng điều khiển)

### if / else
```cpp
if (health <= 0) {
    Die();
} else if (health < 30) {
    PlayLowHealthWarning();
} else {
    RegenerateHealth();
}
```

### switch — chọn theo giá trị rời rạc
```cpp
switch (weaponType) {
    case WeaponType::Sword:
        damage = 10;
        break;                 // ĐỪNG QUÊN break (nếu không sẽ "rơi" xuống case dưới)
    case WeaponType::Bow:
        damage = 7;
        break;
    default:                   // trường hợp còn lại
        damage = 1;
        break;
}
```

### Loops (vòng lặp)
```cpp
// for — khi biết số lần lặp
for (int i = 0; i < enemyCount; ++i) {
    UpdateEnemy(i);
}

// while — lặp khi điều kiện còn đúng
while (!isGameOver) {
    Tick();
}

// do-while — chạy ít nhất 1 lần rồi mới kiểm tra
do {
    ShowMenu();
} while (userChoice != QUIT);

// range-based for (C++11) — duyệt collection, GỌN & AN TOÀN nhất
for (const Enemy& e : enemies) {   // const& = không copy, không sửa
    e.Render();
}
```

### break / continue
```cpp
for (int i = 0; i < items.size(); ++i) {
    if (items[i].isBroken) continue;   // bỏ qua phần còn lại, sang vòng kế
    if (items[i].isKey)    break;      // thoát hẳn vòng lặp
    Use(items[i]);
}
```

---

## 5. Functions (hàm)

### Khai báo & định nghĩa
```cpp
// Cú pháp: returnType functionName(parameters) { body }
int Add(int a, int b) {
    return a + b;
}

void PrintScore(int score) {   // void = không trả về gì
    std::cout << "Score: " << score;
}
```

### Truyền tham số: by value vs by reference vs by const-reference
Đây là **kiến thức cực kỳ quan trọng** ảnh hưởng cả tính đúng đắn lẫn hiệu năng:

```cpp
void ByValue(Vector3 v);          // tham số riêng; từ lvalue thường copy, từ rvalue có thể move
void ByReference(Vector3& v);     // tham chiếu → có thể SỬA bản gốc
void ByConstRef(const Vector3& v);// tham chiếu chỉ-đọc → KHÔNG copy, KHÔNG sửa
void ByPointer(Vector3* v);       // con trỏ → có thể null, có thể sửa
```

**Quy tắc thực hành:**
- Kiểu nhỏ (int, float, bool, con trỏ) → truyền **by value**.
- Object lớn mà **chỉ đọc** → truyền **`const T&`** (tránh copy đắt).
- Cần **sửa** đối số → truyền **`T&`** (hoặc `T*` nếu có thể là "không có gì").

```cpp
// Ví dụ minh họa khác biệt:
void Heal(Player& p, int amount) {   // p là tham chiếu → sửa được bản gốc
    p.health += amount;
}
Player hero;
Heal(hero, 20);                      // hero.health thực sự tăng
```

### Default arguments
```cpp
void SpawnEnemy(int level, float hp = 100.0f, bool isBoss = false);
SpawnEnemy(5);                 // dùng hp=100, isBoss=false
SpawnEnemy(5, 200.0f);         // dùng isBoss=false
SpawnEnemy(5, 500.0f, true);   // truyền đủ
```

### Function Overloading — cùng tên, khác tham số
```cpp
float Distance(float a, float b);
float Distance(const Vector2& a, const Vector2& b);
float Distance(const Vector3& a, const Vector3& b);
// Compiler chọn đúng hàm dựa trên kiểu đối số bạn truyền vào (overload resolution).
```

### `inline` & ý nghĩa thực tế
`inline` không bắt compiler chèn thân hàm tại nơi gọi; compiler có thể tối ưu cả hàm không có từ khóa này. Trong header, nó cho phép một hàm có external linkage được định nghĩa trong nhiều translation unit **nếu các định nghĩa đáp ứng ODR** (cùng chuỗi token và các điều kiện về tên được tra cứu). Đây vẫn là một thực thể hàm; `inline` không hợp thức hóa các định nghĩa khác nhau.

```cpp
inline int Square(int x) { return x * x; }   // hợp lệ đặt trong .h
```

---

## 6. Pointers & References (con trỏ & tham chiếu)

Đây là phần *khó nhất với người mới* nhưng là **trái tim của C++**. Nắm chắc phần này, bạn nắm được 70% bug.

### Pointer (con trỏ) — biến lưu **địa chỉ** của biến khác
```cpp
int health = 100;
int* ptr = &health;     // & = "lấy địa chỉ của". ptr lưu địa chỉ của health
std::cout << *ptr;      // * = "dereference" = lấy GIÁ TRỊ tại địa chỉ → in 100
*ptr = 50;              // sửa giá trị qua con trỏ → health giờ = 50
ptr = nullptr;          // con trỏ rỗng, không trỏ vào đâu cả
```

Hình dung:
```
health  ┌─────┐  địa chỉ 0x1000
        │ 100 │
        └─────┘
           ▲
ptr  ┌────────┐
     │ 0x1000 │   (ptr "chỉ tay" vào health)
     └────────┘
```

### Reference (tham chiếu) — **bí danh** (alias) cho biến đã có
```cpp
int health = 100;
int& ref = health;      // ref là TÊN KHÁC của health, KHÔNG phải bản sao
ref = 50;               // sửa ref ⇔ sửa health → health = 50
// Khác con trỏ: reference KHÔNG thể null, KHÔNG đổi đối tượng tham chiếu sau khi khởi tạo.
```

### Pointer vs Reference — chọn cái nào?
| Tiêu chí | Pointer `T*` | Reference `T&` |
|---|---|---|
| Có thể null? | ✅ Có | ❌ Không |
| Gán lại đối tượng khác? | ✅ Có | ❌ Không |
| Cú pháp | cần `*`, `&` | dùng như biến thường |
| Khi nào dùng | "có thể không tồn tại", cần re-assign | "luôn tồn tại", làm tham số hàm |

> **Quy tắc:** Mặc định dùng **reference**. Chỉ dùng **pointer** khi cần biểu diễn "có thể không có gì" (null) hoặc cần thay đổi target.

### `nullptr` và bug kinh điển
```cpp
Player* p = nullptr;
p->TakeDamage(10);      // LỖI CỐ Ý: UB do gọi method qua pointer null; không bảo đảm crash

// Luôn kiểm tra trước khi dùng:
if (p != nullptr) {     // hoặc viết gọn: if (p)
    p->TakeDamage(10);
}
```

### `const` với pointer (đọc từ phải sang trái)
```cpp
int x = 10;
const int* p1 = &x;   // không sửa được *p1 qua p1; đổi được p1
int* const p2 = &x;   // con trỏ HẰNG tới int (đổi được *p2, không đổi p2)
const int* const p3 = &x; // không sửa *p3 qua p3, không đổi được p3
```

`const int*` hạn chế sửa qua pointer đó; không nhất thiết biến nguồn là const. Kiểm tra non-null không chứng minh lifetime: cả pointer và reference đều có thể dangling.

### Dangling Pointer — con trỏ "treo" (cực nguy hiểm)
```cpp
int* GetBadPointer() {
    int local = 42;
    return &local;      // 💥 local bị hủy khi hàm kết thúc → con trỏ trỏ vào rác
}
```

---

# PHẦN II — BỘ NHỚ & QUẢN LÝ TÀI NGUYÊN

## 7. Memory Model: Stack vs Heap

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

## 8. Dynamic Allocation (new / delete)

```cpp
// Cấp 1 object:
Enemy* e = new Enemy();
delete e;                    // giải phóng 1 object

// Cấp 1 mảng:
int* arr = new int[100];
delete[] arr;                // CHÚ Ý: mảng phải dùng delete[], không phải delete
```

### Ba tội lỗi kinh điển của quản lý bộ nhớ thủ công
```cpp
// 1. MEMORY LEAK — quên delete → rò rỉ bộ nhớ
Enemy* e = new Enemy();
// ... không bao giờ delete → bộ nhớ mất vĩnh viễn

// 2. DANGLING POINTER — dùng sau khi delete (use-after-free)
delete e;
e->Attack();                 // 💥 undefined behavior

// 3. DOUBLE FREE — delete 2 lần
delete e;
delete e;                    // 💥 crash
```

> **Kết luận quan trọng:** Trong C++ hiện đại, bạn **gần như không nên viết `new`/`delete` trần** nữa. Hãy dùng **smart pointer** (mục 10) và **RAII** (mục 9).

## 9. RAII — nguyên lý vàng của C++

**RAII = Resource Acquisition Is Initialization.** Đây là *ý tưởng quan trọng nhất* trong C++. Nguyên tắc:

> **Gắn vòng đời của tài nguyên (memory, file, mutex, socket...) với một object sở hữu.** Object đó không bắt buộc nằm trên stack. Khi owner được hủy, destructor trả tài nguyên; với owner automatic local đã khởi tạo hoàn chỉnh, việc này cũng diễn ra khi stack unwinding do exception.

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

## 10. Smart Pointers (con trỏ thông minh)

Trong `<memory>`. `unique_ptr` giải phóng tài nguyên khi owner bị hủy hoặc thay tài nguyên; `shared_ptr` giải phóng khi chủ sở hữu cuối cùng bỏ quyền sở hữu. Chúng giảm lỗi quản lý bộ nhớ nhưng không bảo đảm tuyệt đối không leak: vòng `shared_ptr` hoặc làm mất raw pointer trả về từ `unique_ptr::release()` vẫn có thể gây rò rỉ.

### `std::unique_ptr` — sở hữu DUY NHẤT (dùng 90% trường hợp)
```cpp
#include <memory>

std::unique_ptr<Enemy> e = std::make_unique<Enemy>();  // tạo & sở hữu
e->Attack();                  // dùng như con trỏ thường
// KHÔNG cần delete — tự hủy khi hết scope

// KHÔNG thể copy (vì "duy nhất"), chỉ có thể MOVE quyền sở hữu:
std::unique_ptr<Enemy> e2 = std::move(e);   // e giờ rỗng, e2 sở hữu
```

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

## 11. Move Semantics & Rvalue References

Move cho phép kiểu dữ liệu **chuyển tài nguyên thay vì sao chép** khi thiết kế của nó hỗ trợ. Chi phí phụ thuộc kiểu và thao tác; không phải move nào cũng rẻ hơn copy.

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

---

# PHẦN III — LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP)

## 12. Classes & Objects

**Class** = bản thiết kế (blueprint). **Object** = thực thể cụ thể tạo từ class (instance).

```cpp
class Character {
public:                          // ai cũng truy cập được
    std::string name;
    void Speak() { std::cout << name << " says hi"; }

private:                         // chỉ nội bộ class truy cập
    int secretLevel = 1;

protected:                       // class này + class con truy cập được
    int health = 100;
};

Character hero;                  // tạo object (instance)
hero.name = "Knight";
hero.Speak();
```

### Access Specifiers (mức truy cập)
| Specifier | Truy cập từ | Dùng cho |
|---|---|---|
| `public` | mọi nơi | interface công khai |
| `protected` | trong class + class con | dữ liệu cho subclass |
| `private` | chỉ trong chính class | chi tiết nội bộ (mặc định của `class`) |

> **Encapsulation (đóng gói):** Giữ dữ liệu `private`, mở `public` các hàm để thao tác. Bên ngoài không "sờ" trực tiếp vào dữ liệu → kiểm soát được tính hợp lệ.

```cpp
class HealthComponent {
private:
    int health = 100;
    int maxHealth = 100;
public:
    void TakeDamage(int dmg) {
        health = std::max(0, health - dmg);   // logic kiểm soát ở 1 nơi
    }
    int GetHealth() const { return health; }   // getter chỉ-đọc
};
```

### `struct` vs `class`
Giống hệt nhau, chỉ khác **mặc định**: `struct` mặc định `public`, `class` mặc định `private`. Quy ước thông dụng: `struct` cho dữ liệu thuần (POD — plain data), `class` cho thứ có hành vi/đóng gói.

## 13. Constructor/Destructor & Rule of 0/3/5

### Constructor — khởi tạo object
```cpp
class Vector3 {
    float x, y, z;
public:
    Vector3() : x(0), y(0), z(0) {}                       // default constructor
    Vector3(float x, float y, float z) : x(x), y(y), z(z) {}  // parameterized
    // ":" mở đầu member initializer list — KHỞI TẠO trực tiếp, hiệu quả hơn gán trong thân
};

Vector3 a;                  // gọi default → (0,0,0)
Vector3 b(1.0f, 2.0f, 3.0f);// gọi parameterized
Vector3 c{1.0f, 2.0f, 3.0f};// brace init (C++11, khuyến nghị)
```

### Destructor — dọn dẹp khi object bị hủy
```cpp
class Texture {
    unsigned char* pixels;
public:
    Texture()  { pixels = new unsigned char[1024]; }
    ~Texture() { delete[] pixels; }   // ~TênClass = destructor, tự gọi khi object hết đời
    Texture(const Texture&) = delete;
    Texture& operator=(const Texture&) = delete;
    Texture(Texture&&) = delete;
    Texture& operator=(Texture&&) = delete;
};
```

Đây là minh họa raw resource với copy/move bị cấm. Không copy mặc định con trỏ sở hữu: hai bản sẽ cùng `delete[]` một vùng nhớ. Thực tế, dùng `std::vector<unsigned char>` hoặc `std::unique_ptr<unsigned char[]>` để tránh tự quản lý vòng đời.

### Rule of 0/3/5 — quy tắc cực kỳ quan trọng
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

## 14. Inheritance & Polymorphism

### Inheritance (kế thừa) — quan hệ "is-a"
```cpp
class Entity {                  // base class (lớp cha)
public:
    void Move(float dx, float dy) { /* ... */ }
    int health = 100;
};

class Enemy : public Entity {   // Enemy KẾ THỪA Entity → Enemy "is-a" Entity
public:
    void Attack() { /* ... */ }  // thêm hành vi riêng
};

Enemy goblin;
goblin.Move(1, 0);   // dùng được hàm kế thừa từ Entity
goblin.Attack();     // dùng hàm riêng
```

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

## 15. Virtual Functions & Abstract Classes

### Pure Virtual & Abstract Class (interface)
```cpp
class IDamageable {                      // tiền tố "I" = interface (quy ước)
public:
    virtual void TakeDamage(int amount) = 0;   // "= 0" → pure virtual
    virtual ~IDamageable() = default;
};
// Class có pure virtual → ABSTRACT, KHÔNG thể tạo instance trực tiếp.

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

## 16. Composition over Inheritance

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

---

# PHẦN IV — C++ HIỆN ĐẠI (Modern C++)

> "Modern C++" = C++11 trở đi. Nó thay đổi *cách viết* C++ rất nhiều: an toàn hơn, gọn hơn, nhanh hơn. **Luôn viết Modern C++.**

## 17. auto, nullptr, range-based for

```cpp
// auto — suy kiểu tự động (đặc biệt hữu ích với kiểu dài dòng)
std::vector<std::pair<int, std::string>> data;
for (auto it = data.begin(); it != data.end(); ++it) { /* ... */ }   // thay vì gõ cả kiểu iterator

// nullptr — thay cho NULL/0 cũ (an toàn về kiểu)
Player* p = nullptr;          // ✅ thay vì  Player* p = NULL;  (lỗi thời)

// range-based for — duyệt gọn gàng
for (const auto& enemy : enemies) { enemy.Update(); }

// structured bindings (C++17) — "tách" tuple/pair/struct
std::map<std::string, int> scores;
for (const auto& [name, score] : scores) {        // tách key & value đẹp đẽ
    std::cout << name << ": " << score;
}
```

## 18. Lambda Expressions

Hàm vô danh (anonymous function) định nghĩa ngay tại chỗ — cực mạnh cho callback, sort, filter.

```cpp
// Cú pháp: [capture](params) -> returnType { body }
auto add = [](int a, int b) { return a + b; };
int sum = add(3, 4);          // 7

// Capture — "bắt" biến từ scope ngoài:
int threshold = 50;
auto isStrong = [threshold](const Enemy& e) {   // capture by value (sao chép)
    return e.health > threshold;
};

int multiplier = 2;
auto scale = [&multiplier](int x) {             // capture by reference (tham chiếu)
    return x * multiplier;
};

// [=]/[&]: mặc định capture theo value/reference cho các biến cần dùng.
// [this] giữ pointer tới object; không copy object.
```

**Ứng dụng thực tế — sort & filter:**
```cpp
std::vector<Enemy> enemies;
// Sắp xếp enemy theo máu giảm dần:
std::sort(enemies.begin(), enemies.end(),
    [](const Enemy& a, const Enemy& b) { return a.health > b.health; });

// Đếm enemy còn sống:
int alive = std::count_if(enemies.begin(), enemies.end(),
    [](const Enemy& e) { return e.health > 0; });
```

## 19. Templates & Generic Programming

Viết một khuôn code dùng cho **các kiểu đáp ứng phép toán/yêu cầu của khuôn**; compiler tạo specialization cần dùng. Template không tự làm mọi kiểu hợp lệ hoặc bảo đảm mọi phép toán đều miễn phí.

### Function Template
```cpp
template <typename T>
T Max(T a, T b) {
    return (a > b) ? a : b;
}

int   m1 = Max(3, 7);          // T = int
float m2 = Max(2.5f, 1.0f);    // T = float — cùng code, compiler tự sinh 2 bản
```

### Class Template
```cpp
template <typename T>
class Stack {
    std::vector<T> elements;
public:
    void Push(const T& item) { elements.push_back(item); }
    T    Pop() { T top = elements.back(); elements.pop_back(); return top; }
    bool IsEmpty() const { return elements.empty(); }
};

Stack<int>    intStack;        // stack chứa int
Stack<Enemy*> enemyStack;      // stack chứa con trỏ Enemy
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

## 20. STL Containers

Standard Template Library cung cấp các container đã tối ưu sẵn. **Đừng tự viết lại** dynamic array, linked list, hash map...

| Container | Cấu trúc | Truy cập | Thêm/Xóa | Dùng khi |
|---|---|---|---|---|
| `std::vector<T>` | mảng động liền kề | O(1) theo index | O(1) amortized cuối / O(n) giữa | **Mặc định** — 90% trường hợp |
| `std::array<T,N>` | phần tử liền kề bên trong object | O(1) | không đổi size | size cố định, biết lúc compile |
| `std::deque<T>` | hàng đợi 2 đầu | O(1) | O(1) hai đầu | thêm/xóa cả 2 đầu |
| `std::list<T>` | doubly linked list | O(n) | O(1) cho một phần tử khi đã có iterator | cần iterator ổn định/chèn xóa; đo chi phí duyệt |
| `std::map<K,V>` | cây cân bằng (sorted) | O(log n) | O(log n) | cần thứ tự theo key |
| `std::unordered_map<K,V>` | hash table | O(1) trung bình | O(1) trung bình | tra cứu nhanh theo key |
| `std::set<T>` | tập hợp có thứ tự | O(log n) | O(log n) | phần tử duy nhất, có thứ tự |
| `std::unordered_set<T>` | hash set | O(1) tb | O(1) tb | phần tử duy nhất, tra nhanh |

```cpp
#include <vector>
#include <unordered_map>

std::vector<Enemy> enemies;
enemies.push_back(Enemy{});        // thêm cuối
enemies.emplace_back();            // dựng phần tử mới từ đối số; không luôn nhanh hơn push_back
enemies[0].health = 50;            // truy cập theo index
enemies.size();                    // số phần tử
enemies.clear();                   // xóa hết

std::unordered_map<std::string, int> inventory;
inventory["potion"] = 5;           // thêm/sửa
inventory["sword"]  = 1;
if (inventory.find("potion") != inventory.end()) // C++17; contains là C++20
    inventory["potion"]--;
```

> **Lời khuyên hiệu năng cho game:** `std::vector` thường là lựa chọn nhanh nhất vì dữ liệu **liền kề trong bộ nhớ** → thân thiện cache (xem mục 27). `std::list`/`std::map` (node rời rạc) thường chậm vì cache miss, dù big-O đẹp.

## 21. STL Algorithms & Iterators

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

## 22. const correctness, constexpr, enum class

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

### enum class — enum an toàn về kiểu (scoped enum)
```cpp
// ❌ enum cũ (unscoped) — dễ lẫn, tự ngầm chuyển sang int:
enum Color { Red, Green, Blue };       // Red, Green... "rò" ra scope ngoài

// ✅ enum class (C++11) — an toàn, có scope:
enum class WeaponType { Sword, Bow, Staff };
WeaponType w = WeaponType::Sword;      // phải ghi rõ scope
// int x = w;                          // ❌ LỖI — không tự chuyển sang int (tốt!)
int x = static_cast<int>(w);           // muốn chuyển thì phải ép tường minh
```

> Chi tiết các loại ép kiểu (`static_cast`, `dynamic_cast`... và `Cast<>()` của Unreal): xem **mục 46**.

## 23. Error Handling (xử lý lỗi)

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

---

# PHẦN V — C++ CHO GAME (tổng quát)

## 24. Vì sao C++ thống trị game dev

1. **Hiệu năng (Performance):** Game phải dựng 16.6ms/frame (60fps). C++ cho mã máy gần tối ưu, không GC pause.
2. **Kiểm soát bộ nhớ (Memory control):** Tự quản layout, alignment, pooling → tránh giật do GC, tối ưu cache.
3. **Truy cập phần cứng & API thấp:** Trực tiếp với GPU API (DirectX, Vulkan), SIMD, console SDK.
4. **Hệ sinh thái engine:** Unreal, CryEngine, hầu hết engine AAA viết bằng C++; nhiều engine khác (Unity, Godot) có lõi C++.
5. **Tính xác định (Determinism):** Quan trọng cho physics, netcode, replay.

> **Đánh đổi:** C++ khó và nguy hiểm hơn C#/Python. Bạn đổi sự an toàn lấy hiệu năng & kiểm soát. Vì thế kỷ luật (RAII, smart pointer, const correctness) là bắt buộc.

## 25. Game Loop

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

## 26. Data-Oriented Design & ECS

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

## 27. Performance: Cache, Profiling, Tối ưu

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

## 28. Math cho game (Vector, Matrix, Quaternion)

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

## 29. Design Patterns thường gặp trong game

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

### Component Pattern — (đã nói ở mục 16) nền tảng của Unreal Actor & ECS.

---

# PHẦN VI — UNREAL ENGINE C++

> Unreal Engine dùng một "phương ngữ" C++ riêng với reflection system, garbage collection, và bộ container/smart pointer riêng. Hiểu rõ khác biệt giúp tránh nhầm lẫn khi chuyển từ Standard C++.

## 30. UE C++ khác Standard C++ thế nào

| Khía cạnh | Standard C++ | Unreal C++ |
|---|---|---|
| Quản lý bộ nhớ | new/delete, smart pointer | **Garbage Collector** cho `UObject` |
| Container | `std::vector`, `std::map`... | `TArray`, `TMap`, `TSet`... |
| String | `std::string` | `FString`, `FName`, `FText` |
| Smart pointer | `unique_ptr`, `shared_ptr` | `TUniquePtr`, `TSharedPtr`, `TObjectPtr`, `TWeakObjectPtr` |
| Reflection | không có | **có** (UCLASS/UPROPERTY/UFUNCTION) |
| Exceptions | có | **mặc định tắt** |
| Assert | `assert` | `check()`, `ensure()`, `verify()` |
| Ép kiểu | `static_cast`, `dynamic_cast` | `Cast<>()` / `CastChecked<>()` — RTTI mặc định tắt (mục 46) |
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

## 31. UObject, Reflection & Macros

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

    // UPROPERTY — cho biến: hiện trong editor, được GC quản lý, serialize, replicate
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
| `meta = (ClampMin="0")` | Ràng buộc giá trị |

> **Cực kỳ quan trọng:** Mọi con trỏ tới `UObject` là **member của class** cần được đánh dấu `UPROPERTY()`. Nếu quên, GC không biết bạn đang giữ object đó → nó có thể bị **thu hồi giữa chừng** → crash. (Xem mục 32.)

## 32. Garbage Collection trong UE

Khác Standard C++ (bạn tự delete), UE **tự động** thu hồi `UObject` không còn được tham chiếu. Cơ chế: **reachability analysis** — định kỳ quét từ "root set", object nào không reachable qua các `UPROPERTY` → bị xóa.

```cpp
UCLASS()
class AWeaponManager : public AActor {
    GENERATED_BODY()

    // ✅ ĐÚNG — UPROPERTY → GC biết, object an toàn, con trỏ tự thành null nếu bị hủy
    UPROPERTY()
    TObjectPtr<AWeapon> CurrentWeapon;

    // ❌ SAI — raw pointer KHÔNG UPROPERTY → GC không biết → có thể thành dangling pointer
    AWeapon* DangerousWeapon;   // ĐỪNG làm thế này với UObject members
};
```

### Tạo UObject đúng cách (KHÔNG dùng new)
```cpp
// Tạo Actor trong world:
AWeapon* Weapon = GetWorld()->SpawnActor<AWeapon>(WeaponClass, Location, Rotation);

// Tạo Component:
MeshComp = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("MeshComp"));  // trong constructor

// Tạo UObject thường (không phải Actor/Component):
UMyObject* Obj = NewObject<UMyObject>(this);   // 'this' = outer (chủ sở hữu)
```

> **Ghi nhớ:** Không bao giờ `new`/`delete` một `UObject`. Dùng `NewObject`, `SpawnActor`, `CreateDefaultSubobject`, và để GC lo phần hủy.

## 33. Actor & Component

### Actor — bất cứ thứ gì đặt được vào level
`AActor` là object có thể tồn tại trong world (có transform: vị trí, xoay, scale). Ví dụ: nhân vật, đèn, camera, trigger volume.

### Component — khối chức năng gắn vào Actor (Composition!)
Actor là cái "khung", Component cung cấp hành vi cụ thể. Đây chính là **composition over inheritance** (mục 16) ở quy mô engine.

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

## 34. Gameplay Framework

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

> Nhận input người chơi trong UE5 dùng **Enhanced Input** (Input Action + Mapping Context) — xem **mục 52**.

## 35. UE Containers vs STL

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

## 36. UE Smart Pointers & Object Handles

UE có 2 nhóm smart pointer cho 2 loại object khác nhau:

### Cho UObject (đã có GC quản lý)
```cpp
// TObjectPtr — thay cho raw pointer trong UPROPERTY (UE5 khuyến nghị)
UPROPERTY()
TObjectPtr<AWeapon> Weapon;            // GC biết, hỗ trợ lazy load

// TWeakObjectPtr — tham chiếu yếu, KHÔNG ngăn GC, tự null khi object bị hủy
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

> **Quy tắc chọn:** UObject → dùng `UPROPERTY` + `TObjectPtr`/`TWeakObjectPtr`. Non-UObject → dùng `TSharedPtr`/`TUniquePtr`/`TWeakPtr`. **Không bao giờ** dùng `TSharedPtr`/`TUniquePtr` cho `UObject` — ref-count sẽ xung đột với GC.

## 37. Delegates & Events

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

> Các event va chạm (`OnComponentBeginOverlap`, `OnComponentHit`...) chính là dynamic multicast delegate — cách bind & chữ ký chuẩn: xem **mục 53**.

## 38. C++ ↔ Blueprint Interaction

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

## 39. Data-Driven Design (DataAsset, DataTable)

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

## 40. Gameplay Ability System (GAS) — tổng quan

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
> Module phải link `"GameplayAbilities"` (mục 30) và include `"AttributeSet.h"`, `"AbilitySystemComponent.h"`. Trong thực tế, attribute thường thêm `ReplicatedUsing = OnRep_Health` để hỗ trợ multiplayer.

> **Vì sao dùng GAS:** xử lý sẵn các bài toán khó của combat system (prediction cho multiplayer, stacking effect, cooldown, cost, replication). Đánh đổi: learning curve dốc, setup ban đầu nhiều. Phù hợp khi hệ thống ability đủ phức tạp để xứng đáng.

---

# PHẦN VII — KỸ THUẬT & THỰC HÀNH

## 41. Tổ chức code: Header/Source, Forward Declaration

### Nguyên tắc include
- Header (`.h`) chỉ include **những gì interface cần**. Phần còn lại include trong `.cpp`.
- Dùng **forward declaration** thay include khi chỉ cần con trỏ/tham chiếu → giảm thời gian biên dịch & tránh circular include.

```cpp
// Weapon.h
#pragma once

class Player;          // FORWARD DECLARATION — đủ vì ta chỉ dùng con trỏ Player*

class Weapon {
    Player* owner;     // chỉ cần biết "Player tồn tại", chưa cần định nghĩa đầy đủ
public:
    void SetOwner(Player* p);
    void DealDamage();
};
```

```cpp
// Weapon.cpp
#include "Weapon.h"
#include "Player.h"    // CHỖ NÀY mới include đầy đủ vì cần GỌI hàm của Player

void Weapon::DealDamage() {
    owner->TakeDamage(10);   // cần định nghĩa đầy đủ của Player ở đây
}
```

> **Quy tắc:** Cần *gọi hàm / truy cập member / tạo object* → phải include đầy đủ. Chỉ cần *con trỏ hoặc tham chiếu* → forward declaration là đủ.

### Trong Unreal
```cpp
// Trong .h — forward declare bằng class:
UPROPERTY()
TObjectPtr<class UStaticMeshComponent> Mesh;   // "class" inline = forward declaration nhanh (TObjectPtr vẫn dùng được với forward decl)

// Trong .cpp — include đầy đủ:
#include "Components/StaticMeshComponent.h"
```

## 42. Naming Conventions & Code Style

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

## 43. Debugging

### Kỹ thuật cơ bản
```cpp
// 1. Print debugging (Standard C++)
std::cout << "Health: " << health << ", Position: " << pos.x << "\n";

// 2. Print debugging (Unreal)
UE_LOG(LogTemp, Warning, TEXT("Health: %f, Enemies: %d"), Health, Enemies.Num());
// In lên màn hình game (debug nhanh):
GEngine->AddOnScreenDebugMessage(-1, 5.0f, FColor::Red,
    FString::Printf(TEXT("Health: %f"), Health));

// 3. Log category riêng cho dự án (thay LogTemp) — nên khai báo ngay từ đầu:
//    trong 1 header dùng chung:  DECLARE_LOG_CATEGORY_EXTERN(LogTrainingGame, Log, All);
//    trong đúng 1 file .cpp:     DEFINE_LOG_CATEGORY(LogTrainingGame);
UE_LOG(LogTrainingGame, Warning, TEXT("Wave %d bắt đầu"), WaveIndex);
```

### Breakpoint & Debugger (quan trọng nhất)
- Đặt **breakpoint** để dừng tại dòng cần xem, kiểm tra giá trị biến (watch), call stack.
- **Step over / into / out** để đi từng dòng.
- Hiệu quả hơn print rất nhiều cho lỗi logic phức tạp.

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

## 44. Undefined Behavior & các bẫy phổ biến

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

## 45. Best Practices Checklist

Bản tổng kết tra cứu nhanh khi viết/review code:

### Bộ nhớ & tài nguyên
- [ ] Ưu tiên giá trị/owner **RAII** có lifetime rõ ràng hơn `new`/`delete` trần.
- [ ] Áp dụng **RAII** cho mọi tài nguyên (file, mutex, memory...).
- [ ] `unique_ptr` mặc định; `shared_ptr` khi cần chia sẻ; `weak_ptr` phá vòng tham chiếu.
- [ ] (UE) Mọi `UObject*` member là **`UPROPERTY()`**; không `new`/`delete` UObject.
- [ ] (UE) Callback cho `AddDynamic` (delegate/overlap/timer) là `UFUNCTION()` và **đúng chữ ký** (mục 37, 53).

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
- [ ] (UE) Không đụng UObject/Actor ngoài **Game Thread** (mục 50).

### Tổ chức & phong cách
- [ ] Tên rõ nghĩa; hàm ngắn, làm một việc.
- [ ] Forward declaration thay include khi đủ; tránh circular include.
- [ ] Nhất quán naming convention toàn dự án.
- [ ] Comment giải thích **why**, không phải **what**.

---

# PHẦN VIII — CHỦ ĐỀ BỔ SUNG (Supplementary Topics)

> Các mục dưới đây bổ sung cho Phần I–VII: một nửa là kiến thức C++ nền tảng chưa đề cập (casting, namespace, operator overloading, string, threading), nửa còn lại là kỹ năng Unreal "dùng hằng ngày" (interface, Enhanced Input, timer, collision, replication, testing). Thứ tự học xen kẽ các mục này đã được xếp sẵn trong **Phụ lục H**.

## 46. Casting & chuyển kiểu (C++ & Unreal)

### Chuyển kiểu ngầm (implicit) & narrowing
```cpp
int   i = 3;
float f = i;          // giá trị 3 biểu diễn chính xác; int lớn có thể mất chính xác
int   j = 3.7f;       // ⚠️ NARROWING — j = 3, phần thập phân bị cắt (compiler chỉ warning)
int   k{3.7f};        // ❌ LỖI BIÊN DỊCH — brace init CHẶN narrowing (một lý do nên dùng {})
```

### 4 loại cast tường minh của C++ — đừng dùng C-style cast
| Cast | Dùng cho | Kiểm tra runtime? |
|---|---|---|
| `static_cast<T>(x)` | số ↔ số, up-cast, down-cast "tự chịu trách nhiệm", `void*` ↔ `T*` | ❌ Không |
| `dynamic_cast<T*>(p)` / `dynamic_cast<T&>(x)` | down/cross-cast có kiểm tra với kiểu nguồn đa hình | pointer thất bại → `nullptr`; reference thất bại → ném `std::bad_cast` |
| `const_cast<T>(x)` | thay đổi cv-qualification của pointer/reference | ❌ — sửa object thật sự const qua cast là UB |
| `reinterpret_cast<T>(x)` | một số chuyển đổi pointer/integer mức thấp | ❌ — không tự tạo object kiểu mới hay bảo đảm truy cập hợp lệ; không phải công cụ serialization tổng quát |

```cpp
float ratio = static_cast<float>(kills) / deaths;   // ép sang float để chia số thực

Entity* e = GetSomeEntity(); // giả sử Entity là base đa hình, có ít nhất một hàm virtual
if (Enemy* enemy = dynamic_cast<Enemy*>(e)) {   // chỉ vào if nếu e THẬT SỰ là Enemy
    enemy->Attack();
}

// Tránh (Enemy*)e: C-style cast có thể dùng static/const/reinterpret_cast
// hoặc các kết hợp được phép; KHÔNG bao gồm kiểm tra dynamic_cast.
```

> **Quy tắc:** cần chuyển kiểu → viết cast **tường minh, có tên**. Nếu thấy mình cần `dynamic_cast` ở nhiều nơi → thường là dấu hiệu nên thiết kế lại bằng virtual function/interface thay vì "hỏi kiểu".

Các cast đòi hỏi đối tượng nguồn còn sống và kiểu hợp lệ; kiểm tra kiểu không chữa dangling pointer. Xem [dynamic_cast](https://eel.is/c++draft/expr.dynamic.cast) và [các phép chuyển đổi của C-style cast](https://eel.is/c++draft/expr.cast).

### Trong Unreal: dùng `Cast<>()` — KHÔNG dùng dynamic_cast
UE build với **RTTI tắt** ở hầu hết module, và `UObject` đã có reflection (mục 31) → dùng cast của engine:

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

> `Cast<>` hoạt động nhờ reflection nên **chỉ dùng cho `UObject`**. Kiểu non-UObject (struct `F...` thường) → dùng cast chuẩn C++ như bình thường. Kiểm tra interface: `Implements<UMyInterface>()` (mục 51).

## 47. Namespaces, static & Linkage

### Namespace — chống đụng độ tên
```cpp
namespace Math {
    float Lerp(float a, float b, float t) { return a + (b - a) * t; }
}
namespace Game::Combat {                 // nested namespace (C++17)
    float CalcDamage(float base, float armor);
}

float x = Math::Lerp(0.f, 10.f, 0.5f);
using Game::Combat::CalcDamage;          // using-declaration: đem đúng 1 tên vào scope — OK
// using namespace std;                  // ❌ using-directive trong HEADER — CẤM (đổ cả std vào mọi file include nó)
```

> **Quy tắc team:** không bao giờ viết `using namespace` trong header; trong `.cpp` dùng tiết chế.

### Anonymous namespace — "private" cấp file
```cpp
// Weapon.cpp
namespace {                        // mọi thứ trong đây CHỈ thấy được trong file này (internal linkage)
    constexpr float kCritMultiplier = 2.0f;
    float RollCrit() { /* ... */ return kCritMultiplier; }
}
```
Tương đương `static` cho hàm/biến tự do, nhưng là cách viết C++ hiện đại khuyến nghị.

### 3 nghĩa của `static`
```cpp
int Counter() {
    static int calls = 0;      // 1) static LOCAL — giữ giá trị qua các lần gọi
    return ++calls;
}

class Enemy {
    static int aliveCount;     // 2) static MEMBER — thuộc về CLASS, mọi object dùng chung
public:
    static int GetAliveCount() { return aliveCount; }   // gọi không cần object: Enemy::GetAliveCount()
};
int Enemy::aliveCount = 0;     // định nghĩa trong .cpp (C++17: có thể viết `inline static int aliveCount = 0;` ngay trong class)

static void Helper() {}        // 3) static FREE FUNCTION — chỉ thấy trong file .cpp này (≈ anonymous namespace)
```

Khởi tạo local static có đồng bộ từ C++11, nhưng phép `++calls` sau khởi tạo không tự thread-safe. Bộ đếm ví dụ chỉ dùng trong một luồng. Xem [khởi tạo biến static cục bộ](https://eel.is/c++draft/stmt.dcl).

### Lưu ý riêng cho Unreal
> **UHT không hỗ trợ reflected type nằm trong namespace:** `UCLASS`, `USTRUCT`, `UENUM` phải ở global scope — đó là lý do UE dùng **prefix** (A/U/F/E) thay cho namespace. Code C++ thuần (không reflection) trong project vẫn dùng namespace bình thường; code engine mới của Epic cũng vậy (vd `UE::Tasks`, `UE::Math`).

## 48. Operator Overloading

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

## 49. Strings chuyên sâu (std::string & FString)

### std::string — thao tác hay dùng
```cpp
#include <string>
std::string name = "Knight";
name += " of Astora";                       // nối chuỗi
size_t pos = name.find("Astora");           // tìm — trả std::string::npos nếu không thấy
std::string sub = name.substr(0, 6);        // "Knight"
const char* c = name.c_str();               // chuyển sang C-string cho API cũ

// Số ↔ chuỗi:
std::string s = std::to_string(42);
int hp = std::stoi("100");                  // ⚠️ ném exception nếu chuỗi không hợp lệ

// C++20 — format hiện đại, thay cho cộng chuỗi lộn xộn:
#include <format>
std::string msg = std::format("HP: {}/{} ({:.1f}%)", hp, maxHp, 100.f * hp / maxHp);
```

### std::string_view (C++17) — "nhìn" chuỗi mà không copy
```cpp
#include <string_view>
void PrintTag(std::string_view tag);   // nhận được cả std::string lẫn literal — KHÔNG copy
PrintTag("Boss");                      // không tạo std::string tạm
// ⚠️ string_view KHÔNG sở hữu dữ liệu — đừng lưu lại lâu hơn chuỗi gốc (dangling!)
```

### Chuyển đổi std::string ↔ FString (khi UE giao tiếp thư viện ngoài)
```cpp
std::string Std = "hello";
FString UStr = UTF8_TO_TCHAR(Std.c_str());          // std → FString

FString F = TEXT("Xin chào");
std::string Back = TCHAR_TO_UTF8(*F);               // FString → std (copy vào std::string NGAY)

// 💥 BẪY: macro tạo object chuyển đổi TẠM — con trỏ này dangling ngay sau dấu chấm phẩy:
// const char* Bad = TCHAR_TO_UTF8(*F);   // ĐỪNG lưu con trỏ; hãy copy vào std::string như trên
```

### Chọn loại chuỗi trong UE (ôn lại mục 35)
| Cần gì | Dùng |
|---|---|
| Chuỗi build/sửa/nối/format | `FString` |
| Định danh so sánh nhiều lần (tag, socket, tên asset) | `FName` (hash sẵn, không phân biệt hoa/thường) |
| Chữ hiển thị cho người chơi (cần dịch) | `FText` |

## 50. Multithreading cơ bản cho game

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

## 51. Unreal Interfaces (UINTERFACE)

Interface thuần C++ (mục 15) không "nhìn thấy được" từ Blueprint và không dùng được reflection. UE giải quyết bằng **cặp class U/I**:

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

**Khi nào dùng gì:** hệ thống nội bộ thuần C++ (không dính Blueprint) → interface C++ thường (mục 15) cho nhẹ. Cần designer implement/gọi từ Blueprint, hoặc cần hỏi "actor này có tương tác được không?" xuyên qua nhiều class không họ hàng → UINTERFACE.

## 52. Enhanced Input (UE5)

Hệ input cũ (`BindAxis`/`BindAction` cấu hình trong ini) đã **deprecated từ UE 5.1** — dự án mới dùng **Enhanced Input**: input trở thành *asset*, designer chỉnh không cần build lại code.

### 2 loại asset (tạo trong Content Browser → Input)
| Asset | Vai trò | Ví dụ |
|---|---|---|
| **Input Action (IA_)** | MỘT hành động trừu tượng + kiểu giá trị | `IA_Move` (Axis2D), `IA_Jump` (Digital/bool) |
| **Input Mapping Context (IMC_)** | Bảng map phím → action, kèm modifier/trigger | `IMC_Default`: WASD → IA_Move, Space → IA_Jump |

Nhớ thêm `"EnhancedInput"` vào `PublicDependencyModuleNames` trong `.Build.cs` (mục 30).

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

## 53. Timers, Collision & tiện ích gameplay

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

## 54. Multiplayer & Replication — tổng quan

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

> **Nguyên tắc:** gameplay quan trọng (máu, đạn, điểm) do **server quyết**; client chỉ gửi *ý định* (RPC Server) và nhận *kết quả* (replicated property / OnRep). `Reliable` cho lệnh quan trọng, `Unreliable` cho hiệu ứng có thể rớt. Hệ prediction hoàn chỉnh cho ability: xem GAS (mục 40).

## 55. Unit Testing & Automation

Code có test = dám refactor. Nguyên tắc thiết kế để test được: **tách logic thuần (tính damage, kiểm kho đồ...) ra khỏi engine** — chính là composition (mục 16) và data-driven (mục 39) đang giúp bạn.

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

---

# PHỤ LỤC

## A. Cheat Sheet cú pháp

```cpp
// ===== KHAI BÁO =====
int x = 5;                          auto y = 5;
const int c = 10;                   constexpr int cc = 10;
int& ref = x;                       int* ptr = &x;
std::unique_ptr<T> u = std::make_unique<T>(args);
std::shared_ptr<T> s = std::make_shared<T>(args);

// ===== CONTROL FLOW =====
if (cond) {} else if (cond) {} else {}
switch (val) { case A: break; default: break; }
for (int i = 0; i < n; ++i) {}
for (const auto& item : container) {}
while (cond) {}                     do {} while (cond);

// ===== CLASS =====
class Foo {
public:
    Foo() = default;                // default constructor
    Foo(int x) : value(x) {}        // member init list
    virtual ~Foo() = default;       // virtual destructor
    virtual void Bar() = 0;         // pure virtual (abstract)
    int Get() const { return value; }
private:
    int value = 0;
};
class Derived : public Foo {
    void Bar() override {}          // override
};

// ===== TEMPLATE =====
template <typename T> T Max(T a, T b) { return a > b ? a : b; }
template <typename T> class Box { T item; };

// ===== LAMBDA =====
auto fn = [capture](params) -> ret { body };
[](){}          [=](){}         [&](){}        [this](){}

// ===== STL =====
std::vector<T> v;  v.push_back(x);  v.size();  v[i];
std::map<K,V> m;   m[key] = val;    m.find(key);
std::sort(v.begin(), v.end(), [](auto a, auto b){ return a < b; });
```

## B. STL vs UE — bảng đối chiếu nhanh

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

## C. Glossary (thuật ngữ)

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

## D. Tài nguyên học tập

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

## E. Bảng lỗi build & runtime thường gặp

Tra ngược từ thông báo lỗi. Mẹo số 1: luôn đọc **lỗi ĐẦU TIÊN** trong output — các lỗi phía sau thường chỉ là hệ quả dây chuyền.

| Thông báo (rút gọn) | Nguyên nhân thường gặp | Hướng xử lý |
|---|---|---|
| `C2065: 'X': undeclared identifier` | thiếu `#include`, sai chính tả, quên khai báo | include đúng header; kiểm tra scope/namespace |
| `C2143 / C2447: syntax error` | thiếu `;` — kinh điển nhất: **quên `;` sau `}` đóng class** | nhìn dòng NGAY TRÊN vị trí báo lỗi |
| `C4430: missing type specifier` | header được include phía trước bị lỗi / thiếu `;` → "lây" sang file này | sửa header bị include trước đó |
| `C2027: use of undefined type 'X'` | mới forward declare nhưng lại gọi hàm/truy cập member | `#include` đầy đủ trong `.cpp` (mục 41) |
| `C2664: cannot convert argument` | sai kiểu tham số; thiếu `*`/`&`; (UE) quên `TEXT()` hoặc quên `*FString` | so lại chữ ký hàm; xem mục 35 |
| `LNK2019: unresolved external symbol` | khai báo nhưng chưa định nghĩa; `.cpp` chưa vào build; (UE) **thiếu module trong `.Build.cs`**; thiếu macro `MYGAME_API` khi dùng chéo module | viết định nghĩa; thêm module (mục 30); thêm macro API |
| `LNK2005 / LNK1169: already defined` | nhiều định nghĩa external cùng symbol giữa các translation unit | giữ một định nghĩa trong `.cpp`, hoặc dùng `inline` đúng ODR; `#pragma once` chỉ ngăn include lặp trong một translation unit |
| `LNK1120: unresolved externals` | chỉ là dòng "tổng kết" của các LNK2019 phía trên | sửa từng LNK2019 |
| Runtime: `stack overflow` | đệ quy vô hạn; mảng khổng lồ trên stack | thêm điều kiện dừng; chuyển sang `std::vector`/heap (mục 7) |
| UE: `cannot open ... '.generated.h'` | class mới UHT chưa biết; `.generated.h` không phải include **cuối cùng** | Generate project files lại; kiểm tra thứ tự include (mục 31) |
| UE: lỗi template khó hiểu tại `AddDynamic` | callback thiếu `UFUNCTION()` hoặc **sai chữ ký** | xem mục 37 & 53 |
| UE: `Unrecognized type 'std::vector'` trong UPROPERTY | reflection không hỗ trợ kiểu STL | dùng `TArray`/`TMap`/`TSet` (mục 35) |
| UE: crash khi PIE, call stack trỏ vào con trỏ | dereference `nullptr` / actor đã destroy; UObject bị GC vì quên UPROPERTY | `IsValid()` (mục 44); UPROPERTY (mục 32) |
| UE: `Module 'X' could not be loaded` khi mở project | Binaries lỗi thời / không khớp phiên bản engine | đóng editor → build từ IDE; nặng hơn: xóa `Binaries/ Intermediate/` + Generate lại |
| UE: Live Coding báo thành công nhưng hành vi "ma" | thay đổi header/UPROPERTY qua Live Coding | đóng editor, build lại từ IDE (mục 0) |

> Build lỗi hàng loạt sau khi kéo code mới? Thử **Rebuild** module game; vẫn lỗi → xóa `Intermediate/` + Generate project files. Và luôn đọc lỗi **từ trên xuống**.

## F. Bài tập thực hành theo phần

Cách dùng: học xong mỗi phần → làm bài tập tương ứng → nộp qua **Pull Request** theo Git guide nội bộ để mentor review (đối chiếu checklist mục 45). Bài đánh dấu ★ là nâng cao, không bắt buộc.

### Phần I — Nền tảng
1. **HP Simulator (console):** nhập damage liên tục từ bàn phím, in trạng thái (`Healthy/Hurt/Dead`) qua hàm `void ApplyDamage(int& hp, int dmg)`. *Đạt khi:* dùng reference đúng, điều kiện rõ ràng, không có biến toàn cục.
2. **Wave Printer:** in danh sách quái theo wave bằng vòng lặp lồng nhau, dùng `continue`/`break` hợp lý. *Đạt khi:* giải thích được khi nào chọn `for` vs `while`.
3. **Pointer cơ bản:** viết `Enemy* FindWeakest(Enemy* arr, int count)` trả con trỏ tới quái yếu nhất (hoặc `nullptr` nếu mảng rỗng). *Đạt khi:* phía gọi kiểm tra null trước khi dùng.

### Phần II — Bộ nhớ
1. **ScopedTimer (RAII):** class đo thời gian bằng `<chrono>`: constructor lưu mốc, destructor in thời lượng. Dùng nó đo một vòng lặp nặng. *Đạt khi:* không có lệnh "stop" thủ công nào — RAII lo hết.
2. **Diệt new/delete:** nhận đoạn code có leak (mentor cung cấp) → refactor toàn bộ sang `unique_ptr`/`vector`. *Đạt khi:* chạy sạch dưới AddressSanitizer (mục 43).
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
3. ★ **AoS vs SoA:** update 1 triệu particle theo 2 cách, đo và giải thích kết quả bằng cache (mục 27).

### Phần VI — Unreal C++
1. **Health Pickup:** actor có sphere overlap, hồi máu cho character rồi tự hủy (mục 53). *Đạt khi:* callback là `UFUNCTION()`, có kiểm tra `Cast` trước khi dùng.
2. **HealthComponent tái sử dụng:** component + delegate `OnHealthChanged`/`OnDied` (mục 37); gắn được cho cả Player lẫn quái. *Đạt khi:* HUD (hoặc `UE_LOG`) cập nhật qua delegate, không gọi trực tiếp.
3. **Enemy từ DataTable:** định nghĩa `FEnemyRow`, spawn wave đọc từ CSV import (mục 39).
4. ★ **Interactable:** cửa + rương dùng chung một UINTERFACE (mục 51), gọi qua `Execute_`.

### Phần VII–VIII — Kỹ thuật
1. **Săn UB:** repo mẫu chứa 5 lỗi cài sẵn (dangling, out-of-bounds, quên UPROPERTY...) → tìm bằng sanitizer/debugger, sửa và mô tả từng lỗi trong PR.
2. **Enhanced Input:** thêm hành động `Dash` hoàn chỉnh (IA + IMC + bind + cooldown bằng timer — mục 52, 53).
3. **Test đầu tiên:** viết 3 automation test cho HealthComponent (mục 55), chạy pass trong Session Frontend.

## G. Capstone Project — Mini Arena Shooter

Dự án "tốt nghiệp" khóa nội bộ: game bắn súng arena nhỏ (third-person hoặc top-down), làm cá nhân trong **1–2 tuần**, nộp qua repo riêng theo Git guide.

### Yêu cầu chức năng ↔ kiến thức áp dụng
| # | Yêu cầu | Mục liên quan |
|---|---|---|
| 1 | Character di chuyển/nhảy bằng **Enhanced Input** | 52 |
| 2 | Vũ khí bắn bằng **LineTrace** (hoặc ★ projectile dùng **Object Pool**) | 53, 29, 27 |
| 3 | **HealthComponent** dùng chung cho player & quái, phát **delegate** cập nhật HUD | 33, 37 |
| 4 | Quái có **state machine** tối thiểu Idle → Chase → Attack | 29 |
| 5 | Wave quái cấu hình bằng **DataTable** (CSV) + spawn theo **Timer** | 39, 53 |
| 6 | Ít nhất 1 vật thể **Interactable** (hồi máu/đạn) qua **UINTERFACE** | 51 |
| 7 | **GameMode** xử lý thắng/thua; **GameState** giữ điểm/wave | 34 |
| 8 | Code sạch: naming, checklist, không warning mới, UPROPERTY đầy đủ | 42, 45, 32 |
| 9 | ★ Tự chọn 1: replication cơ bản cho 2 người chơi (54) *hoặc* 1 ability bằng GAS (40) *hoặc* 3 automation test (55) | — |

### Sản phẩm nộp
- Repo với lịch sử commit sạch theo Git guide + **README** (cách chạy, mô tả kiến trúc ~10 dòng, ảnh/GIF).
- Video demo ≤ 2 phút.
- Buổi review 30 phút với mentor: demo + walkthrough code + trả lời câu hỏi.

### Rubric chấm (đạt: ≥ 70/100)
| Tiêu chí | Trọng số | Nhìn vào đâu |
|---|---|---|
| Chức năng chạy đúng | 40% | các mục 1–7 hoạt động, không crash trong 5 phút chơi thử |
| Chất lượng code | 30% | checklist mục 45, naming, không UB, không quên UPROPERTY, dùng delegate thay coupling cứng |
| Kiến trúc & data-driven | 20% | component hóa hợp lý; số liệu nằm ở DataTable/DataAsset, không hard-code |
| Trình bày | 10% | README, video, trả lời trong buổi review |

## H. Lộ trình đào tạo & Onboarding Checklist

### Track A — Gameplay Programmer (mặc định, ~6 tuần, mỗi ngày ~2h học + thực hành)
| Tuần | Nội dung | Thực hành |
|---|---|---|
| 1 | Mục 0–6 (cài đặt, nền tảng, con trỏ) | Bài tập Phần I |
| 2 | Mục 7–13 + 46, 47 (bộ nhớ, RAII, smart pointer, cast, static) | Bài tập Phần II |
| 3 | Mục 14–23 + 48, 49 (OOP, Modern C++, STL, string) | Bài tập Phần III–IV |
| 4 | Mục 24–29 + 50 (game loop, DOD, patterns, threading) | Bài tập Phần V |
| 5 | Mục 30–39 + 51–53 (Unreal core, interface, input, timer/collision) | Bài tập Phần VI |
| 6 | Mục 40–45 + 54, 55 (GAS tổng quan, best practices, replication, test) | Bài tập VII–VIII + **bắt đầu Capstone** |
| +1–2 | — | Hoàn thành **Capstone (Phụ lục G)** + buổi review |

### Track B — Technical Artist / Designer chuyển sang code (~4 tuần)
Trọng tâm: đọc-hiểu và viết gameplay đơn giản, expose cho Blueprint. Học các mục: 0–6, 12–17, 20, 22, 25, 29 (state machine), 30–35, 37–39, 52–53. Có thể bỏ qua phần sâu: 11, 26–27, 50, 54. Capstone thu nhỏ: Pickup + HealthComponent + HUD + 1 Interactable.

### Track C — Engineer chuyển từ ngôn ngữ khác (C#/Java/Python...) (~3–4 tuần)
Tuần 1 tập trung vào phần "khác biệt chết người" so với ngôn ngữ có GC: mục 1–2, 6–11, 46 (con trỏ, ownership, RAII, move, cast) + bài tập Phần I–II. Sau đó nhập Track A từ tuần 3, bỏ qua những gì đã vững.

### Onboarding checklist (tuần đầu tiên)
- [ ] Hoàn thành **mục 0** — build được cả 2 đường (C++ thuần + UE).
- [ ] Đọc mục 42, 45 + Epic Coding Standard (Phụ lục D) — quy ước code của team.
- [ ] Clone repo dự án theo Git guide; chạy được editor từ source.
- [ ] Debug thử 1 luồng có sẵn cùng buddy (vd: breakpoint trong `BeginPlay` của Character).
- [ ] PR đầu tiên: 1 bài tập Phần I (mục tiêu là quen quy trình review, không phải độ khó).
- [ ] Chốt lịch: mentor 1-1 hàng tuần + mốc kiểm tra cuối mỗi phần.

### Gợi ý cấu trúc khi đưa lên website đào tạo
- Mỗi **PHẦN** = 1 chương (menu cấp 1); mỗi **mục số** = 1 trang bài học; Phụ lục = khu "Tra cứu".
- Cuối mỗi chương nhúng bài tập tương ứng của Phụ lục F + form nộp link PR.
- Trang chủ hiển thị 3 track của Phụ lục H để nhân viên tự chọn lộ trình phù hợp.
- Bảng lỗi (Phụ lục E) nên có ô tìm kiếm — đây sẽ là trang được mở nhiều nhất.

---

> **Lời cuối:** C++ rộng và sâu — đừng cố nhớ hết. Hãy hiểu *nguyên lý* (RAII, ownership, cache, đa hình), dùng tài liệu này tra cứu khi cần, và **học bằng cách viết code**. Mỗi bug bạn sửa là một bài học không sách nào dạy được.

---

## Nhật ký phiên bản
- **v2.0 (07/2026):** Audit toàn bộ & sửa lỗi kỹ thuật (comment destructor ở mục 13, ví dụ `std::optional`, ghi chú lerp phụ thuộc FPS, "amortized O(1)" cho vector, thống nhất `TObjectPtr` trong UPROPERTY). Thêm **mục 0** (cài đặt môi trường), **Phần VIII** (mục 46–55: casting, namespace/static, operator overloading, string, threading, UINTERFACE, Enhanced Input, timer/collision, replication, testing) và **Phụ lục E–H** (bảng lỗi, bài tập, capstone, lộ trình & onboarding). Bổ sung cross-reference giữa các mục và tài nguyên (Epic Coding Standard, C++ Core Guidelines).
- **v1.0:** Bản tổng hợp ban đầu — mục 1–45, phụ lục A–D.

*Tài liệu đào tạo nội bộ — cập nhật/mở rộng theo nhu cầu dự án.*

