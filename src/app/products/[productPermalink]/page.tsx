
import Button from '@/components/button/Button';
import ProductsAdditionalDetails from '@/components/products/ProductsAdditionalDetails';
import getSingleProduct from '@/lib/api/getSingleProduct';
import Image from 'next/image';
import React from 'react'

interface SingleProductProps {
  params: { productPermalink: string }
}
const ProductPermalinkPage: React.FC<SingleProductProps> = async ({ params }) => {
  const { productPermalink } = params;
  const product = await getSingleProduct(productPermalink);
  return (
    <div className='py-20'>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className=' flex justify-center'>
          <Image src={`${product?.image}`} alt={`${product?.title}`} width={400} height={300} />
        </div>
        <div className=' flex flex-col gap-6'>
          <h1 className='text-xl md:text-2xl font-bold'>{product?.title}</h1>
          <p className=' text-lg md:text-xl font-medium text-blue-500'>  <span className='line-through'>৳{product?.price}</span> <span>৳{product?.discountPrice}</span> </p>
          <div>
          <p className='text-sm font-normal'>Flavor: {product?.flavor}</p>
          <p className='text-sm font-normal'>Weight: {product?.weight}</p>
          <p className='text-sm font-normal'>Brand: {product?.brand}</p>
          <p className='text-sm font-normal'>Product Type: {product?.prodcutType}</p>
          <p className='text-sm font-normal'>Prodcut Origin: {product?.prodcutOrigin}</p>
          </div>
            

        <div>
        <p ><span className='text-md font-semibold'> SKU:</span>  <span className='text-sm font-normal'>{product?.sku}</span></p>
          <p ><span className='text-md font-semibold'> Brand:</span>  <span className='text-sm font-normal'>{product?.brand}</span></p>

        </div>

          {
            product?.quantity && product?.quantity > 0 ? `${product?.quantity} Product left in stock` : "Out of stock"
          }
          <div className=' min-w-full flex flex-row gap-4  items-center'>
            <Button name='ADD TO CART'/>
            <Button name='BUY NOW'/>
          </div>

        </div>
      </div>
      {
        product?.reviews && product?.description && <ProductsAdditionalDetails reviews={product?.reviews} description={product?.description}  />
      }
    </div>
  )
}

export default ProductPermalinkPage