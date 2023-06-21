export default function Card({className, children}:any) {
    return (
        <div className={"bg-white hover:cursor-pointer transition-all rounded-lg p-6 hover:scale-[101%] shadow-xl" + " " + className}>{children}</div>
    )
}