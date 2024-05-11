import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default App;
