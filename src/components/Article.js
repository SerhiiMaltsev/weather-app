import './Article.css';

function Article(props) {
  let img_url = null;
  if(props.article_data.media.length == 0){
    img_url = "https://i.postimg.cc/SRVJj4M4/Not-Available.jpg";
  }else{
    img_url = String(props.article_data.media[0]["media-metadata"][1].url);
    console.log(props.article_data.media[0]["media-metadata"][1].url);
  }

  return (
    <div className="Article">
      <h3 className="Title"> {props.article_data.title} </h3>
      <img className="Image" src={img_url} alt="Girl in a jacket" width="100" height="100"/>
      <p className="Abstract"> {props.article_data.abstract} </p>
      <p className="Author"> {props.article_data.byline} </p>
      <p className="Url"> Link: <a href={props.article_data.url}>{props.article_data.url}</a> </p>
    </div>
  );
}

export default Article;
