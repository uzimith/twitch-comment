import * as React from 'react';

export interface Props {
    text: string;
}

export const Text = (props: Props) => {
    return <span>{props.text}</span>
        ;
};

export default Text;
