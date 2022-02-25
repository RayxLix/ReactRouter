import { Link, Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Link
        to="/"
        style={{
          fontSize: "32px",
          color: "#000",
          textDecoration: "none",
          fontWeight: "600"
        }}
      >
        BookKeeper
      </Link>
      <nav style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}>
        <Link to="invoices">Invoices</Link>
        {"  "}|{"  "}
        <Link to="expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
