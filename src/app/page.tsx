import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseCategories from '@/components/CourseCategories';
import FeaturedCourses from '@/components/FeaturedCourses';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <CourseCategories />
        <FeaturedCourses />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}