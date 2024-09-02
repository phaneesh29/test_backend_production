require("dotenv").config()
const express = require('express')
const app = express()

const githubData = {
    "login": "phaneesh29",
    "id": 172787242,
    "node_id": "U_kgDOCkyGKg",
    "avatar_url": "https://avatars.githubusercontent.com/u/172787242?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/phaneesh29",
    "html_url": "https://github.com/phaneesh29",
    "followers_url": "https://api.github.com/users/phaneesh29/followers",
    "following_url": "https://api.github.com/users/phaneesh29/following{/other_user}",
    "gists_url": "https://api.github.com/users/phaneesh29/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/phaneesh29/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/phaneesh29/subscriptions",
    "organizations_url": "https://api.github.com/users/phaneesh29/orgs",
    "repos_url": "https://api.github.com/users/phaneesh29/repos",
    "events_url": "https://api.github.com/users/phaneesh29/events{/privacy}",
    "received_events_url": "https://api.github.com/users/phaneesh29/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sreephaneesha kanugovi",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-06-14T11:18:52Z",
    "updated_at": "2024-09-02T11:49:52Z"
  }

const port = process.env.PORT

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/twitter",(req,res)=>{
    res.send(`https://x.com`)
})

app.get("/login",(req,res)=>{
    res.send("<h1>Login Now</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Youtube Now</h2>")
})

app.get("/github",(req,res)=>{
    res.json(githubData)
})

app.listen(port,()=>{
    console.log(`Example app listeing on port ${port}`)
})

