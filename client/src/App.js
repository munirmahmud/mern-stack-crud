import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
