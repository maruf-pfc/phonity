"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

// Custom Accordion component
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium"
        onClick={onClick}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState({
    "item-1": false,
    "item-2": false,
    "item-3": false,
    "item-4": false,
    "item-5": false,
    "item-6": false,
    "item-7": false,
    "item-8": false,
    "item-9": false,
    "item-10": false,
    "item-11": false,
    "item-12": false,
  });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">
          Find answers to the most common questions about our products and
          services.
        </p>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Orders & Shipping</h2>
          <div className="w-full">
            <AccordionItem
              title="How long will it take to receive my order?"
              isOpen={openItems["item-1"]}
              onClick={() => toggleItem("item-1")}
            >
              <p className="text-gray-600">
                Standard shipping typically takes 3-5 business days within the
                continental US. Express shipping options are available at
                checkout for 1-2 business day delivery. International shipping
                times vary by location, usually between 7-14 business days.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Do you ship internationally?"
              isOpen={openItems["item-2"]}
              onClick={() => toggleItem("item-2")}
            >
              <p className="text-gray-600">
                Yes, we ship to most countries worldwide. International shipping
                rates and delivery times vary by location. Please note that
                customers are responsible for any customs fees, taxes, or duties
                that may apply to international orders.
              </p>
            </AccordionItem>
            <AccordionItem
              title="How can I track my order?"
              isOpen={openItems["item-3"]}
              onClick={() => toggleItem("item-3")}
            >
              <p className="text-gray-600">
                Once your order ships, you'll receive a confirmation email with
                tracking information. You can also track your order by logging
                into your account and viewing your order history. If you have
                any issues tracking your package, please contact our customer
                support team.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Is free shipping available?"
              isOpen={openItems["item-4"]}
              onClick={() => toggleItem("item-4")}
            >
              <p className="text-gray-600">
                Yes, we offer free standard shipping on all orders over $50
                within the continental US. Free shipping promotions for
                international orders may be available during special sales
                events.
              </p>
            </AccordionItem>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Returns & Refunds</h2>
          <div className="w-full">
            <AccordionItem
              title="What is your return policy?"
              isOpen={openItems["item-5"]}
              onClick={() => toggleItem("item-5")}
            >
              <p className="text-gray-600">
                We offer a 30-day return policy for most products. Items must be
                in their original condition with all packaging and accessories.
                Some products may have specific return restrictions, which will
                be noted on the product page. For more details, please visit our{" "}
                <Link to="/shipping-returns" className="text-blue-600">
                  Shipping & Returns
                </Link>{" "}
                page.
              </p>
            </AccordionItem>
            <AccordionItem
              title="How do I initiate a return?"
              isOpen={openItems["item-6"]}
              onClick={() => toggleItem("item-6")}
            >
              <p className="text-gray-600">
                To initiate a return, log into your account, go to your order
                history, and select the "Return Item" option for the relevant
                order. Follow the prompts to complete the return request. Once
                approved, you'll receive a return shipping label and
                instructions. If you need assistance, our customer service team
                is available to help.
              </p>
            </AccordionItem>
            <AccordionItem
              title="When will I receive my refund?"
              isOpen={openItems["item-7"]}
              onClick={() => toggleItem("item-7")}
            >
              <p className="text-gray-600">
                Refunds are typically processed within 5-7 business days after
                we receive and inspect your return. The time it takes for the
                refund to appear in your account depends on your payment method
                and financial institution, usually 3-10 additional business
                days.
              </p>
            </AccordionItem>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Products & Warranty</h2>
          <div className="w-full">
            <AccordionItem
              title="Are your products covered by warranty?"
              isOpen={openItems["item-8"]}
              onClick={() => toggleItem("item-8")}
            >
              <p className="text-gray-600">
                Yes, most of our products come with a manufacturer's warranty.
                Warranty periods vary by product and brand, typically ranging
                from 1-2 years. For detailed warranty information on specific
                products, please check the product description or visit our{" "}
                <Link to="/warranty-information" className="text-blue-600">
                  Warranty Information
                </Link>{" "}
                page.
              </p>
            </AccordionItem>
            <AccordionItem
              title="How do I claim warranty service?"
              isOpen={openItems["item-9"]}
              onClick={() => toggleItem("item-9")}
            >
              <p className="text-gray-600">
                To claim warranty service, contact our customer support team
                with your order number and a description of the issue. Our team
                will guide you through the warranty claim process, which may
                involve troubleshooting, repair, or replacement depending on the
                product and issue.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Do you sell refurbished products?"
              isOpen={openItems["item-10"]}
              onClick={() => toggleItem("item-10")}
            >
              <p className="text-gray-600">
                Yes, we offer certified refurbished products that have been
                professionally restored to like-new condition. These products
                undergo rigorous testing and come with a minimum 90-day
                warranty. Refurbished items are clearly labeled on our website
                and offer excellent value.
              </p>
            </AccordionItem>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Account & Community</h2>
          <div className="w-full">
            <AccordionItem
              title="What are the benefits of creating an account?"
              isOpen={openItems["item-11"]}
              onClick={() => toggleItem("item-11")}
            >
              <p className="text-gray-600">
                Creating an account allows you to track orders, save favorite
                products, access exclusive deals, and participate in our Phonity
                Community. Account holders also receive early access to new
                product launches and special promotions.
              </p>
            </AccordionItem>
            <AccordionItem
              title="What is the Phonity Community?"
              isOpen={openItems["item-12"]}
              onClick={() => toggleItem("item-12")}
            >
              <p className="text-gray-600">
                The Phonity Community is our platform where tech enthusiasts can
                connect, share tips, ask questions, and participate in
                discussions. Community members get access to exclusive events,
                special discounts, and early product announcements. It's free to
                join for all Phonity customers.
              </p>
            </AccordionItem>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="mb-4">
            If you couldn't find the answer you were looking for, our customer
            support team is here to help.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact-us"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Contact Us
            </Link>
            <button
              onClick={(e) => e.preventDefault()}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
            >
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
