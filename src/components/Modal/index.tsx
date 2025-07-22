import React from "react";
import styles from "./index.module.css";

type Props = {
	children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
	const closeModal = (e: React.MouseEvent): void => {
		const modal = document.querySelector("#modal");
		modal!.classList.add("hide");
		document.body.style.overflow = "";
	};

  return (
		<div id="modal" className="hide">
		  <div className={styles.fade} onClick={closeModal}></div>
			<div className={styles.modal}>
				<h2>Edição de Tarefa</h2>
				{children}
			</div>
		</div>
  )
}

export default Modal;