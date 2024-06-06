import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter basename={"/user-review"}>
      <main className="main">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
