function Hour(props) {
  var timestamp = props.data.dt;
  var date = new Date(timestamp*1000);
  var time = date.getHours();
  var img_link = "http://openweathermap.org/img/wn/" + props.data.weather[0].icon + "@2x.png"
  var temperature = (1.8*(Number(props.data.temp)-273)+32).toFixed(2);
  var feels_like = (1.8*(Number(props.data.feels_like)-273)+32).toFixed(2);
  return (
    <div className="Hour">
      <h6> Time: {time}:00 </h6>
      <img src={img_link} width="100" height="100"/>
      <p> Temperature: {temperature} F</p>
      <p> Feels like: {feels_like} F</p>
      <p> Humidity: {props.data.humidity}%</p>
    </div>
  );
}

export default Hour;
