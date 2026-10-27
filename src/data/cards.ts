// Flashcards power the "Ôn tập hàng ngày" (daily review / spaced repetition).
// These recycle the key ideas from the reference doc so you keep them fresh.
//
// To add your own: append objects below. `sectionId` links the card back to a
// lesson (same id the parser assigns, e.g. "9" for section 9, "a" for appendix A).
// `front`/`back` accept inline markdown (backticks for `code`). Use `code` for a
// full C++ snippet rendered as a highlighted block.

export interface Flashcard {
  id: string;
  sectionId: string;
  front: string;
  back: string;
  code?: string;
  tag?: string;
}

export const cards: Flashcard[] = [
  // ---- Part I: Foundations ----
  {
    id: "c-compile-model",
    sectionId: "1",
    tag: "Compilation",
    front: "Ba giai đoạn của pipeline biên dịch C++ là gì?",
    back: "**Preprocessor** (xử lý `#include`/`#define` — thao tác text) → **Compiler** (mỗi `.cpp` = 1 translation unit → object file) → **Linker** (ghép object + thư viện → executable).",
  },
  {
    id: "c-compiler-vs-linker",
    sectionId: "1",
    tag: "Compilation",
    front: "Phân biệt nhanh lỗi compiler vs lỗi linker?",
    back: "*'undeclared identifier', 'syntax error'* → lỗi **compiler** (sai trong 1 file). *'unresolved external symbol', 'duplicate symbol'* → lỗi **linker** (vấn đề khi ghép nhiều file).",
  },
  {
    id: "c-zero-overhead",
    sectionId: "1",
    tag: "Triết lý",
    front: "'Zero-overhead abstraction' nghĩa là gì?",
    back: "\"Bạn không trả giá cho thứ bạn không dùng.\" Abstraction (class, template) được compiler dịch ra code gần như tối ưu bằng tay — không tốn chi phí runtime thừa.",
  },
  {
    id: "c-header-source",
    sectionId: "2",
    tag: "Tổ chức code",
    front: "Vì sao C++ tách `.h` (header) khỏi `.cpp` (source)?",
    back: "Tách **interface** (khai báo, include nhiều nơi) khỏi **implementation** (định nghĩa, biên dịch 1 lần). Giúp giảm thời gian build và tránh định nghĩa trùng.",
  },
  {
    id: "c-include-guard",
    sectionId: "2",
    tag: "Preprocessor",
    front: "`#pragma once` dùng để làm gì?",
    back: "Ngăn xử lý lặp một header trong cùng translation unit; được MSVC và các compiler phổ biến hỗ trợ. Include guard chuẩn dùng `#ifndef / #define / #endif`. Cả hai không chữa định nghĩa external trùng giữa nhiều translation unit: cần một định nghĩa trong .cpp hoặc inline đúng ODR.",
  },
  {
    id: "c-int-ref-ptr",
    sectionId: "6",
    tag: "Con trỏ",
    front: "Khác biệt cốt lõi giữa reference (`&`) và pointer (`*`)?",
    back: "**Reference**: bí danh cho 1 biến có sẵn, phải khởi tạo ngay, không đổi target, không null. **Pointer**: lưu địa chỉ, có thể null, đổi target, cần `*` để deref.",
    code: "int x = 5;\nint& ref = x;   // bí danh của x\nint* ptr = &x;  // giữ địa chỉ của x\n*ptr = 10;      // đổi x qua con trỏ",
  },
  {
    id: "c-nullptr",
    sectionId: "6",
    tag: "Con trỏ",
    front: "Vì sao dùng `nullptr` thay cho `NULL` hay `0`?",
    back: "`nullptr` có kiểu riêng (`std::nullptr_t`), tránh nhập nhằng khi overload giữa con trỏ và số nguyên. `NULL`/`0` có thể bị hiểu nhầm là `int`.",
  },

  // ---- Part II: Memory ----
  {
    id: "c-stack-heap",
    sectionId: "7",
    tag: "Bộ nhớ",
    front: "Stack vs Heap khác nhau thế nào?",
    back: "Đó là mô hình triển khai thường gặp: object automatic local thường ở stack, vùng cấp phát động thường ở heap. C++ quy định storage duration automatic/static/thread/dynamic, không bắt mọi local nằm trên stack. Ưu tiên giá trị, container và owner RAII; chi phí/giới hạn phụ thuộc nền tảng.",
  },
  {
    id: "c-new-delete",
    sectionId: "8",
    tag: "Bộ nhớ",
    front: "Quy tắc ghép đôi của `new`/`new[]`?",
    back: "`new` ↔ `delete`, `new[]` ↔ `delete[]`. Trộn lẫn (vd `new[]` rồi `delete`) là **undefined behavior**. Tốt nhất: tránh dùng trực tiếp, ưu tiên smart pointer/container.",
  },
  {
    id: "c-raii",
    sectionId: "9",
    tag: "RAII",
    front: "RAII là gì và vì sao là 'nguyên lý vàng' của C++?",
    back: "**Resource Acquisition Is Initialization**: gắn tài nguyên với object sở hữu, không bắt buộc ở stack. Destructor của owner trả tài nguyên; owner automatic local đã khởi tạo hoàn chỉnh được hủy khi rời scope hoặc stack unwinding. Raw-resource wrapper phải có chính sách copy/move đúng.",
  },
  {
    id: "c-unique-vs-shared",
    sectionId: "10",
    tag: "Smart pointer",
    front: "Khi nào dùng `unique_ptr` vs `shared_ptr`?",
    back: "**`unique_ptr`**: một owner, không có bộ đếm sở hữu chung — ưu tiên khi cần sở hữu động duy nhất. **`shared_ptr`**: nhiều owner qua control block; chỉ dùng khi cần chia sẻ lifetime. Smart pointer không bảo đảm tuyệt đối không leak: cycle shared_ptr hoặc bỏ mất kết quả release() vẫn có thể rò rỉ.",
  },
  {
    id: "c-make-unique",
    sectionId: "10",
    tag: "Smart pointer",
    front: "Tạo smart pointer đúng cách?",
    back: "Ưu tiên `std::make_unique<T>(args)` hoặc `std::make_shared<T>(args)` để tạo object cùng owner rõ ràng. make_shared thường gộp object/control block trong một lần cấp phát. Cần chọn cách khác khi có yêu cầu như custom deleter hoặc quyền truy cập constructor.",
    code: "auto p = std::make_unique<Player>(100);\nauto s = std::make_shared<Texture>(\"hero.png\");",
  },
  {
    id: "c-weak-ptr",
    sectionId: "10",
    tag: "Smart pointer",
    front: "`weak_ptr` giải quyết vấn đề gì?",
    back: "Phá vỡ **vòng tham chiếu (cycle)** của `shared_ptr` (A giữ B, B giữ A → không bao giờ giải phóng). `weak_ptr` không tăng ref count; gọi `.lock()` để lấy `shared_ptr` khi cần.",
  },
  {
    id: "c-move-semantics",
    sectionId: "11",
    tag: "Move",
    front: "Move semantics tối ưu điều gì?",
    back: "Move có thể chuyển tài nguyên thay vì sao chép khi kiểu hỗ trợ. Nguồn không nhất thiết là object tạm hoặc trở thành rỗng; chi phí tùy kiểu/thao tác. Nhiều kiểu thư viện giữ nguồn hợp lệ nhưng không xác định giá trị cụ thể; unique_ptr có cam kết nguồn rỗng sau chuyển ownership.",
  },
  {
    id: "c-std-move",
    sectionId: "11",
    tag: "Move",
    front: "`std::move(x)` thực sự làm gì?",
    back: "Tạo biểu thức **xvalue**, không tự chuyển tài nguyên hay sửa x. Thao tác tiếp theo chọn overload: có thể move, copy hoặc không biên dịch. Trạng thái nguồn sau thao tác đó phụ thuộc hợp đồng của kiểu, không do std::move quyết định.",
  },

  // ---- Part III: OOP ----
  {
    id: "c-rule-of-5",
    sectionId: "13",
    tag: "OOP",
    front: "Rule of 0 / 3 / 5 nói gì?",
    back: "**Rule of Zero**: ưu tiên member tự quản lý (STL/RAII), không tự viết special members. **Rule of Three/Five**: xem xét cả nhóm destructor/copy và thêm move; có thể default/delete/triển khai theo ownership. Compiler không luôn sinh đủ mọi hàm; destructor do người dùng khai báo ngăn implicit move.",
  },
  {
    id: "c-member-init-list",
    sectionId: "13",
    tag: "OOP",
    front: "Vì sao nên dùng member initializer list?",
    back: "Khởi tạo trực tiếp trong list (`: value(x)`) thay vì gán trong thân constructor — tránh khởi tạo mặc định rồi gán lại (2 bước), và bắt buộc với `const`/reference member.",
    code: "Foo(int x) : value(x) {}   // init list, 1 bước",
  },
  {
    id: "c-virtual-dtor",
    sectionId: "15",
    tag: "OOP",
    front: "Khi nào base class cần virtual destructor?",
    back: "Khi cho phép hủy derived thông qua base pointer, dùng destructor public virtual. Thiếu virtual trong delete thông thường như vậy là **UB trong C++17**, không có output/destructor order bảo đảm. Nếu cấm xóa qua base, có thể dùng destructor protected non-virtual.",
  },
  {
    id: "c-vtable",
    sectionId: "15",
    tag: "OOP",
    front: "Đa hình runtime hoạt động nhờ cơ chế gì?",
    back: "Lời gọi virtual không ghi rõ tên lớp qua base pointer/reference chọn override theo kiểu động. vtable/vptr là cách triển khai phổ biến; chuẩn C++ quy định hành vi dynamic dispatch, không bắt buộc cấu trúc bảng đó.",
  },
  {
    id: "c-override",
    sectionId: "15",
    tag: "OOP",
    front: "Từ khóa `override` giúp gì?",
    back: "Báo compiler kiểm tra rằng hàm thực sự override một hàm virtual của base (đúng chữ ký). Sai chữ ký → lỗi compile ngay, thay vì âm thầm tạo hàm mới.",
  },
  {
    id: "c-composition",
    sectionId: "16",
    tag: "OOP",
    front: "'Composition over inheritance' — vì sao?",
    back: "Kế thừa sâu tạo ràng buộc cứng và 'diamond problem'. Composition (chứa object khác làm thành phần) linh hoạt hơn, dễ tái sử dụng và test — nền tảng của tư duy ECS trong game.",
  },

  // ---- Part IV: Modern C++ ----
  {
    id: "c-auto",
    sectionId: "17",
    tag: "Modern",
    front: "`auto` nên và không nên dùng khi nào?",
    back: "**Nên**: kiểu dài/iterator (`auto it = v.begin();`), range-based for. **Cẩn thận**: khi che giấu kiểu quan trọng làm giảm khả năng đọc. `auto` suy kiểu lúc compile, không phải dynamic typing.",
  },
  {
    id: "c-range-for",
    sectionId: "17",
    tag: "Modern",
    front: "Vì sao thường viết `for (const auto& x : v)`?",
    back: "`const auto&` tránh **copy** mỗi phần tử và ngăn sửa đổi ngoài ý muốn. Dùng `auto&` khi cần sửa, `auto` (copy) chỉ khi thực sự muốn bản sao.",
  },
  {
    id: "c-lambda-capture",
    sectionId: "18",
    tag: "Lambda",
    front: "Các kiểu capture của lambda: `[=]`, `[&]`, `[this]`?",
    back: "`[=]`/`[&]` đặt mặc định capture cho các biến cần dùng, theo giá trị/tham chiếu; không capture tất cả biến có trong scope. `[this]` giữ pointer tới object, không copy object. Tham chiếu/this phải còn hợp lệ khi gọi lambda; ưu tiên capture tường minh.",
  },
  {
    id: "c-template",
    sectionId: "19",
    tag: "Template",
    front: "Template được 'instantiate' khi nào?",
    back: "Lúc **compile**, cho từng kiểu cụ thể được dùng. Vì vậy định nghĩa template thường phải nằm trong header. Đây là nền tảng của generic programming (viết 1 lần, chạy nhiều kiểu).",
    code: "template <typename T>\nT Max(T a, T b) { return a > b ? a : b; }",
  },
  {
    id: "c-vector",
    sectionId: "20",
    tag: "STL",
    front: "`std::vector` lưu dữ liệu thế nào và vì sao nhanh?",
    back: "Mảng động **liền kề trong bộ nhớ** (contiguous) → cache-friendly. `push_back` amortized O(1); truy cập ngẫu nhiên O(1). Container mặc định nên chọn trong hầu hết trường hợp.",
  },
  {
    id: "c-map-unordered",
    sectionId: "20",
    tag: "STL",
    front: "`std::map` vs `std::unordered_map`?",
    back: "**`map`**: cây cân bằng, có thứ tự, tra cứu O(log n). **`unordered_map`**: hash table, không thứ tự, tra cứu trung bình O(1). Cần tốc độ & không cần thứ tự → `unordered_map`.",
  },
  {
    id: "c-algorithms",
    sectionId: "21",
    tag: "STL",
    front: "Vì sao ưu tiên STL algorithm hơn vòng lặp tay?",
    back: "`std::sort`, `find_if`, `transform`, `accumulate`… rõ ràng ý định, ít bug off-by-one, và thường được tối ưu tốt. Iterator là 'cầu nối' giữa container và algorithm.",
  },
  {
    id: "c-const-correct",
    sectionId: "22",
    tag: "const",
    front: "const-correctness mang lại lợi ích gì?",
    back: "Tài liệu hóa quyền sửa và giúp compiler bắt lỗi. Const method không sửa member thông thường qua this, nhưng có ngoại lệ mutable và object khác được trỏ tới. `const T&` hạn chế sửa qua reference đó; không tự bảo đảm hàm thuần hay thread-safe.",
  },
  {
    id: "c-constexpr",
    sectionId: "22",
    tag: "const",
    front: "`const` vs `constexpr`?",
    back: "Biến const không cho sửa qua giao diện const, initializer có thể tính lúc runtime. Biến constexpr cần initializer là biểu thức hằng phù hợp. Hàm constexpr có thể dùng khi tính hằng, nhưng vẫn chạy runtime nếu ngữ cảnh/đối số không yêu cầu constant evaluation.",
  },
  {
    id: "c-error-handling",
    sectionId: "23",
    tag: "Error",
    front: "Chiến lược xử lý lỗi trong game thường thế nào?",
    back: "Exception cho lỗi hiếm/nghiêm trọng; nhiều engine game **tắt exception** ở hot path vì chi phí. Thay bằng error code, `std::optional`, `assert`/`check` cho lỗi lập trình. Chọn theo bối cảnh hiệu năng.",
  },

  // ---- Part V: Game ----
  {
    id: "c-why-cpp-game",
    sectionId: "24",
    tag: "Game",
    front: "Vì sao C++ thống trị game dev?",
    back: "Hiệu năng gần phần cứng, kiểm soát bộ nhớ (không GC pause), truy cập trực tiếp GPU/API, hệ sinh thái engine (Unreal, nhiều engine AAA) và thư viện trưởng thành.",
  },
  {
    id: "c-game-loop",
    sectionId: "25",
    tag: "Game",
    front: "Cấu trúc cơ bản của một game loop?",
    back: "Lặp mỗi frame: **Process Input → Update (logic, physics theo deltaTime) → Render**. Fixed timestep cho physics ổn định; interpolation cho hình ảnh mượt.",
    code: "while (running) {\n    ProcessInput();\n    Update(deltaTime);\n    Render();\n}",
  },
  {
    id: "c-ecs",
    sectionId: "26",
    tag: "Game",
    front: "Data-Oriented Design & ECS tối ưu điều gì?",
    back: "Sắp xếp dữ liệu theo cách CPU thích (liền kề, ít cache miss) thay vì theo OOP. **ECS** = Entity (id) + Component (data thuần) + System (logic chạy trên mảng component) → cực nhanh & dễ song song.",
  },
  {
    id: "c-cache",
    sectionId: "27",
    tag: "Performance",
    front: "Vì sao 'cache miss' quan trọng với hiệu năng?",
    back: "Truy cập RAM chậm hơn cache hàng chục–trăm lần. Dữ liệu liền kề (array of structs → struct of arrays) giúp CPU prefetch, giảm miss. 'Đo trước khi tối ưu' — dùng profiler.",
  },
  {
    id: "c-vector-math",
    sectionId: "28",
    tag: "Math",
    front: "Dot product và cross product dùng để làm gì trong game?",
    back: "**Dot**: góc/hướng giữa 2 vector (>0 cùng phía, 0 vuông góc) — dùng cho ánh sáng, tầm nhìn. **Cross**: vector vuông góc với 2 vector — dùng cho pháp tuyến, mô-men xoắn, hệ tọa độ.",
  },
  {
    id: "c-quaternion",
    sectionId: "28",
    tag: "Math",
    front: "Vì sao game dùng quaternion cho phép quay?",
    back: "Tránh **gimbal lock** của Euler angles, nội suy mượt (slerp), gọn (4 số) và ghép phép quay hiệu quả. Ít trực quan hơn nhưng ổn định về số học.",
  },

  // ---- Part VI: Unreal ----
  {
    id: "c-ue-uclass",
    sectionId: "31",
    tag: "Unreal",
    front: "`UCLASS`, `UPROPERTY`, `UFUNCTION` để làm gì?",
    back: "Macro reflection của UE: cho engine 'biết' về class/biến/hàm → hỗ trợ **GC, serialization, editor, Blueprint**. `UPROPERTY()` còn giữ UObject khỏi bị GC thu hồi.",
  },
  {
    id: "c-ue-gc",
    sectionId: "32",
    tag: "Unreal",
    front: "Garbage Collection trong UE hoạt động thế nào?",
    back: "UE tự thu hồi `UObject` không còn được tham chiếu bởi `UPROPERTY()` hoặc root set. Vì vậy con trỏ UObject phải là `UPROPERTY()` hoặc `TObjectPtr` — nếu không có thể bị GC 'nuốt' bất ngờ.",
  },
  {
    id: "c-ue-actor-component",
    sectionId: "33",
    tag: "Unreal",
    front: "Actor vs Component trong UE?",
    back: "**Actor**: object có thể đặt vào thế giới (có transform). **Component**: khối chức năng gắn vào actor (mesh, collision, movement…). Ưu tiên composition qua component thay vì kế thừa sâu.",
  },
  {
    id: "c-ue-containers",
    sectionId: "35",
    tag: "Unreal",
    front: "STL container tương ứng với UE container nào?",
    back: "`std::vector`→`TArray`, `std::unordered_map`→`TMap`, `std::unordered_set`→`TSet`, `std::string`→`FString`. Trong code UE nên dùng container UE để hợp với engine (serialization, GC).",
  },
  {
    id: "c-ue-delegate",
    sectionId: "37",
    tag: "Unreal",
    front: "Delegate trong UE là hiện thực của pattern nào?",
    back: "**Observer pattern** — cho phép đăng ký callback và 'phát' sự kiện (Broadcast) tới nhiều listener. Nền tảng của hệ thống event, gameplay, UI trong Unreal.",
  },

  // ---- Part VII: Practices ----
  {
    id: "c-forward-decl",
    sectionId: "41",
    tag: "Kỹ thuật",
    front: "Forward declaration giúp gì?",
    back: "Khai báo tên class mà chưa cần định nghĩa đầy đủ (`class Player;`) → giảm `#include` trong header → giảm thời gian build & phụ thuộc vòng. Dùng được khi chỉ cần con trỏ/tham chiếu.",
  },
  {
    id: "c-ub",
    sectionId: "44",
    tag: "Bẫy",
    front: "Kể vài Undefined Behavior phổ biến trong C++?",
    back: "Dùng con trỏ dangling/uninitialized, truy cập ngoài mảng (out-of-bounds), integer overflow (signed), dùng biến chưa khởi tạo, trộn `new`/`delete[]`, data race. UB = compiler được phép làm 'bất cứ gì'.",
  },
  {
    id: "c-naming",
    sectionId: "42",
    tag: "Kỹ thuật",
    front: "Vì sao thống nhất naming convention lại quan trọng?",
    back: "Code dễ đọc, dễ bảo trì theo nhóm. UE có quy ước riêng (prefix `A`ctor, `U`Object, `F`Struct, `b`bool, `E`num). Nhất quán > hoàn hảo.",
  },

  // ---- Section 0: Setup ----
  {
    id: "c-setup-paths",
    sectionId: "0",
    tag: "Setup",
    front: "Hai 'đường build' mà máy bạn cần chạy được (mục 0)?",
    back: "**Đường 1 — C++ thuần:** Visual Studio → Console App (F5) hoặc CMake. **Đường 2 — Unreal:** tạo project Third Person **C++**, build cấu hình *Development Editor | Win64*, rồi mở `.uproject`.",
  },
  {
    id: "c-live-coding",
    sectionId: "0",
    tag: "Unreal",
    front: "Live Coding trong UE dùng khi nào và giới hạn gì?",
    back: "**Ctrl+Alt+F11** biên dịch thay đổi trong **`.cpp`** khi editor đang mở — nhanh để iterate logic. ⚠️ Đổi **header** (`UPROPERTY`/`UFUNCTION`/layout class) → **đóng editor, build từ IDE** rồi mở lại.",
  },

  // ---- Part VIII: Supplementary ----
  {
    id: "c-casts-4",
    sectionId: "46",
    tag: "Casting",
    front: "4 kiểu cast tường minh của C++ — cái nào kiểm tra runtime?",
    back: "static_cast chuyển kiểu theo quy tắc tĩnh, không kiểm tra downcast. dynamic_cast kiểm tra down/cross-cast với nguồn đa hình còn sống: pointer thất bại trả nullptr, reference ném std::bad_cast. const_cast đổi cv-qualification; sửa object thật sự const là UB. reinterpret_cast không tự tạo object mới hoặc bảo đảm truy cập hợp lệ. C-style cast không bao gồm dynamic_cast.",
  },
  {
    id: "c-ue-cast",
    sectionId: "46",
    tag: "Unreal",
    front: "Cast UObject trong Unreal dùng gì, khác `dynamic_cast` sao?",
    back: "Dùng `Cast<T>()` (trả `nullptr` nếu sai kiểu) vì UE **tắt RTTI** và UObject có reflection. `CastChecked<T>()` khi **chắc chắn** đúng kiểu (sai → assert). `Cast<>` **chỉ cho UObject**.",
  },
  {
    id: "c-static-3",
    sectionId: "47",
    tag: "Linkage",
    front: "3 nghĩa của `static` trong C++?",
    back: "**1) static local**: giữ trạng thái qua các lần gọi; khởi tạo có đồng bộ từ C++11, nhưng các lần sửa sau đó không tự thread-safe. **2) static data member**: thuộc class, dùng chung; static method không có this. **3) static ở namespace scope**: internal linkage theo translation unit.",
  },
  {
    id: "c-using-namespace",
    sectionId: "47",
    tag: "Linkage",
    front: "Vì sao cấm `using namespace` trong header?",
    back: "Nó đổ toàn bộ namespace vào **mọi file** include header đó → đụng độ tên khó lường. Trong `.cpp` dùng tiết chế. `namespace { ... }` (anonymous) = 'private cấp file', thay cho `static` tự do.",
  },
  {
    id: "c-operator-overload",
    sectionId: "48",
    tag: "Operator",
    front: "Khác nhau giữa `operator+` và `operator+=`?",
    back: "`operator+` trả **giá trị mới** và là `const`; `operator+=` **sửa chính mình** rồi `return *this`. Toán tử đối xứng (`+`,`*`,`==`) nên viết **free function**. C++20: `operator== ... = default;` và `<=>` sinh luôn `<,<=,>,>=`.",
  },
  {
    id: "c-data-race",
    sectionId: "50",
    tag: "Threading",
    front: "Data race là gì? Hai công cụ tối thiểu để tránh?",
    back: "Nhiều thread đọc/ghi cùng dữ liệu không đồng bộ → **UB**. Bảo vệ bằng **`std::mutex` + `std::lock_guard`** (RAII) hoặc **`std::atomic`** cho biến đơn giản. Tốt hơn: **đừng chia sẻ** — mỗi thread dữ liệu riêng, gộp sau.",
  },
  {
    id: "c-ue-gamethread",
    sectionId: "50",
    tag: "Unreal",
    front: "Quy tắc số 1 về thread trong Unreal?",
    back: "Chỉ được đụng `UObject`/`AActor` (spawn, destroy, set property, hầu hết API engine) trên **Game Thread**. Nghi ngờ → `IsInGameThread()`. Việc nặng (không đụng UObject) đẩy sang thread pool bằng `Async`, xong `AsyncTask(ENamedThreads::GameThread, ...)` để quay về.",
  },
  {
    id: "c-enhanced-input",
    sectionId: "52",
    tag: "Unreal",
    front: "Enhanced Input (UE5): phân biệt IA và IMC?",
    back: "**IA_** = MỘT hành động trừu tượng + kiểu giá trị (`IA_Move` Axis2D, `IA_Jump` bool). **IMC_** = bảng map **phím → action** kèm modifier/trigger. Kích hoạt IMC cho local player qua `UEnhancedInputLocalPlayerSubsystem::AddMappingContext`. Input cũ (BindAxis/Action) deprecated từ UE 5.1.",
  },
  {
    id: "c-testing",
    sectionId: "55",
    tag: "Testing",
    front: "Nguyên tắc thiết kế để code test được?",
    back: "**Tách logic thuần** (tính damage, kho đồ...) ra khỏi engine — nhờ composition (mục 16) & data-driven (mục 39). C++ thuần: GoogleTest/Catch2. Unreal: Automation Test (`IMPLEMENT_SIMPLE_AUTOMATION_TEST`, chạy ở Session Frontend). Bắt đầu từ hàm thuần logic.",
  },

  // ---- Extended coverage (mọi phần) ----
  {
    id: "c-brace-init",
    sectionId: "3",
    tag: "Cơ bản",
    front: "Khác biệt giữa `int x = 5;` và `int x{5};`?",
    back: "Brace-init `{}` **chặn narrowing** (mất dữ liệu ngầm, vd `int x{3.7}` → lỗi biên dịch) nên an toàn hơn. Ưu tiên `{}`. Chọn kiểu số có kích thước rõ (`int32_t`) khi cần chắc chắn về bit.",
  },
  {
    id: "c-switch-fallthrough",
    sectionId: "4",
    tag: "Control Flow",
    front: "Bẫy phổ biến của `switch` trong C++?",
    back: "**Fall-through**: quên `break` → chạy tiếp case kế. Cố ý thì đánh dấu `[[fallthrough]]`. `default` cho phần còn lại; bật cảnh báo để không bỏ sót case của enum.",
  },
  {
    id: "c-param-passing",
    sectionId: "5",
    tag: "Functions",
    front: "3 cách truyền tham số: value / reference / const reference — chọn khi nào?",
    back: "**By value** (`T`): tham số riêng, từ lvalue thường copy, từ rvalue có thể move; phù hợp kiểu nhỏ hoặc khi cần sở hữu giá trị. **T&**: sửa biến gốc. **const T&**: mượn chỉ đọc qua giao diện đó, tránh copy object lớn.",
  },
  {
    id: "c-access-specifiers",
    sectionId: "12",
    tag: "OOP",
    front: "`public` / `protected` / `private` khác nhau thế nào?",
    back: "**private** (mặc định của class): chỉ chính class. **protected**: class + lớp con. **public**: mọi nơi. Encapsulation: dữ liệu để private, expose qua method public. `this` = con trỏ tới object hiện tại.",
  },
  {
    id: "c-is-a",
    sectionId: "14",
    tag: "OOP",
    front: "`class Dog : public Animal` diễn đạt quan hệ gì?",
    back: "**is-a**: Dog *là một* Animal → dùng được ở mọi nơi cần Animal (Liskov). Nếu chỉ muốn *dùng lại* code mà không phải is-a → ưu tiên **composition** (mục 16).",
  },
  {
    id: "c-game-patterns",
    sectionId: "29",
    tag: "Patterns",
    front: "Vài design pattern hay gặp trong game?",
    back: "**Object Pool** (tái dùng bullet/enemy), **State machine** (AI/animation), **Observer** (event/delegate), **Component** (ECS), **Command** (input/undo), **Flyweight** (chia sẻ data). Đọc *Game Programming Patterns*.",
  },
  {
    id: "c-ue-vs-std",
    sectionId: "30",
    tag: "Unreal",
    front: "3 khác biệt lớn của UE C++ so với C++ chuẩn?",
    back: "**Build**: UnrealBuildTool + `.Build.cs` (không CMake). **Exceptions & RTTI thường tắt** → dùng `check`/`Cast<>`. **Reflection + GC** cho `UObject` (macro `UCLASS`/`UPROPERTY`). Kèm container/kiểu riêng (`TArray`, `FString`...).",
  },
  {
    id: "c-gameplay-framework",
    sectionId: "34",
    tag: "Unreal",
    front: "Vai trò GameMode / PlayerController / Pawn?",
    back: "**GameMode**: luật chơi (server-only), spawn player. **PlayerController**: 'bộ não' người chơi — nhận input, possess Pawn. **Pawn/Character**: thân thể điều khiển được. **GameState/PlayerState**: dữ liệu đồng bộ ván/người chơi.",
  },
  {
    id: "c-ue-objptr",
    sectionId: "36",
    tag: "Unreal",
    front: "Khi nào dùng `TObjectPtr` vs `TWeakObjectPtr` vs `TSharedPtr`?",
    back: "**`TObjectPtr<T>`** (+`UPROPERTY`): tham chiếu UObject mạnh, giữ khỏi GC — thay raw pointer trong header. **`TWeakObjectPtr<T>`**: yếu, tự thành null khi object bị hủy. **`TSharedPtr<T>`**: cho object **non-UObject**.",
  },
  {
    id: "c-bp-expose",
    sectionId: "38",
    tag: "Unreal",
    front: "Expose C++ cho Blueprint dùng specifier nào?",
    back: "Hàm: `UFUNCTION(BlueprintCallable)` (gọi từ BP) / `BlueprintPure` (không side-effect). Biến: `UPROPERTY(EditAnywhere, BlueprintReadWrite)`. `BlueprintImplementableEvent`: khai báo ở C++, hiện thực bên BP.",
  },
  {
    id: "c-datatable",
    sectionId: "39",
    tag: "Unreal",
    front: "DataTable vs DataAsset dùng để làm gì?",
    back: "**DataTable**: nhiều dòng cùng cấu trúc (`FTableRowBase`), thường import CSV — hợp danh sách (quái, item, wave). **DataAsset**: một object cấu hình đơn lẻ (`UPrimaryDataAsset`). Mục tiêu: số liệu ở **data**, không hard-code.",
  },
  {
    id: "c-gas",
    sectionId: "40",
    tag: "Unreal",
    front: "Các khối chính của Gameplay Ability System (GAS)?",
    back: "**ASC** (AbilitySystemComponent) trung tâm; **Gameplay Ability** (skill); **Attribute/AttributeSet** (HP, mana); **Gameplay Effect** (thay đổi attribute: buff/damage); **Gameplay Tag** (nhãn trạng thái). Mạnh cho RPG/MOBA, học phí cao.",
  },
  {
    id: "c-debug-tools",
    sectionId: "43",
    tag: "Debug",
    front: "Công cụ debug tối thiểu nên biết?",
    back: "**Breakpoint + watch + call stack**. **Sanitizers**: AddressSanitizer (dangling/out-of-bounds), UBSan. UE: `UE_LOG`, on-screen debug, `check`/`ensure`. Nguyên tắc: tái hiện bug ổn định *trước khi* sửa.",
  },
  {
    id: "c-best-practices",
    sectionId: "45",
    tag: "Best Practices",
    front: "Vài mục cốt lõi của Best Practices Checklist?",
    back: "Ưu tiên **RAII/smart pointer** (không new/delete trần), **const-correctness**, truyền **const&** cho object lớn, **Rule of 0**, `override` + virtual destructor, tránh UB, đặt tên nhất quán, **đo trước khi tối ưu**. UE: đủ `UPROPERTY`, delegate thay coupling cứng.",
  },
  {
    id: "c-ue-strings",
    sectionId: "49",
    tag: "Unreal",
    front: "FString vs FName vs FText — dùng khi nào?",
    back: "**`FString`**: chuỗi sửa được, thao tác chung. **`FName`**: định danh bất biến, so sánh cực nhanh (asset/bone/tag). **`FText`**: chuỗi hiển thị cho người dùng, hỗ trợ **i18n**. Literal dùng `TEXT(\"...\")`.",
  },
  {
    id: "c-uinterface",
    sectionId: "51",
    tag: "Unreal",
    front: "Interface trong Unreal khai báo & gọi thế nào?",
    back: "Cặp **`UINTERFACE`** (rỗng, cho reflection) + lớp `I...` chứa hàm. Kiểm tra: `Actor->Implements<UMyInterface>()`. Gọi an toàn: `IMyInterface::Execute_Foo(Actor, args)` (hỗ trợ cả object hiện thực bằng Blueprint).",
  },
  {
    id: "c-timers-collision",
    sectionId: "53",
    tag: "Unreal",
    front: "Đặt hẹn giờ & bắt va chạm trong UE bằng gì?",
    back: "**Timer**: `GetWorldTimerManager().SetTimer(Handle, this, &AClass::Fn, Time, bLoop)` — cooldown, spawn wave. **Overlap**: component (Sphere...) + bind `OnComponentBeginOverlap` (`UFUNCTION`), set collision preset đúng.",
  },
  {
    id: "c-replication",
    sectionId: "54",
    tag: "Unreal",
    front: "Multiplayer UE: replicated property vs RPC?",
    back: "**Replicated property**: server đổi → tự đồng bộ xuống client (state); cần `GetLifetimeReplicatedProps`, set trên **server**. **RPC**: gọi hàm qua mạng — `Server` (client→server), `Client` (server→1 client), `NetMulticast` (server→mọi client). Server là 'nguồn sự thật'.",
  },
];

/** All card ids, in deck order. */
export const cardIds = cards.map((c) => c.id);

const cardById: Record<string, Flashcard> = {};
for (const c of cards) cardById[c.id] = c;
export function getCard(id: string): Flashcard | undefined {
  return cardById[id];
}
