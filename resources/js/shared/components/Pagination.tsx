import ReactPaginate from "react-paginate";
const Pagination = ({
  pageCount,
  handlePageClick,
  forcePage,

}: {
  pageCount: number;
  handlePageClick: ({ selected }: { selected: number }) => void;
  forcePage?: number;
}) => {

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={"التالي"}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      initialPage={forcePage !== undefined ? forcePage - 1 : undefined}
      previousLabel={"السابق"}
      renderOnZeroPageCount={null}

      // Tailwind CSS classes
      containerClassName="flex justify-center mt-8 space-x-2"
      pageClassName="flex items-center justify-center size-10 text-sm cursor-pointer rounded-md animate border border-gray-300 hover:bg-gray-100"
      pageLinkClassName="w-full h-full flex items-center justify-center"
      activeClassName="text-white hover:!bg-mainColor bg-mainColor"
      previousClassName="flex animate items-center cursor-pointer justify-center px-4 h-10 rounded border border-gray-300 hover:bg-gray-100"
      nextClassName="flex cursor-pointer animate items-center justify-center px-4 rounded border border-gray-300 hover:bg-gray-100"
      disabledClassName="opacity-50 !cursor-not-allowed"
      breakClassName="flex items-end justify-center pb-1 animate cursor-pointer border border-stroke size-10 rounded-md  border border-gray-300 hover:bg-gray-100"
    />
  );
};

export default Pagination;