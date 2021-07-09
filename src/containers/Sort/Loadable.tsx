import React from 'react'
import loadable from '../../utils/loadable'
import Loading from "../../components/Loading";
// import { Skeleton } from 'antd'

// export const Account = loadable(() => import('./'), {
//     fallback: <Skeleton active={true} paragraph={{ rows: 15 }} />
// })

export const Sort = loadable(() => import('./'), {
    fallback: <Loading active={true} />
})
