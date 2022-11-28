import axios from "axios"

export const getBackgroundImage = async () => {
  const data = await axios.get("https://api.unsplash.com/photos/random/?client_id=YlNBru4rLz2GnOa1SBaBOwU-Rut1LsacXJP5DQL3IJ4")
  return data.data
}