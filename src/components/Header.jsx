import Navigate from "./Navigate";
import "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div>
        <h1>Birdwatching</h1>
        <img src="dove.png" alt="a simple dove logo" />
      </div>
      <Navigate />
    </header>
  );
}
