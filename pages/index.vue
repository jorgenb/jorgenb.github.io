<template>
  <div class="container flex-col">
    <p v-for="forum in forums">
      {{ forum.title_clean}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forums: [
		{
			"forumid": 2,
			"title_clean": "Forum for alt mulig",
			"description_clean": "Her kan du poste alt dykkerelatert som ikke passer i en annen kategori.",
			"replycount": 15703
		},
		{
			"forumid": 9,
			"title_clean": "Utstyr",
			"description_clean": "All diskusjon om dykkeutstyr",
			"replycount": 13976
		},
		{
			"forumid": 10,
			"title_clean": "UV Foto/Video",
			"description_clean": "Her diskuteres alt innen undervannsfoto og -video.",
			"replycount": 4873
		},
		{
			"forumid": 11,
			"title_clean": "Teknisk dykking",
			"description_clean": "Teknisk dykking, trimix, dekompresjon osv - her er stedet.",
			"replycount": 2154
		},
		{
			"forumid": 23,
			"title_clean": "Off Topic",
			"description_clean": "Alt som ikke er dykkerelatert",
			"replycount": 1978
		},
		{
			"forumid": 14,
			"title_clean": "Kurserfaringer og reisebrev",
			"description_clean": "Her oppfordres du som har tatt et kurs eller vært på dykketur om å skrive små artikler med erfaringer og opplevelser. Historier herfra vil kunne postes på forsiden av dykkeprat.no",
			"replycount": 1566
		},
		{
			"forumid": 17,
			"title_clean": "Dykkenyheter",
			"description_clean": "Her postes dykkerelaterte nyheter for åpen diskusjon.",
			"replycount": 1518
		},
		{
			"forumid": 12,
			"title_clean": "Rebreather-dykking",
			"description_clean": "Her er stedet for diskusjon rundt trening til og dykking med rebreathere.",
			"replycount": 1424
		},
		{
			"forumid": 52,
			"title_clean": "Dykkerutstyr selges",
			"description_clean": "Her kan du legge ut annonser i form av tråder for dykkerutstyr du har til salgs.",
			"replycount": 1082
		},
		{
			"forumid": 46,
			"title_clean": "Vrakleting og funn",
			"description_clean": "Her kan alt rundt leting etter uoppdagete eller tapte vrak diskuteres.",
			"replycount": 875
		},
		{
			"forumid": 32,
			"title_clean": "Marinbiologi",
			"description_clean": "Forumet for alt som relateres til ikke-menneskelig liv i havet. Har du sett en plante eller en fisk du ikke vet hva er? Dette er forumet for denne type spørsmål.",
			"replycount": 866
		},
		{
			"forumid": 47,
			"title_clean": "Dykkepedia administrasjon",
			"description_clean": "Lukket forum for dykkepedia administrasjon og utvikling",
			"replycount": 775
		},
		{
			"forumid": 45,
			"title_clean": "Søk etter buddy",
			"description_clean": "Her kan du komme i kontakt med andre dykkere som vil dykke med deg.",
			"replycount": 734
		},
		{
			"forumid": 31,
			"title_clean": "Forslagskasse / Brukerstøtte",
			"description_clean": "Har du forslag til forbedringer eller problemer med noen av funksjonene på dykkeprat.no så kan du poste innlegg her.",
			"replycount": 536
		},
		{
			"forumid": 8,
			"title_clean": "Rapporterte innlegg",
			"description_clean": "",
			"replycount": 360
		},
		{
			"forumid": 49,
			"title_clean": "Produktnytt",
			"description_clean": "Her kan firmaer legge ut dykkerelaterte produktnyheter.",
			"replycount": 227
		},
		{
			"forumid": 53,
			"title_clean": "Dykkerutstyr kjøpes",
			"description_clean": "Her kan du legge ut annonser i form av tråder for dykkerutstyr du ønsker å kjøpe.",
			"replycount": 187
		},
		{
			"forumid": 51,
			"title_clean": "Dykkekurs",
			"description_clean": "Her kan instruktører, klubber og dykkesentre poste informasjon om oppsatte kurs. Krav til poster er at de minimum skal inneholde kursnavn, tid, sted, varighet, instruktør, pris (alle priser skal med) og ledige plasser. I tillegg kan det være greit å ta med litt mer info om kursinnhold, forkrav o.l.",
			"replycount": 185
		}
	]
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
