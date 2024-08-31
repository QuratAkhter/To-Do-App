import "./App.css"
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import NoWork from "./components/NoWork"
import { useState } from "react"

function App() {
  

  let [items,setItems]=useState([])

  const handleNewAdd=(task,date)=>{
    if(task!=="" && date!==""){

      let newItems=[...items,{task,date}]
      setItems(newItems)
    }
  }

  const handleDeleteButton=(item)=>{
    let newItems=items.filter(i=> i!==item)
    setItems(newItems)
  }
  
  return <center className="todo-container container"> 
  <AppName></AppName>
 <AddTodo onClickAdd={handleNewAdd}></AddTodo>
  {items.length===0 && <NoWork></NoWork>}
  <div className="item-container">
 <TodoItems items={items} onDeleteButton={handleDeleteButton}></TodoItems>
  </div>

  
  </center>
}

export default App
