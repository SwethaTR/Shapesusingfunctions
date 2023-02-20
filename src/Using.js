import React from "react";
class Using extends React.Component{
    render(){
     
        
    return(
        <div>
          
            <P1/>
        </div>
    )
    }
}
class P1 extends React.Component{
    render(){
     
        var l=5;
        var b=10;
    var ans= 2*(l+b);
    return(
        <div>
           <p>{ans}</p> 
            <P2/>
        </div>
    )
    }
}
class P2 extends React.Component{
    render(){
     
        var a=5;
        
    var ans= a*a;
    return(
        <div>
            {ans}
            <Class3 />        </div>
    )
    }
}
class Class3 extends React.Component{
    render(){
     
        var a=5;
        
    var ans= 4*a;
    return(
        <div>
            {ans}
            <Class4 />
        </div>
    )
    }
}
class Class4 extends React.Component{
    render(){
        var s1=3;
        var s2=4;
        var s3=5;
       
        var ans=(s1+s2+s3);
    return(
        <div>
            {ans}
            <Class5 />
        </div>
    )
    }
}

class Class5 extends React.Component{
    render(){
     
        var s=6;
   
    var ans=(s*s*s);
    return(
        <div>
            {ans}
           
        </div>
    )
    }
}
export default Using;