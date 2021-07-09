import React from "react";
import Icon from "./corner-icon.svg";

export default function Products() {
  return (
    <div>
      <div className="flex flex-wrap	pt-16 content-center justify-center w-full">
        {[1, 2, 3, 4].map((key) => (
          <div
            key={key}
            className="
          relative
            pt-6
            pl-15
            mb-68px
            ml-10
            mr-8
            w-346px
            md:w-484px
            h-160px
            md:h-136px
            shadow-lg
            md:even:mt-78px
          "
          >
            <Icon className="absolute  -top-16 -left-16" />
            <h3 className="text-xl font-bold mb-2">Pay to Ask</h3>
            <p className="text-gray-300">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
