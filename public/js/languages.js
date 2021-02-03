
let language = document.querySelector('.languages');
let thumb = document.querySelector('.thumb')


language.addEventListener('click', async (e) => {
    console.log('button clicked');
    e.preventDefault()
    thumb.style.cssText = 'color: #2c7da0';

    let targetLanguage = e.target.id.replace(/\s/g, '');

    try{
        let response = await fetch(`/project/${parseInt(projectID.innerText)}/${parseInt(userID.innerText)}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                language: targetLanguage,
                score: 1
            })
        })
    }
    catch(error){
        console.log(error);
    }
})
