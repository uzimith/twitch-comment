'use babel';

import React from 'react';
import {
    View,
    Text,
    ListView,
    ListViewHeader,
    ListViewSeparator,
    ListViewSection,
    ListViewFooter,
    ListViewRow
} from 'react-desktop/macOs';

export default class Main extends React.Component {
  render() {
    return (
        <ListView background="#f1f2f4" width="585px" height="375px">
            <ListViewRow><Text color="#414141" size="13">hoge: hogehogehogehoge</Text></ListViewRow>
            <ListViewRow><Text color="#414141" size="13">hoge: hogehoge</Text></ListViewRow>
            <ListViewRow><Text color="#414141" size="13">hoge: hogehoge</Text></ListViewRow>
            <ListViewRow><Text color="#414141" size="13">hoge: hogehoge</Text></ListViewRow>
            <ListViewRow><Text color="#414141" size="13">hoge: hogehoge</Text></ListViewRow>
            <ListViewRow><Text color="#414141" size="13">hoge: hogehoge</Text></ListViewRow>
            <ListViewRow><Text color="#414141" size="13">hoge: hogehoge</Text></ListViewRow>
            <ListViewRow><Text color="#414141" size="13">hoge: hogehoge</Text></ListViewRow>
            <ListViewRow><Text color="#414141" size="13">hoge: hogehoge</Text></ListViewRow>
        </ListView>
    )
    ;
  }
}
