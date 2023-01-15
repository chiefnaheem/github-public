import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchPageState } from '../interfaces/app.interface';

interface RepositoryDetail {
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

const RepositoryDetail: React.FC = () => {
  const { name } = useParams<RepositoryParams>();
  const repositoryDetail = useSelector((state: SearchPageState) => state.repositoryDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the detailed information of the repository using the name
    // and update the repositoryDetail state
    // ...
  }, [name]);

  return (
    <div>
      <h1>{repositoryDetail.name}</h1>
      <div>Author: {repositoryDetail.author}</div>
      <div>Stars: {repositoryDetail.stars}</div>
      <div>Watchers: {repositoryDetail.watchers}</div>
      <div>Forks: {repositoryDetail.forks}</div>
      <div>Open Issues: {repositoryDetail.openIssues}</div>
      <div>Default Branch: {repositoryDetail.defaultBranch}</div>
      <div>Last Update: {repositoryDetail.lastUpdate}</div>
    </div>
  );
};

export default RepositoryDetail;
