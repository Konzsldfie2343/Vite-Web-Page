import { JSX } from 'react'
import styles from './App.module.css'

import NavigationBar from './components/NavigationBar/NavigationBar.tsx'
import BasicContent from './components/BasicContent/BasicContent.tsx'
import Footer from './components/Footer/Footer.tsx'
import MainVisual from './components/MainVisual/MainVisual.tsx'

document.onselectstart = () => false;
document.ondragstart = () => false;
document.oncontextmenu = () => false;

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <MainVisual />

      <BasicContent title="WebP Comverter" />
      <BasicContent title="Youtube Downloader" />
      <BasicContent title="MAGI SYSTEM" />
      <BasicContent title="MAGI ACHIRAL" />
      <BasicContent title="EVA TIMER" />
      <BasicContent title="EVA TYPING" />

      <Footer />
    </div>
  )
}

export default App