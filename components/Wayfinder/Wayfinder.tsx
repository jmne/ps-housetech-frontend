// IMPORTS - BUILTINS
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// IMPORTS - HELPERS
import { useEmployees } from "hooks/useEmployees";

// IMPORTS - ASSETS
import styles_wayfinder from "@/components/Wayfinder/Wayfinder.module.scss";
import { useTranslation } from "next-i18next";
import { SearchBar } from "./SearchBar/SearchBar";
import PersonResult from "./PersonResult/PersonResult";
import { CampusMap } from "./Map/Map";

import ArrowDown from "assets/images/icon_arrow_down.svg";

// IMPORTS - CONTEXT
import { usePersonSearchContext } from "context/PersonContext";
import Fuse from "fuse.js";
import { useSearchInputContext } from "context/SearchInputContext";
import { FUZZY_SEARCH_WEIGHTS } from "utils/constants";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";
import { MapProvider } from "context/MapContext";
import { MapElementsProvider } from "context/MapElements";

import * as Card from "@/components/Card";

export function Wayfinder() {
  // Global state of the selected person in the list
  const selectedPersonContext = usePersonSearchContext();
  const searchInputContext = useSearchInputContext();
  const timeoutContext = useTimeoutContext();

  // Translation setup
  const { t } = useTranslation("index");

  const listRef = useRef<HTMLOListElement>(null);

  // Get data for the list of Persons
  const { data: persons, isLoading, error } = useEmployees();
  const [filteredPersons, setFilteredPersons] = useState(persons);
  // Setup fuse for fuzzy search
  const fuse = useMemo(() => {
    if (!persons) return new Fuse([]);
    return new Fuse(persons, FUZZY_SEARCH_WEIGHTS);
  }, [persons]);

  const handleScroll = useCallback(() => {
    if (!listRef.current) return;

    listRef.current.scrollBy({ top: 20, behavior: "smooth" });
  }, [listRef.current]);

  const scrollToTop = useCallback(
    (behavior: any) => {
      if (listRef.current)
        listRef.current.scrollBy({
          top: -listRef.current.scrollTop,
          behavior: behavior
        });
    },
    [listRef.current]
  );

  // Define reset function and add it to the global timeout-handler
  useEffect(() => {
    const resetLayout = () => {
      scrollToTop("smooth");

      const actions = [
        selectedPersonContext.setPerson.bind(null, undefined),
        searchInputContext.setActive.bind(null, false),
        scrollToTop.bind(null),
        searchInputContext.setInput.bind(null, "")
      ];

      actions.forEach((action, index) => {
        setTimeout(() => {
          action();
        }, 500 * index);
      });
    };

    const handler = new IdleHandler({ origin: "wayfinder", resetFunction: resetLayout });
    if (timeoutContext.manager) timeoutContext.manager.addResetListener(handler);
  }, [
    searchInputContext.setActive,
    selectedPersonContext.setPerson,
    searchInputContext.setInput,
    timeoutContext.manager
  ]);

  // When input changes, filter the list of shown persons
  useEffect(() => {
    if (searchInputContext.input === "") {
      setFilteredPersons(persons);
    } else setFilteredPersons(fuse.search(searchInputContext.input).map((e) => e.item));

    setTimeout(() => {
      scrollToTop("instant");
    });
  }, [persons, searchInputContext.input, fuse]);

  // When a person was clicked in the list -> Scroll to the person
  useEffect(() => {
    const contextPerson = selectedPersonContext.current_person;
    const contextPersonElement =
      selectedPersonContext.current_person?.searchResultRef?.current;

    if (
      typeof contextPerson === "undefined" ||
      typeof contextPersonElement === "undefined" ||
      contextPersonElement === null ||
      listRef.current === null
    )
      return;

    requestAnimationFrame(() => {
      if (!listRef.current || !contextPersonElement) return;
      const scroll_by = contextPersonElement.offsetTop - listRef.current.scrollTop - 5;
      listRef.current.scrollBy({ top: scroll_by, behavior: "smooth" });
    });
  }, [selectedPersonContext.current_person]);

  return (
    <MapElementsProvider>
      <MapProvider>
        <Card.Container placement="large" className={styles_wayfinder.container}>
          <div className={styles_wayfinder.searchSection}>
            <SearchBar placeholder={t("wayfinder.title")} />
            {isLoading ? (
              <span>Data is loading...</span>
            ) : error ? (
              <span>Some error...</span>
            ) : undefined}
            {filteredPersons && (
              <ol ref={listRef}>
                {filteredPersons.map((p) => {
                  const unique_id = `${p.cfFirstNames}${p.cfFamilyNames}`;
                  return <PersonResult person={p} key={unique_id} />;
                })}
              </ol>
            )}
            <ArrowDown className={styles_wayfinder.arrowDown} onClick={handleScroll} />
          </div>
          <CampusMap allPersons={persons ? persons : []} />
        </Card.Container>
      </MapProvider>
    </MapElementsProvider>
  );
}
