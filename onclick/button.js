// Tạo 1 button mới nằm dưới p
// Viết code sao cho khi click button đó thì giá trị biến `count` tăng 1 đơn vị và nội dung của `counter` cũng thay đổi theo`


var count = 0;
var counter = document.getElementById('count');
counter.innerHTML = count;

function duo(){
	var a = document.getElementById('count');
	var b= Number(a.textContent)+1;
	a.innerHTML = b;
}