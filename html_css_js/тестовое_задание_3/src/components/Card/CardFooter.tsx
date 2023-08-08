
 
export default function CardFooter({ href }: { href: string }) {
    return (
        <footer className='card__footer'>
            <p>
                <a href={href}>
                    Read reviews
                </a>
            </p>
        </footer>
    );
}
