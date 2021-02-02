
const submitButton = document.getElementById('submitButton');
const commentBox = document.getElementById('commentBox');
let userID = document.getElementById('userID')
let projectID = document.getElementById('projectID')

console.log(projectID);

submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Comment Submitted!');
    console.log(commentBox.value);
    console.log(parseInt(projectID.value));
    console.log(parseInt(userID.value));
    try{
    let response = await fetch(`/project/${parseInt(projectID.value)}/${parseInt(userID.value)}`, {
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

