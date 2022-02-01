import {Logo, Right, Image, Sylvia, Second, Third, Fourth} from './styles/People.styled'
import '../App.css'
import { Fifth } from './styles/partwo.style';
import { Feedback } from '@material-ui/icons';

export default function Rightbar() {
  return (
  <Right>
      <Logo>
         <Image  img src='./images/main.jpg' alt=''/>
         <span className='spanner'>Instagram</span>
      </Logo> 

     <Second>
        <Sylvia  img src='./images/me.jpeg' alt=''/>
        <p> Nikita </p>
     </Second>

     <Third>
       <p className='p-tag'>54k Followers</p>
       <p>217 Following</p>
      </Third>
     
      <Fourth>
        <hr/>
      </Fourth>

      <Fifth>
        <Feedback/>
      </Fifth> 
     
  </Right>
  );
}
