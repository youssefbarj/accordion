"use client"
import { ChevronUp, MoreHorizontal } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MicroneedlingAccordion() {
  return (
    <div className="min-h-screen bg-[#C3B1E1] px-4 pb-8 pt-0 flex flex-col items-center font-poppins">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 max-w-2xl leading-tight">
        Les informations inscrites sur un planning de rendez-vous
      </h1>

      <div className="w-full max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-none rounded-xl overflow-hidden bg-white shadow-md">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/90 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-gray-800 rounded-full p-1 mr-4 flex items-center justify-center">
                  <ChevronUp className="h-5 w-5 text-white transition-transform duration-200 data-[state=closed]:rotate-180" />
                </div>
                <span className="font-semibold text-lg text-gray-800">Sur un agenda papier</span>
              </div>
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base text-gray-700">
              Les informations sont limitées en raison de l'espace restreint :
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Date du rendez-vous.</li>
                <li>Nom du salarié.</li>
                <li>Nature de la prestation et durée prévue.</li>
                <li>Nom de la cliente.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none rounded-xl overflow-hidden bg-white shadow-md">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/90 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-gray-800 rounded-full p-1 mr-4 flex items-center justify-center">
                  <ChevronUp className="h-5 w-5 text-white transition-transform duration-200 data-[state=closed]:rotate-180" />
                </div>
                <span className="font-semibold text-lg text-gray-800">Sur un logiciel informatique</span>
              </div>
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base text-gray-700">
              Le logiciel offre un espace plus complet permettant de renseigner :
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Date du rendez-vous.</li>
                <li>Nom du salarié.</li>
                <li>Prestation réalisée.</li>
                <li>Nom de la cliente.</li>
                <li>Fiche client détaillée (historique, préférences, remarques...).</li>
                <li>Planning global de tout le personnel et suivi du temps de travail.</li>
                <li>Gestion de l'occupation des cabines.</li>
                <li>Suivi des stocks de produits cabine et vente.</li>
                <li>Planification des formations du personnel.</li>
                <li>Suivi des ventes de produits et prestations, avec bilans journaliers, mensuels ou personnalisés.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none rounded-xl overflow-hidden bg-white shadow-md">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/90 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-gray-800 rounded-full p-1 mr-4 flex items-center justify-center">
                  <ChevronUp className="h-5 w-5 text-white transition-transform duration-200 data-[state=closed]:rotate-180" />
                </div>
                <span className="font-semibold text-lg text-gray-800">Les éléments nécessaires pour prendre un rendez-vous</span>
              </div>
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base text-gray-700">
              Pour assurer une prise de rendez-vous efficace et professionnelle, la praticienne doit disposer de plusieurs outils et informations :
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Un poste téléphonique fonctionnel.</li>
                <li>Un agenda (papier ou électronique).</li>
                <li>Un répertoire téléphonique des clients.</li>
                <li>Un crayon ou un stylo.</li>
                <li>Un système de réservation (papier ou logiciel).</li>
                <li>Le numéro de chambre ou de cabine (si applicable).</li>
                <li>La brochure des prestations disponibles.</li>
                <li>Les informations du client : nom, sexe, nombre de personnes.</li>
                <li>Le type de soin demandé et sa durée.</li>
                <li>La date et l'heure souhaitées.</li>
                <li>Le calendrier des disponibilités.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
