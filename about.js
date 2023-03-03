console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function complimentUser(e){
	alert('That\'s my cat but you can have him cause you\'re so cool')
}


let form = document.querySelector('#contact');
let beanPic = document.getElementById('beans-pic')

form.addEventListener('submit', handleSubmit);
beanPic.addEventListener('mouseover', complimentUser)
