// User class for authentication on backend (Express) for Capstone_2

const db = require("../db");
const bcrypt = require("bcrypt");
const ExpressError = require("../expressError");
const saltRounds = 10;
const { BCRYPT_WORK_FACTOR } = require("../config");
const { v4: uuidv4 } = require('uuid');



class User {


//  Register user
// {username, password, email, img_url}
  static async register({username, password, email, img_url}) { 
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hashedPwd = bcrypt.hashSync(password, salt);    
    let id = uuidv4();
    console.log(`^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^${username, password, email, img_url}`)
    const results = await db.query(`INSERT INTO users
    (id, username, password, email, img_url)
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING id, username, password, email, img_url`
    , [id, username, password, email, img_url]);

    return results.rows[0];
  }

//  Authenticate user
// if vaild username & password => returns boolean
  static async authenticate(username, password) { 
    const results = await db.query(`SELECT * FROM users WHERE username=$1`, [username]);
    const user = results.rows[0];

    if (!user) {
      throw new ExpressError(`User with username ${username} not found`, 401);
    }
    // returns true if passwords match
    return user && await bcrypt.compare(password, user.password);
  }

  static async get(username) {
    const userRes = await db.query(
          `SELECT username, password, email, img_url
           FROM users
           WHERE username = $1`,
        [username],
    );

    const user = userRes.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);

    return user;
  }

}


module.exports = User;