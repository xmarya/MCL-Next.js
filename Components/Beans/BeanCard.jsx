"use client"

import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CardHeader from "../Card/CardHeader";
import CardRanking from "../Card/CardRanking";
import CardImage from "../Card/CardImage";
import CardDetails from "../Card/CardDetails";
import CardName from "../Card/CardName";
import CardFooter from "../Card/CardFooter";
import Rating from "../Rating";
import CardButton from "../Card/CardButton";

// const StyledBeanCard = styled.li`
//   background-color: bisque;
//   border-radius: 3px;
//   display: flex;
//   flex-direction: column;
//   /* -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: column; */
// `;


export default function BeanCard({bean}) {
  // temporary logic:
  const [liked, setLiked] = useState(false); // in later stage this should be a removed and replased with an API to add the bean to the user faves list.
  const locale = "ar"; // in later stage this wil be comming from the [locale] params.
  const withLocale = locale.at(0).toUpperCase().concat(locale.at(1));
//   console.log("name"+withLocale);
// console.log(bean["name"+withLocale]);
  const {_id: id, image, ratingsAverage, ratingsQuantity, ranking, isRare } = bean;
  const drinkType = bean["drinkType"+withLocale];

  return (
    // <StyledBeanCard>
    <li className="bg-emerald-200 flex flex-col rounded-md">
      <CardHeader>
        <CardRanking ranking={ranking}/>
        <button onClick={() => setLiked(!liked)}>
          <HeartIcon className={`icon stroke-red-500 hover:fill-red-500 ${liked && "fill-red-500"}`}/>
        </button>
      </CardHeader>
      <CardImage>
        <img className="w-full h-full object-cover" src="/roasters/soil.jpg" alt={bean["name"+withLocale]}/>
      </CardImage>
      <CardDetails>
        <CardName cardName={bean["name"+withLocale]}/>
        <div className="text-[1.3rem] flex items-center bg-lime-300">
          <span>المنشأ : </span>
          {bean["origin"+withLocale]}
        </div>
        <div className="text-[1.3rem] flex items-center bg-lime-300">
          <span>السلالة : </span>
          {bean["variety"+withLocale]}
        </div>
        <div className="text-[1.3rem] flex items-center bg-lime-300">
          <span>المعالجة : </span>
          {bean["typeOfProcess"+withLocale]}
        </div>
        <div className="text-[1.3rem] flex items-center bg-lime-300">
          <span>المشروب : </span>
          {drinkType.length > 1 ? drinkType[0]+"، "+ drinkType[1] : drinkType}
        </div>
      </CardDetails>
      <CardFooter>
        <Rating ratingAvg={ratingsAverage} ratingQuant={ratingsQuantity}/>
        <CardButton resourse="beans" id={id} text="عرض المحصول"/>
      </CardFooter>
      </li>
    // </StyledBeanCard>
    )
}

/*
    {
  _id: new ObjectId('65966bacd0a6179d3b6ca00f'),
  nameEn: 'Ethiopia - Bona Chelchele',
  nameAr: 'إثيوبيا - بونا شلشلي',
  slug: 'ethiopia-bona-chelchele',
  originEn: 'Yirgacheffe',
  originAr: 'يورجاتشيف - أثيوبيا',
  varietyEn: 'Heirloom',
  varietyAr: 'هيرليوم',
  typeOfProcessEn: 'Anaerobic',
  typeOfProcessAr: 'لا هوائية',
  notesEn: [
    'Chocolate',
    'Aromatic ower',
    'sweetness',
    'caramel',
    'Complex fruit',
    'red grape',
    'nuts',
    'Tobacco'
  ],
  notesAr: [
    'شوكولاتة',
    'أزهار عطرية',
    'حلاوة',
    'فواكة معقدة',
    'عنب أحمر',
    'كراميل',
    'مكسرات',
    'توباكو'
  ],
  drinkTypeEn: [ 'Espresso', 'Drip' ],
  drinkTypeAr: [ 'اسبريسو', 'مقطرة' ],
  ranking: 34,
  ratingsAverage: 0,
  ratingsQuantity: 0,
  isRare: false,
  tagsEn: [
    'Espresso',
    'Drip',
    'Ethiopian',
    'Chocolate',
    'Caramel',
    'Nuts',
    'Shrq roaster',
    'Anaerobic',
    'Heirloom'
  ],
  tagsAr: [
    'شوكولاتة',  'اسبريسو',
    'مقطرة',     'لا هوائية',
    'محمصة شرق', 'مكسرات',
    'كراميل',    'اثيوبية',
    'هيرليوم'
  ],
  roaster: {
    _id: new ObjectId('65966a2e12a0c15557792780'),
    nameEn: 'Shrq',
    nameAr: 'شرق',
    slug: 'shrq',
    image: 'shrq.webp'
  },
  ratingsQuantityLastMonth: 0,
  ratingsQuantityThisMonth: 0
}
*/