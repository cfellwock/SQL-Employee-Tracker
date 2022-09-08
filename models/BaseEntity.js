const connection = require("../config/dbConfig")

class BaseEntity {
    constructor(connection) {
        this.connection = connection;
    }
    findAll(table) {
        return this.connection.promise().query(
            `SELECT *
            FROM ??`, [table]);
    }

    findByID(id) {
        return this.connection.query(
            `SELECT * 
            FROM ?? 
            WHERE ID = ?`, [table, id]);
    }

    create(obj) {
        return this.connection.query(
            `INSERT INTO ??
            WHERE ID = ?`, [table, id]);
    }
    
    updateByID(id) {
        return this.connection.query(`UPDATE *
        FROM ??
        WHERE ID = ?`, [table, id]);
    }

    deleteByID(id) {
        return this.connection.query(
            `DELETE FROM ?? 
            WHERE ID = ?`, [table, id]);
    }
}

module.exports = new BaseEntity(connection)