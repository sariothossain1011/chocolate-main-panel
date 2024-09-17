
import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const ContactUsPage = () => {

  const Icons = [
    {
      icon: <FaFacebookF size={18} />,
      link: "",
    },
    {
      icon: <FaInstagram size={18} />,
      link: "",
    },
    {
      icon: <FaXTwitter size={18} />,
      link: "",
    },
    {
      icon: <FaTiktok size={18} />,
      link: "",
    },
  ];
  return (
    <div className=" container py-10">
      <div className="py-4">
        <h2 className="text-md font-semibold py-2">GET IN TOUCH</h2>
        <p className="text-sm font-normal">
          Please enter the detals of your request. A member of our support staff
          will respond as soon as possible
        </p>
      </div>
      <div className=" flex flex-col-reverse md:flex-row  gap-8">
        <ContactForm/>
    
        <div className=" flex flex-col gap-4 min-w-full  md:min-w-[40%]  px-4">
          <p className="text-sm font-normal">
            <span className=" font-semibold">Address:</span>123 Suspendis
            matti,Visaosang Building VST District, NY Accurms,North American
          </p>
          <p className="text-sm font-normal">
            <span className=" font-semibold">Email:</span>support@gmail.com
          </p>
          <p className="text-sm font-normal">
            <span className=" font-semibold">Call Us:</span>(012)-345-67890
          </p>
          <p className="text-sm font-normal">
            <span className=" font-semibold">Opening time:</span>Our store has
            re-opened for shopping exchanges every day{" "}
            <span className=" font-semibold">11am to 7pm</span>
          </p>
          <li className=" flex flex-row gap-2">
            {Icons.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                className=" bg-[#132842] rounded-md text-white px-2 py-2 duration-300 ease-out"
              >
                {item.icon}{" "}
              </Link>
            ))}
          </li>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
