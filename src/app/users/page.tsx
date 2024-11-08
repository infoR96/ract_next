"use client";

import React from "react";

import UserList from "../components/data/UserList";
import RegisterForm from "../components/users/RegisterForm";
import LoginForm from "../components/users/LoginForm";

const CsvUploader: React.FC = () => {
 

  return (
    <div>
      <UserList />
      <LoginForm/>
      <RegisterForm />
    </div>
  );
};

export default CsvUploader;
