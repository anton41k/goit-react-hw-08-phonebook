import { Toaster } from "react-hot-toast";
import { useState } from "react";

import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsView.module.css";

export default function ContactsView() {
  const [toggle, setToggle] = useState(false);

  const handleToggleOnClick = () => setToggle(!toggle);

  return (
    <div>
      {toggle && (
        <Modal closeModal={handleToggleOnClick}>
          <h1 className={css.title_phonebook}>Phonebook</h1>
          <Form closeModal={handleToggleOnClick} />
        </Modal>
      )}

      <ContactList closeModal={handleToggleOnClick} />
    </div>
  );
}
