import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";

const { useState, useEffect } = require("react");
const { useAuth } = require("../../context/authContext");

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth(false);

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`, {
                headers: {
                    Authorization: auth?.token
                }
            })

            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck();
    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner path="/" />
}