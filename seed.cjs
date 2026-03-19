const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyBxvvl31CUkLkSL4a4pGZwuaaGLAlDvMA8",
  authDomain: "quiz-arena-397e1.firebaseapp.com",
  projectId: "quiz-arena-397e1",
  storageBucket: "quiz-arena-397e1.firebasestorage.app",
  messagingSenderId: "139006096690",
  appId: "1:139006096690:web:0ded8df577eed863da132b",
  databaseURL: "https://quiz-arena-397e1-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const initialData = {
  quizzes: {
    'q1': {
      id: 'q1',
      title: 'Reto Marvel',
      category: 'PELÍCULAS',
      timeLimit: 15,
      questionsCount: 15,
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400'
    },
    'q2': {
      id: 'q2',
      title: 'DC Universe',
      category: 'CÓMICS',
      timeLimit: 15,
      questionsCount: 20,
      image: 'https://images.unsplash.com/photo-1620336655055-088d06e766e3?auto=format&fit=crop&q=80&w=400'
    }
  },
  users: {
    'admin': {
      username: 'admin',
      password: '123',
      role: 'admin'
    },
    'alex': {
      username: 'Alex',
      password: '123',
      role: 'participant',
      assignedQuizzes: ['q1', 'q2'],
      stats: { xp: 8450, level: 12 }
    }
  }
};

async function seed() {
  console.log('Sembrando datos начаles...');
  for (const key in initialData) {
    await set(ref(db, key), initialData[key]);
  }
  console.log('¡BBDD inicializada!');
  process.exit(0);
}

seed();
