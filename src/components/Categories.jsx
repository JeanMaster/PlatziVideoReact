import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({children, tittle}) => (
   <div className='categories'>
       <h3 className="carrusel-tittle">{tittle}</h3>
       {children}
   </div>
)

export default Categories
