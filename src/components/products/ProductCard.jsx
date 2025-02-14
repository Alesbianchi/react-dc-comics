
export default function ProductCard(props) {
    //destrutturo l'oggetto
    const { thumb, title } = props.productInfo;


    return (
        <div className="prod-card">
            <img src={thumb} alt={title} />
            <h3>{title}</h3>
        </div>

    );
}