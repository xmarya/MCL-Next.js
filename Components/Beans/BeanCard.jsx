"use client"

import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import CardHeader from "../Card/CardHeader";
import CardRanking from "../Card/CardRanking";
import CardImage from "../Card/CardImage";
import CardDetails from "../Card/CardDetails";
import CardName from "../Card/CardName";
import CardFooter from "../Card/CardFooter";
import Rating from "../Rating";
import CardButton from "../Card/CardButton";
import { updateFave } from "@/API/actionsMutation";
import { useState } from "react";
import { Tag, TagsList } from "../Tag";
import Link from "next/link";

export default function BeanCard({bean, fave}) {
  
  const [liked, setLiked] = useState(fave);

  // temporary logic:
  const locale = "ar"; // in later stage this wil be comming from the [locale] params.
  const withLocale = locale.at(0).toUpperCase().concat(locale.at(1));
//   console.log("name"+withLocale);
// console.log(bean["name"+withLocale]);
  const {_id: id, image, ratingsAverage, ratingsQuantity, ranking, isRare, roaster } = bean;
  const drinkType = bean["drinkType"+withLocale];

  async function handleHearts() {
    // show an immediate react to the user's click:
    setLiked(!liked);

    // handling the real action:
    const result = await updateFave("Bean", id);
  }

  return (
    // <StyledBeanCard>
    <li className="bg-emerald-200 flex flex-col rounded-md">
      <CardHeader>
        <CardRanking ranking={ranking}/>
        <button onClick={handleHearts}>
          <HeartIcon className={`icon stroke-red-500 hover:fill-red-500 ${liked && "fill-red-500"}`}/>
        </button>
      </CardHeader>
      <CardImage>
        <TagsList>
          {
            isRare && <Link href="/beans?isRare=true">
              <Tag $type="special">محصول فاخر</Tag>
            </Link>
          }
          <Link href={`/roasters/${roaster._id}`}>
            <Tag>{roaster["name"+withLocale]}</Tag>
          </Link>
        </TagsList>
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