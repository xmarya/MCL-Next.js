"use client"

import Link from "next/link";
import Table from "../Table";
import styled from "styled-components";
import { Tag, TagsContainer } from "../Tag";

/*
{
  _id: '667a7642ec4821e937fc8a17',
  model: 'Bean',
  modelId: {
    _id: '65966bacd0a6179d3b6c9ff4',
    nameEn: 'FAZENDA',
    nameAr: 'فازيندا',
    slug: 'fazenda',
    ratingsAverage: 3,
    roaster: {
      _id: '65966a2e12a0c1555779277e',
      nameEn: 'Soil',
      nameAr: 'سويل',
      slug: 'soil',
      image: 'soil.jpg'
    }
  },
  rank: 9
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

const Bean = styled.div`
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


export default function BeanRow({ bean }) {
    const { rank, modelId: {_id: id, image, nameEn, nameAr, notesEn, notesAr, ratingsAverage, roaster}} = bean;

    return (
        <Table.Row role="row">
          <Rank>{rank}</Rank>
          <Link href={`/beans/${id}`}>
          <Img src={`/roasters/${roaster.image}`}/>
          </Link>
          <Link href={`/beans/${id}`}>
            <Bean>{nameAr}</Bean>
          </Link>
          <Link href={`/roasters/${roaster._id}`}>
            <div>{roaster.nameAr}</div>
          </Link>
          <Rating>{ratingsAverage}</Rating>
          <TagsContainer>
            {notesAr.map((note, index) => index < 4 && <Tag key={index}><Link href={`/beans?notesAr=${note}`}>{note}</Link></Tag>)}
          </TagsContainer>
        </Table.Row>
    )
}

