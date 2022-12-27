// var limit=parseInt(prompt("enter limit :"));
// var obj={0:'a',1:'b',2:'c',3:'d',4:'e',5:'f',6:'g',7:'h',8:'i',9:'j',10:'k',11:'l',12:'m',13:'n',14:'o',15:'p',16:'q',17:'r',18:'s',19:'t',20:'u',21:'v',22:'w',23:'x',24:'y',25:'z'};
// for(i=0;i<limit;i++)
// {
// 	for(j=0;j<=i;j++)
// 	{
// 		document.write(obj[j]);
// 	}
// 	document.write("<br>");
// }


// var limit=parseInt(prompt("enter limit :"));
// f=limit-1;
// b=limit+1;
// var obj={0:'a',1:'b',2:'c',3:'d',4:'e',5:'f',6:'g',7:'h',8:'i',9:'j',10:'k',11:'l',12:'m',13:'n',14:'o',15:'p',16:'q',17:'r',18:'s',19:'t',20:'u',21:'v',22:'w',23:'x',24:'y',25:'z'};
// for(i=0;i<limit;i++)
// {
// 	for(j=0;j<limit*2;j++)
// 	{
// 		if(j==limit&&i==0)
// 		{
// 			document.write('*')
// 		}
// 		else if(j==f||j==b)
// 		{
// 			document.write('*')
// 			f=f-1;
// 			b=b+1;
// 		}
// 	}
// }



var limit=parseInt(prompt("enter limit :"));
var y=0;
y=parseInt(y);
var z=limit-1;
z=parseInt(z);
for(i=0;i<limit;i++)
{
	for(j=0;j<limit;j++)
	{
		if(j==y||j==z)
		{
			document.write("*");
		}
		if(j!=y&&j!=z)
 		{
 			document.write('-');
 		}
	}
	y=y+1;
	z=z-1;
	document.write("<br>");
}