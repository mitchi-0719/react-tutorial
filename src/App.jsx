import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/style.css"

export default function App() {
  return (
    <div className="global">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}