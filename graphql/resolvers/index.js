const usersResolvers = require("./user");
const postResolvers = require("./post");
const commentResolvers = require("./comment");

module.exports = [usersResolvers, postResolvers, commentResolvers];
