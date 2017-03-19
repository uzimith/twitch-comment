import * as React from 'react';
import { Route } from 'react-router';
import * as styles from './App.css';

import CommentPage from './pages/CommentPage';

export const App = () => {
    return <div className={styles.app}>
        <Route exact path="/" component={CommentPage} />
    </div>
        ;
};

export default App;
