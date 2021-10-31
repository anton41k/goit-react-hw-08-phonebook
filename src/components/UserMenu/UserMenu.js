import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { getUserName, logOut } from "../../redux/auth";
import { stringAvatar } from "../../utils/avatar";
import { Button } from "../../common.styled";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={css.container_user}>
      <Stack direction="row" spacing={2}>
        {name && <Avatar {...stringAvatar(name)} />}
      </Stack>
      <div className={css.thumb_greetings}>
        <div className={css.greetings}>
          <span className={css.welcome}>Welcome,</span>
          <span className={css.user_name}>{name}</span>
        </div>
        <Button
          textShadowColor={"var(--color-white)"}
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}
