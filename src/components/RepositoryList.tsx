const RepositoryList: React.FC = () => {
  const { repositories, handleRepositoryClick } = useSearchPage();

  return (
    <div className="mt-4">
      {repositories.map((repository) => (
        <div key={repository.name} className="bg-white p-4 rounded-lg mb-2">
          <div className="text-lg font-medium">{repository.name}</div>
          <div className="text-gray-500">{repository.author}</div>
          <div className="mt-2 flex items-center">
            <div className="text-gray-500 mr-2">
              <i className="fas fa-star"></i> {repository.stars}
            </div>
            <div className="text-gray-500 mr-2">
              <i className="fas fa-eye"></i> {repository.watchers}
            </div>
            <div className="text-gray-500">
              <i className="fas fa-code-branch"></i> {repository.forks}
            </div>
          </div>
          <div className="mt-2 text-gray-500">{repository.description}</div>
          <div className="mt-2 text-gray-500">{repository.lastUpdate}</div>
          <button
            onClick={() => handleRepositoryClick(repository.name)}
            className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};
