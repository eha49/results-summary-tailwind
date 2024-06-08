import Scores from "../Scores/Scores";

function Summary() {
  return (
    <div className="flex flex-col basis-64 grow gap-4 p-8">
      <h1 className="text-base text-black font-semibold mt-3">
        Summary
      </h1>
      <Scores />
      <button className="bg-slate-700 text-slate-50 font-semibold py-3 rounded-full">
        Continue
      </button>
    </div>
  );
}

export default Summary;
