// IMPORTS - ASSETS
import styles from '@/pages/index.module.scss'
import stylesHeadline from 'components/headline/headline2.module.scss';
import Image from 'next/image';
import logoWWU from "assets/images/wwu.svg";
import logoERCIS from "assets/images/ercis.svg"


export default function Headline() {
    return (
        <div className={stylesHeadline.headlineWrapper}>
            <div className={stylesHeadline.logo}><Image src={logoWWU} width={400}
        height={100}
        alt="WWU Logo"/></div>
            <div className={stylesHeadline.title}><h1>Department of Information Systems</h1></div>
            <div className={[stylesHeadline.logo, stylesHeadline.alignRight].join(" ")}><Image src={logoERCIS} width={400}
        height={100}
        alt="ERCIS Logo"/></div>
        </div>
    )
    }