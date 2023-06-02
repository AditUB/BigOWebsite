import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Members } from "./components/Members";
import { NavBar } from "./components/NavBar";
import { Login } from "./components/Login";

function App() {
  document.title = "BigO";

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Events />
      <Members />
      <Contact />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
