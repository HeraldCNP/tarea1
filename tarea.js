function cinco(p,n){
    n+=1;
    var sum=p;
    while(n--!=0){
      sum*=10;
    }
    sum+=p;
    sum=Math.pow(sum,2);
    p=0;
    while(sum>0){
      p+=sum%10;
      sum=parseInt(sum/=10);
    }
    return p;
}

function tres(cad){
    var res='';
    var res2='';
    var i=0;
    while(i<cad.length){
        let c=cad.charAt(i);
        if(c=='('){
          i++;
          while(c!=')'){
            c=cad.charAt(i);
            if(c!=')'){
              res2+=c;
              i++;
            }
          }
          res2=volteo(res2);
          res+=res2;
        }else{
          res+=c;
        }
        i++;
    }
    return res;
}

function volteo(cad){
  var res='';
  for(var i=cad.length-1;i>=0;i--){
    let c=cad.charAt(i);
    res+=c;
  }
  return res;
}

//console.log(cinco(5,1));
console.log(tres("foo(bar)baz"));
