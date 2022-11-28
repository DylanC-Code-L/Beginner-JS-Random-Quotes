type Props = { refetch: Function, text: string }

const ButtonRefetch = ({ refetch, text }: Props) => {
  return <div className='container'>
    <button onClick={() => refetch()} className="btn">{text}</button>
  </div>
}

export default ButtonRefetch