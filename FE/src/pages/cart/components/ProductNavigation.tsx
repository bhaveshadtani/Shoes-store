import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ProductNavigationProps } from '../types/product.types';

export const ProductNavigation = ({ currentPage, totalItems, itemsPerPage, onPrev, onNext }: ProductNavigationProps) => {
  const showNavigation = totalItems > itemsPerPage;

  return showNavigation ? (
    <div className="flex items-center gap-4">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="text-blue-600 font-semibold text-lg disabled:opacity-50"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={onNext}
        disabled={currentPage * itemsPerPage >= totalItems}
        className="text-blue-600 font-semibold text-lg disabled:opacity-50"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  ) : null;
};