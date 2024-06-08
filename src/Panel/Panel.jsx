function Panel() {
  return (
    <aside className="flex flex-col justify-center items-center gap-4 min-h-96 basis-60 grow bg-gradient-to-b from-blue-500 v to-blue-600 rounded-3xl">
      <h1 className="text-base text-slate-200 opacity-85">
        Your Result
      </h1>
      <div className="w-32 h-32 rounded-full flex flex-col justify-center items-center gap-2 bg-gradient-to-b from-blue-800  via-blue-600 to-transparent shadow">
        <h2 className="font-bold text-5xl text-slate-50">76</h2>
        <p className="text-xs text-slate-200 opacity-60">of 100</p>
      </div>
      <h3 className="text-slate-50 text-xl font-semibold">Great</h3>
      <p className="text-sm text-slate-50 opacity-85 text-center w-48">
        You scored higher than 65% of the people who have taken these
        tests.
      </p>
    </aside>
  );
}

export default Panel;
