import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router"
import router from './router'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { baseApi } from './services/api'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={baseApi}>
      <RouterProvider router={router} />
    </ApiProvider>
  </StrictMode>,
)
