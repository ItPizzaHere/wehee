import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { setCurrentPage, setTotalPages } from 'redux/paginationSlice';

const usePagination = (data: any[], itemsPerPage: number) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);

  const totalPageCount = Math.ceil(data.length / itemsPerPage);
  const itemsToDisplay = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    dispatch(setTotalPages(totalPageCount));
  }, [data, itemsPerPage, totalPageCount, dispatch]);

  const handlePageChange = (_: any, value: number) => {
    dispatch(setCurrentPage(value));
  };

  return {
    currentPage,
    totalPageCount,
    itemsToDisplay,
    handlePageChange
  };
};

export default usePagination;