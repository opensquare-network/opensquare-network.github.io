import styled from "styled-components";
import React from "react";
import Icon from "./corner-icon.svg";

const InnerSection = styled.section``;

export default function Products() {
  return (
    <InnerSection className="flex flex-wrap	content-center margin-auto">
      {[1, 2, 3, 4].map((key) => (
        <div
          key={key}
          className="relative w-484px h-136px px-60px py-24px shadow-lg mr-76px mb-76px"
        >
          <Icon className="absolute  -top-16 -left-16" />
          <h3 className="text-xl mb-8px">Pay to Ask</h3>
          <p className="text-gray-300">
            Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
            euismod pulvinar nisl.
          </p>
        </div>
      ))}
    </InnerSection>
  );
}
