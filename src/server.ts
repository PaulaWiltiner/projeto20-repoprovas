import app from './app';

const PORT: number = Number(process.env.PORT) || 4003

app.listen(PORT, () => {
  console.log("server running ", PORT);
});