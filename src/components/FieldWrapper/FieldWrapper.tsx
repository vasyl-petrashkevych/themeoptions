import {FC, ReactNode} from 'react'
import * as styles from './FieldWrapper.module.scss'

type Props = {
    children: ReactNode
}
export const FieldWrapper: FC<Props> = ({children}) => {
    return <div className={styles.wrapper}>{children}</div>
}