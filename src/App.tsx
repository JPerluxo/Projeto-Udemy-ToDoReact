import React from "react";
import styles from "./App.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
        <main className={styles.main}>
          <h2>Conteúdo...</h2>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
