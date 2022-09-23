import Image from "next/image";
import React from "react";

const Offers = () => {
  return (
    <div className="container mx-auto my-20 grid offer-grid gap-2">
      <div className="h-72">
        <div>
          <div className="h-72 relative">
            <Image
              layout="fill"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-72">
        <div>
          <div className="h-72 relative">
            <Image
              layout="fill"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-72">
        <div>
          <div className="h-72 relative">
            <Image
              layout="fill"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
