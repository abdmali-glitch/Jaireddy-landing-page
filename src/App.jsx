import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<div className='min-h-screen flex items-center justify-center text-foreground'>Auth Page</div>} />
        <Route path="/vision" element={<div className='min-h-screen flex items-center justify-center text-foreground'>Vision Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
