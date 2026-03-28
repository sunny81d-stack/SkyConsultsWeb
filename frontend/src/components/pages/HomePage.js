import React from 'react';

const HomePage = () => {
    const features = [
        { icon: '🏠', title: 'Modern Design', description: 'We create stunning modern designs for your dream home.' },
        { icon: '✨', title: 'Quality Craftsmanship', description: 'Our team ensures the highest quality in every project.' },
        { icon: '🎨', title: 'Creative Solutions', description: 'We provide innovative solutions tailored to your needs.' }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to SkyConsults</h1>
            <p>Your ultimate destination for interior design and real estate solutions.</p>
            <section style={{ marginTop: '30px' }}>
                <h2>Why Choose Us?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '40px' }}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                <h2>Our Services</h2>
                <ul style={{ lineHeight: '2' }}>
                    <li>✓ Interior Design Consultation</li>
                    <li>✓ Real Estate Advisory</li>
                    <li>✓ Project Management</li>
                    <li>✓ Custom Design Solutions</li>
                    <li>✓ Vastu Compliance Design</li>
                    <li>✓ Space Planning</li>
                </ul>
            </section>
            <section style={{ marginTop: '30px', textAlign: 'center' }}>
                <h2>Ready to Transform Your Space?</h2>
                <p>Contact us today to schedule a consultation with our design experts.</p>
                <button style={{ padding: '12px 30px', fontSize: '16px', backgroundColor: '#1e90ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get Started</button>
            </section>
        </div>
    );
};

export default HomePage;