import SECTION_COMPONENTS from "@/components/SectionComponents";
import { sectionBase } from "@/types/sections";
import { fetchData } from "@/utils/fetchData";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {

  const language = await params;
  const content = await fetchData('pages', language?.lang || "en");

  if (!content)
    return <></>;

  return (
    <>
      {content[0]?.contentSections?.map((section: sectionBase) => {
        const SectionComponent = SECTION_COMPONENTS[section?.__component?.replace('sections.', '')];

        if (!SectionComponent)
          return <div key={Math.random()}></div>;

        return <SectionComponent key={section.id} {...section} />
      })}
    </>
  );
}
