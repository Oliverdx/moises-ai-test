export interface link {
  id: number,
  title: string,
  link: string,
  openNewWindow: boolean,
  dropdown: Array<link>
}
export interface headerProps {
  menu: Array<link>
}
export interface footerProps {
  copyright: string,
  footerMenu: Array<link>,
  helpText: string,
  social: Array<{[key: string]: string}>
}

export interface globalData extends headerProps, footerProps {
  id: number,
  locale: 'en' | 'pt',
  metadata: {
    id: number,
    metaTitle: string,
    metaDescription: string,
    robots: string,
    shareImage: string
  },
  siteName: string,
}
