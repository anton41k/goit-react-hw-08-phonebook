import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

import { getFilterValue } from "../../redux/contacts";
import { setFilterValue } from "../../redux/contacts/slices";
import css from "./Filter.module.css";

import TextField from "@mui/material/TextField";

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <input
      className={css.filter_input}
      type="text"
      value={filter}
      placeholder="Search"
      onChange={(event) => dispatch(setFilterValue(event.target.value))}
    />
  );
};

export default Filter;
