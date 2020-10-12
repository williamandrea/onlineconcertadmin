import firebase from './firebase'

const firestore = firebase.firestore()

const Firestore = {
  getUsers () {
    return new Promise((resolve, reject) => {
      firestore.collection('user').onSnapshot(
        (res) => {
          const ret = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          resolve(ret)
        },
        (err) => {
          reject(err)
        }
      )
    })
  },
  setVerifyUser (id, data) {
    return new Promise((resolve, reject) => {
      firestore.collection('user').doc(id).update(data)
        .then(() => resolve('Berhasil mengupdate data user'))
        .catch((err) => reject('Gagal mengupdate data user', err))
    })
  },
  deleteUser (id) {
    return new Promise((resolve, reject) => {
      firestore.collection('user').doc(id).delete()
        .then(() => resolve('Berhasil meghapus user'))
        .catch((err) => reject('Gagal menghapus user', err))
    })
  },
  getPromotors () {
    return new Promise((resolve, reject) => {
      firestore.collection('promotor').onSnapshot(
        (res) => {
          const ret = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          resolve(ret)
        },
        (err) => {
          reject(err)
        })
    })
  },
  getEvents () {
    return new Promise((resolve, reject) => {
      firestore.collection('acara').onSnapshot(
        (res) => {
          const ret = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          resolve(ret)
        },
        (err) => {
          reject(err)
        }
      )
    })
  },
  deleteEvent (id) {
    return new Promise((resolve, reject) => {
      firestore.collection('acara').doc(id).delete()
        .then(() => resolve('Berhasil meghapus event'))
        .catch((err) => reject('Gagal menghapus event', err))
    })
  },
  getCategories () {
    return new Promise((resolve, reject) => {
      firestore.collection('kategori').onSnapshot(
        (res) => {
          const ret = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          resolve(ret)
        },
        (err) => {
          reject(err)
        }
      )
    })
  },
  deleteCategory (id) {
    return new Promise((resolve, reject) => {
      firestore.collection('kategori').doc(id).delete()
        .then(() => resolve('Berhasil menghapus kategori.'))
        .catch((err) => reject('Gagal menghapus kategori', err))
    })
  },
  setPromotorVerified (id, data) {
    return new Promise((resolve, reject) => {
      firestore.collection('promotor').doc(id).update(data)
        .then(() => resolve('Berhasil mengupdate data promotor'))
        .catch((err) => reject('Gagal mengupdate data promotor', err))
    })
  },
  getTickets () {
    return new Promise((resolve, reject) => {
      firestore.collection('tiket').onSnapshot(
        (res) => {
          const ret = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          resolve(ret)
        },
        (err) => {
          reject(err)
        }
      )
    })
  },
  setVerifyTicket (id, data) {
    return new Promise((resolve, reject) => {
      firestore.collection('tiket').doc(id).update(data)
        .then(() => resolve('Berhasil mengupdate data tiket'))
        .catch((err) => reject('Gagal mengupdate data tiket', err))
    })
  }
}

export default Firestore