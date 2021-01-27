var submitButton = document.getElementById('submitForm');
var username = document.getElementById('username');
var password = document.getElementById('password');
var githubUsername = document.getElementById('githubUsername');

submitButton.addEventListener('click', async (e) => {
        e.preventDefault()
        // try{
          console.log(githubUsername.value);
          let url = `https://api.github.com/users/${githubUsername.value}`
          console.log(url);
          let response = await fetch(url)
          console.log('1');
          let responseBack = await fetch('/registration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: username.value,
              password: password.value,
              githubUsername: githubUsername.value
            })
          })
          console.log('2');

        //   let result = await response.json()

          if (result.avatar_url){
            let imageurl = result.avatar_url
          }

        // }

        // catch(error){
        //   console.log(error);
        // }

})