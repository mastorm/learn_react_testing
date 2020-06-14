import React, { FC } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { GetUserWithRepositories } from "./__generated__/GetUserWithRepositories";
import UserProfile from "../components/UserProfile";
import RepositoryList from "../components/RepositoryList";

const GET_USER_WITH_REPOSITORIES = gql`
  query GetUserWithRepositories {
    viewer {
      name
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 20) {
        nodes {
          name
          openGraphImageUrl
        }
      }
    }
  }
`;

const RepositoryContainer = () => {
  const { loading, error, data } = useQuery<GetUserWithRepositories>(
    GET_USER_WITH_REPOSITORIES
  );
  if (loading) {
    return <h1>loading</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h1>Github Repo Viewer</h1>
      <UserProfile user={data!.viewer} />
      <RepositoryList repositories={data?.viewer.repositories.nodes} />
    </div>
  );
};

export default RepositoryContainer;
