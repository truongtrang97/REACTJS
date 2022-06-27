1. CREATE REACT APP
    1. NODEJS
    - nodejs là javasript runtime =>khi cài nodejs tạo ra môi trường độc lập để thực thi javasript (như trình duyệt)
    - nodejs ni sử dụng chrome's V8 javasript engine(đk phát triển từ google)
    - nodejs tạo ra máy chủ web
    - nodejs có npm : có thư viện giải quyết nhiều vấn đề thường lặp đi lặp lại  < vd như không cần link file  như trk nữa ...>
    - nodejs có rất nhiều thư viện như react, reactdom, webpack(thư viện ni là thư viện chia nhỏ)
    - cài nodejs nhớ kiểm tra npm -v, npx -v : xem cài đặt chưa , cần cái ni
    2. Tạo dự án với React + Webpack
    => cái ni để hình dung được react app được xây dựng ntn
    + webpack giúp module hoá ứng dụng frontend ra-> khi có cấu trúc phù hợp thì quản lý file hiệu quả
    - campage lại -> mini file tối ưu sản phầm khi explore lên expression (?) 
    ```
      + Cấu trúc dự án
      react-webpack -> thư mục gốc
       |src-> thư mục chứa sources code chính
          |component: thư mục chứa component
          | index.js : file khởi tạo, render App vào #root
       | public
          | index.html: chứa HTML page, nơi chứa #root element 
    ```
    


    + NOTE:
    - Dùng terminal : cd tên file -> di chuyển đến file cần 
    - xoá hết lệnh dùng clear
    1. tạo file package --> npm init
    - file package.json : file ni giúp mô tả dự án và quản lý những thư viện được cài đặt 
    2. cài đặt webpack
    - LỆNH :npm install webpack webpack-cli --save-dev
    -  --save-dev: cái ni được lưu vào devDependencies: use khi dev thâu
    - --save : cái ni được lưu vào Dependencies: được use cả khi dev và khi đưa lên expression lun
    + 2 cái ni gọi là flag
    3. Cài đặt react và react dom
    - lệnh: npm install react@17.0.2 react-dom@17.0.2 --save
    4. Cài đặt babel
    - lệnh: npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
    5. cài đặt webpage
    - Cài đặt CSS-Loader và Style-Loader
    - 2 thư viện này giúp webpack có thể tải file .css dưới dạng module.
    - lệnh: npm install css-loader style-loader --save-dev
    6. Tạo webpack.config.js
    - path: thư viện của nodejs -> cái ni giúp định tuyến vị trí 1 folder hay 1 file đang ở đâu
    - mục đích: lấy được path của project
    7. Tạo file .babelrc
    - .babelrc cai ni để config 1 số thư viện của webpack & babel
    - Cài đặt này để cho Babel biết sử dụng preset-env và preset-react trong việc hỗ trợ chuyển đổi mã.
    8. Thêm scripts cho dự án
    ```
    "scripts": {
    ...
    "start": "webpack --mode development --watch",
    "build": "webpack --mode production"
    }
    <!-- đoạn... là có cái chi trước đó rùi, chỉ cần thêm đoạn sau thui -->
    ```
    --> đoạn ni thêm ở package.json
    Cấu hình scripts này để bạn có thể chạy lệnh tương ứng qua Terminal. Ví dụ: npm start sẽ chạy lệnh ở phần start, npm run build sẽ chạy lệnh ở phần build. Trừ start ra thì cần thêm từ run nữa .
    9. Chạy dự án
    - các lệnh chạy trong terminal
    - lệnh npm start (mún xem chạy ntn xem lại giải thích)--> file đầu ra là build/bundle.js
    - Trừ start thì các lệnh khác npm run <cái chi cần chạy trong script>
    + lệnh : ctrl+c --> thoát lệnh đang chạy tại terminal
    10. Cài đặt html-webpack-plugin
    - html-webpack-plugin ra đời để giúp chúng ta “nhờ” Webpack sau khi build ra build/bundle.js thì thêm hộ chúng ta vào public/index.html luôn.
    - lệnh cài :npm install html-webpack-plugin --save-dev
    - cấu hình Webpack để thêm html-webpack-plugin vào dự án.
    - có 1 file index mới trong build
    ```
    Thuộc tính defer trong thẻ script để báo với trình duyệt rằng hãy thực thi code Javascript sau khi HTML đã được parse xong. Điều này giúp đặt được thẻ script trên thẻ head mà code Javascript vẫn có thể truy cập được HTML DOM viết dưới body.
    ```
    +++ truy cập <html-webpack-plugin> xem thêm 
    - NOTE : Khi chạy ứng dụng ta chạy trên file build , khi code thì code file kia nha
    11. webpack-dev-server
    -> cài cái ni thay thế live-server
    - lệnh cài : npm install webpack-dev-server --save-dev
    - <--hot> : hot reload lại chỗ cần chỉnh sửa không load lại cả trình duyệt
    - <--open> : tự bật web lên trình duyệt lun
    - NOTE : npm start trong terminal phải lun giữ cho nó chạy ở dự án < bấm dấu x để ẩn thâu, thùng rác xoá lun(never nhen)>
    - xem thêm Eslint
