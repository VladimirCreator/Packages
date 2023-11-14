'use client'

import AllContext from '@/contexts/AllContext'

import { useContext } from 'react'

import Section from '@/components/Section'
import * as Accordion from '@radix-ui/react-accordion'

function Header({ title, hsl }: { title: string, hsl?: string }) { // 3:26 PM Sun 16 Jul 2023
  return (
    <header>
      <h1 className={'text-4xl font-bold'.concat(' ', hsl ?? '')}>{title}</h1>
    </header>
  )
}

export default function List({ identifier, onClick }: { identifier: number, onClick: any }) {
  const all: any = useContext<any>(AllContext)
  const node: any = useContext<any>(AllContext).at(identifier)

  return (
    <Accordion.Root className='space-y-4' type={'multiple'}
      defaultValue={[identifier.toString()]}
    >
      <Header title={node.title} hsl={node.hsl} />
      {
        node.children.map(
          (identifier: number) => (
            <Section
              key={identifier}
              identifier={identifier}
              onLengthCallback={onLengthCallback}
              onLabelCallback={onLabelCallback}
              onSecondaryLabelCallback={onSecondaryLabelCallback}
              onClick={onClick}
            />
          )
        )
      }
      <button onClick={() => onClick(node.super)} disabled={identifier === 0}>Вернуться</button>
    </Accordion.Root>
  )

  function onLabelCallback(identifier: number): string {
    const ancestor = all[identifier].super
    if (typeof all[ancestor].moniker === 'undefined') {
      throw new Error()
    }
    if (all[ancestor].children.length === 1) {
      return all[ancestor].moniker.at(0)
    }
    return all[ancestor].moniker.at(1)
  }

  function onSecondaryLabelCallback(identifier: number): string | undefined {
    return all[identifier]?.proportion?.toString()?.concat('%')
  }

  function onLengthCallback(identifier: number): string {
    const ancestor = all[identifier].super

    if (typeof all[identifier].proportion !== 'undefined') {
      return (all[ancestor].total * all[identifier].proportion / 100).toFixed(2)
    }
    if (typeof all[ancestor].total !== 'undefined') {
      return (all[ancestor].total / all[ancestor].children.length).toFixed(2)
    }
    return all[identifier].children.length.toString()
  }
}
