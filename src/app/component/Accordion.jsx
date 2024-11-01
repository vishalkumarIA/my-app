"use client";

import { useState } from "react";
import "./AccordionComp.css";

export default function AccordionComp() {
  const accordionData = [
    {
      title: "Personal Training",
      content:
        "We are well known for competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Divine Gym personal training program is for them.",
    },
    {
      title: "Group Program",
      content:
        "We provides a variety of group fitness programs such as wight lifting, Cross-fit, and much more tailored to cater to diverse fitness preferences and goals. These group programs offer a supportive environment and a sense of community while engaging participants in fun and effective workouts.",
    },
    {
      title: "Training Floor",
      content:
        "When you step onto our Training Floor, you’re not just entering a workout area; you’re stepping into a realm of possibilities where your fitness aspirations can become a reality. We’re here to support you every step of the way, providing the best environment for growth, strength, and transformation. Join us today and experience the difference!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="container">
        <h2>Our Programs</h2>
        <div className="accordion">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}
