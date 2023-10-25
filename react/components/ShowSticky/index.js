import React, { useEffect } from "react";

const ShowSticky = () => {
  const listener = () => {
    if (typeof window !== 'undefined' && window?.navigator?.userAgentData?.mobile) {
      window.addEventListener("scroll", function () {
        const element = document.querySelector(
          ".vtex-sticky-layout-0-x-container--pdpSticky"
        );
        const scrollHeight = window?.scrollY || window?.pageYOffset;

        if (scrollHeight > 800 && scrollHeight < 2700) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    }
  };
  useEffect(() => {
    listener();
  }, [window?.navigator?.userAgentData?.mobile]);

  return <div></div>;
};

export default ShowSticky;
