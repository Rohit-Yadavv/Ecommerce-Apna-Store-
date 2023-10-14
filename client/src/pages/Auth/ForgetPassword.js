import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const ForgetPassword = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forget-password`, { email, newPassword, answer });
            if (res.data.success) {
                navigate("/");
                toast.success(res.data.message);
            }
            else { toast.error(res.data.message) };

        } catch (error) {
            toast.error(error.response.data.message);
        }
    }


    return (
        <Layout title="ForgetPassword - EcommerceApp">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>Reset Password</h4>
                    <div className="mb-3">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter Your New Password' type="newpassword" className="form-control" id="password" required />
                    </div>
                    <div className="mb-3">
                        <input value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='What is Your Favorite Sports?' type="text" className="form-control" id="answer" required />
                    </div>

                    <button placeholder='Enter Your submit' type="submit" className="btn btn-primary">Reset</button>
                </form>
            </div>
        </Layout>
    )
}

export default ForgetPassword