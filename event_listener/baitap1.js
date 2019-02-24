var user = [ 
	{
		name: 'Duong',
		phone: '0123456789'
	},
	{
		name:'Hoai',
		phone: '023456789'
	},
	{
		name:'Hung',
		phone:'02345154564'
	}
];
var userList = document.getElementById('userList');
var searchInput = document.getElementById('searchInput');
function render(user) 
	{
		var content = user.map(function(user) {
			return '<li>' + user.name + ' - ' + user.phone + '</li>';
		});
		userList.innerHTML = content.join(''); 
}

render(user);

searchInput.addEventListener('keyup', function(){
	// sự kiện 'change' chỉ xảy ra khi input bị mất focus
  // sử dụng sự kiện keyup để tìm kiếm người dùng có số điện thoại khớp với nội dung tìm kiếm.
  // Gợi ý: 
  // - biến value dưới đây là giá trị của input tại thời điểm gõ phím
  // - sử dụng array.filter và string.indexOf để lọc users array, trả về những phần tử có số điện thoại chứa string lưu trong biến `value`
  // Sử dụng Chrome Developer Tools để xem giá trị hiển thị ra sau mỗi lần gõ
  
  var value = searchInput.value;
  var info = user.filter(x => {
  	return x.name.indexOf(value) != -1
  });
  render(info);
});