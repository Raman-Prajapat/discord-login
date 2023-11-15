import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DiscordLogin from "./Page/DiscordLogin";
import Redirected from "./Page/Redirected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DiscordLogin />}></Route>
        <Route path="/logged-in" element={<Redirected />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
