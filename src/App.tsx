import BlogCard from "./components/BlogCard";
import BlogTable from "./components/BlogTables";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <header className="App-header"></header>
        <BlogTable />
        <BlogCard />
      </div>
    </>
  );
}

export default App;
