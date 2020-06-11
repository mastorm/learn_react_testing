import React from 'react';
import './App.css';
import {UserProfile} from "./components/UserProfile";
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProfile />
    </ApolloProvider>
  );
}

export default App;
