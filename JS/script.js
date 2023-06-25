const champList = document.getElementById('champList')
const champLink = document.querySelectorAll('champlist .card')

const url = `https://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion.json`
const urlSearchParams = new URLSearchParams(window.location.search)
const champId = urlSearchParams.get("id")

const fetchChampion = async () => {
    const APIresponse = await fetch(url);
    const data = await APIresponse.json();
    return data;  
    }
    
    const fetchIndChampion = async (champinInd) => {
        const APIresponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion/${champinInd}.json`);
        const dataInd = await APIresponse.json();
        return dataInd;  
        }


    const renderAllChampion = async () => {
        const data = await fetchChampion()
        
        //get All champions
        const champ = Object.values(data.data);

        champ.forEach(champ=>{
         
            const card = document.createElement('a')
            const splash = document.createElement('div')
            const splashImg = document.createElement('img')
            const texts = document.createElement('div')
            const name = document.createElement('h1')
            const title = document.createElement('h2')  

            splash.classList.add('splash')
            splashImg.setAttribute("id", 'splash')

            texts.classList.add('texts')

            card.classList.add('card')
            card.setAttribute("id", champ.id)
            card.setAttribute("href", `/campeao.html?id=${champ.id}`)
            card.setAttribute("target", '_self')

            name.setAttribute("id", 'name')
            title.setAttribute("id", 'title')
            splashImg.setAttribute("src", `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`)
            name.innerHTML += champ.name
            title.innerHTML += champ.title

            splash.appendChild(splashImg)
            texts.appendChild(name)
            texts.appendChild(title)
            card.appendChild(splash)
            card.appendChild(texts)

            champList.appendChild(card)
           
        })
        
    } 


        const renderIndChampion = async (championInd)=>{
            const dataInd = await fetchIndChampion(championInd)

            const image = document.getElementById('image')
            const indName = document.getElementById('indName')
            const indTitle = document.getElementById('indTitle')
            const indDesc = document.getElementById('indDesc')

            const attack =  document.getElementById('attack')
            const defense =  document.getElementById('defense')
            const difficulty =  document.getElementById('difficulty')
            const magic =  document.getElementById('magic')

            const passive = document.getElementById('passive')
            const passiveDesc = document.getElementById('passive-desc')

            const Q = document.getElementById('Q')
            const W = document.getElementById('W')
            const E = document.getElementById('E')
            const R = document.getElementById('R')

            const QDesc = document.getElementById('Q-desc')
            const WDesc = document.getElementById('W-desc')
            const EDesc = document.getElementById('E-desc')
            const RDesc = document.getElementById('R-desc')

            image.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`
            indName.innerHTML = dataInd['data'][champId]['name']
            indTitle.innerHTML = dataInd['data'][champId]['title']
            indDesc.innerHTML = dataInd['data'][champId]['lore']

            attack.innerHTML = `Ataque: ${dataInd['data'][champId]['info']['attack']}`
            defense.innerHTML = `Defesa: ${dataInd['data'][champId]['info']['defense']}`
            difficulty.innerHTML = `Dificuldade: ${dataInd['data'][champId]['info']['difficulty']}`
            magic.innerHTML = `Mágica: ${dataInd['data'][champId]['info']['magic']}`

            passive.innerHTML = `Passiva - ${dataInd['data'][champId]['passive']['name']}`
            passiveDesc.innerHTML = `${dataInd['data'][champId]['passive']['description']}`

            Q.innerHTML = `Q - ${dataInd['data'][champId]['spells']['0']['name']}`
            W.innerHTML = `W - ${dataInd['data'][champId]['spells']['1']['name']}`
            E.innerHTML = `E - ${dataInd['data'][champId]['spells']['2']['name']}`
            R.innerHTML = `R - ${dataInd['data'][champId]['spells']['3']['name']}`

            QDesc.innerHTML = `${dataInd['data'][champId]['spells']['0']['description']}`
            WDesc.innerHTML = `${dataInd['data'][champId]['spells']['1']['description']}`
            EDesc.innerHTML = `${dataInd['data'][champId]['spells']['2']['description']}`
            RDesc.innerHTML = `${dataInd['data'][champId]['spells']['3']['description']}`


            console.log(dataInd)
        }
   
        if(!champId){
            renderAllChampion()
        }else{    
            renderIndChampion(champId)    
            }

