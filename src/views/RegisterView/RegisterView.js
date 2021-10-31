import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getUserIsLoggedIn, signUp, getAuthError } from "../../redux/auth";
import toast from "react-hot-toast";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

import { Button, Input, Label, FormIcon } from "../../common.styled";
import css from "./RegisterView.module.css";

export default function RegisterView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getUserIsLoggedIn);
  const isError = useSelector(getAuthError);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameInputId = uuidv4();
  const emailInputId = uuidv4();
  const passwordInputId = uuidv4();

  const paramState = { name: setName, email: setEmail, password: setPassword };

  const handleChange = (e) => {
    const { name, value } = e.target;
    return paramState[name](value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      return toast.error("💩 Please fill in all fields!");
    } else if (password.length < 7) {
      console.log(password.length);
      return toast.error("Passwords must be at least 7 characters long!");
    }

    dispatch(signUp({ name, email, password }));
    if (isError) {
      toast.error("User with this email has already been created!");
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
            onChange={handleChange}
            value={name}
          />
        </div>
      </Label>
      <Label htmlFor={emailInputId}>
        Email
        <div className={css.thumb_input}>
          <FormIcon>
            <MdOutlineAlternateEmail size={16} />
          </FormIcon>
          <Input
            id={emailInputId}
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            required
            onChange={handleChange}
            value={email}
          />
        </div>
      </Label>

      <Label htmlFor={passwordInputId}>
        Password
        <div className={css.thumb_input}>
          <FormIcon>
            <RiLockPasswordFill size={16} />
          </FormIcon>
          <Input
            id={passwordInputId}
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={password}
          />
        </div>
      </Label>
      <Button
        textShadowColor={"var(--color-white)"}
        margin={"10px 0"}
        type="submit"
        disabled={isLoading}
      >
        <ClipLoader loading={isLoading} size={12} color={"white"} /> {`sign up`}
      </Button>
    </form>
  );
}
