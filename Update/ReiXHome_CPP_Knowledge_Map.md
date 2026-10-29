# ReiXHome — Tổng hợp kiến thức để tự viết bằng C++

Đối chiếu mã nguồn ngày **28/10/2026**, commit **7ba23b4**. Dự án khai báo Unreal Engine **5.5** trong `ReiXHome.uproject`.

Mục tiêu: hiểu mỗi tính năng được ghép từ những kiến thức nào, rồi tự viết phiên bản nhỏ trước khi quay lại đọc phần hoàn chỉnh. Đây là bản tổng hợp từ source hiện tại, không phải kết luận dự án đã hoàn tất hoặc mọi tính năng đã được kiểm thử trên thiết bị.

## 1. Nhìn tính năng để nhận ra kiến thức

| Tính năng trong ReiXHome | Kiến thức đứng phía sau | Kết quả bạn cần tự làm được |
|---|---|---|
| Danh mục nội thất, lọc theo loại | `struct`, `enum class`, mảng, vòng lặp, điều kiện | Tạo danh sách đồ và lọc đúng loại |
| Đặt, di chuyển, xóa một món đồ | Class, đóng gói, ID, container, kiểm tra đầu vào | Quản lý nhiều instance của cùng một loại đồ |
| Settings và cập nhật người chơi | Getter/setter, giới hạn giá trị, delegate | Đổi dữ liệu một chỗ và thông báo nơi sử dụng |
| Chuyển màn hình, nút Back | Trạng thái, `switch`, stack, vòng đời widget | Điều hướng qua nhiều màn hình rồi quay lại đúng |
| Snap nội thất vào lưới | Tọa độ, `floor`, transform, set ô đã chiếm | Đặt đồ đúng ô và phát hiện ô bị chiếm |
| Giữ nút, chọn, di chuyển, xoay | Input callback, thời gian, vector, raycast, lượng giác | Xử lý một tương tác qua nhiều frame |
| Vào/ra Realmap | Callback, timer, loading bất đồng bộ, timeout, rollback | Chuyển trạng thái thành công hoặc phục hồi khi lỗi |
| Thumbnail, vật liệu, nhiều instance | Cache, render target, mesh/material, batching | Tái sử dụng dữ liệu và kết quả tính toán |
| MR và công cụ voxel hóa | Tích hợp SDK, hình học, collision proxy, dữ liệu tạo trước | Hiểu phần nào tự viết và phần nào gọi thư viện |

Có ba lớp kiến thức: **ngôn ngữ C++ → framework Unreal → bài toán của ứng dụng**. Học theo thứ tự này sẽ dễ hiểu source hơn.

## 2. C++ nền tảng thực sự xuất hiện trong dự án

### 01 — Biến, biểu thức, điều kiện và kiểm tra biên

- Học: kiểu số nguyên/số thực, `bool`, phép so sánh, `&&`, `if`, `return` sớm.
- Trong dự án: [IsInsideBounds](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeMVP/RoomGridComponent.cpp:47>) kiểm tra từng tọa độ nằm trong giới hạn; [SetMasterVolume](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiUserSettingsSubsystem.cpp:37>) giới hạn âm lượng về `[0, 1]`.
- Ý nghĩa: dữ liệu người gọi đưa vào chưa chắc hợp lệ. Hàm phải bảo vệ điều kiện của hệ thống trước khi cập nhật.
- Tự viết: kiểm tra ô trong phòng kích thước `width × height`; thử `-1`, `0`, `size - 1`, `size`. Viết setter âm lượng nhận cả số âm và số lớn hơn 1.

### 02 — Hàm, tham số, giá trị trả về và `const`

