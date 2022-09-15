const Todos = (props) => {
  //   const todos = props.myData;
  //parent=>child
  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  const { myData, title, deleteDataTodo } = props;
  return (
    <div className="todos-container">
      <div className="title-todos">{title}</div>
      {myData.map((item) => {
        return (
          <div key={item.id}>
            <li className="todo-child">
              {item.id} -- {item.title}{" "}
              <span onClick={() => handleDelete(item.id)}>x</span>
            </li>
            <></>
          </div>
        );
      })}
      <hr />
    </div>
  );
};
export default Todos;
