import React, { useState } from "react";

export default function Registration() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div>
      <form style={{ display: "inline-grid" }}>
        <label>First Name:</label>
        <input
          type="text"
          name="fname"
          onChange={handleChange}
          value={state.fname}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lname"
          onChange={handleChange}
          value={state.lname}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
        <label>Mobile Number: </label>
        <input
          type="text"
          name="mobile"
          onChange={handleChange}
          value={state.mobile}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={state.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