- Học: chia việc thành hàm nhỏ; truyền bằng giá trị, tham chiếu `&`, tham chiếu chỉ đọc `const T&`; hàm thành viên `const`.
- Trong dự án: [API RoomGridComponent](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeMVP/RoomGridComponent.h:41>) nhận tọa độ/transform đầu vào, trả trạng thái `bool`, và có các tham số đầu ra `Out...`.
- Phải phân biệt: `const FTransform& In...` để đọc đầu vào; `FTransform& Out...` để ghi kết quả; `...() const` giới hạn việc sửa trạng thái của chính đối tượng.
- Tự viết: `TryFindFurniture` tìm theo ID, trả thành công/thất bại và đưa kết quả ra tham số. Quy định rõ kết quả đầu ra khi không tìm thấy.

### 03 — `struct`, `enum class` và mô hình dữ liệu

- Học: gom dữ liệu liên quan; biểu diễn lựa chọn bằng enum; đặt giá trị mặc định có ý nghĩa.
- Trong dự án: [FReiFurnitureEntry](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeUI/ReiUITypes.h:163>) mô tả loại nội thất; [FReiFurniturePlacement](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeUI/ReiUITypes.h:388>) mô tả một món đã được đặt.
- Điểm cốt lõi: **loại ghế** khác **chiếc ghế cụ thể trong phòng**. Hai chiếc dùng cùng catalog entry vẫn phải có ID và vị trí riêng.
- Tự viết: `FurnitureDefinition` và `PlacedFurniture`; tạo hai chiếc ghế cùng loại, di chuyển một chiếc mà chiếc còn lại không đổi.

### 04 — Class, đóng gói và điều kiện bất biến

- Học: `public/private`, constructor, getter/setter, trách nhiệm của class. Điều kiện bất biến là điều dữ liệu phải luôn thỏa sau mỗi thao tác hợp lệ.
- Trong dự án: [UReiUserSettingsSubsystem](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeRuntime/ReiUserSettingsSubsystem.h:19>) giữ settings ở `private`, cho đọc/ghi thông qua hàm.
- Setter vừa chuẩn hóa đầu vào, vừa tránh phát thông báo khi giá trị thực tế không đổi. Metadata của Editor như `ClampMin` không thay thế kiểm tra trong logic runtime.
- Tự viết: class `Settings` luôn giữ volume trong `[0, 1]`; bên ngoài không được sửa trực tiếp biến thành viên.

### 05 — Container, vòng lặp, tìm kiếm và ID

- Học: danh sách, bảng ánh xạ, tập hợp; thêm/xóa/tìm/lọc; range-based `for`; phân biệt vị trí trong mảng với danh tính của đối tượng.
- Trong dự án: [lọc catalog](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeUI/ReiUITypes.h:496>) dùng vòng lặp; [placement và representation](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeRuntime/ReiPlacementSubsystem.h:152>) dùng `TArray` và `TMap`; [occupancy](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeMVP/RoomGridComponent.h:83>) dùng `TSet`.
- Có thể tập bằng `std::vector`, `std::unordered_map`, `std::unordered_set`, sau đó học API của `TArray`, `TMap`, `TSet`. Chúng có vai trò tương ứng nhưng không phải cùng kiểu hay cùng API.
- Placement được tìm bằng predicate tuyến tính trong [IndexOfPlacement](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiPlacementSubsystem.cpp:127>); không phải cứ có ID là tìm trong thời gian hằng số.
- Tự viết: lọc đồ theo loại; đặt ba món rồi xóa món đầu. ID hai món còn lại phải giữ nguyên dù vị trí trong mảng thay đổi.

### 06 — Con trỏ, tham chiếu, bản sao và thời gian sống

