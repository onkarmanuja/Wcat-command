let fs = require("fs");
let path = require("path");

let inputArray = process.argv.slice(2);
// console.log(inputArray);
   let optionArr =[];
   let PathArr =[];
    
   for(let i =0; i<inputArray.length;i++){
       let firstChar = inputArray[i].charAt(0);
       if(firstChar == "-"){
           optionArr.push(inputArray[i]);
       } else{
      PathArr.push(inputArray[i]);
        
       }
   }
    for(let i =0; i<PathArr.length;i++){
        let ans = fs.existsSync(PathArr[i]);
        if(ans == false) {
         console.log("re enter " + i + " path");
         return;
        }
    }   
          let content = "";
        for(let i =0; i<PathArr.length;i++){
    let file = fs.readFileSync(PathArr[i]);
    content += file +"\r\n";
    }
    // console.log(content);
let contentArray = content.split("\r\n");
// console.log(contentArray);
let BandNtogether= optionArr.includes("-n") && optionArr.includes("-b")

if (BandNtogether == true) {
    let indexN = optionArr.indexOf("-n");
    let indexB = optionArr.indexOf("-b");
    if (indexN > indexB) {
        for(let i = indexN;i< optionArr.length;i++){
            if(optionArr[i] == "-n" || optionArr[i] =="-b" ){
            optionArr.splice(i, 1); 
            i--;
        }
    } 
    } else {
        for(let i = indexB;i< optionArr.length;i++){
            if(optionArr[i] == "-n" || optionArr[i] =="-b" ){
            optionArr.splice(i, 1); 
            i--;
    }

}
    }
}

let sPresent =  optionArr.includes("-s");
if (sPresent ==true){
for(let i =0; i<contentArray.length;i++){
    if(contentArray[i]=="" && contentArray[i-1]==""){
        contentArray[i]=null;
    }
    else if(contentArray[i] == "" && contentArray[i-1]==null )
    {
        contentArray[i]=null;

    }
   
} 

let nextArr = [];
for(let i=0; i<contentArray.length;i++){
    if(contentArray[i] !== null){
    nextArr.push(contentArray[i]);
    }
}
contentArray = nextArr;
// console.log(contentArray.join("\n"));
} 
  
let nPresent =  optionArr.includes("-n");
if (nPresent ==true){
    for (let i=0; i<contentArray.length; i++){
        contentArray[i] = (i+1 + contentArray[i]);
    }

    }
    // (contentArray.join("\n"));
    let bPresent =  optionArr.includes("-b");
if(bPresent == true){
   
    let count = 1;
    for(let i=0; i<contentArray.length;i++){
        if(contentArray[i] != ""){
            contentArray[i]=(count +  " " + contentArray[i] );
            count++;
        }
        else{
            contentArray[i]= (contentArray[i]);
        }
           
            
        }
    }
    console.log(contentArray.join("\n"));
  




        


