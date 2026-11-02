// 平滑滚动
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetDom = document.querySelector(targetId);
        if(targetDom){
            targetDom.scrollIntoView({
                behavior: "smooth"
            })
        }
    })
})