import { useState,useEffect} from "react";
function Item({name,isPacked=false}){
    return(<li>
        {name}{isPacked && '✔'}
    </li>);
}
export default function ItemList(){
    const [keyword,setkeyword]=useState("");
    useEffect(()=>{
        console.log("this component is loaded!");
        return()=>{
            alert("component unloaded!");
        }
    },[])
    const Items=[{name:"Sunglass",isPacked:false},
        {name:"Sunblock",isPacked:true},
        {name:"Swimming suit",isPacked:true},
        {name:"Powerbank",isPacked:false}];
 
    const filterList=Items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()));
    const ItemList=filterList.map(i=><Item key={i.name}
        name={i.name} isPacked={i.isPacked}/>);
   
    return (<>
    <input type="text" value={keyword} onChange={(e)=>setkeyword(e.target.value)}/>
    <ui>
        {ItemList}
        </ui>
        </>)
}
 
