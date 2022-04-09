//bài 1
function x2(x) {
    return x*x ;
}
//bài 2
function DT(bc) {
    return bc*bc*3.14;
}
function CV(bc2) {
    return bc2*2*3.14;
}
//bài 3
function GT(a) {

    if (a==0 || a==1){
        gth = 1;
        return gth;
    }else if (a<0){
        return "SỐ âm không có giai thừa"
    }else if (a>1){
        gth = a ;
        for (let i=1; i<a ; i++){
            gth= gth*i;
        } return gth;
    }

}
//bài 4
function KTKT(n) {
    let flg = false;
    if(n=="" || n==" "){
        alert("chưa nhập!!")
    }else if (! isNaN(n)){
        flg = true;
        document.write(flg)
    }else {
        document.write(flg)
    }
}
//bài 5
//Cách 1
function checkMin(a,b,c) {
    let min = a ;
    if(b<min){
        min = b
        if(c<min){
            min =c
        }
    }
    return min
}
//Cách 2
function minArray(arr) {
    if(arr.length == 0)
        return -1;
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
//bài 6
function checkNum(x) {
    if (x>0){
        return true;
    }else {
        return false;
    }
}
//bài 7
function displaceNum(a,b) {
    let c = 0;
    c = a ;
    a = b ;
    b = c ;
    document.write("Sau khi hoán đổi thì x = " + a + " y = "+b);
}
//bài 8
function arr() {
    let array= parseInt(prompt("Input array:"));
    let myarr = new Array(array);
    for (let i=0; i< myarr.length ;i++){
        let value= prompt("input ["+i+"]:");
        myarr[i]= value;}
    myarr.reverse();
    document.write(myarr)
}
//bài 9
function arr1(character) {
    let array= parseInt(prompt("Input array:"));
    let myarr = new Array(array);
    let coutn = 0 ;
    for (let i=0; i< myarr.length ;i++){
        let value= prompt("input ["+i+"]:");
        myarr[i]= value;
        if (myarr[i] == character){
            ++coutn;
        }
    }
    if(coutn==0){
        coutn = -1;
    }
    return coutn;
}