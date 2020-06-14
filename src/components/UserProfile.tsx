import React, { FC } from "react";
import { GithubUser } from "../containers";

export interface UserProfileProps {
  user: GithubUser;
}

const UserProfile: FC<UserProfileProps> = ({ user }) => {
  return (
    <section>
      <h2>Profile</h2>
      <p>Username: {user.name}</p>
      <p>Biography: {user.bio}</p>
      <p>Followers: {user.followers.totalCount}</p>
      <p>Following: {user.following.totalCount}</p>
    </section>
  );
};

export default UserProfile;
