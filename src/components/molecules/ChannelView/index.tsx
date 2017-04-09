import * as React from 'react';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Channel from 'models/channel';

export interface Props {
    channel: Channel;
}

export const ChannelView = (props: Props) => {
    const { name, display_name, status, game } = props.channel;
    console.log(props);
    return <div>
        <Image src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${name}-320x180.jpg`} />
        <Text text={display_name} />
        <Text text={game} />
        <Text text={status} />
    </div>
        ;
};

export default ChannelView
