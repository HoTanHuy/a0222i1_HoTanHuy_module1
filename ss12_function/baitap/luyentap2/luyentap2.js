function x2(x) {
    return x*x ;
}
function DT(bc) {
    return bc*bc*3.14;
}
function CV(bc2) {
    return bc2*2*3.14;
}
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
function KTKT(n) {
    let flg = false;
    if ( !isNaN(n)){
        flg = true;
        document.write(flg)
    }else {
        document.writeln(flg)
    }
}