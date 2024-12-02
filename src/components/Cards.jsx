import React from 'react';
import growth from "../assets/images/growth.png";
import fitness from "../assets/images/fitness.png";
import mann from "../assets/images/mann.png";
import nutrition from "../assets/images/nutrition.png";
import books from "../assets/images/books.png";
import swim from "../assets/images/swim.png";
import doctor from "../assets/images/doctor.png";
const Cards = () => {
    const cardList = [
        {
            img:growth,
            title: 'Growth',
            description: "Our group of specialists will collaborate with you to develop big fat things"
        },
        {
            img:fitness,
            title: 'Fitness',
            description: "Our group of specialists will collaborate with you to develop big fat things"
        },
        {
            img:nutrition,
            title: 'Foods',
            description: "Our group of specialists will collaborate with you to develop big fat things"
        },
        {
            img:swim,
            title: 'Swim',
            description: "Our group of specialists will collaborate with you to develop big fat things"
        },
        {
            img:doctor,
            title: 'Doctor',
            description: "Our group of specialists will collaborate with you to develop big fat things"
        },
        {
            img:books,
            title: 'Study',
            description: "Our group of specialists will collaborate with you to develop big fat things"
        },


    ]
  return (
    <>
        <div className="flex flex-wrap justify-center gap-2">


        {cardList.map((card, id)=>(
            <div key={id} className={"w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] p-4 cursor-pointer bg-white justify-center py-6 px-10 text-center" +
                "items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px]" +
                "w-full card-item-div max-w-screen-md min-h-[26px]"}>
                <img src={card.img}
                alt={"card-image"}
                className={"w-[75px] mb-4"}/>
                <p className={"text-[24px] font-bold uppercase mb-7"}>{card.title}</p>
                <p className={"text-[15px] font-medium leading-2 w-full"}>{card.description}</p>

            </div>
        ))}
        </div>
    </>
  );
};

export default Cards;
