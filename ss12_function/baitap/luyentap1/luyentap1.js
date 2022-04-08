function alertMessage() {
    alert("Xin Chào!!")
}
function num(a) {
    return ++a ;
}
function sum(a,b) {
    if (a>b){
        alert(a+">"+b);
    }else {
        return a+b;
    }
}
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
function alert1(a) {
    alert("Giá trị hiện tại của result là "+a);
}
function check(starsName) {
    let stars = ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"];
    let star = ["Ursa Minor","Tarurus","Cygnus","Lyra","Aquila","Ursa Major","Leo"];
    for (let i = 0; i <= stars.length;i++) {
        if (starsName === stars[i]) {
            stars[i] = star[i];
            return (star[i]);
        }
    } return ("không có trong mảng tên sao")
}