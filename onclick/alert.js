// Viết code sao cho khi nhập tên ai đó vào ô input, click vào nút Say Hi! sẽ hiển thị ra alert box với nội dung: Hi kèm theo tên người đó. Ví dụ: Hi Coders.Tokyo

function Name() {
	// body...
	var a = document.getElementById('name');
	var b = a.value;
	alert('Hello' + '' + b);
	a.value = '';
}