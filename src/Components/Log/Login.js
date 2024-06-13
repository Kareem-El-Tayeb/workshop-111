// import React, { useEffect, useState } from "react";
// import logStyles from "./log.module.css";
// import { useDispatch } from "react-redux";
// import { cartSlice } from "../Redux/cartSlice";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [user, setUser] = useState({
//     uname: ``,
//     pw: ``,
//   });
//   const [users, setUsers] = useState([]);
//   const [err, setErr] = useState(false);
//   useEffect(() => {
//     if (window.localStorage.getItem("users") !== null) {
//       setUsers(JSON.parse(window.localStorage.getItem("users")));
//     }
//   }, []);
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [found, setFound] = useState({});
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (user.uname === "" && user.pw === "") {
//       setErr(true);
//     } else {
//       setErr(false);
//       for (let i = 0; i < users.length; i++) {
//         if (users[i].uname === user.uname) {
//           if (users[i].pw === user.pw) {
//             dispatch(cartSlice.actions.login(user.uname))
//             navigate('/home')
//           }
//           break;
//         }
//       }

//       //   users.map((el) => {
//       //     if (el.uname === user.uname) {
//       //       if (el.pw === user.pw) {
//       //         setFound(el);
//       //         console.log("Welcome");
//       //       } else {
//       //         console.log("Password not match");
//       //       }
//       //     } else {
//       //       console.log("User not found");
//       //     }
//       //   });
//     }
//   };

//   return (
//     <section className={logStyles.logContainer}>
//       <form onSubmit={(e) => handleLogin(e)}>
//         <h1>Login</h1>
//         {err ? <span>Inputs are required</span> : undefined}
//         <input
//           type="text"
//           placeholder="Username"
//           value={user.uname}
//           onChange={(e) => setUser({ ...user, uname: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={user.pw}
//           onChange={(e) => setUser({ ...user, pw: e.target.value })}
//         />
//         <button>Login</button>
//       </form>
//     </section>
//   );
// };

// export default Login;
import React, { useEffect, useState } from "react";
import logStyles from "./log.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSlice } from "../Redux/cartSlice";

const Login = () => {
  const [user, setUser] = useState({
    uname: ``,
    pw: ``,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  });
  const handleLogin = (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (users[i].uname === user.uname) {
        if (users[i].pw === user.pw) {
          dispatch(cartSlice.actions.login(user.uname));
          navigate("/home");
        }
        break;
      } else {
        console.log("Not found");
        break;
      }
    }
  };
  return (
    <section className={logStyles.logContainer}>
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={user.uname}
          onChange={(e) => setUser({ ...user, uname: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.pw}
          onChange={(e) => setUser({ ...user, pw: e.target.value })}
        />
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
