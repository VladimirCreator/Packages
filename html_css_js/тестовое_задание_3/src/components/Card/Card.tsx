
 
import './Card.scss';
import CardProps from "../shared/CardProps";
import CardHeader from "./CardHeader";
import CardSelection from "./CardSelection";
import CardToolbar from './CardToolbar';
import CardFooter from './CardFooter';
export default function Card({ price, title, description, colors }: CardProps) {
    return (
        <article className='card'>
            <CardHeader price={price} title={title} description={description} />
            <CardSelection colors={colors} />
            <CardToolbar />
            <CardFooter href='#' />
        </article>
    );
}
