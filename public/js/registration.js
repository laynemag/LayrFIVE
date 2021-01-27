var submitButton = document.getElementById('submitForm');
var username = document.getElementById('username');
var password = document.getElementById('password');
var githubUsername = document.getElementById('githubUsername');
var imageGithub = ''

submitButton.addEventListener('click', async (e) => {
        e.preventDefault()
        // try{
          console.log(githubUsername.value);
          let url = `https://api.github.com/users/${githubUsername.value}`
          console.log(url);
          let response = await fetch(url)
          console.log('1');
          if (response.avatar_url){
            imageGithub = response.avatar_url
          }
          console.log(imageurlGH);
          console.log('2');
          let responseBack = await fetch('/registration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: username.value,
              password: password.value,
              githubUsername: `https://github.com/${githubUsername.value}`,
              imageurl: imageGithub
            })
          })
          console.log('3');

        //   let result = await response.json()


        // }

        // catch(error){
        //   console.log(error);
        // }

})