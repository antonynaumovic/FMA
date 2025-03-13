import { title } from "@/components/primitives";
import ContentLayout from "@/layouts/content";
import Segment from "@/components/segment";
import HalfPicture from "@/components/halfpicture";

export default function MentorshipPage() {
  return (
    <ContentLayout text="Mentorship">
      <section className="flex flex-col items-center justify-center gap-4">
        <Segment title="Section 1 Title" uppercase useHeader={false}>
          <div className="flex flex-col flex-wrap mx-4 sm:mx-4">
            <h3 className="text-4xl uppercase font-bold text-pretty sm:text-4xl mb-4">
              Mentorship
            </h3>
            <div className="gap-8 w-full min-h-32">
              <p className="text-xl font-normal text-pretty mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-xl font-normal text-pretty mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </div>
        </Segment>
      </section>
    </ContentLayout>
  );
}