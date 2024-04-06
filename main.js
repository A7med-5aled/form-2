const right = document.getElementById('up');
const left = document.getElementById('in');
document.getElementById('right').addEventListener('click', function(){
    right.classList.add('active')
    left.classList.add('active')
})
    
  
document.getElementById('left').addEventListener('click', function(){
    right.classList.remove('active')
    left.classList.remove('active')
})
