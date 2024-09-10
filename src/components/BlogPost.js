import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "../assets/blog3.png";
import Image from "next/image";

export default function BlogPosts() {
  const posts = [
    {
      title: "UX review presentations",
      category: "Design",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: blog1, // Use imported image
    },
    {
      title: "Migrating to Linear 101",
      category: "Product",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug Letter spacing. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: blog2, // Use imported image
    },
    {
      title: "Building your API stack",
      category: "Software Engineering",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: blog3, // Use imported image
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl inter font-semibold">Latest blog posts</h2>
          <p className="text-gray-600 mt-2">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
          View all posts
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
              layout="responsive"
              width={500}
              height={200}
            />
            <div className="p-4">
              <p className="text-purple-600 text-sm">{post.category}</p>
              <h3 className="text-lg inter font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 inter mt-2">{post.description}</p>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src={post.image}
                    width={1000}
                    height={1000}
                    alt={post.author}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
