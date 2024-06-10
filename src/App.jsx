import { useState } from "react"


function App() {
const [value, setValue] = useState('')
  return (
    <div>
      <h1>disable the button</h1>
<input type="text" placeholder="type 'delete' to activate"
 value={value} onChange={(e)=>setValue(e.target.value)}/>
<button disabled ={value  !== 'delete'}>
  click
</button>
    </div>
  )
}

export default App
