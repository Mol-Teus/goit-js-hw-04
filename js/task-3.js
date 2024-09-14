const profile = {
    username: "Jacob",
    playTime: 300,
  
     
    changeUsername(newName) {
      this.username = newName;
    },
  
   
    updatePlayTime(hours) {
      this.playTime += hours;
    },
  
    
    getInfo() {
      return `${this.username} has ${this.playTime} active hours!`;
    }
  };
  
  // Приклади використання методів 
  profile.changeUsername("Bob");
  profile.updatePlayTime(50);
  console.log(profile.getInfo()); // "Bob has 350 active hours!"

  console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"