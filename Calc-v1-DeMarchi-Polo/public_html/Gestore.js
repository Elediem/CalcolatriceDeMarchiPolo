$(document).ready(function () {
	var expr = [];
	var text = $("#op");
	var prec;
	var punto=false;
	text.click(function () {
		text.val("");
		punto=false;
	});
	$("#somma").click(function () {
		if (prec !== '+' && prec !== '-' && prec !== '/' && prec !== '*') {
			expr[0] = text.val();
			expr[1] = '+';
			text.val("");
			punto=false;
			prec = this.innerHTML;
		}
	});
	$("#sottr").click(function () {
		if (prec !== '+' && prec !== '-' && prec !== '/' && prec !== '*') {
			expr[0] = text.val();
			expr[1] = '-';
			text.val("");
			punto=false;
			prec = this.innerHTML;
		}
	});
	$("#molti").click(function () {
		if (prec !== '+' && prec !== '-' && prec !== '/' && prec !== '*') {
			expr[0] = text.val();
			expr[1] = '*';
			text.val("");
			punto=false;
			prec = this.innerHTML;
		}
	});
	$("#divis").click(function () {
		if (prec !== '+' && prec !== '-' && prec !== '/' && prec !== '*') {
			expr[0] = text.val();
			expr[1] = '/';
			text.val("");
			punto=false;
			prec = this.innerHTML;
		}
	});
	$("#ugual").click(function () {
		expr[2] = text.val();
		text.val(calcolo());
		prec = this.innerHTML;
	});
	$("#canc").click(function(){
		expr=[];
		punto=false;
		text.val("");
		prec = this.innerHTML;
	});
	$("#punto").click(function(){
		if (!punto) {
			punto=true;
			if (prec==="=") {
				text.val(this.innerHTML);
			}else{
				text.val(text.val() + this.innerHTML);
			}
		}
		prec = this.innerHTML;
	});
	$("[name]").click(function () {
		if (prec === "=") {
			punto=false;
			text.val(this.innerHTML);
		} else if (!(text.val() === "0" && this.innerHTML === "0")) {
			text.val(text.val() + this.innerHTML);
		}
		prec = this.innerHTML;
	});
	var calcolo = function () {
		var ris = 0;
		switch (expr[1]) {
			case '+':
				ris = parseFloat(expr[0]) + parseFloat(expr[2]);
				break;
			case '-':
				ris = parseFloat(expr[0]) - parseFloat(expr[2]);
				break;
			case '*':
				ris = parseFloat(expr[0]) * parseFloat(expr[2]);
				break;
			case '/':
				ris = parseFloat(expr[0]) / parseFloat(expr[2]);
				break;
		}
		return ris;
	};
});
