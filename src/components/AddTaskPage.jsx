import react from "react";
import { useState } from "react";

export default function AddTaskPage(){
    const [inputValue,setInputValue] = useState("");
    function handleInputChange(event){
        setInputValue(event.target.value);
    }
    return(
    <div>
      <h1>AHAHAHA</h1>  
      <form>
         <input type="text" value={inputValue} onChange={handleInputChange}/>
      </form>
    </div>
    )
}