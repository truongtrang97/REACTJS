1. hook là method, hàm được viết sẵn cũng cấp bởi thư viện reactjs
- mỗi method, hàm của hook có tính năng cụ thể cho từng trường hợp 
- gắn hook vào fucntion component 
- note : hook
+ chỉ dùng cho function component
+ Giúp component trở nên đơn giản , dễ hiểu
    + lifecycle component :- từ lúc component được thêm vào DOM cho đến khi hoạt động( thay đổi về mặt dữ liệu)-> đến khi gỡ khỏi DOM
                            - Đánh dấu thời điểm xảy ra sự kiện trên :
                            + khi component được thêm vào DOM (được hiển thị ra)-> tức là API được gọi ở thời điểm đó
                            + khi component gỡ khỏi DOM --> khi đó ta xử lý các việc như clear interval, clear timeout( mấy cái ni để tránh rò rỉ bộ nhớ )
                               - Hoặc remove invent listener

+ không bị chia logic ra như methods trong lifecycle của class component
< HOOK giúp viết các logic xảy ra ở những thời điểm khác nhau ở cạnh nhau>                               
+ Không cần sử dụng this
2. sử dụng hook khi nào?
- với dự án mới hoặc những component viết  mới thì cần dùng hook
+  đối với dự án cũ:
   - component mới => function component+ hooks
   - component cũ => giữ nguyên có time tối ưu sau (sửa khi thực sự cần thâu)
+ Lưu ý: - khi nghiệp cần sử dụng các tính chất OOP_ hướng đối tượng (TÍNH KẾ THỪA)--> thì dùng class component
+ Có thể use kết hợp function component với class component
vd:
![img](/assets/img/fcom_classcom.PNG)
## useState hook
< trạng thái của dữ liệu-- chuyển từ giá trị này sang giá trị khác>
  1. Khi nào dùng useState
  - khi ta muốn dữ liệu thay đổi thì giao diện tự động cập nhật (render lại theo dữ liệu)
  2. Cách dùng
  ```
  import {useState} from 'react'

  function Component(){
    const[state, setstate]= useState(initState)
    ...<logic tự tạo> 
  }
  ```
  + tất cả các hook đều là function: ( hỉu đầu vào , đầu ra , cách vận hành)
  -  const[state, setstate]= useState(initState)
  -  useState ni nhận đối số là initState :  giá trị khởi tạo-- cái ni chỉ dùng 1 lần ở lần đầu thui
  - sau đó return ra 1 array [state, setstate]--> trong lần khởi tạo thì initState đk đưa vào gtri state
  - setstate : là 1 hàm --> hàm ni để sửa đổi gtri state
  + note: component được re-render lại sau khi setstate (gọi lại hàm app nhưng lấy giá trị state của lần trk đó , k pải giá trị khởi tạo)
  + initstate vz callback
  - inistate : có thể truyền bất kì kiểu dữ liệu gì(string, array,.)
  - note khi truyền initstate là 1 hàm ==> thì nó sẽ dùng giá trị mà hàm đó return ra lm giá trị initstate
  + sau mỗi lần setstate thì state sẽ nhận 1 giá trị mới hoàn toàn
  ## Two-way binding trong React?
  - kn: one-way binding: ràng buộc 1 chiều--> (reactjs mặc định ràng buộc 1 chiều)
  - kn two -way binding: ràng buộc 2 chiều--> (vuejs mặc định ràng buộc 2 chiều)
  + 1 chiều tương tác trên giao diện
  + 2 là chiều dữ liệu
  +  ứng dụng xử lý submit form : khi nhập dữ liệu gì thì dữ liệu tương ứng bên trong cũng thay đổi
  









### note
+ trong phần import không chen lẫn code khác được--> lỗi
+ học thêm Ag-GRID ( use master ag gird) ??? google
+ xem v-model
