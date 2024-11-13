export interface link {
  id: number,
  url: string,
  text: string
}
export interface button extends link {
  appearance?: string,
  size?: string,
  color?: string,
  subText?: string,
  fluid?: boolean,
  newTab?: boolean,
  startIcon?: string,
  endIcon?: string
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
  icon?: string
}

export interface module extends card {
  button?: link
}
