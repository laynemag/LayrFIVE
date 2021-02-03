// let userScoreJS = document.querySelector('#JavaScript');
// let userScorePY = document.querySelector('#Python');
// let userScoreCsharp = document.querySelector('#C#');
// let userScoreCSS = document.querySelector('#CSS');
// let userScoreHTML = document.querySelector('#HTML');
// let userScoreJAVA = document.querySelector('#JAVA');
// let userScorePCP = document.querySelector('#PCP');
let JavaScript = 'userScoreJS'
let Python = 'userScorePY'
let cSharp = 'userScoreCsharp'
let CSS = 'userScoreCSS'
let HTML = 'HTML'
let JAVA = 'userScoreJAVA'

let language = document.querySelector('.languages');
let likedButton;

let languageArr = [JavaScript, Python, cSharp, CSS, HTML, JAVA]

language.addEventListener('click', async (e) => {
    console.log('button clicked');
    e.preventDefault()

    // let `${e.target.id}` = 

    let targetLanguage = e.target.id.replace(/\s/g, '');

    // for (let i = 0 ; i < languageArr.length ; i++){
    //     if (targetLanguage === languageArr[i]){
            
            
    //     }
    // }

    console.log(parseInt(projectID.innerText));
    console.log(parseInt(userID.innerText));
    
    console.log(e.target.id);
    try{
        let response = await fetch(`/project/${parseInt(projectID.innerText)}/${parseInt(userID.innerText)}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                language: targetLanguage,
                score: 1
            })
        })
        console.log('++++++++++++');
    }
    catch(error){
        console.log(error);
    }
})
