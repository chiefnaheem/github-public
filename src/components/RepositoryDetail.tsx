// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { SearchPageState } from '../interfaces/app.interface';

// interface RepositoryDetail {
//   name: string;
//   author: string;
//   stars: number;
//   watchers: number;
//   forks: number;
//   openIssues: number;
//   defaultBranch: string;
//   lastUpdate: string;
// }

// interface RepositoryParams {
//   name: string;
// }

// const RepositoryDetail: React.FC = () => {
//   const { name } = useParams<RepositoryParams>();
//   const repositoryDetail = useSelector((state: SearchPageState) => state.repositoryDetail);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Fetch the detailed information of the repository using the name
//     // and update the repositoryDetail state
//     // ...
//   }, [name]);

//   return (
//     <div>
//       <h1>{repositoryDetail.name}</h1>
//       <div>Author: {repositoryDetail.author}</div>
//       <div>Stars: {repositoryDetail.stars}</div>
//       <div>Watchers: {repositoryDetail.watchers}</div>
//       <div>Forks: {repositoryDetail.forks}</div>
//       <div>Open Issues: {repositoryDetail.openIssues}</div>
//       <div>Default Branch: {repositoryDetail.defaultBranch}</div>
//       <div>Last Update: {repositoryDetail.lastUpdate}</div>
//     </div>
//   );
// };

// export default RepositoryDetail;


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Repository {
  name: string;
  author: string;
  stars: number;
  watchers: number;
  forks: number;
  openIssues: number;
  defaultBranch: string;
  lastUpdate: string;
}

interface RepositoryParams {
  name: string;
}

export const RepositoryDetail: React.FC = () => {
  const { name } = useParams();
  const [repository, setRepository] = useState<Repository | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(`https://api.github.com/repos/${name}`);
          const data = await response.json();
          setRepository({
            name: data.name,
            author: data.owner.login,
            stars: data.stargazers_count,
            watchers: data.subscribers_count,
            forks: data.forks_count,
            openIssues: data.open_issues_count,
            defaultBranch: data.default_branch,
            lastUpdate: data.updated_at
          });
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
  
  }, [name]);

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
        <div>
          <h1>{repository.name}</h1>
          <div>Author: {repository.author}</div>
          <div>Stars: {repository.stars}</div>
          <div>Watchers: {repository.watchers}</div>
          <div>Forks: {repository.forks}</div>
          <div>Open Issues: {repository.openIssues}</div>
          <div>Default Branch: {repository.defaultBranch}</div>
          <div>Last Update: {repository.lastUpdate}</div>
        </div>
      );
    };
    
