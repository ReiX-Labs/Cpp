# SỔ TAY C++ — TỪ CƠ BẢN ĐẾN BƯỚC ĐỆM UNREAL ENGINE

**Bản tổng hợp sau khi hoàn thành Bài 01–17.2**  
**Môi trường học:** Visual Studio 2022, C++17, ứng dụng console.  
**Đối tượng sử dụng:** Người đã làm xong chuỗi bài tập thực hành C++ về hệ thống nhân vật, combat, inventory, enemy và debugging.  
**Phạm vi:** Những kiến thức đã được giảng trong khóa học; các mục ghi **Mở rộng** chỉ là gợi ý ôn tập tiếp, không phải kiến thức đã thành thạo.

> **Cách sử dụng:** Tra mục lục khi quên cú pháp; thử tự giải thích từng ví dụ trước khi chạy; tham khảo “Lỗi từng gặp” trước khi sửa code bằng cách đoán mò. Đây là tài liệu ôn tập, không phải bản sao nguyên văn bài giảng.

## Mục lục

1. [Quy trình biên dịch, cấu trúc chương trình](#1-quy-trình-biên-dịch-cấu-trúc-chương-trình)
2. [Biến, kiểu dữ liệu, const và constexpr](#2-biến-kiểu-dữ-liệu-const-và-constexpr)
3. [Toán tử, điều kiện, vòng lặp](#3-toán-tử-điều-kiện-vòng-lặp)
4. [Functions, tham số, overload và scope](#4-functions-tham-số-overload-và-scope)
5. [Header, source, include và linker](#5-header-source-include-và-linker)
6. [Array, vector, string và iterator](#6-array-vector-string-và-iterator)
7. [Struct, enum class và reference](#7-struct-enum-class-và-reference)
8. [Pointer, nullptr, stack/heap, smart pointer](#8-pointer-nullptr-stackheap-smart-pointer)
9. [Class, encapsulation, constructor, destructor](#9-class-encapsulation-constructor-destructor)
10. [Kế thừa, virtual, override và đa hình](#10-kế-thừa-virtual-override-và-đa-hình)
11. [Template, static và namespace](#11-template-static-và-namespace)
12. [Casting và explicit](#12-casting-và-explicit)
13. [Preprocessor, forward declaration, dependency](#13-preprocessor-forward-declaration-dependency)
14. [Copy/move semantics và lambda](#14-copymove-semantics-và-lambda)
15. [Debugging bằng Visual Studio 2022](#15-debugging-bằng-visual-studio-2022)
16. [Quy tắc thiết kế C++ và những lỗi đã gặp](#16-quy-tắc-thiết-kế-c-và-những-lỗi-đã-gặp)
17. [Bảng tra cứu cú pháp nhanh](#17-bảng-tra-cứu-cú-pháp-nhanh)
18. [Giới hạn kiến thức & bước tiếp theo](#18-giới-hạn-kiến-thức--bước-tiếp-theo)

---

## 1. Quy trình biên dịch, cấu trúc chương trình

### 1.1. Chương trình C++ đơn giản

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, C++!\n";
    return 0;
}
```

| Cú pháp | Ý nghĩa |
|---|---|
| `#include <iostream>` | Cung cấp khai báo cho các thành phần nhập/xuất chuẩn |
| `int main()` | Điểm vào của một chương trình C++ thông thường |
| `{ ... }` | Khối lệnh / phạm vi thực thi |
| `std::cout << value` | Ghi dữ liệu ra standard output |
| `std::cin >> value` | Đọc dữ liệu từ standard input |
| `"\n"` | Xuống dòng; không tự flush bắt buộc như `std::endl` |
| `return 0;` | Báo chương trình kết thúc thành công; có thể lược bỏ ở cuối `main` |
| `//` và `/* ... */` | Chú thích một dòng và nhiều dòng |
| `;` | Kết thúc phần lớn câu lệnh C++ |

### 1.2. Từ mã nguồn đến chương trình chạy

**Preprocessing → Compilation → Linking → Executable**.

- **Preprocessor:** xử lý `#include`, macro, conditional compilation.
- **Compiler:** biên dịch từng *translation unit* (về cơ bản: file `.cpp` sau tiền xử lý) thành object file.
- **Linker:** nối các định nghĩa được tham chiếu qua các đơn vị biên dịch, tạo executable.
- **Runtime:** lúc chương trình chạy, logic, vòng đời object và lỗi runtime mới xuất hiện.

Phân biệt **compiler error** (sai cú pháp/kiểu), **linker error** (không tìm thấy định nghĩa/định nghĩa trùng), **logic error** (chạy nhưng kết quả sai) và **undefined behavior** (chuẩn C++ không quy định kết quả).

### 1.3. Bài tập thực tế đã hoàn thành

HelloGameDev, combat mini-project, Arena, hệ thống Player/Enemy và Final Assessment. Mục tiêu từ đầu là **viết và hiểu code C++**, không chỉ sao chép cú pháp.

## 2. Biến, kiểu dữ liệu, const và constexpr

```cpp
int health = 100;
float speed = 5.5f;
double accuracy = 0.85;
bool isAlive = true;
char rank = 'A';
std::string name = "Knight"; // Cần #include <string>
```

| Kiểu | Thường dùng cho | Lưu ý |
|---|---|---|
| `int` | HP, damage, số nguyên | Có dấu, giới hạn giá trị phụ thuộc triển khai |
| `float` | Speed, hệ số gameplay | Hậu tố literal `f`: `2.5f` |
| `double` | Số thực cần độ chính xác cao hơn float | `2.5` mặc định là double |
| `bool` | Cờ trạng thái | `true`, `false` |
| `char` | Một ký tự | Dấu nháy đơn `'A'` |
| `std::string` | Tên, văn bản | Cần `<string>` |
| `std::size_t` | Số lượng/kích thước container | `<cstddef>`; thường không dấu |
| `auto` | Để compiler suy luận kiểu khi có initializer | Suy luận **lúc biên dịch**, không phải “đoán” lúc chạy |

```cpp
const int healthLimit = GetHealthLimit(); // Có thể được xác định khi chạy
constexpr int MaxHP = 100;               // Phải khởi tạo bởi biểu thức hằng phù hợp

int damage = 25;
auto total = damage + 5;                  // total có kiểu int
```

**`const`** ngăn sửa biến thông qua tên/đường truy cập phù hợp sau khi khởi tạo; **`constexpr`** đòi hỏi giá trị khởi tạo đủ điều kiện là hằng tại compile time. `auto` không gây chi phí “suy đoán” runtime; compilation có thể phức tạp trong một số trường hợp, nhưng không phải vì runtime cần đoán kiểu.

**Chuyển đổi kiểu ngầm định:** `float speed = 10;` hợp lệ. **Chuyển đổi tường minh:** `static_cast<float>(health)` (xem §12).

## 3. Toán tử, điều kiện, vòng lặp

### 3.1. Toán tử

| Nhóm | Cú pháp | Ý nghĩa |
|---|---|---|
| Số học | `+ - * / %` | Cộng, trừ, nhân, chia, chia lấy dư (với số nguyên) |
| Gán | `=`, `+=`, `-=`, `*=`, `/=` | Gán / cập nhật giá trị |
| So sánh | `== != < <= > >=` | Kết quả `bool` |
| Logic | `&&`, `\|\|`, `!` | AND, OR, NOT; `&&`/`\|\|` có short-circuit |
| Tăng giảm | `++x`, `x++`, `--x` | Trước/sau, khác nhau khi giá trị biểu thức được dùng |
| Bitwise | `& \| ^ ~ << >>` | Toán tử bit; phân biệt với logic `&&`, `\|\|` |
| Điều kiện | `condition ? yes : no` | Toán tử 3 ngôi |

```cpp
int hp = 75;
int maxHP = 100;
float percent = static_cast<float>(hp) / maxHP * 100.0f; // 75.0
// hp / maxHP thực hiện chia nguyên, được 0 nếu đều là int ở ví dụ này.
```

**Bitwise** đã được giới thiệu ở mức căn bản; không cần tối ưu bitmask phức tạp trước khi học gameplay engine.

### 3.2. Điều kiện

```cpp
if (health <= 0) {
    std::cout << "Dead\n";
} else if (health < 30) {
    std::cout << "Low HP\n";
} else {
    std::cout << "Alive\n";
}

switch (role) {
case CharacterClass::Knight: break;
case CharacterClass::Mage:   break;
default:                     break;
}
```

**`break`** rời khỏi `switch` hoặc vòng lặp gần nhất. `continue` bỏ phần còn lại của lượt lặp hiện tại để sang lượt kế. `return` thoát hàm (kèm giá trị nếu có).

### 3.3. Vòng lặp

```cpp
for (int i = 0; i < 3; ++i) { /* ... */ }

int i = 0;
while (i < 3) { ++i; }

do { /* chạy ít nhất một lần */ } while (false);

for (const auto& item : items) { /* chỉ đọc, tránh copy object lớn */ }
for (auto& item : items) { /* sửa phần tử gốc */ }
for (auto item : items) { /* tạo bản sao phần tử */ }
```

**Lỗi từng gặp:** `for (auto enemy : enemies)` sao chép từng Enemy, nên sửa `enemy.health` không cập nhật vector gốc. Dùng `auto&` khi thật sự cần sửa phần tử. Range-based for tự nó không đồng nghĩa “tốn bộ nhớ hơn” so với index loop; sự sao chép phụ thuộc cách khai báo biến vòng lặp.

## 4. Functions, tham số, overload và scope

```cpp
int Add(int a, int b) { return a + b; } // Pass by value

void Damage(int& hp, int amount) {       // Pass by reference: sửa hp gốc
    hp = amount >= hp ? 0 : hp - amount;
}

void PrintName(const std::string& name) { // Chỉ đọc, thường tránh copy string
    std::cout << name;
}

void Heal(int* hp, int amount) {          // Pointer có thể kiểm tra nullptr
    if (hp == nullptr || amount <= 0) return;
    *hp += amount;
}
```

| Cú pháp | Ý nghĩa |
|---|---|
| `int Function(int x)` | Tham số theo giá trị; hàm nhận một bản sao |
| `void Function(int& x)` | Tham chiếu có thể sửa đối tượng gốc |
| `void Function(const T& x)` | Tham chiếu chỉ đọc theo giao diện đó |
| `void Function(T* x)` | Nhận pointer, có thể bằng `nullptr` |
| `return value;` | Trả kết quả và kết thúc hàm |
| `return;` | Thoát sớm khỏi hàm `void` |
| *Overloading* | Nhiều hàm cùng tên nhưng danh sách tham số khác nhau |

**Scope:** biến cục bộ thuộc khối `{}`, không tồn tại vô hạn. Đừng trả reference/pointer tới biến cục bộ đã hết vòng đời.

## 5. Header, source, include và linker

**Player.h** — khai báo giao diện:

```cpp
#pragma once

class Player {
public:
    explicit Player(int initialHP);
    int GetHealth() const;
private:
    int health;
};
```

**Player.cpp** — định nghĩa:

```cpp
#include "Player.h"

Player::Player(int initialHP) : health(initialHP) {}
int Player::GetHealth() const { return health; }
```

**Main.cpp** — sử dụng:

```cpp
#include "Player.h"
int main() {
    Player p{100};
    return p.GetHealth() == 100 ? 0 : 1;
}
```

- `#pragma once`: tránh xử lý lặp header trong một translation unit (được các compiler phổ biến hỗ trợ).
- `#include "Player.h"`: đưa khai báo cần thiết vào file đang biên dịch.
- `Player::GetHealth()`: `::` là toán tử xác định phạm vi.
- `undefined reference` / `unresolved external symbol`: thường có khai báo nhưng thiếu định nghĩa hoặc file `.cpp` chưa nằm trong build.
- Mỗi file dùng trực tiếp kiểu/thành phần chuẩn nên tự `#include` header tương ứng; đừng trông chờ include gián tiếp.

## 6. Array, vector, string và iterator

```cpp
int fixedRaw[3]{10, 20, 30};
std::array<int, 3> fixed{10, 20, 30}; // #include <array>
std::vector<int> dynamic{10, 20};    // #include <vector>
dynamic.push_back(30);
std::cout << dynamic.size();

std::string name = "Knight";
std::cout << name.size();
```

| Container | Khi dùng | Lưu ý |
|---|---|---|
| Raw array `T[N]` | Nhận diện khi đọc code cũ | Ít API tiện ích, suy biến thành pointer trong nhiều ngữ cảnh |
| `std::array<T, N>` | Kích thước cố định lúc compile | Có `.size()`, truy cập `[]` |
| `std::vector<T>` | Danh sách có thể tăng giảm phần tử | `.push_back`, `.size`, `.begin`, `.end` |
| `std::string` | Văn bản | Quản lý bộ nhớ nội bộ; có thể copy/move |

**Index** bắt đầu từ 0. `.at(i)` kiểm tra phạm vi và có thể ném ngoại lệ; `operator[]` không tự kiểm tra như vậy.

**`size()`** thường trả kiểu không dấu (`size_type`, hay `std::size_t`); `std::count_if()` trả kiểu đếm của iterator, thường có dấu (`difference_type`). Tránh gán bừa vào `int` hoặc trừ signed/unsigned không kiểm soát.

```cpp
for (std::size_t i = 0; i < dynamic.size(); ++i) {
    std::cout << dynamic[i];
}
```

**Về `auto`:** dùng được khi kiểu hiển nhiên; không ảnh hưởng tới kiểu tại runtime.

## 7. Struct, enum class và reference

```cpp
enum class CharacterClass { Knight, Mage, Archer };

struct PlayerData {
    std::string name;
    CharacterClass role;
    int hp;
};

PlayerData p{"Knight", CharacterClass::Knight, 100};
PlayerData& alias = p;
alias.hp = 80;                 // p.hp cũng thành 80
const PlayerData& view = p;   // chỉ đọc qua view
```

- `struct` và `class` đều có constructor/method/kế thừa; khác biệt ngôn ngữ mặc định là access (`struct`: public, `class`: private) và kiểu kế thừa mặc định.
- `enum class` tạo enum có phạm vi, dùng `CharacterClass::Knight` và không tự ngầm định thành `int`.
- `T&` tạo tham chiếu tới đối tượng; không giống `T*` vì pointer có thể `nullptr` và có thể trỏ lại tới đối tượng khác.

## 8. Pointer, nullptr, stack/heap, smart pointer

### 8.1. Con trỏ cơ bản

```cpp
int health = 100;
int* ptr = &health;     // & lấy địa chỉ
std::cout << *ptr;     // * giải tham chiếu: đọc giá trị 100
*ptr = 50;             // sửa health thông qua pointer
ptr = nullptr;         // không còn trỏ tới đối tượng

PlayerData player{"Knight", CharacterClass::Knight, 100};
PlayerData* p = &player;
std::cout << p->hp;     // tương đương (*p).hp
```

**Lỗi thường gặp:** không dereference pointer null hoặc dangling pointer; sau `delete`, gán pointer thành `nullptr` không tự chứng minh trước đó đã quản lý bộ nhớ đúng.

### 8.2. Stack/automatic storage và dynamic storage

```cpp
PlayerData local{"Knight", CharacterClass::Knight, 100}; // Tự kết thúc đời khi hết scope

PlayerData* dynamic = new PlayerData{"Mage", CharacterClass::Mage, 80};
delete dynamic;  // Phải khớp new với delete; tránh quên hoặc delete hai lần
dynamic = nullptr;
```

Thông thường ưu tiên **object tự động hoặc RAII** thay vì `new/delete` thủ công.

### 8.3. `std::unique_ptr`

```cpp
#include <memory>

auto player = std::make_unique<PlayerData>(
    PlayerData{"Knight", CharacterClass::Knight, 100}
);

std::cout << player->hp;
PlayerData& ref = *player; // tham chiếu không sở hữu
PlayerData* raw = player.get(); // pointer không sở hữu; KHÔNG delete raw
```

- `unique_ptr<T>` sở hữu độc quyền object động và tự giải phóng khi hết vòng đời.
- Không copy được `unique_ptr`, có thể **move** quyền sở hữu: `auto other = std::move(player);`.
- Không tạo `->` vô nghĩa nếu đã có API nhận `T&` / `T*`: dùng cú pháp phù hợp với thiết kế.

### 8.4. `const` với pointer

| Viết | Có thể sửa `*ptr` qua con trỏ? | Có thể đổi `ptr` trỏ nơi khác? |
|---|---|---|
| `int* ptr` | Có | Có |
| `const int* ptr` | Không | Có |
| `int* const ptr` | Có | Không |
| `const int* const ptr` | Không | Không |

Không nhầm **const pointer** với **pointer to const**. `const int*` không nhất thiết làm biến nguồn thành const; nó hạn chế quyền sửa **thông qua pointer đó**.

## 9. Class, encapsulation, constructor, destructor

### 9.1. Class và đóng gói

```cpp
class Player {
private:
    int health;
    int maxHP;
public:
    Player(int initialHP, int maximumHP)
        : health(initialHP), maxHP(maximumHP) {}

    int GetHealth() const { return health; }
    void TakeDamage(int amount) {
        if (amount <= 0) return;
        health = amount >= health ? 0 : health - amount;
    }
};
```

- `private`: bên ngoài class không được truy cập trực tiếp.
- `public`: giao diện cho nơi khác sử dụng.
- `GetHealth() const`: phương thức bảo đảm không sửa thành viên thông thường của object qua `this`.
- **Invariant**: ví dụ `0 <= health <= maxHP`; method và constructor phải duy trì invariant theo chính sách đã chọn.

### 9.2. Constructor, initializer list, explicit

```cpp
explicit Player(int initialHP); // ngăn chuyển đổi ngầm định qua constructor này

Player::Player(int initialHP) : health(initialHP) {}
```

- Constructor chạy khi đối tượng được khởi tạo; không có return type.
- **Member initializer list**: khởi tạo thành viên trực tiếp trước thân constructor; bắt buộc với một số thành viên (`const`, reference và loại member khác).
- Thứ tự khởi tạo dựa theo **thứ tự khai báo trong class**, không theo thứ tự ghi trong initializer list.
- `explicit` không tăng tốc chương trình; ngăn một số chuyển đổi ngầm định. Constructor nhiều tham số cũng có thể dùng explicit, không phải cứ một tham số mới hợp lệ.

### 9.3. Destructor và `this`

```cpp
class Counter {
private:
    int value = 0;
public:
    void SetValue(int value) { this->value = value; }
    ~Counter() = default;
};
```

- `this` là pointer tới object hiện tại trong non-static member function.
- `~Counter()` tự được gọi khi vòng đời kết thúc; dùng `= default` để yêu cầu destructor mặc định nếu cần khai báo.
- Không cần tự viết destructor rỗng cho mọi class. Quy tắc **Rule of Zero** ưu tiên để các kiểu thành viên tự quản lý tài nguyên.

## 10. Kế thừa, virtual, override và đa hình

```cpp
class Enemy {
public:
    virtual ~Enemy() = default;
    virtual void Attack() const {
        std::cout << "Normal attack\n";
    }
};

class Boss : public Enemy {
public:
    void Attack() const override {
        std::cout << "Special attack\n";
    }
};

Boss boss;
Enemy& enemy = boss;
enemy.Attack(); // "Special attack" vì method là virtual
```

- `class Boss : public Enemy`: Boss *is-a* Enemy (public inheritance).
- `virtual`: gọi qua base pointer/reference sẽ dispatch tới override thích hợp theo kiểu động.
- `override`: compiler kiểm tra đang thực sự override virtual method.
- `protected`: class con được truy cập (theo quy tắc access/inheritance), code ngoài không được; tránh lạm dụng protected data.
- **Virtual destructor** quan trọng khi xóa derived object thông qua base pointer, bao gồm `unique_ptr<Base>` sở hữu `Derived`.
- Constructor của base chạy trước derived; destructor theo thứ tự derived rồi base.

**Điểm thiết kế thực tế:** Nếu Boss có cùng quy tắc tấn công với Enemy, không cần viết thêm `Boss::Attack()` chỉ để “có override”. Tạo khác biệt khi **game design cần**, không phải vì bài học. Nếu không có hành vi/dữ liệu riêng nào, còn cần đánh giá Boss có thực sự phải là class riêng hay có thể chỉ là cấu hình dữ liệu.

```cpp
std::vector<std::unique_ptr<Enemy>> enemies;
enemies.push_back(std::make_unique<Enemy>());
enemies.push_back(std::make_unique<Boss>());

for (const auto& enemyPtr : enemies) {
    enemyPtr->Attack();
}
```

Đoạn cuối chỉ minh họa cú pháp, dùng được khi các class có constructor mặc định như ví dụ phía trên. `unique_ptr<Enemy>` bảo toàn kiểu động, không tạo ra **object slicing**. Ngược lại, `std::vector<Enemy>` không lưu các đối tượng con polymorphic theo giá trị mà vẫn giữ đầy đủ phần derived.

## 11. Template, static và namespace

### 11.1. Function template

```cpp
template <typename T>
T GetMax(T a, T b) {
    return a > b ? a : b;
}

int a = GetMax<int>(10, 20);
float b = GetMax(5.5f, 3.2f); // Suy luận T = float
// GetMax(10, 5.5f);           // Không suy luận được một T thống nhất
float c = GetMax<float>(10, 5.5f);
```

`template<typename T>` dùng một kiểu tham số `T` được xác định khi instantiation. Function/class template thường cần định nghĩa hiển thị tại nơi instantiation → thường đặt trong header.

```cpp
template <typename T>
class Stat {
    T value;
public:
    explicit Stat(T initial) : value(initial) {}
    T Get() const { return value; }
};
Stat<int> hp{100};
```

`std::vector<int>`, `std::array<float, 3>` cũng là class templates. Đã thực hành **function templates** với `GetMax` và `ClampValue`, class template mới học mức đọc/viết ví dụ nhỏ.

### 11.2. `static`

```cpp
void RegisterKill() {
    static int totalCalls = 0; // chỉ khởi tạo một lần
    ++totalCalls;
}

class EnemyCounter {
    static int created;
public:
    EnemyCounter() { ++created; }
    static int GetCreated() { return created; }
};
int EnemyCounter::created = 0; // định nghĩa ngoài class (cách truyền thống)
```

- Local `static`: giữ trạng thái qua các lần gọi, phạm vi tên vẫn nằm trong hàm.
- Static data member: một biến dùng chung cho class, không phải mỗi object một bản riêng.
- Static method: không có `this`, gọi `EnemyCounter::GetCreated()`.
- Đếm số **đã tạo** không đồng nghĩa số **đang sống**; cần thiết kế riêng nếu phải đếm đúng với copy/move/destruction.
- C++17 có `inline static` cho static member định nghĩa ngay trong class (đã nhắc qua, không phải bài thực hành chính).

### 11.3. Namespace

```cpp
namespace GameConfig {
    constexpr int MaxEnemies = 3;
}
int limit = GameConfig::MaxEnemies;
```

`std::cout` thuộc namespace `std`. Ưu tiên tên có `std::` ở header; hạn chế `using namespace std;` ở phạm vi rộng.

## 12. Casting và explicit

### 12.1. Implicit conversion vs explicit cast

```cpp
int a = 10;
float b = a;                          // Chuyển kiểu ngầm định
float c = 12.8f;
int d = static_cast<int>(c);         // 12, cắt phần thập phân về 0
```

### 12.2. Bốn loại cast có tên

| Cast | Dùng khi | Cảnh báo |
|---|---|---|
| `static_cast<T>(expr)` | Chuyển số, enum, cast hợp lệ xác định tĩnh | Có thể mất chính xác; downcast không kiểm tra động |
| `dynamic_cast<Derived*>(basePtr)` | Kiểm tra downcast trong polymorphic hierarchy | Thất bại trả `nullptr` với con trỏ; RTTI phải sẵn có |
| `const_cast<T>(expr)` | Thay đổi cv-qualification của pointer/reference | Sửa object thật sự `const` qua cast gây UB |
| `reinterpret_cast<T>(expr)` | Một số chuyển đổi mức thấp | Không tự tạo object kiểu mới; dùng sai có UB |

```cpp
class Enemy { public: virtual ~Enemy() = default; };
class Boss : public Enemy {};

Boss boss;
Enemy* base = &boss;
Boss* checked = dynamic_cast<Boss*>(base);
if (checked != nullptr) { /* Đây thực sự là Boss */ }
```

C-style cast `(int)x` có thể ngắn nhưng che khuất ý định; ưu tiên named casts khi cần ép kiểu rõ ràng.

**`explicit` khác “explicit cast”:** `explicit` là từ khóa trên constructor/conversion function nhằm hạn chế chuyển đổi ngầm định; nó không thực hiện ép kiểu tại nơi gọi.

## 13. Preprocessor, forward declaration, dependency

### 13.1. Conditional compilation

```cpp
#define ENABLE_COMBAT_LOG 1

#if ENABLE_COMBAT_LOG
    std::cout << "Combat log\n";
#endif

#ifdef ENABLE_COMBAT_LOG
    // CÓ xử lý ngay cả nếu ENABLE_COMBAT_LOG được định nghĩa bằng 0
#endif
```

- `#define`: macro; không phải typed variable.
- `#if`: kiểm tra biểu thức tiền xử lý.
- `#ifdef NAME`: kiểm tra macro được định nghĩa hay chưa, **không** kiểm tra giá trị.
- `#ifndef ... #define ... #endif`: header guard kiểu truyền thống.
- Dùng `constexpr` thay macro cho hằng số gameplay thông thường nếu không cần tiền xử lý.

### 13.2. Forward declaration

```cpp
// Enemy.h
#pragma once
class Player; // khai báo tồn tại kiểu, chưa thấy định nghĩa đầy đủ
class Enemy {
public:
    void Attack(Player& target) const;
};
```

```cpp
// Enemy.cpp
#include "Enemy.h"
#include "Player.h" // cần định nghĩa đầy đủ khi gọi method
void Enemy::Attack(Player& target) const {
    target.TakeDamage(20);
}
```

| Khi nào chỉ cần `class Player;`? | Trường hợp |
|---|---|
| **Được** | Khai báo `Player*`, `Player&`, hàm nhận hoặc trả pointer/reference |
| **Chưa đủ** | Data member `Player target;` (by value), gọi method, kế thừa từ Player, cần `sizeof(Player)` |

**Circular includes:** hai header include lẫn nhau có thể tạo tình huống incomplete type dù đã có `#pragma once`. Tránh bằng forward declaration khi chỉ cần pointer/reference, và include định nghĩa thật trong `.cpp`.

## 14. Copy/move semantics và lambda

### 14.1. Copy constructor/assignment

```cpp
std::vector<std::string> original{"Sword", "Potion"};
std::vector<std::string> copied = original; // Copy constructor: object mới
copied.push_back("Shield");                // Không sửa original

std::vector<std::string> existing;
existing = original;                        // Copy assignment: object đã tồn tại
```

### 14.2. Move constructor/assignment

```cpp
#include <utility>
std::vector<std::string> storage = std::move(copied); // Move construction

std::vector<std::string> destination;
destination = std::move(storage);                    // Move assignment
```

- `std::move` **không tự di chuyển tài nguyên**; nó chuyển biểu thức thành xvalue để thao tác move phù hợp có thể được chọn.
- Đối tượng `std::vector` sau move còn hợp lệ, nhưng trạng thái không được chỉ định cụ thể; có thể gán lại và sử dụng tiếp theo những thao tác có tiền điều kiện thỏa mãn.
- `unique_ptr` không copy được; move quyền sở hữu thì nguồn trở thành rỗng.
- Đã thực hành dùng copy/move; **chưa** luyện viết custom copy/move constructor, Rule of Five, rvalue references chuyên sâu.
- **Rule of Zero:** ưu tiên STL/RAII members để compiler sinh copy/move/destructor khi thiết kế cho phép.

### 14.3. Lambda

```cpp
int damage = 30;
int totalDamage = 0;

auto apply = [damage, &totalDamage](int& hp) {
    int actual = hp < damage ? hp : damage;
    hp -= actual;
    totalDamage += actual;
};
```

| Cú pháp | Ý nghĩa |
|---|---|
| `[](...) { ... }` | Lambda không capture |
| `[damage]` | Capture bản sao của `damage` tại lúc tạo lambda |
| `[&damage]` | Capture tham chiếu tới biến gốc |
| `[=]` | Capture ngầm định các biến cần dùng theo giá trị |
| `[&]` | Capture ngầm định các biến cần dùng theo tham chiếu |
| `[damage, &totalDamage]` | Kết hợp value và reference |
| `mutable` | Cho phép sửa bản copy captured by value bên trong lambda |
| `(int& hp)` | Tham số tham chiếu do nơi gọi truyền vào, **không phải capture** |

```cpp
std::vector<int> enemyHP{100, 60, 25, 0};
std::for_each(enemyHP.begin(), enemyHP.end(), apply); // gọi với 1 phần tử mỗi lần

const auto alive = std::count_if(
    enemyHP.begin(), enemyHP.end(),
    [](int hp) { return hp > 0; }
);

std::sort(enemyHP.begin(), enemyHP.end(),
          [](int a, int b) { return a > b; }); // so sánh 2 phần tử
```

- Lambda có thể có nhiều tham số, nhưng **số tham số phải phù hợp cách API gọi callback**; `count_if`/`for_each` dùng một phần tử mỗi lần, comparator `sort` nhận hai phần tử.
- Capture by reference yêu cầu đối tượng gốc còn tồn tại tại lúc lambda được gọi; callback trì hoãn/async rất dễ gây dangling reference.

## 15. Debugging bằng Visual Studio 2022

### 15.1. Phím tắt đã thực hành trực tiếp

| Phím | Tác dụng |
|---|---|
| `F9` | Đặt/bỏ breakpoint tại dòng |
| `F5` | Start/Continue Debugging |
| `F10` | Step Over: chạy câu lệnh hiện tại, không bước vào lời gọi hàm |
| `F11` | Step Into: vào trong hàm được gọi khi thích hợp |
| `Shift + F11` | Step Out: chạy tới khi rời hàm hiện tại |
| `Shift + F5` | Stop Debugging |
| `Ctrl + F5` | Start Without Debugging |

### 15.2. Các cửa sổ

- **Locals:** biến cục bộ ở stack frame đang chọn.
- **Autos:** biến/biểu thức liên quan tới vùng code hiện tại; người học đã dùng Autos nhiều để tìm lỗi thực tế.
- **Watch:** nhập `health`, `damage`, `health - damage` để theo dõi biểu thức cụ thể.
- **Call Stack:** chuỗi lời gọi hàm **đang hoạt động**, không phải toàn bộ lịch sử từng gọi.
- **DataTip:** di chuột vào biến khi dừng debug để xem giá trị.

### 15.3. Mũi tên và trạng thái debug

- Mũi tên **vàng**: vị trí thực thi thực tế hiện tại (thường là câu lệnh sắp thực thi).
- Khi chọn frame khác trong Call Stack, debugger có thể hiển thị vị trí của frame đó (ví dụ dòng tiếp tục sau lời gọi hàm trong `main`) **mà không thực thi thêm code**.
- Có lần debugger dừng ở prologue của hàm khiến giá trị tham số `damage` trông bất thường; khi bước đến statement thực tế, giá trị trở lại 30. **Không kết luận bug chỉ dựa vào một DataTip ở function prologue**.
- Khi nhấn F10 ở lệnh cuối hàm, debugger có thể dừng tại dấu `}` rồi bước sau mới trở về caller. Không dựa vào việc “mỗi F10 phải xuống đúng một dòng”.

### 15.4. Quy trình debug đã thực hành

1. Tái hiện lỗi với input cụ thể.
2. Nêu kết quả mong đợi và kết quả thực tế.
3. Đặt breakpoint ở trước logic bị nghi ngờ.
4. Step Into/Over; xem Autos/Locals/Watch và Call Stack nếu cần.
5. Tìm câu lệnh **đầu tiên** làm trạng thái lệch kỳ vọng.
6. Sửa nguyên nhân; chạy lại cả case bình thường và case biên.

**Bài 17.1 đã sửa được ba bug:**

```cpp
// Lỗi copy trong range-for:
for (auto enemy : enemies) { /* sửa bản sao */ }
// Đúng khi sửa phần tử gốc:
for (auto& enemy : enemies) { /* sửa phần tử gốc */ }

// Lỗi HP âm: damage > health phải kẹp về 0.
// Lỗi đếm sống: dùng health > 0, không phải health >= 0.
```

## 16. Quy tắc thiết kế C++ và những lỗi đã gặp

### 16.1. Checklist code trước khi nộp

- [ ] Các method có giữ invariant dữ liệu? HP trong `[0, maxHP]` khi đó là quy tắc thiết kế?
- [ ] Có dùng `const T&` cho object lớn chỉ đọc; `T&` khi cần sửa? Với `int`, `float`, `bool`, truyền theo giá trị thường đơn giản hơn.
- [ ] `for (auto item : v)` có vô ý tạo bản sao không?
- [ ] `GetCount()`/index có dùng kiểu phù hợp với `size()` không?
- [ ] Đã `#include` trực tiếp header cần dùng (`<string>`, `<memory>`, `<vector>`, `<utility>`, `<algorithm>`, `<cstddef>`) chưa?
- [ ] Constructor có nên khởi tạo thành viên bằng initializer list?
- [ ] Có object nào được cấp phát bằng `new` mà thiếu quản lý vòng đời? Có thể dùng object tự động/`unique_ptr` không?
- [ ] Base class bị xóa qua base pointer có virtual destructor không?
- [ ] Có dùng virtual/override chỉ vì muốn trình diễn cú pháp, hay vì hành vi thực tế cần khác nhau?
- [ ] Logic gameplay có tách biệt khỏi thông báo console không? Console có thể in sai dù state đã đúng.
- [ ] Có chạy kiểm thử với input biên (0, số âm, damage > HP, inventory trống, potion hết)?

### 16.2. Sửa/thiếu sót từng gặp qua các bài

| Bài | Vấn đề đã gặp | Quy tắc rút ra |
|---|---|---|
| Arena ban đầu | Hiển thị HP trước lúc clamp | Cập nhật trạng thái hợp lệ rồi mới xuất báo cáo |
| Pointer | Kiểm tra biến pointer khác với pointer được truyền vào hàm | Theo dõi đúng object/địa chỉ đang xét |
| Smart pointer | `nullptr` sau `delete` không phải chứng minh không leak | Quản lý ownership bằng RAII, test vòng đời |
| Player Class | Constructor giả định maxHP hợp lệ | Thiết lập invariant hoặc nêu rõ precondition |
| Template `ClampValue` | Giới hạn speed 100 thay vì 10 | Kiểm đúng yêu cầu và test trường hợp vượt giới hạn |
| `EnemyTracker` | Đếm số đã tạo khác số đang sống | Đặt tên/trách nhiệm thống nhất với semantics |
| Casting | `const int&` getter không có lợi rõ rệt | Trả `int` bằng giá trị |
| Preprocessor/Combat | Quên clamp HP âm | Test damage lớn hơn HP |
| Inventory | Lặp `auto item` sao chép string; `int` nhận `size()` | Dùng `const auto&`, kiểu kích thước hợp lý |
| Lambda AOE | `int` nhận `count_if()` gây conversion warning | Xem kiểu trả về thư viện, tránh signed/unsigned mismatch |
| Debugging | `for (auto enemy : enemies)` sửa bản sao | Nếu cần sửa phần tử, dùng `auto&` |
| Final Assessment | Uống potion và tấn công cùng lượt | Một lượt có một action; xác minh state transitions |
| Final Assessment | Chuỗi "Boss" trong object `Enemy` không phải `Boss` class | Tạo đúng dynamic type khi cần, dùng `unique_ptr<Base>` |
| Final Assessment | Console báo tấn công dù hành động là uống potion | Bảo đảm event/log phản ánh state/behavior thực tế |

### 16.3. Final Assessment — kết quả đã kiểm tra

**Arena Combat Simulator:** Player ban đầu HP 120, damage 25, 2 potion (+30 HP); Slime (40 HP/10 damage), Goblin (55/15), Boss (80/20). Luật: nếu HP <= 40 và còn potion thì dùng potion **thay cho** tấn công; Enemy phản công nếu còn sống. Kết quả đã kiểm tra trên bản điều chỉnh cuối:

```text
Player HP: 40/120
Enemies defeated: 3/3
Potions remaining: 0
Player Win!!
```

Bản nộp tự làm được đánh giá **9.5/10**, sau đó có một số chỉnh sửa nhỏ về include/kiểu, thông báo đúng action, và thống kê kết quả. Hệ thống dùng `std::vector<std::unique_ptr<Enemy>>` để sở hữu Enemy/Boss. **Không yêu cầu Boss tự viết override nếu hành vi hiện tại giống Enemy**.

> Kết quả một demo không thay thế kiểm thử hệ thống tổng quát: hành vi với cấu hình khác, trường hợp bất thường và input sai cần tiếp tục luyện về sau.

## 17. Bảng tra cứu cú pháp nhanh

| Viết | Đọc/ý nghĩa |
|---|---|
| `#include <vector>` | Dùng khai báo vector trong file hiện tại |
| `#include "Player.h"` | Dùng khai báo local project |
| `#pragma once` | Tránh header bị xử lý lặp trong một đơn vị biên dịch |
| `namespace N { ... }` | Nhóm tên vào phạm vi N |
| `N::X` | Thành phần `X` thuộc phạm vi `N` |
| `class Foo;` | Khai báo trước Foo, chưa định nghĩa đầy đủ |
| `const T& x` | Tham chiếu chỉ đọc qua giao diện đó |
| `T* p` | Con trỏ tới T |
| `&x` | Lấy địa chỉ x (trong biểu thức) |
| `*p` | Giải tham chiếu pointer |
| `p->method()` | Gọi method qua pointer |
| `obj.method()` | Gọi method qua object/reference |
| `this->x` | Thành viên x của object hiện tại |
| `nullptr` | Giá trị con trỏ rỗng |
| `std::make_unique<T>(args...)` | Tạo T động, ownership duy nhất |
| `ptr.get()` | Lấy raw pointer **không sở hữu** |
| `std::move(x)` | Chuyển `x` thành biểu thức có thể chọn move |
| `explicit Foo(int n)` | Ngăn chuyển đổi ngầm định tương ứng |
| `Foo::Foo(...) : field(value) {}` | Constructor, initializer list |
| `virtual void F()` | Phương thức hỗ trợ dynamic dispatch |
| `void F() override` | Bắt compiler kiểm tra override hợp lệ |
| `virtual ~Base() = default;` | Virtual destructor mặc định |
| `template<typename T>` | Khai báo tham số kiểu template |
| `static int count` | Tùy scope: local static hoặc static data member |
| `static_cast<T>(x)` | Yêu cầu chuyển đổi kiểu tĩnh hợp lệ |
| `dynamic_cast<T*>(p)` | Kiểm tra cast runtime trong hierarchy đa hình |
| `#if FLAG ... #endif` | Conditional compilation |
| `[x](){...}` | Lambda capture x bằng giá trị |
| `[&x](){...}` | Lambda capture x bằng tham chiếu |
| `[](int a, int b){ return a < b; }` | Lambda hai tham số, ví dụ comparator |
| `for (auto& x : v)` | Lặp theo tham chiếu để sửa phần tử |
| `for (const auto& x : v)` | Lặp theo tham chiếu chỉ đọc |
| `std::count_if(begin,end,pred)` | Đếm các phần tử thỏa predicate |

## 18. Giới hạn kiến thức & bước tiếp theo

### Đã thực hành có minh chứng

- Cú pháp nền tảng, hàm, class, các container chuẩn, pointers/references, smart pointer dùng cơ bản, constructor/destructor, kế thừa/virtual mức cơ bản, function template, `static`, named cast, forward declaration, copy/move sử dụng thư viện, lambda/callback, Debugger.
- Bài tập nhiều file `.h`/`.cpp` và mô phỏng gameplay console.
- Khả năng dùng **breakpoints, Step Into/Over/Out, Autos/Locals, Watch, Call Stack** để tìm và sửa bug.

### Chưa được đánh giá sâu, không tự đánh dấu thành thạo

- Exception safety, RAII nâng cao, tự viết Rule of Five, rvalue references/forwarding, move-only API phức tạp.
- Abstract interfaces (`= 0`) chuyên sâu, function pointers, `std::function`, threading, concurrency, build systems quy mô lớn, unit test frameworks, profiling, allocator và template metaprogramming.
- Kiến trúc hệ thống lớn, network, async, đa luồng, lifetime của callback bất đồng bộ.

### Bước tiếp theo

Tiếp tục **Unreal Engine C++** trong một cuộc trò chuyện khác theo file `Cpp_To_Unreal_Handoff.md`. Cần phân biệt rõ **Standard C++** và các hệ thống riêng của Unreal (`UObject`, reflection macros, garbage collection, gameplay framework). Không mang cách sở hữu bằng `std::unique_ptr` sang `UObject` một cách máy móc.

**Nguyên tắc học tiếp:** Có mục tiêu gameplay thật → giải thích vì sao cần khái niệm → học cú pháp → tự thực hành → chấm bài, debug, rồi mới tăng độ khó. Không thêm code chỉ để trưng bày từ khóa.
