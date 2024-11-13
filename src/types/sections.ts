import { brands, button, card } from "./generic"

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
  demo: unknown,
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
