import React, {lazy, Suspense} from 'react'

type Fullback = {
    fallback: React.ReactNode
}

/**
 * 组件懒加载
 * @param importFunc 引用组件 import 函数
 * @param param1 含有 fallback 属性的对象
 * @returns 
 */
function loadable<P>(
    importFunc: () => Promise<{ default: React.ComponentType<P> }>,
    {fallback = null}: Fullback = {fallback: null}
) {
    const LazyComponent = lazy<React.ComponentType<P>>(importFunc)

    return (props: React.ComponentPropsWithRef<React.ComponentClass<P>>) => (
        <Suspense fallback={fallback}>
            <LazyComponent {...props} />
        </Suspense>
    )
}

export default loadable
