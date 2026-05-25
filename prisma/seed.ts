import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

const specialists = [
  {
    name: "Dr. Elena Rivera",
    specialty: "Developmental Pediatrics",
    location: "Paris, FR",
    languages: ["en", "fr"],
    price_range: "€80–120",
    contact_whatsapp: "+33612345678",
    contact_email: "rivera@clinic.fr",
    bio: "15 years working with families navigating new diagnoses.",
    verified: true,
  },
  {
    name: "Dr. James Okafor",
    specialty: "Child Psychology",
    location: "London, UK",
    languages: ["en"],
    price_range: "£60–90",
    contact_whatsapp: "+447911123456",
    contact_email: "okafor@childpsych.co.uk",
    bio: "Specialist in behavioural therapy for children aged 3–12.",
    verified: true,
  },
  {
    name: "Dr. Fatima Rahimi",
    specialty: "Speech and Language Therapy",
    location: "Kabul, AF",
    languages: ["en", "dr"],
    price_range: "$15–20",
    contact_whatsapp: "+93701234567",
    contact_email: "rahimi@hopeclinic.af",
    bio: "Supporting children and families across Afghanistan since 2015.",
    verified: true,
  },
  {
    name: "Dr. Sofia Mendez",
    specialty: "Occupational Therapy",
    location: "Madrid, ES",
    languages: ["en", "fr"],
    price_range: "€50–80",
    contact_whatsapp: "+34612345678",
    contact_email: "mendez@terapia.es",
    bio: "Helping children develop daily living skills through play.",
    verified: true,
  },
  {
    name: "Dr. Amara Diallo",
    specialty: "Child Psychiatry",
    location: "Lyon, FR",
    languages: ["en", "fr"],
    price_range: "€90–130",
    contact_whatsapp: "+33712345678",
    contact_email: "diallo@psychiatrie.fr",
    bio: "Experienced in supporting autistic children and their families.",
    verified: true,
  },
  {
    name: "Dr. Yusuf Hassan",
    specialty: "Applied Behaviour Analysis",
    location: "London, UK",
    languages: ["en", "dr"],
    price_range: "£50–80",
    contact_whatsapp: "+447922345678",
    contact_email: "hassan@abaworks.co.uk",
    bio: "ABA specialist with a gentle, family centred approach.",
    verified: true,
  },
];

