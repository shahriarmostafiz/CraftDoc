import { getDocuments } from '@/lib/doc';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    const docs = getDocuments()
    const roots = docs.filter(doc => !doc.parent)
    const nonRoots = Object.groupBy(
        docs.filter((doc) => doc.parent),
        ({ parent }) => parent
    );
    console.log({ nonRoots });
    return (
        <nav className="lg:block my-10">
            <ul>
                <div className="relative mt-3 pl-2">
                    <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
                    <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                    <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
                    <ul role="list" className="border-l border-transparent">

                        {
                            roots?.map(root => <li key={root.id} className='relative'>
                                <Link
                                    href={`/docs/${root.id}`}
                                    className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                                >
                                    <span className='truncate'>
                                        {root.title}
                                    </span>
                                </Link>
                                {
                                    nonRoots[root.id] && (<ul role="list" className="border-l border-transparent">
                                        {
                                            nonRoots[root.id].map(subRoot => <li key={subRoot.id} >
                                                <Link
                                                    href={`/docs/${root.id}/${subRoot.id}`}
                                                    className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-900 transition dark:text-white"
                                                >
                                                    <span className='truncate'>
                                                        {subRoot.title}
                                                    </span>
                                                </Link>

                                            </li>)
                                        }
                                    </ul>)
                                }
                            </li>)
                        }
                    </ul>
                </div>
            </ul>
        </nav>



        // <nav className="hidden lg:mt-10 lg:block">
        //     <ul role="list" className="border-l border-transparent">
        //         {/* <li className="relative">
        //             <a
        //                 aria-current="page"
        //                 className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
        //                 href="/docs"
        //             ><span className="truncate">Introduction</span></a
        //             >
        //             <ul role="list" style="opacity: 1">
        //                 <li>
        //                     <a
        //                         className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        //                         href="/docs#guides"
        //                     ><span className="truncate">Guides</span></a
        //                     >
        //                 </li>
        //                 <li>
        //                     <a
        //                         className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        //                         href="/docs#resources"
        //                     ><span className="truncate">Resources</span></a
        //                     >
        //                 </li>
        //                 <li>
        //                     <a
        //                         className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        //                         href="/docs#test"
        //                     ><span className="truncate">Test</span></a
        //                     >
        //                 </li>
        //             </ul>
        //         </li> */}

        //     </ul>
        // </nav>
    );
};

export default Sidebar;