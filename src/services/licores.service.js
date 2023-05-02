import firebase from "../firebase";

const db = firebase.collection("/licores");

class LicorDataService {
  getAll() {
    return db;
  }

  create(licor) {
    return db.add(licor);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new LicorDataService();