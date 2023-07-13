import "./styles.css";
import Button from "./Button";
import Task from "./Task";
import Categories from "./Categories";
import { ReactComponent as Icon } from "./resources/plus-add-new-create-svgrepo-com.svg";

const hello = () => {
  console.log("WHAT THE FUUUUCK");
};

export default function App() {
  return (
    <div className="App">
      <Categories />
    </div>
  );
}
