import { Link } from 'react-router-dom';

export default function PrivacyPL() {
  return (
    <main className="legal">
      <div className="lang">
        <Link to="/privacy-policy-pl">PL</Link>
        <Link to="/privacy-policy-en">EN</Link>
      </div>

      <h1>Polityka prywatności</h1>
      <p className="meta">Ostatnia aktualizacja: 21 czerwca 2026 r.</p>

      <p>
        Niniejsza polityka prywatności opisuje, w jaki sposób operator aplikacji Saxya
        (dalej: <strong>„Saxya”</strong>, <strong>„my”</strong>, <strong>„nas”</strong>) przetwarza
        dane osobowe użytkowników aplikacji mobilnej Saxya dostępnej w App Store i Google Play oraz
        strony internetowej saxya.com (dalej łącznie: <strong>„Usługa”</strong>).
      </p>

      <h2>1. Administrator danych</h2>
      <p>
        Administratorem danych osobowych jest:{' '}
        <strong>[Operator: Saxya — uzupełnij dane spółki: pełna nazwa, siedziba, adres, NIP, KRS]</strong>.
        Kontakt w sprawach prywatności:{' '}
        <a href="mailto:privacy@saxya.com">privacy@saxya.com</a>.
      </p>

      <h2>2. Czego dotyczy Usługa</h2>
      <p>
        Saxya to aplikacja mobilna pozwalająca prowadzić rozmowy tekstowe, głosowe i obrazkowe
        z postaciami generowanymi przez sztuczną inteligencję (AI). Aplikacja umożliwia także
        tworzenie własnych postaci i scenariuszy, korzystanie z czatów grupowych, generowanie obrazów,
        rozmów głosowych (TTS), a także zakup subskrypcji <strong>Premium</strong> i wirtualnej waluty
        <strong> „Diamenty”</strong> (jednorazowe zakupy w aplikacji).
      </p>

      <h2>3. Jakie dane przetwarzamy</h2>

      <h3>3.1. Dane podawane przez Ciebie</h3>
      <ul>
        <li>treść Twoich wiadomości na czacie z postaciami AI oraz w czatach grupowych,</li>
        <li>nazwy, opisy i ustawienia tworzonych przez Ciebie postaci i scenariuszy,</li>
        <li>preferencje konfiguracyjne aplikacji (m.in. wybrane głosy, sugestie, język),</li>
        <li>opcjonalne dane przekazywane w ankietach, opiniach i zgłoszeniach do wsparcia,</li>
        <li>adres e-mail, jeśli zapiszesz się na newsletter lub skontaktujesz się z nami.</li>
      </ul>

      <h3>3.2. Dane zbierane automatycznie</h3>
      <ul>
        <li>
          <strong>identyfikator urządzenia (Device ID)</strong> generowany lokalnie i wykorzystywany
          jako Twój pseudonimowy identyfikator w naszej Usłudze (m.in. do prowadzenia salda Diamentów
          i statusu subskrypcji),
        </li>
        <li>kraj i język urządzenia (na podstawie ustawień systemu),</li>
        <li>
          IDFA (iOS) / Advertising ID (Android) — wyłącznie, jeśli wyrazisz na to zgodę w ramach
          systemowego okna App Tracking Transparency (iOS) lub odpowiednich ustawień Android,
        </li>
        <li>
          informacje o modelu urządzenia, systemie operacyjnym, wersji aplikacji, identyfikatorach
          instalacji,
        </li>
        <li>
          zdarzenia analityczne dotyczące korzystania z aplikacji (m.in. uruchomienie, otwarcie czatu,
          wysłanie wiadomości, zakup, użycie Diamentów, ukończenie onboardingu, akceptacja regulaminu,
          aktywacja streaku),
        </li>
        <li>
          logi błędów i diagnostyki (stack trace, kontekst ekranu) w celu wykrywania awarii.
        </li>
      </ul>

      <h3>3.3. Dane dotyczące płatności</h3>
      <p>
        Wszystkie płatności (subskrypcje i Diamenty) są realizowane wyłącznie przez{' '}
        <strong>Apple App Store</strong> lub <strong>Google Play</strong>. Nie otrzymujemy ani nie
        przechowujemy danych Twojej karty płatniczej. Otrzymujemy jedynie identyfikator transakcji,
        identyfikator produktu, kraj zakupu, status subskrypcji oraz potwierdzenie zakupu, niezbędne
        do weryfikacji uprawnień Premium i naliczenia Diamentów.
      </p>

      <h2>4. Cele i podstawy prawne przetwarzania (RODO)</h2>
      <ul>
        <li>
          <strong>świadczenie Usługi</strong> (czaty AI, generowanie obrazów, rozmowy głosowe,
          subskrypcja, Diamenty) — art. 6 ust. 1 lit. b RODO (wykonanie umowy);
        </li>
        <li>
          <strong>bezpieczeństwo i moderacja treści</strong> (wykrywanie nadużyć, treści zakazanych,
          ochrona małoletnich) — art. 6 ust. 1 lit. c i f RODO (obowiązek prawny i prawnie
          uzasadniony interes);
        </li>
        <li>
          <strong>analityka i ulepszanie produktu</strong> — art. 6 ust. 1 lit. f RODO (prawnie
          uzasadniony interes); na urządzeniach iOS dla SDK uznawanych za „tracking” — na podstawie
          Twojej zgody (ATT);
        </li>
        <li>
          <strong>marketing i attribution</strong> (mierzenie skuteczności kampanii, retargeting) —
          Twoja zgoda (art. 6 ust. 1 lit. a RODO);
        </li>
        <li>
          <strong>rozliczenia, reklamacje, dochodzenie roszczeń</strong> — art. 6 ust. 1 lit. c
          i f RODO;
        </li>
        <li>
          <strong>newsletter</strong> — Twoja zgoda (art. 6 ust. 1 lit. a RODO).
        </li>
      </ul>

      <h2>5. Treść rozmów z AI</h2>
      <p>
        Wiadomości, które wysyłasz do postaci AI, są przekazywane do dostawców modeli językowych
        (poniżej, sekcja 7) w celu wygenerowania odpowiedzi. Przekazujemy minimalny niezbędny
        kontekst rozmowy. Treść rozmów może być zapisywana na Twoim urządzeniu (lokalna baza
        SQLite) oraz na naszych serwerach w zakresie niezbędnym do moderacji, wykrywania nadużyć,
        rozliczeń i diagnostyki. Nie wykorzystujemy treści Twoich rozmów do trenowania modeli
        bez Twojej odrębnej zgody.
      </p>

      <h2>6. Treści dla dorosłych i moderacja</h2>
      <p>
        Usługa może udostępniać treści przeznaczone dla osób pełnoletnich (18+). Korzystając z niej
        oświadczasz, że masz ukończone 18 lat. Stosujemy automatyczną moderację treści (filtry
        słów i wzorców) oraz weryfikację po stronie modeli AI w celu blokowania treści zakazanych,
        w szczególności jakichkolwiek treści z udziałem osób małoletnich, treści nielegalnych,
        nawołujących do przemocy lub naruszających prawa osób trzecich. Naruszenia mogą zostać
        zgłoszone do odpowiednich organów.
      </p>

      <h2>7. Odbiorcy danych i podmioty przetwarzające</h2>
      <p>Korzystamy z następujących zaufanych dostawców (procesorów):</p>
      <ul>
        <li>
          <strong>Apple Inc.</strong> i <strong>Google LLC</strong> — dystrybucja aplikacji,
          rozliczenia subskrypcji i zakupów w aplikacji (StoreKit, Google Play Billing);
        </li>
        <li>
          <strong>Google / Firebase</strong> (Google Ireland Ltd) — Firebase Analytics, Remote
          Config, infrastruktura aplikacji;
        </li>
        <li>
          <strong>Meta Platforms Ireland Ltd</strong> — Meta SDK (Facebook SDK) na potrzeby pomiaru
          skuteczności kampanii i atrybucji instalacji;
        </li>
        <li>
          <strong>AppsFlyer Ltd</strong> — atrybucja marketingowa, pomiar kampanii;
        </li>
        <li>
          <strong>TikTok / ByteDance</strong> — TikTok Business SDK do pomiaru kampanii TikTok;
        </li>
        <li>
          <strong>Functional Software, Inc. (Sentry)</strong> — raportowanie awarii i błędów;
        </li>
        <li>
          dostawcy modeli AI (LLM, TTS, generacja obrazów), w tym: <strong>OpenAI</strong>,{' '}
          <strong>Google (Gemini)</strong>, <strong>xAI (Grok)</strong>, <strong>DeepSeek</strong>,{' '}
          <strong>OpenRouter</strong> oraz dostawcy syntezy mowy i generowania obrazów —
          przetwarzają treść Twoich wiadomości i parametry promptu wyłącznie w celu wygenerowania
          odpowiedzi;
        </li>
        <li>
          dostawcy infrastruktury chmurowej i hostingu naszego backendu;
        </li>
        <li>
          dostawcy narzędzi do obsługi klienta i wsparcia.
        </li>
      </ul>

      <h2>8. Transfer poza EOG</h2>
      <p>
        Część odbiorców (m.in. OpenAI, Google, Meta, TikTok, Sentry, AppsFlyer) ma siedzibę poza
        Europejskim Obszarem Gospodarczym, w szczególności w USA. Przekazanie danych poza EOG
        odbywa się na podstawie standardowych klauzul umownych Komisji Europejskiej (SCC), decyzji
        Komisji o adekwatności (m.in. EU-US Data Privacy Framework) lub innych mechanizmów
        przewidzianych w art. 46 RODO.
      </p>

      <h2>9. Okres przechowywania</h2>
      <ul>
        <li>treść rozmów na Twoim urządzeniu — do czasu usunięcia aplikacji lub wyczyszczenia danych;</li>
        <li>dane konta/identyfikatora urządzenia po stronie backendu — do czasu cofnięcia zgody, dezaktywacji konta lub przez okres niezbędny do realizacji Usługi;</li>
        <li>dane rozliczeniowe i podatkowe — przez okres wymagany przepisami (zwykle 5 lat);</li>
        <li>logi błędów — do 90 dni;</li>
        <li>dane analityczne — w okresach retencji ustawianych w narzędziach analitycznych (zwykle do 14–26 miesięcy).</li>
      </ul>

      <h2>10. Twoje prawa</h2>
      <p>Masz prawo do:</p>
      <ul>
        <li>dostępu do swoich danych,</li>
        <li>sprostowania,</li>
        <li>usunięcia („prawo do bycia zapomnianym”),</li>
        <li>ograniczenia przetwarzania,</li>
        <li>przenoszenia danych,</li>
        <li>sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie,</li>
        <li>wycofania zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed wycofaniem),</li>
        <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
      </ul>
      <p>
        Aby zrealizować swoje prawa, napisz na{' '}
        <a href="mailto:privacy@saxya.com">privacy@saxya.com</a>. W treści wiadomości podaj swój
        Device ID, który możesz znaleźć w aplikacji w sekcji „Ustawienia”.
      </p>

      <h2>11. Cookies i pamięć lokalna</h2>
      <p>
        Aplikacja mobilna nie używa cookies w rozumieniu przeglądarkowym, ale przechowuje dane
        lokalnie (AsyncStorage, SQLite) w celu zachowania historii rozmów, preferencji i statusu
        zakupów. Strona saxya.com nie używa plików cookies marketingowych.
      </p>

      <h2>12. Dzieci</h2>
      <p>
        Usługa nie jest skierowana do osób poniżej 18. roku życia. Jeśli dowiemy się, że dane
        osoby małoletniej zostały nam przekazane, niezwłocznie je usuniemy.
      </p>

      <h2>13. Bezpieczeństwo</h2>
      <p>
        Stosujemy adekwatne środki techniczne i organizacyjne, w tym szyfrowanie połączeń (TLS),
        kontrolę dostępu i monitoring bezpieczeństwa. Żaden system nie jest w 100% bezpieczny —
        zachęcamy do ostrożności podczas udostępniania treści wrażliwych w czatach.
      </p>

      <h2>14. Zmiany polityki</h2>
      <p>
        Możemy aktualizować niniejszą politykę. Istotne zmiany ogłosimy w aplikacji lub na stronie
        saxya.com z minimum 14-dniowym wyprzedzeniem.
      </p>

      <h2>15. Kontakt</h2>
      <p>
        E-mail: <a href="mailto:privacy@saxya.com">privacy@saxya.com</a>
        <br />
        Operator:{' '}
        <strong>[Operator: Saxya — uzupełnij dane spółki: pełna nazwa, siedziba, adres, NIP, KRS]</strong>
      </p>
    </main>
  );
}
