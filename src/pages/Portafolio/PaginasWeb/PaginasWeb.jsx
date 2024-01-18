import { useState } from "react";
import CardPageWeb from "../components/CardPageWeb";

function PaginasWeb() {
  const numberOfCards = 18;
  const cardsPerPage = 6;
  const totalPages = Math.ceil(numberOfCards / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const generatePagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 border rounded focus:outline-none ${
            currentPage === i ? "border-blue-500" : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const displayedCards = Array.from({ length: numberOfCards }).slice(
    startIndex,
    endIndex
  );

  return (
    <div className="flex flex-col items-center p-14 bg-gray-200">
      <p className="font-primary text-center">NUESTRAS</p>
      <h2 className="font-primary text-center text-4xl">Páginas Web</h2>
      <div className="lg:p-14 flex flex-wrap justify-center gap-2 mt-2">
        {displayedCards.map((_, index) => (
          <CardPageWeb key={startIndex + index} />
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {generatePagination()}
      </div>
    </div>
  );
}

export default PaginasWeb;
