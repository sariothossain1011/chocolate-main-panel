"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiCalendarTodoFill, RiDeleteBin5Line } from "react-icons/ri";
import {  IStoreItem } from "@/types/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { removeFromWishlist } from "@/redux/state-slice/WishlistSlice";
import Button from "@/components/button/Button";

const WishlistPage: React.FC = () => {
  const dispatch = useDispatch();

  const [isMounted, setIsMounted] = useState(false); // Check for client-side mounting

  // Use useEffect to ensure consistent state between SSR and CSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { wishlistCount, wishlistItems } = useSelector(
    (state: RootState) => ({
      wishlistCount: state.wishlist.wishlistCount,
      wishlistItems: state.wishlist.wishlistItems,
    })
  ) as {
    wishlistCount: number;
    wishlistItems: IStoreItem[];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };

  const removeWishLIstItem = (id: string) => {
    dispatch(removeFromWishlist(id));
  };


  if (!isMounted) {
    return <div>Loading...</div>;
  }

  if (wishlistItems.length == 0) {
    return <div className=' text-center py-20'>
      <h1>Empty Cart Value</h1>
    </div>
  }

  return (
    <div className="container">
      <div className="text-center py-20 md:py-40">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-medium uppercase">
          Page Wishlist
        </h1>
        <p className="text-sm font-normal py-2">
          <Link href="/">Home</Link> &#x2022; <span>Page Wishlist</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 pb-10 md:pb-20">
        {wishlistItems?.map((item) => (
          <div
            key={item.uuid}
            className="flex flex-row justify-between items-center rounded-xl border p-4 md:p-8 hover:shadow-xl duration-300"
          >
            <div className="flex flex-row items-center gap-4">
              <RiDeleteBin5Line
                size={18}
                className="cursor-pointer"
                onClick={() => removeWishLIstItem(item.uuid)}
              />
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="text-[12px] text-gray-700">
                <p className="font-bold">{item.title}</p>
                <p>${item.discountPrice}</p>
                <p className="flex gap-2 items-center">
                  <RiCalendarTodoFill size={14} />
                  <span>{formatDate(item.date)}</span>
                </p>
              </div>
            </div>
            <Link href={`/products/${item.permaLink}`}
              className="w-40"
            >
            
              <Button name="DETAILS"/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
