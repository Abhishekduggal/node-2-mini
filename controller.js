const getPlanes = (req, res, next) => {
  const db = req.app.get("db");
  db.get_planes()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const getOnePlane = (req, res, next) => {
  const db = req.app.get("db");
  db.get_one_plane([req.query.passengerCount])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const addPlane = (req, res, next) => {
  const db = req.app.get("db");
  db.add_plane([req.body.planeType, req.body.passengerCount])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  getPlanes,
  getOnePlane,
  addPlane
};

// module.exports = {
//     get_planes: getPlanes
// };

// Front End Request
// axios.post('/api/planes', {planeType: 'Boeing', passengerCount: 400});
// axios.get('/api/plane?passengerCount=400&planeType=Boeing');
