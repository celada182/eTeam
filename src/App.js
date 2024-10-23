import { Route, Routes } from "react-router-dom";
import './App.css';
import SearchPage from "./pages/search/SearchPage";
import CreatePage from "./pages/create/CreatePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
