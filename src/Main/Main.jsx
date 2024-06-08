import Panel from "../Panel/Panel";
import Summary from "../Summary/Summary";

function Main() {
  return (
    <div className="flex flex-wrap rounded-3xl max-[511px]:rounded-none shadow-2xl">
      <Panel />
      <Summary />
    </div>
  );
}

export default Main;
