'use client'
import React, { useState } from 'react';

const Update = ({book , handleSubmit}) => {

    const [inputText ,setInputText] = useState('')

    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Update now Data</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onClick={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="book name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Topic</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="book topic"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Update;