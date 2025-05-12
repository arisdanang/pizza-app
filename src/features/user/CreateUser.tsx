import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(username);

    if (!username) return;

    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Welcome, Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your Full Name"
        className="input mb-8 w-72"
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
};

export default CreateUser;
