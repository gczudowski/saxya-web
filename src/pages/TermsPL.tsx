import { Link } from 'react-router-dom';

export default function TermsPL() {
  return (
    <main className="legal">
      <div className="lang">
        <Link to="/terms-and-conditions-pl">PL</Link>
        <Link to="/terms-and-conditions-en">EN</Link>
      </div>

      <h1>Regulamin (Terms of Service)</h1>
      <p className="meta">Ostatnia aktualizacja: 21 czerwca 2026 r.</p>

      <h2>1. Postanowienia ogólne</h2>
      <p>
        Niniejszy regulamin (<strong>„Regulamin”</strong>) określa zasady korzystania z aplikacji
        mobilnej Saxya, serwisu saxya.com oraz powiązanych usług (łącznie:{' '}
        <strong>„Usługa”</strong>).
      </p>
      <p>
        Operatorem Usługi jest:{' '}
        <strong>[Operator: Saxya — uzupełnij dane spółki: pełna nazwa, siedziba, adres, NIP, KRS]</strong>{' '}
        (dalej: <strong>„Saxya”</strong>, <strong>„my”</strong>).
      </p>
      <p>
        Korzystając z Usługi akceptujesz Regulamin oraz{' '}
        <Link to="/privacy-policy-pl">Politykę prywatności</Link>. Jeżeli się z nimi nie zgadzasz —
        nie korzystaj z Usługi.
      </p>

      <h2>2. Charakter Usługi</h2>
      <p>
        Saxya umożliwia prowadzenie rozmów tekstowych, głosowych (TTS) i obrazkowych z postaciami
        generowanymi przez sztuczną inteligencję, tworzenie własnych postaci i scenariuszy, czaty
        grupowe oraz generowanie obrazów. Treści generowane przez AI mają charakter fikcyjny i
        rozrywkowy — nie są poradą profesjonalną, prawną, medyczną ani finansową.
      </p>

      <h2>3. Wiek i wymagania</h2>
      <ul>
        <li>Z Usługi mogą korzystać wyłącznie osoby, które ukończyły 18 lat.</li>
        <li>Usługa może zawierać treści przeznaczone dla osób pełnoletnich (18+).</li>
        <li>Akceptując Regulamin oświadczasz, że masz ukończone 18 lat i pełną zdolność do czynności prawnych.</li>
      </ul>

      <h2>4. Konto i identyfikator urządzenia</h2>
      <p>
        Saxya nie wymaga rejestracji klasycznego konta. Twoim identyfikatorem jest pseudonimowy
        Device ID generowany lokalnie. Stan Twoich Diamentów, status subskrypcji i wybrane
        ustawienia są powiązane z tym identyfikatorem. Utrata urządzenia, przeinstalowanie
        aplikacji lub wyczyszczenie pamięci lokalnej może uniemożliwić odzyskanie historii rozmów i
        salda Diamentów — przed taką operacją skontaktuj się z nami pod adresem{' '}
        <a href="mailto:support@saxya.com">support@saxya.com</a>.
      </p>

      <h2>5. Subskrypcja Premium</h2>
      <p>
        Saxya oferuje subskrypcję Premium w wariantach: tygodniowym, miesięcznym i rocznym (w tym
        warianty z okresem próbnym oraz oferty intro/promo). Zakres funkcji Premium może się
        zmieniać i jest opisany w aplikacji w momencie zakupu.
      </p>

      <h3>5.1. Zasady płatności i automatyczne odnawianie</h3>
      <ul>
        <li>
          Płatność pobierana jest z Twojego konta Apple ID lub Google Play w momencie potwierdzenia
          zakupu.
        </li>
        <li>
          Subskrypcja <strong>odnawia się automatycznie</strong> na ten sam okres po cenie
          obowiązującej w momencie odnowienia, chyba że anulujesz ją co najmniej 24 godziny przed
          końcem bieżącego okresu rozliczeniowego.
        </li>
        <li>
          Konto zostaje obciążone za odnowienie w ciągu 24 godzin przed końcem bieżącego okresu.
        </li>
        <li>
          Subskrypcję możesz zarządzać i anulować w ustawieniach swojego konta Apple ID / Google
          Play.
        </li>
        <li>
          Niewykorzystana część okresu próbnego (jeśli dotyczy) przepada w momencie zakupu
          subskrypcji.
        </li>
      </ul>

      <h3>5.2. Zwroty</h3>
      <p>
        Zwroty środków za subskrypcje rozpatruje wyłącznie Apple (App Store) lub Google (Google
        Play) zgodnie z ich regulaminami i lokalnymi przepisami. Saxya nie obsługuje zwrotów
        bezpośrednio.
      </p>

      <h2>6. Diamenty</h2>
      <p>
        Diamenty to wirtualna waluta wewnątrz aplikacji, którą można nabyć w paczkach poprzez
        Apple App Store lub Google Play. Diamenty są wykorzystywane do dostępu do wybranych funkcji
        (m.in. generowanie obrazów, treści premium w galerii, dodatkowe wiadomości itp.).
      </p>
      <ul>
        <li>
          Diamenty nie są środkiem płatniczym, nie mają wartości pieniężnej i nie podlegają wymianie
          na pieniądze.
        </li>
        <li>
          Po zaksięgowaniu Diamentów na Twoim Device ID, zakup jest <strong>niezwrotny</strong>,
          z wyjątkiem przypadków wymaganych przez bezwzględnie obowiązujące przepisy prawa.
        </li>
        <li>
          Diamenty są powiązane wyłącznie z aplikacją Saxya i nie mogą być przenoszone między
          użytkownikami ani urządzeniami innymi niż dopuszczone w Usłudze.
        </li>
        <li>
          Saxya zastrzega sobie prawo do zmiany cennika paczek, kosztu funkcji w Diamentach oraz
          parametrów dostępnych funkcji.
        </li>
      </ul>

      <h2>7. Prawo odstąpienia / zgoda na natychmiastowe wykonanie</h2>
      <p>
        Usługa cyfrowa (treści generowane przez AI, dostęp do funkcji Premium, doładowanie
        Diamentów) jest świadczona natychmiast po zakupie. Zgodnie z art. 38 pkt 13 ustawy o prawach
        konsumenta, kupując subskrypcję lub Diamenty wyrażasz wyraźną zgodę na rozpoczęcie
        świadczenia przed upływem 14-dniowego terminu na odstąpienie i przyjmujesz do wiadomości, że
        z tą chwilą tracisz prawo odstąpienia od umowy w zakresie treści już dostarczonych.
      </p>

      <h2>8. Twoje treści (UGC)</h2>
      <ul>
        <li>
          Zachowujesz prawa do treści, które tworzysz w aplikacji (własne postacie, opisy,
          scenariusze, wiadomości).
        </li>
        <li>
          Udzielasz Saxya niewyłącznej, nieodpłatnej, ogólnoświatowej licencji na przetwarzanie tych
          treści w zakresie niezbędnym do świadczenia Usługi (m.in. przekazywanie ich do modeli AI w
          celu wygenerowania odpowiedzi, moderacja, kopie zapasowe, diagnostyka).
        </li>
        <li>
          Oświadczasz, że masz prawo do udostępniania tych treści i nie naruszają one praw osób
          trzecich.
        </li>
      </ul>

      <h2>9. Zakazane zachowania</h2>
      <p>Zabronione jest w szczególności:</p>
      <ul>
        <li>
          tworzenie, udostępnianie lub generowanie treści przedstawiających osoby małoletnie w
          kontekście seksualnym (CSAM) lub jakichkolwiek treści wykorzystujących seksualnie dzieci —
          wykrycie takich prób skutkuje natychmiastowym i bezpowrotnym zablokowaniem konta oraz
          zgłoszeniem do właściwych organów,
        </li>
        <li>
          generowanie treści nielegalnych, nawołujących do przemocy, terroryzmu, samookaleczenia,
          nienawiści rasowej, etnicznej, religijnej lub na tle płci/orientacji,
        </li>
        <li>
          podszywanie się pod konkretne, możliwe do zidentyfikowania, realne osoby bez ich zgody,
        </li>
        <li>
          obchodzenie filtrów moderacji, „jailbreakowanie” modeli AI w celu wymuszenia zakazanych
          treści,
        </li>
        <li>
          ataki na infrastrukturę Usługi, scrapowanie, automatyczne korzystanie z Usługi bez naszej
          zgody,
        </li>
        <li>
          dalsza odsprzedaż dostępu, kont, Diamentów czy treści wygenerowanych w Usłudze.
        </li>
      </ul>

      <h2>10. Moderacja, zawieszenie, zakończenie</h2>
      <p>
        Możemy moderować treści, ograniczać funkcjonalność, zawieszać lub trwale zakończyć dostęp
        do Usługi w razie naruszenia Regulaminu, podejrzenia oszustwa płatniczego lub na żądanie
        organów ścigania. W przypadku trwałego zakończenia dostępu z winy użytkownika, niewykorzystane
        Diamenty i okres subskrypcji <strong>nie podlegają zwrotowi</strong>.
      </p>

      <h2>11. Wyłączenie odpowiedzialności za treści AI</h2>
      <p>
        Treści generowane przez modele AI są fikcyjne, mogą być nieprawdziwe, niespójne, obraźliwe
        lub niezgodne z Twoimi oczekiwaniami. Saxya nie gwarantuje dokładności, kompletności ani
        przydatności treści generowanych przez AI i nie ponosi za nie odpowiedzialności w zakresie
        dopuszczalnym przez prawo. Nie korzystaj z odpowiedzi AI jako porady medycznej, prawnej,
        finansowej ani jako podstawy do decyzji o realnych skutkach.
      </p>

      <h2>12. Reklamacje</h2>
      <p>
        Reklamacje dotyczące funkcjonowania Usługi można składać na adres{' '}
        <a href="mailto:support@saxya.com">support@saxya.com</a>. Reklamację rozpatrzymy w terminie
        do 14 dni od jej otrzymania. W reklamacji prosimy o podanie Device ID i opisu problemu.
      </p>
      <p>
        Reklamacje dotyczące samych transakcji (subskrypcje, zakupy Diamentów) prosimy kierować
        bezpośrednio do Apple lub Google.
      </p>

      <h2>13. Pozasądowe rozwiązywanie sporów</h2>
      <p>
        Konsument ma prawo skorzystać z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia
        roszczeń, w tym z platformy ODR Komisji Europejskiej dostępnej pod adresem{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <h2>14. Prawo właściwe i jurysdykcja</h2>
      <p>
        Regulamin podlega prawu polskiemu. Dla konsumentów nie wyłącza to ochrony przyznanej
        przepisami państwa zamieszkania konsumenta, których nie można wyłączyć w drodze umowy. Spory
        nieuregulowane polubownie rozstrzyga sąd właściwy zgodnie z przepisami.
      </p>

      <h2>15. Zmiany Regulaminu</h2>
      <p>
        Możemy aktualizować Regulamin z ważnych powodów (zmiany prawne, nowe funkcje, względy
        bezpieczeństwa). O zmianach poinformujemy w aplikacji lub mailowo z minimum 14-dniowym
        wyprzedzeniem. Dalsze korzystanie z Usługi po wejściu zmian w życie oznacza ich akceptację.
      </p>

      <h2>16. Kontakt</h2>
      <p>
        Wsparcie: <a href="mailto:support@saxya.com">support@saxya.com</a>
        <br />
        Prywatność: <a href="mailto:privacy@saxya.com">privacy@saxya.com</a>
        <br />
        Operator:{' '}
        <strong>[Operator: Saxya — uzupełnij dane spółki: pełna nazwa, siedziba, adres, NIP, KRS]</strong>
      </p>
    </main>
  );
}
