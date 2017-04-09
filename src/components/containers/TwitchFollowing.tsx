import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Text from 'components/atoms/Text';

export interface Props {
    dispatch: Dispatch<any>;
}

export class TwitchFollowing extends React.Component<Props, void> {
    componentDidMount() {
    }

    render() {
        return <div>
        </div>;
    }
};

export default connect()(TwitchFollowing);