2. Nâng cấp React & ReactDOM lên 18
- câu lệnh đưa về version mới nhất : npm i react@latest react-dom@latest -->Câu lệnh này sẽ cài đặt react ở phiên bản mới nhất(??)
- câu lệnh đưa về version cụ thể: npm i react@18.2.0 react-sdom@18.2.0
3.  Tạo dự án với create-react-app
- react-app: là thư viện được phát triển bởi facebook (tham khảo trên github.com or npm.com)
- react-app: cái ni làm đơn giản hoá quá trình dùng webpack, reactjs
- npx là thư viện giúp thực thi được 1 thư viện khác mà không cần cài nó
- lệnh cài: $ npx create-react-app nameproject
4. NPM, NPX và YARN là gì
4. 1. NPM
+ Khi cài thư viện NPM có 2 cách cài
- project scope <phạm vi dự án >--> cài vào dự án
--> khi cài lưu ở node_modules , xong tên được đưa qua file package.json
   + npm install react react-dom --save <từ mpn 5. trở lên bỏ đuôi --save: tự động được lưu vào dependencies> --> cài nhiều thư viện thì mỗi thư viện cách nhau dấu cách
   + viết gọn'
   - npm i react react-dom
   + cài để lưu vào dev-dependencies
   - npm i --save-dev react react-dom
   - npm i -D react react-dom
   + xoá thư viện
   - npm uninstall react react-dom
   -
- global scope <phạm vi toàn cầu>--> cài vào máy tính (use khi code của dự án không phụ thuộc vào thư viện á, như không import thư viện đó)
   - trường hợp phổ biến thư viện cho thực thi 1 dòng lệnh vd thư viện: create-react-app
   + câu lệnh cài:
   - npm i --global create-react-app
   - npm i -g create-react-app
   ---> cái  ni được lưu vào thư mục user của máy tính
   + lệnh gỡ:
   - npm unstall -g create-react-app
+ NOTE : những máy dùng hệ điều hành linnux, ubuntu câu lệnh cần thêm sudo để lấy quyền root ??
- muốn xem hướng dẫn thư viện tên thư viện --help
- vd: create-react-app --help
=>( cái ni khi nào cài create-react-app vào project thì help bằng ni oki: npx create-react-app --help )
- cài thư viện global có thể dùng lệnh ở bất kì terminal nào
4. 2.NPX
   - < CÀI NODE thì npm được cài kèm , npx cài kèm npm>
   - NPX : giúp hỗ trợ những file bin--> 
   - ưu điểm:
   + tại sao nên dùng npx
   - npx : giúp ta không cần cài thư viện lên máy - nếu cài trên máy version sẽ bị fix lại k k tự động nâng cấp
   - npx chọc vô file npm luôn đưa về những version mới nhất để thực thi
   + một số lỗi nên tránh:
   - không nên đặt tên user máy có dấu, k có dấu cách , chỉ dùng dấu gạch ngang 
5. NPM & YARN
+ giống nhau:
- Cả 2 đều là package manager : quản lý những gói của node <những thư viện viết bởi js>
+ NPM
  + cung cấp 1 website để quản lý thư viện <npm.com>
  + là registry: kho lưu trữ --> có thể code thư viên xong đưa lên npm để lưu trữ
  + a command-line interface(CLI)--> có thể giao tiếp qua câu lệnh (command-line)
+ YARN : < hiểu là trình quản lý gói khác- ra đời để cải thiện npm>
- npm có file: package-lock.json
- yarn có file: yarn.json
---> cả 2 file ni quản lý tất cả dự án được cài trên máy
++ khác nhau:
- về performent
+ npm : khi cài thư viện sẽ được cài tuần tự (cần bộ nhớ ít hơn)
+ yarn: khi cài thư viện sẽ được cài song song (cần bộ nhớ nhìu hơn)

++ NOTE
+ registry
+ eject
+ xem lại cài global chưa dk??
+ diffencent between npm & yarn  <search>
+ diffencent between npm & yarn syntax <search xem khác nhau cú pháp ntn>

+ NOTE KHI MUỐN DEV ,PHAT TRIỂN DỰ ÁN , PHẢI LUN ĐỂ DỰ ÁN Ở TÌNH TRẠNG START, bật project thì bật npm start đầu tiên
--> xong code
6. CRA Folder Structure
```
//  muốn thay đổi port của npm start để tránh trùng
// với serve -s build (default 3000) nha. <3000.
// chỉnh trong file package.json
// Mac / Linux
"scripts": {
    "start": "PORT=7000 react-scripts start",
}

// Windows
"scripts": {
    "start": "set PORT=7000 && react-scripts start",
}

```
<XEM LẠI VIDEO 44+45>






    


       
