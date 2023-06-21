"use client"

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NextBreadcrumbs() {
    const router = useRouter();

    function generateBreadcrumbs() {
        const asPathWithoutQuery = router.asPath.split("?")[0];
        const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);
        const crumblist = asPathNestedRoutes.map((subpath, index) => {
            const href = "/" + asPathNestedRoutes.slice(0, index + 1).join("/");
            const text = subpath;
            return { href, text }; 
        })
        return [{href: '/', text: 'Home'}, ...crumblist]
    }

    const breadcrumbs = generateBreadcrumbs()
    return (
        <Breadcrumbs className="py-6" separator="›" aria-label="breadcrumb">
            {breadcrumbs.map((crumb, index) => (
                <Crumb {...crumb} key={index} last={index === breadcrumbs.length - 1} />
            ))}
        </Breadcrumbs>
    )
}

function Crumb({text, href, last}: {text: string, href: string, last: boolean}) {
    if (last) {
        return <p className="font-bold">{text}</p>
    }

    return (
        <Link href={href} passHref>
            <a className='text-black'>{text}</a>
        </Link>
    )
}