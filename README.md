# saxya-web

Strona saxya.com — minimalna landing + dokumenty prawne dla aplikacji mobilnej Saxya.

## Strony

- `/` — pusta strona główna z napisem `saxya.com`
- `/privacy-policy-pl`
- `/privacy-policy-en`
- `/terms-and-conditions-pl`
- `/terms-and-conditions-en`

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
npm run preview
```

## Deploy

Stack: Vite + React + React Router (SPA, BrowserRouter).
Plik `vercel.json` (Vercel) i `public/_redirects` (Netlify) kierują wszystkie ścieżki do
`index.html`, żeby trasy z react-router działały po odświeżeniu strony.

## ⚠️ Do uzupełnienia przed produkcją

We wszystkich czterech dokumentach prawnych są placeholdery:

```
[Operator: Saxya — uzupełnij dane spółki: pełna nazwa, siedziba, adres, NIP, KRS]
```

Wstaw rzeczywiste dane podmiotu prowadzącego Saxya. Sprawdź też adresy mailowe
(`privacy@saxya.com`, `support@saxya.com`) — muszą faktycznie odbierać wiadomości.
