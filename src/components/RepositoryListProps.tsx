import React, {FC} from 'react';
import {GetUser_viewer_repositories_nodes as Repository} from './__generated__/GetUser'

export interface RepositoryListProps {
  repositories: Repository[]
}

const RepositoryList: FC<RepositoryListProps> = () => {
    return <></>;
}

export default RepositoryList;