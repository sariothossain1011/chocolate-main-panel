import { setCart } from '@/redux/state-slice/CartSlice'
import { IAddToCart, IProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoMdHeartEmpty } from "react-icons/io";
import { setWishlist } from '@/redux/state-slice/WishlistSlice'
import CardButton from '../button/CardButton'
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
            <div key={key} className=' flex flex-col justify-center items-center text-center gap-2 p-3 border rounded-sm group'>
                <div className=' relative'>
                    <div className=" relative w-full min-h-[250px] md:min-h-[220px]  overflow-hidden">
                        <Image src={product.image} alt={product.title} className='w-full h-full relative group-hover:scale-105 duration-500 rounded-md ' width={200} height={200} />

                    </div>
                    <span onClick={handleAddToWishlist} className=' hidden group-hover:block absolute top-1 right-1 text-[#33101C] hover:text-[#8A2C4B] cursor-pointer duration-300 ease-in '><IoMdHeartEmpty size={30} /></span>
                </div>
                <h2 className='text-sm font-semibold'>{product.title}</h2>
                <p className=' text-blue-500'>  <span className='line-through'>৳{product.price}</span> <span>৳{product.discountPrice}</span> </p>
                <div className=' min-w-full flex flex-row gap-4  justify-between items-center text-md font-semibold '>
                    <CardButton name='Add to Cart' onClick={handleAddToCart} />
                    <Link href={`/products/${product.permaLink}`} className=' w-full' ><CardButton name='Details' /></Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard