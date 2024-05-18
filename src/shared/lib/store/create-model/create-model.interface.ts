import { UseBoundStore, StoreApi } from 'zustand'

export type ActionFunction<Store, P = any> = {
  [K: string]: (state: Store, payload: P) => void
}

export type CreateModelOptions<
  State = any,
  R extends ActionFunction<State> = ActionFunction<State>
> = {
  initialState: State
  actions: R
  persist?: {
    key: string
    version?: number
  }
}

export type ActionCreator<Fn> = Fn extends (state: any) => any
  ? () => void
  : Fn extends (state: any, payload: infer Payload) => any
    ? (payload: Payload) => void
    : never

export type CaseModelAction<ActionFn extends ActionFunction<any>> = {
  [Key in keyof ActionFn]: ActionCreator<ActionFn[Key]>
}

export type Model<
  Store = any,
  CaseAction extends ActionFunction<Store> = ActionFunction<Store>
> = {
  store: UseBoundStore<StoreApi<Store>>
  actions: CaseModelAction<CaseAction>
}
