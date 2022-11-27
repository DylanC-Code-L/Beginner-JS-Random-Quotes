import axios, { AxiosError } from "axios"
import { useQuery } from "react-query"
import { getRandomQuote } from "../api/quote"
import ErrorMessage from "./ErrorMessage"

type Quote = {
  _id: string,
  content: string,
  author: string,
}


const QuoteComponent = () => {
  const { data: quote, error, isError, isLoading, isSuccess, refetch } = useQuery<Quote, AxiosError>('quote', getRandomQuote)

  return (<>
    {isLoading && <p>Is Loading ...</p>}
    {isError &&
      <>
        <ErrorMessage error={error} />
        <button onClick={() => refetch()}>Retry To Get Quote</button>
      </>
    }
    {isSuccess &&
      <article key={quote._id}>
        <h1>{quote.content}</h1>
        <p>{quote.author}</p>
        <button onClick={() => refetch()}>New Quote</button>
      </article>
    }
  </>
  )
}

export default QuoteComponent