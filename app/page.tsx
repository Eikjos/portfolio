import { ListItem } from "@/components/molecules/list-item";
import { Card } from "@/components/templates/card";
import { Presentation } from "@/components/templates/presentation";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="absolute md:top-10 top-5 md:right-1/4 right-1/2 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(80%_0%,91%_92%,50%_100%,4%_50%)]"></div>
      <div className="absolute top-1/2 right-3/4 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="absolute top-1/3 md:right-1/3 right-2 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="absolute top-2/3 md:left-2/3 -right-0 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="pt-14">
        <Presentation />
        <div className="flex flex-col md:flex-row gap-10 justify-center mt-16 md:w3/4 w-full flex-wrap">
          <Card title="Compétences">
            <ListItem
              title="React"
              imageUrl="assets/React.png"
              imageAlt="Logo React"
            />
            <ListItem
              title="Angular"
              imageUrl="assets/Angular.png"
              imageAlt="Logo Angular"
            />
            <ListItem
              title="React Native"
              imageUrl="assets/React.png"
              imageAlt="Logo React Native"
            />
            <ListItem
              title="Next"
              imageUrl="assets/Next.png"
              imageAlt="Logo Next"
            />
            <ListItem
              title="Tailwind"
              imageUrl="assets/Tailwind.png"
              imageAlt="Logo Tailwind"
            />
            <ListItem
              title="Nest JS"
              imageUrl="assets/Nest.png"
              imageAlt="Logo NestJS"
            />
            <ListItem
              title="Adonis JS"
              imageUrl="assets/AdonisJS.png"
              imageAlt="Logo Adonis JS"
            />
            <ListItem
              title="Spring boot (Kotlin/Java)"
              imageUrl="assets/Spring.png"
              imageAlt="Logo Spring Boot"
            />
            <ListItem
              title="PostgreSQL"
              imageUrl="assets/PostgresSQL.png"
              imageAlt="Logo PostgreSQL"
            />
            <ListItem
              title="Docker"
              imageUrl="assets/Docker.png"
              imageAlt="Logo Docker"
            />
          </Card>
          <Card title="Projets">
            <ListItem
              title="Ollcavis"
              imageUrl="assets//ollcavis.png"
              imageAlt="Logo d'ollcavis"
              description="<h4 class='font-bold text-md mb-2'>Septembre 2023 - Avril 2024</h4>
              <p>Projet réalisé pendant le Master 2 de Génie Informatique et Logiciel consistant
               à créer une plateforme de gestion des avis sur la plateforme Ollca. 
               Réalisé avec une architecture micro-service avec Kafka et Spring boot. 
               Et Angular pour l'application cliente avec développement de web components.</p>"
            />
            <ListItem
              title="Open Observatory"
              imageUrl="assets//open-observatory.png"
              imageAlt="Logo Open Observatory"
              description="<h4 class='font-bold text-md mb-2'>Janvier 2022 - Avril 2023</h4>
              <p>Projet réalisé pendant le Master 1 de Génie Informatique et Logiciel consistant
               à créer une plateforme de partage d'observation d'objet céleste en PWA avec la librarie React. Et Spring Boot pour le développement de l'API.</p>"
            />
          </Card>
          <Card title="Expériences">
            <ListItem
              title="Proxiad Axe Seine"
              imageUrl="assets//proxiad.png"
              imageAlt="Logo Proxiad Axe Seine"
              description="<h4 class='font-bold text-md'>Juin 2023 - aujourd'hui</h4>
              <span class='font-bold text-[10px]'>Stagiaire + Alerternant développeur web et mobile</span>
              <ul class='mt-2 pl-5'>
                <li class='list-disc'>Développement d'application mobile</li>
                <li class='list-disc'>Développement d'API</li>
                <li class='list-disc'>Développement d'application cliente</li>
              </ul>
              "
            />
            <ListItem
              title="FTEL Edition"
              imageUrl="assets//ftel.png"
              imageAlt="Logo FTEL Edition"
              description="<h4 class='font-bold text-md'>Avril 2022 - Mai 2023</h4>
              <span class='font-bold text-[10px]'>Stagiaire + CDD étudiant Développeur web et mobile</span>
              <ul class='mt-2 pl-5'>
                <li class='list-disc'>Développement d'application mobile</li>
                <li class='list-disc'>Test unitaires et d'intégration</li>
                <li class='list-disc'>Développement sur l'application <strong>Pronostic Games</strong></li>
              </ul>
              "
            />
            <ListItem
              title="E.Leclerc"
              imageUrl="assets//leclerc.png"
              imageAlt="Logo E.Leclerc"
              description="<h4 class='font-bold text-md'>Juillet 2019 - Septembre 2022</h4>
              <span class='font-bold text-[10px]'>CDI étudiant Hôte de caisse</span>
              <ul class='mt-2 pl-5'>
                <li class='list-disc'>Relation client (Accueil, caisse, ...)</li>
                <li class='list-disc'>Poste à responsabilité (Responsable station service, manipulation d'argent)</li>
              </ul>
              "
            />
          </Card>
        </div>
      </div>
      {/* <div className="mt-20 md:mb-20 mb-36">
        <Appointment />
      </div> */}
      {/* <div className="absolute hidden md:block -bottom-52 right-60 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(80%_0%,91%_92%,50%_100%,4%_50%)]"></div>
      <div className="absolute hidden md:block -bottom-1/2 right-3/4 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="absolute hidden md:block -bottom-32 left-1/3 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div>
      <div className="absolute hidden md:block -bottom-2/3 left-2/3 -z-10 w-56 h-56 bg-gradient-to-tr from-blue-950 to-secondary rounded-full [clip-path:polygon(20%_0%,91%_20%,50%_100%,4%_50%)]"></div> */}
    </div>
  );
}
