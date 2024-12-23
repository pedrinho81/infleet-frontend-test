interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="list-style-none flex pb-4">
        <li>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 
              ${currentPage === 1 ? "text-neutral-500 pointer-events-none" : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"}`}
          >
            Prev
          </button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300
                  ${currentPage === page
                    ? "bg-primary-100 font-medium text-droidGold"
                    : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
                  }`}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 
              ${currentPage === totalPages ? "text-neutral-500 pointer-events-none" : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
