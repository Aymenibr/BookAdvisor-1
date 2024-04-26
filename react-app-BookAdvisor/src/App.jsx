// import firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore';
import BookShelf from './HomePage-Components/BookShelf';
import Discover from './HomePage-Components/Discover';
import Navbar from './HomePage-Components/Navbar';
//import { Footer } from 'antd/es/layout/layout';
// import CustomFooter from './HomePage-Components/Footer';
import Home from './pages/Home.jsx';
import SearchP from './pages/SearchP.jsx';
import SignUp from './pages/SignUp.jsx';
import profile from './pages/profile.jsx';
import add_book from './pages/add_book.jsx';

// // Initialize Firebas
// const firebaseConfig = {

//   apiKey: "AIzaSyC6LgETW93tfyJ26Q9e0UbMsu-OgSgWa40",
//   authDomain: "bookadvice-a2fe0.firebaseapp.com",
//   projectId: "bookadvice-a2fe0",
//   storageBucket: "bookadvice-a2fe0.appspot.com",
//   messagingSenderId: "105964974950",
//   appId: "1:105964974950:web:7fa191f6ad719bc2f34ea7"

// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get a Firestore instance
// const db = getFirestore(app);

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const snapshot = await db.collection('yourCollection').get();
//       const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setData(fetchedData);
//     };
//     fetchData();
//   }, []);

//   return (

//     <div className='App'>
//       <h1>Data from Firestore</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//           <Navbar/>
//           <Discover/>
//           <div className="content">
//           <BookShelf/>
//           </div>
//         </div>
//   );
// };

// export default App;


const App = () => {
  console.log(window.location.pathname)
  let Page
  switch (window.location.pathname) {
    case "/":
      Page = Home
      break
    case "/Search":
      Page = SearchP
      break
    case "/SignUp":
      Page = SignUp
      break
    case "/profile":
      Page = profile
      break
    case "/add_book":
      Page = add_book
      break
  }
  if (Page === SignUp) {
    return (<Page />)
  }
  else {
    return (

      <div className='App'>
        <Navbar />
        <Page />
      </div>
    );
  }
}

export default App;

