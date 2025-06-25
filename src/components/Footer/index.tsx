import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo</span> @ 2025 <br/>
        Desenvolvido por <a href="https://github.com/JPerluxo" target="_blank" rel="noreferrer">Jefferson Perluxo Clemente</a>
      </p>
    </footer>
  )
}

export default Footer;