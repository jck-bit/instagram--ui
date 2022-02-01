import {Yellow,Bottom } from './styles/Card.style'


export default function Card({item:{ image}}) {
  return(
      <Bottom>
          
      <Yellow img src={`./images/${image}`} alt='' />
         
      </Bottom>
  );
}
