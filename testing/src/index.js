import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Root } from 'Root';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={CommentList} />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
);
 