import Card from "../components/Card/Card";

export default function Dashboard() {
    return (
        <>
            <div className="w-full min-h-[80vh] pt-10 flex flex-col gap-6">
                <div className="flex items-center justify-between px-6 sm:px-12 lg:px-28">
                    <h2 className="font-bold text-base text-white">Dashboard</h2>
                    <span className="font-light text-xs text-white opacity-60">Dashboard / List</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-6 px-6 lg:pl-24 lg:pr-14">
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                    <Card
                        title="Components"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    />
                </div>
            </div>
        </>
    )
}
