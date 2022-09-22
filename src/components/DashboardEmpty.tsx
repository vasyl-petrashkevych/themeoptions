import {Empty} from 'antd'

export const DashboardEmpty = () => {
    return <Empty
        description={
            <span>
                You need to generate fields use <a href="https://github.com/vasyl-petrashkevych/themeoptions"
                                                   target="_blank">description</a> to add fields.
              </span>
        }
    />
}
