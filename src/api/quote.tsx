import axios, { AxiosResponse } from "axios";
import { Quote } from "../Quote";

const request = axios.create({ baseURL: "https://api.quotable.io/" })

export const getRandomQuote = async (): Promise<Quote> => {
  const data = await request.get("random")
  return data.data
}