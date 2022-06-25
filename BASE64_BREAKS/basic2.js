//function encode() {
//	var txt = document.getElementById('input1').value;
//	var bse = btoa(txt);
//	var p1 = bse.slice(0, 3);
//	var p2 = bse.slice(3);
//	var fmt = p1.concat("7rc".concat(p2));
//	var fin1 = btoa(fmt);
//	var f1 = fin1.slice(0, 5);
//	var f2 = fin1.slice(5);
//	var fl = f1.concat("w8z".concat(f2));
//	var fin = btoa(fl);
//	document.getElementById('output1').innerHTML = fin;
//}

//function decode() {
//	var txt = document.getElementById('input2').value;
//	var fin1 = atob(txt);
//	var f1 = fin1.slice(0, 5);
//	var f2 = fin1.slice(8);
//	var fl = f1.concat(f2);
//	var bse = atob(fl);
//	var p1 = bse.slice(0, 3);
//	var p2 = bse.slice(6);
//	var fmt = p1.concat(p2);
//	var fin = atob(fmt);
//	document.getElementById('output2').innerHTML = fin;
//}

function encode() {
	var txt = document.getElementById('input1').value;
	var bse = btoa(txt);
	var p1 = bse.slice(0, 3);
	var p2 = bse.slice(3);
	var fmt = p1.concat("7rc".concat(p2));
	var fin1 = btoa(fmt);
	var f1 = fin1.slice(0, 5);
	var f2 = fin1.slice(5);
	var fl = f1.concat("w8z".concat(f2));
	var ts = btoa(fl);
	var dy = new Date();
	let tz = dy.getDay();
	var ty = tz.toString().concat(ts);
	var fin = btoa(ty);
	document.getElementById('output1').innerHTML = fin;
}

function decode() {
	var txt = document.getElementById('input2').value;
	var fin2 = atob(txt);
	var ly = fin2.slice(0, 1);
	var td = new Date();
	let sd = td.getDay();
	var fin1 = fin2;
	if (parseInt(ly) == sd) {
		fin1 = fin2.slice(1);
	}
	var hec = atob(fin1);
	var f1 = hec.slice(0, 5);
	var f2 = hec.slice(8);
	var fl = f1.concat(f2);
	var bse = atob(fl);
	var p1 = bse.slice(0, 3);
	var p2 = bse.slice(6);
	var fmt = p1.concat(p2);
	var fin = atob(fmt);
	document.getElementById('output2').innerHTML = fin;
}
