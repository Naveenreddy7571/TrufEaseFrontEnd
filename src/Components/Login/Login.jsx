import React, { useState } from "react";
import styles from "./Login.module.css";

function Login() {
const [loginInfo, setLoginInfo] = useState({
role: "",
email: "",
password: "",
});

const handleChange = (e) => {
setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
console.log(loginInfo);
};

return (
<div className={styles.login}>
<div className={styles.login_container}>
<h3>User Login</h3>
<div className={styles.form}>
<form className={styles.login_form} onSubmit={handleSubmit}>
<label className={styles.label} htmlFor="roles">
User Role:
</label>
<br />
<select
           id="roles"
           name="role"
           value={loginInfo.role}
           onChange={handleChange}
         >
<option value="">Select role</option>
<option value="USER">Customer</option>
<option value="ADMIN">Admin</option>
</select>
<label className={styles.label}>Email ID</label>
<br />
<input
           className={styles.input}
           type="text"
           name="email"
           value={loginInfo.email}
           onChange={handleChange}
         />
<br />
<label className={styles.label}>Password</label>
<br />
<input
           className={styles.input}
           type="password"
           name="password"
           value={loginInfo.password}
           onChange={handleChange}
         />
<br />
<button id="login-btn" type="submit">
Login
</button>
</form>
</div>
</div>
</div>
);
}

export default Login;