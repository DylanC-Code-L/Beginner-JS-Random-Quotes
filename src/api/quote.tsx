import axios from "axios";
import { Quote } from "../components/Quote";

export const getRandomQuote = async (): Promise<Quote> => {
  const data = await axios.get("https://api.quotable.io/random")
  return data.data
}