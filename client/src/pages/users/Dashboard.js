import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/authContext'

const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout title={'User Dashboard'}>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9 mt-3" style={{ marginTop: "15px!important" }}>
                        <div className="card p-3">
                            <h4><small class="text-body-secondary">Name : </small>{auth?.user?.name}</h4>
                            <h4><small class="text-body-secondary">Email : </small>{auth?.user?.email}</h4>
                            <h4><small class="text-body-secondary">Contact : </small>{auth?.user?.phone}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard