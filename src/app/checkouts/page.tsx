"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Field, Label, Select } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "@/axios/axiosInstance";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Cookies from "js-cookie";
import { clearCart } from "@/redux/state-slice/CartSlice";
import { RootState } from "@/redux/store/Store";
import { IStoreItem } from "@/types";

const GET_DEFAULTS_ADDRESS = `
  query{
    getDefaultAddress{
        fullName
        addressEmail
        phoneNumber
        fullAddress
        
    }
}
`;

interface CreateOrderInput {
  trackingNumber?: string;
  note?: string;
  shippingMethodId: string;
  shippingAddress: {
    fullName: string;
    addressEmail: string;
    phoneNumber: string;
    fullAddress: string;
    save?: boolean;
  };
  orderedItems: {
    productName: string;
    productPrice: string;
    quantity: string;
  }[];
  payment: {
    method: string;
    transactionId?: string;
  };
  couponCode?: string;
}

const CheckoutPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedDeliveryLocation, setSelectedDeliveryLocation] = useState<string>("insite-dhaka");
  console.log({ selectedDeliveryLocation })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedPayment, setSelectedPayment] = useState({
    title: "Cash On Delivery",
    value: "COD",
  });

  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems as IStoreItem[]
  );
  const comment = useSelector((state: RootState) => state.cart.comment);

  const token = Cookies.get("accessKey");

  // useEffect(() => {
  //   fetchDefaultAddress();
  //   if (!token) {
  //     router.push("/login");
  //   }
  // }, [token, router]);



  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeliveryLocation(event.target.value);
  };

  const submitHandler = async (data: any) => {
    console.log({ data },{comment})
    // setLoading(true);
    // setError(null);
    // try {
    //   const orderInput: CreateOrderInput = {
    //     shippingMethodId:
    //       selectedDeliveryLocation === "insite-dhaka"
    //         ? "19e8b3dc-d4b0-46f0-a22f-f52e09718400"
    //         : "9a6cbf57-b55f-430d-aca6-7f4fc08d1b36",
    //     shippingAddress: {
    //       fullName: data.name,
    //       addressEmail: data.email,
    //       phoneNumber: data.phone,
    //       fullAddress: data.address,
    //     },
    //     orderedItems: cartItems.map((item) => ({
    //       productName: item.title,
    //       productPrice: item.buyPrice.toString(),
    //       quantity: item.quantity.toString(),
    //     })),
    //     payment: {
    //       method: selectedPayment.value,
    //     },
    //     note: comment,
    //   };

    //   const response = await instance.post("/", {
    //     query: `
    //         mutation CreateOrder($input: CreateOrderInput!) {
    //           createOrder(input: $input) {
    //             id
    //             trackingNumber
    //             status
    //             total
    //           }
    //         }
    //       `,
    //     variables: {
    //       input: orderInput,
    //     },
    //   });

    //   if (response.data.errors && response.data.errors.length > 0) {
    //     setError(response.data.errors[0].message);
    //   } else if (response.data.data.createOrder) {
    //     typeof window !== "undefined" && localStorage.removeItem("cart");
    //     dispatch(clearCart());
    //     router.push(
    //       `/confirmation/${response.data.data.createOrder?.trackingNumber}`
    //     );
    //   }
    // } catch (error) {
    //   console.error("Error creating order:", error);
    //   setError("Error creating order. Please try again later.");
    // } finally {
    //   setLoading(false);
    // }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );
  const deliveryCost = selectedDeliveryLocation === "insite-dhaka" ? 70 : 130;
  const total = subtotal + deliveryCost;

  const fetchDefaultAddress = async () => {
    // try {
    //   const response = await instance.post("/", {
    //     query: GET_DEFAULTS_ADDRESS,
    //   });
    //   if (response.data.errors && response.data.errors.length > 0) {
    //     setError(response.data.errors[0].message);
    //   } else if (response.data.data.getDefaultAddress) {
    //     setDefaultAddress(response.data.data.getDefaultAddress);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // const defaultValues = {
  //   name: defaultAddress?.fullName,
  //   email: defaultAddress?.addressEmail,
  //   phone: defaultAddress?.phoneNumber,
  //   address: defaultAddress?.fullAddress,
  // };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
      <Form
        submitHandler={submitHandler}
        className="min-w-full flex flex-col gap-4"
      >
        <Field>
          <Label className="text-sm/6 font-medium text-black">Location</Label>
          <p className="mt-4 text-sm">Selected Address: {selectedDeliveryLocation}</p>
          <div className="relative">
            <Select
              value={selectedDeliveryLocation}
              onChange={handleChange}
              className={clsx(
                "mt-3 block w-full appearance-none rounded-lg border py-3 px-3 text-sm/6 text-black",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                "*:text-black"
              )}
            >
              <option value="insite-dhaka">Insite Dhaka</option>
              <option value="outsite-dhaka">Outsite Dhaka</option>
            </Select>
            <IoIosArrowDown
              className="group pointer-events-none absolute top-4 right-2.5 size-4 fill-black"
              aria-hidden="true"
            />
          </div>
        </Field>
        <FormInput
          name="name"
          id="name"
          placeholder="FULL NAME"
          type="text"
          required
          className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
        />
        <FormInput
          name="email"
          id="email"
          placeholder="ENTER YOUR EMAIL"
          type="email"
          required
          className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
        />
        <FormInput
          name="phone"
          id="phone"
          placeholder="ENTER YOUR PHONE"
          type="text"
          required
          className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
        />
        <FormInput
          name="address"
          id="address"
          placeholder="FULL ADDRESS"
          type="text"
          required
          className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
        />
        {selectedDeliveryLocation === "insite-dhaka" && (
          <div className="flex flex-row gap-4 text-center">
            <button
              type="button"
              onClick={() =>
                setSelectedPayment({
                  title: "Cash On Delivery",
                  value: "COD",
                })
              }
              className={`py-8 w-48 px-2 ${selectedPayment.value === "COD"
                  ? "bg-[#132842] text-white"
                  : "bg-slate-200"
                } `}
            >
              Cash On Delivery
            </button>
            <button
              type="button"
              onClick={() =>
                setSelectedPayment({
                  title: "Bkash",
                  value: "BKASH",
                })
              }
              disabled
              className={`py-8 w-48 px-2 ${selectedPayment.value === "BKASH"
                  ? "bg-[#132842] text-white"
                  : "bg-slate-200"
                } `}
            >
              Bkash
            </button>
          </div>
        )}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="min-w-full bg-[#132842] py-4 text-white rounded-full text-base"
        >
          {loading ? <LoadingSpinner /> : "Pay Now"}
        </button>
      </Form>
      <div className="flex flex-col gap-4">
        {cartItems?.map((item, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <span className="absolute -top-1 -right-1 z-20 bg-gray-300 rounded-full flex justify-center text-[14px] w-6 h-6">
                  {item.quantity}
                </span>
              </div>
              <div className="text-sm font-normal">
                <p>{item.title}</p>
              </div>
            </div>
            <div className="text-sm font-normal">${item.discountPrice}</div>
          </div>
        ))}
        <div className="flex flex-row justify-between items-center text-sm font-normal">
          <span>Sub-total</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex flex-row justify-between items-center text-sm font-normal">
          <span>Shipping</span>
          <span>uttara-11, Dhaka</span>
        </div>
        <div className="flex flex-row justify-between items-center text-sm font-normal">
          <span>Delivery Cost</span>
          <span>${deliveryCost}</span>
        </div>
        <div className="flex flex-row justify-between items-center text-2xl font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
