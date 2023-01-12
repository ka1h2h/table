import { Thead } from "./Thead";
import { Tbody } from "./Tbody";
import { useAppSelector } from "../store/hooks";
import { selectFiltratedUsers } from "../store/selectors";
import { Pagination } from "./Pagination";

export const Table = () => {
  const allUsers = useAppSelector(selectFiltratedUsers);
  const currentPage = useAppSelector((f) => f.filters.filter.page);

  return (
    <div className="content">
      <div className="content-table mt-5 px-5 ps-5 ">
        <table className="table">
          <Thead />
          <Tbody />
        </table>
        <div className="d-flex justify-content-center">
          <Pagination length={allUsers.count} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};
