# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Una Naumovski

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  [Resident Evil Requiem](https://www.residentevil.com/requiem/en-us/)

  #### Screenshot(s) van de eerste pagina (small screen): 
  Age Form 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="omschrijving van de pagina">
  
<img width="1470" height="838" alt="Screenshot 2025-10-03 at 12 05 54" src="https://github.com/user-attachments/assets/116ff924-8078-483d-8080-e6ed1a0fc542" />

  #### Screenshot(s) van de tweede pagina (small screen):
  Main Page  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="omschrijving van de pagina">
 <img width="1470" height="956" alt="Screenshot 2025-09-12 at 10 07 03" src="https://github.com/user-attachments/assets/fa927d3d-48ff-4ac9-9ede-ab27152e2691" />

</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
- Tekst op de video-achtergrond had soms te weinig contrast, dit heb ik opgelost door een witte tekst en donkere overlay
- Afbeeldingen misten beschrijvingen in de alt attributen
- Video speelt automatisch af zonder geluid, dus ik heb een tekst toegevoegd voor browsers die geen video ondersteunen
- Release date stond eerst in gewone <p en heb deze nu in een <time> element voor betere toegankelijkheid


## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  Breakdown van de pagina
  
  <img src="readme-images/breakdown1.png" width="375px" alt="breakdown van 1/3 van de pagina">
  <img src="readme-images/breakdown2.png" width="375px" alt="breakdown van 1/3 van de pagina">
  <img src="readme-images/breakdown3.png" width="375px" alt="breakdown van 1/3 van de pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
- Eerste layout gemaakt voor de Resident Evil Requiem homepage.
- ik heb alle videos en afbeeldingen gedwonload  
- Begin gemaakt met buttons en links
- gekeken naar kleurcontrasten
  
- CSS positionering en spacing nog lastig te controleren op kleinere schermen
  


  ### Agenda voor meeting
  samen met je groepje opstellen
 Feedback op eerste layout.
  | student 1      |      |  2    | 
  | Bespreken welke        "Voeg meer interactieve elementen toe"
   elementen
  toegankelijker
   moeten worden                             
        | ...                | ...          | ...
 

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

-Ik had alleen mijn breakdownschets klaar en daarop feedback gekregen dat mijn indeling nog naukeuriger kan.



## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
 - Eerste tests met WCAG-checklist, ik he gekeken naar contrast, alt-teksten en buttons.
 Buttons en menu interactief gemaakt met JavaScript. Ook de pijltjes onder de Trailer itetms heb ik interactief gemaakt. Je kunt ook scrollen
 Menu en buttons laten werken via keyboard (tab-focus), expirimenteren met screen reader



  ### Agenda voor meeting
  samen met je groepje opstellen
         
  Student 1: Er werd gezegd
  dat ik meer semantische
  HTML-tags moest gebruiken   
  in plaats van alleen <div>.    

  Student 2: Het testen van kleurcontrasten is essentieel   
  


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen
- Positief: mijn toepassing van de WCAG-checklist was al goed zichtbaar.  
- ...
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
- Eerste echte screenreader-test uitgevoerd met VoiceOver
- Navigatie met Tab en Control+Option getest: header werkte, maar de meeste links werden niet herkend.
- Buttons in de header nu met duidelijke :focus-visible styling met een gele outline.
- Ik heb de headings elementen in de juiste volgorde herschreven voor betere structuur en hyrarchie.
- Ik heb Labels toegevoegd aan invoervelden (first name, last name, e-mail and submit). Zonder labels was het niet toegankelijk voor screenreaders.
- Tekst op de story-pagina was niet altijd even goed leesbaar door de achtergrond. Ik heb daarom de paragrafen meer leesbaar gemaakt door ze een witte achtergrond te geven, dit zorgt voor een betere text contrast en leesbaarheid volgens de WCAG checklist. 



## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was <img width="1470" height="956" alt="Screenshot 2025-10-02 at 17 30 16" src="https://github.com/user-attachments/assets/4ee7bc22-53c3-4fea-afc2-8d79d3384390" /> 
Ik vond de H2 element News ingewikkeld om te coderen 

  


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1"><img width="467" height="672" alt="Screenshot 2025-10-03 at 11 19 24" src="https://github.com/user-attachments/assets/ba108ab2-d4e4-4240-bfb3-6bee79119703" />
<img width="472" height="668" alt="Screenshot 2025-10-03 at 11 00 15" src="https://github.com/user-attachments/assets/68861bfa-fc4a-4bf1-93d3-155e258c8282" />
<img width="471" height="671" alt="Screenshot 2025-10-03 at 10 59 25" src="https://github.com/user-attachments/assets/f4000d05-27c7-415c-bcc5-eb44523b29d9" />
<img width="383" height="551" alt="Screenshot 2025-10-03 at 11 06 33" src="https://github.com/user-attachments/assets/f8c6bcee-570d-4d31-9974-b622a5a3c4b9" />
<img width="383" height="548" alt="Screenshot 2025-10-03 at 11 04 53" src="https://github.com/user-attachments/assets/307bfb70-ba44-4751-8ba2-53287de94f3c" />
<img width="469" height="668" alt="Screenshot 2025-10-03 at 11 15 38" src="https://github.com/user-attachments/assets/c86b7b22-0d1a-45fa-aa92-7e3b7a93f079" />
<img width="471" height="672" alt="Screenshot 2025-10-03 at 11 15 59" src="https://github.com/user-attachments/assets/d8a0a828-f6d6-46a4-9c18-8ec5c7d88805" />
<img width="476" height="673" alt="Screenshot 2025-10-03 at 11 16 11" src="https://github.com/user-attachments/assets/0b673ed9-df34-4721-86d2-4c59fde4d3bb" />
<img width="472" height="668" alt="Screenshot 2025-10-03 at 11 16 42" src="https://github.com/user-attachments/assets/1ded259b-b728-4f91-85b4-4d758f72c0e4" />
<img width="469" height="674" alt="Screenshot 2025-10-03 at 11 17 01" src="https://github.com/user-attachments/assets/7d7b2df6-8dad-4897-a312-cb2c30633322" />
<img width="474" height="672" alt="Screenshot 2025-10-03 at 11 17 13" src="https://github.com/user-attachments/assets/cbe0c007-3d76-4aab-b3b1-76b477c031e4" />
<img width="472" height="669" alt="Screenshot 2025-10-03 at 11 18 12" src="https://github.com/user-attachments/assets/6e8ea64c-f270-4038-8cab-83961e325923" />
<img width="470" height="669" alt="Screenshot 2025-10-03 at 12 17 31" src="https://github.com/user-attachments/assets/8e28c98f-3d35-4b7a-8190-e742aade168a" />




  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes
  - De WCAG-checklist gebruiken om mijn website te verbeteren en toegankelijker te maken.

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  - Het was lastig om de nieuwssectie goed vorm te geven zoals op de originele website.
  - De plaatsing van de Story H2 titel was lastig, omdat die eerst in de header viel en ik ergens in mijn code een overflow: hidden had geplaats en ook een width van 100% waardoor dit overlapte en de layout niet meer klopt. Ik heb dit gefixt door de padding weg te halen, overflow: scroll te maken op de ul items en de width te verlagen naar 80%
  - Ik ben vergeten fotos te maken tijdens het coderen van de website 

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>


### Reflectie op herkansing
Tijdens mijn herkansing heb ik mijn website op meerdere vlakken verbeterd. Als eerste heb ik het contactformulier toegankelijker gemaakt en <label>-elementen gekoppeld aan de invoervelden en CSS-validatie toegepast, waarbij de borders groen of rood worden afhankelijk van de invoer. Dit zorgt niet alleen voor visuele feedback, maar maakt het formulier ook bruikbaar voor screenreaders.
Daarnaast heb ik het navigatiemenu functioneel gemaakt. Het menu opent en sluit nu met een duidelijke knop, en werkt consistent op zowel de homepage als de story-pagina. Dit was een technische uitdaging, omdat ik rekening moest houden met alle verschillende elementen op beide paginas en het lukte steeds niet. 
Op de story-pagina heb ik content toegevoegd en animaties. Ik heb de gameplay pagina van de originele website gebruikt als referentiepunt en gewoon mijn eigen layout gegeven eraan.  De typografie is nu ook overal consistent. Alle knoppen in de header en de content op de story-pagina gebruiken het juiste font (‘Special Elite’).
Tijdens dit proces heb ik veel geleerd over toegankelijkheid en styling. Ik begrijp nu beter hoe je formulieren toegankelijk maakt en hoe je visuele validatie kunt toepassen met pure CSS, zonder JavaScript. Ook heb ik geleerd hoe belangrijk aria-attributes zijn voor gebruikers die navigeren met een toetsenbord of screenreader. Tot slot besef ik hoe essentieel consistente styling is.
Deze herkansing en de feedback die ik heb gekregen heeft me erg geholpen op mijn website te verbeteren.

Wat ik nog wil verbeteren:
- 


## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

1. https://www.w3.org/WAI/WCAG21/quickref/  – WCAG 2.1 Checklist
2. https://css-tricks.com/what-does-playsinline-mean-in-web-video/ – uitleg playsinline
3. https://developer.mozilla.org/en-US/docs/Web/Accessibility – MDN accessibility
4. ChatGPT – hulp bij uitleg en voorbeelden
5. Resident Evil official site – originele content en screenshots


</details>
