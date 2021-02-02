let userScoreJS = document.querySelector('#JavaScript');
let userScorePY = document.querySelector('#Python');
let userScoreCsharp = document.querySelector('#C#');
let userScoreCSS = document.querySelector('#CSS');
let userScoreHTML = document.querySelector('#HTML');
let userScoreJAVA = document.querySelector('#JAVA');
let userScorePCP = document.querySelector('#PCP');

let languages = [userScoreJS, userScorePY, userScoreCsharp, userScoreCSS, userScoreHTML, userScoreJAVA];

languages.forEach(language => {
    language.addEventListener('click', async (e) => {
        e.preventDefault()
        try{
            let response = await fetch('/homepage', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    language: 1
                })
            })
        }
        catch(error){
            console.log(error);
        }
    })
})