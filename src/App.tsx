import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RepositoryDetailPage } from './pages/RepositoryDetails';
import { SearchPage } from './pages/SearchPage';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/repository/:name" element={<RepositoryDetailPage/>} />
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;