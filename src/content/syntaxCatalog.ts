import { curriculumSyntaxEntries } from "./curriculum";
import type { CurriculumSyntaxEntry } from "./curriculumParser";

export const lookupCategories = [
  { id: "language", title: "Cú pháp C++", description: "Viết chương trình, biểu thức, điều kiện và hàm." },
  { id: "memory", title: "Tham chiếu & bộ nhớ", description: "Địa chỉ, const, ownership và chuyển đổi kiểu." },
  { id: "objects", title: "Kiểu & đối tượng", description: "Class, vòng đời, đa hình và template." },
  { id: "stl", title: "Thư viện chuẩn & xử lý dữ liệu", description: "Chọn container, tìm kiếm, thêm/xóa và duyệt." },
  { id: "tools", title: "Build & debugging", description: "Header, tiền xử lý và thao tác Visual Studio." },
  { id: "unreal", title: "Unreal Engine", description: "Reflection, Actor, container, sự kiện và replication." },
] as const;

export const lookupTopics = [
  { id: "program", category: "language", title: "Cấu trúc chương trình" },
  { id: "variables", category: "language", title: "Biến & khởi tạo" },
  { id: "operators", category: "language", title: "Toán tử & bitmask" },
  { id: "flow", category: "language", title: "Điều kiện & vòng lặp" },
  { id: "functions", category: "language", title: "Hàm & truyền tham số" },
  { id: "reference", category: "memory", title: "Reference — tham chiếu" },
  { id: "pointer", category: "memory", title: "Pointer — con trỏ" },
  { id: "const", category: "memory", title: "const — cái gì được thay đổi?" },
  { id: "ownership", category: "memory", title: "RAII & smart pointer" },
  { id: "casts", category: "memory", title: "Chuyển đổi kiểu" },
  { id: "classes", category: "objects", title: "Struct & class" },
  { id: "lifetime", category: "objects", title: "Constructor & destructor" },
  { id: "polymorphism", category: "objects", title: "Kế thừa & đa hình" },
  { id: "templates", category: "objects", title: "Template" },
  { id: "names", category: "objects", title: "Namespace, static & enum" },
  { id: "array", category: "stl", title: "Array — mảng cố định" },
  { id: "vector", category: "stl", title: "std::vector — mảng động" },
  { id: "string", category: "stl", title: "std::string — chuỗi" },
  { id: "io", category: "stl", title: "Nhập & xuất" },
  { id: "algorithms", category: "stl", title: "Iterator & thuật toán" },
  { id: "lambda", category: "stl", title: "Lambda & capture" },
  { id: "move", category: "stl", title: "Copy & move" },
  { id: "map", category: "stl", title: "Map — tra cứu theo khóa" },
  { id: "optional", category: "stl", title: "optional — có / không có giá trị" },
  { id: "headers", category: "tools", title: "Header & dependency" },
  { id: "preprocessor", category: "tools", title: "Tiền xử lý" },
  { id: "debug", category: "tools", title: "Visual Studio & debugger" },
  { id: "ue-reflection", category: "unreal", title: "Reflection & Blueprint" },
  { id: "ue-objects", category: "unreal", title: "Actor, Component & kiểu" },
  { id: "ue-containers", category: "unreal", title: "TArray & TMap" },
  { id: "ue-events", category: "unreal", title: "Delegate & timer" },
  { id: "ue-network", category: "unreal", title: "Replication" },
] as const;

type TopicId = (typeof lookupTopics)[number]["id"];
interface Metadata {
  topic: TopicId;
  action: string;
  title?: string;
  aliases?: string[];
  symbols?: string[];
  example?: string;
  pitfall?: string;
}
export interface LookupEntry extends CurriculumSyntaxEntry, Metadata {
  id: string;
  sourceSyntax: string;
  title: string;
  aliases: string[];
  symbols: string[];
  example: string;
}

export function normalizeLookup(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/\s+/g, " ").trim();
}

