const Item = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h1>
        {props.id} . {props.text}
      </h1>
      <div className="w-5 h-5 rounded-full border-[3px] flex items-center justify-center border-blue-600">
        <input
          type="checkbox"
          className="appearance-none h-3 w-3 rounded-lg bg-transparent checked:bg-[#083aa5] outline-none duration-200 cursor-pointer"
        ></input>
      </div>
    </div>
  )
}
type Props = {
  text: string
  isDone?: boolean
  id?: number
}
export default Item
