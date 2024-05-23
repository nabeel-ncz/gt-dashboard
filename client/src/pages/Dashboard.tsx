import axios from "axios";
import Card from "../components/Card/Card";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

export default function Dashboard() {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<{ [key: string]: any }[] | null>(null);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        axios.get(`${BASE_URL}/api/dashboard`).then((res) => {
            console.log(res.data);
            setData(res.data?.data);
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <>
            <div className="w-full min-h-[80vh] pt-10 flex flex-col gap-6">
                <div className="flex items-center justify-between px-6 sm:px-12 lg:px-28">
                    <h2 className="font-bold text-base text-white">Dashboard</h2>
                    <span className="font-light text-xs text-white opacity-60">Dashboard / List</span>
                </div>
                {loading ? (
                    <>
                        <h2 className="font-semibold text-white text-lg">Loading...</h2>
                    </>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-6 px-6 lg:pl-24 lg:pr-14">
                        {(!data || data.length === 0) ? (
                            <>
                                <h2 className="font-semibold text-white text-lg">No data found!</h2>
                            </>
                        ) : (
                            <>
                                {data?.map((item) => (
                                    <Card
                                        title={item.title}
                                        description={item.description}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}
