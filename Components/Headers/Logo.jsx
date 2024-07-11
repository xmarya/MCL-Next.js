// import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
          {/* <Image src="" height="60" width="60" alt="MCL logo" /> */}
          <span className="text-xl font-semibold text-primary-100">
            MCL
          </span>
        </Link>
      );
}

