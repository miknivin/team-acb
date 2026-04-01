import { Hero } from "./Hero";
import { ProductsSection } from "./ProductsSection";
import { CategoriesSection } from "./CategoriesSection";
import { FeaturesSection } from "./FeaturesSection";
import { StorySection } from "./StorySection";
import { TestimonialsSection } from "./TestimonialsSection";

export function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <CategoriesSection />
      <FeaturesSection />
      <StorySection />
      <TestimonialsSection />
    </>
  );
}
