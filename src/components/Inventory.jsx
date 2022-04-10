import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:20
  }); 

const booksAdd = (value) => {
    if(inv.books>=1){
      setInv((prev) =>({ ...prev,books:prev.books+value}))
    }
}
const pensAdd = (value) => {
  if(inv.pens>=1){
    setInv((prev) =>({ ...prev,pens:prev.pens+value}))
  }
}
const inkpensAdd = (value) => {
  if(inv.inkpens>=1){
    setInv((prev) =>({ ...prev,inkpens:prev.inkpens+value}))
  }
}
const notbooksAdd = (value) => {
  if(inv.notebooks>=1){
    setInv((prev) =>({ ...prev,notebooks:prev.notebooks+value}))
  }
}
           
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{
         booksAdd(1);
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
         booksAdd(-1);
        }}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{
         notbooksAdd(1);
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
         notbooksAdd(-1);
        }}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{
        pensAdd(1);
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
         pensAdd(-1);
        }}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>{
         inkpensAdd(1);
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
         inkpensAdd(-1);
        }}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.pens+inv.notebooks+inv.inkpens}
    </div>
  );
};
