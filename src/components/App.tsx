import * as React from 'react';
import { Route } from 'react-router';
import * as styles from 'components/App.css';

import AuthPage from 'components/pages/AuthPage';
import CommentPage from 'components/pages/CommentPage';

export const App = () => {
    return <div className={styles.app}>
        <Route exact path="/" component={AuthPage} />
        <Route path="/comments" component={CommentPage} />
    </div>
        ;
};

export default App;
