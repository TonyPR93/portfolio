import reactImage from "/images/CharlieInvoice.png";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faRocketchat, faJava } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        id: 1,
        name: "Scholar App",
        image: null,
        icon: faSchool,
        description: "Application de gestion pour une école.",
        fullDescription: `
            <p>Scholar App facilite la gestion des élèves, des cours et des examens. Les utilisateurs peuvent être des étudiants, des administrateurs, des professeurs ou du personnel administratif.</p>

            <h2 class='titlefullDesc'>Rôles et Autorisations</h2>

            <p class='subtitle'>Administrateur</p>
            <p>Gérer les cours (ajouter, modifier, supprimer), gérer les modules, ajouter et gérer les professeurs, gérer les informations des étudiants, gérer les réussites, gérer les inscriptions et mettre à jour ses propres informations.</p>

            <p class='subtitle'>Professeur</p>
            <p>Modifier les cours, mettre à jour les modules, gérer ses informations, consulter la liste des étudiants, consulter les réussites et consulter certaines inscriptions.</p>

            <p class='subtitle'>Étudiant</p>
            <p>Consulter la liste des professeurs, mettre à jour ses informations, voir ses résultats et consulter ses inscriptions.</p>

            <p class='subtitle'>Permissions Générales</p>
            <p>Les pages publiques sont accessibles à tous (ex. : /login, /error) et les utilisateurs connectés peuvent accéder aux pages et mettre à jour leurs informations personnelles.</p>

            <h2 class='titlefullDesc'>Stack complète</h2>


             <div class="container">
        <div class="section">
            <p class='subtitle'>Front-end</p>
            <ul class="tech-list">
                <li class="tech-item">Bootstrap</li>
                <li class="tech-item">jQuery</li>
                <li class="tech-item">Thymeleaf</li>
            </ul>
        </div>

        <div class="section">
            <p class='subtitle'>Back-end</p>
            <ul class="tech-list">
                <li class="tech-item">Spring Boot</li>
                <li class="tech-item">Hibernate/JPA</li>
                <li class="tech-item">Spring Security</li>
                <li class="tech-item">H2</li>
                <li class="tech-item">Lombok</li>
            </ul>
        </div>
    </div>
                `,
        stack: ["Java", "Springboot"],
    },
    {
        id: 2,
        name: "Charlie Invoice",
        image: reactImage,
        icon: null,
        description: "Une application qui permet le tri automatiquement des factures.",
        fullDescription: `
            <h2 class='titlefullDesc'>Explications</h2>
            <p>Mon application, Charlie Invoice, a été développée afin de résoudre un problème majeur au sein d'une fiduciaire : le tri manuel des factures.</p>
            <p>En effet, les clients apportent souvent des factures de manière désorganisée, parfois en doublon, que ce soit en main propre ou via le Fid Manager, une application permettant entre autres de déposer des factures en ligne. Charlie Invoice résout ce problème en triant automatiquement les factures d'une entreprise. Cela permet de simplifier la gestion et de gagner du temps sur le traitement manuel.</p><br/>
            <p>Elle permet de gérer les fichiers PDF : par exemple, si un PDF contient plusieurs factures, vous pouvez les scinder en documents distincts.</p><br/>
            <p>Les factures sont ensuite traitées par Azure AI Document Intelligence, qui extrait les informations importantes, ce qui déterminera le type de facture.</p><br/>
            <p>Ces informations apparaissent dans une liste que le comptable peut ajuster si nécessaire. Une fois validées, les factures sont stockées dans une base de données, renommées, et triées dans deux dossiers distincts : l'un pour conserver toutes les analyses effectuées, et l'autre pour faciliter leur encodage via Winbooks et Virtual Invoice.</p><br/>
            <h2 class='titlefullDesc'>Stack complète</h2>
            <div class="container">
                <div class="section">
                    <p class='subtitle'>Front-end</p>
                    <ul class="tech-list">
                        <li class="tech-item">CSS</li>
                        <li class="tech-item">JavaScript</li>
                        <li class="tech-item">JavaFX</li>
                    </ul>
                </div>

                <div class="section">
                    <p class='subtitle'>Back-end</p>
                    <ul class="tech-list">
                        <li class="tech-item">Java</li>
                        <li class="tech-item">Hibernate/JPA</li>
                        <li class="tech-item">Maven</li>
                        <li class="tech-item">H2</li>
                        <li class="tech-item">Azure AI</li>
                    </ul>
                </div>
            </div>
        `,
        stack: ["Java"],
    },
    {
        id: 3,
        name: "IT Logger",
        image: null,
        icon: faRocketchat,
        description: "Application pour suivre les incidents informatiques.",
        fullDescription: `
            <p>IT Logger est une application dédiée à la gestion et au suivi des incidents informatiques au sein d'une organisation.</p><br/>
            <p>Les utilisateurs peuvent signaler des incidents, suivre leur statut et recevoir des notifications lorsque des problèmes sont résolus.</p><br/>
            <p>Avec une interface utilisateur conviviale, IT Logger permet aux équipes IT de gérer les tickets de manière efficace, améliorant ainsi la satisfaction des utilisateurs.</p><br/>
            <p>L'application est construite sur la pile MERN, offrant une expérience fluide tant pour les utilisateurs que pour les administrateurs.</p>
        `,
        stack: ["MERN"],
    }
];

export default projects;
