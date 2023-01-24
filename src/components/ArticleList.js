import react from "react";
import Article from "../components/Article";
import blogData from "../data/blog";

function ArticleList (){
    console.log(blogData.posts)
    const postArray=blogData.posts.map((array,index)=>{
        return (<Article title={array.title} minutes={array.minutes} date={array.date} preview={array.preview} key={array.id}/>)
    })
    return(
        <main>
           {postArray}
        </main>
    ) 
}

export default ArticleList