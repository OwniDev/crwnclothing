import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl } = item;
  //Since we now want the whole item to be passed as payload, we modifiy our code in collection preview to pass the whole item. Now we are using a const to destructure our items.
  return (
    <div className='collection-item'>
      <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      />
        <div className="collection-footer">
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted>
          Add to cart
        </CustomButton>
    </div>) 
}

const mapDispatchToProps = dispatch =>({
  addItem: item => dispatch(addItem(item))
  //We're creating this function called addItem that will go into our collection component as the addItem function, then whenever we actually dispatch/ call this function, get the item as a property => pass it as into our addItem action => We dispatch that new object into our store.
})

export default connect(null, mapDispatchToProps)(CollectionItem);