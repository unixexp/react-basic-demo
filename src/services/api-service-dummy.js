export default function APIServiceDummy() {

    const NETWORK_DELAY = 600;

    const products = [
        {
            id: 120,
            name: "Product #1",
            imageURL: "https://muztorg.ua/image/cache/catalog/99995/230782/tama_mas1465-pbk_3-400x350.jpg",
            vendor: "Product vendor",
            code: "Product code",
            description: "Description........",
            availability: "In stock",
            price: 100,
            currency: "USD"
        },
        {
            id: 121,
            name: "Product #2",
            imageURL: "https://muztorg.ua/image/cache/catalog/99995/230782/tama_mas1465-pbk_7-400x350.jpg",
            vendor: "Product vendor",
            code: "Product code",
            description: "Description........",
            availability: "In stock",
            price: 150,
            currency: "USD"
        }
    ]

    this.getProductDetails = async (id) => {

        const productDetails = await new Promise((resolve, reject) => {
            const filtered = products.filter((e) => e.id === id);

            setTimeout(() => {
                if (filtered.length) {
                    resolve(filtered[0]);
                } else {
                    reject(new Error("Error load data"));
                }
            }, NETWORK_DELAY);
        });
        
        return productDetails;
    };

};