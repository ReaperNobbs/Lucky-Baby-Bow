window.addEventListener('scroll', function(){
      let HeaderLogo = document.getElementById('header-logo')
      let Header = document.getElementById('header')
      let Shop = document.getElementById('shop')

      let FirstSection = document.getElementById('first-section')
      
      let HeaderBowEndRight = document.getElementById('HeaderBowEndRight')
      let HeaderBowEndLeft = document.getElementById('HeaderBowEndLeft')

      let ScrollValue = window.scrollY

      const limit = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
      )

      if (ScrollValue >= 30) {
            HeaderLogo.style.height = "84px"
            HeaderLogo.style.width = "84px"
            Header.style.top = "0px"
            HeaderLogo.style.cursor = "pointer"

            HeaderBowEndRight.style.opacity = 0
            HeaderBowEndLeft.style.opacity = 0
            HeaderBowEndRight.style.left = 0
            HeaderBowEndLeft.style.right = 0

            Header.style.right = 0
            Header.style.left = 0
      } else {
            HeaderLogo.style.height = "125px"
            HeaderLogo.style.width = "125px"
            Header.style.top = "23px"
            HeaderLogo.style.cursor = "default"
            FirstSection.style.opacity = 1

            HeaderBowEndRight.style.opacity = 1
            HeaderBowEndLeft.style.opacity = 1
            HeaderBowEndRight.style.left = "-85px"
            HeaderBowEndLeft.style.right = "-85px"

            Header.style.right = "174px"
            Header.style.left = "174px"
      }
});