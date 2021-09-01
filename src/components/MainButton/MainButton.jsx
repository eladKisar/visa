import './MainButton.scss'

const MainButton = ({
    title,
    children,
    ...props
}) => {
    return (
        <button className="btn btn-main" {...props} >{children || title}</button>
    )
}

export default MainButton;
