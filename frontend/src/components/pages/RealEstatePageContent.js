import React from 'react';

const RealEstatePageContent = () => {
    const properties = [
        { id: 1, title: 'Luxury Villa', price: '$1,200,000', description: 'A beautiful luxury villa with a pool.' },
        { id: 2, title: 'Modern Apartment', price: '$850,000', description: 'A sleek modern apartment in the city center.' },
        { id: 3, title: 'Countryside Cottage', price: '$450,000', description: 'A charming cottage located in the countryside.' },
    ];

    const handleLeadFormSubmit = (e) => {
        e.preventDefault();
        // Handle lead form submission logic here
        alert('Lead form submitted!');
    };

    return (
        <div>
            <h1>Real Estate Listings</h1>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <h2>{property.title}</h2>
                        <p>Price: {property.price}</p>
                        <p>{property.description}</p>
                    </li>
                ))}
            </ul>
            <h2>Contact Us for More Information</h2>
            <form onSubmit={handleLeadFormSubmit}>  
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RealEstatePageContent;