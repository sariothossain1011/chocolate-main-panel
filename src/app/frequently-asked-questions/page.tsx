"use client";
import AccordionItem from "@/components/common/AccordionItem";
import Link from "next/link";
import React, { useState } from "react";

interface Accordion {
  id: number;
  title: string;
  desc: string;
}

const FrequentlyAskedQuestionsPage: React.FC = () => {
  const AccordionData: Accordion[] = [
    {
      id: 1,
      title: "What shipping methods are availbale?",
      desc: "Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.",
    },
    {
      id: 2,
      title: "How to order?",
      desc: "Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.",
    },
    {
      id: 3,
      title: "How long will it take to get my package?",
      desc: "Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.",
    },
    {
      id: 4,
      title: "Where are your products sent from?",
      desc: "Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.",
    },
    {
      id: 5,
      title: "How to change or modify billing address?",
      desc: "Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.",
    },
    {
      id: 6,
      title: "Why can’t I log into my account?",
      desc: "Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="p-6 md:p-12">
      <div className=" text-center py-10">
        <h1 className=" text-xl md:text-4xl font-bold ">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      <div className=" flex flex-col  gap-8 py-10 md:py-14 text-md font-normal">
        <p className=" font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet
          pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae
        </p>
        <p>
          Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id
          arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros
          maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed
          purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum,
          lobortis sed mauris. Integer congue, sem elementum varius tristique,
          erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat.
          Pellentesque elementum justo at velit fringilla, eu feugiat erat
          fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id
          lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin
          hendrerit lacus turpis.
        </p>
      </div>

      <div>
        {AccordionData.map((data) => {
          return (
            <AccordionItem
              key={data.id}
              open={data.id === open}
              tilte={data.title}
              desc={data.desc}
              toggle={() => toggle(data.id)}
            />
          );
        })}
      </div>

      <div className="flex flex-col  justify-center items-center gap-4 py-10 md:py-20">
        <p className="text-2xl  font-semibold">
          Can&lsquo;t find the answer you are looking for?
        </p>
        <p className="text-2xl  font-semibold">We&lsquo;re Here to Help!</p>
        <Link href="/contact-us" className="bg-[#132842] text-center  w-48 py-3  text-white rounded-md text-md">
          Contact Us Now
        </Link>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionsPage;
