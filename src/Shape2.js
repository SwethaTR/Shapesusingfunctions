import Shape3 from './Shape3';
function Shape2(props) {
    var a=props.a;
   
    var arofsquare=(a*a);
  return (

 <div>
     {arofsquare}
     <Shape3 a="4"/><br></br>
 </div>
 
  );
}

export default Shape2;