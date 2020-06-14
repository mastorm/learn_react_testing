import React, { FC } from "react";
import { Repository as UserRepository } from "../containers";

export interface RepositoryProps {
  repo: UserRepository;
}

const Repository: FC<RepositoryProps> = ({ repo }) => {
  return (
    <div>
      <h4>{repo.name}</h4>
      <img
        data-testid={"repo-img"}
        alt={`Preview image of ${repo.name}`}
        src={repo.openGraphImageUrl}
      />
    </div>
  );
};

export default Repository;
