import React from 'react'
import CategoryList from '../../components/category-list/CategoryList'
// import MainProducts from '../../components/main-products/MainProducts'
import Search from '../../components/search/Search'

function Home() {
  return (
    <>
      <main>
        <Search/>
        <CategoryList/>
        {/* <MainProducts/> */}
      </main>
    </>
  )
}

export default Home