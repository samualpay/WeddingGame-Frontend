import { useState, useCallback } from "react";
import Image from "next/image";
import styles from "../../styles/Customer.module.css";
export default function Customer() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imgSrc, setImgSrc] = useState("/vercel.svg");
  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);
  const handleMessageChange = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const handleFileClearOnClick = useCallback((event) => {
    event.target.value = null;
  }, []);
  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setImgSrc(reader.result);
    };
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>歡迎來到星霈＆諭葶的婚禮</p>
        <p>請獻上您的祝福</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>請問您是？</h2>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className={styles.card}>
            <h2>請獻上一句祝福的話</h2>
            <input type="text" value={message} onChange={handleMessageChange} />
          </div>
          <div className={styles.card}>
            <h2>請獻上照片</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              onClick={handleFileClearOnClick}
            />
          </div>
        </div>
        <div>
          <button>預覽</button>
          <button>送出</button>
        </div>
        <Image src={imgSrc} alt="preview" width={72} height={16} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
