//9X9的空表，请自行编写这段代码
str = '<table border="1">'
for(let i=1;i<10;++i){
    str += '<tr>'
    for(var j=1;j<=i;++j){
        str += '<tb>&nbsp;</tb>'
    }
    str +='</tr>'
}
str += '</table>'
document.getElementById('table1').innerHTML = str

//倒九九乘法空表
str = '<table border="1">'
for(let i=9;i>0;--j){
    str += '<tr>'
    for(var j=i;j>o;--j){
        str += '<tb>&nbsp;</tb>'
    }
    str +='</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str

//倒九九乘法表，请自行编写这段代码
str = '<table border="1">'
for(let i=9;i>0;--j){
    str += '<tr>'
    for(var j=i;j>o;--j){
        str += '<tb>&nbsp;</tb>'
    }
    str +='</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str