import React, { FC, useMemo } from "react";
import { Repository as UserRepository } from "../containers";

import Repository from "./Repository";

export interface RepositoryListProps {
  repositories?: (UserRepository | null)[] | null;
}

const RepositoryList: FC<RepositoryListProps> = ({ repositories }) => {
  const safeRepos = useMemo((): UserRepository[] | undefined => {
    return repositories?.filter(
      (x: UserRepository | null): x is UserRepository => x !== null
    );
  }, [repositories]);

  return (
    <>
      {safeRepos ? (
        safeRepos.map((repo, idx) => {
          return <Repository repo={repo} />;
        })
      ) : (
        <p>No repositories found :(</p>
      )}
    </>
  );
};

export default RepositoryList;
