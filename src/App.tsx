import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import RepositoryContainer from "./containers/RepositoryContainer";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
});

function App() {
  console.log(process.env.REACT_APP_GITHUB_API_TOKEN);
  return (
    <ApolloProvider client={client}>
      <RepositoryContainer />
    </ApolloProvider>
  );
}

export default App;