const helpStrategies = [
  {
    situation_type: "meltdown",
    language: "en",
    steps: [
      { order: 1, text: "Stay calm. Your calm is contagious." },
      {
        order: 2,
        text: "Reduce noise and visual stimulation around your child.",
      },
      {
        order: 3,
        text: "Give them space — do not restrain unless safety is at risk.",
      },
      { order: 4, text: "Speak slowly and use short simple sentences." },
      {
        order: 5,
        text: "Wait. Recovery takes time. Stay nearby and stay quiet.",
      },
    ],
    source_citation: "NICE CG170 · Autism in under 19s",
  },
  {
    situation_type: "meltdown",
    language: "fr",
    steps: [
      { order: 1, text: "Restez calme. Votre calme est contagieux." },
      { order: 2, text: "Réduisez le bruit et les stimulations visuelles." },
      {
        order: 3,
        text: "Donnez-lui de l'espace — ne le retenez pas sauf danger.",
      },
      {
        order: 4,
        text: "Parlez lentement avec des phrases courtes et simples.",
      },
      {
        order: 5,
        text: "Attendez. La récupération prend du temps. Restez proche.",
      },
    ],
    source_citation: "NICE CG170 · Autisme chez les moins de 19 ans",
  },
  {
    situation_type: "sensory",
    language: "en",
    steps: [
      {
        order: 1,
        text: "Identify the source of overload — sound, light, touch, smell.",
      },
      { order: 2, text: "Remove or reduce the source if possible." },
      { order: 3, text: "Move to a quieter calmer space." },
      {
        order: 4,
        text: "Offer comfort items — weighted blanket, favourite toy.",
      },
      { order: 5, text: "Give time to regulate before speaking." },
    ],
    source_citation: "Autism France · Sensory Processing Guide 2022",
  },
  {
    situation_type: "sensory",
    language: "fr",
    steps: [
      {
        order: 1,
        text: "Identifiez la source de surcharge — son, lumière, toucher, odeur.",
      },
      { order: 2, text: "Supprimez ou réduisez la source si possible." },
      { order: 3, text: "Déplacez-vous vers un espace plus calme." },
      {
        order: 4,
        text: "Proposez des objets réconfortants — couverture lestée, jouet préféré.",
      },
      { order: 5, text: "Laissez du temps pour se réguler avant de parler." },
    ],
    source_citation: "Autism France · Guide de traitement sensoriel 2022",
  },
  {
    situation_type: "transition",
    language: "en",
    steps: [
      { order: 1, text: "Give a 10 minute warning before the transition." },
      { order: 2, text: "Give a 5 minute warning." },
      { order: 3, text: "Use a visual timer if available." },
      { order: 4, text: "Name what is ending and what is coming next." },
      {
        order: 5,
        text: "Acknowledge the difficulty — it is okay to feel upset.",
      },
    ],
    source_citation: "HAS · Recommandations bonnes pratiques 2018",
  },
  {
    situation_type: "transition",
    language: "fr",
    steps: [
      {
        order: 1,
        text: "Donnez un avertissement 10 minutes avant la transition.",
      },
      { order: 2, text: "Donnez un avertissement 5 minutes avant." },
      { order: 3, text: "Utilisez une minuterie visuelle si disponible." },
      { order: 4, text: "Nommez ce qui se termine et ce qui vient ensuite." },
      {
        order: 5,
        text: "Reconnaissez la difficulté — il est normal de se sentir contrarié.",
      },
    ],
    source_citation: "HAS · Recommandations bonnes pratiques 2018",
  },
  {
    situation_type: "school",
    language: "en",
    steps: [
      {
        order: 1,
        text: "Start the morning routine at the same time every day.",
      },
      { order: 2, text: "Use a visual checklist for getting ready steps." },
      { order: 3, text: "Prepare the school bag the night before." },
      {
        order: 4,
        text: "Keep goodbyes short and warm — long goodbyes increase anxiety.",
      },
      {
        order: 5,
        text: "Coordinate with the school on a consistent arrival routine.",
      },
    ],
    source_citation: "NICE CG170 · Autism in under 19s",
  },
  {
    situation_type: "school",
    language: "fr",
    steps: [
      {
        order: 1,
        text: "Commencez la routine matinale à la même heure chaque jour.",
      },
      {
        order: 2,
        text: "Utilisez une liste visuelle pour les étapes de préparation.",
      },
      { order: 3, text: "Préparez le sac scolaire la veille." },
      { order: 4, text: "Gardez les au revoir courts et chaleureux." },
      {
        order: 5,
        text: "Coordonnez avec l'école une routine d'arrivée cohérente.",
      },
    ],
    source_citation: "HAS · Recommandations bonnes pratiques 2018",
  },
  {
    situation_type: "bedtime",
    language: "en",
    steps: [
      {
        order: 1,
        text: "Start the bedtime routine at the same time every night.",
      },
      { order: 2, text: "Dim lights 30 minutes before bed." },
      { order: 3, text: "Remove screens at least 1 hour before sleep." },
      {
        order: 4,
        text: "Use a visual bedtime sequence — bath, pyjamas, book, sleep.",
      },
      { order: 5, text: "Keep your voice low and calm throughout." },
    ],
    source_citation: "Autism France · Sleep Guide for Families 2021",
  },
  {
    situation_type: "bedtime",
    language: "fr",
    steps: [
      {
        order: 1,
        text: "Commencez la routine du coucher à la même heure chaque soir.",
      },
      { order: 2, text: "Tamisez les lumières 30 minutes avant le coucher." },
      {
        order: 3,
        text: "Retirez les écrans au moins 1 heure avant le sommeil.",
      },
      {
        order: 4,
        text: "Utilisez une séquence visuelle — bain, pyjama, livre, sommeil.",
      },
      { order: 5, text: "Gardez votre voix basse et calme tout au long." },
    ],
    source_citation: "Autism France · Guide du sommeil pour les familles 2021",
  },
  {
    situation_type: "other",
    language: "en",
    steps: [
      { order: 1, text: "Take a breath before responding." },
      {
        order: 2,
        text: "Get down to your child's level — eye contact is optional.",
      },
      { order: 3, text: "Use simple clear language." },
      {
        order: 4,
        text: "Give them time to process before expecting a response.",
      },
      { order: 5, text: "Offer a choice to give them a sense of control." },
    ],
    source_citation: "NICE CG170 · Autism in under 19s",
  },
  {
    situation_type: "other",
    language: "fr",
    steps: [
      { order: 1, text: "Prenez une respiration avant de répondre." },
      { order: 2, text: "Mettez-vous au niveau de votre enfant." },
      { order: 3, text: "Utilisez un langage simple et clair." },
      {
        order: 4,
        text: "Donnez-lui le temps de traiter avant d'attendre une réponse.",
      },
      {
        order: 5,
        text: "Proposez un choix pour lui donner un sentiment de contrôle.",
      },
    ],
    source_citation: "HAS · Recommandations bonnes pratiques 2018",
  },
];

const main = async () => {
  console.log("🌿 Seeding database...");

  await prisma.specialist.createMany({ data: specialists });
  console.log("✅ Specialists seeded");

  await prisma.helpStrategy.createMany({ data: helpStrategies });
  console.log("✅ Help strategies seeded");

  console.log("🌿 Done!");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
