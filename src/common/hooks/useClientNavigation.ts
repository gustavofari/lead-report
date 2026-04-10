/**
 * useClientNavigation Hook
 * Centralized client navigation logic
 */

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function useClientNavigation() {
  const navigate = useNavigate();

  const goToClientDashboard = useCallback(
    (id: string) => {
      navigate(`/clients/${id}`);
    },
    [navigate],
  );

  const goHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const goToNewClient = useCallback(() => {
    navigate("/clients/new");
  }, [navigate]);

  return {
    goToClientDashboard,
    goHome,
    goToNewClient,
  };
}
