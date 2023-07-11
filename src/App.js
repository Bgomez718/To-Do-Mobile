import "./styles.css";
import Button from "./Button";
import Task from "./Task";
import { ReactComponent as Icon } from "./plus-add-new-create-svgrepo-com.svg";

const hello = () => {
  console.log("WHAT THE FUUUUCK");
};

export default function App() {
  return (
    <div className="App">
      <Task label="WHY DONT THIS WORK" />
      <Task label="USE YOUR OWN CHECK" />

      <Button className="add" icon={<Icon />}></Button>
    </div>
  );
}
