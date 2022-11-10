import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

export default function RestaurantDetailScreen({ route }) {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
}
