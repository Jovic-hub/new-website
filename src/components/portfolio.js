import React from 'react';
import data from '../data/portfolio.json';
import github from '../images/github.png'

const Portfolio = () => {
    let image = (img) => require(`../images/${img}`).default;
    const portfolio = data.data.map((item,pos) =>
        <div className="py-6 font-inter" key={pos}>
            <div className="relative py-2">
                <div className="relative max-w-full mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-32 w-full object-cover md:h-full md:w-64" alt="" src={image(item.image)}/>
                        </div>
                        <div className="p-4">
                            <b className="mt-1 text-lg text-center leading-tight font-bold text-black dark:text-white">{item.title} 
                            <a href={item.github_link} rel="noopener noreferrer" target="_blank"><img className="ml-2 h-10 w-10 inline a" alt="" src={github}/></a></b>                                     
                            <p className="mt-2 dark:text-white">{item.desc}</p>
                            <p className="text-left dark:text-white">Learning Outcomes&rarr; {item.learning}</p>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    
    return(
        <div className="py-16">
            {portfolio}
        </div>
    );

}

export default Portfolio;
