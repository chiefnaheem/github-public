const Pagination: React.FC = () => {
  const { pagination } = useSearchPage();

  return (
    <div className="mt-4 flex justify-between">
      <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        Previous
      </button>
      <div>
        Page {pagination.currentPage} of {pagination.totalPages}
      </div>
      <button
        className="bg-blue-500 text-
    
    
    
    white p-2 rounded-lg hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};
