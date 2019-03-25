import React from 'react'
import Header from 'Components/Header'

const BaseLayout = ({children}) => (
    <div>
        <Header />
        {children}
    </div>
)

export default BaseLayout
