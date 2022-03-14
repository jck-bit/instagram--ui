import React from "react"
import { Provider, Bottom, Yoo,  Topbar, TopImg} from "./styles/General.styled"
import { Color } from "./styles/Stories.style"
import { Search } from "@material-ui/icons"
import content from './content'
import Card from './Card'
import feeds from '../Feed'
import Stories from "./Stories"




export default function Sidebar() {
   
  return (

     <Provider>
      <Topbar>
       <div className="searchbar">
          <Search  className='searchIcon'/>
          <input placeholder="search friends" className="searchInput"/>
        </div>
        <Yoo>
           <TopImg img src="./images/logout.png" alt=""/>
        </Yoo>
     
      </Topbar>
       
        
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
         {feeds.map((item, index) =>{
            return(
              <Stories key={index} item={item}/>
            )
         })}
       </Color>
   
     </Provider>
 
  )
}
