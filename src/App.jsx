
import ProductsList from "./components/ProductsList"
import { QueryClientProvider , QueryClient} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'

const queryClient = new QueryClient()

const App = () => {

  
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App