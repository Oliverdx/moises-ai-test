import HeroBanner from "./HeroBanner";

interface SectionComponents {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>;
}


export const SECTION_COMPONENTS: SectionComponents = {
  "hero-video": HeroBanner,
};
