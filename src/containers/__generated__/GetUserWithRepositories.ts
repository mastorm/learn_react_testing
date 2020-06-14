/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserWithRepositories
// ====================================================

export interface GetUserWithRepositories_viewer_followers {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetUserWithRepositories_viewer_following {
  __typename: "FollowingConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetUserWithRepositories_viewer_repositories_nodes {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The image used to represent this repository in Open Graph data.
   */
  openGraphImageUrl: any;
}

export interface GetUserWithRepositories_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetUserWithRepositories_viewer_repositories_nodes | null)[] | null;
}

export interface GetUserWithRepositories_viewer {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
  /**
   * A list of users the given user is followed by.
   */
  followers: GetUserWithRepositories_viewer_followers;
  /**
   * A list of users the given user is following.
   */
  following: GetUserWithRepositories_viewer_following;
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetUserWithRepositories_viewer_repositories;
}

export interface GetUserWithRepositories {
  /**
   * The currently authenticated user.
   */
  viewer: GetUserWithRepositories_viewer;
}
