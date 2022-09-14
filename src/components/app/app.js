import React, { useState } from "react";

import APIServiceDummy from "../../services/api-service-dummy";

import ErrorBoundry from "../error-boundry/error-boundry";
import ProductDetails from "../product-details/product-details";
import Counter from "../counter/counter";

const App = () => {

    const apiService = new APIServiceDummy();

    const [ productId, setProductId ] = useState(120);

    return (
        <div>
            <ErrorBoundry>
                <ProductDetails itemId={productId}
                                getData={apiService.getProductDetails}/>
            </ErrorBoundry>
            <Counter value={productId}
                     min="120"
                     max="122"
                     setValue={setProductId}/>
        </div>
    );

};

export default App;