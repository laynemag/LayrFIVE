sequelize model:generate --name users --attributes username:string,password:string,imageurl:string,github:string
sequelize model:generate --name roles --attributes roleType:integer
sequelize model:generate --name profile --attributes roleType:integer,postTotal:integer,userScorePY:integer,userScoreJS:integer,userScoreCsharp:integer,userScoreHTML:integer,userScoreCSS:integer,userScoreJAVA:integer 
sequelize model:generate --name submission --attributes username:string,postID:integer,postTitle:string,postDesc:string,languages:string,collaborators:string,gitHub:string,hostLink:string,score:integer
sequelize model:generate --name comment --attributes username:string,comment:string