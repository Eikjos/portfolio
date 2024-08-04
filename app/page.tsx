import { ListItem } from "@/components/molecules/list-item";
import { Card } from "@/components/templates/card";
import { Presentation } from "@/components/templates/presentation";

export default function Home() {
  return (
    <>
      <div className="pt-14">
        <Presentation />
        <div className="flex flex-row mx-auto gap-10 w-2/3 justify-center mt-16">
          <Card title="Compétences">
            <ListItem
              title="React"
              imageUrl="/assets/React.png"
              imageAlt="logo"
            />
            <ListItem
              title="Angular"
              imageUrl="/assets/Angular.png"
              imageAlt="logo"
            />
            <ListItem
              title="Next"
              imageUrl="/assets/Next.png"
              imageAlt="logo"
            />
            <ListItem
              title="Tailwind"
              imageUrl="/assets/Tailwind.png"
              imageAlt="logo"
            />
            <ListItem
              title="Nest JS"
              imageUrl="/assets/Nest.png"
              imageAlt="logo"
            />
            <ListItem
              title="Adonis JS"
              imageUrl="/assets/AdonisJS.png"
              imageAlt="logo"
            />
            <ListItem
              title="Spring boot (Kotlin/Java)"
              imageUrl="/assets/Spring.png"
              imageAlt="logo"
            />
            <ListItem
              title="PostgresSQL"
              imageUrl="/assets/PostgresSQL.png"
              imageAlt="logo"
            />
            <ListItem
              title="Docker"
              imageUrl="/assets/Docker.png"
              imageAlt="logo"
            />
          </Card>
          <Card title="Projets">
            <ListItem
              title="React"
              imageUrl="/assets/github.png"
              imageAlt="logo"
            />
          </Card>
          <Card title="Expériences">
            <ListItem
              title="React"
              imageUrl="/assets/github.png"
              imageAlt="logo"
            />
            <ListItem
              title="React"
              imageUrl="/assets/github.png"
              imageAlt="logo"
            />
            <ListItem
              title="React"
              imageUrl="/assets/github.png"
              imageAlt="logo"
            />
          </Card>
        </div>
      </div>
    </>
  );
}
