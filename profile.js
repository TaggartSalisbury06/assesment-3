let colorBtn = document.getElementById('color')
let placeBtn = document.getElementById('place')
let ritualBtn = document.getElementById('ritual')

let colorBtnClick = () => alert('Dark blue or Black')
let placeBtnClick = () => alert('Seattle, Washington')
let ritualBtnClick = () => alert('Making morning smoothie and driving to school')

colorBtn.addEventListener('click', colorBtnClick)
placeBtn.addEventListener('click', placeBtnClick)
ritualBtn.addEventListener('click', ritualBtnClick)