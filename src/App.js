function App() {
  return (
    <div className="flex h-svh max-h-svh w-full">
      <div className="h-full flex-[0.3]">
        <form>
          <label htmlFor="location">Search for your location: </label>
          <input type="text" name="location" id="location" />
        </form>
      </div>
      <div className="h-full flex-1">
        <h2>Main</h2>
      </div>
    </div>
  );
}

export default App;
