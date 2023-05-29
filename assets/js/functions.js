import firebase from "./firebase";
import { getDatabase, ref, child, get } from "firebase/database";

// Read Data
const dbRef = ref(getDatabase());
get(child(dbRef, `Employers/${Id}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

console.log("eyyup");
console.log(get);

//! .
//! .
//! .
//! .

// import { getDatabase, ref, onValue } from "firebase/database";

// const db = getDatabase();
// const dbRef = ref(db, "/Employers");

// onValue(
//   dbRef,
//   (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       const childKey = childSnapshot.key;
//       const childData = childSnapshot.val();
//     });
//   },
//   {
//     onlyOnce: true,
//   }
// );

//! .
//! .
//! .
//! .

// export const useFetch = () => {

//     const [isLoading, setIsLoading] = useState()
//     const [contactList, setContactList] = useState()

//     useEffect(() => {
//         const db = getDatabase(firebase);

//         const userRef = ref(db, "users/");
//         onValue(userRef, (snapshot) => {
//             const data = snapshot.val();
//             const userArray = [];

//             for (let id in data) {
//                 userArray.push({id, ...data[id]})
//             }
//             setContactList(userArray)
//             setIsLoading(false)
//         })

//     }, [])
//     return { isLoading, contactList }
// }
