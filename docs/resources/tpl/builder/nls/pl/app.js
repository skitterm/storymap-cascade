/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Zastosuj",
      "close": "Zamknij"
    },
    "header": {
      "sharingNotAvailable": "Niedostępne do czasu udostępnienia narracji",
      "edit": "Edytuj"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Zakładki",
        "logoSharing": "Logotyp i udostępnianie"
      },
      "bookmarks": {
        "title": "Sekcja",
        "bookmark": "Zakładka",
        "intro": "Zakładki to łącza do sekcji narracji widoczne w nagłówku. Utworzenie podręcznych zakładek do głównych sekcji narracji ułatwia czytelnikom orientację.",
        "sequentialDefault": "Sekcja sekwencyjna (nie znaleziono tekstu)",
        "immersiveDefault": "Sekcja imersyjna (nie znaleziono tekstu)",
        "titleDefault": "Sekcja tytułu (nie znaleziono tekstu)",
        "coverDefault": "Sekcja okładki (nie znaleziono tekstu)",
        "coverAppendage": "(Okładka)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Użyj logotypu ${ESRI}",
        "useOrgLogo": "Użyj logotypu mojej instytucji",
        "useOrgLogoHelp": "Użyj logotypu dostarczonego przez administratora",
        "logoLink": "Łącze do logotypu",
        "logoUploadProgress": "Trwa przesyłanie logotypu",
        "logoUploadSuccess": "Przesłanie logotypu powiodło się",
        "logoUploadError": "Przesłanie logotypu nie powiodło się. Powrót do logotypu ${ESRI}",
        "customHeaderText": "Motto",
        "taglineLinkDisabledTooltip": "Wprowadź motto, aby włączyć łącze",
        "link": "Łącze do motta",
        "enableSocialSharing": "Wyświetl przycisk udostępniania"
      }
    },
    "builderPanel": {
      "coverLabel": "Okładka",
      "creditsLabel": "Kredyty",
      "betaFeedback": "Opinia",
      "betaNote": "Przekaż nam swoją opinię o aplikacji ${APP_NAME} lub poinformuj nas, jeśli jakieś funkcje nie działają zgodnie z oczekiwaniami.",
      "notSharedNote": "Twoja narracja nie jest udostępniana. Tylko Ty ją widzisz",
      "organizationWarning": "Aby się upewnić, że ta narracja może być wyświetlana przez inne osoby, musisz także udostępnić w swojej instytucji jej sceny, warstwy scen i osadzone aplikacje. Mapy i warstwy map są udostępniane automatycznie.",
      "publicWarning": "Aby się upewnić, że ta narracja może być wyświetlana przez inne osoby, musisz także udostępnić publicznie jej sceny, warstwy scen i osadzone aplikacje. Mapy i warstwy map są udostępniane automatycznie.",
      "addTitleNote": "Dodaj tytuł do okładki, aby zapisać",
      "saveError": "Wystąpił błąd podczas zapisywania narracji.",
      "duplicate": "Duplikuj",
      "organize": "Organizuj",
      "done": "Zakończono",
      "invite": "Podczas tworzenia narracji w tym miejscu będą wyświetlane jej sekcje...",
      "mystoriestooltip": "Kreator kaskadowy informuje o błędach znalezionych w narracji i pomaga w ich naprawieniu. Sceny i osadzone aplikacje nie są sprawdzane, dlatego należy je sprawdzić ręcznie."
    },
    "immersiveViewPanel": {
      "transition": "Przejście",
      "fade": "Wygaszanie",
      "fadeSlow": "Wygaszanie powolne",
      "swipeVertical": "Zwijanie pionowe",
      "swipeHorizontal": "Zwijanie poziome",
      "none": "Brak",
      "disabledConsecutiveSameMedia": "Niedostępne, jeśli kolejne widoki korzystają z tych samych multimediów",
      "disabledTooltipMap": "Aby móc skorzystać z tego przejścia, widoczne warstwy w obu widokach muszą być różne, a pozostałe właściwości mapy muszą być takie same",
      "disabledConsecutiveSameMap": "Niedostępne, jeśli kolejne widoki korzystają z tej samej mapy",
      "disabledNotInBeta": "Niedostępne, jeśli kolejne widoki korzystają z tej samej mapy",
      "disabledNonConsecutive": "Niedostępne, ponieważ istnieje inne wystąpienie tych multimediów i nie następują one kolejno po sobie",
      "addMedia": "Dodaj multimedia",
      "invite": "Podczas tworzenia sekcji imersyjnej w tym miejscu będą wyświetlane jej widoki..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Wygląd",
        "manage": "Zarządzaj",
        "size": "Rozmiar",
        "background": "Tło",
        "issues": "Problemy",
        "fixIssues": "Rozwiąż problemy"
      },
      "manage": {
        "changeMedia": "Zmień media",
        "edit": "Edytuj",
        "editAside": "Otwierane na nowej karcie przeglądarki. Po zapisaniu modyfikacji zapisz i wczytaj ponownie tę narrację, aby zobaczyć zmiany.",
        "remove": "Usuń"
      },
      "appearance": {
        "homeView": "Widok początkowy",
        "audio": "Dźwięk",
        "on": "Włącz",
        "muted": "Wyciszony",
        "volumeAside": "Ten materiał wideo zostanie automatycznie odtworzony, kiedy czytelnik otworzy ten widok. Jeśli wyciszysz dźwięk, czytelnik nie będzie mógł go włączyć.",
        "view": "Wyświetl",
        "resetLocation": "Resetuj lokalizację",
        "resetLayers": "Resetuj warstwy",
        "clearPopup": "Wyczyść okno podręczne",
        "interaction": "Interakcja",
        "interactionDisabled": "Interakcja wyłączona",
        "buttonToEnable": "Przycisk do włączania",
        "interactionEnabled": "Interakcja włączona",
        "interactionAside": "*Na urządzeniach dotykowych będzie wyświetlany przycisk interakcji.",
        "slide": "Slajd",
        "noSlides": "Brak dostępnych slajdów.",
        "mapExtentPrompt": "Zaktualizuj mapę, aby zaprezentować narrację. Kliknij znacznik wyboru, aby zapisać zmiany"
      },
      "sectionAppearance": {
        "layout": "Kompozycja",
        "theme": "Motyw"
      },
      "size": {
        "small": "Mały",
        "medium": "Średnie",
        "large": "Duży"
      },
      "background": {
        "noCrop": "Nie przycinaj obrazu",
        "mostImportantPart": "Wybierz najważniejszy punkt",
        "cropExplanationImmersive": "Zaznacz punkt na obrazie, aby wybrać sposób przycięcia obrazu w zależności od różnych rozmiarów ekranu. Wybrany punkt będzie zawsze widoczny. Zaznacz poniższe pole, jeśli multimedia muszą być widoczne w całości.",
        "cropExplanation": "Zaznacz punkt na obrazie, aby wybrać sposób przycięcia obrazu w zależności od różnych rozmiarów ekranu. Wybrany punkt będzie zawsze widoczny.",
        "color": "Kolor",
        "previews": "Widoki podglądu"
      }
    },
    "imageGallery": {
      "addImage": "Dodaj inny obraz",
      "moveBackward": "Wstecz",
      "moveForward": "Dalej"
    },
    "cover": {
      "titlePrompt": "Wprowadź tytuł narracji...",
      "subtitlePrompt": "Przewiń w dół, aby rozpocząć, lub wprowadź opcjonalny podtytuł",
      "mediaPlaceholder": "Dodaj obraz lub film wideo",
      "saveError": "Zapisywanie nie powiodło się. Masz już element o takim tytule"
    },
    "credits": {
      "sectionInvite": "Dodaj sekcję dla udostępniających zasoby",
      "warning": "Oba pola muszą zostać wypełnione",
      "content": "Zasoby...",
      "source": "Źródło...",
      "linkPrompt": "Opcjonalne łącze...",
      "introductionPlaceholder": "Wprowadź opcjonalne wprowadzenie do sekcji dla udostępniających zasoby..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Motyw"
      },
      "panelConfig": {
        "position": "Położenie",
        "theme": "Motyw",
        "size": "Rozmiar",
        "background": "Tło",
        "layout": "Przewijanie (dla wszystkich paneli)"
      }
    },
    "title": {
      "placeholder": "Wpisz tytuł..."
    },
    "media": {
      "imageUpload": "Trwa przesyłanie obrazu...",
      "imageUploadSuccess": "Przesłanie obrazu powiodło się",
      "imageUploadFail": "Przesyłanie obrazu nie powiodło się"
    },
    "controller": {
      "sectionOrganize": "Zorganizowano sekcje",
      "immersiveOrganize": "Zorganizowano widoki",
      "sectionDelete": "Usunięto sekcję",
      "viewDelete": "Usunięto widok"
    },
    "notification": {
      "cancel": "Anuluj",
      "close": "Zamknij",
      "undo": "Cofnij"
    },
    "sections": {
      "sequence": "Sekcja narracji",
      "immersive": "Sekcja imersyjna",
      "title": "Sekcja tytułu"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "image",
        "webmap": "mapa",
        "webscene": "scena",
        "video": "wideo",
        "content": "zasoby",
        "webpage": "strona internetowa"
      },
      "placeholders": {
        "generic": "Te zasoby są niedostępne.",
        "deleted": "Ten typ multimediów (${media-type}) został usunięty.",
        "inaccessible": "Ten typ multimediów (${media-type}) jest niedostępny.",
        "unauthorized": "Nie masz uprawnień do wyświetlania tego typu multimediów (${media-type}).",
        "unshared": "Ten typ multimediów (${media-type}) nie jest udostępniany w taki sam sposób jak narracja.",
        "othersUnshared": "Ten typ multimediów (${media-type}) nie jest udostępniany w taki sam sposób jak narracja.",
        "subscriptionContent": "Ten typ multimediów (${media-type}) zawiera warstwę subskrybenta.",
        "premiumContent": "Ten typ multimediów (${media-type}) zawiera warstwę premium.",
        "secureService": "Ten typ multimediów (${media-type}) zawiera warstwę zabezpieczoną."
      },
      "mapIssues": {
        "fixButton": "Rozwiąż problemy",
        "nofixButton": "Problemy",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Zasoby nieudostępnione",
          "othersUnshared": "Zasoby nieudostępnione innej osoby",
          "subscriptionContent": "Zasoby posiadaczy subskrypcji",
          "premiumContent": "Zasoby Premium",
          "secureContent": "Zasoby zabezpieczone",
          "deleted": "Zasoby usunięte",
          "inaccessible": "Zasoby niedostępne",
          "unauthorized": "Zasoby nieautoryzowane"
        },
        "descriptions": {
          "unshared": "Te zasoby nie są udostępniane w taki sam sposób jak narracja.",
          "othersUnshared": "Te zasoby należą do innej osoby i nie są udostępniane w taki sam sposób jak narracja.",
          "othersUnsharedAuthorized": "Te zasoby należą do innej osoby, ale masz uprawnienia do ich udostępniania.",
          "inaccessible": "Te zasoby są niedostępne.",
          "deleted": "Te zasoby zostały usunięte.",
          "unauthorized": "Nie masz uprawnień do wyświetlania tych zasobów.",
          "popupFeatureLayer": "Okna podręczne warstwy kafelkowej pochodzą z warstwy obiektowej, która nie jest udostępniana w taki sam sposób jak narracja.",
          "subscriptionContent": "Musisz autoryzować zasoby posiadaczy subskrypcji do użytku publicznego.",
          "premiumContent": "Musisz autoryzować zasoby premium do użytku publicznego.",
          "secureService": "Zasoby zabezpieczone nie są dostępne dla czytelników.",
          "missingItemWarning": "Usunięto element powiązany z tą warstwą."
        },
        "tooltips": {
          "unshared": "Kliknij, aby dowiedzieć się więcej na temat udostępniania.",
          "othersUnshared": "Nie masz uprawnień do udostępniania zasobów należących do innych osób. Poproś właściciela o ich udostępnienie, usuń mapę ze swojej narracji lub edytuj mapę w celu usunięcia warstw należących do innych. Kliknij, aby dowiedzieć się więcej na temat edytowania map.",
          "inaccessible": "Usuń tę mapę ze swojej narracji lub edytuj ją, aby usunąć niedostępne warstwy. Kliknij, aby dowiedzieć się więcej na temat edytowania map.",
          "deleted": "Usuń tę mapę ze swojej narracji lub edytuj ją, aby usunąć brakujące warstwy. Kliknij, aby dowiedzieć się więcej na temat edytowania map.",
          "unauthorized": "Usuń tę mapę ze swojej narracji lub edytuj ją, aby usunąć nieautoryzowane warstwy. Kliknij, aby dowiedzieć się więcej na temat edytowania map.",
          "popupFeatureLayer": "Okna podręczne warstwy kafelkowej pochodzą z warstwy obiektowej, która nie jest udostępniana w taki sam sposób jak narracja.",
          "subscriptionContent": "Zasoby posiadaczy subskrypcji nie wykorzystują kredytów. Kliknij, aby dowiedzieć się więcej.",
          "premiumContent": "Kredyty zostaną naliczone dla instytucji za każdym razem, gdy ktoś wyświetli warstwę premium Twojej narracji. Kliknij, aby dowiedzieć się więcej.",
          "secureService": "Usuń zasoby zabezpieczone z narracji lub kliknij, aby dowiedzieć się, jak autoryzować zasoby zabezpieczone w celu użycia ich przez inne osoby.",
          "missingItemWarning": "Ta warstwa nadal działa, ale jej symbole, okna podręczne lub nazwa mogły zostać zmienione. Potwierdź, że warstwa wygląda zgodnie z oczekiwaniami, lub usuń ją z narracji."
        },
        "fixButtons": {
          "share": "Udostępnianie",
          "hide": "Ukryj",
          "authorize": "Autoryzuj",
          "remove": "Usuń",
          "help": "Uzyskaj pomoc",
          "ignore": "Ignoruj",
          "confirm": "Potwierdź",
          "edit": "Edytuj mapę"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Niektóre mapy i warstwy zostały również udostępnione.",
          "alsoSharedMaps": "Niektóre mapy zostały również udostępnione.",
          "alsoSharedLayers": "Niektóre warstwy zostały również udostępnione.",
          "sharedOthersContent": "Użyto uprawnień administracyjnych w celu udostępnienia zasobów należących do innej osoby."
        }
      },
      "storyHealth": {
        "healthy": "Brak problemów",
        "notHealthy": "Rozwiąż problemy",
        "warnings": "Zobacz ostrzeżenia"
      }
    }
  }
});