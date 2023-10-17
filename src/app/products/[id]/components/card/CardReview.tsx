import { filterReview } from "@/constants"
import {Star } from ".."

const CardReview = () => {
  return (
    <div className="card_review">
        <div className="left">
          <h1>{3.2} เต็ม 5</h1>
          <div className="star">
          <Star rating={3.2}/>

          </div>
        </div>
        <div className="right">
            {
                filterReview.map((item , index) => (
                    <button className="btn_custom4" key={index}>item</button>
                ))
            }
        </div>
    </div>
  )
}

export default CardReview