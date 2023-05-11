// IMPORTS - COMPONENTS
import Busplan from '@/components/Busplan/Busplan'

// IMPORTS - ASSETS
import styles from '@/pages/index.module.scss'


export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bodyWrapper}>
        <div className={[styles.largeContainer, styles.contentSection].join(" ")}>LARGE</div>
          <Busplan/>
        <div className={[styles.smallContainer, styles.contentSection].join(" ")}>small</div>
        <div className={[styles.overlayContainer, styles.contentSection].join(" ")}>Overlay</div>
        <div className={[styles.smallContainer, styles.contentSection].join(" ")}>small</div>
      </div>
    </div>
  )
}
