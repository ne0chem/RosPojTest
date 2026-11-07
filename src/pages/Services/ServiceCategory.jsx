import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { serviceCategories } from '../../data/serviceCategories';
import NotFound from '../NotFound/NotFound';

export default function ServiceCategory() {
  const { categoryId } = useParams();
  return serviceCategories.some(({ id }) => id === categoryId)
    ? <Navigate to={'/services#' + categoryId} replace />
    : <NotFound />;
}
