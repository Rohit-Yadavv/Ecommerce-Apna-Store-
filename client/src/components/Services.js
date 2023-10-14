import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "../styles/services.css";

const Services = () => {
    return (
        <div className="servicesWrapper">
            <div className="services">
                <div className="services-1">
                    <div>
                        <TbTruckDelivery className="icon" />
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                </div>

                <div className="services-2">
                    <div className="services-2col">
                        <div>
                            <MdSecurity className="icon" />
                            <h3>Non-contact Shipping</h3>
                        </div>
                    </div>
                    <div className="services-2col">
                        <div>
                            <GiReceiveMoney className="icon" />
                            <h3>Money-back Guaranteed</h3>
                        </div>
                    </div>
                </div>

                <div className="services-3">
                    <div>
                        <RiSecurePaymentLine className="icon" />
                        <h3>Super Secure Payment System</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Services;
