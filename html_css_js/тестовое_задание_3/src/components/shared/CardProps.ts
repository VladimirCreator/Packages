export default interface CardProps {
    price: number;
    title: string;
    description: string;
    colors: string[];
    imgHref: string;
    [key: string]: any;
}
