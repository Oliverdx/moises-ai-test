import { brands, button, card, module } from "./generic"

export interface sectionBase {
  id: number,
  __component: string,
  theme: string,
  full: boolean,
  preTitle: string,
  title: string,
  description: string
}

export interface sectionHeroVideo extends sectionBase {
  buttons: Array<button>
  demo: {
    id: number,
    title: string,
    url: string,
    format: string
  },
  background: {
    url: string,
    height: string
  }
}

export interface sectionBrands extends sectionBase {
  brands: Array<brands>
}

export interface sectionCardContent extends sectionBase{
  cards: Array<card>
}

export interface sectionModuleContent extends sectionBase{
  cards: Array<module>
}

export interface sectionCTAContent extends sectionBase{
  buttons: Array<button>
}
