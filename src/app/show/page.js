"use client";

import Info from "@/components/Info";
import { useEffect, useState } from "react";

const FetchPage = () => {
  const [books, setBooks] = useState([]);
  const fetchBook = async () => {
    const response = await fetch("/api/book");
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <div>
      <h3 className="text-center">{books.length}</h3>
      <div className="grid sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
        {books.map((book) => (
          <Info key={book.id} book={book}></Info>
        ))}
      </div>
    </div>
  );
};

export default FetchPage;
