import QuoteComponent, { Quote } from './Quote'
import { useQuery } from 'react-query'
import { getRandomQuote } from './api/quote'
import ErrorMessage from './ErrorMessage'
import { AxiosError } from 'axios'

const App = () => {
  const { data, error, isError, isLoading, isSuccess, refetch } = useQuery<Quote, AxiosError>('quote', getRandomQuote)

  return (
    <div>
      {isLoading && <p>Is Loading ...</p>}
      {isError && <ErrorMessage error={error} />}
      {isSuccess && <QuoteComponent quote={data} />}
      <button onClick={() => refetch()}>New Quote</button>
    </div>
  )
}

export default App