// These are navigation, usage and search annotations. Definitions and lesson
// destinations continue to come from the canonical curriculum's lookup table.
function metadataFor(s: string, group: string): Metadata {
  if (/UPROPERTY|UFUNCTION|UCLASS|GENERATED_BODY/.test(s)) return { topic: "ue-reflection", action: "Khai báo reflection", aliases: ["Blueprint", "hiện trong editor", "UHT"] };
  if (/DOREPLIFETIME|HasAuthority/.test(s)) return { topic: "ue-network", action: "Quyền và đồng bộ", aliases: ["replication", "authority", "server", "đồng bộ mạng"] };
  if (/AddDynamic|Timer/.test(s)) return { topic: "ue-events", action: s.includes("Timer") ? "Hẹn giờ" : "Đăng ký sự kiện", aliases: [s.includes("Timer") ? "timer hủy hẹn giờ" : "delegate callback lắng nghe sự kiện"] };
  if (/Enemies\.Add|Scores\.Find|TArray|TMap/.test(s)) return { topic: "ue-containers", action: s.includes("Find") ? "Tìm theo khóa" : "Thêm phần tử", aliases: [s.includes("Find") ? "TMap::Find tìm key" : "TArray::Add thêm phần tử"] };
  if (/SpawnActor|CreateDefaultSubobject|Cast<AEnemy>/.test(s)) return { topic: "ue-objects", action: s.includes("Cast") ? "Kiểm tra kiểu" : "Tạo đối tượng", aliases: ["Unreal", s.includes("SpawnActor") ? "spawn tạo actor" : s.includes("Cast") ? "cast ép kiểu" : "tạo component"] };
  if (s.includes("UE_LOG")) return { topic: "debug", action: "Ghi log Unreal", aliases: ["UE_LOG", "in log", "ghi log", "Unreal"] };
  if (/Phím Visual Studio/.test(group)) return { topic: "debug", action: /Ctrl \+ Shift \+ B|Ctrl \+ Alt \+ L/.test(s) ? "Build & project" : /Watch|Call Stack/.test(s) ? "Quan sát trạng thái" : "Điều khiển debugger", aliases: ["phím tắt", "Visual Studio", "debugger"] };
  if (/observer\.lock|shared_ptr|make_shared|weak_ptr/.test(s)) return { topic: "ownership", action: "Sở hữu chia sẻ & quan sát", aliases: ["shared_ptr", "weak_ptr", "lock", "chia sẻ sở hữu", "tham chiếu yếu"] };
  if (/optional|nullopt/.test(s)) return { topic: "optional", action: "Kiểm tra có giá trị", aliases: ["optional", "không tìm thấy", "giá trị tùy chọn"] };
  if (s.startsWith("inventory.find")) return { topic: "map", action: "Tìm theo khóa", aliases: ["std::unordered_map::find", "unordered_map", "tìm key", "tìm khóa"] };
  if (/^std::map|^m\[|^m\.find/.test(s)) return { topic: "map", action: s.startsWith("std::map") ? "Khởi tạo & chọn container" : s.includes("find") ? "Tìm theo khóa" : "Thêm & cập nhật", aliases: ["std::map", "map có thứ tự", s.includes("find") ? "std::map::find" : s.includes("[") ? "std::map::operator[]" : "tạo map"] };
  if (/remove_if|std::for_each|std::count_if|std::sort|std::clamp|\.begin\(\)/.test(s)) return { topic: "algorithms", action: s.includes("sort") ? "Sắp xếp" : s.includes("remove_if") ? "Xóa theo điều kiện" : s.includes("count_if") ? "Đếm theo điều kiện" : s.includes("clamp") ? "Giới hạn giá trị" : "Duyệt khoảng", aliases: [s.match(/std::\w+/)?.[0] ?? "iterator", "thuật toán"] };
  if (/^\[|^\[\]/.test(s)) return { topic: "lambda", action: s.includes("mutable") ? "Sửa bản capture" : "Chọn capture", aliases: ["lambda", "capture", "hàm vô danh"] };
  if (/copied|existing =|std::move/.test(s)) return { topic: "move", action: s.includes("std::move") ? "Move" : "Copy", aliases: s.includes("std::move") ? ["move", "std::move", "chuyển quyền sở hữu"] : ["copy", "sao chép", s.includes("copied") ? "copy construction" : "copy assignment"] };
  if (/cast</.test(s)) return { topic: "casts", action: /dynamic/.test(s) ? "Kiểm tra kiểu runtime" : /const_cast/.test(s) ? "Thay cv-qualification" : /reinterpret/.test(s) ? "Chuyển đổi mức thấp" : "Chuyển đổi số", aliases: [s.match(/\w+_cast/)?.[0] ?? "cast", "ép kiểu", "chuyển kiểu"] };
  if (/^#(?:if|define|endif)/.test(s)) return { topic: "preprocessor", action: /define/.test(s) ? "Định nghĩa macro" : "Điều kiện biên dịch", aliases: ["macro", "tiền xử lý", "preprocessor"] };
  if (/^#include|#pragma|^class Player;|^void Attack/.test(s)) return { topic: "headers", action: /^class Player;|^void Attack/.test(s) ? "Forward declaration" : "Include & bảo vệ header", aliases: ["header", "include", "khai báo trước", "dependency"] };
  if (/GetMax|template|Definition template|ClampValue/.test(s) || group === "Templates cơ bản" && !s.includes("clamp")) return { topic: "templates", action: /class|std::vector/.test(s) ? "Class template" : "Function template", aliases: ["template", "generic", "kiểu tổng quát"] };
  if (/const int\*|int\* const|const Player&|GetHealth\(\) const|const int |constexpr/.test(s)) return { topic: "const", action: s.includes("GetHealth") ? "Const method" : s.includes("*") ? "Const pointer" : s.includes("&") ? "Const reference" : "Hằng & constant expression", aliases: ["const", "hằng", "chỉ đọc", "bất biến"] };
  if (/static|EnemyTracker|namespace|GameConfig|enum class|State state|CharacterClass::/.test(s)) return { topic: "names", action: /static|EnemyTracker/.test(s) ? "Static theo vị trí" : /State|enum/.test(s) ? "Enum có phạm vi" : "Namespace & phạm vi tên", aliases: /static|EnemyTracker/.test(s) ? ["static", "biến dùng chung"] : /State|enum/.test(s) ? ["enum", "enum class", "liệt kê"] : ["namespace", "phạm vi", "scope resolution"] };
  if (s.startsWith("values.") || s.startsWith("values[") || s.startsWith("std::vector<int> values")) {
    const method = s.match(/values\.(\w+)/)?.[1];
    return { topic: "vector", action: /push_back|pop_back|clear/.test(s) ? "Thêm & xóa" : /values\[|\.at/.test(s) ? "Truy cập phần tử" : /size|empty|capacity|reserve|resize/.test(s) ? "Kích thước & sức chứa" : "Khởi tạo", aliases: ["vector", ...(method ? [`std::vector::${method}`, `vector ${method}`, method] : ["tạo vector", "khởi tạo vector"])] };
  }
  if (/hpRaw|std::array/.test(s)) return { topic: "array", action: "Khởi tạo", aliases: ["array", "mảng cố định"] };
  if (/^name[.\[]|^name \+=|string name|^pos !=/.test(s)) return { topic: "string", action: /find|npos|substr/.test(s) ? "Tìm & cắt chuỗi" : /size|length|empty/.test(s) ? "Độ dài & rỗng" : /\+=/.test(s) ? "Nối chuỗi" : "Khởi tạo & truy cập", aliases: ["string", "chuỗi", ...(s.match(/name\.(\w+)/)?.[1] ? [`std::string::${s.match(/name\.(\w+)/)![1]}`] : [])] };
  if (/std::c(?:in|out)|getline/.test(s)) return { topic: "io", action: /cin|getline/.test(s) ? "Nhập dữ liệu" : "Xuất & định dạng", aliases: ["nhập xuất", "iostream", ...(s.includes("getline") ? ["đọc cả dòng", "getline", "khoảng trắng"] : [])] };
  if (/^for .* :/.test(s)) return { topic: "flow", action: "Duyệt phần tử", aliases: ["range for", "duyệt", "vector", ...(s.includes("&") ? ["không copy"] : ["copy phần tử"])] };
  if (/^if |^else|^switch|^for |^while |^do |^break|^continue/.test(s) && !s.includes("ptr")) return { topic: "flow", action: /for|while|do |break|continue/.test(s) ? "Vòng lặp" : "Điều kiện", aliases: ["điều kiện", "vòng lặp"] };
  if (/int& ref|^ref =/.test(s)) return { topic: "reference", action: "Khai báo & gán", aliases: ["reference", "tham chiếu", "bí danh"], symbols: s.startsWith("int&") ? ["&"] : [] };
  if (/unique_ptr|make_unique|^owner|^\{ auto owner|^new |^delete/.test(s)) return { topic: "ownership", action: /^new |^delete/.test(s) ? "Cấp phát thủ công" : "Sở hữu độc quyền", aliases: ["RAII", "ownership", "smart pointer", "unique_ptr", "bộ nhớ"] };
  if (/ptr|^&player/.test(s)) return { topic: "pointer", action: /->|\*ptr/.test(s) ? "Truy cập qua pointer" : s === "&player" ? "Lấy địa chỉ" : /nullptr/.test(s) ? "Null & hiệu lực" : "Khai báo & đổi đích", aliases: ["pointer", "con trỏ", ...(s === "&player" ? ["lấy địa chỉ", "address of"] : [])], symbols: s === "&player" ? ["&"] : s === "*ptr" || s.startsWith("Player* ptr") ? ["*"] : [] };
  if (/Animal|Dog|Speak|protected|virtual void Update/.test(s)) return { topic: "polymorphism", action: /~Animal/.test(s) ? "Hủy đa hình" : / = 0/.test(s) ? "Interface & abstract class" : "Kế thừa & override", aliases: ["kế thừa", "đa hình", "virtual", "override"] };
  if (/~Player|Player::Player|explicit Player|Health hp\{/.test(s)) return { topic: "lifetime", action: /~/.test(s) ? "Destructor" : "Constructor", aliases: ["vòng đời", "khởi tạo", "constructor", "destructor"] };
  if (/struct Player|class Player|Player player|player.health|public:|private:|this->|Player::TakeDamage/.test(s)) return { topic: "classes", action: /public:|private:/.test(s) ? "Quyền truy cập" : /struct |class |Player player/.test(s) ? "Định nghĩa & tạo object" : "Thành viên & method", aliases: ["class", "struct", "đối tượng", "member"] };
  if (/Hàm, tham số/.test(group)) return { topic: "functions", action: /Damage|PrintPlayer|HealPlayer/.test(s) ? "Truyền tham số" : /return/.test(s) && !s.includes("Add") ? "Trả kết quả" : "Khai báo, định nghĩa & gọi", aliases: ["hàm", "tham số", "overload"] };
  if (/Toán tử/.test(group)) return { topic: "operators", action: /abilities|flags|bitwise/.test(s) ? "Bitmask & dịch bit" : /&&|\|\||!alive|condition/.test(s) ? "Logic & điều kiện" : "Số học, gán & so sánh", aliases: ["toán tử", "operator"] };
  if (/Biến, kiểu/.test(group) || s.includes("size_t")) return { topic: "variables", action: "Khai báo & khởi tạo", aliases: ["biến", "kiểu dữ liệu", "khởi tạo"] };
  return { topic: "program", action: "Cú pháp chương trình", aliases: ["main", "cú pháp"] };
}

const specific: Record<string, Partial<Metadata>> = {
  "std::map<Key, Value> m;": { title: "Map sắp theo khóa", aliases: ["std::map", "map có thứ tự", "ordered map", "tạo map"], example: "std::map<std::string, int> scores;\nscores[\"Mage\"] = 10;", pitfall: "Cần <map>. Thứ tự duyệt theo comparator của key; không phải thứ tự chèn." },
  "m[key] = value;": { title: "Thêm hoặc thay giá trị theo khóa", aliases: ["std::map::operator[]", "map thêm phần tử", "map cập nhật giá trị", "gán theo key"], example: "std::map<std::string, int> scores;\nscores[\"Mage\"] = 10;\nscores[\"Mage\"] = 20;", pitfall: "operator[] chèn value khởi tạo mặc định nếu chưa có key, rồi phép gán thay nó. Khi chỉ tìm, dùng find để tránh tự chèn." },
  "m.find(key)": { title: "Tìm trong map mà không chèn", aliases: ["std::map::find", "map tìm khóa", "map tìm key", "tìm không chèn"], example: "auto it = m.find(key);\nif (it != m.end()) {\n    std::cout << it->second;\n}", pitfall: "Không tìm thấy trả end(); không dereference end()." },
  "virtual void Update() = 0;": { title: "Khai báo pure virtual method", aliases: ["pure virtual", "abstract class", "hàm thuần ảo", "lớp trừu tượng"], example: "class Updatable {\npublic:\n    virtual ~Updatable() = default;\n    virtual void Update() = 0;\n};", pitfall: "Class còn pure virtual chưa được override là abstract; không tạo object trực tiếp từ class đó." },
  "values.push_back(30);": { title: "Thêm vào cuối vector", aliases: ["push_back", "std::vector::push_back", "thêm cuối vector", "thêm phần tử"], example: "values.push_back(30);", pitfall: "Nếu cấp phát lại, địa chỉ, reference và iterator cũ vào vector mất hiệu lực." },
  "values.pop_back();": { title: "Xóa phần tử cuối", aliases: ["pop_back", "std::vector::pop_back", "xóa cuối vector", "xóa phần tử cuối", "bỏ cuối"], example: "if (!values.empty()) values.pop_back();", pitfall: "Chỉ gọi khi vector không rỗng; hàm không trả phần tử bị xóa." },
  "values.clear();": { title: "Xóa toàn bộ phần tử", aliases: ["clear", "std::vector::clear", "xóa hết vector", "xóa mọi phần tử"], pitfall: "Size về 0; capacity không nhất thiết về 0." },
  "values.reserve(n);": { title: "Dự trữ sức chứa", aliases: ["reserve", "std::vector::reserve", "dự trữ bộ nhớ", "tăng sức chứa", "reserve resize"], example: "values.reserve(100); // size không đổi", pitfall: "Không tạo phần tử mới. reserve(100) không cho phép truy cập values[99] nếu size chưa đủ." },
  "values.resize(n);": { title: "Đổi số phần tử", aliases: ["resize", "std::vector::resize", "đổi số phần tử", "thay đổi kích thước", "tăng size", "reserve resize"], example: "values.resize(5); // size trở thành 5", pitfall: "Tăng size sẽ tạo phần tử; giảm size sẽ hủy phần tử dư." },
  "values.size()": { title: "Đếm phần tử đang có", aliases: ["size", "std::vector::size", "số phần tử", "độ dài vector"] },
  "values.capacity()": { title: "Xem sức chứa đã cấp phát", aliases: ["capacity", "std::vector::capacity", "sức chứa", "size capacity"] },
  "values.empty()": { title: "Kiểm tra vector rỗng", aliases: ["empty", "std::vector::empty", "vector rỗng", "kiểm tra rỗng"] },
  "values[i]": { title: "Truy cập không kiểm tra biên", aliases: ["operator[]", "std::vector::operator[]", "truy cập phần tử", "index", "chỉ số"], example: "if (i < values.size()) std::cout << values[i];", pitfall: "Chỉ số phải nằm trong [0, size). Capacity không phải giới hạn truy cập." },
  "values.at(i)": { title: "Truy cập có kiểm tra biên", aliases: ["at", "std::vector::at", "kiểm tra biên", "truy cập an toàn"], pitfall: "Chỉ số không hợp lệ ném std::out_of_range; cần có cách xử lý phù hợp." },
  "int& ref = hp;": { title: "& trong khai báo reference", example: "int hp = 100;\nint& ref = hp;\nref = 80; // hp cũng thành 80", aliases: ["&", "reference", "tham chiếu", "bí danh", "sửa biến gốc"], pitfall: "Reference phải gắn với đối tượng hợp lệ; phép gán về sau không đổi đích reference." },
  "&player": { title: "& trong biểu thức: lấy địa chỉ", example: "Player* ptr = &player;", aliases: ["&", "address of", "lấy địa chỉ", "địa chỉ object"], pitfall: "Giữ địa chỉ không kéo dài lifetime của player." },
  "Player* ptr = &player;": { title: "* trong khai báo pointer", aliases: ["*", "pointer", "con trỏ", "khai báo con trỏ"], pitfall: "Raw pointer không tự thể hiện quyền sở hữu hay quản lý lifetime." },
  "*ptr": { title: "* trong biểu thức: dereference", aliases: ["*", "dereference", "giải tham chiếu", "đọc qua con trỏ"], example: "int hp = 100;\nint* ptr = &hp;\n*ptr = 80; // sửa hp", pitfall: "Pointer phải trỏ tới object còn sống; khác nullptr chưa đủ chứng minh điều đó." },
  "const int* p": { title: "Cố định giá trị qua pointer", example: "const int* p = &hp;\np = &other; // được\n// *p = 10; // không được", aliases: ["const int*", "pointer to const", "con trỏ tới hằng", "const"] },
  "int* const p = &hp": { title: "Cố định địa chỉ trong pointer", example: "int* const p = &hp;\n*p = 10; // được nếu hp hợp lệ\n// p = &other; // không được", aliases: ["int* const", "const pointer", "con trỏ hằng", "const"] },
  "const int* const p = &hp": { title: "Cố định cả hai đường thay đổi", example: "const int* const p = &hp;\n// Không gán lại p hoặc sửa *p qua p.", aliases: ["const int* const", "const pointer to const", "const"] },
  "int GetHealth() const;": { title: "Const method", example: "int GetHealth() const { return health; }", pitfall: "Không sửa member không mutable qua this; không làm mọi dữ liệu bên ngoài bất biến." },
  "const int maxHP = 100;": { title: "Biến chỉ đọc sau khởi tạo", example: "const int maxHP = 100;\n// maxHP = 120; // không được", pitfall: "const không tự chứng minh initializer được tính khi biên dịch." },
  "const Player& ref = player;": { title: "Đọc object qua const reference", example: "const Player& ref = player;\nstd::cout << ref.health;\n// ref.health = 80; // không được", pitfall: "Không sửa qua ref; player vẫn có thể đổi qua đường truy cập khác. Object phải còn sống." },
  "void DamageRef(int& hp);": { title: "Truyền để sửa biến gốc", topic: "functions", action: "Truyền tham số", aliases: ["truyền để sửa biến gốc", "sửa bản gốc", "pass by reference", "tham số tham chiếu"], example: "void ResetHealth(int& hp) { hp = 100; }\nint health = 20;\nResetHealth(health); // health thành 100" },
  "void HealPlayer(Player* p, int amount);": { title: "Nhận pointer tới đối tượng", aliases: ["hồi máu", "HealPlayer", "truyền con trỏ", "pass by pointer"], pitfall: "Quy định rõ có chấp nhận nullptr và ai sở hữu Player; không giữ pointer quá lifetime của object." },
  "std::unique_ptr<T>": { title: "Sở hữu độc quyền", example: "auto owner = std::make_unique<int>(42);\nstd::cout << *owner;", pitfall: "Không copy unique_ptr; không tự delete pointer mượn từ owner." },
  "std::make_unique<T>(args...)": { title: "Tạo object với owner độc quyền", aliases: ["make_unique", "std::make_unique", "tạo unique_ptr", "cấp phát có owner"], example: "auto owner = std::make_unique<int>(42);", pitfall: "Cần <memory>. Đối số phải khớp constructor của kiểu được tạo." },
  "owner.get()": { title: "Mượn pointer từ owner", example: "auto owner = std::make_unique<int>(42);\nint* borrowed = owner.get();", pitfall: "borrowed không sở hữu tài nguyên. Khi owner hủy hoặc thay object, borrowed không còn hợp lệ." },
  "new T{...}": { title: "Tạo object động thủ công", example: "int* p = new int{42};\n// dùng p trong lifetime hợp lệ\ndelete p;", pitfall: "Phải có owner chịu trách nhiệm giải phóng kể cả đường thoát sớm; ưu tiên RAII khi có thể." },
  "delete ptr;": { title: "Giải phóng một object động", example: "int* ptr = new int{42};\ndelete ptr;\nptr = nullptr;", pitfall: "Ghép với single-object new đúng owner. Gán nullptr không làm các alias khác hết dangling." },
  "new int[5]{}": { title: "Tạo mảng động thủ công", example: "int* values = new int[5]{};\n// năm phần tử ban đầu bằng 0\ndelete[] values;", pitfall: "Ghép new[] với delete[]; ưu tiên vector khi phù hợp." },
  "delete[] array;": { title: "Giải phóng mảng động", example: "int* array = new int[5]{};\ndelete[] array;\narray = nullptr;", pitfall: "Chỉ dùng cho mảng do new[] phù hợp cấp phát, không phải std::array hoặc vector." },
  "ptr = nullptr; với T* ptr": { title: "Bỏ địa chỉ trong raw pointer", example: "int hp = 100;\nint* ptr = &hp;\nptr = nullptr; // hp vẫn tồn tại", pitfall: "Không giải phóng object; làm mất pointer owner duy nhất có thể gây leak." },
  "owner = nullptr; với std::unique_ptr<T> owner": { title: "Hủy object do unique_ptr sở hữu", example: "auto owner = std::make_unique<int>(42);\nowner = nullptr; // hủy int; owner rỗng", pitfall: "Các pointer và reference mượn tới object cũ không còn hợp lệ." },
  "std::move(x)": { title: "Cho phép chọn overload nhận rvalue", example: "auto first = std::make_unique<int>(42);\nauto second = std::move(first);\n// first rỗng; second sở hữu int", pitfall: "std::move tự nó chỉ là phép cast; việc chuyển tài nguyên phụ thuộc thao tác được gọi." },
  "F10": { title: "Step Over — bước qua lời gọi", aliases: ["F10", "step over", "bước qua hàm", "chạy từng dòng"], example: "F9 đặt breakpoint → F5 chạy đến đó → F10 bước qua", pitfall: "Hàm vẫn thực thi; debugger không chủ động bước vào thân hàm." },
  "F11": { title: "Step Into — bước vào hàm", aliases: ["F11", "step into", "bước vào hàm"] },
  "Shift + F11": { title: "Step Out — chạy ra khỏi hàm", aliases: ["shift f11", "step out", "ra khỏi hàm"] },
};

function expanded(row: CurriculumSyntaxEntry): CurriculumSyntaxEntry[] {
  if (row.syntax === "+ - * / %") return [
    ["a + b", "Cộng hai giá trị."], ["a - b", "Trừ hai giá trị."], ["a * b", "Nhân hai giá trị."],
    ["a / b", "Chia; hai toán hạng nguyên cho kết quả chia nguyên."], ["a % b", "Lấy phần dư của phép chia số nguyên."],
  ].map(([syntax, meaning]) => ({ ...row, syntax, meaning: `${meaning} ${/[/%]/.test(syntax) ? "Mẫu phải khác 0; với số nguyên có dấu, kết quả phải biểu diễn được." : "Với số nguyên có dấu, kết quả phải nằm trong miền biểu diễn."}` }));
  if (row.syntax.startsWith("a & b,")) return [
    ["a & b", "AND theo bit: bit kết quả bằng 1 khi cả hai bit tương ứng bằng 1."],
    ["a | b", "OR theo bit: bit kết quả bằng 1 khi ít nhất một bit tương ứng bằng 1."],
    ["a ^ b", "XOR theo bit: bit kết quả bằng 1 khi hai bit tương ứng khác nhau. Không phải lũy thừa."],
    ["~a", "Đảo các bit của toán hạng số nguyên sau integer promotion."],
  ].map(([syntax, meaning]) => ({ ...row, syntax, meaning }));
  return [row];
}

export const syntaxCatalog: LookupEntry[] = curriculumSyntaxEntries.flatMap((source, index) => expanded(source).map((entry, variant) => {
  const meta = { ...metadataFor(entry.syntax, entry.group), ...specific[entry.syntax] };
  if (entry.syntax === "a & b") Object.assign(meta, { action: "Bitmask & dịch bit", title: "& giữa hai số nguyên: AND theo bit", symbols: ["&"], aliases: ["&", "bitwise and", "AND theo bit", "và theo bit"], example: "6u & 3u // 110 & 011 = 010, giá trị 2" });
  if (entry.syntax === "a * b") Object.assign(meta, { title: "* giữa hai số: phép nhân", symbols: ["*"], aliases: ["*", "nhân", "phép nhân"], example: "int total = 3 * 4; // 12" });
  if (["a + b", "a - b", "a / b", "a % b"].includes(entry.syntax)) meta.symbols = [entry.syntax.replace(/[a-z\s]/g, "")];
  if (["a | b", "a ^ b", "~a", "a && b", "a || b", "!alive"].includes(entry.syntax)) meta.symbols = [entry.syntax.replace(/[a-z\s]/g, "")];
  if (entry.syntax === "== != < <= > >=" || entry.syntax === "= += -= *= /= %=" || entry.syntax === "&= |= ^= <<= >>=") meta.symbols = entry.syntax.split(" ");
  if (entry.syntax === "values[i]") meta.symbols = ["[]"];
  return { ...entry, ...meta, id: `syntax-${index}-${variant}`, sourceSyntax: source.syntax,
    title: meta.title ?? entry.syntax, aliases: meta.aliases ?? [], symbols: meta.symbols ?? [],
    example: meta.example ?? entry.syntax, pitfall: meta.pitfall };
}));

export function searchSyntaxCatalog(query: string, topicId = ""): LookupEntry[] {
  const needle = normalizeLookup(query);
  const symbolic = /^[^\p{L}\p{N}\s]+$/u.test(needle);
  return syntaxCatalog.filter(entry => !topicId || entry.topic === topicId).map(entry => {
    if (!needle) return { entry, score: 1 };
    if (symbolic) return { entry, score: entry.symbols.includes(needle) ? 2000 : normalizeLookup(entry.syntax) === needle ? 1500 : 0 };
    const aliases = entry.aliases.map(normalizeLookup);
    const syntax = normalizeLookup(entry.syntax);
    const title = normalizeLookup(entry.title);
    const topic = lookupTopics.find(item => item.id === entry.topic)!;
    const corpus = normalizeLookup(`${syntax} ${title} ${entry.meaning} ${aliases.join(" ")} ${topic.title} ${entry.action}`);
    const words = needle.split(/\s+/).filter(Boolean);
    const corpusWords = new Set(corpus.split(/[^\p{L}\p{N}_]+/u).filter(Boolean));
    const score = syntax === needle ? 1500 : aliases.includes(needle) ? 1300 : title === needle ? 1200
      : syntax.includes(needle) ? 1000 : aliases.some(alias => alias.includes(needle)) ? 900
      : title.includes(needle) ? 800 : corpus.includes(needle) ? 500
      : words.every(word => corpusWords.has(word)) ? 100 : 0;
    return { entry, score };
  }).filter(result => result.score > 0).sort((a, b) => b.score - a.score).map(result => result.entry);
}
