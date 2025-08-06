"use client"
import { X, Plus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MicroneedlingAccordion() {
  return (
    <div className="min-h-screen bg-[#C3B1E1] px-6 pb-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Bienfaits du Microneedling</h1>

      <div className="w-full max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-none rounded-xl overflow-hidden bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/80">
              <div className="flex items-center">
                <div className="bg-black rounded-full p-1 mr-4 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white accordion-plus" />
                  <X className="h-5 w-5 text-white accordion-x" />
                </div>
                <span className="font-semibold text-lg">Activation du collagène et de l'élastine</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base">
              Imaginez le collagène et l'élastine comme les 'ressorts' de la peau. Avec l'âge, on en produit moins. Le
              microneedling relance cette production naturelle, comme si on redonnait un coup de boost à l'usine de la
              peau. Résultat : une peau plus ferme, plus rebondie, avec moins de rides.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none rounded-xl overflow-hidden bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/80">
              <div className="flex items-center">
                <div className="bg-black rounded-full p-1 mr-4 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white accordion-plus" />
                  <X className="h-5 w-5 text-white accordion-x" />
                </div>
                <span className="font-semibold text-lg">Teint plus lumineux et homogène</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base">
              Fini le teint terne ! En stimulant le renouvellement cellulaire, le microneedling fait remonter des
              cellules fraîches à la surface. C'est comme enlever un voile gris sur la peau - l'éclat naturel revient,
              et le teint devient uniforme.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none rounded-xl overflow-hidden bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/80">
              <div className="flex items-center">
                <div className="bg-black rounded-full p-1 mr-4 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white accordion-plus" />
                  <X className="h-5 w-5 text-white accordion-x" />
                </div>
                <span className="font-semibold text-lg">Les taches pigmentaires s'atténuent</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base">
              Les taches brunes ne partent pas du jour au lendemain, mais le microneedling accélère le processus. En
              renouvelant les couches supérieures de la peau, les cellules pigmentées remontent et s'éliminent plus
              vite. Séance après séance, les taches s'estompent.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-none rounded-xl overflow-hidden bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/80">
              <div className="flex items-center">
                <div className="bg-black rounded-full p-1 mr-4 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white accordion-plus" />
                  <X className="h-5 w-5 text-white accordion-x" />
                </div>
                <span className="font-semibold text-lg">Les pores se resserrent</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base">
              Des pores moins visibles ? C'est possible ! Le microneedling stimule la production de collagène autour des
              pores, ce qui les 'resserre' naturellement. La peau retrouve une texture plus lisse et plus fine.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-none rounded-xl overflow-hidden bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/80">
              <div className="flex items-center">
                <div className="bg-black rounded-full p-1 mr-4 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white accordion-plus" />
                  <X className="h-5 w-5 text-white accordion-x" />
                </div>
                <span className="font-semibold text-lg">Régulation du sébum pour peaux grasses</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base">
              Pour les peaux grasses, c'est un game-changer ! Le microneedling aide à réguler la production de sébum en
              rééquilibrant la peau. Moins de brillances, moins d'imperfections, et une peau qui respire mieux.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-none rounded-xl overflow-hidden bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/80">
              <div className="flex items-center">
                <div className="bg-black rounded-full p-1 mr-4 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white accordion-plus" />
                  <X className="h-5 w-5 text-white accordion-x" />
                </div>
                <span className="font-semibold text-lg">Acné et imperfections progressivement estompées</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0 text-base">
              Patience et régularité ! Le microneedling améliore la texture de la peau, réduit l'inflammation et aide
              les cicatrices d'acné à s'estomper. Chaque séance apporte une amélioration, pour un résultat global plus
              net.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
