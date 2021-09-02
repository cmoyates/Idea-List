const pool = require("../db");

class Suggestion{
    suggestion_id;
    user_name;
    content;
    ts;

    constructor(id, user_name, content, ts) {
        this.suggestion_id = id;
        this.user_name = user_name;
        this.content = content;
        this.ts = ts;
    }

    static async create(user_name, content) {
        const newSuggestion = await pool.query(
            "INSERT INTO suggestions (user_name, content, ts) VALUES($1, $2, current_timestamp) RETURNING *",
            [user_name, content]
        );
        if (globalThis.io) {
            io.emit('suggestionAdded');
            console.log("Woo!")
        }
        else {
            console.log("Nope");
        }
        return newSuggestion.rows[0];
    }

    static async getOne(id) {
        const suggestion = await pool.query(
            "SELECT suggestion_id, user_name, content, ts FROM suggestions WHERE suggestion_id = $2",
            [id]
        );
        return suggestion.rows[0];
    }

    static async getAll() {
        const allSuggestions = await pool.query(
            "SELECT suggestion_id, user_name, content, ts FROM suggestions ORDER BY suggestion_id DESC"
        );
        return allSuggestions.rows
    }

    static async update(id, user_name, content, ts) {
        await pool.query(
            "UPDATE suggestions SET user_name = $1, content = $2, ts = $3 WHERE suggestion_id = $4",
            [user_name, content, ts, id]
        );
    }

    static async deleteOne(id) {
        await pool.query(
            "DELETE FROM suggestions WHERE suggestion_id = $1",
            [id]
        );
    }
}

module.exports = Suggestion;