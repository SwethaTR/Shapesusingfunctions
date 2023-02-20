import Shape2 from './Shape2';

function Shape1(props) {
    var l=props.l;
    var b=props.b;
    var peroftriangle=(1/2*(l*b));
  return (
    <div>

     {peroftriangle}
     <Shape2 a="4"/><br></br>
     </div>
  
     
  )
}

export default Shape1;