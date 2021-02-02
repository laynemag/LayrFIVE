// let userScoreJS = document.querySelector('#JavaScript');
// let userScorePY = document.querySelector('#Python');
// let userScoreCsharp = document.querySelector('#C#');
// let userScoreCSS = document.querySelector('#CSS');
// let userScoreHTML = document.querySelector('#HTML');
// let userScoreJAVA = document.querySelector('#JAVA');
// let userScorePCP = document.querySelector('#PCP');
let language = document.querySelector('.blue6');


language.addEventListener('click', async (e) => {
    console.log('button clicked');
    e.preventDefault()
    
    console.log(e.target.id);
    try{
        let response = await fetch('/homepage/3', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                language: e.target.id,
                score: 1
            })
        })
    }
    catch(error){
        console.log(error);
    }
})