- Học: `nullptr`, `*`, `->`, đối tượng được tham chiếu có còn tồn tại không; khác biệt giữa sửa bản gốc và sửa bản sao.
- Trong dự án: [FindPlacement và GetPlacementCopy](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiPlacementSubsystem.cpp:349>) cho hai cách lấy dữ liệu. Pointer trỏ vào phần tử mảng có thể mất hiệu lực sau thao tác thay đổi mảng.
- [FReiInstanceRepresentation](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeRuntime/ReiPlacementSubsystem.h:26>) dùng weak pointer để theo dõi đối tượng hiển thị.
- Tự viết: tìm món đồ rồi lấy bản sao để xem thông tin; giải thích vì sao không giữ địa chỉ phần tử qua những lần thêm/xóa làm thay đổi vùng lưu trữ.
- Khi sang Unreal, phải học thêm GC và các loại pointer ở mục 10; không áp dụng máy móc cách `new/delete` đối tượng C++ thường cho `UObject`.

### 07 — Lambda, callback và template ở mức sử dụng

- Học: lambda là hàm nhỏ có thể giữ biến từ phạm vi bên ngoài; capture bằng giá trị và bằng tham chiếu có thời gian sống khác nhau. Callback là hàm được bên khác gọi khi có sự kiện.
- Trong dự án: [Snap90](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeMVP/RoomGridComponent.cpp:191>) là lambda nhỏ chạy ngay; [callback fade](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiRealmapSubsystem.cpp:224>) giữ weak pointer để kiểm tra đối tượng trước khi dùng về sau.
- `TArray<FReiFurniturePlacement>`, `TWeakObjectPtr<AActor>` là ví dụ sử dụng template. Chưa cần học template metaprogramming để hiểu các luồng chính.
- Tự viết: tìm phần tử với predicate; sau đó tạo callback báo hoàn tất. Giải thích biến nào phải còn sống khi callback được gọi. Callback không mặc nhiên luôn chạy trễ hoặc trên thread khác.

## 3. Kiến thức Unreal cần nối vào nền tảng C++

### 08 — Kế thừa, `override`, Actor và Component

- C++ cung cấp kế thừa và hàm ảo; Unreal cung cấp các lớp nền và thời điểm gọi hook.
- [AReiPlayer](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/ReiPlayer.h:68>) kế thừa `APawn`, override `BeginPlay`, `EndPlay`, `Tick`, `SetupPlayerInputComponent`.
- [Constructor của player](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/ReiPlayer.cpp:445>) ghép capsule, camera, motion controller và các component khác. Đây là **composition**: một đối tượng có nhiều bộ phận đảm nhiệm việc riêng.
- Tự viết: Actor có một mesh component; khởi tạo cấu trúc, xử lý bắt đầu và kết thúc. Sau đó thêm hành vi di chuyển theo thời gian. Chưa cần sao chép toàn bộ `ReiPlayer`.

### 09 — Reflection, Blueprint và UI

- Học: `UCLASS`, `USTRUCT`, `UENUM`, `UPROPERTY`, `UFUNCTION`, `GENERATED_BODY`, file `.generated.h`. Đây là cơ chế của Unreal, không phải từ khóa C++ chuẩn.
- [ReiMainMenuWidget](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeUI/ReiMainMenuWidget.h:10>) cho ví dụ nhỏ: kế thừa `UUserWidget`, binding nút UMG, handler có `UFUNCTION`.
- [NativeConstruct và xử lý click](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiMainMenuWidget.cpp:10>) nối widget với logic điều hướng.
- Tự viết: một widget có nút mở màn hình Rooms. Cần ghép đúng tên widget trong Blueprint và kiểm tra binding. C++ xử lý logic vẫn có thể cần asset/Blueprint cho phần trình bày.

### 10 — Ownership và vòng đời trong Unreal

| Kiểu/cơ chế | Cần hiểu |
|---|---|
| `UPROPERTY()` + `TObjectPtr<T>` | Tham chiếu UObject được GC theo dõi; cần nằm trong chuỗi tham chiếu còn sống. Không có nghĩa đối tượng không thể bị `Destroy` |
| `TWeakObjectPtr<T>` | Không giữ đối tượng sống; phải kiểm tra hợp lệ trước khi sử dụng |
| `TSoftObjectPtr<T>` | Tham chiếu asset qua đường dẫn; asset chưa chắc đã được nạp |
| `UWorldSubsystem` | Hệ thống có vòng đời gắn với world |
| `UGameInstanceSubsystem` | Hệ thống có vòng đời gắn với game instance; tự nó không ghi dữ liệu ra đĩa |

