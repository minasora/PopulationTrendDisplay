import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const Placeholder = (props: React.JSX.IntrinsicAttributes & IContentLoaderProps) => (
    <ContentLoader
        speed={0.5}
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="2" ry="2" width="800" height="400" />
    </ContentLoader>
)


export default Placeholder