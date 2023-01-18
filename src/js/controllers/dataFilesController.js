const db = require('../db_config/db_config.js');

const createDataFile = (req, res) => {   
    const { name, description, category_id} = req.body;
    const query = 'INSERT INTO dataset (name, description, category_id) VALUES (?, ?, ?)';
    const date_creation = new Date();

    if (!(name && description && category_id)) {
        return res.status(404);
    }

    db.query('SELECT COUNT(*) AS namesCount FROM dataset WHERE name=?', [name], (err, result) => {
        const count = result[0].namesCount;
        if(count !== 0) {
            const message = `Dataset with name:[${name}] is already existing`;
            return res
                .status(404)
                .json({message});
        }

        db.query(query, [name, description, category_id], (err, result) => {
            if(!err){
                const message = `Dataset with name:[${name}] was added`;
                return res
                    .status(200)
                    .json({message});
            } else {
                return res
                    .status(500)
                    .json(err);
            }
        });
    });
    
};

const getDataFiles = (req, res) => {

    const query = 'SELECT * FROM dataset';
    db.query(query, (err,result) => {
        if(!err){
            const message = 'Dataset were succsesfuly received';
            return res
                .status(200)
                .json({message, result});
        } else {
            return res
                .status(500)
                .json(err);
        }
    });
};

const getDataFile = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM dataset WHERE id=?';

    db.query(query, [id], (err,result) => {
        if (result.length == 0) {
            const message = `No dataset with id:[${id}]`;
            return res
                .status(404)
                .json({message});
        }
        if(!err){
            const message = `Dataset with id:[${id}] was recieved`;
            return res
                .status(200)
                .json({message, result});
        } else {
            return res
                .status(500)
                .json(err);
        }
    });
};

const deleteDataFile = (req, res) => { 
    const id = req.params.id;
    const query = 'DELETE FROM dataset WHERE id=?';

    db.query(query, [id], (err, result) => {
        if(result.affectedRows == 0) {
            const message = `No dataset with id:[${id}]`;
            return res
                .status(404)
                .json({message});
        }
        if(!err){
            const message = `Dataset with id:[${id}] was succsessfuly deleted`;
            return res
                .status(200)
                .json({message});
        } else {
            return res
                .status(500)
                .json(err);
        }
    });
};

const updateDataFile =  (req,res) => {
    const id = req.params.id; 
    const { name, description, category_id } = req.body;
    const query = 'UPDATE dataset SET name=?, description=?, category_id=? where id=?';

    db.query(query, [name, description, category_id, id],(err, result) => {
        if(result.affectedRows == 0) {
            const message = `No dataset with id:[${id}]`;
            return res
                .status(404)
                .json({message});
        }
        if (!err) {
            const message = `Dataset with id:[${id}] succsessfuly updated`;
            return res
                .status(200)
                .json({message});
        } else {
            return res
                .status(500)
                .json(err);
        }
    });
};

module.exports = {createDataFile, getDataFiles, getDataFile, deleteDataFile, updateDataFile};