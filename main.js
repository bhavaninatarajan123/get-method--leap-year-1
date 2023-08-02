var a=new Date();
/*document.write(" new date:  "+a+"<br>");*/

var b=a.getFullYear();

document.write(b+"<br>");

if (b%4==0){
    document.write ("the given year is leap year");
}
else{
    document.write("the given year is not a leap year");
}