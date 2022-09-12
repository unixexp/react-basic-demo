import React, { useState, useEffect } from "react";

import Counter from "../counter/counter";

const ProductDetails = ({ itemId, getData }) => {

    const [ item, setItem ] = useState(null);
    const [ loading, setLoading ] = useState(1);
    const [ quantity, setQuantity ] = useState(1);

    useEffect(() => {
        let canceled = false;
        setLoading(1);
        getData(itemId).then((item) => {
            if (!canceled) {
                setItem(item);
            }
            setLoading(0);
        });
        return () => { canceled = true; }
    }, [ itemId ]);

    if (loading || !item) {
        return (
            <div className="spinner">
                Loading...
            </div>
        );
    } else {
        return (
            <div className="product-details">
                <img className="product-details__img" src={item.imageURL} />
                <div className="product-details__head">
                    <p className="product-details__name">{item.name}</p>
                    <ul className="product-details__list">
                        <li className="product-details__list-item">
                            Vendor: {item.vendor}
                        </li>
                        <li className="product-details__list-item">
                            Availability: {item.availability}
                        </li>
                        <li className="product-details__list-item">
                            Code: {item.code}
                        </li>
                    </ul>
                    <div className="product-details__price-info">
                        <div className="product-details_price">{item.price * quantity}</div>
                        <Counter value={quantity}
                                 min="1"
                                 max="99"
                                 setValue={setQuantity}/>
                    </div>
                </div>
            </div>
        );
    }

};

export default ProductDetails;