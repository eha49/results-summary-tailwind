import data from "../../data.json";

function Scores() {
  return (
    <div className="flex flex-col gap-3">
      {data.map((option, index) => {
        return (
          <div
            key={index}
            className="flex justify-between p-3 rounded-lg score"
          >
            <div className="flex gap-2 items-center">
              <img src={option.icon} alt="an icon" />
              <span className="capitalize">{option.category}</span>
            </div>
            <div className="font-semibold">
              <span className="text-slate-900">{option.score}</span>
              <span className="text-slate-400"> / 100</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Scores;
