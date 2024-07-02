import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { flexRender, useReactTable, getCoreRowModel, createColumnHelper } from '@tanstack/react-table'

const FeaturedBlogs = () => {
    const { data: blogs, isPending } = useQuery({
        queryKey: ['featured blogs'],
        queryFn: async () => {
            const res = await fetch('https://a11-dev-nook-server.vercel.app/blogs')
            return res.json()
        }
    })

    const topBlogs = blogs?.sort((a, b) => b.long_description.length - a.long_description.length).slice(0, 10)

    const data = useMemo(() => topBlogs, [topBlogs])

    const columnHelper = createColumnHelper()
    const columns = [
        columnHelper.accessor('S.NO', {
            cell: (info) => <span>{info.row.index + 1}</span>,
            header: 'Id'
        }),
        columnHelper.accessor('user_photoURL', {
            cell: (info) => <img className="w-8 h-8 md:w-12 md:h-12 rounded-full " src={info.getValue()} />,
            header: 'Photo'
        }),
        columnHelper.accessor('user_name', {
            cell: (info) => <span>{info.getValue()}</span>,
            header: 'Name'
        }),
        columnHelper.accessor('title', {
            cell: (info) => <span>{info.getValue()}</span>,
            header: 'Title'
        }),
    ]

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

    if (isPending) {
        return <div className="flex justify-center items-center w-full h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    console.log(data);

    return (
        <div className="py-20 px-5 md:px-10 lg:px-20 overflow-x-auto ">
            <div className="text-center  px-5 md:px-0 mb-10 space-y-3">
                <h1 className="text-3xl font-bold ">Top 10 Blogs</h1>
            </div>
            <table className="table">
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => <tr key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>)
                            }
                        </tr>)
                    }
                </thead>
                <tbody>
                    {
                        table.getCoreRowModel().rows.map(row => <tr key={row.id}>
                            {
                                row.getVisibleCells().map(cell => <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>)
                            }
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FeaturedBlogs;