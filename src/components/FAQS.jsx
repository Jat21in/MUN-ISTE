// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { FiMail } from "react-icons/fi";
// import { MdLocationOn } from "react-icons/md";
// import Contact from "./contact/Contact";

// const PlusMinusIcon = ({ open }) => (
//   <svg
//     className="w-5 h-5 text-red-600"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="3"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="12" cy="12" r="10" />
//     {open ? (
//       <line x1="8" y1="12" x2="16" y2="12" /> // minus sign
//     ) : (
//       <>
//         <line x1="12" y1="8" x2="12" y2="16" /> {/* plus vertical */}
//         <line x1="8" y1="12" x2="16" y2="12" /> {/* plus horizontal */}
//       </>
//     )}
//   </svg>
// );

// const faqs = [
//   {
//     id: 1,
//     question: "What is CU MUN?",
//     answer:
//       "CU MUN (Model United Nations) is a simulation of the UN where students debate global issues as country delegates.",
//     subparts: [
//       {
//         question: "What kind of issues are discussed?",
//         answer: "Committees simulate topics like international security, economics, and human rights.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     question: "Who can participate?",
//     answer:
//       "Any high school or university student with an interest in diplomacy, politics, or public speaking can participate.",
//     subparts: [
//       {
//         question: "Is there an age limit?",
//         answer: "Participants should be between 16 and 28 years of age.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     question: "Do I need experience to attend?",
//     answer:
//       "No prior MUN experience is required! We welcome beginners and offer training resources beforehand.",
//     subparts: [
//       {
//         question: "Are there training sessions before the event?",
//         answer: "Yes, orientation and pre-event training will be provided to all participants.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     question: "Is there a registration fee?",
//     answer:
//       "Yes, there is a small registration fee that covers materials, meals, and participation. Details are on the registration page.",
//     subparts: [
//       {
//         question: "Can I pay on the spot?",
//         answer: "We recommend online payment in advance to confirm your slot.",
//       },
//     ],
//   },
//   {
//     id: 5,
//     question: "Are meals and accommodations provided?",
//     answer:
//       "Yes, meals are provided during the event. Accommodation for outstation participants is arranged on prior request.",
//     subparts: [
//       {
//         question: "Are vegetarian and vegan options available?",
//         answer: "Yes, we provide vegetarian and vegan meals as part of our catering.",
//       },
//       {
//         question: "Where will I stay if I'm from out of town?",
//         answer: "You'll be accommodated in university guest houses or nearby partner hostels.",
//       },
//     ],
//   },
//   {
//     id: 6,
//     question: "How do committees and country allocations work?",
//     answer:
//       "After registration, you will be assigned a country and committee based on your preferences and experience.",
//     subparts: [
//       {
//         question: "Can I choose my country?",
//         answer: "We try our best to match your preference, but final allocation depends on availability.",
//       },
//       {
//         question: "How many delegates per country?",
//         answer: "Each country usually has 1–2 delegates depending on the committee.",
//       },
//     ],
//   },
// ];

// const FAQ = () => {
//   const [openItem, setOpenItem] = useState(null);
//   const [openSubItem, setOpenSubItem] = useState({});

//   const toggleItem = (id) => {
//     setOpenItem(openItem === id ? null : id);
//   };

//   const toggleSubItem = (parentId, index) => {
//     setOpenSubItem((prev) => ({
//       ...prev,
//       [parentId]: prev[parentId] === index ? null : index,
//     }));
//   };

//   return (
//     <section id="faq" className="relative py-20 bg-gradient-to-b from-white to-red-50">
//       {/* Decorative wave */}
//       <div
//         className="absolute top-0 left-0 w-full opacity-10"
//         style={{ height: 160, pointerEvents: "none" }}
//       >
//         <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
//           <path
//             fill="#f87171"
//             fillOpacity="1"
//             d="M0,32L60,69.3C120,107,240,181,360,202.7C480,224,600,192,720,170.7C840,149,960,139,1080,160C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
//           ></path>
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="flex justify-center mb-12">
//         <h2
//           className="text-3xl font-bold border-b-4 border-red-600 pb-3"
//           style={{ fontFamily: '"Merriweather", serif' }}
//         >
//           Frequently Asked Questions
//         </h2>
//       </div>

