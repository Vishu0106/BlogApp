function Button({
    children,
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    classnName = '',
    ...props
}) {

    return (
        <button
            className={`px-6 py-2 duration-200 rounded-lg ${bgColor} ${textColor} ${classnName}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;