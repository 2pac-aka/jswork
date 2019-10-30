function goldbach(){
    let sum = parseInt(document.getElementById('odd').value)
    var str = []
    if(sum <= 2 || (sum % 2 != 0) )
    {
        alert('请输入大于2的偶数')
        return false
    }
    for(let i = 2; i <= sum / 2; ++i)
    {
        for(j = 2; j < i; ++j)
        {
            if(i % j == 0){
                break;
            }
        }
        if(j == i){ // i是素数
            var aka = sum - i;
            for(k = 2; k < aka; ++k)
            {
                if(aka % k == 0){
                    break;
                }
            }
            if(k == aka){
                str += sum + "可以被拆分为两个质数" + i + "和" + aka + "的和\n"
            }
        }
    }
    document.getElementById('goldbach').innerText = str
}