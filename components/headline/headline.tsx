// IMPORTS - ASSETS
import styles from '@/pages/index.module.scss'

export default function Headline() {
    return (
        <table>
            <tr>
                <td className={styles.left}><img src="assets/images/wwu.svg" alt="WWU Logo"/></td>
                <td className={styles.middle}>Department of Information Systems</td>
                <td className={styles.right}><img src="assets/images/ercis.svg" alt="ERCIS Logo"/></td>
            </tr>
        </table>
    )
    }