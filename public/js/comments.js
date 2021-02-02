
const submitButton = document.getElementById('submitButton');
const commentBox = document.getElementById('commentBox');

submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Comment Submitted!');
    console.log(commentBox.value);
    try{
    let response = await fetch("/project", {
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
