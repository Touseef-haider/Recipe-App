import React from 'react';
import "./style.css";
const Contents = ({label,image,ingredients})=>{
    // console.log(ingredients)
    return(
        <div className="Main-Container">
            <div>
                <h1>
                    {label}
                </h1>
                <img src={image} alt="Image"/>
            </div>
            <div>
            <span style={{color:'grey'}}>Ingredients</span>
                {ingredients.map(item=>(
                    <div>
                        <p className="par">{item.text} <span style={{marginLeft:'5px'}}>{<span style={{color:'grey'}}>Weight</span>}:{item.weight}</span></p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Contents