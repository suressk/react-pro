import React, {lazy, Suspense} from 'react'

type Fullback = {
    fallback: React.ReactNode
}

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
