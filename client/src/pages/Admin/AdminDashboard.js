import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/authContext";
const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 mt-3" style={{ marginTop: "15px!important" }}>
                        <div className="card p-3">
                            <h4><small className="text-body-secondary"> Admin Name :</small>{auth?.user?.name}</h4>
                            <h4><small className="text-body-secondary">Admin Email : </small>{auth?.user?.email}</h4>
                            <h4><small className="text-body-secondary">Admin Contact : </small>{auth?.user?.phone}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;