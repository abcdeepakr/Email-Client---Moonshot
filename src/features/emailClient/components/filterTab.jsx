import React from 'react'
import '../emailClient.css'

import { useDispatch, useSelector } from 'react-redux';
import {updateSelectedFilter, emailState, showCardHandler} from '../EmailSlice';
function FilterTab() {
    const dispatch = useDispatch();
    const emailData = useSelector(emailState);
  return (
    <React.Fragment>
        <div className='filters-tab'>
            Filter By: <span>
                <span className={`filter-label ${emailData.selectedFilter ==="unread" ? "filter-label--active" : ""}`} onClick={()=> dispatch(updateSelectedFilter("unread"))}>Unread</span>
                <span className={`filter-label ${emailData.selectedFilter ==="read" ? "filter-label--active" : ""}`} onClick={()=> dispatch(updateSelectedFilter("read"))}>Read</span>
                <span className={`filter-label ${emailData.selectedFilter ==="favourites" ? "filter-label--active" : ""}`} onClick={()=> dispatch(updateSelectedFilter("favourites"))}>Favourites</span>
            </span>
        </div>
        <button className={`back-button ${emailData.showCards ? "hide-back-button":""}`} onClick={()=>{dispatch(showCardHandler(true))}}>back</button>
    </React.Fragment>
  )
}

export default FilterTab