import { PageInfo } from "@/@types/Character";

interface PaginationProps {
  pageInfo: PageInfo;
  page: number;
  onPageChange: (value: number) => void;
}

export function Pagination({ pageInfo, page, onPageChange }: PaginationProps) {
  const { prev, next, pages } = pageInfo;

  const handleFirst = () => {
    onPageChange(1);
  };

  const handlePrev = () => {
    if (prev) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (next) onPageChange(page + 1);
  };

  const handleLast = () => {
    onPageChange(Number(pages));
  };

  const generatePageNumbers = (): number[] => {
    const maxPagesToShow = 8;
    const pageNumbers: number[] = [];

    if (Number(pages) <= maxPagesToShow) {
      return Array.from({ length: Number(pages) }, (_, idx) => idx + 1);
    }

    const middlePagesCount = 5;
    const halfWindow = Math.floor(middlePagesCount / 2);

    let startPage = Math.max(1, page - halfWindow);
    let endPage = Math.min(Number(pages), page + halfWindow);

    if (endPage - startPage + 1 < middlePagesCount) {
      if (startPage === 1) {
        endPage = Math.min(startPage + middlePagesCount - 1, Number(pages));
      } else if (endPage === Number(pages)) {
        startPage = Math.max(endPage - middlePagesCount + 1, 1);
      }
    }

    if (startPage > 1) pageNumbers.push(1);
    if (startPage > 2) pageNumbers.push(-1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < Number(pages) - 1) pageNumbers.push(-1);
    if (endPage < Number(pages)) pageNumbers.push(Number(pages));

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav aria-label="Page navigation">
      <ul className="list-style-none flex pb-4 space-x-2">
        <li>
          <button
            onClick={handleFirst}
            disabled={page === 1}
            className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 ${
              page === 1
                ? "text-neutral-500 pointer-events-none"
                : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
            }`}
          >
            First
          </button>
        </li>
        <li>
          <button
            onClick={handlePrev}
            disabled={!prev}
            className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 ${
              !prev
                ? "text-neutral-500 pointer-events-none"
                : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
            }`}
          >
            Prev
          </button>
        </li>

        {pageNumbers.map((num, idx) => (
          <li key={idx}>
            {num === -1 ? (
              <span className="px-3 py-1.5 text-neutral-400">...</span>
            ) : (
              <button
                onClick={() => onPageChange(num)}
                className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 ${
                  num === page
                    ? "bg-primary-100 font-medium text-droidGold"
                    : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
                }`}
              >
                {num}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={handleNext}
            disabled={!next}
            className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 ${
              !next
                ? "text-neutral-500 pointer-events-none"
                : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
            }`}
          >
            Next
          </button>
        </li>

        <li>
          <button
            onClick={handleLast}
            disabled={page === pages}
            className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 ${
              page === pages
                ? "text-neutral-500 pointer-events-none"
                : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
            }`}
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
}
