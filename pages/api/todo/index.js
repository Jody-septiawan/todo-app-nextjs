import nextConnect from 'next-connect';

const db = require('../../../db/connection');

const Todo = nextConnect()
  .get(async (req, res) => {
    try {
      db.connect((err, client, done) => {
        if (err) throw err;
        const query = 'SELECT * FROM todos';
        client.query(query, (err, result) => {
          if (err) throw err;
          let data = result.rows;

          res.send({
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
  .post(async (req, res) => {
    const { title } = req.body;

    db.connect((err, client, done) => {
      if (err) throw err;
      const query = `INSERT INTO todos (title,"isDone") VALUES('${title}',false)`;
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
