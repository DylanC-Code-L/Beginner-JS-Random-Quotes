import { AxiosError } from "axios"

const ErrorMessage = (props: { error: AxiosError }) => <p>Error : {props.error.message}</p>


export default ErrorMessage