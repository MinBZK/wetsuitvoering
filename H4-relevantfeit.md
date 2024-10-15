# Toevoegen van juridisch relevant feit
Een andere belangrijke toevoeging in het JRM 2 is het opnemen van de classificatie juridisch relevant feit. Een juridisch relevant feit is een feit dat 
1. in een voorwaarde op een rechtssubject, rechtsbetrekking of rechtsfeit voorkomt, 
2. een onderdeel van een rechtsobject is, en/of
3. invoer of uitvoer is van een afleidingsregel. 

Juridisch relevante feiten worden vaak verward met (waarden van) variabelen zoals genoemd in Wetsanalyse 2021. Er zijn echter essentiële verschillen te benoemen tussen deze twee classificaties. Een variabele is op type-niveau een plek om een waarde vast te leggen op uitvoeringsniveau, waarbij deze waarde kan variëren. In een concreet geval is dit de daadwerkelijke waarde. Denk hierbij bijvoorbeeld aan een jaarinkomen. Het jaarinkomen zelf is een variabele (van het soort bedrag in euro), concrete gevallen hiervan zijn bijvoorbeeld €35.000,- en €28.557,-. Maar van wie zijn deze jaarinkomens? En van welk jaar is dat?

Dit is dus enkel de variabele om de waarde in te schrijven, niet met de samenhang van deze waarde met andere elementen uit het (juridisch) model. In het JAS werd hiervoor dan ook opgenomen tot welk ander element de variabele behoort. Dit was echter niet voldoende, aangezien een variabele ook tot een combinatie van elementen kan behoren, zoals in bovenstaand voorbeeld bij een specifiek rechtssubject en een specifiek kalenderjaar.

Overeenkomstig met verschillende methoden uit gegevensmodelleren is er zodoende behoefte aan een element dat de verbinding beschrijft tussen deze variabelen en andere elementen. Hiervoor is het juridisch relevant feit toegevoegd aan het JRM 2. Met een juridisch relevant feit kunnen de bovenstaande voorbeelden uitgedrukt worden als:
> “De natuurlijk persoon met burgerservicenummer **123456789** heeft een jaarinkomen van **€35.000,-** in het kalenderjaar **2023**.”
>
> “De natuurlijk persoon met burgerservicenummer **123456789** heeft een jaarinkomen van **€28.557,-** in het kalenderjaar **2022**.”

De dik gedrukte elementen zijn de onderdelen van een gegevensrecord.

Op typeniveau worden de twee bovenstaande juridisch relevante feiten beschreven in een juridisch relevant feittype “natuurlijke persoon met BSN <BSN> heeft jaarinkomen <jaarinkomen> in kalenderjaar <kalenderjaar>”. In dit juridisch relevant feittype zijn drie onderdelen te herkennen, “natuurlijke persoon”, “jaarinkomen” en “kalenderjaar”. Ook is het nuttig om aan te geven dat de combinatie van burgerservicenummer en kalenderjaar de bepalende variabelen zijn en jaarinkomen de bepaalde.

Een juridisch relevant feit dient altijd een bepaald doel, het bestaat niet zomaar. Deze juridisch relevante feiten volgen uit voorwaarden op rechtssubjecten, rechtsbetrekkingen of rechtsfeiten, de opbouw van een rechtsobject of invoer of uitvoer van een afleidingsregel. Dus kan het zijn dat een in een voorwaarde opgenomen juridisch relevant feit berekend wordt in een afleidingsregel. Deze afleidingsregel gebruikt dan vaak andere juridisch relevante feiten als invoer.

## Juridisch relevante feiten als opmaat van het gegevensmodel
Het geheel aan juridisch relevante feiten en de elementen die hierin gebruikt worden, kan gezien worden als de opmaat naar het gegevensdeel als onderdeel van het integrale kennismodel. Zo zullen juridisch relevante feiten in Fact Based Modelling (FBM) leiden tot feittypen. In andere gegevensmodelleertechnieken, zoals Entity Relation Modelling (ER), leiden ze tot attribuuttypen van entiteittypen, associaties tussen entiteittypen of attribuuttypen van associatieklassen.

Een juridisch relevant feit benadrukt ook een stuk communicatie, hoe wordt de relatie tussen de verschillende elementen uitgedrukt in de wetgeving en in de wetsuitvoering. Het zorgt dat de betrokken juristen en exact geschoolde mensen (zoals de modelleurs, programmeurs, e.d.) (zonder misverstanden) in dezelfde taal over deze kennis kunnen communiceren. Zo wordt zeker gesteld dat juridische domeinkennis onveranderd (maar mogelijk aangevuld door het MDT) met informatietechnologie aangewend kan worden in de wetsuitvoering.  De overgang naar een FBM-model verloopt dan ook behoorlijk soepel, aangezien ook FBM bedoeld is voor het modelleren van dit soort communicatie.

Bij een directe modellering in bijvoorbeeld ER valt een deel van deze communicatie weg en zal de modelleur zelf heel goed moeten letten op de consistentie van het gegevensmodel met deze juridisch relevante feiten.

Een ander voordeel van het modelleren van de juridisch relevante feittypen in een FBM-model is dat FBM de mogelijkheid biedt om zowel typeniveau van de wetgeving als het niveau van concrete gevallen in de wetsuitvoering integraal te ondersteunen. Hiermee kan het gegevensmodel blijvend gevalideerd worden met de kennishouder (bij Wetsanalyse vaak een jurist), welke wellicht minder goed is in het lezen van gegevensmodellen. Vanuit het FBM-model kan dan, wellicht (deels) geautomatiseerd, waar nodig het gegevensmodel zonder kennisverlies in een andere taal (bijvoorbeeld ER of UML) worden getransformeerd.

## Invulformulieren voor de juridische hoofdelementen
De juridische hoofdelementen kunnen nu geheel beschreven worden door de betreffende gegevens in invulformulieren in te vullen. De bijbehorende namen voor de gegevenselementen zijn mogelijk een beter te begrijpen gegevensmodel dan tot nu toe gebruikt.