const Suggestion = require("../models/suggestion");

const create = async (req, res) => {
    try {
        const {user_name, content} = req.body;
        const newSuggestion = await Suggestion.create(user_name, content);
        res.json(newSuggestion);
    } catch (error) {
        console.log(error);
    }
}

const createTwitch = async (req, res) => {
    try {
        const {user_name, content} = req.params;
        await Suggestion.create(user_name, content);
        res.send("Suggestion logged!");
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (req, res) => {
    try {
        const {id} = req.params;
        const obj = await Suggestion.getOne(id);
        res.json((obj) ? obj : "No suggestion exists with that ID");
    } catch (error) {
        console.log(error);
    }
}

const getAll = async (req, res) => {
    try {
        const allSuggestions = await Suggestion.getAll();
        res.json(allSuggestions);
    } catch (error) {
        console.log(error);
    }
}

const update = async (req, res) => {
    try {
        const {id} = req.params;
        const {user_name, content, ts} = req.body;
        await Suggestion.update(id, user_name, content, ts);
        res.json("Suggestion was updated!");
    } catch (error) {
        console.log(error);
    }
}

const deleteOne = async (req, res) => {
    try {
        const {id} = req.params;
        await Suggestion.deleteOne(id);
        res.json("Suggestion was deleted!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    create,
    createTwitch,
    getOne,
    getAll,
    update,
    deleteOne
};