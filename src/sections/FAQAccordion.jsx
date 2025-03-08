import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import GradientButton from "@/components/GradientButton";

const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience required!",
  },
  {
    question: "What tools do I need to take this course?",
    answer:
      "You'll need:\n✔ A tablet (iPad, Wacom, or any drawing tablet)\n✔ Digital art software (Procreate, Photoshop, or Krita)\n✔ A passion for creativity",
  },
  {
    question: "How long is the course?",
    answer:
      "The course runs for 4 weeks, with step-by-step lessons covering everything from sketching to advanced digital painting techniques.",
  },
  {
    question: "Is this a live or recorded course?",
    answer:
      "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes! After completing the course, you'll receive a Certificate of Completion, which can boost your portfolio and career opportunities.",
  },
  {
    question: "Can I monetize my digital art after this course?",
    answer:
      "Absolutely! The course includes a bonus session on freelancing & selling your art so you can start earning right away.",
  },
  {
    question: "What happens if I miss a live session?",
    answer:
      "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing.",
  },
  {
    question: "How do I apply the coupon code?",
    answer:
      "Once you sign up, you’ll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses.",
  },
  {
    question: "What if I don't have a tablet?",
    answer:
      "You can still take the course using a mouse & free digital art software (like Krita). However, a tablet is recommended for better results.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "The ₹79 booking fee is non-refundable, but we’re confident you’ll love the course!",
  },
  {
    question: "How do I enroll?",
    answer:
      "Click the 'Enroll Now' button, make the payment, and get instant access to the course materials!",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 whitespace-pre-line">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <GradientButton>Let’s get started</GradientButton>
      </div>
    </div>
  );
}
