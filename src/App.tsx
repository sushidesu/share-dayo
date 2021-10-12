import { useState } from 'react'
import styles from './App.module.css'
import { database } from "./plugins/firebase"
import { ref, get } from "firebase/database"

function App() {
  const [key, setKey] = useState("")

  const search = async () => {
    // 検索
    const roomRef = ref(database, `room/${key}`)
    const snap = await get(roomRef)
    if (snap.exists()) {
      // 結果を表示
      window.alert(snap.val())
    } else {
      window.alert(`ありません！！`)
    }
  }

  return (
    <div>
      <h1 className={styles.root}>share dayo</h1>
      <div>
        <input onBlur={(e) => {
          setKey(e.target.value)
        }} />
        <button onClick={search}>OK</button>
      </div>
    </div>
  )
}

export default App
