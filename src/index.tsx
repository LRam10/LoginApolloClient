import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import AppRoutes from "./AppRoutes";
import config from "./config";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "./styles/CustomeTheme";
const client = new ApolloClient({
  uri: config.apiUrl,
  cache: new InMemoryCache(),
});

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={CustomTheme}>
      <AppRoutes />
    </ThemeProvider>
  </ApolloProvider>
);
