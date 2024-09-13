import React from "react";

const LegalNotice = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mt-10 mb-6">Legal Notice</h1>
            <h2 className="text-2xl font-semibold mb-4">Website Publisher</h2>
            <p className="mb-4">
                <strong>Website Name:</strong> [Your Website Name] <br />
                <strong>Publisher:</strong> [Your Name or Entity Name] <br />
                <strong>Address:</strong> [Your Address or Entity Address]{" "}
                <br />
                <strong>Email:</strong> [Your Contact Email] <br />
                <strong>Phone:</strong> [Your Phone Number, if you wish to
                provide it]
            </p>
            <h2 className="text-2xl font-semibold mb-4">Hosting</h2>
            <p className="mb-4">
                <strong>Hosting Provider:</strong> [Your Hosting Provider Name]{" "}
                <br />
                <strong>Hosting Provider Address:</strong> [Hosting Provider's
                Address] <br />
                <strong>Hosting Provider Phone:</strong> [Hosting Provider's
                Phone Number]
            </p>
            <h2 className="text-2xl font-semibold mb-4">
                Intellectual Property
            </h2>
            <p className="mb-4">
                The content on this website (texts, images, logos, etc.) is the
                exclusive property of [Your Entity Name or Yourself] unless
                otherwise stated. Any reproduction, distribution, modification,
                adaptation, retransmission, or publication, even partial, of
                these elements is strictly prohibited without our prior written
                consent.
            </p>
            <h2 className="text-2xl font-semibold mb-4">
                Limitation of Liability
            </h2>
            <p className="mb-4">
                The information contained on this site is as accurate as
                possible and the site is periodically updated, but it may
                contain inaccuracies, omissions, or gaps. If you notice any
                deficiency, error, or what appears to be a malfunction, please
                report it to us by email, describing the problem as precisely as
                possible.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Hyperlinks</h2>
            <p className="mb-4">
                Our website may contain hyperlinks to other websites. We have no
                control over the content of these external sites and disclaim
                any responsibility in this regard.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-4">
                This site and its legal notices are subject to [French or other,
                according to your location] law. In the event of a dispute, and
                after the failure of any attempt to find an amicable solution,
                the courts [jurisdiction applicable to your location] will have
                exclusive jurisdiction to hear the case.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-4">
                For any questions related to the legal notices, you can contact
                us at the following email address: [Your Contact Email].
            </p>
        </div>
    );
};

export default LegalNotice;
