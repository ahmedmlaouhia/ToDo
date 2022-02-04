const Item = (props: Props) => {
  return (
    <div>
      <h1>
        {props.id} . {props.text}
      </h1>
    </div>
  )
}
type Props = {
  text: string
  isDone?: boolean
  id?: number
}
export default Item
