export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Shipping & Returns</h1>
        <p className="text-gray-600 mb-8">
          Information about our shipping policies, delivery times, and return
          procedures.
        </p>

        <div className="mb-12">
          <div className="flex items-center mb-4">
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
              className="h-6 w-6 text-blue-600 mr-2"
            >
              <path d="M10 17h4V5H2v12h3" />
              <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
              <path d="M14 17h1" />
              <circle cx="7.5" cy="17.5" r="2.5" />
              <circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
            <h2 className="text-2xl font-bold">Shipping Information</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">
                Shipping Methods & Timeframes
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Standard Shipping</h4>
                  <p className="text-gray-600">3-5 business days</p>
                  <p className="text-gray-600">
                    Free on orders over $50, otherwise $5.99
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Express Shipping</h4>
                  <p className="text-gray-600">1-2 business days</p>
                  <p className="text-gray-600">$12.99</p>
                </div>
                <div>
                  <h4 className="font-medium">Next Day Delivery</h4>
                  <p className="text-gray-600">
                    Next business day (order by 2pm EST)
                  </p>
                  <p className="text-gray-600">$19.99</p>
                </div>
                <div>
                  <h4 className="font-medium">International Shipping</h4>
                  <p className="text-gray-600">7-14 business days</p>
                  <p className="text-gray-600">
                    Rates calculated at checkout based on destination
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Order Processing</h3>
              <p className="mb-3">
                Orders are typically processed within 1-2 business days. During
                high-volume periods (such as holidays or special promotions),
                processing may take an additional 1-2 business days.
              </p>
              <p>
                Once your order ships, you'll receive a confirmation email with
                tracking information. You can also track your order by logging
                into your account.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">
                Shipping Restrictions
              </h3>
              <p className="mb-3">
                We ship to most countries worldwide. However, some products may
                have shipping restrictions due to regulations or manufacturer
                policies.
              </p>
              <p>
                For international orders, customers are responsible for any
                customs fees, taxes, or duties that may apply according to local
                laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
