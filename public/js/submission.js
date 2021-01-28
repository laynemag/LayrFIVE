let submitForm = document.getElementById('submitForm');
let title = document.getElementById('title');
let description = document.getElementById('description');
let githubProject = document.getElementById('githubProject');
let githubUsername = document.getElementById('githubUsername');
let collaborators = document.getElementById('collaborators');
let hostLink = document.getElementById('hostlink');

let name = githubUsername.value
name = name.replace(/\s/g, '')


// console.log(collaborators.value);


submitForm.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Project Submitted!');

    console.log(collaborators.value);
    console.log(description);

    try{
        let url = `https://api.github.com/repos/${name}/${githubProject.value}/languages`
        let response = await fetch(url)
        let result = await response.json()
        let languages = Object.keys(result)
        console.log(languages);
        

        let responseBack = await fetch('/submission', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username: name,
            postTitle: title.value,
            postDesc: description,
            languages: languages,
            // collaborators: collaborators.value,
            hostLink: hostLink.value,
            score: 0
          })
        })
      }

      catch(error){
        console.log(error);
      }

})