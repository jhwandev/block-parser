import Main from "./pages/main";
import Test from "./pages/test";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
