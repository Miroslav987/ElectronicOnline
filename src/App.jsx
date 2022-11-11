import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AuthContextProvider from "./context/AuthContextProvider";
import BasketContextProvider from "./context/BasketContextProvider";
import ChosenContextProvider from "./context/ChosenContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <ChosenContextProvider>
        <BasketContextProvider>
          <ProductContextProvider>
            <NavBar />
            <MainRoutes />
            <Footer />
          </ProductContextProvider>
        </BasketContextProvider>
      </ChosenContextProvider>
    </AuthContextProvider>
    // </CommentsContextProvider>
  );
};

export default App;
