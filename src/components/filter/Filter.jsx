import "./filter.css"
import { useState } from "react";

export default function Filter({ filterDispatch, sliderValue, productState, filterArrow }) {


    const [clearSliderBtn, setClearSliderBtn] = useState(false);

    const clearFilters = (e) => {
        //dispatch CLEAR to reducer
        filterDispatch({ type: "CLEAR" })
        //and remove clear btn from slider 
        setClearSliderBtn(false)
    }

    const filterDispatchAndToggleClear = (e) => {
        setClearSliderBtn(true)
        filterDispatch({ type: "SLIDER", payload: e.target.value })
    }
    const filterDispatchAndHideClear = () => {
        setClearSliderBtn(false)
        filterDispatch({ type: "SLIDER", payload: 5000 })
    }

    return (
        <aside className={filterArrow? "filter-wrapper filter-active": "filter-wrapper"}>
            <div className="filter-container">
                <div className="filter">
                    <h3>Filter</h3>
                    <span onClick={clearFilters}>Clear</span>
                </div>

                <div className="price">
                    <h3>Price</h3>
                    <div className="slider">
                        <label>
                            <input
                                type="range"
                                min="0"
                                max="5000"
                                value={sliderValue}
                                onChange={(e) => filterDispatchAndToggleClear(e)}
                            />
                            {sliderValue}
                        </label>
                        {clearSliderBtn && <button onClick={filterDispatchAndHideClear}>clear</button>}
                    </div>
                </div>

                <div className="filter-category">
                    <h3>Category</h3>
                    <div>
                        <input className="vertical-align-checkbox" type="checkbox" name="Men" id=""
                            checked={productState.category.includes('boots')}
                            onChange={(e) => filterDispatch({ type: "CATEGORY", payload: 'boots' })}
                        />
                        <label className="filter-category__label">boots</label>
                    </div>

                    <div>

                        <input className="vertical-align-checkbox" type="checkbox" name="Men" id=""
                            checked={productState.category.includes('shirt')}
                            onChange={(e) => filterDispatch({ type: "CATEGORY", payload: 'shirt' })}
                        />
                        <label className="filter-category__label">shirt</label>
                    </div>

                    <div>

                        <input className="vertical-align-checkbox" type="checkbox" name="Men" id=""
                            checked={productState.category.includes('ball')}
                            onChange={(e) => filterDispatch({ type: "CATEGORY", payload: 'ball' })}
                        />
                        <label className="filter-category__label">ball</label>
                    </div>

                </div>

                <div className="rating">
                    <h3>Rating</h3>
                    <div>
                        <input className="vertical-align-radio" type="radio" name="rating"
                            onChange={() => filterDispatch({ type: "RATING", payload: '4' })}
                            checked={productState.rating === '4'} //what happens if I send payload: integer 4?
                        />
                        <label className="filter-category__label">4 stars and above</label>
                    </div>
                    <div>
                        <input className="vertical-align-radio" type="radio" name="rating" id=""
                            onChange={() => filterDispatch({ type: "RATING", payload: '3' })}
                            checked={productState.rating === '3'}
                        />
                        <label className="filter-category__label">3 stars and above</label>
                    </div>

                    <div>
                        <input className="vertical-align-radio" type="radio" name="rating" id=""
                            onChange={() => filterDispatch({ type: "RATING", payload: '2' })}
                            checked={productState.rating === '2'}
                        />
                        <label className="filter-category__label">2 stars and above</label>
                    </div>
                    <div>
                        <input className="vertical-align-radio" type="radio" name="rating" id=""
                            onChange={() => filterDispatch({ type: "RATING", payload: '1' })}
                            checked={productState.rating === '1'}
                        />
                        <label className="filter-category__label">1 stars and above</label>
                    </div>
                </div>

                <div className="sort">
                    <h3>Sort by</h3>
                    <div>
                        <input
                            className="vertical-align-radio"
                            type="radio" name="sort" id=""
                            onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
                            checked={productState.sortBy === "HIGH_TO_LOW"}
                        />
                        <label>Price - High to Low</label>
                    </div>
                    <div>
                        <input
                            className="vertical-align-radio"
                            type="radio" name="sort" id=""
                            onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
                            checked={productState.sortBy === "LOW_TO_HIGH"}
                        />
                        <label>Price - Low to High</label>
                    </div>
                </div>
            </div>
        </aside>
    )
}