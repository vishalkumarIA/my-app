"use client";
import { useState, useEffect } from "react";
import formData from "./formData.json";
import "./form.css";

export default function SignUpForm() {
  const [formState, setFormState] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      return savedData
        ? JSON.parse(savedData)
        : formData.fields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
          }, {});
    }
    return formData.fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formState));
    }
  }, [formState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setSubmitted(true);
    if (typeof window !== "undefined") {
      localStorage.removeItem("formData");
    }
  };

  return (
    <div className="formWrapper">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {formData.fields.map((field) => (
            <div className="formGroup" key={field.name}>
              <label htmlFor={field.name}>{field.label}:</label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formState[field.name]}
                  onChange={handleChange}
                  required={field.required}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formState[field.name]}
                  onChange={handleChange}
                  required={field.required}
                />
              )}
            </div>
          ))}
          <button type="submit" className="submitButton">
            {formData.submitLabel}
          </button>
        </form>
      ) : (
        <div className="thankYouMessage">
          <h2>{formData.thankYouMessage}</h2>
          <p>{formData.thankYouDescription}</p>
        </div>
      )}
    </div>
  );
}
