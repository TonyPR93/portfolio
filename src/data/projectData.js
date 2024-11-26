import reactImage from "/images/CharlieInvoice.png";

import images from "../assets/imagesCI";
import imagesPid from "../assets/imagesPID";
import imagesCK from "../assets/imagesCK";

import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faRocketchat, faJava } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        id: 1,
        name: {
            fr: "Scholar App",
            en: "Scholar App"
        },
        image: null,
        images: imagesPid,
        icon: faSchool,
        description: {
            fr: "Application de gestion pour une école.",
            en: "School management application."
        },
        fullDescription: {
            fr: `
                <p class='textDescModal'>Scholar App aide à gérer les élèves, cours et examens. Administrateurs gèrent les cours, professeurs modifient les cours, et étudiants consultent leurs informations et résultats.</p>
                <p class='expModal'>Les pages publiques sont accessibles à tous, et les utilisateurs connectés peuvent mettre à jour leurs infos.</p>
            `,
            en: `
                <p class='textDescModal'>Scholar App helps manage students, courses, and exams. Administrators manage courses, professors modify them, and students view their information and results.</p>
                <p class='expModal'>Public pages are accessible to everyone, and logged-in users can update their information.</p>
            `
        },
        fullStack: {
            fr: `
                <div class="container">
                    <div class="sectionStack">
                        <p class='subtitle'>Front-end</p>
                        <ul class="tech-list">
                            <li class="tech-item">Bootstrap</li>
                            <li class="tech-item">jQuery</li>
                            <li class="tech-item">Thymeleaf</li>
                        </ul>
                    </div>
                    <div class="sectionStack">
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
            en: `
                <div class="container">
                    <div class="sectionStack">
                        <p class='subtitle'>Front-end</p>
                        <ul class="tech-list">
                            <li class="tech-item">Bootstrap</li>
                            <li class="tech-item">jQuery</li>
                            <li class="tech-item">Thymeleaf</li>
                        </ul>
                    </div>
                    <div class="sectionStack">
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
            `
        },
        stack: ["Java", "Springboot"]
    },
    {
        id: 2,
        name: {
            fr: "Charlie Invoice",
            en: "Charlie Invoice"
        },
        image: reactImage,
        icon: null,
        images: images,
        description: {
            fr: "Une application qui permet le tri automatiquement des factures.",
            en: "An application that automatically sorts invoices."
        },
        fullDescription: {
            fr: `
                <p class='expModal'>Charlie Invoice est une application qui résout le problème du tri manuel des factures dans une fiduciaire, en automatisant leur tri désorganisé, qu'elles soient apportées en main propre ou via Fid Manager.</p>
                <p class='expModal'>Elle permet de scinder les factures multiples d’un même PDF en documents séparés.</p>
                <p class='expModal'>Les données importantes des factures sont extraites automatiquement grâce à Azure AI Document Intelligence et sont classées pour déterminer leur type.</p>
                <p class='expModal'>Le comptable peut ajuster les informations avant validation. Une fois validées, les factures sont stockées, renommées et triées dans des dossiers distincts pour un traitement simplifié avec Winbooks et Virtual Invoice.</p>
            `,
            en: `
                <p class='expModal'>Charlie Invoice is an application that solves the problem of manually sorting invoices in a fiduciary office by automating the disorganized sorting, whether they are brought in person or via Fid Manager.</p>
                <p class='expModal'>It allows splitting multiple invoices from the same PDF into separate documents.</p>
                <p class='expModal'>Important invoice data is automatically extracted using Azure AI Document Intelligence and categorized to determine its type.</p>
                <p class='expModal'>The accountant can adjust the information before validation. Once validated, invoices are stored, renamed, and sorted into separate folders for simplified processing with Winbooks and Virtual Invoice.</p>
            `
        },
        fullStack: {
            fr: `
                <div class="container">
                    <div class="sectionStack">
                        <p class='subtitle'>Front-end</p>
                        <ul class="tech-list">
                            <li class="tech-item">CSS</li>
                            <li class="tech-item">JavaScript</li>
                            <li class="tech-item">JavaFX</li>
                        </ul>
                    </div>
                    <div class="sectionStack">
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
            en: `
                <div class="container">
                    <div class="sectionStack">
                        <p class='subtitle'>Front-end</p>
                        <ul class="tech-list">
                            <li class="tech-item">CSS</li>
                            <li class="tech-item">JavaScript</li>
                            <li class="tech-item">JavaFX</li>
                        </ul>
                    </div>
                    <div class="sectionStack">
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
            `
        },
        stack: ["Java"]
    },
    {
        id: 3,
        name: {
            fr: "Contact Keeper",
            en: "Contact Keeper"
        },
        image: null,
        icon: faRocketchat,
        images: imagesCK,
        description: {
            fr: "Application pour gérer et organiser ses contacts.",
            en: "Application for managing and organizing contacts."
        },
        fullDescription: {
            fr: `
                <p class='expModal'>Contact Keeper est une application dédiée à la gestion et à l'organisation des contacts personnels ou professionnels.</p>
                <p class='expModal'>Les utilisateurs peuvent ajouter, mettre à jour, rechercher et supprimer des contacts, le tout dans une interface simple et intuitive.</p>
                <p class='expModal'>Conçue avec une interface conviviale, cette application facilite la gestion de vos relations et informations importantes.</p>
                <p class='expModal'>L'application repose sur la pile MERN, offrant une expérience fluide et réactive pour tous les utilisateurs.</p>
            `,
            en: `
                <p class='expModal'>Contact Keeper is an application designed to help manage and organize personal or professional contacts.</p>
                <p class='expModal'>Users can add, update, search, and delete contacts, all within a simple and intuitive interface.</p>
                <p class='expModal'>With a user-friendly design, this app makes it easy to manage your relationships and important information.</p>
                <p class='expModal'>The application is built on the MERN stack, providing a seamless and responsive experience for all users.</p>
            `
        },
        fullStack: {
            fr: `
                <div class="container">
                    <div class="sectionStack">
                        <p class='subtitle'>Front-end</p>
                        <ul class="tech-list">
                            <li class="tech-item">React</li>
                        </ul>
                    </div>
                    <div class="sectionStack">
                        <p class='subtitle'>Back-end</p>
                        <ul class="tech-list">
                            <li class="tech-item">Node.js</li>
                            <li class="tech-item">Express.js</li>
                            <li class="tech-item">MongoDB</li>
                        </ul>
                    </div>
                </div>
            `,
            en: `
                <div class="container">
                    <div class="sectionStack">
                        <p class='subtitle'>Front-end</p>
                        <ul class="tech-list">
                            <li class="tech-item">React</li>
                        </ul>
                    </div>
                    <div class="sectionStack">
                        <p class='subtitle'>Back-end</p>
                        <ul class="tech-list">
                            <li class="tech-item">Node.js</li>
                            <li class="tech-item">Express.js</li>
                            <li class="tech-item">MongoDB</li>
                        </ul>
                    </div>
                </div>
            `
        },
        stack: ["React", "Node.js", "MongoDB"]
    },
];

export default projects;
