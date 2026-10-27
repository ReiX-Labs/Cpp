// Multiple-choice quizzes shown in each lesson's "Luyện tập" (Practice) tab.
// Keyed by section id. Extend freely — add a `sectionId: [...questions]` entry.

export interface QuizQuestion {
  id: string;
  q: string;
  /** optional C++ snippet shown above the choices */
  code?: string;
  choices: string[];
  answer: number; // index of the correct choice
  explain?: string;
}

export const quizzes: Record<string, QuizQuestion[]> = {
  "1": [
    {
      id: "q1-1",
      q: "Lỗi 'unresolved external symbol' thuộc giai đoạn nào?",
      choices: ["Preprocessor", "Compiler", "Linker", "Runtime"],
      answer: 2,
      explain: "Đây là lỗi khi Linker không tìm thấy định nghĩa của một symbol đã khai báo.",
    },
    {
      id: "q1-2",
      q: "Một 'translation unit' là gì?",
      choices: [
        "Một dòng code sau khi dịch",
        "Một file .cpp sau khi preprocess",
        "Một file .exe cuối cùng",
        "Một thư viện .lib",
      ],
      answer: 1,
      explain: "Compiler dịch từng translation unit (file .cpp đã expand) độc lập thành object file.",
    },
    {
      id: "q1-3",
      q: "'Zero-overhead abstraction' nghĩa là gì?",
      choices: [
        "Không có abstraction nào cả",
        "Abstraction luôn miễn phí bộ nhớ",
        "Bạn không trả giá runtime cho thứ bạn không dùng",
        "Compiler bỏ qua mọi class",
      ],
      answer: 2,
    },
  ],
  "6": [
    {
      id: "q6-1",
      q: "Phát biểu nào ĐÚNG về reference?",
      choices: [
        "Có thể để null",
        "Phải khởi tạo ngay và không đổi target",
        "Cần toán tử * để truy cập giá trị",
        "Có thể tái gán trỏ sang biến khác",
      ],
      answer: 1,
    },
    {
      id: "q6-2",
      q: "Đoạn code sau in ra gì?",
      code: "int x = 5;\nint* p = &x;\n*p = 42;\nstd::cout << x;",
      choices: ["5", "42", "Địa chỉ của x", "Lỗi compile"],
      answer: 1,
      explain: "`*p = 42` ghi vào ô nhớ của x thông qua con trỏ, nên x = 42.",
    },
    {
      id: "q6-3",
      q: "Nên dùng gì thay cho `NULL` trong C++ hiện đại?",
      choices: ["0", "nullptr", "void*", "NIL"],
      answer: 1,
    },
  ],
  "9": [
    {
      id: "q9-1",
      q: "RAII gắn vòng đời tài nguyên vào đâu?",
      choices: [
        "Vào biến toàn cục",
        "Vào vòng đời của object (constructor/destructor)",
        "Vào garbage collector",
        "Vào hàm main()",
      ],
      answer: 1,
    },
    {
      id: "q9-2",
      q: "Ưu điểm lớn nhất của RAII khi có exception là gì?",
      choices: [
        "Chạy nhanh hơn",
        "Tài nguyên vẫn được giải phóng tự động khi stack unwinding",
        "Không cần destructor",
        "Tự động bắt mọi exception",
      ],
      answer: 1,
    },
  ],
  "10": [
    {
      id: "q10-1",
      q: "Mặc định nên chọn smart pointer nào cho sở hữu đơn?",
      choices: ["shared_ptr", "unique_ptr", "weak_ptr", "raw pointer"],
      answer: 1,
      explain: "unique_ptr diễn đạt một owner và không cần bộ đếm sở hữu chung. Kích thước/chi phí còn phụ thuộc deleter và kiểu pointer.",
    },
    {
      id: "q10-2",
      q: "`weak_ptr` chủ yếu dùng để?",
      choices: [
        "Tăng tốc độ truy cập",
        "Phá vỡ vòng tham chiếu của shared_ptr",
        "Thay thế unique_ptr",
        "Cấp phát trên stack",
      ],
      answer: 1,
    },
    {
      id: "q10-3",
      q: "Cách tạo unique_ptr được khuyến nghị?",
      code: "// ?",
      choices: [
        "new unique_ptr<T>()",
        "std::make_unique<T>(args)",
        "malloc(sizeof(T))",
        "unique_ptr<T> = T()",
      ],
      answer: 1,
    },
  ],
  "11": [
    {
      id: "q11-1",
      q: "`std::move(x)` thực chất làm gì?",
      choices: [
        "Sao chép x sang chỗ mới",
        "Xóa x khỏi bộ nhớ",
        "Tạo biểu thức xvalue để overload phù hợp có thể được chọn",
        "Đổi kiểu x thành pointer",
      ],
      answer: 2,
      explain: "std::move không tự chuyển tài nguyên; thao tác tiếp theo có thể move, copy hoặc không biên dịch tùy kiểu/overload.",
    },
    {
      id: "q11-2",
      q: "Sau khi move từ một std::vector vào vector khác, quy tắc chung nào đúng về nguồn?",
      choices: [
        "Bị hủy hoàn toàn, không dùng được",
        "Giữ nguyên giá trị cũ",
        "Còn hợp lệ; không giả định giá trị cụ thể, chỉ dùng thao tác thỏa tiền điều kiện",
        "Null pointer",
      ],
      answer: 2,
      explain: "Có thể gán lại, hủy hoặc dùng thao tác có tiền điều kiện được thỏa mãn. Không suy quy tắc này cho mọi class tự viết; unique_ptr có cam kết riêng là nguồn rỗng sau chuyển quyền sở hữu.",
    },
  ],
  "13": [
    {
      id: "q13-1",
      q: "Rule of Three gồm ba hàm nào?",
      choices: [
        "Constructor, Getter, Setter",
        "Destructor, Copy constructor, Copy assignment",
        "Move ctor, Move assign, Destructor",
        "main, init, shutdown",
      ],
      answer: 1,
    },
    {
      id: "q13-2",
      q: "Cách tiếp cận được khuyến khích nhất là?",
      choices: [
        "Rule of Five luôn luôn",
        "Rule of Zero — để compiler tự sinh khi có thể",
        "Tự viết mọi thứ bằng tay",
        "Không dùng destructor",
      ],
      answer: 1,
    },
  ],
  "15": [
    {
      id: "q15-1",
      q: "Vì sao base cho phép delete derived qua con trỏ base cần virtual destructor trong C++17?",
      choices: [
        "Để chạy nhanh hơn",
        "Để delete qua con trỏ base gọi đúng destructor derived",
        "Để tiết kiệm bộ nhớ",
        "Vì compiler bắt buộc",
      ],
      answer: 1,
      explain: "Nếu delete thông thường một derived qua base pointer thiếu virtual destructor thì là UB; không được dự đoán chỉ destructor base chạy. Thiết kế cấm xóa qua base có thể dùng destructor protected non-virtual.",
    },
    {
      id: "q15-2",
      q: "`= 0` sau một hàm virtual nghĩa là?",
      code: "virtual void Draw() = 0;",
      choices: [
        "Hàm trả về 0",
        "Pure virtual — class trở thành abstract",
        "Hàm bị vô hiệu hóa",
        "Hàm inline",
      ],
      answer: 1,
    },
    {
      id: "q15-3",
      q: "Từ khóa `override` giúp gì?",
      choices: [
        "Tăng tốc dispatch",
        "Bắt compiler kiểm tra đúng chữ ký hàm virtual của base",
        "Biến hàm thành static",
        "Ẩn hàm base",
      ],
      answer: 1,
    },
  ],
  "18": [
    {
      id: "q18-1",
      q: "`[&]` trong lambda nghĩa là?",
      choices: [
        "Capture mọi biến by value",
        "Capture ngầm định các biến cần dùng theo tham chiếu",
        "Không capture gì",
        "Chỉ capture this",
      ],
      answer: 1,
      explain: "Cẩn thận dangling nếu lambda sống lâu hơn biến được capture.",
    },
  ],
  "20": [
    {
      id: "q20-1",
      q: "Container mặc định nên chọn trong hầu hết trường hợp?",
      choices: ["std::list", "std::vector", "std::map", "std::deque"],
      answer: 1,
      explain: "vector liền kề trong bộ nhớ → cache-friendly, truy cập O(1).",
    },
    {
      id: "q20-2",
      q: "Container nào tra cứu theo key trung bình O(1), không bảo đảm thứ tự?",
      choices: ["std::map", "std::unordered_map", "std::vector", "std::set"],
      answer: 1,
    },
  ],
  "22": [
    {
      id: "q22-1",
      q: "Khác biệt chính giữa một biến `const` và một biến `constexpr`?",
      choices: [
        "Không có khác biệt",
        "Biến constexpr cần khởi tạo bằng biểu thức hằng phù hợp",
        "const nhanh hơn constexpr",
        "constexpr chỉ dùng cho hàm",
      ],
      answer: 1,
    },
    {
      id: "q22-2",
      q: "`int GetHealth() const` — `const` ở đây nghĩa là?",
      choices: [
        "Trả về hằng số",
        "Không sửa member thông thường của object qua this",
        "Không thể gọi method này",
        "Method là static",
      ],
      answer: 1,
      explain: "Const method vẫn có thể sửa mutable member hoặc object khác được trỏ tới. Const không đồng nghĩa hàm thuần hay tự an toàn đa luồng.",
    },
  ],
  "25": [
    {
      id: "q25-1",
      q: "Thứ tự đúng của một game loop cơ bản?",
      choices: [
        "Render → Update → Input",
        "Input → Render → Update",
        "Process Input → Update → Render",
        "Update → Input → Render",
      ],
      answer: 2,
    },
    {
      id: "q25-2",
      q: "Vì sao physics nên dùng fixed timestep?",
      choices: [
        "Để tiết kiệm pin",
        "Cho kết quả ổn định, không phụ thuộc framerate",
        "Để render nhanh hơn",
        "Vì CPU yêu cầu",
      ],
      answer: 1,
    },
  ],
  "26": [
    {
      id: "q26-1",
      q: "Trong ECS, 'Component' nên chứa gì?",
      choices: [
        "Cả dữ liệu và logic phức tạp",
        "Chủ yếu dữ liệu thuần (data)",
        "Con trỏ tới System",
        "Vòng lặp game",
      ],
      answer: 1,
    },
  ],
  "27": [
    {
      id: "q27-1",
      q: "Nguyên tắc vàng khi tối ưu hiệu năng?",
      choices: [
        "Tối ưu mọi dòng ngay từ đầu",
        "Đo (profile) trước khi tối ưu",
        "Luôn dùng con trỏ thô",
        "Viết assembly bằng tay",
      ],
      answer: 1,
    },
    {
      id: "q27-2",
      q: "'Cache miss' gây chậm vì?",
      choices: [
        "CPU phải lấy dữ liệu từ RAM (chậm hơn cache nhiều lần)",
        "Ổ cứng bị đầy",
        "GPU quá tải",
        "Thiếu RAM",
      ],
      answer: 0,
    },
  ],
  "31": [
    {
      id: "q31-1",
      q: "`UPROPERTY()` trên một con trỏ UObject có tác dụng quan trọng nào?",
      choices: [
        "Làm biến chạy nhanh hơn",
        "Giữ object khỏi bị Garbage Collector thu hồi",
        "Ẩn biến khỏi editor",
        "Biến nó thành const",
      ],
      answer: 1,
    },
  ],
  "35": [
    {
      id: "q35-1",
      q: "Trong Unreal, tương đương của `std::vector<T>` là?",
      choices: ["TList<T>", "TArray<T>", "FVector", "TMap<T>"],
      answer: 1,
    },
    {
      id: "q35-2",
      q: "Chuỗi có thể sửa đổi trong UE dùng kiểu nào?",
      choices: ["FName", "FText", "FString", "std::string"],
      answer: 2,
    },
  ],
  "44": [
    {
      id: "q44-1",
      q: "Đâu KHÔNG phải undefined behavior?",
      choices: [
        "Truy cập phần tử ngoài kích thước mảng",
        "Dùng con trỏ đã delete (dangling)",
        "Chia một số cho 2",
        "Đọc biến chưa khởi tạo",
      ],
      answer: 2,
    },
  ],
  "0": [
    {
      id: "q0-1",
      q: "Cách nhanh nhất để thử code C++ mà không cần cài gì?",
      choices: ["Notepad", "Compiler Explorer (godbolt.org)", "Microsoft Word", "Paint"],
      answer: 1,
      explain: "godbolt.org cho phép dán code C++, thấy ngay kết quả & mã assembly.",
    },
  ],
  "46": [
    {
      id: "q46-1",
      q: "Cast nào kiểm tra downcast một pointer tới base đa hình còn sống, trả nullptr khi kiểm tra kiểu thất bại?",
      choices: ["static_cast", "dynamic_cast", "const_cast", "reinterpret_cast"],
      answer: 1,
      explain: "dynamic_cast<Derived*>(p) kiểm tra runtime và trả nullptr khi thất bại. Dạng reference thất bại ném std::bad_cast; cast không cứu được pointer dangling.",
    },
    {
      id: "q46-2",
      q: "Trong Unreal, để cast một UObject nên dùng?",
      choices: ["dynamic_cast<T>", "Cast<T>()", "static_cast<T>", "C-style cast (T)x"],
      answer: 1,
      explain: "UE thường tắt RTTI; Cast<> dựa vào reflection của UObject, trả nullptr nếu sai kiểu.",
    },
  ],
  "47": [
    {
      id: "q47-1",
      q: "`static int calls = 0;` bên trong một hàm nghĩa là?",
      choices: [
        "Một biến toàn cục",
        "Giữ giá trị qua các lần gọi (static local)",
        "Thành viên của class",
        "Hằng số chỉ đọc",
      ],
      answer: 1,
    },
    {
      id: "q47-2",
      q: "Viết `using namespace std;` trong một header là?",
      choices: [
        "Được khuyến khích",
        "Cấm — đổ cả namespace vào mọi file include header đó",
        "Bắt buộc",
        "Chỉ gây lỗi trong Unreal",
      ],
      answer: 1,
    },
  ],
  "50": [
    {
      id: "q50-1",
      q: "Trong Unreal, được phép spawn/sửa UObject/Actor trên thread nào?",
      choices: ["Bất kỳ thread nào", "Chỉ Game Thread", "Chỉ Render Thread", "Chỉ worker thread"],
      answer: 1,
      explain: "Nghi ngờ thì kiểm tra bằng IsInGameThread().",
    },
    {
      id: "q50-2",
      q: "Cách nhẹ nhất để cộng an toàn một biến đếm chia sẻ giữa các thread?",
      choices: ["Biến int thường", "std::atomic", "Không cần gì", "Từ khóa volatile"],
      answer: 1,
      explain: "atomic nhẹ hơn mutex cho biến đơn giản; volatile KHÔNG đảm bảo tính nguyên tử.",
    },
  ],
  "52": [
    {
      id: "q52-1",
      q: "Trong Enhanced Input, asset nào map phím → action?",
      choices: [
        "Input Action (IA_)",
        "Input Mapping Context (IMC_)",
        "PlayerController",
        "Blueprint",
      ],
      answer: 1,
    },
    {
      id: "q52-2",
      q: "Hệ input cũ (BindAxis/BindAction qua .ini) hiện trạng thế nào?",
      choices: [
        "Khuyến nghị cho dự án mới",
        "Deprecated từ UE 5.1",
        "Chỉ dùng cho mobile",
        "Nhanh hơn Enhanced Input",
      ],
      answer: 1,
    },
  ],
  "55": [
    {
      id: "q55-1",
      q: "Nguyên tắc giúp code dễ test nhất?",
      choices: [
        "Nhồi hết logic vào Actor/engine",
        "Tách logic thuần ra khỏi engine",
        "Chỉ test tay qua UI",
        "Đợi QA test cuối dự án",
      ],
      answer: 1,
    },
  ],
  "3": [
    {
      id: "q3-1",
      q: "Khởi tạo nào CHẶN narrowing (an toàn hơn)?",
      choices: ["int x = 3.7f", "int x(3.7f)", "int x{3.7f}  // lỗi biên dịch", "auto x = 3.7f"],
      answer: 2,
      explain: "Brace-init {} chặn narrowing → int x{3.7f} không biên dịch được, buộc bạn ép kiểu tường minh.",
    },
  ],
  "5": [
    {
      id: "q5-1",
      q: "Truyền một object LỚN chỉ để đọc, nên dùng?",
      choices: ["by value (T)", "const reference (const T&)", "con trỏ thô (T*)", "static T"],
      answer: 1,
      explain: "const T& tránh copy tốn kém và đảm bảo không sửa đổi.",
    },
  ],
  "14": [
    {
      id: "q14-1",
      q: "`class Dog : public Animal` nghĩa là?",
      choices: ["Dog chứa Animal", "Dog is-a Animal", "Animal is-a Dog", "Không liên quan"],
      answer: 1,
    },
  ],
  "29": [
    {
      id: "q29-1",
      q: "Pattern nào tránh new/delete liên tục cho bullet/enemy?",
      choices: ["Singleton", "Object Pool", "Observer", "Factory"],
      answer: 1,
    },
  ],
  "30": [
    {
      id: "q30-1",
      q: "Unreal build code bằng công cụ nào?",
      choices: ["CMake", "UnrealBuildTool (.Build.cs)", "Make", "Autotools"],
      answer: 1,
    },
  ],
  "34": [
    {
      id: "q34-1",
      q: "Thành phần nào giữ 'luật chơi' và (mặc định) chỉ tồn tại trên server?",
      choices: ["PlayerController", "GameMode", "Pawn", "HUD"],
      answer: 1,
    },
  ],
  "39": [
    {
      id: "q39-1",
      q: "Muốn định nghĩa danh sách quái import từ CSV, dùng?",
      choices: ["DataAsset", "DataTable", "enum class", "UPROPERTY"],
      answer: 1,
    },
  ],
  "40": [
    {
      id: "q40-1",
      q: "Trong GAS, cái gì THAY ĐỔI attribute (gây damage/buff)?",
      choices: ["Gameplay Ability", "Gameplay Effect", "Gameplay Tag", "AttributeSet"],
      answer: 1,
    },
  ],
  "49": [
    {
      id: "q49-1",
      q: "Chuỗi hiển thị cho người dùng, hỗ trợ đa ngôn ngữ (i18n)?",
      choices: ["FString", "FName", "FText", "std::string"],
      answer: 2,
    },
    {
      id: "q49-2",
      q: "Định danh bất biến, so sánh rất nhanh (asset/tag/bone)?",
      choices: ["FString", "FName", "FText", "char*"],
      answer: 1,
    },
  ],
  "54": [
    {
      id: "q54-1",
      q: "RPC đánh dấu `Server` dùng để?",
      choices: [
        "Server gọi xuống mọi client",
        "Client gọi lên server",
        "Server gọi tới đúng 1 client",
        "Gọi cục bộ, không qua mạng",
      ],
      answer: 1,
    },
  ],
};

export function quizFor(sectionId: string): QuizQuestion[] {
  return quizzes[sectionId] ?? [];
}
