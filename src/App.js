import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="flex w-full bg-yellow-50">
      <div className="fixed flex h-full min-w-[300px] flex-col gap-8 bg-white p-12 px-8">
        <SearchBar />
        <section className="flex max-h-[800px] grow flex-col justify-between">
          <div className="h-64 w-full bg-gray-300"></div>
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl">
              12º<sup>c</sup>
            </h1>
            <p className="text-xl">
              Monday, <span className="text-gray-600">16:00</span>
            </p>
            <p className="mt-8">Mostly Cloudy</p>
            <p>Rain - 30%</p>
            <div className="mt-4 flex h-24 w-full items-center justify-center bg-gray-300 text-white">
              <p className="font-bold">Porto, Portugal</p>
            </div>
          </div>
        </section>
      </div>
      <div className="ml-[300px] flex min-h-svh flex-1 flex-col items-center gap-12 p-12">
        <section className="w-full max-w-[1824px]">
          <h2 className="mb-8 text-2xl font-bold">Week</h2>
          <div className="grid grid-cols-5 gap-5">
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-xl font-bold">Tue</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
              <p>
                15º <span className="text-gray-600">-3º</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-xl font-bold">Wed</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
              <p>
                15º <span className="text-gray-600">-3º</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-xl font-bold">Thu</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
              <p>
                15º <span className="text-gray-600">-3º</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-xl font-bold">Fri</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
              <p>
                15º <span className="text-gray-600">-3º</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-xl font-bold">Sat</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
              <p>
                15º <span className="text-gray-600">-3º</span>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-[1824px]">
          <h2 className="mb-8 text-2xl font-bold">Today's Highlights</h2>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-gray-600">Wind Status</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-gray-600">Sunrise</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-gray-600">Sunset</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-gray-600">Humidity</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-gray-600">Visibility</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
              <p className="text-gray-600">Air Quality</p>
              <div className="h-14 w-14 bg-yellow-300"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
