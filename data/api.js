const axios = require('axios');
const url = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736`;
// const url = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}`;

// sorting function on the images by id
const gethitsFirst = async() => {
    const data = await axios.get(url).then(res => res.data);
    data.hits.sort((a, b) => a.id - b.id);
    return {hits: data.hits.slice(0, 9), maxPages: Math.ceil(data.hits.length / 9)};
}

// implement pagination
const gethitsByPage = async(page) => {
    const data = await axios.get(url).then(res => res.data);
    return {hits: data.hits.slice(9 * (page -1), page * 9), maxPages: Math.ceil(data.hits.length / 9)};
}

// type replace the end-point CATEGORY
const gethitsByCategory = async(page, category) => {
    const data = await axios.get(`${url}&q=${category}`).then(res => res.data);
    return {hits: data.hits.slice(9 * (page -1), page * 9), maxPages: Math.ceil(data.hits.length / 9)};
}

module.exports = {
    gethitsFirst,
    gethitsByPage,
    gethitsByCategory
}