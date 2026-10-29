# C++ Dojo

Website học C++ cho lập trình game và Unreal Engine: lý thuyết, tự viết code, kiểm tra và ôn tập có lịch.

[Bản đang triển khai](https://reix-labs.github.io/Cpp/)

## Một chương trình học

Toàn bộ 56 chủ đề của website và nội dung Completion Pack được biên tập trong **[Update/CPP_GIAO_TRINH_CHUAN.md](Update/CPP_GIAO_TRINH_CHUAN.md)**. Đây là nguồn duy nhất mà các bài học, phụ lục và dữ liệu tra cứu trên web đọc khi build.

Sáu chặng: nền tảng/hàm/dữ liệu → vòng đời/tài nguyên/OOP → C++ hiện đại/STL → tổ chức code/debugging/kiểm thử → lập trình game → Unreal. Số hiển thị theo thứ tự học; ID nội bộ vẫn giữ để bảo toàn dữ liệu.

- Lý thuyết bổ sung đi vào đúng chủ đề; không còn hai chương trình cũ/mới.
- Bài học có mục tiêu, kiến thức cần biết, giải thích, ví dụ và yêu cầu tự luyện.
- Tra cứu đi theo chủ đề → đối tượng → thao tác; tìm được tên API, ký hiệu và ý định bằng tiếng Việt có/không dấu.
- Ví dụ hoàn chỉnh có nhãn để biên dịch C++17 độc lập. Snippet minh họa không được coi là chương trình độc lập.
- Ví dụ từ CubeCubev2 và ReiXHome được đặt ngay trong bài tương ứng, kèm bối cảnh source, luật đơn giản hóa và ca tự kiểm tra. Hai bản đồ kiến thức dự án trong `Update/` là nguồn đối chiếu, không được import thành chương trình riêng.
- Pointer-Based Healing, Arena nhiều file, Arena Combat tổng kết và Mini Arena Shooter có phạm vi thực hành riêng. [ZIP Arena Combat đã được chỉnh sửa sau bài nộp](public/downloads/ArenaCombat_Final_Reviewed.zip) giữ nguyên nguồn gốc; không đồng nhất với bài tự nộp.

## Tương thích dữ liệu học tập

Giữ khóa trình duyệt `cpp-dojo-state-v1`, XP, streak, lịch SRS, kết quả quiz, bài thực hành và link bài nộp. Dữ liệu không bị ghi lại khi chỉ mở trang.

Bài đã có lịch sử học nhưng được bổ sung kiến thức sẽ hiện **cần cập nhật**. Người học xác nhận sau khi học phần mới; xác nhận lại không nhận thêm XP. Lịch sử khóa có tiền tố `course:` vẫn được giữ nguyên và đối chiếu vào chương hợp nhất, không tự hoàn thành cả chương rộng hơn. Bài chưa có lịch sử nhận 15 XP khi chủ động đánh dấu; điểm quiz không tự đánh dấu đã đọc.

Revision được đối chiếu theo từng bài: bản cập nhật ví dụ dự án chỉ yêu cầu học lại phần mới ở các bài có thay đổi; bài đã hoàn thành ở revision 3 và không đổi vẫn được công nhận.

Đường dẫn `/lesson/:id` giữ nguyên. `/course/:id` và `/fundamentals?topic=...` chuyển tới chương/đoạn tương ứng. Một bộ thẻ ôn dùng lịch SRS cũ, với phạm vi bài đã học hoặc toàn chương trình.

## Cập nhật kiến thức tiếp theo

1. Đối chiếu nội dung mới với chủ đề trong bản chuẩn; xác định phần trùng, phần cần sửa và phần thiếu.
2. Biên tập trực tiếp vào bài tương ứng; giữ anchor ổn định và ví dụ có nhãn.
3. Bổ sung bảng tra cứu trong bản chuẩn; metadata tìm kiếm/thao tác nằm ở `src/content/syntaxCatalog.ts`.
4. Khi thêm chủ đề, cập nhật `src/content/lessonManifest.ts`. Khi mở rộng kiến thức của bài đã có, cập nhật quy tắc revision để không tự công nhận nội dung chưa học.
5. Chạy các kiểm tra và xem thử trên trình duyệt trước khi triển khai.

`Cpp_Knowledge_Handbook.md`, `Cpp_To_Unreal_Handoff.md`, handoff 01–09 và `Cpp_Game_Dev_Reference.md` là nguồn đối chiếu lịch sử, không phải giáo trình song song trên web. Năm tài liệu nguồn/báo cáo cũ đã được lưu trong [Archive/Update_2026-10-26.zip](Archive/Update_2026-10-26.zip).

## Chạy và kiểm tra

React + TypeScript + Vite. CI dùng Node 20.

```bash
npm install
npm run dev
npm run check
npm run check:cpp
npm run build
npm run preview
```

- `check`: nội dung hợp nhất, liên kết, đường dẫn cũ, tra cứu, ID và tương thích tiến độ.
- `check:cpp`: ví dụ C++17, ca biên/EOF, mã nguồn Arena Combat và câu đoán output. Windows cần Developer PowerShell của Visual Studio 2022; Linux dùng g++. Có thể chọn compiler qua `CXX`.
- `build`: TypeScript và production bundle; `preview` phục vụ tại `/Cpp/`.
- `check:handoff` là kiểm tra nguồn đầu vào lịch sử, không thay kiểm tra giáo trình hiện tại.

GitHub Actions chạy kiểm tra và build trước khi deploy GitHub Pages từ `main`. Tiến độ học nằm trên trình duyệt của người học; việc deploy không chạm dữ liệu đó.
