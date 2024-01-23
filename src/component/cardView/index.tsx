import React from 'react'

export interface ICardViewProps {
    label: string
}

function CardView(props: ICardViewProps) {
    return (
        <div>{props.label}</div>
    )
}

export default React.memo(CardView)