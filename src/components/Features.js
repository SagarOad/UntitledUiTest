import chatIcon from "@/assets/features-icon/chat.png";
import customersIcon from "@/assets/features-icon/customers.png";
import instantIcon from "@/assets/features-icon/instant.png";
import peopleIcon from "@/assets/features-icon/people.png";
import reportIcon from "@/assets/features-icon/reports.png";
import toolsIcon from "@/assets/features-icon/tools.png";

import Image from "next/image";
const Features = () => {
  return (
    <div>
              <section className="max-w-7xl mx-auto mt-16 px-4 text-center">
        <div className="container mx-auto text-center">
          {/* Features Heading */}
          <h2 className="text-sm font-semibold text-purple-600">Features</h2>
          <h3 className="mt-2 text-4xl inter font-bold text-gray-900">
            Analytics that feels like it’s from the future
          </h3>
          <p className="mt-4 text-[20px] lg:w-[80%] mx-auto font-medium text-gray-600">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>

          {/* Features Grid */}
          <div className="my-20 grid grid-cols-1 inter text-center md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <Image src={chatIcon} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Share team inboxes
              </h4>
              <p className="mt-2 text-gray-600">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <Image src={instantIcon} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Deliver instant answers
              </h4>
              <p className="mt-2 text-gray-600">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <Image src={reportIcon} />
                {/* Icon */}
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Manage your team with reports
              </h4>
              <p className="mt-2 text-gray-600">
                Measure what matters with easy-to-use reports. You can filter,
                export, and drill down on data in a couple of clicks.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <Image src={customersIcon} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Connect with customers
              </h4>
              <p className="mt-2 text-gray-600">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <Image src={toolsIcon} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Connect the tools you already use
              </h4>
              <p className="mt-2 text-gray-600">
                Explore 100+ integrations that make your day-to-day workflow
                more efficient and familiar. Plus, our extensive developer
                tools.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <Image src={peopleIcon} />
                {/* Icon */}
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Our people make the difference
              </h4>
              <p className="mt-2 text-gray-600">
                We’re an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need
                help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features