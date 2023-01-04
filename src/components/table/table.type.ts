export type Column<T> = {
  label: string
  renderCell: (elt: T) => JSX.Element
  width?: string
  hidden?: boolean
}
