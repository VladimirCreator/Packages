import { useEffect , useState } from 'react' //
import { CommandIcon } from 'lucide-react'

import { Button } from './UI/Button'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './UI/Command'

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
					<CommandIcon className='my-6 size-6' />
				</Button>
				<CommandDialog open={open} onOpenChange={setOpen}>
					<CommandInput placeholder='Type a command or search...' />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading='Actions'>
							<CommandItem onSelect={
								() => {
									setOpen(false); window.print()
								}
							}
							>
								<span>Print</span>
							</CommandItem>
						</CommandGroup>
						<CommandGroup heading='Links'>
							{
								links.map(
									({ url, title }) => (
										<CommandItem key={url}
											onSelect={
												() => {
													setOpen(false); window.open(url, '_blank')
												}
											}
										>
											<span>{title}</span>
										</CommandItem>
									)
								)
							}
						</CommandGroup>
						<CommandSeparator />
					</CommandList>
				</CommandDialog>
			</>
	)
}
