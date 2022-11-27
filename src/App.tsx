import React, { useEffect, useState } from 'react'
import axios, { AxiosError } from "axios"

type Quotes = {
  _id: string,
  content: string,
  author: string,
}

const App = () => {
  const [quote, setQuote] = useState<Quotes>()
  const [error, setError] = useState<string>("")

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const data = await axios.get<Quotes>("https://api.quotable.io/random")
        setQuote(data.data)
      } catch (error) {
        if (axios.isAxiosError(error))
          setError(error.message)
      }
    }
    fetchQuotes()
  }, [])


  return (
    <div>App</div>
  )
}

export default App