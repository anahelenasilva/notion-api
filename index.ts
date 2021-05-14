require('dotenv').config();
const { Client } = require('@notionhq/client');

const token = process.env.NOTION_TOKEN;

// Initializing a client
const notion = new Client({
    auth: token,
});

(async () => {
    const response = await notion.databases.list();
    console.log(response);
})();