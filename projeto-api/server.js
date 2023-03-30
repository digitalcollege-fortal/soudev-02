const express = require('express');
const categoryRoutes = require("./resources/category/routes");

const app = express();

app.use(categoryRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
