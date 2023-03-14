

function App() {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">*.open-source.work</h1>
      <p className="py-6"> Open source websites can be displayed here.</p>
      <button className="btn btn-primary m-2" onClick={() => window.location.replace("https://github.com/free-open-source-work/site")}>Github</button>
      <button className="btn btn-primary m-2" onClick={() => window.location.replace("https://github.com/free-open-source-work/register")}>Register</button>
    </div>
  </div>
</div>
  );
}

export default App;
