import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers, searchByEmail } from "../../../redux/actions/UsersAction";

function Searchbar() {
  const [emailSearch, setEmailSearch] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setEmailSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (emailSearch === "") {
      dispatch(getAllUsers());
    } else {
      dispatch(searchByEmail(emailSearch.toLowerCase()));
      setEmailSearch("");
      e.target.placeholder = "Search...";
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        onChange={handleChange}
        value={emailSearch.toLowerCase()}
        placeholder="Buscar por email"
      />
    </form>
  );
}

export default Searchbar;
