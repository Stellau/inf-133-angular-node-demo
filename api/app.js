"use strict";

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
const LOCALHOST = 8000;
const FILE_ERROR = 500;
const NUM_PICS = 10;
const DOG_API = "https://dog.ceo/api";
const SERVER_ERROR = "Something went wrong on the server.";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors("http://localhost:4200"));

app.get("/getDogPics/:breed", async (req, res) => {
  const breed = req.params.breed.toLowerCase();
  const url = DOG_API + "/breed/" + breed + "/images/random/" + NUM_PICS;
  try {
    let response = await fetch(url);
    response = checkStatus(response);
    const result = await response.json();
    res.json(result);
  } catch (err) {
    // send specific customized error code later
    handleError(res);
  }
});

function checkStatus(res) {
  if (!res.ok) {
    throw Error("Error in request: " + res.statusText);
  } else {
    return res;
  }
}

function handleError(res) {
  res.type("text");
  res.status(FILE_ERROR).send(SERVER_ERROR);
}

const PORT = process.env.PORT || LOCALHOST;
app.listen(PORT);
