const nameInverter = name => {
  if (name === undefined) {
    throw new Error('Error');
  }
  const Name = name.trim();
  if (Name === '') { // 0 words given
    return '';
  }
  if (!Name.includes(' ')) { // 1 word given
    if (Name.includes('.')) {
      return '';
    }
    return Name;
  }
  if (Name.split(' ').length === 2) { // 2 words given
    const words = Name.split(' ');
    if (words[0].includes('.')) {
      return `${words[0]} ${words[1]}`
    }
    return `${words[1]}, ${words[0]}`;
  }
  if (Name.split(' ').length === 3) { // 3 words given
    const words = Name.split(' ');
    return `${words[0]} ${words[2]}, ${words[1]}`
  }
}

module.exports = nameInverter;