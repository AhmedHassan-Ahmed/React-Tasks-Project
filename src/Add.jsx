export default function Add({ onclick, save, title, description, duDate }) {
  return (
    <div className=" mt-16">
      <header className="pb-6 mb-6 border-b border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-stone-700">New project</h1>

          <menu className="flex items-center gap-4">
            <button
              onClick={onclick}
              className="
    text-sm
    text-stone-500
    transition-all
    duration-200
    hover:text-stone-900
    hover:scale-105
    active:scale-95
  "
            >
              Cancel
            </button>

            <button
              onClick={save}
              className="
    px-6
    py-2
    rounded-md
    bg-stone-900
    text-stone-50
    shadow-sm
    transition-all
    duration-200
    hover:bg-stone-950
    hover:scale-105
    hover:shadow-lg
    active:scale-95
  "
            >
              Save
            </button>
          </menu>
        </div>

        {/* FORM */}
        <div className="mt-8 flex flex-col gap-6">
          {/* TITLE */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="input-1"
              className="text-sm font-bold uppercase tracking-wide text-stone-500"
            >
              Title
            </label>
            <input
              ref={title}
              id="input-1"
              className="
                w-full
                px-3
                py-2
                rounded-sm
                bg-stone-200
                text-stone-800
                focus:outline-none
                focus:ring-2
                focus:ring-stone-500
              "
            />
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="input-2"
              className="text-sm font-bold uppercase tracking-wide text-stone-500"
            >
              Description
            </label>
            <input
              ref={description}
              id="input-2"
              className="
                w-full
                px-3
                py-2
                rounded-sm
                bg-stone-200
                text-stone-800
                focus:outline-none
                focus:ring-2
                focus:ring-stone-500
              "
            />
          </div>

          {/* DUEDATE */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="input-3"
              className="text-sm font-bold uppercase tracking-wide text-stone-500"
            >
              Due date
            </label>
            <input
              ref={duDate}
              type="date"
              id="input-3"
              className="
                w-full
                px-3
                py-2
                rounded-sm
                bg-stone-200
                text-stone-800
                focus:outline-none
                focus:ring-2
                focus:ring-stone-500
              "
            />
          </div>
        </div>
      </header>
    </div>
  );
}
