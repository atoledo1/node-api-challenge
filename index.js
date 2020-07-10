const express = require("express");
const projectRouter = require("./routers/project");
const actionsRouter = require("./routers/actions");

const server = express();
server.use(express.json());

server.use("/api/projects/actions", actionsRouter);
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send({ message: "Api" });
});

server.listen(9000, () => {
  console.log(
    "-------------------------------------------\nserver is running on http://localhost:9000\n------------------------------------------- "
  );
});
