import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const Spinner = ({ path }) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation()
    useEffect(() => {
        // interval will run after 1 sec
        const interval = setInterval(() => {
            setCount((prevalue) => --prevalue)
        }, 1000);

        count === 0 && navigate(path, {
            state: location.pathname
        })
        return () => clearInterval(interval);
    }, [count, navigate, location, path])

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            <h1 className='text-center'>Redirecting You in {count} seconds</h1>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner