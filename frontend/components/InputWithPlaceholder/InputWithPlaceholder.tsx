import React from 'react'

export default function InputWithPlaceholder({ className, children }: any)
{
    return (
        <div className={"inputWithPlaceholder w-full group " + className}>
            {React.Children.map(children, (child, index) => (
                <React.Fragment key={index}>{child}</React.Fragment>
            ))}
        </div>
    )
}