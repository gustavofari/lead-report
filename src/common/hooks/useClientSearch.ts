import { useMemo, useState } from "react";
import { escapeRegExp } from "../utils/regexUtils";
import { useDebounce } from "./useDebounce";
import type { Client } from "../../types/crm";

export default function useClientSearch<T extends Client>(rawClients: T[]) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const query = useDebounce(searchTerm, 500);

  const dataFilter = useMemo(() => {
    if (query) {
      const escapedTerm = escapeRegExp(query.trim());
      const searchRegex = new RegExp(escapedTerm, "i");

      const filterClient = rawClients.filter(
        (crm) => searchRegex.test(crm.name) || crm.id.includes(query),
      );

      return filterClient;
    } else {
      return rawClients;
    }
  }, [query, rawClients]);

  return { dataFilter, searchTerm, setSearchTerm };
}
