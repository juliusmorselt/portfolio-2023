export default function Button({children, ...rest}:any) {
    return(
        <div {...rest} className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-700 hover:text-black flex">{children}</div>
    )
}