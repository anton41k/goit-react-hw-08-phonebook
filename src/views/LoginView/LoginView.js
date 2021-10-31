import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import ClipLoader from "react-spinners/ClipLoader";

import { logIn, getUserIsLoggedIn, getAuthError } from "../../redux/auth";
import { Button, Input, Label, FormIcon } from "../../common.styled";
import css from "./LoginView.module.css";

export default function LoginView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getUserIsLoggedIn);
  const isError = useSelector(getAuthError);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputId = uuidv4();
  const passwordInputId = uuidv4();
  const paramState = { email: setEmail, password: setPassword };

  const handleChange = (e) => {
    const { name, value } = e.target;
    return paramState[name](value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError && (email.trim() === "" || password.trim() === "")) {
      return toast.error("💩 Please fill in all fields!");
    }

    const data = dispatch(logIn({ email, password })).then((response) => {
      if (response.error) {
        toast.error("Wrong login or password!");
      }
    });
    console.log(data);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
        <ClipLoader loading={isLoading} size={12} color={"white"} /> {`Log In`}
      </Button>
    </form>
  );
}
