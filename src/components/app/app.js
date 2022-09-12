import React, { useState } from "react";

import APIServiceDummy from "../../services/api-service-dummy";

import ProductDetails from "../product-details/product-details";
import Counter from "../counter/counter";

const App = () => {

    const apiService = new APIServiceDummy();

    const [ productId, setProductId ] = useState(120);

    return (
        <div>
            <ProductDetails itemId={productId}
                            getData={apiService.getProductDetails}/>
            <Counter value={productId}
                     min="120"
                     max="122"
                     setValue={setProductId}/>
        </div>
    );

};

export default App;