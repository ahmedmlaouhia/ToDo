const input = (props: Props) => {
  return (
    <div className="mt-4">
      <input
        name={props.name}
        type={props.type ? props.type : "text"}
        className="w-full
                bg-gray-500/50
                text-gray-100
                focus:bg-gray-200/90
                focus:duration-300
                duration-300
                border-none
                rounded-2xl
                px-4
                py-2
                focus:outline-none
                border-2
                outline-none
                placeholder-gray-200/70
                focus:placeholder-gray-800
                focus:text-black
                "
        placeholder={props.ph ? props.ph : props.name}
      />
    </div>
  )
}
type Props = {
  name: string
  type?: string
  ph?: string
}
export default input
