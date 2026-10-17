# HunterDA · Nguyễn Đức Anh — Cybersecurity Portfolio v0.0.1

Portfolio HTML/CSS/JavaScript cho Malware Analysis, Threat Hunting và Threat Intelligence. Có thêm mẫu README để giới thiệu trực tiếp trên trang hồ sơ GitHub.

## Chạy nhanh

Giải nén rồi mở `index.html` bằng trình duyệt. Không cần npm, framework, API key hoặc backend. Giao diện tiếng Anh phù hợp giới thiệu nghề nghiệp; hướng dẫn bằng tiếng Việt. Font hệ thống và hình minh họa CSS không cần dịch vụ bên ngoài.

## Cá nhân hóa

Sửa `config.js`:

- `name`, `title`, `bio`: tên, tiêu đề tab, mô tả.
- `email`: email công khai; để trống nếu chưa muốn hiển thị.
- `profiles[].url`: dán URL hồ sơ GitHub, LeetCode, OffSec, LinkedIn của bạn. URL trống hiển thị trạng thái chưa có, không tạo link giả.
- `projects`: thay dự án mẫu bằng dự án thực tế. Category nhận `malware`, `hunting`, `intelligence`. Điền `title`, `description`, `tags`, `status`, `url`, đổi `example` thành `false` khi nội dung đã là công việc thật.
- Chỉnh các phần chuyên môn và lộ trình trong `index.html` theo năng lực thực tế. Lộ trình hiện tại là định hướng, không phải lịch sử việc làm.
- Sửa logo trong `index.html`, `favicon.svg`, màu trong `style.css` nếu cần.

Ví dụ phần liên kết:

```js
{name: "GitHub", label: "Code & research", detail: "Repositories and write-ups.", url: "https://github.com/HunterDA"}
```

OffSec: dán đúng URL hồ sơ công khai hoặc trang xác thực chứng chỉ của bạn. Template không khẳng định bạn đã có OSCP hay chứng chỉ nào khác. Không dán URL phiên đăng nhập riêng.

## Đưa website lên GitHub Pages

1. Tạo repository, ví dụ `cyber-portfolio`.
2. Upload **các file bên trong thư mục** vào gốc repository. `index.html` phải nằm ngay ở gốc, cùng `style.css`, `config.js`, `app.js` và `favicon.svg`.
3. Vào Settings → Pages, chọn Deploy from a branch, branch `main`, thư mục `/(root)`, Save.
4. Chờ GitHub hoàn tất triển khai, mở URL do Pages hiển thị. Với repository trên, thường là `https://HunterDA.github.io/cyber-portfolio/`.

Không đổi tên thành `index(1).html`. Nếu chỉ hiện README, kiểm tra vị trí `index.html` và branch/folder được chọn. Mã dùng đường dẫn tương đối nên hỗ trợ cả website ở thư mục con.

Tài liệu GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Hiển thị trực tiếp trên hồ sơ GitHub

`PROFILE-README.md` là mẫu riêng. Thay mọi `YOUR_...`, bỏ các hàng chưa có link, rồi dùng nội dung đó làm `README.md` ở repository công khai trùng tên tài khoản GitHub của bạn. Không ghi đè README hướng dẫn của website nếu bạn vẫn cần giữ nó.

## Cấu trúc

| File | Chức năng |
| --- | --- |
| index.html | Cấu trúc trang |
| style.css | Giao diện responsive, desktop/mobile |
| config.js | Thông tin và URL cá nhân |
| app.js | Bộ lọc dự án, tạo liên kết từ cấu hình |
| favicon.svg | Biểu tượng tab |
| PROFILE-README.md | Mẫu hồ sơ GitHub |
| .nojekyll | Phục vụ website tĩnh |

## Phạm vi và kiểm tra

Đã kiểm tra cú pháp JavaScript, tham chiếu tài nguyên nội bộ và cấu trúc archive. Chưa kiểm thử trực quan trong trình duyệt ở môi trường tạo file. Chưa triển khai vào tài khoản GitHub của bạn. Trước khi công khai, thay dữ liệu mẫu và thử các link trên điện thoại/máy tính.

Bộ lọc chạy trong trình duyệt. Không có form gửi email, backend hoặc số liệu tự đồng bộ từ các nền tảng. Nội dung được thêm bằng textContent; liên kết ngoài được giới hạn http/https. Mọi nội dung config đều công khai khi host website.

## Thông tin đã điền

- Họ tên: Nguyễn Đức Anh.
- Username: HunterDA-prog.
- GitHub: https://github.com/HunterDA-prog (điền theo username cung cấp; chưa xác minh tài khoản).
- LeetCode, OffSec, LinkedIn và email chưa được cung cấp, nên vẫn để trống.
