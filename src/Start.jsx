export default function Start({onclick}) {
  return (
    <div className="w-[35rem] mt-16 ml-auto mr-auto">
      {" "}
      <div className="mt-24 text-center w-2/3">
        <img
          src="/src/assets/no-projects.png"
          className="w-16 h-16 object-contain mx-auto"
          alt="icon"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <button className="mt-8 " onClick={onclick}>Create New Project</button>
      </div>
    </div>
  );
}