Ví dụ: [PlacementSubsystem](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeRuntime/ReiPlacementSubsystem.h:45>) là `UWorldSubsystem`, còn [UserSettingsSubsystem](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeRuntime/ReiUserSettingsSubsystem.h:19>) là `UGameInstanceSubsystem`.

Đặc biệt, [UReiRealmapSubsystem](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Public/ReiXHomeUI/ReiRealmapSubsystem.h:35>) thực tế kế thừa `UObject` và được manager tạo thủ công. Phải đọc lớp cha, không đoán vòng đời từ hậu tố “Subsystem”. Các khái niệm GC và subsystem được đối chiếu với [Epic: Object Pointers](https://dev.epicgames.com/documentation/unreal-engine/object-pointers-in-unreal-engine) và [Programming Subsystems](https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-subsystems-in-unreal-engine).

Tự viết: lập bảng cho từng đối tượng: ai tạo, ai giữ tham chiếu, sống đến khi nào, cần tháo timer/delegate ở đâu.

### 11 — Delegate, sự kiện và tách dữ liệu khỏi giao diện

- Học: đăng ký nhận sự kiện, phát thông báo, gỡ đăng ký; khác nhau giữa gọi trực tiếp một hàm và thông báo cho các bên quan tâm.
- [SetMasterVolume](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiUserSettingsSubsystem.cpp:37>) cập nhật dữ liệu rồi `Broadcast`. [Player đăng ký và dọn đăng ký](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/ReiPlayer.cpp:1907>) cho thấy hai đầu của vòng đời listener.
- [UpdatePlacementTransform](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiPlacementSubsystem.cpp:199>) cập nhật placement rồi thông báo `OnPlacementMutated`.
- Tư duy cần học: UI gửi yêu cầu; nơi quản lý dữ liệu cập nhật; phần hiển thị phản ứng. Tránh mỗi widget giữ một bản dữ liệu có thể bị lệch nhau.
- Tự viết: manager thêm/di chuyển/xóa đồ theo ID; một listener in thông báo. Thao tác thất bại không phát sự kiện thành công.

### 12 — Tách trách nhiệm, dependency và điều hướng

- [UIManager khởi tạo các service](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiVRUIManager.cpp:231>) rồi truyền dependency qua `Initialize`. Ví dụ Realmap nhận dịch vụ spawn và fade.
- [UReiUINavigator](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiUINavigator.cpp:45>) dùng trạng thái hiện tại và stack để xử lý Navigate/Back.
- Tự viết: tách `Catalog`, `PlacementManager`, `Navigator` thành ba lớp nhỏ. Mô phỏng Main → Rooms → Settings → Back; kết quả phải về Rooms.
- Những manager lớn trong dự án là nguồn để đọc từng luồng cụ thể. Không cần lấy toàn bộ kích thước và độ phức tạp của chúng làm mẫu cho bài class đầu tiên.

## 4. Kiến thức bài toán và kỹ thuật nâng cao

### 13 — Grid, local/world transform và snap

- [WorldToGrid, WorldToCell, GetCellCenterWorld](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeMVP/RoomGridComponent.cpp:24>) minh họa chuỗi: world → local → chia kích thước ô → lấy `floor` → xác định ô.
- Học thêm: vị trí, góc quay, tỉ lệ; pivot khác tâm hình học; quay trong local space khác world space.
- Tự viết với grid 2D kích thước ô 10: tìm ô của `9.9`, `10`, `-0.1`, rồi tìm tâm ô. Với số âm, `floor` khác ép kiểu cắt phần thập phân.
- Tiếp theo: đánh dấu ô đã chiếm, giải phóng ô khi xóa đồ; xoay footprint 90°. Sau khi vững mới đọc quaternion và bit packing.

### 14 — Input, thời gian và trạng thái qua nhiều frame

- [SetupPlayerInputComponent](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/ReiPlayer.cpp:2203>) đang dùng `BindAxis` và `BindAction` của hệ input cũ. Đây là mô tả source hiện tại, không phải bài Enhanced Input.
- [TickMRDeleteHold](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/ReiPlayer.cpp:3569>) kết hợp thời gian đã giữ, target đang chọn và cờ đã thực hiện để tránh xóa lặp.
- [NudgeSelectedPlanar](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiMRPlacementManager.cpp:3645>) dùng hướng vector và `speed × DeltaSeconds`.
- Tự viết: giữ nút 2 giây mới xác nhận; nhả sớm hoặc đổi target phải hủy; giữ lâu hơn chỉ phát một lần. Mô phỏng chuyển động trong 1 giây bằng 30/60/120 bước và so sánh vị trí cuối với sai số nhỏ.

### 15 — Raycast, vector, phép quay và collision

- [RayFloorIntersection](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiMRPlacementManager.cpp:3778>): giao tia với mặt phẳng, kiểm tra gần song song và nghiệm không hợp lệ.
- [ComputeRotateDragAngle](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiMRPlacementManager.cpp:3175>): chiếu vector, dot product, `atan2`; bước sau áp dụng snap góc và quaternion.
- [IntersectsOBB](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiMRPlacementManager.cpp:383>): kiểm tra hộp có hướng bằng các trục phân tách. Đây là bài nâng cao sau collision hình chữ nhật song song trục.
- Tự viết theo nấc: điểm trong hình chữ nhật → hai hình có chồng nhau không → tia chạm sàn → xoay điểm quanh tâm → hộp có góc quay.
- Nhớ kiểm tra vector bằng 0, mẫu số gần 0 và đơn vị độ/radian. Không cần tự viết một thư viện toán 3D đầy đủ để sử dụng Unreal.

### 16 — Loading bất đồng bộ, timer, timeout và phục hồi

- [Realmap yêu cầu load và đăng ký sự kiện](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiRealmapSubsystem.cpp:135>) tách việc bắt đầu tác vụ khỏi việc nhận kết quả. “Yêu cầu load”, “đã load” và “đã hiện” là các mốc khác nhau.
- [AbortEnter](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiRealmapSubsystem.cpp:455>) minh họa nhánh lỗi: hủy timer, tháo callback, dọn trạng thái tạm và thông báo thất bại.
- Timer/callback không đồng nghĩa code đang tự tạo thread. Tác vụ async cũng không có nghĩa mọi hàm nạp asset trong dự án đều async.
- Tự viết mô phỏng: Idle → Loading → Ready hoặc Failed. Bấm bắt đầu hai lần không tạo hai tác vụ; timeout cho phép thử lại; kết quả của tác vụ cũ không được làm sai phiên mới.
- Bước nâng cao: đọc [fade hoàn tất callback](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiXRScreenFadeService.cpp:168>) để học `MoveTemp` và trường hợp callback gọi ngược trở lại hệ thống khi một thao tác đang hoàn tất.

### 17 — Cache, dữ liệu tạo trước và hiệu năng

- [GetOrCreateMeshThumbnail](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiRuntimeThumbnailSubsystem.cpp:139>) tìm trong cache trước khi tạo kết quả; khóa phụ thuộc mesh và material.
- [BuildGreedyVoxelBoxes](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeSnap/Tools/AutoMeshVoxelizer.cpp:205>) và [ExportToFootprintAsset](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeSnap/Tools/AutoMeshVoxelizer.cpp:998>) cho ví dụ xử lý dữ liệu hình học và chuẩn bị asset để dùng lại.
- Học: chọn cấu trúc dữ liệu, giảm tính lặp, `Reserve`, khóa cache, invalidation, đánh đổi bộ nhớ/tính toán. Greedy là chiến lược gộp theo lựa chọn từng bước, không mặc nhiên cho kết quả tối ưu toàn cục.
- Tự viết: cache kết quả theo hai thuộc tính, đếm số lần tính; cùng khóa chỉ tính lại khi cần. Bài tiếp theo: gộp ô 2D thành hình chữ nhật mà không thêm hoặc mất ô.
- Lưu ý source hiện tại: [ResolveFurnitureThumbnail](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeUI/ReiRuntimeThumbnailSubsystem.cpp:59>) yêu cầu thumbnail được gán, không tự fallback sang render mesh; không suy ra hành vi chỉ từ comment tổng quát trong header.

### 18 — Tích hợp SDK, render và tổ chức build

- [LoadQuestSceneFromDevice](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/Private/ReiXHomeRuntime/ReiMRPlacementManager.cpp:1289>) là nơi học cách gọi dịch vụ bên ngoài, kiểm tra trạng thái và xử lý kết quả. MRUK hỗ trợ nạp scene và truy vấn anchor/raycast; đã đối chiếu [tài liệu Meta MRUK](https://developers.meta.com/horizon/documentation/unreal/unreal-mr-utility-kit-features) ngày 28/10/2026. Tên API khi thực hành phải khớp plugin cài trong dự án.
- [BuildProgressRingMesh](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/ReiPlayer.cpp:3371>) nối mảng dữ liệu với hình học: đỉnh, tam giác, pháp tuyến, màu và lượng giác.
- Stereo layer, render target, material và HISM là kiến thức rendering của Unreal/XR. Học sau khi đã làm được Actor, UI và tương tác cơ bản.
- [ReiXHome.Build.cs](<F:/Unreal Engine project/ReiXHome/Source/ReiXHome/ReiXHome.Build.cs:1>) mô tả dependency module và phần chỉ dành cho Editor; file này viết bằng **C#**, không phải C++. Trong C++ cần hiểu `.h/.cpp`, `#include`, forward declaration, macro và `#if WITH_EDITOR`.
- Tự viết: dùng nguồn dữ liệu giả lập trước; tách lớp lấy dữ liệu khỏi lớp xử lý; sau đó mới thay nguồn giả lập bằng SDK. Với lỗi build, phân biệt lỗi cú pháp, thiếu khai báo, lỗi linker và thiếu module dependency.

## 5. Thứ tự tự học và sản phẩm để chứng minh đã hiểu

Không cần đọc hết source rồi mới bắt đầu viết. Mỗi chặng chỉ cần một chương trình nhỏ có tiêu chí rõ ràng.

| Chặng | Sản phẩm tự viết | Tiêu chí hoàn thành |
|---|---|---|
| 1. Hàm và dữ liệu | Catalog nội thất chạy console | Thêm dữ liệu, lọc theo loại, xử lý danh sách rỗng và ID không tồn tại |
| 2. Class và container | Quản lý đồ đã đặt | Hai đồ cùng loại có ID riêng; thêm/di chuyển/xóa đúng; từ chối ID trùng |
| 3. Thuật toán nhỏ | Grid 2D có occupancy | Đúng ở biên/ngoài biên; phát hiện ô trùng; xóa đồ giải phóng đúng ô |
| 4. Trạng thái và callback | Navigator + loading giả lập | Back đúng; không bắt đầu trùng; timeout phục hồi; callback cũ không phá trạng thái mới |
| 5. Unreal cơ bản | Actor có component và một widget | Hiểu ai tạo đối tượng; nút gọi đúng logic; đóng màn hình dọn đăng ký/timer |
| 6. Dữ liệu và hiển thị | Đặt vài món đồ trong một level | Dữ liệu quản lý theo ID; actor và UI phản ánh đúng lần cập nhật |
| 7. Tương tác 3D | Chọn, di chuyển, xoay, giữ nút xác nhận | Xử lý no-hit, hủy thao tác, đổi target; chuyển động nhất quán theo thời gian |
| 8. Tích hợp nâng cao | Một luồng loading hoặc MR hoàn chỉnh | Có thành công, thất bại, timeout, dọn dẹp; kiểm tra hành vi ở môi trường chạy thực tế |

Chặng 1–4 có thể làm bằng **C++ console/C++17**. Chặng 5 trở đi chuyển sang Unreal. Mỗi buổi học theo vòng: **lý thuyết ngắn → bài tự code → đọc/build/test bài nộp → chỉ ra lỗi → tự sửa**. Tài liệu này không kèm lời giải hoàn chỉnh và không tự xác nhận bạn đã hoàn thành chặng nào.

## 6. Cách đọc một tính năng mà không bị ngợp

Chọn một thao tác nhỏ, chẳng hạn đổi volume hoặc chuyển màn hình. Trả lời lần lượt:

1. Sự kiện bắt đầu từ đâu: button, input, timer hay callback?
2. Hàm nào nhận sự kiện? Đầu vào và điều kiện từ chối là gì?
3. Dữ liệu nào thay đổi, nằm trong class nào?
4. Ai được thông báo để cập nhật hiển thị/hành vi?
5. Nếu target biến mất hoặc tác vụ thất bại thì chuyện gì xảy ra?
6. Đăng ký, timer và tài nguyên được dọn ở đâu?
7. Có thể mô phỏng phần logic này trong một chương trình nhỏ thế nào?

Điểm bắt đầu dễ đọc: **UserSettingsSubsystem → các hàm lọc trong ReiUITypes → các hàm đầu RoomGridComponent → ReiMainMenuWidget → ReiUINavigator**. Sau đó mới đi vào PlacementSubsystem, Realmap và từng hàm tương tác trong ReiPlayer/MRPlacementManager.

## 7. Những ranh giới cần hiểu đúng

- **Dữ liệu trong RAM khác dữ liệu lưu qua lần mở ứng dụng.** Trong `Source/ReiXHome` đã kiểm tra, chưa thấy `USaveGame`, `SaveGameToSlot`, `LoadGameFromSlot`. Settings chỉ được giữ trong game instance; tên “SavedPreset” và comment “save/load” không chứng minh có lưu phiên người dùng ra đĩa. Nếu học persistence, cần thêm bài lưu/đọc riêng và kiểm tra đóng/mở chương trình.
- **C++ không bao trùm toàn bộ asset và cấu hình.** Widget Blueprint, mesh, material, map, plugin và config vẫn là các phần cần hiểu để tái tạo ứng dụng. Phần tổng hợp này dựa trên source và tài liệu, không kiểm tra đầy đủ graph trong mọi asset Blueprint.
- **Đọc được khác tự viết được.** Sau khi đọc ví dụ, đóng source rồi tự mô tả dữ liệu, API và trường hợp lỗi; tự viết bản nhỏ từ yêu cầu.
- **Có code tối ưu khác đã đo hiệu năng.** Cache, batching hoặc collision proxy là kỹ thuật; kết luận nhanh hơn bao nhiêu cần số đo. Đọc source không thay thế chạy kiểm thử.
- **Không học tất cả độ phức tạp cùng lúc.** Quaternion, OBB/SAT, voxel hóa, compositor và chi tiết SDK để sau; các bài catalog, settings, grid và navigation đã đủ để luyện phần lớn nền tảng cần thiết.

Tài liệu dự án để đọc sâu hơn: [Handoff](<F:/Unreal Engine project/ReiXHome/Docs/ReiXHome_Handoff.md>), [chỉ mục Pattern](<F:/Unreal Engine project/ReiXHome/Docs/Pattern/Pattern_Index.md>), [UIv2](<F:/Unreal Engine project/ReiXHome/Docs/UIv2/README.md>). Bản này chỉ bổ sung bản đồ kiến thức; không thay thế tài liệu kỹ thuật hoặc giáo trình C++ đang học.
