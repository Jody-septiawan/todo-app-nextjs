import nextConnect from 'next-connect';

const db = require('../../../db/connection');

const Todo = nextConnect()
  .get(async (req, res) => {
    try {
      const { id } = req.query;

      db.connect((err, client, done) => {
        if (err) throw err;
        const query = `SELECT * FROM todos WHERE id = ${id}`;
        client.query(query, (err, result) => {
          if (err) throw err;
          let data = result.rows[0];

          res.json({
            data,
          });
        });
        done();
      });
    } catch (error) {
      console.log(error);
      res.send({
        message: 'Server Error',
        error,
      });
    }
  })
  .patch(async (req, res) => {
    const { isDone } = req.body;
    const { id } = req.query;

    db.connect((err, client, done) => {
      if (err) throw err;
      const query = `UPDATE todos SET "isDone"=${isDone} WHERE id=${id}`;
      client.query(query, (err, result) => {
        if (err) throw err;
        res.json({
          status: 'success',
        });
      });
      done();
    });
  });

export default Todo;
