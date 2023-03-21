import React from 'react'
import CategoryList from '../../components/category-list/CategoryList'
import MainProducts from '../../components/main-products/MainProducts'

function Home() {
  return (
    <>
      <main>
        <CategoryList/>
        <MainProducts/>
      </main>
    </>
  )
}

export default Home