window.addEventListener('DOMContentLoaded', function() {

    /* 登陆和未登录 */
    let isLogin = localStorage.getItem('isLogin') === 'true'
    const topUser = document.getElementById('top-user')
    const username = document.getElementsByClassName('username')
    
    if (isLogin === true) {
        topUser.getElementsByClassName('noLogin')[0].style.display = 'none'
        topUser.getElementsByClassName('hadLogin')[0].style.display = 'block'
        for (let i = 0; i < username.length; i++) {
            username[i].innerText = localStorage.getItem('username')
            
        }
    } else {
        topUser.getElementsByClassName('noLogin')[0].style.display = 'block'
        topUser.getElementsByClassName('hadLogin')[0].style.display = 'none'

    }
    

    /* 地址栏处的点击选中效果 */
    
    const location = document.getElementById('location')
    const locationName = document.getElementById('locationName')
    const locationArr = location.getElementsByTagName('li')
    const locationAList = location.getElementsByTagName('a')
    let now = 18

    locationArr[now].style.backgroundColor = '#f10215'
    locationArr[now].style.color = '#fff'
    
    for (let i = 0; i < locationArr.length; i++) {
        locationArr[i].onclick = () => {
            for (let j = 0; j < locationArr.length; j++) { 
                locationArr[j].style.backgroundColor = ''
                locationArr[j].style.color = ''
            }
            now = i
            locationAList[now].style.backgroundColor = ''
            locationAList[now].style.color = ''
            locationArr[now].style.backgroundColor = '#f10215'
            locationArr[now].style.color = '#fff'
            locationName.innerText = locationAList[now].innerText
        }
        locationAList[i].onmouseover = () => {
            if (i !== now) {
                locationAList[i].style.backgroundColor = '#f4f4f4'
                locationAList[i].style.color = '#f10214'
            }
        }
        locationAList[i].onmouseout = () => {
            locationAList[i].style.backgroundColor = ''
            locationAList[i].style.color = ''
        }
    }
})