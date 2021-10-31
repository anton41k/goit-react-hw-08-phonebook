import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({ closeModal, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  const handleOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleOnOverlayClick}>
      <div className={css.modal_content}>
        <button
          className={css.btn_close_modal}
          type="button"
          onClick={() => closeModal()}
        >
          <CgClose />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
