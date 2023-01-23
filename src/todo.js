import { useState } from "react"


const Todo=()=>{
    const [inputVal,setBValue]=useState(" ")
    const [items,setItems]=useState([])

    const itemList=(event)=>{
        setBValue(event.target.value)
    }

    const addTodo=()=>{
        setItems((oldItems)=>{
            return[...oldItems, inputVal]
        })
        setBValue("")
    }

    
    return(
        <>
            <h1>MY TODO APP</h1>
            <br/>
            <input type="text" placeholder="enter You Todo" 
                value={inputVal} onChange={itemList}
            />
            <button onClick={addTodo}>Add</button>
            <ol>
                {
                    items.map((itemVal)=>{
                      return  <ul>{itemVal}</ul>
                    })
                }
            </ol>
        <h1>{inputVal}</h1>
        </>
    )
}

export default Todo