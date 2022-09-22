import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todos from "./views/Todos";
import Covid from "./views/Covid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import { CountDown, NewCountDown } from "./views/Countdown";
import Blog from "./views/Blog";
import DetailBlog from "./views/BlogDetail";
import AddNewBlog from "./views/AddNewBlog";
import NotFound from "./views/NotFound";
import YoutubeSearch from "./views/YoutubeSearch";

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
  const onTimesup = () => {
    alert("times up");
  };
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
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello World React Hook and {name}!</h2>

          {/*  */}
        </header>
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown onTimesup={onTimesup} />
            <div>--------------</div>
            <NewCountDown onTimesup={onTimesup} />
          </Route>
          <Route path="/todo">
            {/* <Home /> */}
            <Todos
              myData={todos}
              title={"All todos"}
              deleteDataTodo={deleteDataTodo}
            />

            <input
              type="text"
              value={address}
              onChange={(event) => handleOnChangeInput(event)}
            />
            <button type="button" onClick={(event) => handleEventClick(event)}>
              Click
            </button>
          </Route>
          <Route path="/more">
            <YoutubeSearch />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
