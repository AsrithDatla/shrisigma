import Link from 'next/link';

export const metadata = {
    title: 'Terms and Conditions | Shri Sigma Hospitals - Best Hospital in Madhapur Hyderabad',
    description: 'Read the terms and conditions for using Shri Sigma Hospitals website and services. Learn about our policies, user rights, and legal obligations.',
    keywords: 'terms and conditions, legal, privacy policy, Shri Sigma Hospitals, Madhapur, Hyderabad',
};

export default function TermsAndConditionsPage() {
    const lastUpdated = "February 8, 2025";

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Terms & Conditions
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
                            By accessing our website at shrisigmahospitals.com, you agree to these terms and conditions. 
                            If you do not agree, please do not use our website or services.
                        </p>
                    </section>

                    {/* Use of Website */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Use of Website</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            You may use our website for lawful purposes only. You agree not to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Transmit harmful or malicious content</li>
                            <li>Interfere with website security or functionality</li>
                            <li>Collect personal information about other users</li>
                        </ul>
                    </section>

                    {/* Medical Information */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Medical Information</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Information on our website is for educational purposes only and should not be considered medical advice. 
                            Always consult qualified healthcare professionals for medical diagnosis and treatment.
                        </p>
                    </section>

                    {/* Privacy */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Privacy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Your privacy is important to us. Please review our{' '}
                            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                                Privacy Policy
                            </Link>
                            {' '}to understand how we collect, use, and protect your information.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Shri Sigma Hospitals shall not be liable for any indirect, incidental, special, or consequential 
                            damages arising from your use of our website or services.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may modify these terms at any time. Changes will be effective immediately upon posting. 
                            Your continued use constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h2>
                        <p className="text-gray-700 mb-3">
                            If you have questions about these terms, please contact us:
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