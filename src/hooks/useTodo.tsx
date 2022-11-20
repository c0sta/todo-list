import React, {
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer
} from 'react'
import { ITask } from '../components/TaskList/components'
import { ActionType } from './types'
import { v4 as uuidv4 } from 'uuid'

interface ITodoContext {
  tasks: ITask[]
  actions: {
    create: (task: ActionType<'CREATE'>['payload']) => void
    delete: ({ id }: ActionType<'DELETE'>['payload']) => void
    finish: ({ id }: ActionType<'FINISH'>['payload']) => void
  }
}
const TodoContext = React.createContext<ITodoContext | null>(null)

const INITIAL_STATE = {
  tasks: []
}
const reducer = (state: Pick<ITodoContext, 'tasks'>, action: ActionType) => {
  switch (action.type) {
    case 'CREATE':
      return {
        tasks: [
          ...state.tasks,
          {
            id: uuidv4(),
            ...action.payload
          }
        ]
      }
    case 'DELETE':
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      }
    case 'FINISH':
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              checked: !task.checked
            }
          }
          return task
        })
      }
  }
}
export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const create = useCallback(
    (task: ActionType<'CREATE'>['payload']) => {
      dispatch({ type: 'CREATE', payload: task })
    },
    [dispatch]
  )

  const deleteTask = useCallback(
    ({ id }: ActionType<'DELETE'>['payload']) => {
      dispatch({ type: 'DELETE', payload: { id } })
    },
    [dispatch]
  )

  const finish = useCallback(({ id }: ActionType<'FINISH'>['payload']) => {
    dispatch({ type: 'FINISH', payload: { id } })
  }, [])

  const value = useMemo(
    () => ({
      tasks: state.tasks,
      actions: {
        create,
        delete: deleteTask,
        finish
      }
    }),
    [state.tasks, create, deleteTask, finish]
  )

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (!context) Error('useTodo hook must be used inside TodoProvider')

  return context as ITodoContext
}
