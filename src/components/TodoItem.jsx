import { RiDeleteBin2Line } from "react-icons/ri";


function TodoItem({ item, onDeleteButton }) {
    return <div className="row m-3 item-row">
        <div className="col-6">
            {item.task}
        </div>
        <div className="col-4">
            {item.date}
        </div>
        <div className="col-1">
            <button className="btn btn-danger" onClick={()=>onDeleteButton(item)}><RiDeleteBin2Line />
            </button>
        </div>
    </div>


}

export default TodoItem