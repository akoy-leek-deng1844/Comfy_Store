import { useLoaderData, useNavigate, useLocation } from "react-router-dom";

const ComplexPagination = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const handlePage = (pageNumber) => {
      const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
      navigate(`${pathname}?${searchParams.toString()}`);
      
    };
    const addNumbers = ({pageNo, activeClass}) => {
        return (
          <button
            key={pageNo}
            onClick={() => handlePage(pageNo)}
            className={`btn btn-xs sm:btn-md border-none join-item ${
              activeClass ? "bg-base-300 border-base-300 " : ""
            }`}
          >
            {pageNo}
          </button>
        );
    }
    const renderButtons = () => {
        const pageBtns = []
        pageBtns.push(addNumbers({ pageNo: 1, activeClass: page === 1 }))
        if (page !== 1 && page !== pageCount) {
            pageBtns.push(addNumbers({pageNo:page, activeClass:true}))
        }
        if (page > 2) {
            pageBtns.push(
              <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
                ...
              </button>
            );
        
        }
        pageBtns.push(addNumbers({ pageNo: pageCount, activeClass: page === pageCount }))
        return pageBtns
    }

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="join-item btn btn-xs sm:btn-md "
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;

            handlePage(prevPage);
          }}
        >
          PREV
        </button>
{renderButtons()}
        <button
          className="join-item btn btn-xs sm:btn-md "
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;

            handlePage(nextPage);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
export default ComplexPagination;
