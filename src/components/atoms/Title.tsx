import * as React from 'react';

export interface Props {
    text: string;
}

export const Title = (props: Props) => {
    return <h2>{props.text}</h2>
        ;
};

export default Title;
