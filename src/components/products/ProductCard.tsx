import { setCart } from '@/redux/state-slice/CartSlice'
import { IAddToCart, IProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoMdHeartEmpty } from "react-icons/io";
import { setWishlist } from '@/redux/state-slice/WishlistSlice'
interface ProductsProps {
    product: IProduct,
    key: number;
}

const ProductCard: React.FC<ProductsProps> = ({ product, key }) => {
    const dispatch = useDispatch();
    const [productItem, setProductItem] = useState<IAddToCart>({
        id: product.id,
        title: product.title,
        permaLink: product.permaLink,
        weight: product.weight,
        brand: product.brand,
        productType: product.productOrigin,
        productOrigin: product.productType,
        sku: product.sku,
        price: product.price,
        discountPrice: product.discountPrice,
        quantity: product.quantity,
        category: product.category,
        image: product.image,
    })
    useEffect(() => {
        setProductItem((prevProductItem) => ({
            ...prevProductItem,
            id: product.id,
            title: product.title,
            discountPrice: product.discountPrice
        }));
    }, [
        product.id,
        product.title,
        product.discountPrice,
    ]);
    const handleAddToCart = () => {
        dispatch(setCart(productItem));
    };

    const handleAddToWishlist = () => {
        dispatch(setWishlist(productItem));
    };

    return (
        <>
            <div key={key} className=' flex flex-col justify-center items-center text-center gap- p-3 border rounded-sm'>
                <div className=' relative'>
                <Image src={product.image} alt={product.title} className=' rounded-sm' width={300} height={200} />
                <span onClick={handleAddToWishlist} className=' absolute top-1 right-1 text-black/35 hover:text-blue-300 cursor-pointer '><IoMdHeartEmpty size={26} /></span>
                </div>
                <h2>{product.title}</h2>
                <p className=' text-blue-500'>  <span className='line-through'>৳{product.price}</span> <span>৳{product.discountPrice}</span> </p>
                <div className=' min-w-full flex flex-row gap-4  justify-between items-center'>
                    <button onClick={handleAddToCart} className=' w-full bg-purple-800 py-2 rounded-sm'>Add to card</button>
                    <Link href={`/products/${product.permaLink}`} className='w-full bg-purple-800 text-center py-2 rounded-sm'>Details</Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard