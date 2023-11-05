// Tue 11 Jul 2023 09:53 PM

export default function Material({ component, children }: { component: Function, children: React.ReactNode }) {
    return (
        component({
            className: 'bg-slate-100/80 dark:bg-neutral-800/80 backdrop-blur',
            children
        })
    )
}