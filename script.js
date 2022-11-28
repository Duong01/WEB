for(let i=0;i<50;i++){
    let span=document.createElement('span');
    span.style.left=Math.random() *innerWidth 
    + 'px';
    span.style.animationDelay=Math.random() *10+'s';
    document.body.appendChild(span);
}