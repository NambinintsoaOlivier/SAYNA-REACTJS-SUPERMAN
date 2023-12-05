// import { createContext, useContext, useEffect, useState } from "react"; // pour avoir acces à la creation des contexts et de l'utiliser
// import { auth } from "../config-firebase"; // notre configuration
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth"; // pour creer facilement un User par email/password

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // cree un User
//   const createUser = async (userEmail, userPassword, nomUser, prenomUser) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         userEmail,
//         userPassword,
//         nomUser,
//         prenomUser
//       );
//       const user = userCredential.user;

//       // Vous pouvez effectuer d'autres opérations ici après la création de l'utilisateur.
//       await updateProfile(user, {
//         displayName: `${nomUser} ${prenomUser}`,
//       });
//       return user;
//     } catch (error) {
//       // Gérer les erreurs lors de la création de l'utilisateur ici
//       console.error("Erreur lors de la création de l'utilisateur", error);
//       throw error;
//     }
//   };

//   //pour avoir le user
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Utilisateur actuel :", currentUser);
//     });
//     return unsubscribe;
//   }, []);

//   // pour deconnecter
//   const logout = () => {
//     signOut(auth);
//   };

//   // pour connecter
//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const value = {
//     createUser,
//     user,
//     logout,
//     login,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
