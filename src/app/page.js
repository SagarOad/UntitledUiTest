import BlogPosts from "@/components/BlogPost";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import Analytics from "@/components/Analytics";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import MainBanner from "@/components/MainBanner";
import Affiliations from "@/components/Affiliations";

export default function Home() {
  return (
    // pages/index.js
    <div className="bg-white text-gray-900">
      <MainBanner />
      <Affiliations />
      <Features />
      <Testimonials />
      <Analytics />
      <Faqs />
      <BlogPosts />
      <Footer />
    </div>
  );
}
