import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux'
import { selectCollectionsForPreview } from '../../react/shop/shop.selector'
import { createStructuredSelector } from 'reselect'

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionsDetails }) => (
                <CollectionPreview key={id} {...otherCollectionsDetails} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionOverview)