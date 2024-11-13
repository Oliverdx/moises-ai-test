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

export interface brands {
  id: number
  alternativeText: string,
  title: string,
  url: string
}

export interface card {
  id: number,
  title: string,
  description: string,
  icon: string
}
