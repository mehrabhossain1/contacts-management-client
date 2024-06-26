import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
