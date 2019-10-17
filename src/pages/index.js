import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

export default () => (
    <Layout>
    <h1>Curious Programmer</h1>
    <p>A website for curious programmers</p>
    <Link to="/about/">Learn about me &rarr;</Link>
    </Layout>
);