import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="bg-black text-white p-8 w-full min-h-screen">
      <SearchBar />
      <Tabs />
      <br />
      <hr />
      <br />
      <ResultGrid />
    </div>
  );
};

export default App;
