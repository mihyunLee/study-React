import { ApolloClient, ApolloProvider, gql } from "@apollo/client";
import { cache } from "./cache";
import React from "react";
import ReactDOM from "react-dom/client";
import Pages from "./pages";
import injectStyles from "./styles";

// ApolloClient 인스턴스 생성
const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
});

// Test query 보내보기
client
  .query({
    query: gql`
      query TestQuery {
        launch(id: 60) {
          id
          mission {
            name
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

// Initialize ApolloClient
injectStyles();

// Find our rootElement or throw and error if it doesn't exist
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

// Pass the ApolloClient instance to the ApolloProvider component;
root.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>
);
