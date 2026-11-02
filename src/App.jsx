import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import WhatsappFlutuante from "./components/WhatsappFlutuante/WhatsappFlutuante";
import "./App.css";

const App = () => (
  <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <Home />
    <Footer />
    <WhatsappFlutuante />
  </>
);

export default App;
