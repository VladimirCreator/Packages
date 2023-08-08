
 
import './App.scss';
import Card from '../Card/Card';
export default function() {
    return (
        <main>
            <Card
                price={100}
                title={"Zebronic head phone"}
                description={"A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty."}
                colors={["#E44", "#3C81F6", "#000`"]}
            />
        </main>
    )
}
