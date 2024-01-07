// // sual2  Verilmiş ədədin tək ve ya cüt ədəd olduğunu yoxla
// // var say=35
// //   if (say%2==0) {
// //     console.log("cut ededir")
    
// //   }else{
// //     console.log("tekdir");
// //   }



// //   //sual 3
// //   var num=5 
// //   switch (num) {
// //     case 1:console.log("yanvar")
        
// //         break;
// //     case 2:console.log("fevral")
        
// //         break;
// //     case 3:console.log("mart")
        
// //         break;
// //     case 4:console.log("aprel")
        
// //         break;
// //     case 5:console.log("may")
        
// //         break;
// //     case 6:console.log("iyun")
        
// //         break;
// //     case 7:console.log("iyul")
        
// //         break;
// //     case 8:console.log("avqust")
        
// //         break;
// //     case 9:console.log("sentyabr")
        
// //         break;
// //     case 10:console.log("oktyabr")
        
// //         break;
// //     case 11:console.log("noyabr")
        
// //         break;
// //     case 12:console.log("dekabr")
        
// //         break;
  
// //     default:console.log("1ile 12 arasinda eded olmalidir!!!!")
// //         break;
// //   }


// //sual 4


// var num=264
// var count=0
// for (let i=num; i >=1; i=i/10) {
//     count++
// }
// if (count==3)
//  {
//     var firstnum=Math.floor(num/100)
//     var secondnum=Math.floor((num%100)/10)
//     var thirdnum=num%10
// if(firstnum+thirdnum==secondnum){
//     console.log("beli");
// }
// else{
//     console.log("xeyir");
// }
    
// }
// else{
//     console.log("3reqemli eded deyil")
// }


//sual 6
// var cutsum=0
// var teksum=1
  
// for (let i= 20; i<= 60 ; i++ ) {

//    if(i %2 ==0){
//     cutsum +=i;

//    }else{
//     teksum *=i

//    }
    
// }
// console.log("cut ededlerin cemi:"+cutsum);
// console.log("tek ededlerin hasili:"+ teksum);



//sual 1
//  var num=4235
//  var count=0
//  var sum=0
//  for  (  ; num>0 ; num= Math.floor(num/ 10)) {
//     sum+=num%10
//     count++
    
//  }  
//    if (count===4) {
//     console.log(sum);
    
    
//  } else{
//     console.log("4reqemli eded deyil");
//  }
 

 
//sual 7   (1-1000 qədər ədədlərin içərisində həm 7-ə, həmdə 8-ə bölünənlərin siyahisi)

    var  bolunen = [];
    var  bolunmeyenSayi = 0;

    for (let i = 1; i <= 1000; i++) 
        if (i % 7 === 0 && i % 8 === 0) {
            bolunen.push(i);
        } else {
            bolunmeyenSayi++;
        }
