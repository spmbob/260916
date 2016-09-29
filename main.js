function kw(a,b,c) {
	if (a==0) 
		return (-c/b);
	var D=(b*b)+(4*(a*c));
	if (D<0)
		return "Нерешаемо";
	if (D=0)
		return "x="-b/(2*a);
	if (D>0)
		{
		var x1=(-b+Math.sqrt(D))/(2*a);
		var x2=(-b-Math.sqrt(D))/(2*a);
		return "x1="+x1+"|x2="+x2;
		}
}	
var r = kw(2,4,-2);	
console.log(r);