export default function Welcome(app) {
  const sayWelcome = (req, res) => {
    res.send("Welcome to Lab 5!");
  };
  app.get("/lab5/welcome", sayWelcome);
}
