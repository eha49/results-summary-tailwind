function Panel() {
  return (
    <aside className="flex flex-col items-center basis-60 grow py-6 bg-gradient-to-b from-blue-500 v to-blue-600 rounded-3xl">
      <h1 className="text-base text-slate-200 opacity-85">
        Your Result
      </h1>
      <div className="w-32 h-32 rounded-full flex flex-col justify-center items-center gap-2 my-6 bg-gradient-to-b from-blue-800  via-blue-600 to-transparent shadow">
        <h2 className="font-bold text-5xl text-slate-50">76</h2>
        <p className="text-xs text-slate-200 opacity-60">of 100</p>
      </div>
      <h3>Great</h3>
      <p>
        You scored higher than 65% of the people who have taken these
        tests.
      </p>
    </aside>
  );
}

export default Panel;
