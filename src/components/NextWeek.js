import './NextWeek.css';
import Day from "./Day.js"

function NextWeek(props) {
  console.log(props.data)
  return (
    <div className="NextWeek">
      <Day data = {props.data[1]} className="Day1"/>
      <Day data = {props.data[2]} className="Day2"/>
      <Day data = {props.data[3]} className="Day3"/>
      <Day data = {props.data[4]} className="Day4"/>
      <Day data = {props.data[5]} className="Day5"/>
      <Day data = {props.data[6]} className="Day6"/>
      <Day data = {props.data[7]} className="Day7"/>
    </div>
  );
}

export default NextWeek;
