import { useSearchPage } from "../hooks/hooks";

const SearchBar: React.FC = () => {
  const { searchString, sortCriteria, handleSearch, handleSort } =
    useSearchPage();

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        className="p-2 border rounded"
        type="text"
        name="search"
        placeholder="Enter search string"
        value={searchString}
      />
      <select
        className="p-2 border rounded ml-2"
        onChange={handleSort}
        value={sortCriteria}
      >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Last Update</option>
      </select>
    </form>
  );
};
