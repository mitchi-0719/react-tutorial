import Navigate from "./Navigate";

export default function Header() {
  return (
    <header>
      <div>
        <h1 className="title">Birdwatching</h1>
        <img src="dove.png" alt="" />
      </div>
      <Navigate />
    </header>
  );
}
