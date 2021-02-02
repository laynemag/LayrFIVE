
const submitButton = document.getElementById('submitButton');
const commentBox = document.getElementById('commentBox');
let userID = document.getElementById('userID')
let projectID = document.getElementById('projectID')


submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Comment Submitted!');
    console.log(commentBox.value);
    console.log(parseInt(projectID.innerText));
    console.log(parseInt(userID.innerText));
    try{
    let response = await fetch(`/project/${parseInt(projectID.innerText)}/${parseInt(userID.innerText)}`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            commentBox: commentBox.value
            
        })
       
    })
    }
    catch(error){
        console.log(error);
    }
    
})

