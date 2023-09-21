import Link from "next/link";

export default function Button({ children, className, href, hrefTitle, ...props }) {
    let style = props.type || 'p-2 px-4 font-[500]';

    switch (props.type) {
        case 'primary':
            style = 'px-6 py-2 rounded-md bg-primary text-white dark:text-black';
            break;
        case 'secondary':
            style = 'px-6 py-2 border rounded-md';
            break;
    }

    if(!href) {
        return (
            <button
                className={`btn font-[500] ${style} ${className}`}
                {...props}
            >
                {children}
            </button>
        )
    }

    if(href || href.length > 0) {
        return (
            <Link
                href={href}
                title={hrefTitle}
                className={`btn font-[500] ${style} ${className}`}
                {...props}
            >
                {children}
            </Link>
        )
    }
}