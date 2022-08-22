import {FC} from 'react';
import {Button, Result, Space, Typography} from 'antd';
import {CloseCircleTwoTone} from '@ant-design/icons';
import * as styles from './DashboardErrors.module.scss'

const {Paragraph, Text} = Typography;

type Error = {
    debug: Array<any>
    data: boolean
    message: string
}
type Props = {
    errors: Error[]
}

const debugTrace = (trace) => {
    return <ul className={styles.list}>
        {trace.map(({line, file}, id) => <li key={id}>{file} on line {line}</li>)}
    </ul>
}

export const DashboardErrors: FC<Props> = ({errors}) => {
    return <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Read documentation</Button>}
    >
        <div className="desc">
            <Paragraph>
                <Text strong className={styles.errorText}>
                    <h3>The content you submitted has the following error:</h3>
                </Text>
            </Paragraph>
            {errors.map((error, id) => <Paragraph key={id}>
                    <div className={styles.titleBlock}>
                        <Space>
                            <CloseCircleTwoTone twoToneColor="#eb2f96"/><h4 className={styles.title}>{error.message}</h4>
                        </Space>
                    </div>
                    {debugTrace(error.debug)}
                </Paragraph>
            )}
        </div>
    </Result>
}