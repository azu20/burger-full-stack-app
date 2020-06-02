// Import MySQL connection.
const connection = require("./connection.js");

const printQuestionMarks = num => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = ob => {
    const arr = [];


    for (const key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {
    all: async(tableInput) => {
        const queryString = `SELECT * FROM ${tableInput}`;

        const result = await connection.query(queryString);

        return result;
    },

    create: async(table, cols, vals) => {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

        console.log(queryString);

        const result = await connection.query(queryString, vals);

        return result;
    },

    update: async(table, objColVals, condition) => {
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

        console.log(queryString);
        const result = await connection.query(queryString);

        return result;
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;