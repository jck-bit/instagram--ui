import content from './components/content';
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import {Container} from './components/styles/container.styled'
import { Wrapper } from './components/styles/Wrapper.style';
 
function App() {
  return (
  <Wrapper>
    <Container> 

     <Rightbar/>
     <Sidebar/>

    </Container> 
  </Wrapper>
  
   {content.map((item, index)=>{
     return(
       item.span
     )
   })}
  );
}

export default App;
