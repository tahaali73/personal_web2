import React from "react";
import Hero from "./Hero";
import Creative from "./Creative";
import Benefits from "./Benefits";
import MyWork from "./myWork";
import Faq from "./Faq";
import FaqComp from "../../Components/FaqComp";

function Home() {
  const faqs = [
    {
      question: "What is the meaning of life?",
      answer: "The meaning of life is a philosophical question.",
    },
    {
      question: "How do I get started?",
      answer: "You can get started by reading our documentation.",
    },
    {
      question: "What services do you offer?",
      answer:
        "I offer a full range of web design services including UI/UX design, responsive development, and e-commerce solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity, but most websites take 4-8 weeks from concept to launch.",
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer:
        "Yes, I offer monthly maintenance plans to keep your website secure, updated, and performing optimally.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "I offer both project-based pricing and retainer options depending on your needs.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely! I specialize in modernizing outdated websites with improved design and functionality.",
    },
    {
      question: "Do you provide hosting services?",
      answer:
        "While I don't provide hosting directly, I can recommend reliable hosting providers and help with setup.",
    },
  ];
  return (
    <div className="overflow-y-auto scrollbar-hide flex flex-col items-center">
      <Hero />
      <Creative />
      <Benefits />
      <MyWork />
      <Faq faqs={faqs} />
    </div>
  );
}

export default Home;
