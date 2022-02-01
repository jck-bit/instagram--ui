import { Provider, Bottom, Blue, Brown, Color} from "./styles/General.styled"
import { Search } from "@material-ui/icons"
import "../App.css"
import content from './content'
import Card from './Card'

export default function Sidebar() {
  return (

     <Provider>
       <div className="searchbar">
         <Search  className='searchIcon'/>
         <input placeholder="search friends" className="searchInput" />
        </div>
        
         <div>
            <h1>stories</h1>
         </div>

        <Bottom>
              {content.map((item, index)=>{
                return(
                     <Card key={index} item={item}/>
                )
             })}
        </Bottom>
       
            

       <div>
          <h1>
             Feeds
          </h1>
       </div>
       <Color>
       <Brown img src="./images/15.jpeg"/>
       <Brown img src="./images/14.jpeg"/>
       <Brown img src="./images/11.jpeg"/>
       <Brown img src="./images/me.jpeg"/>
       <Brown img src="./images/13.jpeg"/>
       <Brown img src="./images/16.jpeg"/>
       </Color>
   
     </Provider>
 
  )
}
