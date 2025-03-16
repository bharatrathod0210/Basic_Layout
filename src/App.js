import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <AppRoutes setUser={setUser} />
    </BrowserRouter>
  );
}

export default App;
