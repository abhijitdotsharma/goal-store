// will go to product-page on button click
import {Link} from "react-router-dom";
import "./categories.css"
export default function Categories() {
    return (
        <section className="category">
            <h3 className="category-heading">CHOOSE YOUR <span>POISON</span></h3>
            <div className="category-images">
                <div className="category-image">
                    <Link to="/products">
                        {/* <img src="https://res.cloudinary.com/wickedsharma/image/upload/v1658942612/nou-store/jacket-landing_rmb3mf.jpg" alt="category 1" /> */}
                        <div className="category-bg-image category-image__one"></div>
                        <h3 className="category-image__text">Jackets</h3>
                    </Link>
                </div>
                <div className="category-image">
                    <Link to="/products">
                        {/* <img src="https://res.cloudinary.com/wickedsharma/image/upload/v1658943288/nou-store/landing-jersey_b7mypg.jpg" alt="category 1" /> */}
                        <div className="category-bg-image category-image__two"></div>
                        <h3 className="category-image__text">Jerseys</h3>
                    </Link>
                </div>
                <div className="category-image">
                    <Link to="/products">
                        {/* <img src="https://res.cloudinary.com/wickedsharma/image/upload/v1658943437/nou-store/landing-boots_yfqkys.jpg" alt="category 1" /> */}
                        <div className="category-bg-image category-image__three"></div>
                        <h3 className="category-image__text">Boots</h3>
                    </Link>
                </div>
                <div className="category-image">
                    <Link to="/products">
                        {/* <img src="https://res.cloudinary.com/wickedsharma/image/upload/v1658943577/nou-store/landing-football_t3iuan.jpg" alt="category 1" /> */}
                        <div className="category-bg-image category-image__four"></div>
                        <h3 className="category-image__text">Footballs</h3>
                    </Link>
                </div>
            </div>
        </section>
    )
}