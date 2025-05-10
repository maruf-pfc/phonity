import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          We're here to help! Reach out to us with any questions, concerns, or
          feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-2">Mon-Fri: 9am - 6pm EST</p>
            <a href="tel:+18001234567" className="text-primary font-medium">
              +1 (800) 123-4567
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email Support</h3>
            <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
            <a
              href="mailto:support@phonity.com"
              className="text-primary font-medium"
            >
              support@phonity.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Visit Our Store</h3>
            <p className="text-gray-600 mb-2">123 Tech Street</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    placeholder="John Doe"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  placeholder="How can we help you?"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  className="w-full border rounded px-3 py-2 min-h-[150px]"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-white px-4 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Store Hours</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start mb-4">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Operating Hours</h3>
                  <p className="text-gray-600">We're here to serve you</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="border-t mt-4 pt-4">
                <h3 className="font-semibold mb-2">Holiday Hours</h3>
                <p className="text-gray-600">
                  Hours may vary during holidays. Please check our social media
                  for the most up-to-date information.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-6">FAQ</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="mb-4">
                  Have questions? Check out our{" "}
                  <Link to="/faqs" className="text-primary font-medium">
                    Frequently Asked Questions
                  </Link>{" "}
                  page for quick answers to common inquiries.
                </p>
                <button className="w-full sm:w-auto border border-primary text-primary px-4 py-2 rounded">
                  <Link to="/faqs">View FAQs</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
