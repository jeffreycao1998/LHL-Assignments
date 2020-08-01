const storeDataInClient = (client, data) => {   // Data = 'name: Jeff'
  const index = data.indexOf(': ');
  const typeOfData = data.slice(0, index);    // typeOfData = 'name'
  const dataContent = data.slice(index + 2);    // dataContent = 'Jeff'

  client.data[typeOfData] = dataContent;
}

const handleData = (client, data) => {
  if (data.includes('name: ')) {
    storeDataInClient(client, data)
  }
};

module.exports = handleData;