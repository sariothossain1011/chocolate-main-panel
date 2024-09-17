
import data from '../../../public/data/products.json'
export default async function getSingleProduct(permaLink: any) {
    try {
        const product = data.find(product => product.permaLink == permaLink);
        if (!product) {
            throw new Error(`Prodcut with id ${permaLink} not found`);
        }
        return product;
    } catch (error) {
        console.log(error)
    }
}
