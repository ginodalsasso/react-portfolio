import React from "react";

const PrivacyPolicy = () => {
    return (
    <div className="container mx-auto mt-[50px] p-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">
                Your privacy is important to us. This privacy policy document outlines the types of personal information that is received and collected and how it is used.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
                We do not collect any personal information without your consent. The only information we collect is what you voluntarily provide through our contact form. This includes:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Your name</li>
                <li>Your email address</li>
                <li>The content of your message</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">How We Use Collected Information</h2>
            <p className="mb-4">
                The information you provide through the contact form is used solely to respond to your inquiry. This information is not stored in a database and is used only to reply to you via email.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Personal Information</h2>
            <p className="mb-4">
                We do not share, sell, or rent any of your personal information to third parties. The information you provide to us is strictly confidential.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Information Security</h2>
            <p className="mb-4">
                We take measures to ensure the security of your personal information. However, since information transmission over the internet is never completely secure, we cannot guarantee absolute security of the information transmitted through our contact form.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="mb-4">
                Our website does not use cookies to collect visitor information. We do not implement any tracking or personalization technology based on cookies.
            </p>
            <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
            <p className="mb-4">
                You have the right to contact us to:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Rectify or delete your personal information</li>
                <li>Obtain a copy of the personal information you provided to us</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
                We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at the following email address: [Your Contact Email].
            </p>
        </div>
    );
};

export default PrivacyPolicy;
