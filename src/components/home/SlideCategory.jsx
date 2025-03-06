import React, { useRef, useState, useEffect } from 'react'
import ArrowLeft from '@/assets/icons/arrowL.svg'
import ArrowRight from '@/assets/icons/arrowR.svg'

const SlideCategory = () => {
  const categories = ['For you', 'Machine Learning', 'Technology', 
    'Programming', 'Data Science', 'Design', 'Art', 'Education']

  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
        scrollRef.current.scrollWidth
      )
    }
  }

  useEffect(() => {
    checkScroll()
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className='sticky top-0 z-30 bg-white'>
      <div className='relative w-full flex items-center py-4 border-b border-gray-100'>
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 z-10 cursor-pointer bg-gradient-to-r from-white/100 to-white/50 p-2 w-[80px] 
          ${!canScrollLeft && 'opacity-20 cursor-default'}`}
        >
          <img className='w-[15px]' src={ArrowLeft} alt='icon-arrowL' />
        </button>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className='flex gap-x-8 flex-nowrap w-full px-6 sm:px-12 overflow-x-hidden'
        >
          {categories.map((category, index) => (
            <button key={index} className='whitespace-nowrap text-xs sm:text-sm text-stone-600'>
              {category}
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-0 z-10 bg-gradient-to-l from-white/100 to-white/50 p-2 w-[80px] 
            ${!canScrollRight ? 'hidden cursor-default' : 'cursor-pointer'}`}
        >
          <img className='float-end w-[15px]' src={ArrowRight} alt='icon-arrowR' />
        </button>
      </div>
    </div>
  )
}

export default SlideCategory
