import { produce } from 'immer'
import { create } from 'zustand'
import { PersistOptions, devtools, persist } from 'zustand/middleware'

import {
  ActionFunction,
  CaseModelAction,
  CreateModelOptions,
  Model
} from './create-model.interface'

export const createStore = <Store>(initialState: Store) =>
  create(devtools(() => initialState))

export const createPersistStore = <Store>(
  initialState: Store,
  key: string,
  options: Omit<PersistOptions<Store>, 'name'>
) => create(devtools(persist(() => initialState, { name: key, ...options })))

export const createModel = <
  Store,
  ActionFn extends ActionFunction<Store> = ActionFunction<Store>
>(
  model: CreateModelOptions<Store, ActionFn>
): Model<Store, ActionFn> => {
  const store = model?.persist
    ? createPersistStore(model.initialState, model.persist.key, {
        version: model.persist?.version
      })
    : createStore(model.initialState)

  const actions: CaseModelAction<ActionFn> = {} as CaseModelAction<ActionFn>

  for (const [key, action] of Object.entries(model.actions)) {
    // @ts-expect-error fix key types
    actions[key] = (payload: any) => {
      store.setState(produce((state) => action(state, payload)))
    }
  }

  return {
    store,
    actions
  }
}
