import { ITask } from '../components/TaskList/components'

type Actions = 'CREATE' | 'DELETE' | 'FINISH'
export type ActionType<TAction extends Actions = Actions> =
  TAction extends 'CREATE'
    ? {
        type: 'CREATE'
        payload: Omit<ITask, 'id'>
      }
    : TAction extends 'DELETE'
    ? {
        type: 'DELETE'
        payload: Pick<ITask, 'id'>
      }
    : {
        type: 'FINISH'
        payload: Pick<ITask, 'id'>
      }
