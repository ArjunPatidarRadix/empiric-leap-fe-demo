import React, { useEffect, useState } from "react";
import "./Authentication.css";
import { BASE_URL } from "../../utils/contants";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/util";

const AuthenticationScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "Test",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "Test", email: "", password: "", confirmPassword: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log("Login:", formData);
      (async () => {
        try {
          const rawResponse = await fetch(`${BASE_URL}/user/login/`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          const content = await rawResponse.json();

          console.log("content: ", content);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      if (formData.password !== formData.confirmPassword) {
        console.log("Passwords do not match");
        return;
      }
      // Handle sign-up logic
      console.log("Sign Up:", formData);

      (async () => {
        const rawResponse = await fetch(`${BASE_URL}/user/signup/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const content = await rawResponse.json();

        console.log(content);
      })();
    }
  };

  return (
    <div className="auth-container">
      <h2 className="title">{isLogin ? "Login" : "Sign Up"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="input-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {!isLogin && (
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <button type="submit" className="btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={toggleForm} className="toggle-btn">
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthenticationScreen;
