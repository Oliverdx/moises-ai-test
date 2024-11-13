export interface sectionBase {
  "id": number,
  "__component": string,
  "theme": string,
  "full": boolean,
  "preTitle": string,
  "title": string,
  "description": string
}

export interface sectionHeroVideo extends sectionBase {
  buttons: Array<unknown>
  demo: unknown,
  background: {
    url: string,
    height: string
  }
}
