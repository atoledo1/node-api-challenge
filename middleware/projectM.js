const db = require("../data/helpers/projectModel");

function validateProject(req, res, next) {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({ message: "Missing post data" });
  }
  if (!req.body.name || !req.body.description) {
    return res
      .status(400)
      .json({ message: "Please include description and name" });
  }
  next();
}

module.exports = validateProject;

function validateProjectId(req, res, next) {
  if (!req.params.id) {
    db.get(Number(req.body.project_id))
      .then((project) => {
        if (!project) {
          return res
            .status(400)
            .json({
              message_from_req_body: "Please include a valid id",
            });
        }
        next();
      })
      .catch((err) => console.log(err.message));
  } else {
    db.get(req.params.id)
      .then((project) => {
        if (!project) {
          return res
            .status(400)
            .json({ message: "Please include a valid id" });
        }
        next();
      })
      .catch((err) => console.log(err.message));
  }
}

module.exports = validateProjectId;
