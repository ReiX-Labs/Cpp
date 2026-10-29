# Kiến thức C++ rút ra từ CubeCubev2

Ngày đối chiếu mã nguồn: **28/10/2026**. Dự án khai báo Unreal Engine **5.5** trong `CubeCubev2.uproject`.

Mục tiêu: hiểu các kiến thức đã được vận dụng trong dự án, rồi tự viết lại từng hệ thống nhỏ bằng C++. Tài liệu này là bản đồ học tập có ví dụ thực tế, yêu cầu bài tập và tiêu chí tự kiểm tra; không phải bộ lời giải để sao chép.

Các mô tả dưới đây dựa trên việc đọc source hiện tại. Lượt tổng hợp này không chạy lại game, build hoặc kiểm thử trên kính. Những bài tập có quy tắc đơn giản hóa được ghi rõ để phân biệt với hành vi của dự án.

## 1. Nhìn toàn bộ kiến thức trước khi học

| Tầng | Cần học | Sau khi học, bạn tự làm được gì? |
| --- | --- | --- |
| 1. C++ nền tảng | Kiểu dữ liệu, điều kiện, vòng lặp, hàm, struct, class, reference, pointer, const, container | Tự viết dữ liệu màn chơi, tính sao, đếm ô, quản lý điểm |
| 2. Tư duy lập trình game | Trạng thái, bất biến, thuật toán tập hợp, tọa độ, giao diện chung, sự kiện, kiểm thử | Tự viết lõi puzzle chạy được trên console |
| 3. C++ trong Unreal | Reflection, UObject, Actor, Component, vòng đời, delegates, timer, asset | Đưa lõi puzzle vào thế giới 3D, nối UI và lưu tiến trình |
| 4. Tích hợp nâng cao | Input VR, tracking, raycast, physics, mesh voxel, HTTP/JSON, rendering | Hoàn thiện tương tác và các dịch vụ của một game như CubeCubev2 |

**Thứ tự nên học:** làm được tầng 1 và một phần tầng 2 bằng chương trình console trước; sau đó mới học cách Unreal tổ chức và chạy những quy tắc ấy.

`TArray`, `UCLASS`, `FVector`, `UPROPERTY` thuộc Unreal. `class`, `struct`, `const`, `virtual`, `override`, lambda thuộc C++. Biết phân biệt hai nhóm này giúp bạn hiểu code thay vì học thuộc tên API.

## 2. C++ nền tảng đang xuất hiện ở đâu?

### 2.1. Kiểu dữ liệu, biểu thức, điều kiện và giá trị biên

**Cần hiểu:** số nguyên/số thực, Boolean, phép so sánh, `&&`, `||`, `if`, `return`, khởi tạo biến, chuyển kiểu và thứ tự kiểm tra điều kiện.

**Trong dự án:** thời gian là số thực; số lần cầm và chỉ số level là số nguyên; trạng thái đang giữ vật hay đã hoàn thành là Boolean. `FPuzzleLevelData::CalculateStarRating()` kiểm tra lần lượt các mốc thời gian để trả số sao.

**Đọc:** [PuzzleTypes.h — CalculateStarRating](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Data/PuzzleTypes.h:127>).

**Cần tự giải thích:** vì sao kiểm tra mốc 3 sao trước mốc 1 sao? Tại thời điểm đúng bằng ngưỡng, kết quả là gì? Hàm hiện tại có tự từ chối thời gian âm hay không?

### 2.2. Hàm, tham số, giá trị trả về và hợp đồng dữ liệu

**Cần hiểu:** tách một công việc thành hàm; truyền theo giá trị, theo reference, theo `const` reference; output parameter; hàm thành viên `const`; early return.

**Trong dự án:** `GetCurrentLevelData() const` trả reference chỉ đọc; `SetCurrentLevelData(const FPuzzleLevelData&)` nhận dữ liệu để sao chép vào trạng thái. `WorldToGrid()` trả `bool` báo thành công và ghi ô lưới qua reference.

**Đọc:** [CubeGameState.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Game/CubeGameState.h>) và [GoalVolume.cpp — WorldToGrid](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/GoalVolume.cpp:321>).

**Cần tự giải thích:** reference tránh sao chép như thế nào? Đối tượng gốc phải còn sống trong bao lâu? Vì sao không sử dụng output khi hàm trả `false`? `const` không đồng nghĩa với dữ liệu bất biến vĩnh viễn.

### 2.3. Struct, enum class và mô hình hóa dữ liệu

**Cần hiểu:** gom những giá trị thuộc cùng một khái niệm; giá trị mặc định; enum có kiểu; struct có thể chứa cả dữ liệu và hàm.

**Trong dự án:** `FPuzzlePieceData` chứa các ô và màu; `FPuzzleLevelData` chứa goal, pieces và mốc sao; `FLevelScoreData` chứa kết quả; `ECubeGamePlayState` mô tả MainMenu, Loading, Playing, Paused, Complete, Failed.

