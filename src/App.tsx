import { JSX } from 'react'
import styles from './App.module.css'

import NavigationBar from './components/NavigationBar/NavigationBar.tsx'
import BasicContent from './components/BasicContent/BasicContent.tsx'
import Footer from './components/Footer/Footer.tsx'
import MainVisual from './components/MainVisual/MainVisual.tsx'
import HomeBtn from './components/HomeBtn/HomeBtn.tsx'

document.onselectstart = () => false;
document.ondragstart = () => false;

const contents = [
  { title: "WebP Comverter", subTitle: "画像を自動で軽量化", url: "https://utils-tauri.booth.pm/items/6571987", img: "/1.webp" },
  { title: "Youtube Downloader", subTitle: "動画を簡単にダウンロード", url: "https://utils-tauri.booth.pm/items/6595267", img: "/2.webp" },
  { title: "MAGI SYSTEM", subTitle: "旧劇・EVANGELION MAGIを再現", url: "https://utils-tauri.booth.pm/items/6611730", img: "/3.webp" },
  { title: "MAGI ACHIRAL", subTitle: "新劇・EVANGELION MAGIを再現", url: "https://utils-tauri.booth.pm/items/6619667", img: "/4.webp" },
  { title: "EVA TIMER", subTitle: "エヴァ活動限界タイマー", url: "https://utils-tauri.booth.pm/items/6623543", img: "/5.webp" },
  { title: "EVA TYPING", subTitle: "旧劇・EVANGELION 名台詞タイピングゲーム", url: "https://utils-tauri.booth.pm/items/6639397", img: "/6.webp" },
]

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <NavigationBar contents={contents} />
      <MainVisual />
      {contents.map((content, index) => (
        <BasicContent
          key={index}
          title={content.title}
          subTitle={content.subTitle}
          url={content.url}
          img={content.img}
          id={`BasicContent${index + 1}`}
        />
      ))}
      <Footer />
      <HomeBtn />
    </div>
  )
}

export default App