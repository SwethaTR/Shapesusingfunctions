import Shape4 from './Shape4';
function Shape3(props) {
    var a=props.a;
   
    var perofsquare=(4*a);
  return (

<div>
     {perofsquare}
    
     <Shape4 s1="5" s2="4" s3="6"/><br></br>
     </div>
   
    
  );
}

export default Shape3;