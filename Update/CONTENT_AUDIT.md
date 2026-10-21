# Đối chiếu handoff → website (21/10/2026)

Nguồn cập nhật: `CPP_Fundamentals_Review_01-09_AI_Handoff.md` trong thư mục này.
Đã đối chiếu với nội dung web đang đọc từ `Cpp_Game_Dev_Reference.md`, cùng dữ liệu ôn tập trong `src/data`.
Đây là đối chiếu phạm vi kiến thức, không phải xác nhận lại điểm hoặc chấm mã C++ của người học.

## Chủ đề trùng và phần cần bổ sung

| Bài handoff | Mục web đã có kiến thức tương ứng | Bổ sung từ handoff |
|---|---|---|
| 01 | 0, 1: môi trường, main, compiler | Nhập/xuất console, boolalpha, getline, phím tắt VS2022; phân biệt IDE/compiler/build system |
| 01–02 | 3, 22, 46: kiểu, auto, constexpr, cast | Chia nguyên trước khi chuyển float; const runtime và constant expression; giải thích auto không suy kiểu lúc chạy |
| 03 | 3: toán tử, flags | Short-circuit, ví dụ tiền/hậu tố, XOR đảo cờ, thứ tự ưu tiên, tránh tối ưu bitwise tùy tiện |
| 04 | 4: if, switch | Toán tử ba ngôi, scope, nhánh đúng đầu tiên so với if độc lập, fallthrough |
| 05 | 4, 17: các vòng lặp | continue vẫn chạy bước cập nhật trong for, break chỉ thoát vòng gần nhất, dấu ; ở do-while |
| 06 | 5: hàm, overload, tham số | Parameter/argument, prototype trước lời gọi, không overload chỉ theo return type, tách tính toán và hiển thị |
| 06.5 | 1, 2, 41 và phụ lục E: header/source/build | Arena ba file, header tự include dependency, giới hạn của pragma once, C3861/C2084, filters của VS |
| 07 | 20, 49: containers và string | C-style array, khởi tạo std::array một cặp ngoặc, at/[]; pop_back chỉ khi không rỗng; size_type và signed/unsigned; nhập cả dòng |
| 08 | 5, 6, 12, 22: struct, enum class, reference | Player theo đúng bài đã học; sửa bản sao so với sửa phần tử gốc trong range-for; ref = b không đổi đối tượng tham chiếu |
| 09 | 6: pointer/reference/nullptr | Phân biệt dấu * và & theo ngữ cảnh; dấu . và ->; Healing System, kiểm tra null và giới hạn HP; trạng thái chưa chấm |
| Ôn tập | Đã có quiz, flashcards và bài tập tổng quát | Ví dụ tích hợp ba file, 23 câu hỏi kèm đáp án đóng/mở, lịch ôn 20 phút, lịch sử mini-project riêng của handoff |

“Bổ sung” có thể là diễn giải/ví dụ chi tiết hơn cho khái niệm đã được nhắc, không nhất thiết là chủ đề hoàn toàn mới.
Số bài handoff không trùng số mục web: bài 09 là pointer, còn mục 9 của tài liệu tổng hợp là RAII.

## Cách đưa lên web và xử lý trùng lặp

- Trang **Ôn nền tảng · 01–09** đọc trực tiếp handoff, không chép lại văn bản vào một bộ bài markdown khác.
- Kiến thức tổng hợp cũ vẫn phục vụ tra cứu mở rộng. Các chủ đề tương ứng có liên kết hai chiều để tránh tạo thêm mục đánh số trùng hoặc gán nhầm tiến độ.
- Có phần kiến thức giao nhau giữa hai lộ trình, có chủ đích: bản handoff giữ đúng phạm vi và ví dụ người học đã học; bản tổng hợp chứa thêm kiến thức nâng cao.
- **Tra cứu & Cheat sheet → Câu lệnh · Bài 01–09** lấy bảng mục 1 từ handoff, cộng biểu thức đã xuất hiện ở mục 4/9/11; lọc bản ghi trùng cú pháp. Bảng hỗ trợ tìm không dấu, toán tử và lọc nhóm.
- Không tự đánh dấu đọc/xong, cộng XP hoặc sửa lịch sử học từ dữ liệu handoff. Bài 09 vẫn chưa được chấm. Bài 10–12 chỉ là chờ cập nhật.
- Phần hướng dẫn dành cho AI ở mục 17 không được đưa thành bài học. Mục 18 chỉ cung cấp phạm vi tương lai.
- Chỉnh một cách diễn đạt trong handoff: toán tử phạm vi là `::`; `std::` là cách dùng toán tử đó với namespace `std`.

## Cập nhật bài 10–12

1. Giữ file handoff hiện tại làm lịch sử. Khi nhận tài liệu mới, đối chiếu phạm vi và trạng thái trước khi cập nhật.
2. Nếu handoff mới là bản tích lũy, đổi import ở `src/content/handoff.ts` sang bản mới. Không tự glob mọi markdown trong Update vì có thể trộn các phiên bản lặp nhau hoặc báo cáo này.
3. Cập nhật `fundamentalsLessons`: ID bài ổn định, số chương tương ứng và liên kết tới kiến thức tổng hợp. Không đổi ID cũ để khớp số chương mới.
4. Cập nhật `studyResources` nếu số chương phụ trợ thay đổi; cập nhật bảng cú pháp tại nguồn và biểu thức bổ sung khi cần.
5. Cập nhật nhãn phạm vi, trạng thái trong Fundamentals, Sidebar, Lesson và Reference. Chỉ đổi trạng thái chấm khi có căn cứ mới.
6. Cập nhật các kỳ vọng phạm vi trong `scripts/check-handoff.mjs`; chạy `npm run check:handoff`, `npm run build`, kiểm tra giao diện, liên kết và `git diff --check`.
