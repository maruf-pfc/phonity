import {Link} from "react-router-dom"

export default function FAQsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">Find answers to the most common questions about our products and services.</p>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Orders & Shipping</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
              <AccordionContent>
                Standard shipping typically takes 3-5 business days within the continental US. Express shipping options
                are available at checkout for 1-2 business day delivery. International shipping times vary by location,
                usually between 7-14 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by
                location. Please note that customers are responsible for any customs fees, taxes, or duties that may
                apply to international orders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                Once your order ships, you'll receive a confirmation email with tracking information. You can also track
                your order by logging into your account and viewing your order history. If you have any issues tracking
                your package, please contact our customer support team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is free shipping available?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer free standard shipping on all orders over $50 within the continental US. Free shipping
                promotions for international orders may be available during special sales events.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Returns & Refunds</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-5">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy for most products. Items must be in their original condition with all
                packaging and accessories. Some products may have specific return restrictions, which will be noted on
                the product page. For more details, please visit our{" "}
                <Link href="/shipping-returns" className="text-primary">
                  Shipping & Returns
                </Link>{" "}
                page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How do I initiate a return?</AccordionTrigger>
              <AccordionContent>
                To initiate a return, log into your account, go to your order history, and select the "Return Item"
                option for the relevant order. Follow the prompts to complete the return request. Once approved, you'll
                receive a return shipping label and instructions. If you need assistance, our customer service team is
                available to help.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>When will I receive my refund?</AccordionTrigger>
              <AccordionContent>
                Refunds are typically processed within 5-7 business days after we receive and inspect your return. The
                time it takes for the refund to appear in your account depends on your payment method and financial
                institution, usually 3-10 additional business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Products & Warranty</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-8">
              <AccordionTrigger>Are your products covered by warranty?</AccordionTrigger>
              <AccordionContent>
                Yes, most of our products come with a manufacturer's warranty. Warranty periods vary by product and
                brand, typically ranging from 1-2 years. For detailed warranty information on specific products, please
                check the product description or visit our{" "}
                <Link href="/warranty-information" className="text-primary">
                  Warranty Information
                </Link>{" "}
                page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>How do I claim warranty service?</AccordionTrigger>
              <AccordionContent>
                To claim warranty service, contact our customer support team with your order number and a description of
                the issue. Our team will guide you through the warranty claim process, which may involve
                troubleshooting, repair, or replacement depending on the product and issue.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>Do you sell refurbished products?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer certified refurbished products that have been professionally restored to like-new
                condition. These products undergo rigorous testing and come with a minimum 90-day warranty. Refurbished
                items are clearly labeled on our website and offer excellent value.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Account & Community</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-11">
              <AccordionTrigger>What are the benefits of creating an account?</AccordionTrigger>
              <AccordionContent>
                Creating an account allows you to track orders, save favorite products, access exclusive deals, and
                participate in our Phonity Community. Account holders also receive early access to new product launches
                and special promotions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>What is the Phonity Community?</AccordionTrigger>
              <AccordionContent>
                The Phonity Community is our platform where tech enthusiasts can connect, share tips, ask questions, and
                participate in discussions. Community members get access to exclusive events, special discounts, and
                early product announcements. It's free to join for all Phonity customers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="mb-4">
            If you couldn't find the answer you were looking for, our customer support team is here to help.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#" onClick={(e) => e.preventDefault()}>
                Live Chat
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
