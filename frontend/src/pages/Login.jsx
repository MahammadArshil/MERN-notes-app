import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            if (response.data.success) {
                login(response.data.user);
                localStorage.setItem("token", response.data.token);
                navigate('/');
                toast.success("Successfully Login");
            }
        } catch (error) {
            console.log(error);
            toast.error("Can't Log in!");
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="border shadow p-6 w-full max-w-sm bg-white">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            value={email} onChange={(e) => { setEmail(e.target.value) }}
                            className="w-full px-3 py-2 border"
                            type="email" placeholder="Enter Email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            value={password} onChange={(e) => { setPassword(e.target.value) }}
                            className="w-full px-3 py-2 border"
                            type="password" placeholder="*******" required />
                    </div>
                    <div className="mb-4">
                        <button type="submit"
                            className="w-full bg-teal-600 text-white py-2">Login</button>
                        <p className="text-center">
                            Don&apos;t Have Account? <Link to={'/register'}>Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
