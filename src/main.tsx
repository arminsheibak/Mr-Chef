import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from '@chakra-ui/react/preset'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system} >
    <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)