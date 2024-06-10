import { useState } from "react"

const fruits = [
    'Apple', 'Banana', 'Mango', 'Pineapple', 'Grapes'
]

const Search = () => {
    const [seachTerm, setSearchTerm] = useState('');
    const searchFilter = fruits.filter((item)=>item.toLowerCase().includes(seachTerm.toLowerCase()))
  return (
    <div>
        <input type="text" name="" id="" placeholder="search here"
         onChange={(e)=>setSearchTerm(e.target.value)}/>
        {
            searchFilter.map((fruit,idx)=>(<h4 key={idx}>{fruit}</h4>))
        }
    </div>
  )
}

export default Search