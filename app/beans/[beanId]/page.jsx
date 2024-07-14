import { getOneBean } from "@/API/apiBeans"
import { Suspense } from "react";

export default async function Bean({params}) {
    const {bean, reviews, roaster, ranking} = await getOneBean(params.beanId);
    // console.log(bean);
    // console.log(roaster);
    // console.log(ranking);
    return (
        <div>
            <h1>[beanId] page</h1>
            <Suspense fallback="loading..">
            <span>{bean.nameEn}</span>
            </Suspense>
        </div>
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

