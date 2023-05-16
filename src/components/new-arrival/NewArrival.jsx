import { Link } from "react-router-dom";
import "./new-arrival.css";

export default function NewArrival() {
    return (
        <section className="new-arrival-card">
            <div className="new-arrival-image">
                <img src="https://res.cloudinary.com/wickedsharma/image/upload/v1658940816/nou-store/babies-above-footer_tutzxo.jpg" alt="New Arrival" />
                <div className="new-arrival-content">
                    <span>Recently Launched</span>
                    <h3>Spring 2022 Collection</h3>
                    <p>Our latest collection of on and
                        off-the-field merch.
                    </p>
                    <Link
                        to="/products"
                        className="new-arrival-btn"
                    >Check it out</Link>
                </div>
            </div>

        </section>
    )
}