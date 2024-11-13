import { SECTION_COMPONENTS } from "@/components/SectionComponents";
import { sectionBase } from "@/types/sections";
import { fetchData } from "@/utils/fetchData";

export default async function Home() {

  const content = await fetchData('pages');

  return (
    <>
      {content[0]?.contentSections?.map((section: sectionBase) => {
    
        const SectionComponent = SECTION_COMPONENTS[section?.__component.replace('sections.', '')];

        if(!SectionComponent)
          return null;

        return <SectionComponent key={section.id} {...section}/> ;

      })};
    </>
  );
}
