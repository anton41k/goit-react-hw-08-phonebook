import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";

import {
  addContact,
  getFiltredContactsList,
  getLoadingStatus,
  getAddNameContact,
} from "../../redux/contacts";
import { Button, Input, Label, FormIcon } from "../../common.styled";
import { setAddNameContact } from "../../redux/contacts/slices";
import css from "./Form.module.css";

function Form({ closeModal }) {
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingStatus);

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, number } = ev.currentTarget.elements;
    const newContact = { name: name.value, number: number.value };

    const found = contacts.find((contact) => contact.name === name.value);
    if (found) {
      toast.error(`${name.value} is already in contacts`);
      ev.currentTarget.reset();
      return;
    }
    console.log(name.value);
    dispatch(setAddNameContact(name.value));

    try {
      dispatch(addContact(newContact));
      toast.success(`Contact ${newContact.name} created`);
      ev.currentTarget.reset();
      closeModal();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <div className={css.thumb_input}>
          <FormIcon>
            <FaUser size={16} />
          </FormIcon>
          <Input
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </div>
      </Label>

      <Label htmlFor={numberInputId}>
        Number
        <div className={css.thumb_input}>
          <FormIcon>
            <FaPhoneAlt size={16} />
          </FormIcon>
          <Input
            id={numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The phone number must be numbers and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
      </Label>
      <Button
        textShadowColor={"var(--color-white)"}
        margin={"10px 0"}
        type="submit"
        disabled={isLoading}
      >
        <ClipLoader loading={isLoading} size={12} color={"white"} />{" "}
        {` Add contact`}
      </Button>
    </form>
  );
}

export default Form;
