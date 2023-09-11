import Star from "./Star"
function StarRating(props) {
    let stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(<Star color={i < props.rating ? "#FF6060" : "#E3E3E3"}/>)
    }
    return (

        <div className="rating" id="rating">
            {stars}
        </div>
    )
}
export default StarRating