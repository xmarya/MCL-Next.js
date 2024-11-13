"use client"

import Table from "../Table";
import RoasterRow from "./RoasterRow";

export default function RoastersTable({roasters}) {

    return (
            <Table columns="4">
                <Table.Header>
                    <div>الترتيب</div>
                    <div>صورة</div>
                    <div>المحمصة</div>
                    <div>التقييم</div>
                </Table.Header>

                <Table.Body data={roasters} render={roaster => <RoasterRow roaster={roaster} key={roaster._id}/>}/>
            </Table>
    )
}

