let n=[];
while (true){
    let a=prompt("moi ban nhap vao")
    n.push(a);
    break;
    if (a==-1){
        break;
    }
}
for (let i=1;i<n.length;i++){
    Array.from(new Set(n));
    console.log(n[i]);
}
