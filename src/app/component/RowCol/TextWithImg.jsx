"use client";

import Image from "next/image";
import data from "./Data/row.json";
import "./textWithImg.css";
import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function TextWithImgComp() {
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const element = sectionRef.current;

  //   gsap.from(element, {
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "center center",
  //       toggleActions: "play none none reverse",
  //       markers: true,
  //     },
  //     opacity: 0,
  //     y: 50,
  //     delay: 1,
  //   });
  // }, []);

  return (
    <div className="container">
      <div className="rowTextImg">
        {data.rowData.map((item, index) => (
          <div className="row flex items-center" key={item.id}>
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6">
                  <Image
                    src={`/${item.imageUrl}`}
                    alt={item.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="col-md-6 p-24">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={"item.linkUrl"} target="_blank">
                    {item.linkText}
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 p-24">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={"item.linkUrl"} target="_blank">
                    {item.linkText}
                  </a>
                </div>
                <div className="col-md-6">
                  <Image
                    src={`/${item.imageUrl}`}
                    alt={item.title}
                    width={500}
                    height={300}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
