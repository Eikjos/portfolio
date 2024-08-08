import { ListItem } from "@/components/molecules/list-item";
import { Appointment } from "@/components/organims/appointment";
import { Card } from "@/components/templates/card";
import { Presentation } from "@/components/templates/presentation";

export default function Home() {
  return (
    <>
      <div className="absolute top-10 right-1/4 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(80%_0%,91%_92%,50%_100%,4%_50%)]"></div>
      <div className="absolute top-1/2 right-3/4 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="absolute top-1/3 right-1/3 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="absolute top-2/3 left-2/3 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
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
      <div className="my-20">
        <Appointment />
      </div>
      <div className="absolute -bottom-52 right-60 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(80%_0%,91%_92%,50%_100%,4%_50%)]"></div>
      <div className="absolute -bottom-1/2 right-3/4 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="absolute -bottom-32 left-1/3 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="absolute -bottom-2/3 left-2/3 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
    </>
  );
}
