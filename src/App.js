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
  
   
  );
}

export default App;
