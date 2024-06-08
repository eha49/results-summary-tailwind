function Panel() {
  return (
    <aside className="flex flex-col items-center basis-60 grow py-8 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-3xl">
      <h1 className="text-base text-slate-200">Your Result</h1>
      <div className="w-32 h-32 rounded-full flex flex-col justify-center items-center my-4 bg-gradient-to-b from-blue-800  via-blue-700 to-transparent shadow">
        <h2>76</h2>
        <p>of 100</p>
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
