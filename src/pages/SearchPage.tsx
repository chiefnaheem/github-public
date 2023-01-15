import { Pagination } from "../components/Pagination";
import { RepositoryList } from "../components/RepositoryList";
import { SearchBar } from "../components/SearchBar";
import { useSearchPage } from "../hooks/hooks";

export const SearchPage: React.FC = () => {
  const { resultsPerPage, handleResultsPerPage } = useSearchPage();

  return (
    <div className="bg-gray-200 p-4">
      <SearchBar />
      <div className="mt-4 flex items-center">
        <label className="text-gray-500">Results per page:</label>
        <select
          className="p-2 border rounded ml-2"
          onChange={handleResultsPerPage}
          value={resultsPerPage}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <RepositoryList />
      <Pagination />
    </div>
  );
};
