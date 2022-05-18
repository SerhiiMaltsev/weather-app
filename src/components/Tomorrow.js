import Hour from "./Hour.js"
import './Tomorrow.css';

function Tomorrow(props) {
  return (
    <div className="Tomorrow">
      <Hour data={props.data[0]} className="Hour0"/>
      <Hour data={props.data[1]} className="Hour1"/>
      <Hour data={props.data[2]} className="Hour2"/>
      <Hour data={props.data[3]} className="Hour3"/>
      <Hour data={props.data[4]} className="Hour4"/>
      <Hour data={props.data[5]} className="Hour5"/>
      <Hour data={props.data[6]} className="Hour6"/>
      <Hour data={props.data[7]} className="Hour7"/>
      <Hour data={props.data[8]} className="Hour8"/>
      <Hour data={props.data[9]} className="Hour9"/>
      <Hour data={props.data[10]} className="Hour10"/>
      <Hour data={props.data[11]} className="Hour11"/>
      <Hour data={props.data[12]} className="Hour12"/>
      <Hour data={props.data[13]} className="Hour13"/>
      <Hour data={props.data[14]} className="Hour14"/>
      <Hour data={props.data[15]} className="Hour15"/>
      <Hour data={props.data[16]} className="Hour16"/>
      <Hour data={props.data[17]} className="Hour17"/>
      <Hour data={props.data[18]} className="Hour18"/>
      <Hour data={props.data[19]} className="Hour19"/>
      <Hour data={props.data[20]} className="Hour20"/>
      <Hour data={props.data[21]} className="Hour21"/>
      <Hour data={props.data[22]} className="Hour22"/>
      <Hour data={props.data[23]} className="Hour23"/>
    </div>
  );
}

export default Tomorrow;
