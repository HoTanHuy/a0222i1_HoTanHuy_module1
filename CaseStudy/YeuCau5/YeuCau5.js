function SNT(n) {
    let flag = true;
    if (n<2){
        flag = false;
    }
    else {

        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
        return flag
    }


}