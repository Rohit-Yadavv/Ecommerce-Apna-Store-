import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={"Privacy Policy - Apna Store"}>
            <section className="container">
                <h1>Privacy Policy for Apna Store</h1>

                <h3>Effective Date: 27/07/2023</h3>

                <p>Welcome to Apna Store. We are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our mobile application [Your Ecommerce App Name] ("App").</p>

                <h2>Information We Collect:</h2>
                <p>When you create an account or interact with our App, we may collect personal information, including your name, email address, postal address, phone number, and payment details. We also collect usage data to improve our services, such as the pages you visit, products you view, and features you access. Additionally, we collect device information, like your device's unique identifier and IP address, for diagnostic purposes and to provide personalized experiences. We use cookies and similar technologies to enhance your App experience.</p>

                <h2>How We Use Your Information:</h2>
                <p>We use your information to process orders, provide customer support, and enhance the App's functionality. By analyzing usage data, we personalize your shopping experience and provide relevant product recommendations. We may send you transactional emails, order updates, and promotional materials related to the App. You can opt-out of marketing communications.</p>

                <h2>Data Sharing and Disclosure:</h2>
                <p>We may share your information with trusted third-party service providers to assist us in operating the App, processing payments, and conducting analytics. In the event of a business transfer, your information may be transferred to the acquiring entity. We may disclose your information to comply with the law or protect our rights and interests.</p>

                <h2>Data Security:</h2>
                <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of data transmission over the internet or electronic storage is 100% secure.</p>

                <h2>Children's Privacy:</h2>
                <p>Our services are not intended for individuals under the age of 16, and we do not knowingly collect personal information from children.</p>

                <h2>Your Choices and Rights:</h2>
                <p>You can review and update your account information within the App. If you wish to delete your account, please contact us. You have the option to opt-out of receiving marketing communications. You have the right to access and correct any personal information we hold about you.</p>

                <h2>Changes to this Privacy Policy:</h2>
                <p>We may update or modify this Privacy Policy at any time, and the revised policy will be effective when posted in the App. Your continued use of the App after the changes have been posted constitutes your acceptance.</p>

                {/* <h2>Contact Us:</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:contact@email.com">contact@email.com</a>.</p> */}

                <p>Thank you for trusting Apna Store. We are committed to protecting your privacy and providing you with a secure shopping experience.</p>
            </section>
        </Layout>
    );
};

export default Policy;