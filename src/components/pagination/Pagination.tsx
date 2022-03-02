type PaginationProps = {
    showPrevious: boolean,
    showNext: boolean,
    next: () => void,
    previous: () => void,
    children?: JSX.Element | JSX.Element[]
}

const Pagination = ({showPrevious, showNext, next, previous, children}: PaginationProps) => {
  return (
      <div className="flex items-center py-4 border-t mt-4">
        <div className="flex items-center space-x-2 flex-1">
            <button className="border rounded-md bg-white text-sm text-gray-600 h-10 px-6 shadow-sm hover:bg-gray-50 disabled:opacity-40" disabled={!showPrevious} onClick={previous}>Previous</button>
            <button className="border rounded-md bg-white text-sm text-gray-600 h-10 px-6 shadow-sm hover:bg-gray-50 disabled:opacity-40" disabled={!showNext } onClick={next}>Next</button>
        </div>
          {children}
      </div>
  );
}

export default Pagination;