import { useEffect, useState } from "react"

const Debounce = () => {
    
  const useDebounce =(text, delay) =>{
    const [debounce, setDebounce]= useState(text)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounce(text)
        },delay);
        return ()=>{
            clearTimeout(timer)
        }
    },[text, delay]);
    return debounce;
  }
    const  [text, setText] = useState('')
    const debouncedText = useDebounce(text, 500)
  return (
    <div>
        <h1>Debounced Text Showing</h1>
        <input type="text" name="" id="" 
        onChange={(e)=>setText(e.target.value)}/>
        <p>Debounced Text: {debouncedText}</p>
    </div>
  )
}

export default Debounce