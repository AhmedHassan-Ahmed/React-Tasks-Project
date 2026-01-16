import Newtask from "./Newtasks";
import Tlist from "./Tlist";
import { useRef } from "react";

export default function Tasks({
  taskA,
  handleDelete,
  bref,
  handleTask,
  handleDelTask,
  old,
}) {
  return (
    <div className=" mt-16">
      {/* HEADER */}
      <header className="pb-6 mb-6 border-b border-stone-300">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-semibold text-stone-700">
            {taskA[1]}
          </h1>

          <button
            onClick={() => handleDelete(taskA[0])}
            className="
              text-sm
              text-stone-500
              hover:text-red-600
              transition-colors
            "
          >
            Delete
          </button>
        </div>

        {/* META */}
        <p className="mt-1 mb-3 text-sm text-stone-400">
          {taskA[3]}
        </p>

        {/* DESCRIPTION */}
        <p className="text-stone-600 whitespace-pre-wrap leading-relaxed">
          {taskA[2]}
        </p>
      </header>

      {/* TASKS */}
      <h2 className="text-2xl font-semibold text-stone-700 mt-10 mb-4">
        Tasks
      </h2>

      {/* ADD TASK */}
      <Newtask
        taskA={taskA[0]}
        handleTask={handleTask}
        bref={bref}
      />

      {/* TASK LIST */}
      <Tlist
        handleDelTask={handleDelTask}
        old={old}
        taskid={taskA[0]}
      />
    </div>
  );
}
