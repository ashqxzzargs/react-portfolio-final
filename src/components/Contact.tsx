import React, { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/71btkto1bz2o144hald3h3236jg7dokz",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        console.error("Form submission failed:", response);
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl text-red-700">Email Me</h2>
      <h3 className=" leading-5 font-semibold">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
            <label htmlFor="name" className="font-semibold text-md">
              Your Full Name:
            </label>
            <input
              type="text"
              className="form-control border p-2 rounded w-full"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="font-semibold text-lg">
              Your Email Address:
            </label>
            <input
              type="email"
              className="form-control border p-2 rounded w-full"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="message" className="font-semibold text-lg">
              Your Message:
            </label>
            <textarea
              id="message"
              className="form-control border p-2 rounded w-full"
              name="message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary p-2 bg-blue-500 text-white rounded "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {formSubmitted && (
          <div className="mt-4 text-green-500 font-semibold">
            Your message has been submitted successfully! Redirecting...
          </div>
        )}
      </h3>
    </div>
  );
};

export default Contact;
