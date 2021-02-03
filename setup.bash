# sequelize model:generate --name users --attributes username:string,password:string,imageurl:string,github:string
# sequelize model:generate --name roles --attributes roleType:integer
# sequelize model:generate --name profile --attributes roleType:integer,postTotal:integer,userScorePY:integer,userScoreJS:integer,userScoreCsharp:integer,userScoreHTML:integer,userScoreCSS:integer,userScoreJAVA:integer 
# sequelize model:generate --name comment --attributes userID:integer,projectID:integer,username:string,comment:string
# sequelize model:generate --name projects --attributes userID:integer,postTitle:string,postDesc:string,languages:array,collaborators:boolean,githubUsername:string,githubRepo:string,hostLink:string,score:integer

sequelize model:generate --name languages --attributes userID:integer,postTotal:integer,userScorePY:integer,userScoreJS:integer,userScoreCsharp:integer,userScoreHTML:integer,userScoreCSS:integer,userScoreJAVA:integer 
