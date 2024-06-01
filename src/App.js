import "./App.css";
import AppBar from "./componets/AppBar";
import Banner from "./componets/Banner";
import Comments from "./componets/Comments";
import Meanu from "./componets/Meanu";
import PickoftheWeek from "./componets/PickoftheWeek";

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Meanu />
      <PickoftheWeek />
      <Comments />
      <div className="text-center my-3 text-primary small">
        Copyright &copy; 2023&2024 Pizza Shop
      </div>
    </>
  );
}

export default App;
