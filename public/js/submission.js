let submitForm = document.getElementById('submitForm');
let title = document.getElementById('title');
let description = document.getElementById('description');
let githubProject = document.getElementById('githubProject');
let githubUsername = document.getElementById('githubUsername');
let collaborators = document.getElementById('collaborators');
let hostLink = document.getElementById('hostlink');
let help = false;
let name = githubUsername.value

name = name.replace(/\s/g, '')



submitForm.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Project Submitted!');


    // try{
        let url = `https://api.github.com/repos/${name}/${githubProject.value}/languages`
        let response = await fetch(url)
        let result = await response.json()
        let languages = Object.keys(result)

        if (collaborators.value === "collaborators"){
            help = true
        }


        let responseBack = await fetch('/submission', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            usernameGithub: name,
            postTitle: title.value,
            postDesc: description.value,
            languages: languages,
            githubProject: githubProject.value,
            collaborators: help,
            hostLink: hostLink.value,
            score: 0
          })
        })
    //   }

    //   catch(error){
    //     console.log(error);
    //   }

})