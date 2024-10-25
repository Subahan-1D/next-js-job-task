import React from 'react';

const Info = ({book}) => {
    const {name, title} = book ;
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Book Name :{name}</h2>
            <p>Book Topic : {title} </p>
            <div className="card-actions gap-10">
              <button className="btn btn-secondary">Update</button>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Info;