import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchString,
  setSortCriteria,
  setResultsPerPage,
  setRepositories,
  setPagination,
} from "../slices/searchPageSlice";
import { RootState } from "../store/store";

export function useSearchPage() {
  const searchString = useSelector(
    (state: RootState) => state.searchPage.searchString
  );
  const sortCriteria = useSelector(
    (state: RootState) => state.searchPage.sortCriteria
  );
  const resultsPerPage = useSelector(
    (state: RootState) => state.searchPage.resultsPerPage
  );
  const repositories = useSelector(
    (state: RootState) => state.searchPage.repositories
  );
  const pagination = useSelector(
    (state: RootState) => state.searchPage.pagination
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchRepositories = useCallback(async () => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${searchString}&sort=${sortCriteria}&per_page=${resultsPerPage}`
    );
    const data = await response.json();
    dispatch(setRepositories(data.items));
    dispatch(
      setPagination({
        currentPage: data.page,
        resultsPerPage: data.per_page,
        totalPages: data.total_pages,
      })
    );
  }, [searchString, sortCriteria, resultsPerPage, dispatch]);
  useEffect(() => {
    if (searchString) {
      fetchRepositories();
    }
  }, [searchString, sortCriteria, resultsPerPage, fetchRepositories]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchString(e.currentTarget.search.value));
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortCriteria(e.currentTarget.value));
  };

  const handleResultsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setResultsPerPage(+e.currentTarget.value));
  };

  const handleRepositoryClick = (name: string) => {
    navigate(`/repository/${name}`);
  };
  return {
    searchString,
    sortCriteria,
    resultsPerPage,
    repositories,
    pagination,
    handleSearch,
    handleSort,
    handleResultsPerPage,
    handleRepositoryClick,
  };
}
