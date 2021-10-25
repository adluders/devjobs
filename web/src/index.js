import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import "./index.css";
import JobContextProvider from "./context/JobContext";

const client = new ApolloClient({
  uri: "https://vo3k3jpo.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeContextProvider>
          <JobContextProvider>
            <App />
          </JobContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
