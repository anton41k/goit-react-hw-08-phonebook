import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { FaUserTie } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

import { deleteContact } from "../../redux/contacts";
import { Button } from "../../common.styled";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, addNameContact }) => {
  const dispatch = useDispatch();
  const handleOnDeleteBtn = (id, name) => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} deleted`);
  };

  return (
    <li
      className={`${
        addNameContact === name
          ? `${css.contact_item_add}`
          : `${css.contact_item_h}`
      } ${css.contact_item}`}
    >
      <div className={css.tumb_contact_data}>
        <div className={css.tumb_field}>
          <FaUserTie size={18} className={css.icon_contact} />
          <div className={`${css.contact_name} ${css.item_data}`}>{name}</div>
        </div>
        <div className={css.tumb_field}>
          <IoIosCall size={18} className={css.icon_contact} />
          <div className={`${css.contact_number} ${css.item_data}`}>
            {number}
          </div>
        </div>
      </div>
      <Button
        textShadowColor={"var(--color-pink)"}
        onClick={() => handleOnDeleteBtn(id, name)}
      >
        Delete
      </Button>
    </li>
  );
};

export default Contact;
