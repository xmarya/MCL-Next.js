import { getOneBean } from "@/API/apiBeans"

export default async function Bean({params}) {
    const bean = await getOneBean(params.beanId);
    return (
        <div>
            {bean}
        </div>
    )
}

