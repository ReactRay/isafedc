import { Carousel } from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import demoProducts from "../services/demoProducts";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <Carousel />
            <div className="list">
                {demoProducts.map((item) => (
                    <div
                        key={item.name}
                        onClick={() => navigate('/product-page')}
                        style={{ cursor: 'pointer' }}
                    >
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
