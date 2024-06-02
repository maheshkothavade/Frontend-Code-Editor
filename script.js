let output = document.querySelector("#output");
let allInput = document.querySelectorAll(".left-part textarea");

//console.log(allInput[1]);

let htmlCode,cssCode,jsCode='';
allInput.forEach((el,index)=>{
    el.addEventListener("keyup",()=>{
        if(index==0){
            htmlCode=el.value;
        }
        if(index==1){
            cssCode=el.value;
        }
        if(index==2){
             jsCode=el.value;
        }
        output.contentDocument.body.innerHTML=htmlCode;
        output.contentDocument.head.innerHTML=`<style>${cssCode}</style>`;
        output.contentWindow.eval(jsCode);
    })
});



//output.contentDocument.body.innerHTML="<h1>Hii mahesh</h1>"
//output.contentDocument.head.innerHTML="<style>h1{color:red}</style>"