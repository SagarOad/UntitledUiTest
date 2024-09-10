import wildcraftedIcon from "@/assets/wildcrafted.png";
import avatar from "@/assets/Avatar.png";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div>
          <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Company logo */}
          <Image
            src={wildcraftedIcon}
            alt="Company Logo"
            width={1000}
            height={1000}
            className="mx-auto w-60 mb-4"
          />

          {/* Testimonial */}
          <blockquote className="lg:text-6xl text-4xl inter font-bold text-gray-900">
            "We’ve been using Untitled to kick start every new project and can’t
            imagine working without it."
          </blockquote>

          {/* Testimonial author */}
          <div className="flex flex-col justify-center items-center mt-6 space-x-4">
            <Image
              src={avatar}
              alt="Author Image"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <p className="text-lg font-medium text-center text-gray-900">
                Amélie Laurent
              </p>
              <p className="text-gray-500 text-center">
                Product Manager, Wildcrafted
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials