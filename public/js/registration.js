var submitButton = document.getElementById('submitForm');
var username = document.getElementById('username');
var password = document.getElementById('password');
var githubUsername = document.getElementById('githubUsername');
var imageGithub;


submitButton.addEventListener('click', async (e) => {
        e.preventDefault()
        try{
          let url = `https://api.github.com/users/${githubUsername.value}`
          let response = await fetch(url)
          let result = await response.json()

          if (result.avatar_url){
            imageGithub = result.avatar_url
          } else {
            imageGithub = '/images/avatar2.jpg'
          }

          let responseBack = await fetch('/registration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: username.value,
              password: password.value,
              githubUsername: githubUsername.value,
              imageurl: imageGithub
            })
          })
        }

        catch(error){
          console.log(error);
        }

})