$(document).ready(function() {
	$('#btn-menu-bar').on('click',function(){
		$('header .col-right').toggleClass('show');
		$('aside').removeClass('show');
	});
	$('#btn-search-top').on('click',function(){
		$('aside').toggleClass('show');
		$('header .col-right').removeClass('show');
	});
});
const uploadButton = document.querySelector('.browse-btn');
const fileInfo = document.querySelector('.file-info');
const realInput = document.getElementById('real-input');

uploadButton.addEventListener('click', (e) => {
  realInput.click();
});

realInput.addEventListener('change', () => {
  const name = realInput.value.split(/\\|\//).pop();
  const truncated = name.length > 20 
    ? name.substr(name.length - 20) 
    : name;
  
  fileInfo.innerHTML = truncated;
});