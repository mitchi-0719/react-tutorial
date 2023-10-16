import Gallery from "./Gallery";
import "../styles/Aside.module.css"

export default function Side() {
  return (
    <aside>
      <h2>Favourite photos</h2>
      <Gallery />
    </aside>
  );
}