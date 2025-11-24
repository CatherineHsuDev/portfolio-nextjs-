import StoryTemplate from "../story-template";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectStoryPage(props: Props) {
  const { slug } = await props.params;

  return <StoryTemplate slug={slug} />;
}
