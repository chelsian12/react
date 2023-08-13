import { quoteData } from "../dummy/quotes"
import Quote from "./Quote"

const HomePage = () => {

const showDialogue =(quote) =>{
  alert(quote)
}
  return (
    <div>


<Quote  data={quoteData} show={showDialogue}/>
    </div>
  )
}
export default HomePage