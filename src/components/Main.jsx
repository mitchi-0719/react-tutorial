import Aside from "./Aside";
import Contents from "./Contents";
import "../styles/Main.module.css";

export default function Main() {
  return (
    <main>
      <Contents />
      <Aside />
    </main>
  );
}
