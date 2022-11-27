export type Quote = {
  _id: string,
  content: string,
  author: string,
}

type Props = { quote: Quote }

const QuoteComponent = (props: Props) => {
  return (
    <article key={props.quote._id}>
      <h1>{props.quote.content}</h1>
      <p>{props.quote.author}</p>
    </article>
  )
}

export default QuoteComponent