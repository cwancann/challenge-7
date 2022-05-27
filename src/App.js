import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./component/pages/Main";
import Cari from "./component/pages/Cari";
import Header from "./component/Header";
import Best from "./component/Best";
import Testi from "./component/Testi";
import Why from "./component/Why";
import Biru from "./component/Biru";
import Faq from "./component/Faq";
import Login from "./component/pages/Login";
import SignUp from "./component/pages/Signup";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                compHeader={<Header />}
                compBest={<Best />}
                compWhy={<Why />}
                compBiru={<Biru />}
                compFaq={<Faq />}
                compTesti={<Testi />}
              />
            }
          />
          <Route path="/Cari" element={<Cari />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
