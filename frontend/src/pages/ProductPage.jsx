import '../styles/ProductPage.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ProductCard from '../components/ProductCard';
import demoProducts from '../services/demoProducts';


const product = demoProducts[1];

const ProductPage = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        rtl: true,
        renderMode: 'performance',
        slides: {
            perView: 3,
            spacing: 15,
        },
        breakpoints: {
            '(max-width: 768px)': {
                slides: {
                    perView: 1.2,
                    spacing: 4,
                },
            },
        },
    });

    console.log(product)
    if (!product) {
        return (
            <h1>no product</h1>
        )
    }

    if (product) {
        return (
            <div className="product-page">
                <section className="hero">
                    <div className="info">
                        <div className="tag">במלאי • חדש</div>
                        <h1>{product.name}</h1>

                        <p className="meta">
                            קטגוריה: {product.category} | משלוח תוך 3 ימי עסקים
                        </p>

                        <div className="rating">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                        </div>

                        <p className="desc">{product.longDesc}</p>

                    </div>
                    <div className="image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="info">
                        <h1>{product.name}</h1>
                        <p className="desc">{product.longDesc}</p>
                        <p className="price">{product.price} ₪</p>
                        <button className="add">הוסף לסל</button>
                    </div>
                </section>

                <section className="related">
                    <h2>מוצרים דומים</h2>
                    <div ref={sliderRef} className="keen-slider related-slider">
                        {demoProducts.map((p, i) => (
                            <div className="keen-slider__slide" key={i}>
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }


};

export default ProductPage;