**Đọc:** [PuzzleTypes.h — các kiểu dữ liệu](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Data/PuzzleTypes.h:11>).

**Cần tự giải thích:** tại sao một `Piece` nên chứa danh sách ô của chính nó, thay vì nhiều mảng rời phải giữ cùng chỉ số? Vì sao enum rõ nghĩa hơn các số trạng thái `0`, `1`, `2`?

### 2.4. Container, vòng lặp và lựa chọn cấu trúc dữ liệu

| Kiểu dùng trong dự án | Công việc thực tế | Khái niệm có thể luyện bằng C++ chuẩn |
| --- | --- | --- |
| `TArray<FPuzzlePieceData>` | Danh sách các mảnh ghép | `std::vector`, chỉ số, range-based for |
| `TSet<FIntVector>` | Tập ô hợp lệ hoặc đã bị chiếm | `std::set` hoặc `std::unordered_set`, membership |
| `TMap<FString, FLevelScoreData>` | Tra điểm theo khóa level | `std::map` hoặc `std::unordered_map`, key/value |
| Buffer có kích thước cố định | Lưu các mẫu vị trí gần đây để tính vận tốc | `std::array`, chỉ số vòng |

Các kiểu chuẩn trên là công cụ cho bài tập console, không phải lời khẳng định source đang dùng STL hoặc hai API thay thế trực tiếp cho nhau.

**Đọc:** [GoalVolume.h — tập ô](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Puzzle/GoalVolume.h:207>), [CubeSaveGame.h — điểm theo khóa](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Game/CubeSaveGame.h:9>), [PinchGrabComponent.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Player/PinchGrabComponent.h>).

**Cần tự giải thích:** tìm một ô bằng vòng lặp khác gì tra trong tập hợp? Xóa phần tử đầu mảng động có chi phí gì? Sau khi container thay đổi, reference/pointer đến phần tử cũ có còn hợp lệ không?

Ví dụ nâng cao vừa sức: buffer trong `FPinchGrabHandState` chứa 16 mẫu **vị trí và thời gian**, quay vòng chỉ số bằng `%`, rồi tính vận tốc từ tối đa năm mẫu gần nhất. Hãy tự viết bản một chiều: hai mẫu `(0, 0.0s)` và `(10, 0.1s)` cho 100 đơn vị/s; dưới hai mẫu hoặc khoảng thời gian bằng 0 phải được xử lý trước phép chia.

### 2.5. Class, đóng gói và phân chia trách nhiệm

**Cần hiểu:** `public`, `private`, constructor, dữ liệu thành viên, getter, phương thức thay đổi trạng thái; đối tượng quản lý quy tắc của chính nó.

**Trong dự án:** `ACubeGameState` giữ thời gian và trạng thái; `AGoalVolume` quản lý ô hợp lệ/đã chiếm; `UCubeGameInstance` cung cấp thao tác profile. UI gọi các chức năng ấy để hiển thị và gửi yêu cầu.

**Đọc:** [CubeGameState.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Game/CubeGameState.h>) và [CubeGameInstance.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Game/CubeGameInstance.h>).

**Cần tự giải thích:** nếu mọi nơi đều được sửa trực tiếp điểm, số ô và trạng thái thì quy tắc nào dễ bị phá? Một hàm kiểm tra điều kiện trước khi sửa dữ liệu giúp gì?

### 2.6. Kế thừa, đa hình và interface

**Cần hiểu:** lớp cha/con, `virtual`, `override`, abstract class và lời gọi thông qua lớp cha. Học cơ chế C++ trước các macro interface của Unreal.

**Trong dự án:** `UPuzzleLevelPack` đưa ra giao diện đọc level chung; `UNativeLevelPack`, `UCubeFileLevelPack`, `UWebLevelPack` cung cấp dữ liệu từ các nguồn khác nhau. `UVRHandBase` là lớp chung cho controller hand và tracked hand. `IGrabbable` mô tả các hành động một vật có thể được cầm cần hỗ trợ.

**Đọc:** [PuzzleLevelPack.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Data/PuzzleLevelPack.h:9>), [VRHandBase.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Player/VRHandBase.h:22>), [IGrabbable.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Puzzle/IGrabbable.h>).

**Cần tự giải thích:** làm thế nào cùng một đoạn code đọc được nhiều nguồn level? Kế thừa biểu diễn quan hệ “là một”, còn component thường biểu diễn “có một”.

### 2.7. Pointer, lifetime và quyền sở hữu

**Cần hiểu:** địa chỉ, `nullptr`, dereference, đối tượng còn sống/đã bị hủy, quyền sở hữu khác với việc chỉ giữ tham chiếu. Với C++ chuẩn, cần học RAII và smart pointer trước khi tự quản lý tài nguyên phức tạp.

