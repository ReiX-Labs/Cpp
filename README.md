# 🥋 C++ Dojo

Web học &amp; luyện tập **C++ cho lập trình game** — học có hệ thống, luyện tập ngay trong từng mục, và **ôn tập hằng ngày** kiểu spaced-repetition (giống Anki) để kiến thức không rơi rụng.

🔗 **Bản demo:** https://reix-labs.github.io/Cpp/
---

## ✨ Tính năng

- **Bài học C++** trình bày mạch lạc, chia theo từng phần, có tô màu code &amp; nút sao chép; phụ lục tách sang khu **Tra cứu**.
- **Luyện tập đa dạng:** trắc nghiệm, "đoán output", và thử thách viết code — mở thẳng trong Compiler Explorer để chạy thử.
- **Ôn tập hằng ngày** theo thuật toán spaced-repetition (SM-2): nhắc lại đúng lúc bạn sắp quên, nhớ lâu hơn.
- **Bài tập thực hành** — đánh dấu hoàn thành và lưu link PR/commit của bạn (ngay trên máy).
- **Tạo động lực:** cấp độ + XP, huy hiệu (achievements), lịch hoạt động kiểu GitHub, chuỗi ngày 🔥, mục tiêu ngày, thanh tiến độ từng phần.
- **Tìm kiếm nhanh**, cheat sheet &amp; glossary.
- **Giao diện sáng/tối**, tối ưu cho desktop.
- Tiến độ lưu ngay trên trình duyệt — không cần đăng nhập, không cần server.

## Giáo trình đã tích hợp

- **Học C++ · 01–17.2** lấy lý thuyết, ví dụ, yêu cầu thực hành và tài nguyên ôn từ một nguồn: `Update/CPP_GIAO_TRINH_CHUAN.md`. Thứ tự đi từ cú pháp → hàm và dữ liệu → ownership/OOP → các tính năng C++17 → debugging và bài tổng kết.
- **Câu lệnh → Ý nghĩa → Bài giải thích** hỗ trợ tìm có/không dấu, tìm toán tử, lọc nhóm và mở đúng bài học. Tìm kiếm trên thanh đầu trang bao gồm toàn bộ giáo trình.
- Giữ Pointer-Based Healing, Arena ba file, 23 câu tự kiểm tra có mở đáp án, lịch ôn và lịch sử thực hành có nguồn. Bản Arena Combat đã được chỉnh sửa sau bài nộp có [ZIP tải về](public/downloads/ArenaCombat_Final_Reviewed.zip), tách rõ với bài tự nộp được chấm 9.5/10.
- Thư viện cũ giữ nguyên ID và đường dẫn `/lesson/:id`; `/fundamentals?topic=...` vẫn mở đúng bài tương ứng. Khóa học mới dùng `/course/:id` với anchor ổn định.
- Giữ khóa lưu trữ `cpp-dojo-state-v1`, XP, streak, SRS, kết quả và link bài nộp cũ. Tiến độ lộ trình mới dùng tiền tố `course:` và chỉ ghi nhận khi người học chủ động đánh dấu; nhập tài liệu không tự hoàn thành bài.
- Ôn tập mặc định theo bài đã đánh dấu trong khóa; có thể chọn toàn khóa hoặc thư viện mở rộng. Các bài tập thư viện cũ vẫn có phạm vi riêng.

## Tài liệu để cập nhật tiếp

- [CPP_GIAO_TRINH_CHUAN.md](Update/CPP_GIAO_TRINH_CHUAN.md): bản biên tập chính mà khóa học và bảng tra cứu trên web đang đọc. Hợp nhất tài liệu mới vào file này; không tạo giáo trình song song.
- [Completion Pack](Update/README.md): handbook, handoff chuyển sang Unreal và mã nguồn bài tổng kết do người học cung cấp; giữ nguyên để đối chiếu nguồn. Phần Unreal là hướng học tiếp, chưa phải khóa mới đã triển khai.
- [CPP_Fundamentals_Review_01-09_AI_Handoff.md](Update/CPP_Fundamentals_Review_01-09_AI_Handoff.md): vẫn được adapter của **thư viện cũ** sử dụng để giữ phần lý thuyết đã tích hợp; không phải nguồn của khóa học chính nữa.
- [Update_2026-10-26.zip](Archive/Update_2026-10-26.zip): lưu nguyên bản 5 tài liệu nguồn/báo cáo cũ đã dọn khỏi `Update`, gồm `CONTENT_AUDIT.md`, hai file `CPlusPlus_*`, báo cáo rà soát 23/10 và kế hoạch 24/10. Nội dung lưu trữ đã được kiểm tra SHA-256 với bản gốc.

## 🛠 Công nghệ

React + TypeScript + Vite.

## 🚀 Chạy thử tại máy

```bash
npm install
npm run dev       # mở http://localhost:5173
npm run check     # nội dung, liên kết, parser, phạm vi ôn và ID tương thích
npm run build     # build production vào dist/
npm run preview   # xem bản production tại /Cpp/
```

Chạy `npm run check:cpp` trong **Developer PowerShell/Command Prompt của VS2022** để biên dịch C++17 và đối chiếu kết quả ví dụ, bài tổng kết, các ca biên và câu đoán output. Trên Linux, lệnh dùng `g++`; có thể chọn compiler bằng biến môi trường `CXX`. File build thử nằm trong thư mục tạm, không sửa bài nộp.

GitHub Actions chạy kiểm tra nội dung, C++ và build trước khi deploy GitHub Pages từ `main`. Khi thêm bài: giữ anchor cũ, bổ sung manifest trong `src/content/curriculum.ts`, kiểm tra các liên kết và cập nhật giới hạn phạm vi trong `scripts/check-curriculum.mjs` khi cần.

> CI dùng Node 20. Dự án hiện yêu cầu Node 18+.

---

<p align="center"><sub>Sản phẩm của <strong>ReiX&nbsp;Labs</strong> · © 2026 ReiX Labs</sub></p>
