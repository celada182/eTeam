import { Route, Routes } from "react-router-dom";
import './App.css';
import SearchPage from "./pages/search/SearchPage";
import CreatePage from "./pages/create/CreatePage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
