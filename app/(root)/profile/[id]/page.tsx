import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import { redirect } from "next/navigation";

const Page = async ({ params, searchParams }: ParamsWithSearch) => {
  const { id } = await params;
  const { query, filter } = await searchParams;

  //   const { user, videos } = await getAllVideosByUser(id, query, filter);
  //   if (!user) redirect("/404");

  return (
    <main className="wrapper page">
      <Header
        subHeader="sandra@gmail.com"
        title="Sandra | JS Mastery"
        userImg="/assets/images/dummy.jpg"
      />
      {/* <Header
        subHeader={user?.email}
        title={user?.name}
        userImg={user?.image ?? ""}
      /> */}
      <div className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </div>

      {/* {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video }) => (
            <VideoCard
              key={video.id}
              id={video.videoId}
              title={video.title}
              thumbnail={video.thumbnailUrl}
              createdAt={video.createdAt}
              userImg={user.image ?? ""}
              username={user.name ?? "Guest"}
              views={video.views}
              visibility={video.visibility}
              duration={video.duration}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No Videos Available Yet"
          description="Video will show up here once you upload them."
        />
      )} */}
    </main>
  );
};

export default Page;
