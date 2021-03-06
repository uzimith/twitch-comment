import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { authorizeTwitch } from 'actions';
import Text from 'components/atoms/Text';

export interface Props {
    dispatch: Dispatch<any>;
}

export class AuthTwitch extends React.Component<Props, void> {
    componentDidMount() {
        this.props.dispatch(authorizeTwitch.started());
    }

    render() {
        return <div>
            <Text text="Loading..." />
        </div>;
    }
};

export default connect()(AuthTwitch);
