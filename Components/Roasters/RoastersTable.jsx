"use client"

import Table from "../Table";
import RoasterRow from "./RoasterRow";

export default function RoastersTable({roasters}) {

    return (
        <div>
            <Table columns="1fr 2fr 1fr 1fr">
                <Table.Header>
                    <div>الترتيب</div>
                    <div>صورة</div>
                    <div>المحمصة</div>
                    <div>التقييم</div>
                </Table.Header>
                <Table.Body data={roasters} render={roaster => <RoasterRow roaster={roaster} key={roaster._id}/>}/>
            </Table>
        </div>
    )
}

