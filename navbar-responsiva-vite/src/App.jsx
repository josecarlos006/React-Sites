import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-gray-950">
          <Header />
        </div>
      </Router>
    </>
  );
}

export default App;