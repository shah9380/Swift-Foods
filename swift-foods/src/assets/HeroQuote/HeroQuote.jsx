
import Card from "./Card";
import QuoteData from './Quote.json';

const HeroQuote = ()=>{
    console.log(QuoteData);
    return(
        <div className="mx-auto my-16">
            {QuoteData.map((data)=>(
                <Card id={data._id} author={data.author} content={data.content}></Card>
            ))}
        </div>
    )
};

export default HeroQuote;