export default function Material({ component, children }: { component: Function, children: React.ReactNode }) {
  return component({ className: 'bg-slate-100/80 dark:bg-neutral-800/80 backdrop-blur', children })
}
