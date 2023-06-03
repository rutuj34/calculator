alert('hi');

var input=document.querySelector(".inputBox");
var inputEq=document.querySelector('.inputEq');
var hist=document.querySelector('.hist-div');
var answer=[];
var equation=[];	
		function getVal(num)
		{
			if(input.value==0)
				input.value=num;
			else
				input.value+=num;
		}
		
		function getop(op)
		{
			input.value+=op;
		}
		
		function getAns()
		{	
			answer.push(eval(input.value));
			equation.push(input.value+"=");
			inputEq.value=input.value+'=';
			input.value=eval(input.value)
		}
		
		function clearVal()
		{
			inputEq.value="";
			input.value=0;
		}
		function getHist()
		{
			for(i=0;i<answer.length;i++)
			{
				hist.innerHTML+="<h6>"+equation[i]+"</h6><h4>"+answer[i]+"</h4>"
			}
		}
		
		function clrHist()
		{
			hist.innerHTML='';
			answer=[];
			question=[];
		}