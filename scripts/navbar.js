let btnClose = document.getElementById('btnClose');
let sidebar = document.getElementById('sidebar');
let btnOpenNavclass = document.getElementById('btnOpenNavclass');


btnClose.addEventListener('click', function(){
    sidebar.style.display = 'none';
})

btnOpenNavclass.addEventListener('click', function(){
    sidebar.style.display = 'initial';
})