// import classes from "./Login.module.css";
// // import { CaribLogo } from "../../utils/CaribLogo";

// import carib from "../../../utils/carib.svg";
// import { useState } from "react";
// import { images } from "../../../utils/Images";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const handleClick = (e) => {
//     e.preventDefault();
//   };
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [password, setPassword] = useState(false);
//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const navigate = useNavigate();

//   const onLogin = () => {
//     navigate("/");
//   };

//   const onSignup = () => {
//     navigate("/signup");
//   };
//   return (
//     <>
//       <div className={classes.header}>
//         <div className={classes.logo}>
//           <img className={classes.image} src={carib} alt="caribE logo"></img>
//         </div>
//       </div>
//       <div className={classes.loginContainer}>
//         <form className={classes.loginBox} onSubmit={handleClick}>
//           <div className={classes.loginHeading}>Login</div>
//           <div>
//             <div className={classes.inputContainer}>
//               <label className={classes.labels} htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 placeholder="Email"
//                 type="email"
//                 required
//                 className={classes.loginInput}
//               />
//               {/* <i className="fas fa-eye"></i> */}
//             </div>
//             <div className={classes.inputContainer}>
//               <label className={classes.labels} htmlFor="password">
//                 Password
//               </label>

//               <input
//                 id="password"
//                 placeholder="Password"
//                 type={passwordVisible ? "text" : "password"}
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className={classes.loginInput}
//               />

//               <img
//                 onClick={togglePasswordVisibility}
//                 src={passwordVisible ? images.Showeye : images.Hideeye}
//                 className={classes.PassEye}
//               ></img>
//             </div>
//             <div className={classes.forget}>forget password?</div>
//           </div>
//           <div className={classes.buttonWrapper}>
//             <button
//               onClick={onLogin}
//               className={classes.loginButton}
//               type="submit"
//               disabled={false}
//             >
//               Log In
//             </button>
//           </div>
//           <span onClick={onSignup} className={classes.signup}>
//             Create a new account?
//             <span
//               onClick={onSignup}
//               style={{ fontWeight: "bold", color: "red" }}
//             >
//               Signup
//             </span>
//           </span>
//         </form>
//         {/* </div> */}
//       </div>
//     </>
//   );
// }

// .loginContainer{
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #f0f2f5;
//     height: 90vh;
//   }

//   .header {
//     background-color: #ff3c3c;
//     top: 0;
//     left: 0;
//     right: 0;
//     z-index: 100;
//     text-align: center;
//     padding-top: 2vw;
//     padding-bottom: 2vw;
//     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .image{
//     width: 20vw;
//     height:auto
//   }

//   .loginHeading{
//     font-size: 1.3vw;
//     font-weight: bold;
//   }

//   .loginWrapper {
//     flex: 1;
//     display: flex;
//     justify-content: center;

//   }

//   .loginRight {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     margin-top: 5%;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .loginLogo {
//     font-size: 50px;
//     font-weight: 800;
//     color: #ff3c3c;
//     margin-bottom: 10px;
//   }

//   .loginDesc {
//     font-size: 24px;
//   }

//   .loginBox {
//     padding: 2vw;

//     width: 22vw;
//     height: 25vw;
//     background-color: white;
//     border-radius: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }

//   .loginInput {
//     margin-bottom: 20px;
//     height: 2vw;
//     border-radius: 5px;
//     border: .1vw solid rgb(225, 225, 225);
//     /* border:none; */
//     font-size: .8vw;
//     padding-left: 2vw;
//   }

//   .loginInput:focus {
//     outline: none;
//     background-color: #d1d1d1;
//   }

//   .buttonWrapper{
//     display: flex;
//     width: 100%;
//     justify-content: center;
//     /* flex: 1; */
//   }

//   .loginButton {
//     margin-top: 1.5vw;
//     height: 2.5vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     border: none;
//     background-color: #ff3c3c;
//     color: white;
//     font-size: 1vw;
//     font-weight: 500;
//     cursor: pointer;
//     padding-top: 0.7vw;
//     padding-bottom: 0.7vw;
//     width: 21vw;
//   }

//   .loginButton:hover,
//   .loginButton:active {
//     background-color: #762020;

//   }

//   .loginButton:focus {
//     outline: none;
//   }

//   .loginButton:disabled {
//     cursor: not-allowed;
//   }

//   .signup {
//     text-align: center;
//     color: #000000;
//     text-decoration: underline;
//     font-size: 1vw;
//   }

//   .forget {
//     text-align: end;
//     color: #ff3c3c;
//     text-decoration: underline;
//     margin: 0;
//     font-size: .8vw;

//   }

//   .labels {
//   font-size: .8vw;
//     font-weight: 700;
//     text-align: start;
//     margin-bottom: .5vw;
//     font-family: 'Poppins', sans-serif;

//   }

//   .inputContainer {
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     height: 5.5vw;
//   }

//   #password {

//   }

//   .logo {
//     width: 20vw;
//     height: auto;
//   }

//   .PassEye {
//     height: auto;
//     width: 1vw;
//     cursor: pointer;
//     position: absolute;
//     right: 1vw;
//     top: 2.4vw;

//   }

//   @media screen and (max-width:150px) {

//     .loginHeading{
//       font-size: 40px;
//       font-weight: bold;
//     }

//     .loginBox{

//       width: 500px;
//       height: 580px;
//     }
//   .labels{
//     font-size: 20px;
//   }

//   .loginInput {
//     margin-bottom: 20px;
//     height: 60px;
//     border-radius: 5px;
//     border: 0.1vw solid rgb(225, 225, 225);

//     font-size: 26px;
//     padding-left: 2vw;
//   }

//   .forget{
//     font-size: 25px;
//   }

//   .Login_loginButton__oLVho {
//     margin-top: 10px;
//     height: 80px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: none;
//     background-color: #ff3c3c;
//     color: white;
//     font-size: 32px;
//     font-weight: 500;
//     cursor: pointer;
//     padding-top: 10px;
//     padding-bottom: 10px;
//     width: 100%;
//   }

//   }
