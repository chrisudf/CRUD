const express = require ('express')
const app = express()

app.use(express.json())
const posts =[]
let currentId =1

app.get('/posts',(req,res)=>{
    res.json(posts)
})

app.get('/posts/:id',(req,res)=>{
    const {id} =req.params
    const post =posts.find(i => i.id ===Number(id))
    if (post){
        return res.json(post)
    }
    return res.sendStatus(404)
})

app.delete('/posts/:id',(req,res)=>{
    const {id} =req.params
    const post =posts.find(i => i.id ===Number(id))
    if (post){
        posts.splice(Number(post.id)-1,1)
        return res.json(post)       
    }
    return res.sendStatus(404)
})

app.put('/posts/:id',(req,res)=>{
    const {id} =req.params
    const {author,content} = req.body
    const post =posts.find(i => i.id ===Number(id))
    const newPost ={author,content,id:post.id}
    if (post){
        post.author =newPost.author
        post.content=newPost.content
        posts[Number(id)-1] = newPost
        return res.json(newPost)     
    }
    return res.sendStatus(404)
})
app.post('/posts',(req,res)=>{
    const {author,content} = req.body
    const newPost ={author,content,id:currentId++}
    posts.push(newPost)
    res.status(201).json(newPost)
}) 

app.listen(8888,()=>{
    console.log('server listening to port 8888')
})