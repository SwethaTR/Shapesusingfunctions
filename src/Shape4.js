import Shape5 from './Shape5';
function Shape4(props) {
    var s1=props.s1;
    var s2=props.s2;
    var s3=props.s3;
   
    var peroftri=(s1+s2+s3);
  return (
<div>
    
{peroftri}
<Shape5 s="2"/><br></br>
</div>

  );
}

export default Shape4;