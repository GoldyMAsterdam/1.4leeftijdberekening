function berekenLeeftijdInDagen(geboorteDatum) {
    const huidigeDatum = new Date();
    const geboorteDatumObject = new Date(geboorteDatum);
    const verschilInTijd = huidigeDatum - geboorteDatumObject;
    const verschilInDagen = Math.floor(verschilInTijd / (1000 * 60 * 60 * 24));
    return verschilInDagen;
}

const geboorteDatum = '2000-01-01'; 
const leeftijdInDagen = berekenLeeftijdInDagen(geboorteDatum);
console.log(`Je leeftijd in dagen is: ${leeftijdInDagen}`);