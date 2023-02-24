import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {  BrowserRouter } from "react-router-dom";

import theme from './theme';

import Index from './routes'

export default function App() {

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <BrowserRouter>
          <Index/>
      </BrowserRouter>
    </ChakraProvider>
  )
}