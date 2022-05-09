const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


app.get('/', (req, res) => {
  res.json({message: 'alive'});
});
//regresar todos los commanders
app.get('/commanders', async (req, res) => {
    const commanders = await prisma.commander.findMany({});
    res.json(commanders);
})
app.get('/commanders/:id', async (req, res) => {
  const id=req.params.id;
  const commander = await prisma.commander.findUnique({where: {id: parseInt(id)}});
  res.json(commander);
});
app.post('/commanders', async (req, res) => {
  const commander={
      name: req.body.name,
      username: req.body.username,
      mainstack: req.body.mainstack
  };
  const message = "Commander created";
  await prisma.commander.create({data: commander});
  res.json({message});
});

app.put('/commanders/:id', async (req, res) => {
  const id=parseInt(req.params.id);
  await prisma.commander.update({
      where: {
              id:id
      },
      data:{  
              name:req.body.name,
              username:req.body.username,
              mainstack: req.body.mainstack
            
      }
  })
  return res.json({message: "Commander updated"});
});

app.delete('/commanders/:id', async (req, res) => {
  const id=parseInt(req.params.id);
  await prisma.commander.delete({where: {id:id}});
  return res.json({message: "Commander deleted"});
})

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});