**Trong dự án:** các vật đang được nhắm/cầm dùng `TWeakObjectPtr`; tài nguyên âm thanh có `UPROPERTY` và `TObjectPtr`; HTTP/JSON dùng `TSharedPtr` hoặc `TSharedRef`; mesh có `TSoftObjectPtr`; lớp Actor có thể cấu hình dùng `TSubclassOf`.

**Đọc:** [PinchGrabComponent.h — CandidatePiece và HeldPiece](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Player/PinchGrabComponent.h:35>), [PuzzleSubsystem.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Puzzle/PuzzleSubsystem.h>), [ContentSyncSubsystem.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Online/ContentSyncSubsystem.h:102>).

Đối với UObject, `TWeakObjectPtr` không giữ đối tượng sống. `TObjectPtr` cần được engine theo dõi đúng cách, thường qua `UPROPERTY`, để tham gia giữ tham chiếu cho GC. `TSoftObjectPtr` có thể trỏ đến asset chưa nạp. Không áp dụng mô hình `delete` hoặc `std::shared_ptr` cho UObject như với đối tượng C++ thông thường. Xem [Epic — Object Pointers](https://dev.epicgames.com/documentation/en-us/unreal-engine/object-pointers-in-unreal-engine).

### 2.8. Template, lambda, toán tử, header và compilation

**Cần hiểu:** đọc được `Container<Element>`; lambda với capture theo giá trị/reference; `operator==`; hash; namespace; khai báo trong `.h`, định nghĩa trong `.cpp`; `#include`, forward declaration, `#pragma once` và conditional compilation.

**Trong dự án:** `FLogicalEdgeKey` định nghĩa so sánh/hash để loại cạnh trùng; HTTP callback capture dữ liệu để dùng sau; một class Pawn có nhiều `.cpp` chia theo input, magnet, haptics và recenter. Đây vẫn là một class, không phải nhiều class mới.

**Đọc:** [VoxelMeshBuilder.cpp — FLogicalEdgeKey](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/VoxelMeshBuilder.cpp:91>), [ContentSyncSubsystem.cpp — callback](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Online/ContentSyncSubsystem.cpp:337>), [CubePlayerPawn.cpp — chia file](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Player/CubePlayerPawn.cpp:37>).

**Cần tự giải thích:** capture reference đến biến local sẽ nguy hiểm thế nào nếu callback chạy sau khi hàm kết thúc? Hai khóa bằng nhau cần hash nhất quán ra sao? Không cần học template metaprogramming để bắt đầu đọc dự án này.

Học thêm `auto` và copy/move sau khi nắm reference/lifetime. [CubeFileParser.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Data/CubeFileParser.cpp:179>) thêm `PieceData` bằng `MoveTemp`: cần hiểu lời gọi cho phép chuyển tài nguyên khi kiểu hỗ trợ move, và không giả định dữ liệu cũ vẫn nguyên vẹn sau đó. `auto` suy luận kiểu tại compile time, không biến C++ thành ngôn ngữ kiểu động.

## 3. Thuật toán và tư duy game rút ra từ dự án

### 3.1. State machine: hành động phụ thuộc trạng thái

`ACubeGameState::Tick()` chỉ cộng thời gian khi Playing và timer không pause. `SetState()` bỏ qua yêu cầu giữ nguyên trạng thái, cập nhật trạng thái rồi broadcast sự kiện. Các điều kiện load/pause/resume được xử lý thêm ở GameMode; riêng `SetState()` không phải bộ kiểm tra mọi chuyển trạng thái hợp lệ.

**Đọc:** [CubeGameState.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Game/CubeGameState.cpp:14>) và [CubeGameMode.cpp — RequestLoadLevel](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Game/CubeGameMode.cpp:84>).

Bài học: viết danh sách trạng thái, sự kiện và điều kiện chuyển trước khi nối UI. Trả lời được “đang Paused thì Tick, grab và resume được phép làm gì?”.

### 3.2. Tập ô, bất biến và cập nhật dữ liệu có kiểm soát

Goal có tập ô hợp lệ và tập ô đã bị chiếm. Pipeline cần phân biệt: tính ô ứng viên, kiểm tra, cập nhật occupancy, giải phóng occupancy khi lấy mảnh ra, rồi kiểm tra hoàn thành.

**Đọc:** [GoalVolume.cpp — commit/release/complete](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/GoalVolume.cpp:386>) và [GridPiece.cpp — SnapToGoalOnce](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/GridPiece.cpp:1386>).

Bài học: “mọi ô occupied đều thuộc valid” là một bất biến cần được các hàm phối hợp giữ đúng. So số lượng hai tập chỉ có ý nghĩa khi các bất biến cần thiết đã được bảo đảm.

**Chi tiết của source cần hiểu đúng:** snap hiện tại có thể commit phần ô nằm trong goal và theo dõi/cảnh báo phần ở ngoài. `IsPuzzleComplete()` kết hợp kiểm tra piece ngoài goal với so số lượng ô. Không diễn giải nó thành thuật toán bắt buộc toàn bộ piece phải nằm trong goal ở mọi lần snap. `CommitCells()` cũng không tự làm toàn bộ việc kiểm tra hợp lệ cho caller.

### 3.3. Toán 3D: hệ tọa độ trước, công thức sau

**Cần học theo thứ tự:** vector → độ dài/khoảng cách → local/world space → transform và inverse transform → tâm ô → làm tròn/floor → rotation → quaternion.

Trong `WorldToGrid()`, vị trí world được đổi về local, quy đổi theo kích thước ô rồi xác định chỉ số. Chiều ngược lấy tâm ô, sau đó đổi ra world. Snap rotation được tính tương đối với goal; goal quay thì hệ trục lưới cũng quay.

**Đọc:** [GoalVolume.cpp — chuyển tọa độ](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/GoalVolume.cpp:321>), [PieceZone.cpp — ContainsPoint](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/PieceZone.cpp:45>), [GridPiece.cpp — SnapRotationRelativeToGoal](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/GridPiece.cpp:1245>).

Bài học: luôn ghi rõ mỗi vector thuộc hệ tọa độ nào. Một điểm nằm trong box không đủ chứng minh toàn bộ mảnh ghép nằm trong box.

### 3.4. Hysteresis, cancel và xử lý dữ liệu không đáng tin

`FHandMenuPinchState` là ví dụ nhỏ và dễ học: một ngưỡng để press, một ngưỡng thấp hơn để release; mất dữ liệu đáng tin thì cancel; sau gián đoạn phải mở tay hợp lệ rồi mới được press lại.

**Đọc:** [HandMenuPinchState.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Player/HandMenuPinchState.h>) và [HandMenuRegressionTests.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Tests/HandMenuRegressionTests.cpp:20>).

Bài học áp dụng được cho cả nút bấm, trigger, joystick và cảm biến: tránh rung trạng thái quanh một ngưỡng; phân biệt người dùng chủ động thả với hệ thống mất input; lặp thao tác cancel không được tạo thêm click.

### 3.5. Hình học voxel và chi phí tính toán

Với mỗi voxel, xét sáu ô láng giềng. Nếu ô cạnh một mặt không tồn tại, mặt đó được đưa vào mesh. Cạnh được chuẩn hóa hai đầu mút và dùng hash/set để loại trùng. Buffer được `Reserve()` trước khi thêm nhiều phần tử.

**Đọc:** [VoxelMeshBuilder.cpp — BuildExposedFaceMesh](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/VoxelMeshBuilder.cpp:257>).

Bài học: học thuật toán đếm mặt trước vertices, triangle indices, normals và UV. Xét chi phí theo số ô; phân biệt giảm số mặt hình học với giảm số lần gọi hàm mỗi frame. Hãy đo trước khi kết luận tối ưu có hiệu quả.

## 4. C++ được đặt vào Unreal như thế nào?

### 4.1. Vai trò của các lớp trong dự án

| Thành phần | Trách nhiệm thấy trong source |
| --- | --- |
| `UCubeGameInstance` | Profile, save/load, ngôn ngữ, dịch vụ âm thanh |
| `ACubeGameMode` | Điều phối load level, bắt đầu, pause/resume, hoàn thành/thất bại |
| `ACubeGameState` | Trạng thái lượt chơi, thời gian, số lần cầm, dữ liệu level hiện tại |
| `ACubePlayerPawn` và components | Input, camera, tay, grab, pinch, ray, haptics |
| `ULevelRegistry` | Hợp nhất và tra cứu các nguồn level |
| `UPuzzleSubsystem` | Tạo/xóa goal, pieces, zones; điều phối spawn |
| `AGridPiece`, `AGoalVolume`, `APieceZone` | Các vật thể và luật không gian của puzzle |
| `UCubeMenuWidgetV2` | Hiển thị, nhận thao tác và cập nhật theo sự kiện |
| `UContentSyncSubsystem` | Đồng bộ nội dung và quản lý request/cache |

**Đọc:** [CubeGameMode.cpp — tạo các thành phần](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Game/CubeGameMode.cpp:13>).

Lưu ý tên gọi: `UPuzzleSubsystem`, `ULevelRegistry` và `UCubeMRSceneSubsystem` thực tế kế thừa **UActorComponent**. `UContentSyncSubsystem` kế thừa **UGameInstanceSubsystem**. Xác định lifecycle bằng lớp cha và cách khởi tạo, không suy ra chỉ từ chữ “Subsystem”.

GameInstance tồn tại xuyên qua việc đổi map trong một lần chạy ứng dụng; dữ liệu muốn còn sau khi đóng game cần save/load. Tham khảo [Epic — Gameplay Framework, UE 5.5](https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-framework-in-unreal-engine?application_version=5.5).

### 4.2. Reflection và ranh giới C++/Blueprint

**Cần học:** `UCLASS`, `USTRUCT`, `UENUM`, `GENERATED_BODY`, `UPROPERTY`, `UFUNCTION`; thuộc tính cho phép chỉnh trong Editor khác với thuộc tính chỉ đọc trong Blueprint. Macro không thay thế khái niệm C++ nền tảng.

**Ví dụ:** PieceClass dùng `TSubclassOf`; thông số spawn chỉnh qua property/DataAsset; dữ liệu level được đánh dấu để engine/editor nhận biết. `IGrabbable` dùng `BlueprintNativeEvent` để hỗ trợ triển khai C++/Blueprint.

**Đọc:** [PuzzleSubsystem.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Puzzle/PuzzleSubsystem.h>) và [CubePuzzleSpawnLayoutDataAsset.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/Puzzle/CubePuzzleSpawnLayoutDataAsset.h>).

Cần phân biệt thuộc tính được reflection nhận biết, thuộc tính có thể chỉnh, thuộc tính được serialize và thuộc tính replicate. Không suy ra tất cả những tính chất này chỉ từ việc có `UPROPERTY`.

### 4.3. Vòng đời, sự kiện và timer

**Cần học:** constructor tạo cấu trúc; `BeginPlay` kết nối runtime; `Tick` dùng `DeltaSeconds` cho công việc liên tục; `EndPlay` dọn tác vụ. Với widget, đọc thêm `NativeConstruct`/`NativeDestruct` và việc đăng ký/hủy delegate.

**Trong dự án:** Pawn ghép nhiều components; menu subscribe các sự kiện profile/điểm/trạng thái; spawn dùng timer; haptics có timer kết thúc pulse. Khi hủy hệ thống, cần tránh callback còn nhắm tới đối tượng hoặc trạng thái cũ.

**Đọc:** [CubePlayerPawn.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Player/CubePlayerPawn.cpp:193>), [CubeMenuWidgetV2.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/UI/CubeMenuWidgetV2.cpp:145>), [CubePlayerPawn_Haptics.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Player/CubePlayerPawn_Haptics.cpp:62>), [PuzzleSubsystem.cpp — ClearCurrentPuzzle](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/PuzzleSubsystem.cpp:70>).

Bài học: cập nhật trạng thái nhất quán trước khi phát sự kiện vì listener có thể gọi ngược vào hệ thống ngay; không đăng ký cùng một listener nhiều lần ngoài ý muốn; chọn timer/event cho công việc không cần chạy mỗi frame.

Timer không đồng nghĩa với một thread riêng. Tương tự, `ESPMode::ThreadSafe` của shared pointer trong HTTP không tự làm cho mọi dữ liệu gameplay trở thành an toàn khi truy cập đồng thời.

### 4.4. UI, âm thanh và dữ liệu trình bày

Menu dùng dữ liệu profile/level để tạo hàng, card và nhãn. `FString` biểu diễn chuỗi làm việc/ID; `FName` thường dùng cho tên định danh; `FText` xuất hiện ở các nhãn hiển thị và nội dung cần bản địa hóa. Dịch vụ âm thanh quản lý playlist, volume và phản hồi thao tác.

**Đọc:** [CubeMenuV2Types.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/UI/CubeMenuV2Types.h>), [CubeMenuWidgetV2_Profiles.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/UI/CubeMenuWidgetV2_Profiles.cpp>), [CubeBackgroundMusicPlayer.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Audio/CubeBackgroundMusicPlayer.cpp>).

Bài học: giữ ID của profile/level riêng với tên hiển thị; chuyển dữ liệu gameplay thành dữ liệu cho UI; phân biệt “đã đổi dữ liệu” và “đã cập nhật phần nhìn/nghe”.

## 5. Các kiến thức tích hợp học sau phần lõi

| Chủ đề | Kiến thức cần rút ra | Nguồn thực tế |
| --- | --- | --- |
| File và JSON | Đọc file, deserialize, kiểm tra trường và kiểu, thông báo lỗi, chuyển sang model thống nhất | [CubeFileParser.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Data/CubeFileParser.cpp>) |
| Registry và stable key | Phân biệt vị trí trong danh sách với danh tính; thay thứ tự danh sách không nên chuyển điểm sang level khác | [LevelRegistry.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Data/LevelRegistry.cpp>) |
| Save/profile | Tra cứu theo key, cập nhật best score, serialize, load, xử lý dữ liệu cũ và dữ liệu thiếu | [CubeGameInstance.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Game/CubeGameInstance.cpp:93>) |
| HTTP bất đồng bộ | Request có thể thành công, lỗi hoặc tới muộn; kiểm tra response; capture giá trị và weak owner; hủy request khi teardown | [ContentSyncSubsystem.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Online/ContentSyncSubsystem.cpp:331>) |
| Input và physics | Input mode, raycast/overlap, collision channel, attach/detach, kinematic/simulated, vận tốc khi thả | [VRGrabComponent.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Player/VRGrabComponent.cpp>), [GridPiece.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Puzzle/GridPiece.cpp>) |
| Tracking và MR | Kiểm tra độ hợp lệ dữ liệu, mất tracking, hệ tọa độ, trạng thái đang tải/ready/fallback | [VRTrackedHand.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Player/VRTrackedHand.cpp:108>), [CubeMRSceneSubsystem.h](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Public/MR/CubeMRSceneSubsystem.h>) |
| Rendering UI | Widget trong world, render target, stereo layer, tạo/hủy tài nguyên khi ẩn hoặc kết thúc | [CubeWidgetStereoLayerComponent.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/UI/CubeWidgetStereoLayerComponent.cpp>) |
| Công cụ Editor và cấu hình build | Editor-only code, xuất dữ liệu bố trí, dependency module, compile/link, tài nguyên runtime | [CubeIntroLayoutToolActor.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/UI/EditorTools/CubeIntroLayoutToolActor.cpp>), [CubeCubev2.Build.cs](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/CubeCubev2.Build.cs>) |

Ba giới hạn cần giữ rõ khi học:

- Hàm `FPuzzleLevelData::IsValid()` hiện chỉ kiểm tra goal và danh sách pieces không rỗng. Nó không chứng minh hình học, tính giải được hay toàn bộ schema đều hợp lệ.
- “Stable key” chỉ ổn định nếu cách tạo key ổn định. Lớp base `UPuzzleLevelPack` có fallback theo tên pack và index; hãy đọc từng nguồn trước khi giả định đổi thứ tự luôn an toàn.
- Source có save/load và log chẩn đoán không tự chứng minh profile còn sau khi khởi động lại. Bài kiểm tra persistence phải đóng hẳn rồi mở lại ứng dụng.

Riêng pointer pose của hand tracking, cần kiểm tra tính hợp lệ trước khi dùng cho tương tác; đây cũng là nội dung tài liệu [Meta — Is Pointer Pose Valid](https://developers.meta.com/vr/documentation/unreal/unreal-blueprints-is-pointer-pose-valid). Tên API cụ thể cần đối chiếu plugin đang cài khi thực hành; tài liệu này không đề xuất nâng phiên bản SDK.

## 6. Lộ trình tự viết: tám bài thực hành

Các bài console dùng C++17 trở lên trong Visual Studio 2022. Đây là bài tập mới; chưa đánh dấu hoàn thành chỉ vì đã đọc được code của dự án. Không cần sao chép nguyên class Unreal sang console.

### Bài 1 — Bộ tính sao

**Học trước:** kiểu dữ liệu, `if`, hàm, `enum class`, struct.

**Tự viết:** dữ liệu chứa ba mốc thời gian và hàm tính sao. Tách nhập/in console khỏi hàm tính toán. Quy ước đầu vào hợp lệ: thời gian hữu hạn, không âm; các mốc dương và tăng dần. Tự thiết kế cách báo đầu vào không hợp lệ.

**Kiểm tra:** với mốc 60/120/180 giây, các thời gian `0, 60, 60.1, 120, 120.1, 180, 180.1` phải cho `3, 3, 2, 2, 1, 1, 0` sao. Thử thời gian âm và bộ mốc sai thứ tự; không trả kết quả hợp lệ một cách im lặng.

### Bài 2 — Dữ liệu level và best score

**Học trước:** class/struct, vector, map, string, reference và `const`.

**Tự viết:** danh sách level có ID riêng; mỗi level lưu best time và best stars. Với đề bài này, hai chỉ số được lấy tốt nhất độc lập. Chỉ ghi kết quả đã hoàn thành và dữ liệu hợp lệ.

**Kiểm tra:** level `L-A` có các lần chơi 100 giây/2 sao, 130 giây/1 sao, 50 giây/3 sao; kết quả cuối là 50 giây/3 sao. Đổi thứ tự danh sách không làm điểm của `L-A` chuyển sang `L-B`. Tra ID chưa có phải trả được trạng thái “chưa có kết quả”.

### Bài 3 — Lõi puzzle bằng tập ô

**Học trước:** vòng lặp, struct tọa độ nguyên, tập hợp và điều kiện hợp lệ.

**Tự viết:** `CanPlace`, `Place`, `Remove`, `IsComplete`. Bài luyện dùng luật đơn giản: **mọi ô của piece phải thuộc goal và còn trống**; một lần đặt thất bại giữ nguyên trạng thái. Theo dõi piece ID và những ô mà piece đó đang chiếm; `Remove` nhận piece ID và chỉ giải phóng các ô đã lưu cho piece ấy. Quy định rõ cách xử lý ô trùng trong input.

**Kiểm tra:** goal gồm `(0,0,0), (1,0,0), (1,1,0)`. Đặt một ô hợp lệ thành công; đặt chồng bị từ chối; `(0,1,0)` bị từ chối dù nằm trong bounding box; đủ ba ô mới hoàn thành; goal rỗng không hoàn thành; lấy một piece ra làm trạng thái hoàn thành trở lại false. Xóa piece chưa đặt hoặc xóa cùng piece hai lần không làm mất ô của piece khác.

Luật bài này chặt hơn cơ chế partial snap trong source, nhằm giúp bạn luyện bất biến trước.

### Bài 4 — Đồng hồ và trạng thái phiên chơi

**Học trước:** enum, đóng gói, hàm thành viên, điều kiện chuyển trạng thái.

**Tự viết:** một phiên chơi có MainMenu, Loading, Playing, Paused, Complete, Failed; có `Update(deltaSeconds)`. Viết bảng chuyển trạng thái được phép cho bài tập trước khi code. Đồng hồ chỉ tăng khi Playing.

**Kiểm tra:** Playing 2 giây → Paused 5 giây → Playing 3 giây thì thời gian chơi bằng 5 giây. Complete/Failed không tiếp tục đếm. Resume từ MainMenu bị từ chối theo hợp đồng bạn đã viết. Gọi pause hai lần không gây thêm tác dụng phụ.

### Bài 5 — Tọa độ lưới và mặt ngoài voxel

**Học trước:** vector/toạ độ, floor, vòng lặp, tập hợp.

**Tự viết phần A:** grid 2D chưa xoay, ô rộng 10, góc nhỏ nhất world `(100,200)`. Viết lấy tâm ô và xác định ô chứa điểm; biên dưới bao gồm, biên trên loại trừ; khai báo kích thước grid rõ ràng.

**Kiểm tra A:** tâm ô `(0,0)` là `(105,205)`; `(109.9,205)` nằm ở `(0,0)`; `(110,205)` nằm ở `(1,0)` nếu ô đó tồn tại; `(99.9,205)` ở ngoài. Khi đúng mới thêm quay 90° và test round trip về tâm ô.

**Tự viết phần B:** đếm mặt ngoài của tập voxel, chưa cần vẽ. Rỗng → 0; một voxel → 6; hai voxel kề mặt → 10; hai voxel tách rời → 12; khối đặc 2×2×2 → 24. Voxel nhập trùng không tăng số mặt.

### Bài 6 — Nút bấm có hysteresis và cancel

**Học trước:** state machine, struct có phương thức, kiểm tra tính hợp lệ và test theo chuỗi.

**Tự viết:** nhận strength và cờ reliable; phát None/Press/Release/Cancel. Press threshold 0.82, release threshold 0.55; sau khi khởi tạo hoặc mất tracking phải có mẫu mở tay hợp lệ trước lần press mới.

**Kiểm tra:** vào hệ thống với strength 1.0 chưa press; mẫu 0.0 hợp lệ cho phép chuẩn bị lần bấm; 0.9 phát Press; 0.65 vẫn giữ; mất reliable phát Cancel; quay lại với 1.0 chưa press lại; mở rồi bóp lại mới Press; thả chủ động xuống 0.5 mới Release. Cancel liên tiếp không phát thêm thao tác.

Đây là bài rất phù hợp để đọc test có sẵn trước, tự viết bản console, sau đó mới đối chiếu implementation.

### Bài 7 — Nguồn level, lưu dữ liệu và callback

**Học trước:** đa hình, file I/O, parse/validate, lifetime và lambda. Làm từng bước, không ghép tất cả ngay.

**Tự viết:** một giao diện đọc level; hai nguồn dữ liệu hardcoded và file cùng trả một model. Lưu profile theo ID level. Cuối cùng mô phỏng một request hoàn thành muộn bằng callback; chưa cần gọi mạng thật.

**Kiểm tra:** thiếu file, file rỗng, dữ liệu sai và ID trùng đều có xử lý xác định. Save rồi đóng chương trình; mở lại vẫn thấy profile/điểm đúng. Đổi thứ tự level không đổi chủ sở hữu điểm. Callback sau khi đối tượng nhận đã hết lifetime không truy cập vùng nhớ cũ.

Không bắt buộc tự viết JSON parser tổng quát; trọng tâm là hợp đồng dữ liệu và xử lý kết quả từ parser.

### Bài 8 — Đưa một lát cắt gameplay vào Unreal

**Học trước:** Actor/Component, reflection, UObject lifetime, delegates, timer, transform và collision.

**Tự viết theo từng mốc:** một Actor piece và một Actor goal → đặt một piece bằng input đơn giản → kiểm tra luật ô → phát sự kiện khi hoàn thành → widget hiển thị thời gian/sao → save kết quả. Khi phần này ổn định mới nối controller/hand tracking, âm thanh, web sync và MR.

**Kiểm tra:** tạo/xóa level liên tiếp không để lại piece/timer cũ; mở/đóng menu nhiều lần không nhân đôi callback; pause dừng đúng logic; hoàn thành chỉ phát sự kiện một lần; restart còn dữ liệu. Với VR, thêm các tình huống mất tracking, đổi input mode và kiểm tra trực tiếp trên thiết bị.

## 7. Cách đọc source để thực sự tự viết được

Với mỗi chủ đề, thực hiện một vòng học:

1. Đọc lý thuyết và viết lại bằng lời của mình: dữ liệu nào, ai sở hữu, điều kiện đúng/sai là gì.
2. Đọc declaration trong `.h`; tự dự đoán đầu vào, đầu ra và tác dụng phụ trước khi xem `.cpp`.
3. Chọn một hàm nhỏ; lập ví dụ chạy tay, gồm cả giá trị biên và tình huống lỗi.
4. Đóng source tham khảo, tự viết phiên bản nhỏ từ yêu cầu bài tập.
5. Build và chạy kiểm thử; nộp file thực tế để được nhận xét, chỉ rõ lỗi và chấm.
6. Sau khi đúng, so với source: dự án thêm vấn đề thực tế nào như lifetime, callback, tracking hay UI?

Chỉ chuyển chủ đề khi bạn có thể giải thích code, tự sửa một yêu cầu nhỏ và kiểm tra rằng hành vi cũ vẫn đúng. Không cần nhớ mọi tên hàm của engine.

Thứ tự đọc đề xuất:

| Lượt | Điểm bắt đầu | Lý do |
| --- | --- | --- |
| 1 | `PuzzleTypes.h` → `CubeGameState.h/.cpp` | Dữ liệu, hàm, điều kiện, trạng thái tương đối ngắn |
| 2 | `HandMenuPinchState.h` → test MenuPinchRecovery | Logic nhỏ có test tình huống rõ ràng |
| 3 | `GoalVolume.cpp` → `PieceZone.cpp` | Tập ô, bounding box và chuyển tọa độ |
| 4 | `PuzzleLevelPack.h` → các lớp pack → `LevelRegistry.cpp` | Đa hình và chuẩn hóa dữ liệu |
| 5 | `CubeGameMode.cpp` → `PuzzleSubsystem.cpp` | Điều phối, spawn và vòng đời |
| 6 | `GridPiece.cpp` → `VoxelMeshBuilder.cpp` | Snap, physics, thuật toán hình học |
| 7 | `CubeGameInstance.cpp` → `CubeFileParser.cpp` → `ContentSyncSubsystem.cpp` | Save/load, parse và bất đồng bộ |
| 8 | Các components Player → UI/Audio → MR/rendering | Tích hợp sau khi đã vững nền |

## 8. Dấu hiệu bạn đã hiểu một hệ thống

- Vẽ được luồng dữ liệu từ input đến thay đổi trạng thái và phần hiển thị.
- Chỉ ra được ai tạo, ai giữ và ai kết thúc lifetime của các đối tượng liên quan.
- Kể được ít nhất một bất biến và ba trường hợp biên cần kiểm tra.
- Tự viết được bản đơn giản từ yêu cầu, không nhìn implementation.
- Giải thích được vì sao dùng array/set/map, event/timer/Tick hoặc interface ở vị trí ấy.
- Phân biệt được compile thành công, logic test đúng, chạy trong Editor và chạy đúng trên thiết bị.

Ví dụ kiểm thử hiện có để học cách đặt câu hỏi: [HandTrackingRegressionTests.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Tests/HandTrackingRegressionTests.cpp>) kiểm tra nhiều quy tắc hand/grab; [HandMenuRegressionTests.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Tests/HandMenuRegressionTests.cpp>) kiểm tra press/cancel/recovery; [WidgetStereoLayerRegressionTests.cpp](<F:/Unreal Engine project/CubeCubev2/Source/CubeCubev2/Private/Tests/WidgetStereoLayerRegressionTests.cpp>) kiểm tra vòng đời lớp hiển thị. Đây là nguồn học về thiết kế test, không phải kết quả chạy mới của lượt tổng hợp này.

Khi cần xem một pattern đầy đủ sau khi đã nắm kiến thức nền, dùng [Pattern Collection](<F:/Unreal Engine project/CubeCubev2/Pattern Collection/README.md>). Tài liệu hiện tại giữ vai trò bản đồ học từ C++ nền tảng tới những hệ thống đó.
