"use client"

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledBeanCard = styled.li`
  background-color: bisque;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
`;


const Ranking = styled.h3`
  font-size: 3rem;
  color: #80808093;
  padding: 1.4rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 22rem;
`;

const CardImage = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;

  background-color: lemonchiffon;
`;

const CradName = styled.h4`
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  grid-column: 1 / -1;

  background-color: lime;
`;

const Details = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;

  background-color: limegreen;
`;

const CardFooter = styled.div`
  background-color: #f7f7f7;
  padding: 2.5rem 3rem;
  border-top: 1px solid #f1f1f1;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: auto;

  background-color: lightcoral;
`;

const Rating = styled.div`
  grid-row: 2 / 3;

  background-color: lemonchiffon;
`;

const CardButton = styled.button`
  grid-row: 1 / 3;
  justify-self: end;
  -ms-flex-item-align: center;
  align-self: center;

  background-color: lightsalmon;
`;


export default function BeanCard({bean}) {
  const locale = "ar";
  const withLocale = locale.at(0).toUpperCase().concat(locale.at(1));
//   console.log("name"+withLocale);
// console.log(bean["name"+withLocale]);
  const {_id: id, image, drinkTypeEn, drinkTypeAr, ratingsAverage, ratingsQuantity, isRare } = bean;

  return (
    <StyledBeanCard>
      <Ranking>{bean.ranking}</Ranking>
      <div className="relative">
        <ImageContainer>
          <CardImage src="/roasters/soil.jpg" alt={bean["name"+withLocale]}/>
        </ImageContainer>
      </div>
      <DetailsContainer>
      <CradName>{bean["name"+withLocale]}</CradName>
        <Details>
          <span>المنشأ : </span>
          {bean["origin"+withLocale]}
        </Details>
        <Details>
          <span>السلالة : </span>
          {bean["variety"+withLocale]}
        </Details>
        <Details>
          <span>المعالجة : </span>
          {bean["typeOfProcess"+withLocale]}
        </Details>
        <Details>
          <span>المشروب : </span>
          {drinkTypeAr.length > 1 ? drinkTypeAr[0]+"، "+drinkTypeAr[1] : drinkTypeAr}
        </Details>
      </DetailsContainer>
      <CardFooter>
        <Rating>{ratingsAverage}</Rating>
        <CardButton>
          <Link href={`/beans/${id}`}>عرض المحصول</Link>
        </CardButton>
      </CardFooter>
        
    </StyledBeanCard>
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