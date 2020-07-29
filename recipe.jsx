import React,{useEffect,useState} from 'react';
import Contents from './contents';
import './style.css'
const Recipe = function(){
    const [search,setSearch] = useState('chicken');
    const [food,setfood] = useState([]);
    const Api_Id = `3600e8d5`;
    const API_Key=`b7487b48408d374fc8c497555c9c61c4`;
    useEffect(()=>{
        Fetdata();
    },[search])
    async function Fetdata(){
        let response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${Api_Id}&app_key=${API_Key}`)
        let data = await response.json();
        console.log("data.hits")
        setfood(data.hits);
        }
    function handleSearch(){
        setSearch(document.getElementById('inp').value)
    }
    return(
    <div>
        <center>
        <h1 className="brand">Food Recipe</h1>
        </center>
        <div className="Search">
        <input type="text" id="inp" /><br/>
        <button onClick={handleSearch}>Search</button>
        </div>
        <ul>
            {food.map(item=><Contents 
               key={item.recipe.label}
               label={item.recipe.label}
               image={item.recipe.image}
               ingredients={item.recipe.ingredients}
            />
            )}
        </ul>
    </div>
    )
};

export default Recipe;