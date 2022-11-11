// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    return (
        <div className="bakery-item">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <button onClick={() => props.onClick(props.index, props.price)}>Add</button>
        </div>
    );
}

export default BakeryItem;