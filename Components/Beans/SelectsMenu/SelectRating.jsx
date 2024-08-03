import FilterSelect from "@/Components/FilterSelect"
import RatingStars from "@/Components/RatingStars";
/*

Q-  why this didn't work ?
A-  Beacuse I was applying the revers on the Array.form() not on the array it self,
    if I did it like this : ratingOptions.reverse(); after filling the array it should've worked.
    the reason why I went with this old approach because I wanted ratingOptions to be an Array on Objects and couldn't
    write it like this:
        Array.from({length: 6}, (_, index) => {
            {value: `${index}`, label: <RatingStars rating={index}/>}
        });
    this way wasn't possible because THE ARROW FUNCTION DOESN'T HAVE IMPLICIT this and return keywords;
    so I had to initilase the array and then use its index to add each object

const ratingOptions = [];

 Array.from({length: 6}, (_, index) => {
    ratingOptions[index] = {value: `${index}`, label: <RatingStars rating={index}/>}
 }).reverse();

*/


const ratingOptions = Array.from({length: 6}, (_, index) => {
    return {value: index, label: <RatingStars rating={index}/>}
}).reverse();


export default async function SelectRating() {
    
    return (
        <>
            <p className="text-lg font-semibold">التقييمات:</p>
            <FilterSelect options={ratingOptions} filterField="ratingsAverage"/>
        </>
    )
}

