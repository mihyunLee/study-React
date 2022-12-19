import { ApolloClient, ApolloProvider, gql, useQuery } from "@apollo/client";
import { cache } from "./cache";
import React from "react";
import ReactDOM from "react-dom/client";
import Pages from "./pages";
import Login from "./pages/login";
import injectStyles from "./styles";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages /> : <Login />;
}

// ApolloClient 인스턴스 생성
const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  headers: {
    authorization: localStorage.getItem("token") || "",
  },
  typeDefs,
});

// Initialize ApolloClient
injectStyles();

// Find our rootElement or throw and error if it doesn't exist
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

// Pass the ApolloClient instance to the ApolloProvider component;
root.render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>
);
