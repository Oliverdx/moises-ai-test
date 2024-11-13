import Brands from "./Brands";
import HeroBanner from "./HeroBanner";

interface SectionComponents {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>;
}


export const SECTION_COMPONENTS: SectionComponents = {
  "hero-video": HeroBanner,
  "brands": Brands,
  // "card-content-grid": Header,
  // "modules": Header,
  // "centered-cta": Header
};
