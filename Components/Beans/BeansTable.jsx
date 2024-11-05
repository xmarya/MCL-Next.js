"use client"

import Table from "../Table";
import BeanRow from "./BeanRow";

export default function BeansTable({beans}) {
    return (
        <div>
            <Table>
                <Table.Header>
                    <div>الترتيب</div>
                    <div>صورة</div>
                    <div>المحصول</div>
                    <div>المحمصة</div>
                    <div>التقييم</div>
                    <div>الايحاءات</div>
                </Table.Header>
                <Table.Body data={beans} render={bean => <BeanRow bean={bean} key={bean._id}/>}/>
            </Table>
        </div>
    )
}

