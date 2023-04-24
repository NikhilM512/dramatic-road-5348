export default function smoothScrollTo(id){
    const node= document.getElementById(id);
    window.scrollTo({
        top: node.offsetTop,
        behavior:"smooth"
    })
}