export default function Newtask({ handleTask, bref, taskA }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <input
        ref={bref}
        placeholder="Add a task "
        className="
          flex-1
          px-3
          py-2
          rounded-sm
          bg-stone-200
          text-stone-800
          placeholder-stone-400
          focus:outline-none
          focus:ring-2
          focus:ring-stone-500
        "
      />

      <button
        onClick={() => handleTask(taskA)}
        className="
          px-4
          py-2
          rounded-md
          bg-stone-800
          text-stone-50
          hover:bg-stone-900
          transition-colors
        "
      >
        Add Task
      </button>
    </div>
  );
}
