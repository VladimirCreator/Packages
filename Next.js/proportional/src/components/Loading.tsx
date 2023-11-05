// Tue 11 Jul 2023 2:13 AM

function Label({ text }: { text: string }) {
    return (
        <h1 className='font-medium
            text-3xl font-mono

            bg-gradient-to-r from-emerald-200 to-red-50
            bg-clip-text
            animate-bounce
            '
            children={text}
        />
    )
}

export default function Loading() {
    return (
        <article className='
            absolute inset-0
            flex justify-center items-center
        '>
            <Label text='@vladimircreator' />
        </article>
    )
}
