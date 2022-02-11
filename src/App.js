import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import Article from "./components/Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState(["LandscapePhotography"]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then(response => {
      if(response.status !== 200) {
        console.log("Error - Fetch from reddit failed");
        return;
      }

      response.json().then( data =>{
        if(data !== null) {
          console.log(data);
          setArticles(data.data.children)
        }
      })
    })
  }, [subreddit]) // Every time "subreddit" changes, useEffect will be called 

  return (
    <>
      <Header />
      <div className="App">
        Reddit Client - By Jonathan Carlsson
        <br />
        <input type="text" className="userInput" value={subreddit} onChange={e => setSubreddit(e.target.value)}></input>
        <div className="articles">
          {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ""
          }
        </div>
      </div>
    </>
  );
}

export default App;
