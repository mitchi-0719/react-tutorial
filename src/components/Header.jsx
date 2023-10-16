import Navigate from "./Navigate";
import "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className="header">
        <h1 className="h1">Birdwatching</h1>
        <img src="dove.png" alt="a simple dove logo" className="img" />
      </div>
      <Navigate />
    </header>
  );
}
