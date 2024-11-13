export interface link {
  id: number,
  title: string,
  link: string,
  openNewWindow: boolean,
  dropdown: Array<link>
}
