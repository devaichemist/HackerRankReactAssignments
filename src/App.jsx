import { Routes, Route, useNavigate } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ItemList from "./components/ItemList";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<ContactForm onNext={() => navigate("/items")} />} />
      <Route path="/items" element={<ItemList onNext={() => navigate("/")} />} />
    </Routes>
  );
}

export default App;