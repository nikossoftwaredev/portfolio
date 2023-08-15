import { wikiArticles } from "data/wiki-articles";
import { PageProps } from "types/general";
import ButtonLink from "components/ButtonLink";
import Card from "components/Card";
// import { Metadata } from "next";

const findPreviousArticlePath = (index: number): string => {
  const articleIndex = index === 0 ? wikiArticles.length - 1 : index - 1;
  return wikiArticles[articleIndex].path;
};

const findNextArticlePath = (index: number): string => {
  const articleIndex = index === wikiArticles.length - 1 ? 0 : index + 1;
  return wikiArticles[articleIndex].path;
};

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { article } = params;

//   const articleInfoIndex = wikiArticles.findIndex((sc) => sc.path === article);
//   const articleInfo = wikiArticles[articleInfoIndex ?? 0];

//   const { title, contents, path } = articleInfo;

//   return {
//     title,
//     description: contents[0].sectionContent,
//     openGraph: {
//       images: `https://ichingbalance.gr/images/services/${path}.webp`,
//     },
//   };
// }

// export async function generateStaticParams() {
//   return wikiArticles.map((articleInfo) => ({
//     slug: articleInfo.path,
//   }));
// }

const Page = ({ params }: PageProps) => {
  const { article } = params;

  const articleInfoIndex = wikiArticles.findIndex((sc) => sc.path === article);
  const articleInfo = wikiArticles[articleInfoIndex ?? 0];

  const { title, contents } = articleInfo;
  return (
    <div>
      <section className="w-full flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center gap-2 my-2">
          <ButtonLink
            href={`/scientific-articles/${findPreviousArticlePath(
              articleInfoIndex
            )}`}
          >
            Προηγουμενο
          </ButtonLink>
          <ButtonLink
            href={`/scientific-articles/${findNextArticlePath(
              articleInfoIndex
            )}`}
            variant="accent"
          >
            Επομενο
          </ButtonLink>
        </div>
        <h1 className="text-2xl font-bold uppercase">{title}</h1>
        {contents.map((content) => (
          <Card
            key={content.section}
            className="xl:w-2/4 md:w-3/4 items-center justify-center p-5"
          >
            <section className="font-bold">{content.section}</section>
            <p>{content.sectionContent}</p>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Page;
