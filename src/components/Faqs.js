"use client"
import { useState } from "react";
import avatarGroup from "@/assets/avatarGroup.png";
import Image from "next/image";
const Faqs = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    const faqs = [
        {
          question: "Is there a free trial available?",
          answer:
            "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
          question: "Can I change my plan later?",
          answer: "Yes, you can change your plan at any time.",
        },
        {
          question: "What is your cancellation policy?",
          answer: "You can cancel anytime, no questions asked.",
        },
        {
          question: "Can other info be added to an invoice?",
          answer: "Yes, we can add custom details to your invoice.",
        },
        {
          question: "How does billing work?",
          answer: "Billing is processed at the start of each billing cycle.",
        },
        {
          question: "How do I change my account email?",
          answer: "You can change your account email in the account settings.",
        },
      ];
  return (
    <div>
              <section className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Frequently asked questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Everything you need to know about the product and billing.
        </p>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 mb-4">
            <button
              className="flex justify-between items-center w-full py-4 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>
                {activeIndex === index ? (
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}

        <div className="my-10 p-6 bg-gray-50 text-center rounded-lg">
          <Image className=" mx-auto" src={avatarGroup} />
          <p className="text-lg my-4 font-bold">Still have questions?</p>
          <p className="text-gray-600 text-[18px] mb-6">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="px-4 py-2 text-white bg-[#7F56D9] rounded-lg">
            Get in touch
          </button>
        </div>
      </section>
    </div>
  )
}

export default Faqs