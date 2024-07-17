"use client"

import Link from "next/link";
import Table from "../Table";
import styled from "styled-components";

/*
  {
  _id: '6681477fec4821e937fca54b',
  model: 'Roaster',
  modelId: {
    master: null,
    _id: '65966a2e12a0c1555779277b',
    nameEn: 'Kiffa',
    nameAr: 'كِفة',
    slug: 'kiffa',
    cityEn: 'Madinah',
    cityAr: 'المدينة المنورة',
    year: 2014,
    image: 'kiffa.jpg',
    website: 'https://kiffa.sa/',
    instagram: 'https://www.instagram.com/kiffaroaster/',
    ratingsAverage: 1,
    ratingsQuantity: 1,
    locations: [ [Object], [Object] ],
    __v: 0,
    ratingsQuantityThisMonth: 1,
    ratingsQuantityLastMonth: 0,
    ranking: 2,
    hasMaster: false
  },
  rank: 2
}
*/
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Roaster = styled.div`
  font-weight: 600;
  color: var(--colour-grey-600);
`;

const Rank = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Rating = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

export default function RoasterRow({roaster}) {
    const {rank, modelId: { _id: id, image, nameAr, nameEn, ratingsAverage}} = roaster;

    return (
        <Table.Row role="row">
          <Rank>{rank}</Rank>
          <Link href={`/roasters/${id}`}>
          <Img src={`/roasters/${image}`}/>
          </Link>
          <Link href={`/roasters/${id}`}>
            <Roaster>{nameAr}</Roaster>
          </Link>
          <Rating>{ratingsAverage}</Rating>
        </Table.Row>
    );
}

