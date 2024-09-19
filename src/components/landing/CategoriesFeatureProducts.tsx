


"use client"
import { getAllProducts } from '@/lib/api/getAllProducts';
import React, { useEffect, useState } from 'react';
import ProductCard from '../products/ProductCard';
import { IProduct } from '@/types';



const CategoriesFeatureProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const ProductsData = await getAllProducts();
                // Map the products data to correct the field names
                if (ProductsData) {
                    const correctedProducts = ProductsData.map((product: any) => ({
                        ...product,
                        productType: product.prodcutType, // Correct the misspelled field
                        productOrigin: product.prodcutOrigin // Correct the misspelled field
                    }));
                    setProducts(correctedProducts ?? []);
                }


            } catch (error) {
                console.error("Failed to fetch Products", error);
                setProducts([]);
            }
        };
        fetchProducts();
    }, []);

    // Categorize products based on their category field
    const categorizedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, IProduct[]>);

    return (
        <div>
            {Object.entries(categorizedProducts).map(([category, products]) => (
                <div key={category} className='py-4'>
                    <div className='flex flex-row justify-center items-center py-4'>
                        <h1 className=' bg-[#703f07] text-[#f0c76e] px-8 py-2 text-lg font-bold rounded-sm uppercase'>
                            {category}
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border p-4'>
                        {
                            products?.slice(0, 4).map((item,index)=>(
                                <ProductCard product={item} key={index}/>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoriesFeatureProducts;
