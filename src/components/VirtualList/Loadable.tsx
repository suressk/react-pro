import React from 'react'
import loadable from '../../utils/loadable'
import Loading from "../Loading";

export default loadable(() => import('./'), {
    fallback: <Loading active={true} />
})
