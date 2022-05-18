function Day(props) {
  var timestamp = props.data.dt;
  var date = new Date(timestamp*1000);
  var time = date.getDate();
  var img_link = "http://openweathermap.org/img/wn/" + props.data.weather[0].icon + "@2x.png"
  var temperature = (1.8*(Number(props.data.temp.day)-273)+32).toFixed(2);
  var feels_like = (1.8*(Number(props.data.feels_like.day)-273)+32).toFixed(2);
  return (
    <div className="Day">
      <h6>Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h6>
      <img src={img_link} width="100" height="100"/>
      <p>Temperature: {temperature} F</p>
      <p>Feels like: {feels_like} F</p>
    </div>
  );
}

export default Day;
