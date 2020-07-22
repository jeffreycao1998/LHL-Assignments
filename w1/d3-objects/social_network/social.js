const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const findFollowers = (data) => {
  const followersData = {};
  // initialize followersData to be able to add to followers count;
  for (let person in data) {
    if (!followersData.hasOwnProperty(person)) {
      followersData[person] = {
        name: data[person].name,
        age: data[person].age,
        followers: []
      }
    }
  }

  for (let person in data) {
    for (let follower of data[person].follows) {
      followersData[follower].followers.push(person);
    }
  }
  return followersData;
};

const biggestFollower = (data) => {
  // returns name of indiviual who follows the most people
  let highest = data.f01;
  for (let person in data) {
    if (data[person].follows.length > highest.follows.length) {
      highest = data[person];
    }
  }

  return highest.name;
};

const mostPopular = (data) => {
  // returns name of most followed individual
  const followersObject = findFollowers(data);
  let highest = [followersObject.f01];
  for (let person in followersObject) {
    if (followersObject[person].followers.length === highest[0].followers.length && !highest.includes(person)) {
      highest.push(followersObject[person]);
    } else if (followersObject[person].followers.length > highest[0].followers.length) {
      highest = [followersObject[person]];
    }
  }
  return highest.map( person => person.name);
};

const printAll = (data) => {
  // outputs list of everyone and for each of them the names
  // of who they follow and who follow them
  const followersObject = findFollowers(data);

  for (let person in data) {
    data[person] = {
      ...data[person],
      followers: followersObject[person].followers
    };
  }
  
  return data;
};

const unrequitedFollowers = (data) => {
  // returns list of names for those who follow someone that doesn't follow them back
  const completeData = printAll(data);
  const unrequited = [];

  for (let person in completeData) {
    for (let following of completeData[person].follows) {
      if (!completeData[person].followers.includes(following) && !unrequited.includes(person)) {
        unrequited.push(person);
      }
    }
  }
  return unrequited;
};

const mostFollowersOver30 = (data) => {
  // returns person with most followers over the age of 30
  const followersData = findFollowers(data);
  let highest = [followersData.f01];
  
  for (let person in followersData) {
    followersData[person].followers = followersData[person].followers.filter( person => data[person].age > 30);
  }

  for (let person in followersData) {
    const followersLength = followersData[person].followers.length;
    const highestLength = highest[0].followers.length;

    if (followersLength === highestLength && !highest.includes(person)) {
      highest.push(followersData[person]);
    } 
    else if (followersLength > highestLength) {
      highest = [followersData[person]];
    }
  }
  return highest.map( person => person.name)
};

const mostFollowsOver30 = (data) => {
  // returns person following the most people over age of 30
  let highest = [data.f01];
  for (let person in data) {
    data[person].follows = data[person].follows.filter( name => data[name].age > 30);
  };
  
  for (let person in data) {
    if (data[person].follows.length === highest[0].follows.length && !highest.includes(person)) {
      highest.push(data[person]);
    } else if (data[person].follows.length > highest[0].follows.length) {
      highest = [data[person]];
    }
  }
  return highest.map( person => person.name);
};

const socialReach = (data) => {
  // return list of everyone and their reach
  // reach = sum of # of followers and # of followers of followers
  const completeData = printAll(data);

  for (let person in completeData) {
    let followersFollowers = 0
    completeData[person].followers.forEach( follower => followersFollowers += completeData[follower].followers.length );

    completeData[person] = {
      ...completeData[person],
      reach: completeData[person].followers.length + followersFollowers
    }
  }
  return completeData;
};