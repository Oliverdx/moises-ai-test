export interface sectionBase {
  id: number,
  __component: string,
  theme: string,
  full: boolean,
  preTitle: string,
  title: string,
  description: string
}

export interface button {
    id: number,
    appearance: string,
    size: string,
    color: string,
    url: string,
    text: string,
    subText: string,
    fluid: boolean,
    newTab: boolean,
    startIcon: string,
    endIcon: string
}

export interface sectionHeroVideo extends sectionBase {
  buttons: Array<button>
  demo: unknown,
  background: {
    url: string,
    height: string
  }
}
