import { useRef, useState } from "react"
import { MdAddToQueue } from "react-icons/md";


function AddTodo({onClickAdd}) {


    let itemName=useRef()
    let itemDate=useRef()



    const handleAddButton=()=>{
        onClickAdd(itemName.current.value,itemDate.current.value)
        itemName.current.value=""
        itemDate.current.value=""
    }

    return <div className="container">

        <div className="row m-3 add-row">
            <div className="col-6">
                <input type="text" ref={itemName} placeholder="Enter Task here" />
            </div>
            <div className="col-4">
                <input type="date" ref={itemDate}  />
            </div>
            <div className="col-1">
                <button className="btn btn-success" onClick={handleAddButton}>Add <MdAddToQueue />
                </button>
            </div>
        </div>
    </div>
}
export default AddTodo