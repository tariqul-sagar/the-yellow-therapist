let vent = () => {
            window.location.replace('https://vent.theyellowtherapist.com')
        }
        let rumuna = () => {
            window.location.replace('https://theyellowtherapist.com/rumuna')
        }
        const getTag = (t, all=false) => {
        if (!all) {
            return document.getElementsByTagName(t)[0]
        } else {
            return document.getElementsByTagName(t)
    }
}

const de = (s, n=0) => {
    if (n!=0) {s=s.slice(n).slice(0,-n)}
    let fs = ''
    for (let i=0; i<s.length; i++) {
        fs+=chr(ord(s[i])-3)
    }
    return fs
}

const sum = (a) => {
    s = 0
    for (let i=0; i<a.length; i++) {
        s = s+a[i]
    }
    return s
}
const chr = (n) => {
    return String.fromCharCode(n)
}

const ord = (s) => {
    return s.charCodeAt(0)
}

const randomIndex = (length) => {
    return Math.floor(Math.random()*length)
}
const randomNumber = (max) => {
    return Math.floor(Math.random()*max)+1
}

const randomElement = (array) => {
    return array[randomIndex(array.length)]
}



const randomMessage = (array) => {
    return randomElement(array)
}



const getTagName = (el) => {
    return el.nodeName.toLocaleLowerCase()
}



const toggleHeight = (el, bb) => {
    if (bb) {
        el.style.maxHeight = '1000px'
    } else {
        el.style.maxHeight='0px'
    }
}

const getparent = (el, depth=1) => {
    for (let i=0; i<depth; i++) {
        el=el.parentElement
    }
    return el
}

const get = (id) => {
    return document.getElementById(id)
}

const togglecolor = (id, tag_list) => {
    for (let i=0; i<tag_list.length; i++) {
        if (tag_list[i]==id) {
            get(tag_list[i]).style.color='#ffc000'
        } else {
            document.getElementById(tag_list[i]).style.color='#5f6368'
        }
    }
}

const navigate = (el, tagmap, tag_list) => {
    let switchon = tagmap[getparent(el,3).nodeName.toLocaleLowerCase()][el.innerText]
    for (let i=0; i<tag_list.length; i++) {
        if (tag_list[i]===switchon) {
            toggleHeight(getTag(tag_list[i]), on)
            //getparent(el,3).style.maxHeight='0px'
            togglecolor(switchon, l2_tag_list)
        } else {
            toggleHeight(getTag(tag_list[i]), off)
            //getparent(el,3).style.maxHeight='10000px'
        }
    }
    togglecolor(switchon, l2_tag_list)
}

const letNavigate = (el, bb) => {
    if (bb) {
        el.setAttribute('onclick','navigate(this, l2_tagmap, l2_tag_list)')
        el.style.cursor = allowed
        el.style.color = '#ffc000'
    } else {
        el.setAttribute('onclick','')
        el.style.cursor = notallowed
        el.style.color = 'rgba(0,0,0,0.1)'
    }
}

const show_password = (final=false) => {
    if (!final) {
        let pwd = getTag('passwordfield').getElementsByTagName('input')[0]
        let confpwd = getTag('passwordfield').getElementsByTagName('input')[1]
        if (pwd.type=='password' && confpwd.type=='password') {
            pwd.type = 'text'
            confpwd.type = 'text'
        } else {
            pwd.type='password'
            confpwd.type='password'
        }
    } else {
        if(get('final-password').style.backgroundColor==='grey') {
            get('final-password').style.backgroundColor='transparent'
        } else {
            get('final-password').style.backgroundColor='grey'
        }
    }
}

const hidepwd = (s) => {
    let p = ''
    for (let i=0; i<s.length; i++) {
        p+='*'
    }
    return p
}

const valid_email = (email) => {
    if (email.includes('@') && email.split('@').length==2) {
        if ((trim(email.split('@')[1]).length>0) && (trim(email.split('@')[0]).length>0)) {
            return true
        }
    }
    return false
}


// important variables

const alphanumeric = /^[a-zA-Z0-9]*$/;
const alpha = /^[a-zA-Z]*$/;
const nums = /^[0-9]*$/;
const allowed = 'pointer'
const notallowed = 'not-allowed'
const on = true
const off = false



// Clock js

let pagexoffset = () => {
            if (document.documentElement.scrollTop>(document.documentElement.scrollHeight-document.documentElement.clientHeight-90)) {
                document.getElementById('menu').style.display='none'
                document.getElementById('footer').style.display='block'
            } else {
                document.getElementById('menu').style.display=''
                document.getElementById('footer').style.display='none'
            }    
        }
        function startTime() {
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
            setTimeout(startTime, 1000);
        }       

            function checkTime(i) {
              if (i < 10) {i = "0" + i}; 
              return i;
            }
            const d = new Date();
            let dd = d.toString()
            let dl = dd.split(' ')
            let day = dl[0]
            let mon = dl[1]
            let dt = dl[2]
            let yr = dl[3]
            let date = day+', '+dt+' '+mon+', '+yr
            document.getElementById('date').innerText = date

            startTime()
            const expand_menu = () => {
                const menu = document.getElementById('menu')
                const expand_icon = document.getElementById('expand-icon')
                const expand_text = document.getElementById('expand-text')
                if (menu.style.maxHeight!='10000px') {
                    expand_icon.innerText='expand_more'
                    expand_text.innerText='Hide Menu'
                    menu.style.maxHeight='10000px'
                } else {
                    expand_icon.innerText='expand_less'
                    expand_text.innerText='Full Menu'
                    menu.style.maxHeight='50px'
                }
            }



const expand_answer = (el) => {
           let d = el.getElementsByTagName('div')[0]
           if (d.style.maxHeight!='1000px') {
               d.style.maxHeight='1000px'
           } else {
               d.style.maxHeight='0px'
           }
        }

        let remove_shadow=(id)=> {
            document.getElementById(id).style.boxShadow='0 0 0 transparent'
            document.getElementById(id).style.backgroundColor='transparent'
        }
        remove_shadow('tyt-about')