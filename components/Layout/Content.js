import React from 'react';
import { node, string, oneOfType } from 'prop-types';
import { Layout } from 'antd';

const AppContent = Layout.Content;
// eslint-disable-next-line react/jsx-props-no-spreading
const Content = ({ children, ...props }) => <AppContent {...props}>{children}</AppContent>;
Content.propTypes = {
    children: oneOfType([node, string]),
};
export default Content;
