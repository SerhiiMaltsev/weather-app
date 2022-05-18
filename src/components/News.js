import './News.css';
import Article from './Article.js'
import useFetch from "react-fetch-hook";
import axios from "axios";


function News(props) {
  if (props.newsData){
    return (
      <div className="News">
        <h2> News </h2>
        <Article article_data={props.newsData[0]}/>
        <Article article_data={props.newsData[1]}/>
        <Article article_data={props.newsData[2]}/>
        <Article article_data={props.newsData[3]}/>
        <Article article_data={props.newsData[4]}/>
      </div>
    );
  } else {
    return(
      <div>
        <p> Loading </p>
      </div>
    );
  }
}

export default News;
