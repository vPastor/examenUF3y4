db.createCollection("cars", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id", "brand", "model", "price"],
      properties: {
        id: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        brand: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        model: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        price: {
          bsonType: "float",
          description: "must be a float and is required",
        },
      },
    },
  },
});

db.createCollection("clients", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id", "name", "surname"],
      properties: {
        id: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        surname: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
});

db.createCollection("rents", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["car", "client", "days"],
      properties: {
        car: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        client: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        days: {
          bsonType: "string",
          description: "must be a string and is required",
        }
      },
    },
  },
});

db.cars.insert({ id: "1", brand: "Mercedes", model: "XU", price: "10000,20" });
db.cars.insert({ id: "2", brand: "BMW", model: "Turbo", price: "110000,20" });
db.cars.insert({
  id: "3",
  brand: "Mercedes",
  model: "Super",
  price: "90000,20",
});
db.clients.insert({ id: "1", name: "Alfredo", surname: "Lopez" });
db.clients.insert({ id: "2", name: "Javier", surname: "Sanchez" });
db.rents.insert({
  car: "/api/car/1",
  client: "/api/client/2",
  days: "10",
  price: "90000,20",
});
