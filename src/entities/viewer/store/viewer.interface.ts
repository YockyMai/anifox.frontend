export type User = {
  email: string
  birthday: Date
  preferred_username: string
  id: string
}

export type ViewerStore = {
  user: User | null
}
