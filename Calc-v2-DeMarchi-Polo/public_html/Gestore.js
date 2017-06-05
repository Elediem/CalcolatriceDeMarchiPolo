$(document).ready(function () {
	var expr = [];
	var text = $("#op");
	var prec;
	var punto = false;
	$(document).keypress(function (ev) {
		switch (ev.which) {
			case 99:
				canc();
				break;
			case 48 :
				insNum("0");
				break;
			case 49 :
				insNum("1");
				break;
			case 50 :
				insNum("2");
				break;
			case 51 :
				insNum("3");
				break;
			case 52 :
				insNum("4");
				break;
			case 53 :
				insNum("5");
				break;
			case 54 :
				insNum("6");
				break;
			case 55 :
				insNum("7");
				break;
			case 56 :
				insNum("8");
				break;
			case 57:
				insNum("9");
				break;
			case 42:
				molti();
				break;
			case 43:
				somma();
				break;
			case 45:
				sottr();
				break;
			case 46:
				dec();
				break;
			case 47:
				divis();
				break;
			case 13:
				ugual();
				break;


		}
	});
	$("#somma").click(function () {
		somma();
	});
	$("#sottr").click(function () {
		sottr();
	});
	$("#molti").click(function () {
		molti();
	});
	$("#divis").click(function () {
		divis();
	});
	$("#ugual").click(function () {
		ugual();
	});
	$("#canc").click(function () {
		canc();
	});
	$("#punto").click(function () {
		dec();
	});
	$("[name]").click(function () {
		insNum(this.innerHTML);
	});
	var somma = function () {
		if (prec !== '+' && prec !== '-' && prec !== '/' && prec !== '*') {
			expr[0] = text.val();
			expr[1] = '+';
			text.val("");
			punto = false;
			prec = "+";
		}
	};
	var sottr = function () {
		if (prec !== '+' && prec !== '-' && prec !== '/' && prec !== '*') {
			expr[0] = text.val();
			expr[1] = '-';
			text.val("");
			punto = false;
			prec = "-";
		}
	};
	var insNum = function (n) {
		if (prec === "=") {
			punto = false;
			text.val("");
			text.val(n);
		} else if (!(text.val() === "0" && n === "0")) {
			text.val(text.val() + n);
		}
		prec = n;
	};
	var molti = function () {
		if (prec !== '+' && prec !== '-' && prec !== '/' && prec !== '*') {
			expr[0] = text.val();
			expr[1] = '*';
			text.val("");
			punto = false;
			prec = "*";
		}
	};
	var divis = function () {
		if (prec !== '+' && prec !== '-' && prec !== '/' && prec !== '*') {
			expr[0] = text.val();
			expr[1] = '/';
			text.val("");
			punto = false;
			prec = "/";
		}
	};
	var ugual = function () {
		expr[2] = text.val();
		text.val(calcolo()); 
		punto = false;
		prec = "=";
	};
	var canc = function () {
		expr = [];
		punto = false;
		text.val("");
		prec = "canc";
	};
	var dec = function () {
		if (!punto) {
			punto = true;
			if (prec === "=") {
				text.val(".");
			} else {
				text.val(text.val() + ".");
			}
		}
		prec = ".";
	};
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
