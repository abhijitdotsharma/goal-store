import "./products.css";
import { ProductCard } from "./ProductCard";

export default function Products(props) {
    const { products } = props;

    return (
        <section className="products-wrapper">
            {/* loads products on component load */}
            {products && products.map(product =>
                <ProductCard product={product} />
            )}

        </section>
    )
}