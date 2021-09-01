import './FlowItem.scss';

const FlowItem = ({
    Icon,
    title,
    isHighlighted,
    onClick,
}) => {
    return (
        <div className={`flow-item ${isHighlighted ? 'highlight' : ''}`} onClick={onClick}>
            <span className="icon-frame">
                <Icon />
            </span>
            <span className="title">{title}</span>
        </div>
    )
}

export default FlowItem;
