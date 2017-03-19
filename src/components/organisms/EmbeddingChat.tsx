import * as React from 'react';

export interface Props {
    src: string;             // <src url>
    id: string;              // <channel>
    width: number;           // <width>
    height: number;          // <height>
    frameborder: number;     // <frameborder width>
    scrolling: 'yes' | 'no'; // <scrolling>
}

export const EmbeddingChat = (props: Props) => {
    return <iframe {...props } />
        ;
};

export default EmbeddingChat;
