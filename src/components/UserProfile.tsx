import React from 'react';
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import {GetUser} from "./__generated__/GetUser";

const USER_PROFILE = gql`
    query GetUser {
      viewer {
        name
          repositories(first: 20, ) {
              nodes {
                  name
                  openGraphImageUrl
              }
          }
      }
    }
`

export function UserProfile() {
  const {loading, error, data} = useQuery<GetUser>(USER_PROFILE)
  if(loading) {
    return <h1>loading</h1>
  }

  if(error) {
    return <h1>Error: {error.message}</h1>
  }

  return <h1>Profile {data?.viewer.name}</h1>
}