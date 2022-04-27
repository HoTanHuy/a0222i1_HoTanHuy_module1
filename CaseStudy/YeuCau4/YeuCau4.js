function ChuanHoa(name) {
    name= name.trim().toLowerCase();
    let nameArr = Array.from(name);
    for (let i=0 ; i<nameArr.length-1;i++){
        if (nameArr[i]===' '&& nameArr[i+1]===' '){
            for (let j= i+1; j<nameArr.length-1;j++){
                nameArr[j]=nameArr[j+1];
            }
            i--;
            nameArr.pop();
        }
    }
    nameArr[0] = nameArr[0].toUpperCase();
    for (let i=1; i<nameArr.length;i++){
        if (nameArr[i]===' '){
            nameArr[i+1]=nameArr[i+1].toUpperCase();
        }
    }
    return nameArr.join('');
}
function Check(checkname) {
    let nameArr = checkname.split(" ");
    let maxKT = nameArr[0];
    for (let i=1 ; i<nameArr.length;i++){
        if (maxKT.length<nameArr[i].length){
            maxKT = nameArr[i];
        }
    }
    return maxKT;
}
function commonCharacterCount(s1, s2) {
    let myarr1 = s1.split("");
    let myarr2 = s2.split("");
    let count = 0;
    for (let i = 0; i < myarr1.length; i++) {
        for (let j = 0; j < myarr2.length; j++) {
            if (myarr1[i] === myarr2[j]) {
                count++;
                myarr1.splice(i, 1);
                myarr2.splice(j, 1);
                i--;
                break;
            }
        }
    }
    return count;
}