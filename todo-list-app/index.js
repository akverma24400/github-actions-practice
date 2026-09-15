import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

let durationId = 2;
let items = [];
let listTitle;

async function checkDuartion() {
  const result = await db.query("SELECT * FROM time_table ORDER BY id ASC");
  result.rows.forEach((item) => {
    if (item.id === durationId) {
      listTitle = item.duration;
    }
  });
}

async function checkDuartionId() {
  const result = await db.query("SELECT * FROM time_table ORDER BY id ASC");
  result.rows.forEach((item) => {
    if (item.duration === listTitle) {
      durationId = item.id;
    }
  });
}
app.get("/", async (req, res) => {
  try {
    await checkDuartion();
    const result = await db.query(
      `SELECT items.id, title, duration FROM items INNER JOIN time_table ON time_id = time_table.id WHERE duration =$1 ORDER BY items.id ASC`,
      [listTitle]
    );
    items = result.rows;

    res.render("index.ejs", {
      listTitle,
      listItems: items,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/change", async(req, res)=>{
  const title = parseInt(req.body.title);
  durationId = title;
  res.redirect("/");
});

app.post("/add", async (req, res) => {
  try {
    await checkDuartionId();
    const item = req.body.newItem;
    await db.query("INSERT INTO items (title, time_id) VALUES($1, $2)", [item, durationId]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/edit", async (req, res) => {
  try {
    const itemId = req.body.updatedItemId;
    const itemTitle = req.body.updatedItemTitle;

    await db.query(`UPDATE items SET title = $1 WHERE id = $2`, [itemTitle, itemId]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/delete", async (req, res) => {
  try {
    const itemId = req.body.deleteItemId;
    await db.query("DELETE FROM items WHERE id = $1", [itemId]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
