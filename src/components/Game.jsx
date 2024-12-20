import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {
    const navigate = useNavigate();
    const [isChecking, setIsChecking] = useState(true); // Trạng thái kiểm tra
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser && parsedUser.email) {
                    setUser(parsedUser); // Lưu trạng thái người dùng
                } else {
                    throw new Error("Invalid user data");
                }
            } catch (error) {
                console.error("Error parsing user data:", error);
                localStorage.removeItem("user");
                navigate("/");
            }
        } else {
            navigate("/");
        }
        setIsChecking(false); // Kết thúc kiểm tra
    }, [navigate]);

    if (isChecking) {
        return <div>Loading...</div>; // Hiển thị "Loading" trong khi kiểm tra
    }

    return (
        <div>
            <h1>Welcome to the Game, {user.email}!</h1>
            <p>This is the game interface.</p>
        </div>
    );
};

export default Game;
