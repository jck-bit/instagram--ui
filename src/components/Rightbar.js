import {Logo, Right, Image, Sylvia, Second, Third, Fourth, Button} from './styles/People.styled'
import '../App.css'
import { Fifth, Major,Logout,Low } from './styles/partwo.style';
import { Explore, Feedback, Message, Search, Settings } from '@material-ui/icons';

export default function Rightbar() {
  return (
  <Right>
      <Logo>
         <Image  img src='./images/free.jpg' alt=''/>
         <span className='spanner'>Myngram</span>
      </Logo> 

     <Second>
        <Sylvia  img src='./images/logout.png' alt=''/>
        <p> Nikita </p>
     </Second>

     <Third>
       <p className='p-tag'>54k Followers</p>
       <p>217 Following</p>
      </Third>
      
      <Fourth>
        <hr/>
      </Fourth>

     <Major>
     <Fifth>
        <Feedback/>
        <span className='tag'>Feed</span>
      </Fifth> 
      <Fifth>
       
         <Search/>
          <span className='tag'>Search</span>
  
        
      </Fifth> 
      <Fifth>
        <Explore/>
        <span className='tag'>Explore</span>
      </Fifth> 
      <Button>
        <Message/>
        <span className='tag'>Messages</span>
      </Button>
      <Fifth>
        <Settings/>
        <span className='tag'>Settings</span>
      </Fifth> 
     
     <Fifth>
       <Low>
        <Logout img src='./images/login.jpg'/>
        <span className='tag'>Log out</span>
       </Low>
     </Fifth>
     
     </Major>
              
   </Right>
  );
}
