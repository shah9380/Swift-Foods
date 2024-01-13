import RatingCard from "./assets/HeroRatings/RatingCard";

const Ratings = ()=>{
    return(
        <section className="flex flex-wrap gap-y-8 justify-start items-center p-8 py-12">
              <RatingCard></RatingCard>
              <RatingCard></RatingCard>
              <RatingCard></RatingCard>  
              <RatingCard></RatingCard>
        </section>
    )
}
export default Ratings;