import React, { useState } from "react";
import styled from "styled-components";
import { Pagelayout, Input, PasswordInput } from "components/common";

const Form = styled.form`
  width: 100%;
  /* max-width: 400px; */
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  color: #333335;
  border-radius: 4px;
`;

export const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: [e.target.value],
    }));
  };

  return (
    <Pagelayout>
      <h1>Login</h1>
      <Form>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          type="text"
          name="username"
          placeholder="Username"
        />
        <PasswordInput
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
        />
      </Form>
    </Pagelayout>
  );
};
