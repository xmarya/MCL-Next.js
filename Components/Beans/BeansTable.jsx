"use client"

import Table from "../Table";
import BeanRow from "./BeanRow";

export default function BeansTable({beans}) {

    return (
        <div>
            <Table columns="0.3fr 0.6fr 0.8fr 0.3fr 2.2fr">
                <Table.Header>
                    <div>الترتيب</div>
                    <div>صورة</div>
                    <div>المحصول</div>
                    <div>التقييم</div>
                    <div>معلومات</div>
                </Table.Header>
                <Table.Body data={beans} render={bean => <BeanRow bean={bean} key={bean.id}/>}/>
            </Table>
        </div>
    )
}

