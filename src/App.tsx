import React, { useState } from 'react'
import Routing from '@app/routing/Routing'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Routing />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
