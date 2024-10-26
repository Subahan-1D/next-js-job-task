'use client'
import Link from "next/link";
import React from "react";

const Info = ({ book, handleDelete, handleUpdate }) => {
  const { name, title } = book;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Book Name :{name}</h2>
          <p6>Book Topic : {title} </p6>
          <div className="card-actions gap-10">
            <Link href={'/update'}
              onClick={() => {
                handleUpdate(book);
              }}
              className="btn btn-secondary "
            >
              Update
            </Link>
            <button
              onClick={() => {
                handleDelete(book);
              }}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
