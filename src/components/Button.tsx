const Button = (props: any) => {
  return (
    <div className="mt-4">
      <button
        className="w-full
        bg-teal-800/30
        hover:bg-teal-700/40
        focus:outline-none
        text-[#87beca]
        font-medium
        py-2
        px-4
        hover:shadow-mine
        hover:shadow-cyan-600/10
        rounded-2xl
        duration-300
        "
      >
        {props.name}
      </button>
    </div>
  )
}
export default Button
