import { useState } from "react";
import Article from "../components/Article";
import posts from "../posts.json";
function homePage()
{
    const [search, setSearch] = useState("");
    const changeSearch = (event) => {
        setSearch(event.target.value);
    }
    return(
        <>
        <h1>Simple blog</h1>
        <div>Cari Artikel: <input type="text" onChange={changeSearch}></input></div>
        <small>Ditemukan 0 data dengan pencarian kata</small>
        {posts.map(({title, tags, date}, index)=>(
            <Article { ...{title, tags, date}} key={index} />
        ))}
        </>
    )
}

export default homePage;