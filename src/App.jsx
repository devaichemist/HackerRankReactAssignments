import { Routes, Route, useNavigate } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ItemList from "./components/ItemList";
import FeedbackSystem from "./components/CodeReviewFeedback";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<ContactForm onNext={() => navigate("/itemlist")} />} />
      <Route path="/itemlist" element={<ItemList onNext={() => navigate("/feedbacksystem")} />} />
      <Route path="/feedbacksystem" element={<FeedbackSystem onNext={() => navigate("/")} />} />
    </Routes>
  );
}

export default App;