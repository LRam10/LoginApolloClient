import React from 'react'
import { render } from 'react-dom';
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client';
import AppRoutes from './AppRoutes';
import config from './config';
import { ThemeProvider } from '@mui/material';
import CustomTheme from './styles/CustomeTheme';
const client = new ApolloClient({
  uri:config.apiUrl,
  cache:new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={CustomTheme}>
    <AppRoutes/>
    </ThemeProvider>
  </ApolloProvider>
,document.getElementById('root'))


