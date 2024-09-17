"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextarea from "@/components/forms/FormTextarea";
const ContactForm = () => {
  const submitHandler = (data:any) => {
    console.log({data});
  };

  return (
    <Form
      className=" min-w-full md:min-w-[60%] flex flex-col gap-2 py-3 "
      submitHandler={submitHandler}
    >
      <div className=" grid md:grid-cols-2 gapx-4 gap-3">
        <FormInput
          name=""
          id=""
          placeholder="YOUR NAME"
          className=" border px-4 py-3 text-sm rounded-sm outline-none"
        />
        <FormInput
          name=""
          id=""
          placeholder="YOUR EMAIL"
          className=" border px-4 py-3 text-sm rounded-sm outline-none"
        />
      </div>
      <FormInput
        name=""
        id=""
        placeholder="PHONE NUMBER "
        className=" border px-4 py-3 text-sm rounded-sm outline-none"
      />
      <FormTextarea
        name=""
        id=""
        placeholder="YOUR MEASSAGE"
        rows={8}
        className=" border px-4 py-3 text-sm rounded-sm outline-none"
      />
      <button className="bg-[#132842] w-40 h-10 text-white rounded-md text-sm">
        Submit Now
      </button>
    </Form>
  )
}

export default ContactForm