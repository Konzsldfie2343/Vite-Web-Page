import { JSX } from 'react'
import styles from './App.module.css'

import NavigationBar from './components/NavigationBar/NavigationBar.tsx'
import BasicContent from './components/BasicContent/BasicContent.tsx'
import Footer from './components/Footer/Footer.tsx'
import MainVisual from './components/MainVisual/MainVisual.tsx'

document.onselectstart = () => false;
document.ondragstart = () => false;

const contents = [
  { title: "WebP Comverter", subTitle: "画像を自動で軽量化", url: "https://utils-tauri.booth.pm/items/6571987" },
  { title: "Youtube Downloader", subTitle: "動画を自動でダウンロード", url: "https://utils-tauri.booth.pm/items/6595267" },
  { title: "MAGI SYSTEM", subTitle: "旧劇・EVANGELION MAGIを再現", url: "https://utils-tauri.booth.pm/items/6611730" },
  { title: "MAGI ACHIRAL", subTitle: "新劇・EVANGELION MAGIを再現", url: "https://utils-tauri.booth.pm/items/6619667" },
  { title: "EVA TIMER", subTitle: "エヴァ活動限界タイマー", url: "https://utils-tauri.booth.pm/items/6623543" },
  { title: "EVA TYPING", subTitle: "旧劇・EVANGELION 名台詞タイピングゲーム", url: "https://utils-tauri.booth.pm/items/6639397" },
]

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <NavigationBar contents={contents} />
      <MainVisual />
      {contents.map((content, index) => (
        <BasicContent key={index} title={content.title} subTitle={content.subTitle} url={content.url} />
      ))}
      <Footer />
    </div>
  )
}

export default App