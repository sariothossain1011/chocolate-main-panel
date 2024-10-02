"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiCalendarTodoFill, RiDeleteBin5Line } from "react-icons/ri";
import { IStoreItem } from "@/types/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { removeFromWishlist } from "@/redux/state-slice/WishlistSlice";
import Button from "@/components/button/Button";
import PageTitle from "@/components/common/PageTitle";

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
    <div className="container py-10">
      <PageTitle title="Wishlist Page"/>
      <div className="flex flex-col gap-4">
        {wishlistItems?.map((item) => (
          <div
            key={item.uuid}
            className=" flex flex-col md:flex-row justify-between items-center rounded-sm border gap-2  p-4 shadow duration-300"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">

              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="rounded-md"
              />
              <div className=" text-gray-700  text-center md:text-left">
                <p className="text-md md:text-xl font-semibold">{item.title}</p>
                <p className=" text-md md:text-lg font-bold">${item.discountPrice}</p>
                <p className="flex gap-2 items-center justify-center md:justify-start text-md">
                  <RiCalendarTodoFill size={14} />
                  <span>{formatDate(item.date)}</span>
                </p>
              </div>
            </div>
            <div className=" min-w-full md:min-w-80 flex flex-col justify-end items-end gap-3 md:p-4">
             
               <Button name="DELETE" className="w-full"  onClick={() => removeWishLIstItem(item.uuid)}/>
              <Link href={`/products/${item.permaLink}`}
                className="w-full"
              >

                <Button name="DETAILS" />
              </Link>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
