import Link from "next/link";
import Button from "../Button";

export default function CardButton({resourse, id, text}) {
    return (
        <Button btnType="secondary" className="row-span-full self-center justify-self-end">
            <Link href={`/${resourse}/${id}`}>{text}</Link>
        </Button>
    )
}

