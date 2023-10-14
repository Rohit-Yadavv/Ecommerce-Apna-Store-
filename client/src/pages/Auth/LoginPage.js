import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../context/authContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
            if (res.data.success) {
                setAuth({
                    ...auth, user: res.data.user, token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || "/");
                toast.success(res.data.message);
            }
            else { toast.error(res.data.message) };

        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <Layout title="LogIn-EcommerceApp">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>LOGIN NOW</h4>
                    <div className="mb-3">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' type="password" className="form-control" id="password" required />
                    </div>
                    <div className="mb-3">
                        <button onClick={() => { navigate('/forget-password') }} type="button" className="btn btn-primary">Forgot Password</button>
                    </div>
                    <button placeholder='Enter Your submit' type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </Layout>
    )
}

export default LoginPage