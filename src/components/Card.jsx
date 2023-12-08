import React from 'react'

function Card() {

    const data = [
        {   
            id:1,
            src: "https://picsum.photos/200/?random=1",
            imageAlt: "Random Alt 01",
            href: "#",
            name: "Random Name 01",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod",
            buttonName:"Click to know"
        },
        {
            id:2,
            src: "https://picsum.photos/200/?random=2",
            imageAlt: "Random Alt 02",
            href: "#",
            name: "Random Name 02",
            desc:" 02 Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod",
            buttonName:"Click to know"
        },
        {
            id:3,
            src: "https://picsum.photos/200/?random=3",
            imageAlt: "Random Alt 03",
            href: "#",
            name: "Random Name 03",
            desc:"03 Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod",
            buttonName:"Click to know"
        },
        {
            id:4,
            src: "https://picsum.photos/200/?random=4",
            imageAlt: "Random Alt 04",
            href: "#",
            name: "Random Name 04",
            desc:"04 Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod",
            buttonName:"Click to know"
        },  
        ]

    return (
        <>
            {data.map((dataObject) => {
            return(
                <div className="w-full mt-5 justify-between" key={dataObject.id}>
                    <div className="">
                
                        <div  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                            src={dataObject.src}
                            alt={dataObject.imageAlt}
                            className="h-full w-full border-orange-500 border-solid border-2 lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>
                            <h3 className="text-sm text-gray-700 text-left">
                                {dataObject.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 text-left">{dataObject.desc}</p>
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <p className="font-bold text-gray-900">
                                <a href={dataObject.href}>
                                    <button type='Submit' className="button border-2 rounded-lg text-sm font-semibold py-2 px-3 text-white bg-orange-700 hover:bg-white hover:border-orange-700 hover:border-2 hover:text-orange-600">{dataObject.buttonName}</button>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )
            })
        }
        </>
    )
}

export default Card
