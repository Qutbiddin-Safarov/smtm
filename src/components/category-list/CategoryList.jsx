import React from 'react'
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData'
import './CategoryList.scss'

function CategoryList() {
  const data = useFetchData("/categories?offset=0&limit=5")
  console.log(data);
  return (
    <section className='category-section'>
      <div className="title-box">
      <h2 className='title'>Категории</h2>
      </div>
      <div className="category-list">
      {
        data.map( category => 
            <Link className='content-box' key={category.id}>
              <div className='product'>
                <img src={category.image} alt=""/>
                <h3>{category.name}</h3>
              </div>
            </Link>
          )
      }
      </div>
    </section>
  )
}

export default CategoryList