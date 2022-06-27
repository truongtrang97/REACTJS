## usestate
### bài tập 1
- ứng dụng đếm số--- click vô thì gtri số hiển thị bị thay đổi (useState)
```
import {useState} from 'react'

function App() {
  const [Counter,setCounter]=useState(1)
  const handleincrease=()=>{
     setCounter(Counter+1 )
  }
  return (
    <div className="App" style={{padding:30}}>
      <h1>{Counter}</h1>
      <button onClick={handleincrease}>Increase</button>
    </div>
  );
}

export default App;
```
+ khi setCounter nhiều lần như 1 lần vì gtri counter=1 gtri (re-render 1 lần thôi)
```
 const handleincrease=()=>{
     setCounter(Counter+1 )
     setCounter(Counter+1 )
     setCounter(Counter+1 )
     setCounter(Counter+1 )

  }
  ```
  + ứng dụng callback
  < lấy giá trị return lần trước để đưa vảo setState -- nhưng chỉ re-render 1 lần>
```
 const handleincrease=()=>{
    //  setCounter(Counter+1 )
    setCounter(prevstate=>prevstate+1)
    setCounter(prevstate=>prevstate+1)
    setCounter(prevstate=>prevstate+1)
    setCounter(prevstate=>prevstate+1)

  }
```
-> result: increase từ 1->5
 + initstate : nhận đối số là 1 hàm
 
 ```
 import {useState} from 'react'
const order=[100,200,900]
function App() {
  const total=order.reduce((arr,curr)=>arr+curr)
  const [Counter,setCounter]=useState(total)
  const handleincrease=()=>{
    //  setCounter(Counter+1 )
    setCounter(prevstate=>prevstate+1)
  }
  return (
    <div className="App" style={{padding:30}}>
      <h1>{Counter}</h1>
      <button onClick={handleincrease}>Increase</button>
    </div>
  );
}

export default App;
```
+ ==> cách code ni total sẽ tính lại sau mỗi lần re-render
+ cải thiện performent dùng callback
< giá trị initstate chỉ dùng 1 lần duy nhất ở lần đầu tiên=> nên truyền trực tiếp hàm vô trog tham số của initstate >
```
function App() {
 
  const [Counter,setCounter]=useState(()=>order.reduce((arr,cur)=>arr+cur))
  
  const handleincrease=()=>{
    //  setCounter(Counter+1 )
    setCounter(prevstate=>prevstate+1)
  }
```
+ vd: 
 ```
 import {useState} from 'react'

function App() {
 
  const [Inf,setInf]=useState(
    {
      name:'HA',
      age:2,

    }
  )
  
  const handleincrease=()=>{
    setInf({
      bio:'bcđ'
    })
  }
  return (
    <div className="App" style={{padding:30}}>
      <h1>{JSON.stringify(Inf)}</h1>
      <button onClick={handleincrease}>Increase</button>
    </div>
  );
}

export default App; 
```
+ muốn thêm giá trị vào object ban đầu ở initstate
```
const handleincrease=()=>{
    setInf({
      ...Inf,
      bio:'bcđ'
    })
  }
```
+ khi cần thêm logic
```
const handleincrease=()=>{
    ... logic
    return{
    setInf(prev=>{
      ...Inf,
      bio:'bcđ'
    }
    }
  }
```

### bt random gift
< thay đổi bên dưới để giao diện thay đổi ==> usestate>
...
```
import {useState} from 'react'
const gifts=[
  'CPU 19',
  'RAM32',
  'RAM_SELL'
]

function App() {
  const[gift,setgift]=useState()
  const handlegift=()=>{
    setgift((index)=>{

      index=Math.floor(Math.random()* gifts.length)
      return(
        gifts[index]
      )
    }
    )
  }
  return (
    <div className="App" style={{padding:30}}>
      <h1>{gift||"Chua co thuong"}</h1>
      <button onClick={handlegift}>lay thuong</button>
    </div>
  );
}

export default App;
```
## Two-way binding trong React?
+ vd1
```
import {useState} from 'react'
function App() {
  const[name, setName]= useState('')
  console.log(name);
  return (
    <div className="App" style={{padding:30}}>
      <input value={name} onChange={e=>setName(e.target.value)}/> 
      <button onClick={()=>setName('nvb')}>change</button>
    </div>
  )
}
export default App;

```
vd2:
```
import {useState} from 'react'
function App() {
  const[name, setName]= useState('')
  const[email, setEmail]= useState('')
  const handleregister=()=>{
   //...CALL API 
    console.log({name,email});
  }
  return (
    <div className="App" style={{padding:30}}>
      <input value={name} onChange={e=>setName(e.target.value)}/> 
      <input value={email} onChange={e=>setEmail(e.target.value)}/> 
      <button onClick={handleregister}>REGISTER</button>
    </div>
  )
}
export default App;
```
+ ỨNG DỤNG '' vào RADIO (hình tròn) 
- khi bị warming vì thiếu key : nên thêm key vào thẻ lớn nhất mới hết warming
- yêu cầu : click vào chỉ chọn được 1 thôi 
- c1: theo code thuần đặt trùng name ( cách ni dk nhưng k nên ... khúc sau xử lý dài dòng)--> chỉ thay đổi giao diện dữ liệu không đổi
      <input type="radio" name="course" />
- c2 : khi check phải lấy được id của dữ liệu mình checked
```
import {useState} from 'react'
const courses=[
  {
    id:1,
    name:'js'
  },
  {
    id:2,
    name:'php'
  },
  {
    id:3,
    name:'thtm'
  }

]
function App() {
  const[Checked, setChecked]= useState(2)
  
  const handlecheckbox=()=>{
    //  CALL API...
    console.log({id: Checked});
  }
  return (
    <div className="App" style={{padding:30}} >
     {courses.map((course)=>(<div key={course.id}> 
      <input type="radio"
       checked={Checked===course.id}
       onChange={()=> setChecked(course.id)}/>
      {course.name}
      </div>
     ))}
     <button onClick={handlecheckbox}>Regester</button>
    </div>
  )
}
export default App;

```
+ ỨNG DỤNG ' ' vào CHECKBOX ( hình vuông)
< click vô chọn dk nhiều khi click lại thì bỏ chọn> 
- click chọn nhiều thành 1 danh sách --> lưu vào array
< mỗi lần click vô lấy đk id và đưa vào mảng>
 setChecked((prev)=>[...prev,id])
