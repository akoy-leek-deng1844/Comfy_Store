import { useLoaderData, useNavigate, useLocation } from "react-router-dom"

const ProductsPagination = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const navigate = useNavigate();
 const {pathname, search} = useLocation()
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1
  })
  const handlePage = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  if (pageCount < 2) return null; 

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="join-item btn btn-xs sm:btn-md "
          onClick={() => {
            let prevPage = page - 1
            if (prevPage < 1) prevPage = pageCount;
            
            handlePage(prevPage);
          }}
        >
          PREV
        </button>
      
        {pages.map((pageNo) => {
          return (
            <button
              key={pageNo}

              className={`join-item btn btn-xs sm:btn-md  border-none ${pageNo === page?'bg-base-300 border-base-300':''}`}
              onClick={() => {
                handlePage(pageNo);
              }}
            >
              {pageNo}
            </button>
          );
        })}
        <button
          className="join-item btn btn-xs sm:btn-md "
          onClick={() => {
            let nextPage = page + 1
            if (nextPage > pageCount) nextPage = 1;
            
            handlePage(nextPage);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
export default ProductsPagination