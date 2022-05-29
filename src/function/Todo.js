import React, { createRef } from "react";

function Todo() {
const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [deco, setDeco] = React.useState(false);
  const [elRefs, setElRefs] = React.useState([]);

  React.useEffect(() => {
    setElRefs((elRefs) =>
      Array(tasks.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
    
  }, [tasks]);
  console.log(elRefs)
  const updatdeco = (i) => {
    console.log(elRefs[i].current.style)
    if (elRefs[i].current.style.textDecoration === "none") {
      elRefs[i].current.style.textDecoration = "line-through";
    } else {
      elRefs[i].current.style.textDecoration = "none";
    }
  };

  return (
    // Develop the TODO list​​​​​​‌​​‌​‌‌​‌​​‌‌​‌‌​​‌‌‌‌​​‌ component
    <div>
  <div>My TODO list</div>
  <form type="submit">
    <input
      value={task}
      onChange={(e) => {
        setTask(e.target.value);
      }}
      type="text"
    ></input>
    <button
      onClick={(e) => {
        e.preventDefault();
        
        setTasks([...tasks,task]);

        setTask("");
      }}
    >
      ADD
    </button>
  </form>
  <ul>
    {tasks.map((item, i) => (
    <li
        onClick={() => updatdeco(i)}
        ref={elRefs[i]}
        key={i}
        style={{ textDecoration: "none" }}
      >
        {item}
      </li>
    ))}
  </ul>
</div>
);
}

export default Todo