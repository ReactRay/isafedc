import '../styles/ProductCard.scss';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="info">
                <h3>{product.name}</h3>
                <p className="desc">{product.shortDesc}</p>
                <p className="price">{product.price} ₪</p>
                <div className="buttons">
                    <button className="details">עוד פרטים</button>
                    <button className="add">הוסף לסל</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
