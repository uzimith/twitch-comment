import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { authorize } from 'actions';
import Text from 'components/atoms/Text';

export interface Props {
    dispatch: Dispatch<any>;
}

export class Auth extends React.Component<Props, void> {
    componentDidMount() {
        this.props.dispatch(authorize.started());
    }

    render() {
        return <div>
            <Text text="" />
        </div>;
    }
};

export default connect()(Auth);
