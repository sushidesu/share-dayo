import { useState } from 'react'
import styles from './App.module.css'
import { database } from "./plugins/firebase"
import { ref, get, set } from "firebase/database"
import { customAlphabet } from "nanoid"

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

  const generateKey = () => {
    const custom = customAlphabet("abcdefghijklmnopqrstuvwxyz", 8)
    return custom()
  }
  const [value, setValue] = useState("")
  const create = async () => {
    const newKey = generateKey()
    const roomRef = ref(database, `room/${newKey}`)
    await set(roomRef, value)
    window.alert(`ROOM: ${newKey}`)
  }

  return (
    <div>
      <h1 className={styles.root}>share dayo</h1>
      <div>
        <p>探す</p>
        <input onBlur={(e) => {
          setKey(e.target.value)
        }} />
        <button onClick={search}>OK</button>
      </div>
      <hr />
      <div>
        <p>作る</p>
        <input onBlur={(e) => {
          setValue(e.target.value)
        }} />
        <button onClick={create}>CREATE</button>
      </div>
    </div>
  )
}

export default App
