
const submitButton = document.getElementById('submitButton');
const commentBox = document.getElementById('commentBox');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Comment Submitted!');
    console.log(commentBox.value);

})