import HeroSection from './HeroSection';
import ReelsSection from './ReelsSection';
import ProductSliderSection from './ProductSliderSection';
import SlideshowSection from './SlideshowSection';
import CollectionsSection from './CollectionsSection';

export const HomePage = () => {
  return (
    <>
      <SlideshowSection />
      <CollectionsSection />
      <ReelsSection></ReelsSection>
      <ProductSliderSection
        titleTop="Se vienen"
        titleBottom="Cositas"
        sortBy={{ field: 'createdAt', direction: 'asc' }}
      />
      <HeroSection />
    </>
  );
};

export default HomePage;
