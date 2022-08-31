import { FC } from 'react'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'

import { todoVar } from '../cache'

export const LocalStateB: FC = () => {
  const todos = useReactiveVar(todoVar)
  return (
    <>
      {todos?.map((task, index) => {
        return (
          <p className='mb-3' key={index}>
            {task.title}
          </p>
        )
      })}
      <Link href='/local-state-a'>
        <a>Back</a>
      </Link>
    </>
  )
}
