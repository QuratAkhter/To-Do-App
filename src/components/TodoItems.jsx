import TodoItem from "./TodoItem"


const TodoItems=({items,onDeleteButton})=>{
 
return <>
  <div className="container text-left">
        {items.map(item=> <TodoItem item={item} key={item} onDeleteButton={onDeleteButton}></TodoItem>)}
    </div>
</>
}

export default TodoItems