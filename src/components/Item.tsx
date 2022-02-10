const Item = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h1>
        {props.id} . {props.text}
      </h1>
      <input
        type="checkbox"
        className="appearance-none h-4 w-4 border-2 rounded-lg bg-transparent checked:bg-blue-500 border-blue-500 outline-none duration-200 cursor-pointer"
      ></input>
    </div>
  )
}
type Props = {
  text: string
  isDone?: boolean
  id?: number
}
export default Item
