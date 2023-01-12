import { useAppDispatch } from "../store/hooks";
import { filtersChanged } from "../store/effects";
import classNames from "classnames";

type MTProps = {
  length: number;
  currentPage: number;
};

export const Pagination = (l: MTProps) => {
  const dispatch = useAppDispatch();
  const count = l.length / 19;
  const pages = [];
  for (let i = 1; i < count; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page) => {
        return (
          <a
            className={classNames(
              { currentPage: l.currentPage === page },
              "pagination-btn"
            )}
            onClick={() => dispatch(filtersChanged({ page: page }))}
          >
            {page}
          </a>
        );
      })}
    </div>
  );
};
