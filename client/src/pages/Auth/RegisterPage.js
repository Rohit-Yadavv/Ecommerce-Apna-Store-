import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/authStyles.css'
const RegisterPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address, answer });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            }
            else { toast.error(res.data.message) };

        } catch (error) {
            toast.error("something went wrong");

        }
    }
    return (
        <Layout title="Register-EcommerceApp">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>REGISTER NOW</h4>
                    <div className="mb-3">
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' type="password" className="form-control" id="password" required />
                    </div>
                    <div className="mb-3">
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your Phone' type="text" className="form-control" id="phone" required />
                    </div>
                    <div className="mb-3">
                        <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter Your Address' type="text" className="form-control" id="address" required />
                    </div>
                    <div className="mb-3">
                        <input value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='What is Your favorite sports' type="text" className="form-control" id="answer" required />
                    </div>

                    <button placeholder='Enter Your submit' type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </Layout>
    )
}
export default RegisterPage