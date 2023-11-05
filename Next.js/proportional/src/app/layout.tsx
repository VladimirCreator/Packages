import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Proportional' }

export default function({ children }: { children: React.ReactNode }) {
    return (
        <html className='font-sans
            text-stone-900
            bg-slate-100

            dark:text-stone-50
            dark:bg-neutral-800

            accent-emerald-300
        '>
            <body>
                <article className='
                    w-full sm:w-1/2 md:w-5/12 lg:w-1/3 xl:w-1/4 2xl:w-1/5
                    min-h-full
                    ml-0 p-4

                    bg-slate-100/80
                    dark:bg-neutral-800/80

                    backdrop-blur-md
                transition-all
                select-none'>
                    {children}
                </article>
            </body>
        </html>
    )
}