/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_viewer_repositories_nodes {
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

export interface GetUser_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetUser_viewer_repositories_nodes | null)[] | null;
}

export interface GetUser_viewer {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetUser_viewer_repositories;
}

export interface GetUser {
  /**
   * The currently authenticated user.
   */
  viewer: GetUser_viewer;
}
