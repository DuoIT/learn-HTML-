// Viết code sao cho khi nhấn nút clear, nội dung của toàn bộ các field trong form có id là `loginForm` sẽ bị xoá (reset)
// Gợi ý: form element có method reset() dùng để xoá toàn bộ nội dung
// Tham khảo: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement

var btnClear = document.getElementById('clearButton');

btnClear.addEventListener('click', function()
{
	document.getElementById('loginForm').reset();
});