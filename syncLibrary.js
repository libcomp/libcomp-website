const { default: api } = require('zotero-api-client');
const fs = require ('fs');

(async () => {
  const allCollections = await getAllPapersFromZotero('collections');
  // console.log(allCollections);
  // const collections = allCollections.map(i => ({[i.data.key]: i.data.name}));
  const collections = allCollections.reduce((acc, i) => {
    acc[i.data.key] = i.data.name;
    return acc;
  }, {});
  console.log(collections);
  const allPapers = await getAllPapersFromZotero('items');
  // loop through all papers:
  const papers = [];
  for (paper of allPapers) {
    const paperObj = {
      title: paper.data.title,
      tags: paper.data.collections.map(i => collections[i]).filter(Boolean),
    }
    papers.push(paperObj);
    console.log(paperObj.title);
    console.log(JSON.stringify(paperObj.tags));
  }
  let data = "# Papers\n\n";
  for (paper of papers) {
    data += `#### ${paper.title}\n`;
    data += `Tags: ${JSON.stringify(paper.tags)}\n\n`;
  }

  fs.writeFile('src/library/index.md', data, (err) => {
    if (err) throw err;
  }); 
  // console.log(papers);


  // console.log(allPapers);
  // const papers = allPapers.map(i => ({[i.data.key]: i.data.title}));
  // console.log(allPapers.map(i => i.data.title));
  // console.log(allPapers.map(i => i.data.collections));
})()


async function getAllPapersFromZotero(setType) {
  const baseURL = `https://api.zotero.org/groups/5172124/${setType}/top`;
  let result = [];
  let start = 0;
  const limit = 100; // Adjust the limit as needed, up to 100
  
  while (true) {
    const url = `${baseURL}?start=${start}&limit=${limit}&format=json`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      result = result.concat(data);
  
      if (data.length < limit) {
        break; // Break the loop if we have retrieved all items
      }
      start += limit;
    } catch (error) {
      console.error('Error fetching data from Zotero:', error);
      break;
    }
  }
  return result
}
