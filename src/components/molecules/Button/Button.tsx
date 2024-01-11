type Props = {
  text: string
  color: string
}

const Button = ({ text = 'Click', color = 'black' }: Props) => {
  return (
    <button
      style={{
        color: `${color ? color : '#fff'}`,
      }}
    >
      {text}
    </button>
  )
}

export default Button
