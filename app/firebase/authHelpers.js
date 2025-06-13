import { auth, db } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check if user document exists in Firestore
        const userDocRef = doc(db, "userSettings", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
            // Create user doc with default values
            await setDoc(userDocRef, {
                name: user.displayName || "",
                email: user.email,
                dailyGoal: 2000,
                buttonAmounts: [100, 200, 500],
                consumed: 0,
            });
        }

        return user;
    } catch (error) {
        console.error("Google Sign-In Error:", error);
        throw error;
    }
};