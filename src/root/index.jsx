import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { data } from '../utilites/navbar';
import Home from '../components/Home';
const Root = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {data.map(({ id, Component, path }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Route>
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
};

export default Root;
