import Script from "next/script";

export default function LdJsonScript ({ id, jsonLd }: { id: string; jsonLd: object }){
  return <Script
    id={id}
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd),
    }}
  />
}
