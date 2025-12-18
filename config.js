export const config = {
  instagram: {
    username: 'nickxzaaz', // Your Instagram username
    password: '12312320Pk..', // Your Instagram password
    useMongoSession: true // Set to false to use file-based sessions
  },
  audioMessages: {
    simulateMobile: true, // Simulate mobile device metadata for audio messages
  },
  telegram: {
    botToken: '75803xxx4:AAHxxxxxxxxxxxxxxxxxxxxxxxxx',
    chatId: '-1002287300661',
    adminUserId: '7405203657',
    enabled: true,
  },
  
  mongo: {
    uri: 'mongodb+srv://xxxx:xxxxxxx@cluster0.wh25x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    dbName: 'hyper_instza',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  
  modules: {

  },
  
  admin: {
    users: ['ixnickx02', 'iarshman'] // Admin usernames
  },
  
  app: {
    logLevel: 'info',
    environment: 'development'
  }
};
