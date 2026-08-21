function sum(a,b){
    return a+b;
}

function sumWithMsg(msg,clbk){
   const result=clbk(20,30);
   const fresult="HI" + msg+"your age="+ result;
   console.log(fresult);

}
sumWithMsg( "MISS. VAISHNAVI", sum);
