
import PropTypes from "prop-types"; // Importa PropTypes

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center my-4">
      <button
        className="px-4 py-2 border rounded mr-2"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Precedente
      </button>

      <span className="px-4 py-2 border rounded">
        Pagina {currentPage} di {totalPages}
      </span>

      <button
        className="px-4 py-2 border rounded ml-2"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Successivo &gt;
      </button>
    </div>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
