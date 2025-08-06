import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Shri Sigma Hospitals - Best Hospital in Madhapur Hyderabad',
    description: 'Read our privacy policy to understand how Shri Sigma Hospitals collects, uses, and protects your personal information and medical data.',
    keywords: 'privacy policy, data protection, medical privacy, Shri Sigma Hospitals, Madhapur, Hyderabad',
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "February 8, 2025";

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
                <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-8">
                    
                    {/* Introduction */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Your privacy is important to us. This policy explains how we collect, use, and protect 
                            your information when you visit our website or use our services.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Personal information (name, email, phone number)</li>
                            <li>Medical information (when voluntarily provided)</li>
                            <li>Website usage data (IP address, browser type, pages visited)</li>
                            <li>Device information (device type, operating system)</li>
                        </ul>
                    </section>

                    {/* How We Use Information */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We use your information to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Provide and improve our healthcare services</li>
                            <li>Communicate with you about appointments and services</li>
                            <li>Send important updates and notifications</li>
                            <li>Improve our website and user experience</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Information Sharing</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We may share your information with:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Healthcare providers involved in your care</li>
                            <li>Service providers who help us operate our website</li>
                            <li>Legal authorities when required by law</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            We do not sell your personal information to third parties.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We implement appropriate security measures to protect your information against unauthorized 
                            access, alteration, disclosure, or destruction. However, no method of transmission over the 
                            internet is 100% secure.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt out of marketing communications</li>
                            <li>File a complaint about our data practices</li>
                        </ul>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Cookies</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We use cookies to improve your browsing experience and analyze website traffic. 
                            You can control cookie settings through your browser preferences.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this privacy policy from time to time. Changes will be posted on this page 
                            with an updated revision date.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h2>
                        <p className="text-gray-700 mb-3">
                            If you have questions about this privacy policy, please contact us:
                        </p>
                        <div className="space-y-1 text-gray-700 text-sm">
                            <p className="font-medium">Shri Sigma Hospitals</p>
                            <p>Beside Karachi Bakery, Madhapur</p>
                            <p>HUDA Techno Enclave, HITEC City</p>
                            <p>Hyderabad, Telangana - 500081</p>
                            <p>Phone: <a href="tel:+918977763308" className="text-blue-600 hover:text-blue-800">+91 89777 63308</a></p>
                            <p>Email: <a href="mailto:info@shrisigmahospitals.com" className="text-blue-600 hover:text-blue-800">info@shrisigmahospitals.com</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}