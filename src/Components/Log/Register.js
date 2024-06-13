// import React, { useState } from "react";
// import logStyles from "./log.module.css";
// const Register = () => {
//   const [user, setUser] = useState({
//     uname: ``,
//     pw: ``,
//     email: ``,
//     address: ``,
//     phone: ``,
//   });
//   const [cpw, setCpw] = useState(``);
//   const [err, setEr] = useState(false);
//   const [pwErr, setPwErr] = useState(false);
//   const [allUsers , setAllUsers] = useState([])
//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (
//       user.uname === "" &&
//       user.pw === "" &&
//       user.email === "" &&
//       user.address === "" &&
//       user.phone === "" &&
//       cpw === ""
//     ) {
//       setEr(true);
//     } else {
//       setEr(false);
//       if (user.pw !== cpw) {
//         setPwErr(true);
//       } else {
//         setPwErr(false);
//         allUsers.push(user)
//         window.localStorage.setItem('users' , JSON.stringify(allUsers))
//       }
//     }
//   };
//   return (
//     <section className={logStyles.logContainer}>
//       <form onSubmit={(e) => handleRegister(e)}>
//         <h1>Register</h1>
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
//         {pwErr ? <span>Password not match</span> : undefined}

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={cpw}
//           onChange={(e) => setCpw(e.target.value)}
//         />
//         {pwErr ? <span>Password not match</span> : undefined}
//         <input
//           type="text"
//           placeholder="Email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={user.address}
//           onChange={(e) => setUser({ ...user, address: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           value={user.phone}
//           onChange={(e) => setUser({ ...user, phone: e.target.value })}
//         />
//         <button>Register</button>
//       </form>
//     </section>
//   );
// };

// export default Register;

import React, { useState } from "react";
import logStyles from "./log.module.css";
import axios from "axios";
const Register = () => {
  const [user, setUser] = useState({
    uname: ``,
    pw: ``,
    email: ``,
    address: ``,
    phone: ``,
  });
  const [cpw, setCpw] = useState(``);
  const [done, setDone] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/users`, user)
      .then((res) => {
        if (res.statusText === "Created") {
          setDone(true);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className={logStyles.logContainer}>
      <form onSubmit={(e) => handleRegister(e)}>
        <h1>Register</h1>

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={cpw}
          onChange={(e) => setCpw(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <button>Register</button>
      </form>
      {done ? (
        <div className={logStyles.done}>
          <div className={logStyles.content}>
            <h1>Registered Successfully</h1>
            <button onClick={()=> setDone(false)}>Done</button>
          </div>
        </div>
      ) : undefined}
    </section>
  );
};

export default Register;
