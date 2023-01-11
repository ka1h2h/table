import { Thead } from "./Thead";
import { Tbody } from "./Tbody";

export const Table = () => {
  return (
    <div className="content">
      <div className="content-table mt-5 px-5 ps-5 ">
        <table className="table">
          <Thead />
          <Tbody />
        </table>
        <div className="d-flex justify-content-center">
          {/* {arr.map((i) => {
            return (
              <a
                onClick={() => dispatch(currentPage(i))}
                className="btn m-4 text-primary"
              >
                {i}
              </a>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};
