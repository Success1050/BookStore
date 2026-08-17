# Komplet 5 trgovalnih knjig — nastavitev

## Lokalni zagon

```bash
npm install
npm run dev
```

## Plačilna povezava

V gostovanju dodaj okoljsko spremenljivko:

```text
NEXT_PUBLIC_CHECKOUT_URL=https://tvoja-placilna-povezava
```

Dokler povezava ni dodana, stran obiskovalcu pokaže kratko opozorilo za
nastavitev. Ko je spremenljivka nastavljena, opozorilo samodejno izgine in vsi
glavni nakupni gumbi vodijo na checkout.

## Pred javno objavo zamenjaj

- končno ime in logotip znamke;
- dejanske naslove ter opise vseh petih knjig;
- način oziroma rok dostave;
- podatke prodajalca;
- povezavi do pogojev poslovanja in politike zasebnosti;
- checkout povezavo, odprto prek ustreznega poslovnega računa.

## GitHub

Celotno mapo dodaj v nov GitHub repozitorij. Mape `node_modules`, `.next`,
`dist` in lokalne okoljske datoteke so izključene iz repozitorija. Gostovanje
nato poveži z repozitorijem in dodaj zgornjo okoljsko spremenljivko.

## Preverjanje produkcijske gradnje

```bash
npm run build
```

Gradivo in spletna stran sta izobraževalne narave. Pred javno prodajo preveri
tudi poslovne, potrošniške in davčne zahteve, ki veljajo za tvojega prodajalca
in trg.
