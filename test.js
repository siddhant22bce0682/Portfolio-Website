let cursor = document.querySelector('#page5 #cursor')
document.querySelector("#page5").addEventListener('mousemove',(dets)=>{
    cursor.style.opacity=1;
    cursor.style.top = `${dets.y-25}px`
    cursor.style.left= `${dets.x-20}px`
})
document.querySelector("#page5").addEventListener('mouseleave',(dets)=>{
    cursor.style.opacity=0;
})
document.querySelector('#page5-ele1').addEventListener('mouseenter',()=>{
    cursor.style.scale = 6
})
document.querySelector('#page5-ele1').addEventListener('mouseleave',()=>{
    cursor.style.scale = 1
})
document.querySelector('#page5-ele2').addEventListener('mouseenter',()=>{
    cursor.style.scale = 6
})
document.querySelector('#page5-ele2').addEventListener('mouseleave',()=>{
    cursor.style.scale = 1
})

TweenMax.to("#smiley img", {
    rotation: "360",
    duration: 1,
    ease: "none",
    repeat: -1,
});