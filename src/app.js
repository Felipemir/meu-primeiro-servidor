import express from 'express'

const app = express()
app.use(express.json())

const jogos = [
    {id : 1,  jogo : "tomb raider"},
    {id : 2,  jogo : "red dead 2"},
    {id : 3,  jogo : "halo"},
    {id : 4,  jogo : "forza horizon"},
    {id : 5,  jogo : "starfield"},
    {id : 6,  jogo : "god of war"},
]

function jogosPorId (id) {
    return jogos.filter(jogoSelecionado => jogoSelecionado.id ==  id)
}

function buscarJogosId (id) {
    return jogos.findIndex( jogoSelecionado => jogoSelecionado.id == id)
}

// criar rota padrão ou raiz
app.get('/', (req,res) => {
    res.send(" hello world ! ")
})

app.get('/jogos', (req,res) => {
    res.status(200).send(jogos)
})

app.get('/jogos/:id', (req,res) => {
    res.json(jogosPorId(req.params.id))
})

app.post('/jogos', (req,res) => {
    jogos.push(req.body)
    res.status(201).send("requisição criada com sucesso")
})

// delete o item da lista com o ID
app.delete('/jogos/:id', (req,res) => {
    let index = buscarJogosId(req.params.id)
    jogos.splice(index, 1)
    res.send(`seleção com id ${req.params.id} excluida com sucesso`)
})

// autaliza a lista no ID
app.put('/jogos/:id', (req,res) => {
    let index = buscarJogosId(req.params.id)
    jogos[index].jogo = req.body.jogo
    res.json(jogos)
})


export default app
