let ngay= prompt("moi ban nhap vao so ngay");
let thang=prompt("moi ban nhap vo so thang");
let nam=prompt("moi ban nhap vao so nam");
    ngay+=ngay;
    if (ngay>31 &&(thang==1 || thang==3 || thang==5 || thang==7 || thang==8 || thang==10 || thang==12 )){
        ngay=1;
        thang+=thang;
    }
    else if (thang==2){
        if  (nam % 4==0 || nam % 100 !=0 && nam % 400){
            if (ngay>29){
                ngay=1;
                thang+=thang;
            }
        } 
        else {
            if (ngay>28){
            ngay=1;
            thang+=thang;
            }
        }
    else {
        if (ngay>30){
            ngay=1;
            thang+=thang;
        }
    }
    if (nam>12){
        thang=1;
        nam=nam+1;
    }
    console.log(ngay,thang,nam);
}
    