function scrollAppear(){
    let mainText = document.getElementById('main-txt')
    let mainPosition = mainText.getBoundingClientRect().top;
    console.log(mainPosition);
    let screenHeight = window.innerHeight / 1.2;
    console.log("hello " + screenHeight)
    if(mainPosition<screenHeight){
        mainText.classList.add('appear')
        console.log('hii ' + mainPosition + " "  + screenHeight)
    }
}
scrollAppear();

window.addEventListener('scroll', scrollAppear)