import React from 'react';

const HomeDetails = () => {
    const details = 
      {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
      }
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.phone}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeDetails;