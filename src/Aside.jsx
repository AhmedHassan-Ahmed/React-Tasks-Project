export default function Aside({ task, taskA, onclick, data, handleB }) {
  return (
    <aside
      className="
  w-1/3
  px-8
  py-16
  bg-gradient-to-b
  from-stone-900
  to-black
  text-stone-50
  md:w-72
  rounded-r-xl
"
    >
      <h2 className="mb-8 font-bold uppercase tracking-wide text-stone-300 md:text-xl">

        Your Projects
      </h2>

      <ul className="mt-8 mb-5">
        <li>
          <button
            onClick={onclick}
    className="
  w-full
  text-left
  px-3
  py-2
  my-3
  rounded-md
  text-stone-300
  border
  border-dashed
  border-stone-600
  hover:bg-stone-800
  hover:text-white
  transition-colors
"

          >
            +Add New Project
          </button>
        </li>
      </ul>
      {data.map((e) => {
        let classname = `
  mb-3
  w-full
  px-4
  py-2
  rounded-lg
  bg-stone-900
  text-stone-300
  text-left
  font-medium
  border
  border-stone-700
  transition-all
  duration-200
  hover:bg-stone-800
  hover:text-white
  hover:border-stone-500
  active:scale-[0.98]
`;
        if (e[0] === taskA[0] && task) {
         classname += `
  ring-2
  ring-blue-500/60
  ring-offset-2
  ring-offset-black
  bg-gradient-to-r
  from-blue-900/40
  to-blue-800/20
  text-white
`;

        }
        return (
          <button
            key={e[0]}
            onClick={() => handleB(e[0])}
            className={classname}
          >
            {e[1]}
          </button>
        );
      })}
    </aside>
  );
}
