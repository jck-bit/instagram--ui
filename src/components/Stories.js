import {Color, Brown} from './styles/Stories.style'

export default function Stories({item:{image,id}}) {
  return(
    <Color>
       <Brown img src={`./images/${image}`} alt=''/>
    </Color>
  );
}
