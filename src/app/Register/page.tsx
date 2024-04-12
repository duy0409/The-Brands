"use client";
import React, { useState, ChangeEvent } from "react";
import Style from "../css/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Register = () => {
  const [showPassword1, setShowPassword1] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility1 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowPassword1(!showPassword1);
    setInputType1(showPassword1 ? "text" : "password");
  };

  const togglePasswordVisibility2 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowPassword2(!showPassword2);
    setInputType2(showPassword2 ? "text" : "password");
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
    setError("");
  };

  const handlePasswordChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
    setError("");
  };
  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  const handleSignUp = () => {
    if (!isValidEmail(email)) {
      setError("Invalid email address");
    } else if (password1 !== password2) {
      setError("Passwords do not match");
    } else {
      setError("success");
      (async () => {
        try {
          const response = await axios.post("/api/register", {
            email: email,
            password: password1,
          });
          const data = await response.data;
          console.log(data);
          if (data.isLogged == false) {
            alert("Sign Up Success");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      })();
    }
  };

  return (
    <div className={Style.RegisterPage}>
      <div className={Style.containerSignup}>
        <div className={Style.logoSignup}>
          <Link href="/">
            <Image
              className={Style.image}
              src="/FashionNews/logo.svg"
              alt="logo"
              width={190}
              height={40}
            />
          </Link>
        </div>
      </div>
        <div className={Style.SignupPage}>
          <div className={Style.form_wrapper_Signup}>
            <a id={Style.title}>Register</a>
            <form className={Style.bodyContentSignup}>
              <label htmlFor="email" className={Style.label}>
                Email:
              </label>
              <input
                className={Style.inputE}
                id="email"
                name="email"
                onChange={handleEmailChange}
              />
              <br />
              <label htmlFor="password" className={Style.label}>
                Password:
              </label>
              <div className={Style.fromPassword}>
                <input
                  className={Style.inputP}
                  type={inputType1}
                  id="password"
                  name="password"
                  onChange={handlePasswordChange1}
                />
                <button
                  className={Style.eye}
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? (
                    <Image
                      src="/login/eye.svg"
                      alt="eye"
                      width={22}
                      height={22}
                    />
                  ) : (
                    <Image
                      src="/login/eyeOff.svg"
                      alt="eye"
                      width={22}
                      height={22}
                    />
                  )}
                </button>
              </div>
              <br />
              <label htmlFor="confirmPassword" className={Style.label}>
                Confirm Password:
              </label>
              <div className={Style.fromPassword}>
                <input
                  className={Style.inputP}
                  type={inputType2}
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handlePasswordChange2}
                />
                <button
                  className={Style.eye}
                  onClick={togglePasswordVisibility2}
                >
                  {showPassword2 ? (
                    <Image
                      src="/login/eye.svg"
                      alt="eye"
                      width={22}
                      height={22}
                    />
                  ) : (
                    <Image
                      src="/login/eyeOff.svg"
                      alt="eye"
                      width={22}
                      height={22}
                    />
                  )}
                </button>
              </div>
            </form>
            {error && <div className={Style.error}>{error}</div>}
                  <br></br>  <br></br>
            <div>
             <button className={Style.btnSignUp} onClick={handleSignUp}>
            Sign up
            </button>
        </div>
        <div className={Style.linkHere}>
          <a>Already have an account? </a>
          <Link href="/Login" id={Style.here}>
            {" "}
            Login
          </Link>
        </div>
          </div>
        </div>     
      </div>
  );
};
export default Register;
