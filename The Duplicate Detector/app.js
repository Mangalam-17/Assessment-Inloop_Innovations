const usernames = ["admin", "user1", "guest", "admin", "staff"];

for (let i = 0; i < usernames.length; i++) {
  for (let j = 0; j < usernames.length; j++) {
    if (i !== j && usernames[i] === usernames[j]) {
      console.log(`Duplicate found: ${usernames[i]}`);
      break;
    }
  }
}
