import * as React from 'react';

export interface Props {
    src: string;
    width?: number;
    height?: number;
}

export const Image = (props: Props) => {
    const src = props.src && props.src !== "" ? props.src : `http://placehold.it/${props.width || 320}x${props.height || 120}/ddd/666.png/?text=no+image`;
    return <img {...{ ...props, src }} />;
};

export default Image;
