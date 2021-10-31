import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";

import {
  fetchContacts,
  getFiltredContactsList,
  getLoadingStatus,
  getAddNameContact,
} from "../../redux/contacts";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

const ContactList = ({ closeModal }) => {
  const isLoading = useSelector(getLoadingStatus);
  const contacts = useSelector(getFiltredContactsList);
  const addNameContact = useSelector(getAddNameContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LoaderComponent />}
      {!isLoading && (
        <div
          className={`${
            contacts.length ? css.icon_add_left : css.icon_add_center
          } ${css.icon_add_user}`}
          onClick={closeModal}
        >
          <FaUserPlus size={22} />
        </div>
      )}
      <ul className={css.contact_list}>
        {contacts?.map((contact) => (
          <Contact
            key={contact.id}
            {...contact}
            addNameContact={addNameContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
