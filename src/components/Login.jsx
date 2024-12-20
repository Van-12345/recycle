import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const [isChecking, setIsChecking] = useState(true); // Trạng thái kiểm tra đăng nhập
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            try {
                const parsedUser = JSON.parse(user);
                if (parsedUser && parsedUser.email) {
                    navigate("/game");
                }
            } catch (error) {
                console.error("Invalid user data:", error);
                localStorage.removeItem("user"); // Xóa dữ liệu lỗi
            }
        }
        setIsChecking(false); // Kết thúc kiểm tra
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem("user", JSON.stringify(user)); // Lưu thông tin người dùng
            navigate("/game");
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem("user", JSON.stringify(user)); // Lưu thông tin người dùng
            navigate("/game");
        } catch (error) {
            alert("Registration failed: " + error.message);
        }
    };

    if (isChecking) {
        return <div>Loading...</div>; // Hiển thị "Loading" trong khi kiểm tra trạng thái
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{isRegistering ? "Register" : "Login"}</h1>
            <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <br />
                <button type="submit">{isRegistering ? "Register" : "Login"}</button>
            </form>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
            </button>
        </div>
    );
};

export default Login;
