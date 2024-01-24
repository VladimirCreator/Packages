import { useState, useEffect } from 'react'
import { CommandIcon } from 'lucide-react'

import { Button } from './UI'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './UI'

type Props = {
	links: {
		title: string; url: string
	}[]
}

export const CommandMenu: React.FC<Props> = props => {
	const { links } = props
	const [open, setOpen] = useState(false)

	useEffect(
		() => {
			const onKeydown = (e: KeyboardEvent) => {
				if (e.key.includes('j') && (e.metaKey || e.ctrlKey)) {
					e.preventDefault(); setOpen(!open)
				}
			}
			document.addEventListener('keydown', onKeydown)
			return () => document.removeEventListener('keydown', onKeydown)
		}, []
	)

	const handlePrint = () => {
		window.print(); setOpen(false)
	}

	const commandItems = links.map(
		({ url, title }) => (
			<CommandItem key={url}
				children={<span children={title} />}
				onSelect={
					() => {
						window.open(url, '_blank'); setOpen(false)
					}
				}
			/>
		)
	)
	return (
		<>
			<p className='fixed xl:block right-0 bottom-0 left-0 p-1 border-t border-t-muted text-sm text-center text-muted-foreground bg-white hidden print:hidden'>
				Press{' '}
				<kbd className='font-medium text-[10px] font-mono text-muted-foreground h-5 inline-flex items-center gap-1 px-1.5 border bg-muted rounded opacity-100 select-none pointer-events-none'>
					<span className='text-xs'>⌘</span>J
				</kbd>{' '}
				to open the command menu
			</p>
			<Button className='fixed right-4 bottom-4 flex rounded-full shadow-2xl xl:hidden print:hidden'
				onClick={() => setOpen(!open)}
				variant='outline' size='icon'
			>
				<CommandIcon className='size-6 my-6' />
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Type a command or search...' />
				<CommandList>
					<CommandEmpty children='No results found.' />
					<CommandGroup heading='Actions'>
						<CommandItem onSelect={handlePrint}>
							<span>Print</span>
						</CommandItem>
					</CommandGroup>
					<CommandGroup heading='Links' children={commandItems} />
					<CommandSeparator />
				</CommandList>
			</CommandDialog>
		</>
	)
}
