import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todos from "./views/Todos";
import Covid from "./views/Covid";

const App = () => {
  let [name] = useState("Mah self");
  let [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo 1", title: "working" },
    { id: "todo 2", title: "doing home work", type: "user_1" },
    { id: "todo 3", title: "eating", type: "user_1" },
    { id: "todo 4", title: "go to work", type: "user_2" },
    { id: "todo 5", title: "workouts", type: "user_2" },
  ]);
  const deleteDataTodo = (idDelete) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== idDelete);
    setTodos(currentTodos);
  };
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };
  const handleEventClick = (event) => {
    if (!address) {
      alert("emty input");
      return;
    }
    let newTodo = {
      id: `todo ${Math.floor(Math.random() * 10000 + 1)}`,
      title: address,
    };
    setTodos([...todos, newTodo]);
    setAddress("");
    console.log(">> check log", event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World React Hook and {name}!</h2>
        {/* <Todos
          myData={todos}
          title={"All todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <Todos
          myData={todos.filter((x) => x.type === "user_2")}
          title={"user_2"}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click
        </button> */}
        <Covid />
      </header>
    </div>
  );
};

export default App;
