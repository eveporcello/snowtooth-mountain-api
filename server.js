const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Lift data from the provided JSON
const liftsData = [
  {
    id: "astra-express",
    name: "Astra Express",
    status: "CLOSED",
    capacity: 3,
    night: false,
    elevationGain: 899,
    trailAccess: [
      {
        id: "blue-bird",
        name: "Blue Bird",
        status: "OPEN",
        difficulty: "intermediate",
        groomed: true,
        trees: false,
        night: false
      },
      {
        id: "ducks-revenge",
        name: "Duck's Revenge",
        status: "OPEN",
        difficulty: "intermediate",
        groomed: false,
        trees: true,
        night: false
      },
      {
        id: "ice-streak",
        name: "Ice Streak",
        status: "OPEN",
        difficulty: "intermediate",
        groomed: false,
        trees: false,
        night: false
      },
      {
        id: "parachute",
        name: "Parachute",
        status: "OPEN",
        difficulty: "intermediate",
        groomed: false,
        trees: false,
        night: false
      },
      {
        id: "goosebumps",
        name: "Goosebumps",
        status: "OPEN",
        difficulty: "advanced",
        groomed: false,
        trees: true,
        night: false
      }
    ]
  },
  {
    id: "jazz-cat",
    name: "Jazz Cat",
    status: "OPEN",
    capacity: 2,
    night: false,
    elevationGain: 1230,
    trailAccess: [
      {
        id: "goosebumps",
        name: "Goosebumps",
        status: "OPEN",
        difficulty: "advanced",
        groomed: false,
        trees: true,
        night: false
      },
      {
        id: "river-run",
        name: "River Run",
        status: "OPEN",
        difficulty: "intermediate",
        groomed: false,
        trees: true,
        night: false
      },
      {
        id: "ducks-revenge",
        name: "Duck's Revenge",
        status: "OPEN",
        difficulty: "intermediate",
        groomed: false,
        trees: true,
        night: false
      },
      {
        id: "cape-cod",
        name: "Cape Cod",
        status: "CLOSED",
        difficulty: "intermediate",
        groomed: false,
        trees: true,
        night: false
      },
      {
        id: "grandma",
        name: "Grandma",
        status: "OPEN",
        difficulty: "expert",
        groomed: false,
        trees: true,
        night: false
      },
      {
        id: "wild-child",
        name: "Wild Child",
        status: "CLOSED",
        difficulty: "advanced",
        groomed: false,
        trees: false,
        night: false
      },
      {
        id: "old-witch",
        name: "Old Witch",
        status: "OPEN",
        difficulty: "expert",
        groomed: false,
        trees: true,
        night: false
      }
    ]
  }
];

// Hotel data
const hotelsData = [
  {
    id: "01",
    name: "Grand Summit",
    capacity: 200,
    pool: true,
    spa: false,
    avgCost: 1000,
    skiIn: true
  },
  {
    id: "02",
    name: "Universal Hotel",
    capacity: 1000,
    pool: true,
    spa: true,
    avgCost: 300,
    skiIn: false
  },
  {
    id: "03",
    name: "Chalet Lodge",
    capacity: 100,
    pool: false,
    spa: false,
    avgCost: 250,
    skiIn: false
  },
  {
    id: "04",
    name: "Harrison Hostel",
    capacity: 500,
    pool: false,
    spa: false,
    avgCost: 50,
    skiIn: true
  },
  {
    id: "05",
    name: "Majestic Peak Lodge",
    capacity: 300,
    pool: true,
    spa: true,
    avgCost: 1000,
    skiIn: true
  }
];

// Routes

app.get("/", (req, res) => {
  res.send("Welcome to the Snowtooth Mountain API");
});

app.get("/lifts", (req, res) => {
  res.json(liftsData);
});

app.get("/lifts/:id", (req, res) => {
  const lift = liftsData.find(
    (lift) => lift.id === req.params.id
  );
  if (!lift) {
    return res
      .status(404)
      .json({ error: "Lift not found" });
  }
  res.json(lift);
});

app.get("/hotels", (req, res) => {
  res.json(hotelsData);
});

app.get("/hotels/:id", (req, res) => {
  const hotel = hotelsData.find(
    (hotel) => hotel.id === req.params.id
  );
  if (!hotel) {
    return res
      .status(404)
      .json({ error: "Hotel not found" });
  }
  res.json(hotel);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
