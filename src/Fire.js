import firebase from "firebase";

const firebaseConfig = {
    // À compléter avec votre SDK Firebase (Cf. diapos 14 et 15)
    apiKey: "AIzaSyDPPuVtdYF3Tip8kDIOThrXfjDQSPRtphc",
    authDomain: "fougereapp.firebaseapp.com",
    projectId: "fougereapp",
    storageBucket: "fougereapp.appspot.com",
    messagingSenderId: "1072436043075",
    appId: "1:1072436043075:web:288511ee8a7061a420e3f6"
}

export default class Fire {
    constructor(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null);
            } else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error);
                });
            }
        })
    }

    get ref() {
        return firebase.firestore().collection("lists");
    }

    getLists(callback) {
        let ref = this.ref.orderBy("name");
        this.unsubscribe = ref.onSnapshot(snapshot => {
            let lists = [];
            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() });
            });
            callback(lists);
        }, function(error) {
            callback(error);
        });
    }

    addList(list) {
        this.ref.add(list);
    }

    deleteList(list) {
        this.ref.doc(list.id).delete();
    }

    updateList(list, id) {
        this.ref.doc(id).update(list);
    }

    detach() {
        this.unsubscribe();
    }
}