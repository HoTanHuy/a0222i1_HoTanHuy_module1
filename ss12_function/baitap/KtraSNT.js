function SNT(n) {

    if (n<2){
        document.write(n +" Không phải là SNT");
    }
    else {
        let flag = true;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            document.write(n +" Là SNT");
        }else {
            document.write(n +" Không phải là SNT")
        }
    }


}