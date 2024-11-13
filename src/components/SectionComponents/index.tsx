import Brands from "./Brands";
import CardContent from "./CardContent";
import HeroBanner from "./HeroBanner";
import Modules from "./Modules";

interface SectionComponents {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>;
}


export const SECTION_COMPONENTS: SectionComponents = {
  "hero-video": HeroBanner,
  "brands": Brands,
  "card-content-grid": CardContent,
  "modules": Modules,
  // "centered-cta": Header
};
