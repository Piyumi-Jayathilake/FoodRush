import React, { useState } from 'react'
import { cardData,additionalData } from '../../assets/dummydata';
import { useCart } from '../../CartContext/CartContext';

const SpecialOffer = () => {

    const[showAll,setShowAll] = useState(false);
    const initialData =[...cardData, ...additionalData];
    const {cartItems, addToCart, removeFromCart, updateQuantity} = useCart();
  return (
    <div className='bg-[#263238] text-[#d6f6c4] py-16 px-4 font-[Poppins]'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-14'>
                <h1 className='text-5xl font-bold mb-4 transform transition-all bg-gradient-to-r from-[#4cf452] to-[#048b0b]
                 bg-clip-text text-transparent font-[Playfair_Diaplay] italic'>
                    Today's <span className='text-stroke-gold'>Special</span> Offers
                </h1>
                <p className='text-lg text-[#d6f6c4] max-w-3xl mx-auto tracking-wide leading-relaxed'>
                    Savor the extraordinary with our culinary masterpieces crafted to perfection.
                </p>
            </div>
            {/*Product card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {(showAll ? initialData : initialData.slice(0,4)).map((item,index)=>{
                    const cartItem = cartItems.find(ci => ci.id === item.id);
                    const quantity = cartItem ? cartItem.quantity :0;
                    return(
                        <div key={`${item.id}-${index}`} className='relative group bg-amber-50 rounded-3xl
                        overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-all duration-500
                        hover:shadow-[#048b0b]/40 border-2 border-transparent hover:border-[#048b0b]/20 before:absolute
                        before:inset-0 hover:before:opacity-20'>
                            <div className='relative h-72 overflow-hidden'>
                                <img src={item.image} alt={item.title} className='w-full h-full object-cover
                                brightness-90 group-hover:brightness-110 transition-all duration-500' />
                            </div>
                            <div className='p-6 text-gray-800'>
                                <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                                <p className='text-gray-600 mb-4'>{item.description}</p>
                                <div className='flex justify-between items-center'>
                                    <span className='text-2xl font-bold text-[#048b0b]'>${item.price}</span>
                                    <div className='flex items-center gap-2'>
                                        {quantity > 0 ? (
                                            <div className='flex items-center gap-2'>
                                                <button onClick={() => updateQuantity(item.id, quantity - 1)}
                                                    className='bg-[#048b0b] text-white px-3 py-1 rounded hover:bg-[#4cf452]'>
                                                    -
                                                </button>
                                                <span className='px-3 py-1 bg-gray-100 rounded'>{quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, quantity + 1)}
                                                    className='bg-[#048b0b] text-white px-3 py-1 rounded hover:bg-[#4cf452]'>
                                                    +
                                                </button>
                                            </div>
                                        ) : (
                                            <button onClick={() => addToCart(item, 1)}
                                                className='bg-gradient-to-r from-[#048b0b] to-[#04720b] text-[#d6f6c4] px-4 py-2 rounded'>
                                                Add to Cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='text-center mt-12'>
                <button onClick={() => setShowAll(!showAll)}
                    className='bg-gradient-to-r from-[#048b0b] to-[#04720b] hover:from-[#4ae02c] hover:to-[#17c703] text-[#d6f6c4] px-8 py-3 rounded-full
                    transform hover:scale-105 transition-all duration-300
                    font-semibold shadow-lg hover:shadow-xl'>
                    {showAll ? 'Show Less' : 'View All Offers'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default SpecialOffer