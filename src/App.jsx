import { useEffect, useState } from "react"


function App() {
const [value, setValue] = useState('')
const [show, setShow]  = useState(true);
const [inputValue, setInputValue] = useState('')
const [num1, setNum1] = useState()
const [num2, setNum2] = useState()
const [total, setTotal] = useState(0)
const [data, setData] = useState();
const getUserData = async () => {
  const response  = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const jsonData = await response.json();
  setData(jsonData);
}
useEffect(()=>{
  getUserData();
},[])
  return (
    <div>    
<>
<h1>disable the button</h1>
<input type="text" placeholder="type 'delete' to activate"
 value={value} onChange={(e)=>setValue(e.target.value)}/>
<button disabled ={value  !== 'delete'}>
  click
</button></>

<>
<h1>hide element</h1>
<button onClick={()=>setShow(!show)}>
  {show ? 'Hide below text': 'Show text'}
</button>
{show && <div>hide me </div>}

</>

<>
<h1 >Input value</h1>
<input type="text" placeholder="type here" value={inputValue} 
  onChange={(e) => setInputValue(e.target.value)} />
  <h2>{inputValue}</h2>
</>

<>
<h1 style={{color:'yellowgreen'}}>Calculate</h1>
<input type="number" name="" id="" onChange={(e)=> setNum1(+e.target.value)} value={num1} />
<input type="number" name="" id="" onChange={(e)=> setNum2(+e.target.value)} value={num2} />
<button onClick={()=>setTotal(num1+num2)}>Add</button>
<h4>{total}</h4>
</>
<>
<h1>Fetch user Data</h1>
{
  data?.map((datum,idx)=>(<p key={idx}>
   {datum.id}. {datum.address.city}
  </p>))
}
</>

    </div>
  )
}

export default App
