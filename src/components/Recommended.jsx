import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Recommended = () => {
    const [items, setItems] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItemsCount = 4;
  
    const handleRightClick = () => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex >= items.length) nextIndex = 0;
        return nextIndex;
      });
    };
  
    const handleLeftClick = () => {
      setCurrentIndex((prevIndex) => {
        let prevIndexAdjusted = prevIndex - 1;
        if (prevIndexAdjusted < 0) prevIndexAdjusted = items.length - visibleItemsCount;
        return prevIndexAdjusted;
      });
    };
  
    useEffect(() => {
      const getItems = async () => {
          const response = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10');
          setItems(response.data.Items);
      }
      getItems();
    }, [])
  
    return (
      <div className='flex flex-col mt-[100px]'>
          <div className='flex justify-around items-center'>
              <h1 className='text-2xl'>Recommended</h1>
              <div className='flex justify-center items-center gap-2'>
                  <h1 className='text-2xl text-orange-500'>Add More</h1>
                  <FaChevronLeft onClick={handleLeftClick} />
                  <FaChevronRight onClick={handleRightClick} />
              </div>
          </div>
          <div className='flex justify-center items-center gap-5 overflow-hidden p-5'>
              {
                  items.slice(currentIndex, currentIndex + visibleItemsCount).map((item) => (
                      item.IsPopular && <Card key={item.Id} item={item} />
                  ))
              }
          </div>
      </div>
    )
}

export default Recommended