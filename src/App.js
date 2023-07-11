import "./styles.css";
import Button from "./Button";
import Task from "./Task";
import Section from "./Section";
import { ReactComponent as Icon } from "./resources/plus-add-new-create-svgrepo-com.svg";

const hello = () => {
  console.log("WHAT THE FUUUUCK");
};

export default function App() {
  return (
    <div className="App">
      <div>
        <Section />
      </div>
    </div>
  );
}