//         <div className="max-w-3xl mx-auto space-y-4">
//           {faqs.map((faq) => (
//             <div
//               key={faq.id}
//               className="border border-gray-300 rounded-xl bg-white shadow-md "
//             >
//               <button
//                 onClick={() => toggleItem(faq.id)}
//                 className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-red-700 hover:bg-red-50 focus:outline-none"
//               >
//                 {faq.question}
//                 <ChevronDown
//                   className={`w-5 h-5 text-red-600 will-change-transform ${
//                     openItem === faq.id ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {/* Removed max-height transition, added opacity & scale for smooth toggle */}
//               <div
//                 className={`origin-top overflow-hidden transition-transform transition-opacity duration-300 ease-in-out ${
//                   openItem === faq.id ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"
//                 }`}
//                 style={{ transformOrigin: "top" }}
//               >
//                 <div className="px-6 pb-4 pt-1 text-gray-700 bg-gray-50">
//                   <p>{faq.answer}</p>

//                   {/* Subparts */}
//                   {faq.subparts && faq.subparts.length > 0 && (
//                     <div className="mt-4 space-y-2">
//                       {faq.subparts.map((sub, idx) => (
//                         <div key={idx} className="border-t border-gray-200 pt-3">
//                           <button
//                             onClick={() => toggleSubItem(faq.id, idx)}
//                             className="flex justify-between items-center w-full text-sm font-medium text-red-700 no-underline focus:outline-none"
//                           >
//                             {sub.question}
//                             <PlusMinusIcon open={openSubItem[faq.id] === idx} />
//                           </button>
//                           {openSubItem[faq.id] === idx && (
//                             <div className="mt-2 text-gray-600 text-sm pl-3">{sub.answer}</div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact CTA */}
//         <div className="mt-20 text-center">
//           <p className="text-gray-700 mb-4 flex justify-center items-center gap-2">
//             <FiMail className="text-red-600" /> Still have questions?
//           </p>
//           <a
//             href="mailto:iste@cumail.in"
//             className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg  duration-300"
//           >
//             Contact Us
//           </a>
//           <Contact />
//         </div>

//         {/* Map */}
//         <div className="mt-20 max-w-5xl mx-auto">
//           <div className="flex justify-center mb-12">
//             <h3
//               className="text-3xl font-bold border-b-4 border-red-600 pb-3"
//               style={{ fontFamily: '"Merriweather", serif' }}
//             >
//               Where To Find Us
//             </h3>
//           </div>
//           <div className="flex justify-center mb-4 gap-4 text-red-600 font-semibold">
//             <MdLocationOn size={24} />
//             <p>Chandigarh Univeristy</p>
//           </div>
//           <iframe
//   title="CU MUN Location"
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.205774247643!2d76.57713977473102!3d30.768454074625103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feee57f2db8ab%3A0x84be7a2e96eb72e9!2sChandigarh%20University%2C%20Gharuan!5e0!3m2!1sen!2sin!4v1688287262593!5m2!1sen!2sin"
//   width="100%"
//   height="350"
//   className="rounded-lg shadow-lg border border-gray-300"
//   allowFullScreen=""
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
// />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

//

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
// import Contact from "./contact/Contact";

const PlusMinusIcon = ({ open }) => (
  <svg
    className="w-4 h-4 md:w-5 md:h-5 text-red-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    {open ? (
      <line x1="8" y1="12" x2="16" y2="12" />
    ) : (
      <>
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </>
    )}
  </svg>
);

