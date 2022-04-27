import React from 'react';
import data from '../data/portfolio.json';

const Portfolio = () => {
    let image = (img) => require(`../images/${img}`).default;
    const portfolio = data.data.map((item,pos) =>
        <div className="py-6 font-inter" key={pos}>
            <div className='flex mx-6 lg:mx-96 items-center'>
                <img className="h-full w-6 object-cover md:h-full md:w-8 lg:mx-2" alt="" src={image(item.pin)}/>
                <img className="h-full w-12 object-cover md:h-full md:w-20 ml-4 lg:ml-8 rounded-xl" alt="" src={image(item.image)}/>
                <p className="text-2xl lg:text-3xl font-bold text-left dark:text-white ml-4 lg:ml-8">
                    {item.title}
                </p>
            </div>
            <p className="lg:text-2xl text-left mx-12 lg:mx-96 pt-6 dark:text-white">
                {item.desc}
                <div>
                    <br/>
                    Main technologies: {item.main_tech.map((img)=>{
                        return <img className="inline h-10 w-10 mx-1" alt="" src={image(img)}/>
                    })}
                </div>
            </p>
            <p className='text-1xl lg:text-3xl font-bold text-left mx-12 lg:mx-96 pt-6 dark:text-white'>
                {item.date}
            </p>    
            <div className='pt-8'>
                <hr className='line mx-12 lg:mx-96'/>
            </div>
        </div>
    )
 
    return(
        <div className="py-24 text-center leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p className="text-3xl dark:text-white font-bold">
            Experience:
            </p>
            {portfolio}
        </div>
    );

}

export default Portfolio;
