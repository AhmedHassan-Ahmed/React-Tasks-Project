import Start from "./Start";
import Aside from "./Aside";
import Add from "./Add";
import Tasks from "./Tasks";
import { useRef, useState } from "react";
function App() {
  const title = useRef();
  const description = useRef();
  const duDate = useRef();
  const [ol, ne] = useState();
  const [task, netask] = useState(false);
  const [oldn, nen] = useState(0);
  const [taskA, neTaskA] = useState(
    localStorage.getItem("Array1")
      ? JSON.parse(localStorage.getItem("Array1"))
      : []
  );
  const [oldata, nedata] = useState(
    localStorage.getItem("Array2")
      ? JSON.parse(localStorage.getItem("Array2"))
      : []
  );
  const [old, ne2] = useState(
    localStorage.getItem("Array3")
      ? JSON.parse(localStorage.getItem("Array3"))
      : []
  );
  const bref = useRef();
  localStorage.setItem("Array1", JSON.stringify(taskA));
  localStorage.setItem("Array2", JSON.stringify(oldata));
  localStorage.setItem("Array3", JSON.stringify(old));

  function handleTask() {
    const value = bref.current.value;

    ne2((prev) => {
      const id = Number(taskA[0]);

      const exists = prev.some((item) => Number(item[0]) === id);

      if (exists) {
        // add task to existing array
        return prev.map((item) =>
          Number(item[0]) === id ? [item[0], value, ...item.slice(1)] : item
        );
      }

      // create new array if id does not exist
      return [[id, value], ...prev];
    });

    bref.current.value = "";
  }

  function handleSave() {
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      duDate.current.value === ""
    )
      return;
    const newItem = [
      oldn,
      title.current.value,
      description.current.value,
      duDate.current.value,
    ];

    setCounter((prev) => prev + 1);
    setData((prev) => [...prev, newItem]);
  }

  function handleClick() {
    ne(true);
    netask(false);
  }
  function handleRemove() {
    ne(false);
    netask(false);
  }
  function handleDelete(index) {
    console.log(oldata);
    console.log(index);
    nedata((prev) => prev.filter((item) => item[0] !== index));

    ne(false);
    netask(false);
  }

  function handleSave() {
    const newItem = [
      oldn,
      title.current.value,
      description.current.value,
      duDate.current.value,
    ];
    nen((pre) => pre + 1);
    nedata((pre) => [...pre, newItem]);
  }

  function handleB(e) {
    let find = oldata.map((pr) => {
      if (pr[0] == e) neTaskA([pr[0], pr[1], pr[2], pr[3]]);
    });
    netask(true);
  }
  return (
    <>
      <main className="flex min-h-screen bg-stone-50">
        <Aside
          task={task}
          taskA={taskA}
          data={oldata}
          onclick={handleClick}
          handleB={handleB}
        />

        <section className="flex-1 px-16 py-12">
          {ol && !task && (
            <Add
              onclick={handleRemove}
              save={handleSave}
              title={title}
              description={description}
              duDate={duDate}
            />
          )}

          {!ol && !task && <Start onclick={handleClick} />}

          {task && (
            <Tasks
              old={old}
              taskA={taskA}
              handleDelTask={handleDelTask}
              handleDelete={handleDelete}
              handleTask={handleTask}
              bref={bref}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
