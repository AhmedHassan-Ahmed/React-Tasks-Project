export default function Newtask({ old, taskid, handleDelTask }) {
  const project = old.find(r => r[0] === taskid);
  const isEmpty = !project || project.length === 1;

  if (isEmpty) {
    return (
      <p className="text-sm text-stone-400 my-6 italic">
        This project does not have any tasks yet.
      </p>
    );
  }

  let content = isEmpty ? (
    <p className="text-sm text-stone-400 my-6 italic">
      This project does not have any tasks yet.
    </p>
  ) : (
    old.map(function (r) {
      if (r[0] === taskid) {
        return r.slice(1).map((t, index) => (
          <div
            key={`${r[0]}-${index}`}
            className="
              flex
              items-center
              justify-between
              px-3
              py-2
              my-2
              rounded-md
              bg-stone-100
              hover:bg-stone-200
              transition-colors
            "
          >
            <p className="text-stone-700">
              {t}
            </p>

            <button
              onClick={() => handleDelTask(t, taskid)}
              className="
                text-xs
                text-stone-400
                hover:text-red-600
                transition-colors
              "
            >
              Clear
            </button>
          </div>
        ));
      }
    })
  );

  return <>{content}</>;
}
