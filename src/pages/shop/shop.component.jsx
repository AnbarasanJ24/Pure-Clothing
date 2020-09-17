import React from 'react'
// import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
// import { selectCollection } from '../../react/shop/shop.selector'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage