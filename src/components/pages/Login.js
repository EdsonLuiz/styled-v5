import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Pagelayout, Input, PasswordInput, Button } from "components/common";

const Form = styled.form`
  width: 100%;
  /* max-width: 400px; */
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  color: #333335;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 0.05rem 0;
  }
`;

let timeout;

export const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Pagelayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button large type="submit" disabled={loading}>
          {loading ? `Loading...` : `Login`}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">OR</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </Pagelayout>
  );
};
