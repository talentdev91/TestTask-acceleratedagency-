/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB
 Source Server Type    : MongoDB
 Source Server Version : 40406
 Source Host           : 127.0.0.1:27017
 Source Schema         : testdb

 Target Server Type    : MongoDB
 Target Server Version : 40406
 File Encoding         : 65001

 Date: 10/06/2023 09:09:11
*/


// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("6483e236200222b99731934b"),
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiJwYXNzd29yZDEyMyIsImlhdCI6MTY4NjM2NDcyNn0.rwN9FmRw_r7gcVY3w-IeQPai3XDFnkM7NRCa5G29Eqk"
} ]);
