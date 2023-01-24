// TODO: create a component that displays a single bakery it
import "../App.css";

export default function Toggler(props) {
  // const name = item.name
  function onFilterAvailableChange(event){
    props.toggleselected(event.target.value)
    console.log(event.target.value)

  }
  return ( <div>
    <select name="isAvailable" onChange={onFilterAvailableChange}>
      <option value="choose">Choose One</option>
      <option value="personas">Personas</option>
      <option value="redesign">Redesign</option>
       <option value="development">Iterative Design</option>
      <option value="ab">A/B Testing</option>

    </select>
    </div>
  );
}