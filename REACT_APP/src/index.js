import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom ở version 17 , version 18 dùng react-dom/client


// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h1>hihi</h1>

        </div>
    )
}

// Render component App vào #root element
// version 17
// ReactDOM.render(<App />, document.getElementById('root'))
//  version 18
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


