import axios, { AxiosError } from "axios"
import { useQuery } from "react-query"
import { getRandomQuote } from "../api/quote"
import ButtonRefetch from "./ButtonRefetch"
import ErrorMessage from "./ErrorMessage"

export type Quote = {
  _id: string,
  content: string,
  author: string,
}

const QuoteComponent = () => {
  const { data: quote, error, isError, isLoading, isSuccess, refetch } = useQuery<Quote, AxiosError>('quote', getRandomQuote)

  let content: JSX.Element

  if (isLoading) content = <p>Is Loading ...</p>
  else if (isError) {
    content = <ErrorMessage error={error.message} />

  } else if (isSuccess) {
    content = <article key={quote._id} id='quote'>
      <h1>{quote.content}</h1>
      <p>{quote.author}</p>
    </article>
  } else {
    content = <ErrorMessage error="Internal Error" />
  }

  return <>
    {content}
    <ButtonRefetch refetch={refetch} text="New Quote" />
  </>
}

export default QuoteComponent