const faqs = [
  {
    id: 1,
    question: "What is CU MUN?",
    answer:
      "CU MUN (Model United Nations) is a simulation of the UN where students debate global issues as country delegates.",
    subparts: [
      {
        question: "What kind of issues are discussed?",
        answer:
          "Committees simulate topics like international security, economics, and human rights.",
      },
    ],
  },
  {
    id: 2,
    question: "Who can participate?",
    answer:
      "Any high school or university student with an interest in diplomacy, politics, or public speaking can participate.",
    subparts: [
      {
        question: "Is there an age limit?",
        answer: "Participants should be between 16 and 28 years of age.",
      },
    ],
  },
  {
    id: 3,
    question: "Do I need experience to attend?",
    answer:
      "No prior MUN experience is required! We welcome beginners and offer training resources beforehand.",
    subparts: [
      {
        question: "Are there training sessions before the event?",
        answer:
          "Yes, orientation and pre-event training will be provided to all participants.",
      },
    ],
  },
  {
    id: 4,
    question: "Is there a registration fee?",
    answer:
      "Yes, there is a small registration fee that covers materials, meals, and participation. Details are on the registration page.",
    subparts: [
      {
        question: "Can I pay on the spot?",
        answer: "We recommend online payment in advance to confirm your slot.",
      },
    ],
  },
  {
    id: 5,
    question: "Are meals and accommodations provided?",
    answer:
      "Yes, meals are provided during the event. Accommodation for outstation participants is arranged on prior request.",
    subparts: [
      {
        question: "Are vegetarian and vegan options available?",
        answer:
          "Yes, we provide vegetarian and vegan meals as part of our catering.",
      },
      {
        question: "Where will I stay if I'm from out of town?",
        answer:
          "You'll be accommodated in university guest houses or nearby partner hostels.",
      },
    ],
  },
  {
    id: 6,
    question: "How do committees and country allocations work?",
    answer:
      "After registration, you will be assigned a country and committee based on your preferences and experience.",
    subparts: [
      {
        question: "Can I choose my country?",
        answer:
          "We try our best to match your preference, but final allocation depends on availability.",
      },
      {
        question: "How many delegates per country?",
        answer:
          "Each country usually has 1–2 delegates depending on the committee.",
      },
    ],
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);
  const [openSubItem, setOpenSubItem] = useState({});

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const toggleSubItem = (parentId, index) => {
    setOpenSubItem((prev) => ({
      ...prev,
      [parentId]: prev[parentId] === index ? null : index,
    }));
  };

  return (
    <section
      id="faq"
      className="relative py-12 md:py-20 bg-gradient-to-b from-white to-red-50"
    >
      {/* Decorative wave - made smaller on mobile */}
      <div
        className="absolute top-0 left-0 w-full opacity-10"
        style={{ height: "10vh", maxHeight: 160, pointerEvents: "none" }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#f87171"
            fillOpacity="1"
            d="M0,32L60,69.3C120,107,240,181,360,202.7C480,224,600,192,720,170.7C840,149,960,139,1080,160C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* FAQ Title */}
        <div className="flex justify-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold border-b-4 border-red-600 pb-2 md:pb-3">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-300 rounded-lg md:rounded-xl bg-white shadow-sm md:shadow-md"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex justify-between items-center px-4 py-3 md:px-6 md:py-4 text-left text-base md:text-lg font-semibold text-red-700 hover:bg-red-50 focus:outline-none"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <span className="text-left pr-2">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 w-4 h-4 md:w-5 md:h-5 text-red-600 transition-transform duration-200 ${
                    openItem === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-content-${faq.id}`}
                className={`transition-all duration-300 ease-in-out ${
                  openItem === faq.id
                    ? "opacity-100 max-h-[1000px]"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <div className="px-4 pb-3 pt-0 md:px-6 md:pb-4 md:pt-1 text-gray-700 bg-gray-50 text-sm md:text-base">
                  <p>{faq.answer}</p>

                  {/* Subparts */}
                  {faq.subparts && faq.subparts.length > 0 && (
                    <div className="mt-3 md:mt-4 space-y-2">
                      {faq.subparts.map((sub, idx) => (
                        <div
                          key={idx}
                          className="border-t border-gray-200 pt-2 md:pt-3"
                        >
                          <button
                            onClick={() => toggleSubItem(faq.id, idx)}
                            className="flex justify-between items-center w-full text-xs md:text-sm font-medium text-red-700 no-underline focus:outline-none"
                            aria-expanded={openSubItem[faq.id] === idx}
                          >
                            <span className="text-left pr-2">
                              {sub.question}
                            </span>
                            <PlusMinusIcon open={openSubItem[faq.id] === idx} />
                          </button>
                          {openSubItem[faq.id] === idx && (
                            <div className="mt-1 md:mt-2 text-gray-600 text-xs md:text-sm pl-2 md:pl-3">
                              {sub.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 md:mt-20 text-center">
          <p className="text-gray-700 mb-3 md:mb-4 flex justify-center items-center gap-2">
            <FiMail className="text-red-600" /> Still have questions?
          </p>
          <a
            href="mailto:iste@cumail.in"
            className="inline-block px-5 py-2 md:px-6 md:py-3 bg-red-600 hover:bg-red-700 text-white font-medium md:font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300 text-sm md:text-base"
          >
            Contact Us
          </a>
          {/* <Contact /> */}
        </div>

        {/* Location Section */}
        <div className="mt-12 md:mt-20 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold border-b-4 border-red-600 pb-2 md:pb-3">
              Where To Find Us
            </h3>
          </div>
          <div className="flex justify-center mb-3 md:mb-4 gap-2 md:gap-4 text-red-600 font-medium md:font-semibold items-center">
            <MdLocationOn size={20} className="md:size-6" />
            <p className="text-sm md:text-base">Chandigarh University</p>
          </div>
          <iframe
            title="CU MUN Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.205774247643!2d76.57713977473102!3d30.768454074625103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feee57f2db8ab%3A0x84be7a2e96eb72e9!2sChandigarh%20University%2C%20Gharuan!5e0!3m2!1sen!2sin!4v1688287262593!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-lg shadow-md md:shadow-lg border border-gray-300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
