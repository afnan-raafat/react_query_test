// eslint-disable-next-line no-unused-vars
import React from 'react'
import { QueryClientProvider , QueryClient} from 'react-query'
import Todo from './Todo'

export default function App() {
  const queryClient = new QueryClient();
  
  return (

    <QueryClientProvider client={queryClient}>
    <Todo/>  
</QueryClientProvider>
  )
}
